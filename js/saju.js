// ============================================================
// 신비 타로 - 사주팔자 계산 엔진 (절기 기반 정밀 버전)
// solar-terms.js 의존
// ============================================================

const CHEONGAN = ['갑','을','병','정','무','기','경','신','임','계'];
const JIJI     = ['자','축','인','묘','진','사','오','미','신','유','술','해'];
const ANIMALS  = ['쥐','소','호랑이','토끼','용','뱀','말','양','원숭이','닭','개','돼지'];
const ANIMALS_EN = ['Rat','Ox','Tiger','Rabbit','Dragon','Snake','Horse','Goat','Monkey','Rooster','Dog','Pig'];
const ANIMALS_I18N = {
  ja: ['ネズミ','ウシ','トラ','ウサギ','龍','ヘビ','ウマ','ヒツジ','サル','トリ','イヌ','イノシシ'],
  es: ['Rata','Buey','Tigre','Conejo','Dragón','Serpiente','Caballo','Cabra','Mono','Gallo','Perro','Cerdo'],
  pt: ['Rato','Boi','Tigre','Coelho','Dragão','Serpente','Cavalo','Cabra','Macaco','Galo','Cão','Porco'],
  fr: ['Rat','Bœuf','Tigre','Lapin','Dragon','Serpent','Cheval','Chèvre','Singe','Coq','Chien','Cochon'],
  de: ['Ratte','Ochse','Tiger','Hase','Drache','Schlange','Pferd','Ziege','Affe','Hahn','Hund','Schwein']
};

const OHENG_OF_CHEONGAN = ['목','목','화','화','토','토','금','금','수','수'];
const YINYANG_OF_CHEONGAN = ['양','음','양','음','양','음','양','음','양','음'];

const OHENG_OF_JIJI = ['수','토','목','목','토','화','화','토','금','금','토','수'];
const YINYANG_OF_JIJI = ['양','음','양','음','양','음','양','음','양','음','양','음'];

const OHENG_COLORS = {
    '목': { main: '#2d8a4e', light: '#4ade80', dark: '#166534', name: 'Wood' },
    '화': { main: '#dc2626', light: '#f87171', dark: '#991b1b', name: 'Fire' },
    '토': { main: '#b45309', light: '#fbbf24', dark: '#78350f', name: 'Earth' },
    '금': { main: '#9ca3af', light: '#e5e7eb', dark: '#4b5563', name: 'Metal' },
    '수': { main: '#2563eb', light: '#60a5fa', dark: '#1e3a8a', name: 'Water' }
};

const OHENG_SYMBOLS = {
    '목': '木', '화': '火', '토': '土', '금': '金', '수': '水'
};

const OHENG_EN = { '목':'Wood', '화':'Fire', '토':'Earth', '금':'Metal', '수':'Water' };
const OHENG_I18N = {
  ja: { '목':'木', '화':'火', '토':'土', '금':'金', '수':'水' },
  es: { '목':'Madera', '화':'Fuego', '토':'Tierra', '금':'Metal', '수':'Agua' },
  pt: { '목':'Madeira', '화':'Fogo', '토':'Terra', '금':'Metal', '수':'Água' },
  fr: { '목':'Bois', '화':'Feu', '토':'Terre', '금':'Métal', '수':'Eau' },
  de: { '목':'Holz', '화':'Feuer', '토':'Erde', '금':'Metall', '수':'Wasser' }
};
const YINYANG_EN = { '양':'Yang', '음':'Yin' };
const YINYANG_I18N = {
  ja: { '양':'陽', '음':'陰' },
  es: { '양':'Yang', '음':'Yin' },
  pt: { '양':'Yang', '음':'Yin' },
  fr: { '양':'Yang', '음':'Yin' },
  de: { '양':'Yang', '음':'Yin' }
};
const PILLAR_NAMES_EN = ['Year Pillar', 'Month Pillar', 'Day Pillar', 'Hour Pillar'];
const PILLAR_NAMES_I18N = {
  ja: ['年柱', '月柱', '日柱', '時柱'],
  es: ['Pilar del Año', 'Pilar del Mes', 'Pilar del Día', 'Pilar de la Hora'],
  pt: ['Pilar do Ano', 'Pilar do Mês', 'Pilar do Dia', 'Pilar da Hora'],
  fr: ['Pilier de l\'Année', 'Pilier du Mois', 'Pilier du Jour', 'Pilier de l\'Heure'],
  de: ['Jahressäule', 'Monatssäule', 'Tagessäule', 'Stundensäule']
};
const YUKCHIN_EN = {
    '비견':'Companion', '겁재':'Rob Wealth', '식신':'Eating God', '상관':'Hurting Officer',
    '편재':'Indirect Wealth', '정재':'Direct Wealth', '편관':'Seven Killings', '정관':'Direct Officer',
    '편인':'Indirect Seal', '정인':'Direct Seal', '본인':'Self'
};
const YUKCHIN_I18N = {
  ja: { '비견':'比肩', '겁재':'劫財', '식신':'食神', '상관':'傷官', '편재':'偏財', '정재':'正財', '편관':'偏官', '정관':'正官', '편인':'偏印', '정인':'正印', '본인':'本人' },
  es: { '비견':'Compañero', '겁재':'Riqueza Robada', '식신':'Dios de Alimento', '상관':'Oficial Herido', '편재':'Riqueza Indirecta', '정재':'Riqueza Directa', '편관':'Siete Matanzas', '정관':'Oficial Directo', '편인':'Sello Indirecto', '정인':'Sello Directo', '본인':'Yo' },
  pt: { '비견':'Companheiro', '겁재':'Riqueza Roubada', '식신':'Deus Alimentar', '상관':'Oficial Ferido', '편재':'Riqueza Indireta', '정재':'Riqueza Direta', '편관':'Sete Matanças', '정관':'Oficial Direto', '편인':'Selo Indireto', '정인':'Selo Direto', '본인':'Eu' },
  fr: { '비견':'Compagnon', '겁재':'Vol de Richesse', '식신':'Dieu Nourricier', '상관':'Officier Blessé', '편재':'Richesse Indirecte', '정재':'Richesse Directe', '편관':'Sept Tueurs', '정관':'Officier Direct', '편인':'Sceau Indirect', '정인':'Sceau Direct', '본인':'Moi' },
  de: { '비견':'Gefährte', '겁재':'Geraubter Reichtum', '식신':'Essensgott', '상관':'Verletzter Beamter', '편재':'Indirekter Reichtum', '정재':'Direkter Reichtum', '편관':'Sieben Tötungen', '정관':'Direkter Beamter', '편인':'Indirektes Siegel', '정인':'Direktes Siegel', '본인':'Ich' }
};

// 다국어 헬퍼 — 현재 언어에 맞게 변환
function getSajuText(key, value, isKo) {
    if (isKo) return value;
    var curLang = window.getLang ? window.getLang() : 'en';
    switch(key) {
        case 'oheng': return (OHENG_I18N[curLang] && OHENG_I18N[curLang][value]) || OHENG_EN[value] || value;
        case 'yinyang': return (YINYANG_I18N[curLang] && YINYANG_I18N[curLang][value]) || YINYANG_EN[value] || value;
        case 'yukchin': return (YUKCHIN_I18N[curLang] && YUKCHIN_I18N[curLang][value]) || YUKCHIN_EN[value] || value;
        case 'animal': {
            var idx = ANIMALS.indexOf(value);
            if (idx < 0) return value;
            return (ANIMALS_I18N[curLang] && ANIMALS_I18N[curLang][idx]) || ANIMALS_EN[idx] || value;
        }
        case 'pillar': {
            var pIdx = ['년주','월주','일주','시주'].indexOf(value);
            if (pIdx < 0) return value;
            return (PILLAR_NAMES_I18N[curLang] && PILLAR_NAMES_I18N[curLang][pIdx]) || PILLAR_NAMES_EN[pIdx] || value;
        }
        default: return value;
    }
}
// 현재 언어 기반 다국어 접근 함수
function getAnimalByLang(idx) { var l = window.getLang ? window.getLang() : 'en'; if (l === 'ko') return ANIMALS[idx]; return (ANIMALS_I18N[l] && ANIMALS_I18N[l][idx]) || ANIMALS_EN[idx]; }
function getOhengByLang(val) { var l = window.getLang ? window.getLang() : 'en'; if (l === 'ko') return val; return (OHENG_I18N[l] && OHENG_I18N[l][val]) || OHENG_EN[val] || val; }
function getYinyangByLang(val) { var l = window.getLang ? window.getLang() : 'en'; if (l === 'ko') return val; return (YINYANG_I18N[l] && YINYANG_I18N[l][val]) || YINYANG_EN[val] || val; }
function getYukchinByLang(val) { var l = window.getLang ? window.getLang() : 'en'; if (l === 'ko') return val; return (YUKCHIN_I18N[l] && YUKCHIN_I18N[l][val]) || YUKCHIN_EN[val] || val; }

function getCheonganCard(idx, isKo) {
    var card = CHEONGAN_CARDS[idx];
    if (!card) return null;
    if (isKo) return { title: card.title, subtitle: card.subtitle, keywords: card.keywords, description: card.description };
    return { title: card.titleEn, subtitle: card.subtitleEn, keywords: card.keywordsEn, description: card.descriptionEn };
}

function getJijiCard(idx, isKo) {
    var card = JIJI_CARDS[idx];
    if (!card) return null;
    if (isKo) return { animal: card.animal, title: card.title, keywords: card.keywords, description: card.description };
    return { animal: card.animalEn, title: card.titleEn, keywords: card.keywordsEn, description: card.descriptionEn };
}

// 오행 생극 관계
const PRODUCES = { '목':'화', '화':'토', '토':'금', '금':'수', '수':'목' };
const OVERCOMES = { '목':'토', '토':'수', '수':'화', '화':'금', '금':'목' };

// 육친
const YUKCHINS = ['비견','겁재','식신','상관','편재','정재','편관','정관','편인','정인'];

function getYukchin(dayStemIdx, targetStemIdx) {
    const dayOheng = OHENG_OF_CHEONGAN[dayStemIdx];
    const dayYY = YINYANG_OF_CHEONGAN[dayStemIdx];
    const targetOheng = OHENG_OF_CHEONGAN[targetStemIdx];
    const targetYY = YINYANG_OF_CHEONGAN[targetStemIdx];
    const samePolarity = (dayYY === targetYY);

    if (dayOheng === targetOheng) return samePolarity ? '비견' : '겁재';
    if (PRODUCES[dayOheng] === targetOheng) return samePolarity ? '식신' : '상관';
    if (OVERCOMES[dayOheng] === targetOheng) return samePolarity ? '편재' : '정재';
    if (OVERCOMES[targetOheng] === dayOheng) return samePolarity ? '편관' : '정관';
    if (PRODUCES[targetOheng] === dayOheng) return samePolarity ? '편인' : '정인';
    return '비견';
}

// ======== 년주 계산 (입춘 기준) ========
function getYearPillar(year, month, day) {
    const sajuYear = getSajuYear(year, month, day);
    const stemIdx = ((sajuYear - 4) % 10 + 10) % 10;
    const branchIdx = ((sajuYear - 4) % 12 + 12) % 12;
    return { stem: stemIdx, branch: branchIdx, sajuYear: sajuYear };
}

// ======== 월주 계산 (절기 기준) ========
function getMonthPillar(year, month, day, yearStemIdx) {
    const monthInfo = getSajuMonthBranch(year, month, day);
    const branchIdx = monthInfo.branch;

    // 월간 계산: 년간에 따른 인월(寅月) 시작 천간
    // 갑/기→병(2), 을/경→무(4), 병/신→경(6), 정/임→임(8), 무/계→갑(0)
    const monthStemStart = ((yearStemIdx % 5) * 2 + 2) % 10;
    const monthOffset = ((branchIdx - 2) + 12) % 12;
    const stemIdx = (monthStemStart + monthOffset) % 10;

    return {
        stem: stemIdx,
        branch: branchIdx,
        termName: monthInfo.termName
    };
}

// ======== 일주 계산 (JDN 기반 정밀 계산) ========
// 공식: sexagenary_index = (JDN + 49) % 60, 0 = 甲子
// stem = (JDN + 9) % 10,  branch = (JDN + 1) % 12
// 검증: 2000-01-01 (JDN=2451545) = 무오(戊午), 2024-01-01 = 갑자(甲子)
function getDayPillar(year, month, day) {
    const jdn = getJDN(year, month, day);
    const stemIdx = (jdn + 9) % 10;
    const branchIdx = (jdn + 1) % 12;
    return { stem: stemIdx, branch: branchIdx };
}

// ======== 시주 계산 ========
function getHourBranch(hour) {
    if (hour === 23 || hour === 0) return 0; // 자시
    return Math.floor((hour + 1) / 2);
}

function getHourPillar(dayStemIdx, hour) {
    const branchIdx = getHourBranch(hour);
    // 시간 천간: 일간에 따른 자시(子時) 시작
    // 갑/기→갑(0), 을/경→병(2), 병/신→무(4), 정/임→경(6), 무/계→임(8)
    const hourStemStarts = [0, 2, 4, 6, 8];
    const startStem = hourStemStarts[dayStemIdx % 5];
    const stemIdx = (startStem + branchIdx) % 10;
    return { stem: stemIdx, branch: branchIdx };
}

// ======== 오행 분석 ========
function analyzeOheng(pillars) {
    const count = { '목': 0, '화': 0, '토': 0, '금': 0, '수': 0 };
    pillars.forEach(p => {
        count[OHENG_OF_CHEONGAN[p.stem]]++;
        count[OHENG_OF_JIJI[p.branch]]++;
    });
    return count;
}

// ======== 전체 사주 계산 ========
function calculateSaju(year, month, day, hour) {
    const yearP = getYearPillar(year, month, day);
    const monthP = getMonthPillar(year, month, day, yearP.stem);
    const dayP = getDayPillar(year, month, day);
    const hourP = getHourPillar(dayP.stem, hour);

    const pillars = [yearP, monthP, dayP, hourP];
    const ohengCount = analyzeOheng(pillars);

    const yukchins = {
        year: getYukchin(dayP.stem, yearP.stem),
        month: getYukchin(dayP.stem, monthP.stem),
        day: '본인',
        hour: getYukchin(dayP.stem, hourP.stem)
    };

    const sortedOheng = Object.entries(ohengCount).sort((a, b) => b[1] - a[1]);

    return {
        pillars,
        pillarNames: ['년주', '월주', '일주', '시주'],
        ohengCount,
        yukchins,
        strongest: sortedOheng[0],
        weakest: sortedOheng[sortedOheng.length - 1],
        dayMaster: {
            stem: dayP.stem,
            oheng: OHENG_OF_CHEONGAN[dayP.stem],
            yinyang: YINYANG_OF_CHEONGAN[dayP.stem]
        },
        sajuYear: yearP.sajuYear,
        monthTerm: monthP.termName,
        yearPillar: { stem: CHEONGAN[yearP.stem], branch: JIJI[yearP.branch], full: CHEONGAN[yearP.stem] + JIJI[yearP.branch] },
        monthPillar: { stem: CHEONGAN[monthP.stem], branch: JIJI[monthP.branch], full: CHEONGAN[monthP.stem] + JIJI[monthP.branch] },
        dayPillar: { stem: CHEONGAN[dayP.stem], branch: JIJI[dayP.branch], full: CHEONGAN[dayP.stem] + JIJI[dayP.branch] },
        hourPillar: { stem: CHEONGAN[hourP.stem], branch: JIJI[hourP.branch], full: CHEONGAN[hourP.stem] + JIJI[hourP.branch] }
    };
}

// 천간 카드 데이터
const CHEONGAN_CARDS = [
    { id:'cg_gap', name:'갑', hanja:'甲', element:'목', yinyang:'양', title:'시작의 나무', subtitle:'큰 나무, 지도자', symbol:'🌳', keywords:['리더십','시작','성장','곧은 의지'], description:'거대한 나무처럼 우뚝 선 기운. 새로운 시작과 성장의 에너지를 품고 있습니다.',
      titleEn:'Tree of New Beginnings', subtitleEn:'The Great Tree, The Leader', keywordsEn:['Leadership','New Beginnings','Growth','Unyielding Will'], descriptionEn:'An energy that stands tall like a mighty tree. It holds within it the power of fresh starts and boundless growth.' },
    { id:'cg_eul', name:'을', hanja:'乙', element:'목', yinyang:'음', title:'유연한 덩굴', subtitle:'풀, 유연함', symbol:'🌿', keywords:['적응력','부드러움','인내','예술'], description:'바람에 흔들려도 꺾이지 않는 풀의 기운. 유연함 속에 강인함이 있습니다.',
      titleEn:'The Flexible Vine', subtitleEn:'Grass, Adaptability', keywordsEn:['Adaptability','Gentleness','Perseverance','Artistry'], descriptionEn:'The spirit of grass that sways in the wind yet never breaks. Within its flexibility lies an unbreakable strength.' },
    { id:'cg_byeong', name:'병', hanja:'丙', element:'화', yinyang:'양', title:'태양의 불꽃', subtitle:'태양, 열정', symbol:'☀️', keywords:['열정','밝음','에너지','화려함'], description:'만물을 비추는 태양의 기운. 넘치는 열정과 밝은 에너지로 주변을 환하게 합니다.',
      titleEn:'Flame of the Sun', subtitleEn:'The Sun, Passion', keywordsEn:['Passion','Radiance','Energy','Brilliance'], descriptionEn:'The energy of the sun that illuminates all creation. Overflowing passion and radiant energy brighten everything around it.' },
    { id:'cg_jeong', name:'정', hanja:'丁', element:'화', yinyang:'음', title:'촛불의 지혜', subtitle:'촛불, 섬세함', symbol:'🕯️', keywords:['지혜','섬세함','따뜻함','집중'], description:'어둠을 밝히는 촛불의 기운. 고요하지만 깊은 지혜와 통찰을 지닙니다.',
      titleEn:'Wisdom of the Candle', subtitleEn:'Candlelight, Delicacy', keywordsEn:['Wisdom','Sensitivity','Warmth','Focus'], descriptionEn:'The spirit of a candle that illuminates the darkness. Quiet, yet possessing profound wisdom and piercing insight.' },
    { id:'cg_mu', name:'무', hanja:'戊', element:'토', yinyang:'양', title:'큰 산의 무게', subtitle:'산, 안정', symbol:'⛰️', keywords:['안정','신뢰','포용','중심'], description:'태산처럼 묵직한 기운. 흔들리지 않는 안정감과 넓은 포용력을 가졌습니다.',
      titleEn:'Weight of the Great Mountain', subtitleEn:'Mountain, Stability', keywordsEn:['Stability','Trust','Embrace','Centeredness'], descriptionEn:'An energy as immovable as a great mountain. It carries unshakable stability and a vast, generous embrace.' },
    { id:'cg_gi', name:'기', hanja:'己', element:'토', yinyang:'음', title:'기름진 대지', subtitle:'밭, 양육', symbol:'🌾', keywords:['양육','실용','겸손','생산'], description:'만물을 품고 키우는 대지의 기운. 실용적이고 착실한 성장을 이끕니다.',
      titleEn:'The Fertile Earth', subtitleEn:'Field, Nurturing', keywordsEn:['Nurturing','Practicality','Humility','Productivity'], descriptionEn:'The spirit of the earth that holds and nourishes all living things. It guides practical, steady, and fruitful growth.' },
    { id:'cg_gyeong', name:'경', hanja:'庚', element:'금', yinyang:'양', title:'강철의 의지', subtitle:'칼, 결단', symbol:'⚔️', keywords:['결단','정의','강인함','변혁'], description:'벼려진 칼날의 기운. 날카로운 판단력과 강한 결단력으로 길을 엽니다.',
      titleEn:'Will of Steel', subtitleEn:'Blade, Resolve', keywordsEn:['Decisiveness','Justice','Fortitude','Transformation'], descriptionEn:'The energy of a tempered blade. It carves a path forward with sharp judgment and unwavering determination.' },
    { id:'cg_sin', name:'신', hanja:'辛', element:'금', yinyang:'음', title:'빛나는 보석', subtitle:'보석, 정교', symbol:'💎', keywords:['정교함','예민함','아름다움','고귀'], description:'다듬어진 보석의 기운. 섬세한 감각과 높은 심미안을 지녔습니다.',
      titleEn:'The Luminous Jewel', subtitleEn:'Gemstone, Refinement', keywordsEn:['Precision','Sensitivity','Beauty','Nobility'], descriptionEn:'The spirit of a polished gem. It possesses a refined sensibility and an exquisite sense of aesthetics.' },
    { id:'cg_im', name:'임', hanja:'壬', element:'수', yinyang:'양', title:'대해의 흐름', subtitle:'바다, 지혜', symbol:'🌊', keywords:['지혜','포용','흐름','깊이'], description:'거대한 바다의 기운. 모든 것을 품는 넓은 포용력과 깊은 지혜를 가졌습니다.',
      titleEn:'Flow of the Great Ocean', subtitleEn:'Sea, Wisdom', keywordsEn:['Wisdom','Embrace','Flow','Depth'], descriptionEn:'The energy of the vast ocean. It holds boundless generosity that embraces all things and wisdom of unfathomable depth.' },
    { id:'cg_gye', name:'계', hanja:'癸', element:'수', yinyang:'음', title:'이슬의 영감', subtitle:'이슬, 직감', symbol:'💧', keywords:['직감','영감','순수','치유'], description:'맑은 이슬의 기운. 뛰어난 직감과 영적 감수성으로 본질을 꿰뚫습니다.',
      titleEn:'Inspiration of the Dew', subtitleEn:'Dewdrop, Intuition', keywordsEn:['Intuition','Inspiration','Purity','Healing'], descriptionEn:'The spirit of clear morning dew. With extraordinary intuition and spiritual sensitivity, it perceives the very essence of things.' }
];

// 천간 카드 다국어 데이터
const CHEONGAN_CARDS_I18N = {
  ja: [
    { title:'始まりの大樹', description:'巨木のように堂々とした気運。新たな始まりと成長のエネルギーを秘めています。', keywords:['リーダーシップ','始まり','成長','不屈の意志'] },
    { title:'しなやかな蔓', description:'風に揺れても折れない草の気運。柔軟さの中に強靭さがあります。', keywords:['適応力','柔らかさ','忍耐','芸術'] },
    { title:'太陽の炎', description:'万物を照らす太陽の気運。溢れる情熱と明るいエネルギーで周囲を照らします。', keywords:['情熱','輝き','エネルギー','華やかさ'] },
    { title:'灯火の智慧', description:'闇を照らす灯火の気運。静かながら深い知恵と洞察を持っています。', keywords:['知恵','繊細さ','温かさ','集中'] },
    { title:'大山の重み', description:'泰山のように重厚な気運。揺るぎない安定感と広い包容力を持っています。', keywords:['安定','信頼','包容','中心'] },
    { title:'肥沃な大地', description:'万物を育む大地の気運。実用的で着実な成長を導きます。', keywords:['養育','実用','謙虚','生産'] },
    { title:'鋼鉄の意志', description:'鍛えられた刃の気運。鋭い判断力と強い決断力で道を切り拓きます。', keywords:['決断','正義','強靭さ','変革'] },
    { title:'輝く宝石', description:'磨かれた宝石の気運。繊細な感覚と高い美意識を持っています。', keywords:['精巧さ','敏感さ','美しさ','高貴'] },
    { title:'大海の流れ', description:'広大な海の気運。すべてを包む広い包容力と深い知恵を持っています。', keywords:['知恵','包容','流れ','深さ'] },
    { title:'露のひらめき', description:'澄んだ露の気運。優れた直感と霊的感受性で本質を見抜きます。', keywords:['直感','霊感','純粋','癒し'] }
  ],
  es: [
    { title:'Árbol del Inicio', description:'Una energía majestuosa como un gran árbol. Contiene el poder de nuevos comienzos y crecimiento.', keywords:['Liderazgo','Inicio','Crecimiento','Voluntad'] },
    { title:'La Vid Flexible', description:'El espíritu de la hierba que se mece con el viento pero nunca se quiebra.', keywords:['Adaptabilidad','Suavidad','Perseverancia','Arte'] },
    { title:'Llama del Sol', description:'La energía del sol que ilumina toda la creación con pasión desbordante.', keywords:['Pasión','Resplandor','Energía','Brillo'] },
    { title:'Sabiduría de la Vela', description:'El espíritu de una vela que ilumina la oscuridad con sabiduría profunda.', keywords:['Sabiduría','Sensibilidad','Calidez','Enfoque'] },
    { title:'Peso de la Montaña', description:'Una energía inamovible como una gran montaña. Estabilidad y generosidad.', keywords:['Estabilidad','Confianza','Abrazo','Centro'] },
    { title:'La Tierra Fértil', description:'El espíritu de la tierra que nutre y sostiene a todos los seres vivos.', keywords:['Nutrición','Practicidad','Humildad','Producción'] },
    { title:'Voluntad de Acero', description:'La energía de una hoja templada que abre caminos con juicio afilado.', keywords:['Decisión','Justicia','Fortaleza','Transformación'] },
    { title:'La Joya Luminosa', description:'El espíritu de una gema pulida con sensibilidad refinada y estética.', keywords:['Precisión','Sensibilidad','Belleza','Nobleza'] },
    { title:'Flujo del Gran Océano', description:'La energía del vasto océano con generosidad ilimitada y sabiduría profunda.', keywords:['Sabiduría','Abrazo','Flujo','Profundidad'] },
    { title:'Inspiración del Rocío', description:'El espíritu del rocío claro con intuición extraordinaria y sensibilidad espiritual.', keywords:['Intuición','Inspiración','Pureza','Sanación'] }
  ],
  pt: [
    { title:'Árvore do Início', description:'Uma energia majestosa como uma grande árvore. Contém o poder de novos começos e crescimento.', keywords:['Liderança','Início','Crescimento','Vontade'] },
    { title:'A Videira Flexível', description:'O espírito da grama que balança ao vento mas nunca se quebra.', keywords:['Adaptabilidade','Suavidade','Perseverança','Arte'] },
    { title:'Chama do Sol', description:'A energia do sol que ilumina toda a criação com paixão transbordante.', keywords:['Paixão','Radiância','Energia','Brilho'] },
    { title:'Sabedoria da Vela', description:'O espírito de uma vela que ilumina a escuridão com sabedoria profunda.', keywords:['Sabedoria','Sensibilidade','Calor','Foco'] },
    { title:'Peso da Montanha', description:'Uma energia inabalável como uma grande montanha. Estabilidade e generosidade.', keywords:['Estabilidade','Confiança','Abraço','Centro'] },
    { title:'A Terra Fértil', description:'O espírito da terra que nutre e sustenta todos os seres vivos.', keywords:['Nutrição','Praticidade','Humildade','Produção'] },
    { title:'Vontade de Aço', description:'A energia de uma lâmina temperada que abre caminhos com julgamento afiado.', keywords:['Decisão','Justiça','Fortaleza','Transformação'] },
    { title:'A Joia Luminosa', description:'O espírito de uma gema polida com sensibilidade refinada e estética.', keywords:['Precisão','Sensibilidade','Beleza','Nobreza'] },
    { title:'Fluxo do Grande Oceano', description:'A energia do vasto oceano com generosidade ilimitada e sabedoria profunda.', keywords:['Sabedoria','Abraço','Fluxo','Profundidade'] },
    { title:'Inspiração do Orvalho', description:'O espírito do orvalho claro com intuição extraordinária e sensibilidade espiritual.', keywords:['Intuição','Inspiração','Pureza','Cura'] }
  ],
  fr: [
    { title:'Arbre du Commencement', description:'Une énergie majestueuse comme un grand arbre. Elle recèle la puissance de nouveaux départs et de croissance.', keywords:['Leadership','Début','Croissance','Volonté'] },
    { title:'La Liane Souple', description:"L'esprit de l'herbe qui ploie sous le vent sans jamais rompre.", keywords:['Adaptabilité','Douceur','Persévérance','Art'] },
    { title:'Flamme du Soleil', description:'L\'énergie du soleil qui illumine toute la création avec une passion débordante.', keywords:['Passion','Éclat','Énergie','Brillance'] },
    { title:'Sagesse de la Bougie', description:"L'esprit d'une bougie qui éclaire les ténèbres avec une sagesse profonde.", keywords:['Sagesse','Sensibilité','Chaleur','Concentration'] },
    { title:'Poids de la Montagne', description:'Une énergie inébranlable comme une grande montagne. Stabilité et générosité.', keywords:['Stabilité','Confiance','Accueil','Centre'] },
    { title:'La Terre Fertile', description:"L'esprit de la terre qui nourrit et soutient tous les êtres vivants.", keywords:['Nourriture','Praticité','Humilité','Production'] },
    { title:"Volonté d'Acier", description:"L'énergie d'une lame trempée qui ouvre la voie avec un jugement aiguisé.", keywords:['Décision','Justice','Force','Transformation'] },
    { title:'Le Joyau Lumineux', description:"L'esprit d'un joyau poli, doté d'une sensibilité raffinée et d'une esthétique exquise.", keywords:['Précision','Sensibilité','Beauté','Noblesse'] },
    { title:"Flux du Grand Océan", description:"L'énergie du vaste océan, d'une générosité sans limites et d'une sagesse insondable.", keywords:['Sagesse','Accueil','Flux','Profondeur'] },
    { title:'Inspiration de la Rosée', description:"L'esprit de la rosée limpide, doté d'une intuition extraordinaire et d'une sensibilité spirituelle.", keywords:['Intuition','Inspiration','Pureté','Guérison'] }
  ],
  de: [
    { title:'Baum des Anfangs', description:'Eine majestätische Energie wie ein großer Baum. Sie birgt die Kraft neuer Anfänge und Wachstum.', keywords:['Führung','Anfang','Wachstum','Wille'] },
    { title:'Die Geschmeidige Ranke', description:'Der Geist des Grases, das im Wind schwingt, aber niemals bricht.', keywords:['Anpassungsfähigkeit','Sanftheit','Ausdauer','Kunst'] },
    { title:'Flamme der Sonne', description:'Die Energie der Sonne, die alle Schöpfung mit überbordender Leidenschaft erleuchtet.', keywords:['Leidenschaft','Glanz','Energie','Brillanz'] },
    { title:'Weisheit der Kerze', description:'Der Geist einer Kerze, die die Dunkelheit mit tiefer Weisheit erleuchtet.', keywords:['Weisheit','Feinfühligkeit','Wärme','Fokus'] },
    { title:'Gewicht des Berges', description:'Eine unerschütterliche Energie wie ein großer Berg. Stabilität und Großzügigkeit.', keywords:['Stabilität','Vertrauen','Umarmung','Zentrum'] },
    { title:'Die Fruchtbare Erde', description:'Der Geist der Erde, die alle Lebewesen nährt und erhält.', keywords:['Fürsorge','Praktikabilität','Demut','Produktion'] },
    { title:'Wille aus Stahl', description:'Die Energie einer gehärteten Klinge, die mit scharfem Urteil den Weg öffnet.', keywords:['Entscheidung','Gerechtigkeit','Stärke','Wandel'] },
    { title:'Das Leuchtende Juwel', description:'Der Geist eines polierten Edelsteins mit raffinierter Sensibilität und Ästhetik.', keywords:['Präzision','Sensibilität','Schönheit','Adel'] },
    { title:'Fluss des Großen Ozeans', description:'Die Energie des weiten Ozeans mit grenzenloser Großzügigkeit und tiefer Weisheit.', keywords:['Weisheit','Umarmung','Fluss','Tiefe'] },
    { title:'Inspiration des Taus', description:'Der Geist des klaren Taus mit außergewöhnlicher Intuition und spiritueller Sensibilität.', keywords:['Intuition','Inspiration','Reinheit','Heilung'] }
  ]
};
window.CHEONGAN_CARDS_I18N = CHEONGAN_CARDS_I18N;

// 지지 카드 데이터
const JIJI_CARDS = [
    { id:'jj_ja', name:'자', hanja:'子', element:'수', animal:'쥐', title:'자정의 시작', symbol:'🐀', keywords:['지혜','시작','은밀','기회'], description:'한밤중의 기운. 어둠 속에서 새로운 시작을 감지하는 날카로운 직감.',
      animalEn:'Rat', titleEn:'Midnight\'s Awakening', keywordsEn:['Wisdom','New Beginnings','Secrecy','Opportunity'], descriptionEn:'The energy of deepest midnight. A sharp intuition that senses new beginnings stirring within the darkness.' },
    { id:'jj_chuk', name:'축', hanja:'丑', element:'토', animal:'소', title:'새벽의 인내', symbol:'🐂', keywords:['인내','근면','축적','안정'], description:'새벽녘의 기운. 묵묵히 쌓아가는 성실함과 든든한 안정감.',
      animalEn:'Ox', titleEn:'Patience of the Dawn', keywordsEn:['Patience','Diligence','Accumulation','Stability'], descriptionEn:'The energy of early dawn. A quiet diligence that builds steadily, offering unwavering stability and strength.' },
    { id:'jj_in', name:'인', hanja:'寅', element:'목', animal:'호랑이', title:'여명의 포효', symbol:'🐅', keywords:['용기','시작','권위','진취'], description:'동이 트는 기운. 두려움 없이 앞으로 나아가는 용맹한 기상.',
      animalEn:'Tiger', titleEn:'Roar of the First Light', keywordsEn:['Courage','Initiative','Authority','Ambition'], descriptionEn:'The energy of breaking dawn. A fearless spirit that charges forward with bold and valiant determination.' },
    { id:'jj_myo', name:'묘', hanja:'卯', element:'목', animal:'토끼', title:'봄날의 약동', symbol:'🐇', keywords:['생동','예술','평화','성장'], description:'봄 아침의 기운. 생명이 움트는 활기와 부드러운 창조력.',
      animalEn:'Rabbit', titleEn:'Spring\'s Awakening', keywordsEn:['Vitality','Artistry','Peace','Growth'], descriptionEn:'The energy of a spring morning. The vibrant pulse of life sprouting forth, carrying gentle creative power.' },
    { id:'jj_jin', name:'진', hanja:'辰', element:'토', animal:'용', title:'용의 비상', symbol:'🐉', keywords:['변화','권력','비상','신비'], description:'안개 낀 아침의 기운. 숨겨진 잠재력이 폭발하는 변화의 순간.',
      animalEn:'Dragon', titleEn:'Ascent of the Dragon', keywordsEn:['Transformation','Power','Ascension','Mystery'], descriptionEn:'The energy of a mist-veiled morning. A moment of metamorphosis where hidden potential erupts into magnificent change.' },
    { id:'jj_sa', name:'사', hanja:'巳', element:'화', animal:'뱀', title:'한낮의 지혜', symbol:'🐍', keywords:['지혜','변신','전략','통찰'], description:'뜨거운 한낮의 기운. 깊은 통찰력과 전략적 사고의 힘.',
      animalEn:'Snake', titleEn:'Wisdom of High Noon', keywordsEn:['Wisdom','Metamorphosis','Strategy','Insight'], descriptionEn:'The energy of the blazing midday. The power of deep insight and strategic thinking at its sharpest.' },
    { id:'jj_o', name:'오', hanja:'午', element:'화', animal:'말', title:'정오의 질주', symbol:'🐎', keywords:['열정','자유','활력','전진'], description:'태양이 가장 높은 기운. 멈출 수 없는 열정과 자유로운 영혼.',
      animalEn:'Horse', titleEn:'Gallop of the Zenith', keywordsEn:['Passion','Freedom','Vitality','Progress'], descriptionEn:'The energy of the sun at its peak. An unstoppable passion and a spirit that runs free and unrestrained.' },
    { id:'jj_mi', name:'미', hanja:'未', element:'토', animal:'양', title:'오후의 온기', symbol:'🐑', keywords:['온화','예술','감성','치유'], description:'따뜻한 오후의 기운. 부드러운 감성과 사람들을 치유하는 온기.',
      animalEn:'Goat', titleEn:'Warmth of the Afternoon', keywordsEn:['Gentleness','Artistry','Emotion','Healing'], descriptionEn:'The energy of a warm afternoon. A tender sensibility and a healing warmth that soothes all who draw near.' },
    { id:'jj_sin', name:'신', hanja:'申', element:'금', animal:'원숭이', title:'석양의 재치', symbol:'🐒', keywords:['재치','지능','다재','변화'], description:'해질녘의 기운. 뛰어난 재치와 다양한 재능으로 상황을 주도.',
      animalEn:'Monkey', titleEn:'Wit of the Setting Sun', keywordsEn:['Cleverness','Intelligence','Versatility','Adaptability'], descriptionEn:'The energy of the golden hour. Exceptional wit and diverse talents that command any situation with finesse.' },
    { id:'jj_yu', name:'유', hanja:'酉', element:'금', animal:'닭', title:'황혼의 결실', symbol:'🐓', keywords:['결실','정확','단정','완성'], description:'황혼의 기운. 하루의 결실을 맺는 정확하고 단정한 에너지.',
      animalEn:'Rooster', titleEn:'Harvest of Twilight', keywordsEn:['Fruition','Precision','Order','Completion'], descriptionEn:'The energy of twilight. A precise and dignified force that brings the day\'s efforts to their rightful culmination.' },
    { id:'jj_sul', name:'술', hanja:'戌', element:'토', animal:'개', title:'저녁의 충성', symbol:'🐕', keywords:['충성','수호','정의','신뢰'], description:'어둠이 내리는 기운. 흔들리지 않는 충성심과 수호의 힘.',
      animalEn:'Dog', titleEn:'Loyalty of the Evening', keywordsEn:['Loyalty','Protection','Justice','Trust'], descriptionEn:'The energy of descending darkness. An unshakable loyalty and the steadfast power to guard and protect.' },
    { id:'jj_hae', name:'해', hanja:'亥', element:'수', animal:'돼지', title:'밤의 풍요', symbol:'🐖', keywords:['풍요','복','관대','마무리'], description:'깊은 밤의 기운. 넉넉한 복과 관대함으로 모든 것을 감싸안음.',
      animalEn:'Pig', titleEn:'Abundance of the Night', keywordsEn:['Abundance','Blessing','Generosity','Completion'], descriptionEn:'The energy of the deep night. A generous blessing and boundless warmth that embraces all things in its fold.' }
];

// window에 노출
window.calculateSaju = calculateSaju;
window.CHEONGAN_CARDS = CHEONGAN_CARDS;
window.JIJI_CARDS = JIJI_CARDS;
window.OHENG_COLORS = OHENG_COLORS;
window.OHENG_SYMBOLS = OHENG_SYMBOLS;
window.OHENG_OF_CHEONGAN = OHENG_OF_CHEONGAN;
window.OHENG_OF_JIJI = OHENG_OF_JIJI;
window.CHEONGAN = CHEONGAN;
window.JIJI = JIJI;
window.ANIMALS = ANIMALS;
window.ANIMALS_EN = ANIMALS_EN;
window.OHENG_EN = OHENG_EN;
window.YINYANG_EN = YINYANG_EN;
window.PILLAR_NAMES_EN = PILLAR_NAMES_EN;
window.YUKCHIN_EN = YUKCHIN_EN;
window.getSajuText = getSajuText;
window.getCheonganCard = getCheonganCard;
window.getJijiCard = getJijiCard;
window.getAnimalByLang = getAnimalByLang;
window.getOhengByLang = getOhengByLang;
window.getYinyangByLang = getYinyangByLang;
window.getYukchinByLang = getYukchinByLang;
window.ANIMALS_I18N = ANIMALS_I18N;
window.OHENG_I18N = OHENG_I18N;
window.YINYANG_I18N = YINYANG_I18N;
window.YUKCHIN_I18N = YUKCHIN_I18N;
window.PILLAR_NAMES_I18N = PILLAR_NAMES_I18N;
window.getYukchin = getYukchin;
window.getDayPillar = getDayPillar;
window.PRODUCES = PRODUCES;
window.OVERCOMES = OVERCOMES;
window.OHENG_OF_JIJI = OHENG_OF_JIJI;
window.YINYANG_OF_CHEONGAN = YINYANG_OF_CHEONGAN;
