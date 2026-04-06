// ============================================================
// 신비 타로 - 절기(Solar Terms) 계산 엔진
// Jean Meeus 태양 황경 알고리즘 기반
// ============================================================

// Julian Day Number 계산 (Gregorian calendar)
function getJDN(year, month, day) {
    const a = Math.floor((14 - month) / 12);
    const y = year + 4800 - a;
    const m = month + 12 * a - 3;
    return day + Math.floor((153 * m + 2) / 5) + 365 * y
        + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
}

// JDN → 날짜 변환
function jdnToDate(jdn) {
    const z = Math.floor(jdn + 0.5);
    const a = Math.floor((z - 1867216.25) / 36524.25);
    const A = z + 1 + a - Math.floor(a / 4);
    const B = A + 1524;
    const C = Math.floor((B - 122.1) / 365.25);
    const D = Math.floor(365.25 * C);
    const E = Math.floor((B - D) / 30.6001);
    const day = B - D - Math.floor(30.6001 * E);
    const month = E < 14 ? E - 1 : E - 13;
    const year = month > 2 ? C - 4716 : C - 4715;
    return { year, month, day };
}

// 태양 황경 계산 (Meeus simplified, 정확도 ~0.01°)
function getSolarLongitude(jdn) {
    const T = (jdn - 2451545.0) / 36525.0;

    // 태양 평균 황경
    let L0 = 280.46646 + 36000.76983 * T + 0.0003032 * T * T;

    // 태양 평균 근점이각
    let M = 357.52911 + 35999.05029 * T - 0.0001537 * T * T;
    const Mrad = M * Math.PI / 180;

    // 중심차
    const C = (1.914602 - 0.004817 * T - 0.000014 * T * T) * Math.sin(Mrad)
            + (0.019993 - 0.000101 * T) * Math.sin(2 * Mrad)
            + 0.000289 * Math.sin(3 * Mrad);

    // 겉보기 황경 (장동 보정 포함)
    const omega = 125.04 - 1934.136 * T;
    const omegaRad = omega * Math.PI / 180;
    let lambda = L0 + C - 0.00569 - 0.00478 * Math.sin(omegaRad);

    return ((lambda % 360) + 360) % 360;
}

// 특정 태양 황경에 도달하는 JDN 찾기 (반복법)
function findSolarTermJDN(approxJDN, targetLongitude) {
    let jdn = approxJDN;
    const DEGREES_PER_DAY = 360.0 / 365.2422;

    for (let i = 0; i < 50; i++) {
        const currentLong = getSolarLongitude(jdn);
        let diff = targetLongitude - currentLong;

        // 각도 차이 정규화 (-180 ~ 180)
        if (diff > 180) diff -= 360;
        if (diff < -180) diff += 360;

        if (Math.abs(diff) < 0.0001) break;
        jdn += diff / DEGREES_PER_DAY;
    }

    return jdn;
}

// KST(한국표준시, UTC+9) 기준 날짜로 변환
function solarTermJDNtoKSTDate(jdn) {
    // JDN은 UTC 정오 기준 → KST로 +9시간 보정
    const kstJDN = jdn + 9.0 / 24.0;
    return jdnToDate(Math.floor(kstJDN + 0.5));
}

// 절기 캐시
const _solarTermCache = {};

// 12 월건 절기 정의 (절기만, 중기 제외)
const MONTHLY_TERMS = [
    { name: '입춘', longitude: 315, branch: 2,  approxMonth: 2,  approxDay: 4  },
    { name: '경칩', longitude: 345, branch: 3,  approxMonth: 3,  approxDay: 6  },
    { name: '청명', longitude: 15,  branch: 4,  approxMonth: 4,  approxDay: 5  },
    { name: '입하', longitude: 45,  branch: 5,  approxMonth: 5,  approxDay: 6  },
    { name: '망종', longitude: 75,  branch: 6,  approxMonth: 6,  approxDay: 6  },
    { name: '소서', longitude: 105, branch: 7,  approxMonth: 7,  approxDay: 7  },
    { name: '입추', longitude: 135, branch: 8,  approxMonth: 8,  approxDay: 7  },
    { name: '백로', longitude: 165, branch: 9,  approxMonth: 9,  approxDay: 8  },
    { name: '한로', longitude: 195, branch: 10, approxMonth: 10, approxDay: 8  },
    { name: '입동', longitude: 225, branch: 11, approxMonth: 11, approxDay: 7  },
    { name: '대설', longitude: 255, branch: 0,  approxMonth: 12, approxDay: 7  },
    { name: '소한', longitude: 285, branch: 1,  approxMonth: 1,  approxDay: 6  },
];

// 특정 사주년도의 12 절기 날짜 계산
// sajuYear: 사주 기준 연도 (입춘부터 다음 입춘 전까지)
function getMonthTermDates(sajuYear) {
    const cacheKey = 'month_' + sajuYear;
    if (_solarTermCache[cacheKey]) return _solarTermCache[cacheKey];

    const terms = MONTHLY_TERMS.map((term, idx) => {
        // 소한은 다음 해 1월에 있음
        const calendarYear = (term.name === '소한') ? sajuYear + 1 : sajuYear;
        const approxJDN = getJDN(calendarYear, term.approxMonth, term.approxDay);
        const exactJDN = findSolarTermJDN(approxJDN, term.longitude);
        const kstDate = solarTermJDNtoKSTDate(exactJDN);

        return {
            name: term.name,
            longitude: term.longitude,
            branch: term.branch,
            jdn: getJDN(kstDate.year, kstDate.month, kstDate.day),
            date: kstDate
        };
    });

    _solarTermCache[cacheKey] = terms;
    return terms;
}

// 입춘 날짜 (KST 기준 JDN)
function getIpchunJDN(year) {
    const cacheKey = 'ipchun_' + year;
    if (_solarTermCache[cacheKey]) return _solarTermCache[cacheKey];

    const approxJDN = getJDN(year, 2, 4);
    const exactJDN = findSolarTermJDN(approxJDN, 315);
    const kstDate = solarTermJDNtoKSTDate(exactJDN);
    const result = getJDN(kstDate.year, kstDate.month, kstDate.day);

    _solarTermCache[cacheKey] = result;
    return result;
}

// 생년월일로 사주 연도 판별
function getSajuYear(year, month, day) {
    const birthJDN = getJDN(year, month, day);
    const ipchunJDN = getIpchunJDN(year);

    if (birthJDN < ipchunJDN) {
        return year - 1; // 입춘 전이면 전년도
    }
    return year;
}

// 생년월일로 사주 월(지지) 판별
function getSajuMonthBranch(year, month, day) {
    const sajuYear = getSajuYear(year, month, day);
    const birthJDN = getJDN(year, month, day);
    const terms = getMonthTermDates(sajuYear);

    // 마지막 절기부터 역순으로 검사
    for (let i = terms.length - 1; i >= 0; i--) {
        if (birthJDN >= terms[i].jdn) {
            return {
                branch: terms[i].branch,
                termName: terms[i].name,
                termIndex: i
            };
        }
    }

    // 입춘 이전 (이전 사주년의 축월)
    // 이 경우는 getSajuYear에서 이미 처리되므로 여기 오면 안됨
    // 안전장치로 축월 반환
    return { branch: 1, termName: '소한', termIndex: 11 };
}
