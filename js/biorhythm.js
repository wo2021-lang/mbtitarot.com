/* ============================================
 *  biorhythm.js - 바이오리듬 계산 + 그래프 + 분석
 * ============================================ */
(function () {
  'use strict';

  var CYCLES = { physical: 23, emotional: 28, intellectual: 33 };

  // 생년월일로부터 경과 일수 계산
  function daysSinceBirth(birthStr) {
    var parts = birthStr.split('-');
    var birth = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    birth.setHours(0, 0, 0, 0);
    return Math.floor((today - birth) / (1000 * 60 * 60 * 24));
  }

  // 바이오리듬 값 계산 (-100 ~ +100)
  function calcBio(days, cycle) {
    return Math.round(Math.sin((2 * Math.PI * days) / cycle) * 100);
  }

  // 특정 날짜 오프셋의 바이오리듬
  function getBioForOffset(birthDays, offset) {
    var d = birthDays + offset;
    return {
      physical: calcBio(d, CYCLES.physical),
      emotional: calcBio(d, CYCLES.emotional),
      intellectual: calcBio(d, CYCLES.intellectual)
    };
  }

  // 오늘 바이오리듬
  function getTodayBio(birthStr) {
    var days = daysSinceBirth(birthStr);
    return {
      days: days,
      physical: calcBio(days, CYCLES.physical),
      emotional: calcBio(days, CYCLES.emotional),
      intellectual: calcBio(days, CYCLES.intellectual)
    };
  }

  // 캔버스에 30일 그래프 그리기 (앞 15일 ~ 뒤 15일)
  function drawGraph(canvasId, birthStr) {
    var canvas = document.getElementById(canvasId);
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var W = canvas.width = canvas.parentElement.offsetWidth;
    var H = canvas.height = 220;
    ctx.clearRect(0, 0, W, H);

    var days = daysSinceBirth(birthStr);
    var range = 15; // ±15일
    var total = range * 2 + 1;
    var padL = 35, padR = 10, padT = 20, padB = 30;
    var gW = W - padL - padR;
    var gH = H - padT - padB;
    var midY = padT + gH / 2;
    var stepX = gW / (total - 1);

    // 배경 그리드
    ctx.strokeStyle = 'rgba(255,255,255,0.08)';
    ctx.lineWidth = 1;
    // 가로선 (0%, ±50%)
    [0, 0.25, 0.5, 0.75, 1].forEach(function (r) {
      var y = padT + gH * r;
      ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(W - padR, y); ctx.stroke();
    });

    // Y축 라벨
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.font = '10px sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('+100', padL - 4, padT + 4);
    ctx.fillText('0', padL - 4, midY + 3);
    ctx.fillText('-100', padL - 4, padT + gH + 4);

    // 0 라인 강조
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(padL, midY); ctx.lineTo(W - padR, midY); ctx.stroke();

    // 오늘 세로선
    var todayX = padL + range * stepX;
    ctx.strokeStyle = 'rgba(212,175,55,0.4)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.beginPath(); ctx.moveTo(todayX, padT); ctx.lineTo(todayX, padT + gH); ctx.stroke();
    ctx.setLineDash([]);

    // X축 날짜 라벨 (5일 간격)
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.font = '9px sans-serif';
    ctx.textAlign = 'center';
    for (var i = 0; i < total; i += 5) {
      var offset = i - range;
      var d = new Date();
      d.setDate(d.getDate() + offset);
      var label = (d.getMonth() + 1) + '/' + d.getDate();
      ctx.fillText(label, padL + i * stepX, H - 8);
    }
    // "오늘" 라벨
    ctx.fillStyle = 'rgba(212,175,55,0.7)';
    ctx.font = 'bold 10px sans-serif';
    ctx.fillText('TODAY', todayX, H - 8);

    // 3개 곡선 그리기
    var colors = {
      physical: '#ff6b6b',
      emotional: '#4ecdc4',
      intellectual: '#ffd93d'
    };
    var keys = ['physical', 'emotional', 'intellectual'];

    keys.forEach(function (key) {
      ctx.strokeStyle = colors[key];
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (var i = 0; i < total; i++) {
        var offset = i - range;
        var val = calcBio(days + offset, CYCLES[key]);
        var x = padL + i * stepX;
        var y = midY - (val / 100) * (gH / 2);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // 오늘 값 점
      var todayVal = calcBio(days, CYCLES[key]);
      var dotY = midY - (todayVal / 100) * (gH / 2);
      ctx.fillStyle = colors[key];
      ctx.beginPath();
      ctx.arc(todayX, dotY, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(todayX, dotY, 2, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  // 상태 레벨 판정
  function getLevel(val) {
    var abs = Math.abs(val);
    if (abs <= 10) return 'critical'; // 주의일 (0 근처)
    if (val >= 70) return 'excellent';
    if (val >= 30) return 'good';
    if (val >= 0) return 'normal';
    if (val >= -30) return 'low';
    if (val >= -70) return 'caution';
    return 'poor';
  }

  // 분석 & 조언 생성
  function getAnalysis(bio, langCode) {
    var lang = langCode || 'ko';
    var data = window.BIORHYTHM_I18N;
    if (!data || !data[lang]) lang = 'ko';
    var t = data[lang];

    var pLevel = getLevel(bio.physical);
    var eLevel = getLevel(bio.emotional);
    var iLevel = getLevel(bio.intellectual);

    return {
      physical: {
        value: bio.physical,
        level: pLevel,
        label: t.physical_label,
        analysis: t.physical[pLevel],
        warning: t.physical_warn[pLevel] || ''
      },
      emotional: {
        value: bio.emotional,
        level: eLevel,
        label: t.emotional_label,
        analysis: t.emotional[eLevel],
        warning: t.emotional_warn[eLevel] || ''
      },
      intellectual: {
        value: bio.intellectual,
        level: iLevel,
        label: t.intellectual_label,
        analysis: t.intellectual[iLevel],
        warning: t.intellectual_warn[iLevel] || ''
      },
      advice: generateAdvice(pLevel, eLevel, iLevel, t)
    };
  }

  function generateAdvice(p, e, i, t) {
    // 종합 점수 기반 조언
    var scores = { excellent: 3, good: 2, normal: 1, critical: 0, low: -1, caution: -2, poor: -3 };
    var total = (scores[p] || 0) + (scores[e] || 0) + (scores[i] || 0);

    if (total >= 7) return t.advice_best;
    if (total >= 4) return t.advice_good;
    if (total >= 1) return t.advice_normal;
    if (total >= -2) return t.advice_low;
    return t.advice_rest;
  }

  // 전역 공개
  window.BIORHYTHM = {
    getTodayBio: getTodayBio,
    getBioForOffset: getBioForOffset,
    drawGraph: drawGraph,
    getAnalysis: getAnalysis,
    getLevel: getLevel,
    daysSinceBirth: daysSinceBirth
  };
})();
