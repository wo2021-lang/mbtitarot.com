/* ============================================
 *  translations-zodiac.js - 별자리 운세 번역 (7개 언어)
 *  L('zodiac_title')
 *  L('zodiac_your_sign', { sign: '양자리' })
 *  L('zodiac_element_fire', { sign: '양자리' })
 *  L('zodiac_compat_same', { signs: '사자자리, 사수자리' })
 * ============================================ */
(function () {
  'use strict';

  function addKeys(langCode, keys) {
    if (!window.I18N) return;
    if (!window.I18N[langCode]) window.I18N[langCode] = {};
    var target = window.I18N[langCode];
    for (var k in keys) {
      if (keys.hasOwnProperty(k)) target[k] = keys[k];
    }
  }

  /* ══════════════════════════════════════════
   *  한국어 (ko)
   * ══════════════════════════════════════════ */
  addKeys('ko', {
    // UI Labels
    landing_zodiac: '별자리 운세',
    landing_zodiac_sub: '12별자리 오늘의 운세',
    zodiac_title: '별자리 운세',
    zodiac_select_sign: '별자리를 선택하세요',
    zodiac_your_sign: '나의 별자리: {sign}',
    zodiac_today: '오늘의 운세',

    // Section Headers
    zodiac_overview_header: '✦ 오늘의 별자리 에너지',
    zodiac_love_header: '💕 연애 & 인간관계',
    zodiac_career_header: '💼 직업 & 재정',
    zodiac_health_header: '💪 건강 & 웰빙',
    zodiac_lucky_header: '🍀 행운의 정보',
    zodiac_compat_header: '💫 오늘의 궁합',
    zodiac_affirm_header: '✨ 오늘의 확언',
    zodiac_rating_header: '⭐ 오늘의 별점',

    // Rating Labels
    zodiac_rating_love: '연애운',
    zodiac_rating_career: '직업운',
    zodiac_rating_health: '건강운',
    zodiac_rating_luck: '행운',

    // Lucky Info Labels
    zodiac_lucky_number: '행운의 숫자',
    zodiac_lucky_color: '행운의 색상',
    zodiac_lucky_time: '행운의 시간',
    zodiac_best_match: '최고의 궁합',
    zodiac_watch_out: '주의할 별자리',

    // Zodiac Date Ranges
    zodiac_dates_aries: '3/21 - 4/19',
    zodiac_dates_taurus: '4/20 - 5/20',
    zodiac_dates_gemini: '5/21 - 6/21',
    zodiac_dates_cancer: '6/22 - 7/22',
    zodiac_dates_leo: '7/23 - 8/22',
    zodiac_dates_virgo: '8/23 - 9/22',
    zodiac_dates_libra: '9/23 - 10/23',
    zodiac_dates_scorpio: '10/24 - 11/21',
    zodiac_dates_sagittarius: '11/22 - 12/21',
    zodiac_dates_capricorn: '12/22 - 1/19',
    zodiac_dates_aquarius: '1/20 - 2/18',
    zodiac_dates_pisces: '2/19 - 3/20',

    // Element Descriptions
    zodiac_element_fire: '{sign}에게 오늘은 열정의 불꽃이 타오르는 날이에요. 내면의 에너지가 활활 피어올라 새로운 도전에 뛰어들고 싶은 욕구가 강해질 거예요. 자신감을 가지고 앞으로 나아가면, 뜻밖의 기회가 당신을 맞이할 거예요.',
    zodiac_element_water: '{sign}에게 오늘은 감성의 파도가 부드럽게 밀려오는 날이에요. 직관이 평소보다 훨씬 예민해져서 주변 사람들의 마음을 깊이 읽을 수 있을 거예요. 마음의 소리에 귀 기울이면, 중요한 답을 발견하게 될 거예요.',
    zodiac_element_earth: '{sign}에게 오늘은 대지의 안정된 기운이 감싸는 날이에요. 꾸준히 쌓아온 노력이 결실을 보기 시작하는 시기로, 실질적인 성과를 기대해도 좋아요. 차분하게 한 걸음씩 나아가면 원하는 목표에 닿을 수 있어요.',
    zodiac_element_air: '{sign}에게 오늘은 바람처럼 자유로운 영감이 불어오는 날이에요. 머릿속에 반짝이는 아이디어가 쏟아지고, 소통과 교류에서 큰 즐거움을 느낄 거예요. 열린 마음으로 새로운 만남을 받아들이면 놀라운 인연이 찾아올 수 있어요.',

    // Love Fortune - Fire
    zodiac_love_fire_good: '불의 열정이 사랑에도 닿아, 로맨틱한 에너지가 넘치는 하루예요. 솔직한 감정 표현이 상대방의 마음을 사로잡을 거예요. 용기를 내서 먼저 다가가 보세요, 기대 이상의 반응이 돌아올 거예요.',
    zodiac_love_fire_caution: '열정이 과해지면 상대방에게 부담을 줄 수 있으니 조금 여유를 갖는 게 좋겠어요. 충동적인 고백이나 과도한 집착은 잠시 내려놓으세요. 한 템포 쉬어가며 상대방의 속도에 맞추면 더 좋은 결과가 있을 거예요.',

    // Love Fortune - Water
    zodiac_love_water_good: '감성이 풍부해지면서 상대방과 깊은 감정적 교류가 이루어지는 날이에요. 진심 어린 대화가 두 사람의 유대를 한층 깊게 만들어 줄 거예요. 사소한 배려 하나가 큰 감동으로 돌아올 수 있어요.',
    zodiac_love_water_caution: '감정의 파도가 높아져 작은 일에도 쉽게 상처받을 수 있으니 주의하세요. 상대방의 말을 너무 깊이 분석하기보다는 있는 그대로 받아들이는 연습이 필요해요. 혼자만의 시간으로 감정을 정리하면 한결 편안해질 거예요.',

    // Love Fortune - Earth
    zodiac_love_earth_good: '안정적이고 따뜻한 에너지가 관계에 신뢰를 더해주는 날이에요. 함께하는 일상 속 작은 행복에서 진정한 사랑을 느낄 수 있을 거예요. 진심을 담은 약속이나 계획이 관계를 한 단계 발전시킬 수 있어요.',
    zodiac_love_earth_caution: '지나친 현실적 사고가 로맨스의 감성을 억누를 수 있으니 가끔은 감성적으로 다가가 보세요. 완벽한 조건만 따지다 보면 정작 소중한 감정을 놓칠 수 있어요. 마음을 조금 더 열고 유연하게 반응해 보세요.',

    // Love Fortune - Air
    zodiac_love_air_good: '유쾌한 대화와 지적인 교감이 사랑을 꽃피우는 날이에요. 위트 있는 말 한마디가 상대방의 미소를 이끌어내고, 새로운 만남에서도 좋은 인상을 남길 수 있어요. 가벼운 약속이 특별한 추억으로 이어질 수 있어요.',
    zodiac_love_air_caution: '머리로만 사랑을 분석하면 감정이 따라오지 못할 수 있어요. 논리적으로 옳은 것과 마음이 원하는 것은 다를 수 있으니 가슴의 소리에도 귀 기울여 보세요. 지나친 자유로움이 상대에게 무관심으로 비칠 수 있으니 표현을 아끼지 마세요.',

    // Career Fortune - Fire
    zodiac_career_fire_good: '추진력이 최고조에 달해 새로운 프로젝트나 도전에 유리한 날이에요. 리더십을 발휘할 기회가 찾아오니 주저하지 말고 앞장서 보세요. 대담한 결정이 큰 성과로 이어질 수 있어요.',
    zodiac_career_fire_caution: '성급한 판단이 실수로 이어질 수 있으니 중요한 결정은 한 번 더 생각해 보세요. 동료와의 의견 충돌이 있을 수 있으니 경청하는 자세가 필요해요. 열정은 좋지만 체계적인 계획도 함께 세워야 해요.',

    // Career Fortune - Water
    zodiac_career_water_good: '직감이 업무에서 빛을 발하는 날이에요. 창의적인 아이디어가 상사나 동료에게 좋은 인상을 줄 수 있어요. 팀 내에서 분위기 메이커 역할을 하며 협업의 시너지를 높여 보세요.',
    zodiac_career_water_caution: '감정에 좌우되어 업무 판단이 흐려질 수 있으니 객관적인 시각을 유지하세요. 직장 내 인간관계에 너무 감정적으로 얽히면 스트레스가 커질 수 있어요. 업무와 감정을 분리하는 연습이 도움이 될 거예요.',

    // Career Fortune - Earth
    zodiac_career_earth_good: '꼼꼼함과 성실함이 빛나는 하루예요. 세밀한 업무 처리가 높은 평가를 받을 수 있고, 재정적으로도 안정적인 흐름이 이어져요. 장기적인 투자나 저축 계획을 세우기에 좋은 날이에요.',
    zodiac_career_earth_caution: '지나친 완벽주의가 업무 속도를 늦출 수 있으니 적절한 타협점을 찾아보세요. 변화를 두려워하면 성장의 기회를 놓칠 수 있어요. 새로운 방식에도 열린 마음을 가져 보세요.',

    // Career Fortune - Air
    zodiac_career_air_good: '네트워킹과 커뮤니케이션에서 두각을 나타내는 날이에요. 프레젠테이션이나 회의에서 당신의 아이디어가 주목받을 수 있어요. 다양한 관점에서 문제를 바라보는 능력이 팀에 큰 도움이 될 거예요.',
    zodiac_career_air_caution: '이것저것 손대다가 하나도 마무리하지 못할 수 있으니 우선순위를 정해 집중하세요. 말이 앞서서 실행이 따라가지 못하면 신뢰를 잃을 수 있어요. 약속한 것은 반드시 지키는 모습을 보여주세요.',

    // Health Fortune - Fire
    zodiac_health_fire_good: '에너지가 넘쳐서 활동적인 운동이 잘 맞는 날이에요. 달리기, 격렬한 춤, 고강도 트레이닝 등으로 넘치는 에너지를 긍정적으로 발산해 보세요. 몸을 움직이면 마음까지 상쾌해지는 걸 느낄 수 있어요.',
    zodiac_health_fire_caution: '과도한 활동으로 체력이 소진될 수 있으니 무리하지 마세요. 화를 참으면 스트레스가 몸에 쌓이니 적절한 해소법을 찾는 게 중요해요. 충분한 수분 섭취와 휴식을 잊지 마세요.',

    // Health Fortune - Water
    zodiac_health_water_good: '마음과 몸이 조화를 이루기 좋은 날이에요. 명상, 요가, 반신욕 등 이완 활동이 큰 효과를 가져다줄 거예요. 충분한 수면이 내일의 에너지를 충전해 주니 일찍 잠자리에 들어보세요.',
    zodiac_health_water_caution: '감정적 동요가 신체 건강에도 영향을 줄 수 있으니 마음 챙김에 신경 쓰세요. 과식이나 감정적 폭식에 주의하고, 건강한 방법으로 기분 전환을 하세요. 따뜻한 차 한 잔이 마음을 안정시켜 줄 거예요.',

    // Health Fortune - Earth
    zodiac_health_earth_good: '규칙적인 생활 리듬이 건강의 든든한 기반이 되는 날이에요. 균형 잡힌 식사와 적절한 산책이 몸과 마음에 활력을 줄 거예요. 자연 속에서 시간을 보내면 특별한 치유의 에너지를 받을 수 있어요.',
    zodiac_health_earth_caution: '같은 자세로 오래 앉아있으면 몸이 뻣뻣해질 수 있으니 스트레칭을 자주 해주세요. 과도한 걱정이 소화 기능에 영향을 줄 수 있으니 마음을 편하게 먹는 게 중요해요. 가벼운 산책으로 기분을 환기시켜 보세요.',

    // Health Fortune - Air
    zodiac_health_air_good: '가벼운 유산소 운동이나 야외 활동이 활력을 불어넣어 주는 날이에요. 맑은 공기를 마시며 산책하면 복잡한 생각이 정리되고 기분이 상쾌해질 거예요. 호흡 운동이나 스트레칭으로 하루를 시작하면 효과적이에요.',
    zodiac_health_air_caution: '지나친 생각이 두통이나 불면으로 이어질 수 있으니 머리를 비우는 시간을 가져보세요. 카페인을 너무 많이 섭취하면 불안감이 커질 수 있으니 적당히 조절하세요. 디지털 기기에서 잠시 떨어져 눈과 머리를 쉬게 해주세요.',

    // Daily Affirmations
    zodiac_affirm_fire: '나는 내면의 불꽃을 믿으며, 어떤 도전도 해낼 수 있는 용기가 있습니다. 오늘 나의 열정은 세상을 밝히는 빛이 됩니다.',
    zodiac_affirm_water: '나는 감정의 흐름을 자연스럽게 받아들이고, 그 깊이에서 지혜를 얻습니다. 오늘 나의 직관은 가장 올바른 길로 나를 안내합니다.',
    zodiac_affirm_earth: '나는 단단한 대지처럼 흔들리지 않으며, 꾸준한 노력으로 풍요를 만들어 갑니다. 오늘 나의 성실함은 반드시 보상받을 것입니다.',
    zodiac_affirm_air: '나는 바람처럼 자유롭게 사고하며, 무한한 가능성을 향해 날아갑니다. 오늘 나의 아이디어는 세상에 신선한 영감을 불어넣습니다.',

    // Compatibility Text
    zodiac_compat_same: '같은 원소를 가진 {signs}와(과) 오늘 특별한 공감대가 형성될 수 있어요. 비슷한 에너지를 공유하며 서로를 더 깊이 이해하는 하루가 될 거예요.',
    zodiac_compat_complement: '보완적 원소를 가진 {signs}와(과) 놀라운 시너지를 만들어낼 수 있어요. 서로 다른 장점이 합쳐져 혼자서는 이룰 수 없는 멋진 결과를 이끌어낼 거예요.',

    // Lucky Colors Per Element
    zodiac_color_fire: '빨간색, 오렌지',
    zodiac_color_water: '파란색, 은색',
    zodiac_color_earth: '초록색, 갈색',
    zodiac_color_air: '노란색, 하늘색',

    // Additional UI Labels
    zodiac_horoscope: '오늘의 운세',
    zodiac_energy_level: '에너지 레벨',
    zodiac_about_sign: '📖 별자리 소개',
    zodiac_element: '원소'
  });

  /* ══════════════════════════════════════════
   *  English (en)
   * ══════════════════════════════════════════ */
  addKeys('en', {
    landing_zodiac: 'Zodiac Horoscope',
    landing_zodiac_sub: 'Daily Horoscope for 12 Signs',
    zodiac_title: 'Zodiac Horoscope',
    zodiac_select_sign: 'Select your zodiac sign',
    zodiac_your_sign: 'Your sign: {sign}',
    zodiac_today: "Today's Horoscope",

    zodiac_overview_header: "✦ Today's Stellar Energy",
    zodiac_love_header: '💕 Love & Relationships',
    zodiac_career_header: '💼 Career & Finance',
    zodiac_health_header: '💪 Health & Wellness',
    zodiac_lucky_header: '🍀 Lucky Info',
    zodiac_compat_header: "💫 Today's Compatibility",
    zodiac_affirm_header: '✨ Daily Affirmation',
    zodiac_rating_header: "⭐ Today's Star Rating",

    zodiac_rating_love: 'Love',
    zodiac_rating_career: 'Career',
    zodiac_rating_health: 'Health',
    zodiac_rating_luck: 'Luck',

    zodiac_lucky_number: 'Lucky Numbers',
    zodiac_lucky_color: 'Lucky Color',
    zodiac_lucky_time: 'Lucky Hour',
    zodiac_best_match: 'Best Match Today',
    zodiac_watch_out: 'Watch Out For',

    zodiac_dates_aries: '3/21 - 4/19',
    zodiac_dates_taurus: '4/20 - 5/20',
    zodiac_dates_gemini: '5/21 - 6/21',
    zodiac_dates_cancer: '6/22 - 7/22',
    zodiac_dates_leo: '7/23 - 8/22',
    zodiac_dates_virgo: '8/23 - 9/22',
    zodiac_dates_libra: '9/23 - 10/23',
    zodiac_dates_scorpio: '10/24 - 11/21',
    zodiac_dates_sagittarius: '11/22 - 12/21',
    zodiac_dates_capricorn: '12/22 - 1/19',
    zodiac_dates_aquarius: '1/20 - 2/18',
    zodiac_dates_pisces: '2/19 - 3/20',

    zodiac_element_fire: 'The cosmos ignites a bold fire within {sign} today. Your inner flame burns bright, drawing you toward daring ventures and passionate pursuits. Trust this radiant surge of confidence — the universe is aligning to reward your courage.',
    zodiac_element_water: 'A gentle tide of emotional depth washes over {sign} today. Your intuition is remarkably sharp, allowing you to sense the unspoken currents around you. Surrender to this flow — profound insights await beneath the surface.',
    zodiac_element_earth: 'The grounding energy of the earth wraps {sign} in steady assurance today. The seeds you have patiently tended are beginning to sprout, and tangible results draw near. Stay your course — the harvest is closer than you think.',
    zodiac_element_air: 'A brilliant breeze of inspiration sweeps through {sign} today. Ideas spark like lightning, and every conversation holds the potential for unexpected discovery. Open your mind wide — the winds of change carry extraordinary gifts.',

    zodiac_love_fire_good: 'Passionate energy electrifies your love life today. Your magnetic confidence and bold honesty will captivate those around you. Take the initiative in romance — the stars favor those who dare to express their heart.',
    zodiac_love_fire_caution: 'Your fiery intensity may overwhelm a partner who needs gentleness right now. Impulsive declarations could create pressure rather than passion. Slow your pace and listen as much as you speak — patience deepens the flame.',

    zodiac_love_water_good: 'Emotional intimacy reaches a beautiful depth today. Heartfelt conversations strengthen your bonds in ways words alone cannot capture. A small, sincere gesture of care could become a turning point in your relationship.',
    zodiac_love_water_caution: 'Heightened sensitivity may cause you to read too deeply into casual remarks. Guard against spiraling into assumptions — ask directly rather than interpreting silently. A moment of solitude can help you recalibrate your emotional compass.',

    zodiac_love_earth_good: 'Steady, nurturing energy brings warmth and trust to your relationships. You will find deep joy in simple shared moments — a quiet meal, a familiar routine made sacred. A committed promise today carries lasting significance.',
    zodiac_love_earth_caution: 'An overly practical mindset may stifle the romantic spark your partner craves. Not everything in love can be measured or planned — sometimes magic lives in spontaneity. Let your guard down and embrace a little beautiful chaos.',

    zodiac_love_air_good: 'Sparkling wit and intellectual connection make your love life vibrant today. A clever remark or playful exchange could ignite a new attraction or deepen an existing one. Light-hearted plans may blossom into unforgettable memories.',
    zodiac_love_air_caution: 'Analyzing love with your head alone may leave your heart feeling neglected. Logic and emotion follow different maps — honor both. Be mindful that an air of detachment could be mistaken for indifference by someone who cares deeply.',

    zodiac_career_fire_good: 'Your drive is at its peak — this is the day to launch, pitch, or lead. Opportunities favor the bold, and your natural leadership draws others to your vision. A courageous decision made today could set the tone for weeks to come.',
    zodiac_career_fire_caution: 'Rushing headlong into decisions may cause costly oversights. A colleague may challenge your approach — hear them out before reacting. Channel your fire into a structured plan and your ambitions will land with far greater impact.',

    zodiac_career_water_good: 'Your intuition is a secret weapon at work today. Creative solutions emerge effortlessly, impressing superiors and peers alike. Lean into collaborative energy — your empathy makes you an invaluable team player.',
    zodiac_career_water_caution: 'Emotional undercurrents in the workplace could cloud your professional judgment. Avoid taking office dynamics personally — not every slight is intentional. Draw a clear boundary between feelings and facts to stay productive.',

    zodiac_career_earth_good: 'Precision and reliability earn you well-deserved recognition today. Detail-oriented work will set you apart, and financial matters trend favorably. This is an excellent day to review budgets, sign contracts, or plan long-term investments.',
    zodiac_career_earth_caution: 'Perfectionism may slow your momentum — know when good enough is truly good enough. Resistance to new methods could cause you to miss an innovative shortcut. Embrace flexibility without abandoning your standards.',

    zodiac_career_air_good: 'Communication is your superpower today. Presentations, negotiations, and brainstorms all benefit from your quick thinking and articulate delivery. A fresh perspective you offer could become the breakthrough your team has been seeking.',
    zodiac_career_air_caution: 'Scattered focus may leave too many projects half-finished — ruthlessly prioritize. Words spoken carelessly carry weight, so ensure promises are backed by follow-through. Deliver on your commitments to reinforce the trust you have earned.',

    zodiac_health_fire_good: 'Vibrant energy courses through you — channel it into dynamic exercise. High-intensity workouts, dance, or competitive sports will feel exhilarating and leave you glowing. Movement is medicine for your fiery spirit today.',
    zodiac_health_fire_caution: 'Burning the candle at both ends could lead to burnout or minor injuries. Suppressed frustration may manifest as tension headaches or muscle tightness. Stay hydrated, stretch often, and give yourself permission to rest.',

    zodiac_health_water_good: 'Mind-body harmony comes naturally today. Meditation, gentle yoga, or a warm bath will replenish your spirit at the deepest level. Prioritize sleep tonight — your subconscious is doing important healing work.',
    zodiac_health_water_caution: 'Emotional turbulence may ripple into physical symptoms like fatigue or digestive unease. Be mindful of comfort eating — nourish yourself with intention, not impulse. A cup of herbal tea and a few deep breaths can restore your equilibrium.',

    zodiac_health_earth_good: 'A steady routine is your greatest health asset today. Balanced meals, moderate exercise, and time spent in nature will recharge your reserves beautifully. Even a short walk among trees can ground your energy in remarkable ways.',
    zodiac_health_earth_caution: 'Prolonged sitting or repetitive postures may cause stiffness — stretch every hour. Excessive worry can upset your digestion, so consciously release what you cannot control. A gentle evening walk will ease both body and mind.',

    zodiac_health_air_good: 'Light cardio and fresh air are exactly what your body craves today. A brisk walk, a bike ride, or outdoor stretching will clear mental fog and lift your spirits. Start your morning with breathing exercises for a centered, energized day.',
    zodiac_health_air_caution: 'An overactive mind may lead to headaches or restless sleep — practice winding down before bed. Too much caffeine will amplify nervous energy rather than focus. Step away from screens periodically to give your eyes and mind a well-needed reset.',

    zodiac_affirm_fire: 'I trust the fire within me and I possess the courage to conquer any challenge. Today, my passion becomes a light that illuminates the world around me.',
    zodiac_affirm_water: 'I embrace the natural flow of my emotions and draw wisdom from their depth. Today, my intuition guides me along the truest path.',
    zodiac_affirm_earth: 'I stand as steady as the earth itself, building abundance through persistent effort. Today, my dedication will be richly rewarded.',
    zodiac_affirm_air: 'I think freely like the wind and soar toward infinite possibilities. Today, my ideas breathe fresh inspiration into the world.',

    zodiac_compat_same: 'A natural resonance with fellow {signs} creates a powerful understanding today. Shared elemental energy amplifies your connection, making collaboration and companionship feel effortless.',
    zodiac_compat_complement: 'A magnetic synergy with {signs} could spark something remarkable today. Your complementary strengths merge to create outcomes neither could achieve alone — lean into this dynamic partnership.',

    zodiac_color_fire: 'Red, Orange',
    zodiac_color_water: 'Blue, Silver',
    zodiac_color_earth: 'Green, Brown',
    zodiac_color_air: 'Yellow, Sky Blue',

    zodiac_horoscope: 'Daily Horoscope',
    zodiac_energy_level: 'Energy Level',
    zodiac_about_sign: '📖 About This Sign',
    zodiac_element: 'Element'
  });

  /* ══════════════════════════════════════════
   *  日本語 (ja)
   * ══════════════════════════════════════════ */
  addKeys('ja', {
    landing_zodiac: '星座占い',
    landing_zodiac_sub: '12星座の今日の運勢',
    zodiac_title: '星座占い',
    zodiac_select_sign: '星座を選んでください',
    zodiac_your_sign: 'あなたの星座: {sign}',
    zodiac_today: '今日の運勢',

    zodiac_overview_header: '✦ 今日の星座エネルギー',
    zodiac_love_header: '💕 恋愛＆人間関係',
    zodiac_career_header: '💼 仕事＆金運',
    zodiac_health_header: '💪 健康＆ウェルネス',
    zodiac_lucky_header: '🍀 ラッキー情報',
    zodiac_compat_header: '💫 今日の相性',
    zodiac_affirm_header: '✨ 今日のアファメーション',
    zodiac_rating_header: '⭐ 今日の星評価',

    zodiac_rating_love: '恋愛運',
    zodiac_rating_career: '仕事運',
    zodiac_rating_health: '健康運',
    zodiac_rating_luck: '幸運',

    zodiac_lucky_number: 'ラッキーナンバー',
    zodiac_lucky_color: 'ラッキーカラー',
    zodiac_lucky_time: 'ラッキーアワー',
    zodiac_best_match: '今日の最高の相性',
    zodiac_watch_out: '注意すべき星座',

    zodiac_dates_aries: '3/21 - 4/19',
    zodiac_dates_taurus: '4/20 - 5/20',
    zodiac_dates_gemini: '5/21 - 6/21',
    zodiac_dates_cancer: '6/22 - 7/22',
    zodiac_dates_leo: '7/23 - 8/22',
    zodiac_dates_virgo: '8/23 - 9/22',
    zodiac_dates_libra: '9/23 - 10/23',
    zodiac_dates_scorpio: '10/24 - 11/21',
    zodiac_dates_sagittarius: '11/22 - 12/21',
    zodiac_dates_capricorn: '12/22 - 1/19',
    zodiac_dates_aquarius: '1/20 - 2/18',
    zodiac_dates_pisces: '2/19 - 3/20',

    zodiac_element_fire: '今日の{sign}には、情熱の炎が力強く燃え上がっています。内なるエネルギーが高まり、新しい挑戦への意欲がみなぎることでしょう。自信を持って一歩を踏み出せば、思いがけない幸運が訪れるはずです。',
    zodiac_element_water: '今日の{sign}には、感性の波が優しく打ち寄せています。直感がいつもより鋭くなり、周囲の方々の気持ちを深く感じ取ることができるでしょう。心の声に耳を傾ければ、大切な答えが見つかるはずです。',
    zodiac_element_earth: '今日の{sign}を、大地の安定したエネルギーが包み込んでいます。これまで積み重ねてきた努力が実を結び始める時期です。落ち着いて一歩ずつ進めば、望んでいた目標に手が届くでしょう。',
    zodiac_element_air: '今日の{sign}には、風のように自由なインスピレーションが吹き込んでいます。頭の中にきらめくアイデアが溢れ、コミュニケーションから大きな喜びを感じられるでしょう。心を開いて新しい出会いを受け入れれば、素晴らしいご縁が訪れるかもしれません。',

    zodiac_love_fire_good: '情熱のエネルギーが恋愛にも届き、ロマンティックな一日になりそうです。素直な気持ちの表現がお相手の心を掴むことでしょう。勇気を出して自分から近づいてみてください、期待以上の反応が返ってくるはずです。',
    zodiac_love_fire_caution: '情熱が強すぎると、お相手にプレッシャーを与えてしまうかもしれません。衝動的な告白や過度なアプローチは少しお休みにしましょう。お相手のペースに合わせてゆっくり進むことで、より良い結果につながります。',

    zodiac_love_water_good: '感受性が豊かになり、お相手との深い感情的な交流が生まれる日です。心からの会話が二人の絆をより深くしてくれるでしょう。ささやかな思いやりが大きな感動となって返ってくるかもしれません。',
    zodiac_love_water_caution: '感情の波が高まり、些細なことでも傷つきやすくなっていますのでご注意ください。お相手の言葉を深読みしすぎず、そのまま受け止める練習をなさってみてください。一人の時間で気持ちを整理すると、ずっと楽になれるでしょう。',

    zodiac_love_earth_good: '安定した温かなエネルギーが関係に信頼を加えてくれる日です。一緒に過ごす日常の小さな幸せの中に、本当の愛を感じることができるでしょう。心を込めた約束や計画が、関係をさらに発展させてくれます。',
    zodiac_love_earth_caution: '現実的すぎる考え方がロマンスの感性を抑えてしまうことがあります。完璧な条件ばかり求めていると、大切な気持ちを見逃してしまうかもしれません。もう少し心を開いて、柔軟に受け止めてみてください。',

    zodiac_love_air_good: '楽しい会話と知的な共感が愛を花開かせる日です。ウィットに富んだ一言がお相手の笑顔を引き出し、新しい出会いでも好印象を与えられるでしょう。気軽な約束が特別な思い出につながるかもしれません。',
    zodiac_love_air_caution: '頭だけで愛を分析すると、心がついてこないことがあります。論理的に正しいことと心が求めていることは違うかもしれませんので、胸の声にも耳を傾けてみてください。距離を置きすぎると無関心に映ることもありますので、気持ちの表現を大切になさってください。',

    zodiac_career_fire_good: '推進力が最高潮に達し、新しいプロジェクトや挑戦に有利な日です。リーダーシップを発揮するチャンスが訪れますので、ためらわず先頭に立ってみてください。大胆な決断が大きな成果につながるでしょう。',
    zodiac_career_fire_caution: '性急な判断がミスにつながることがありますので、重要な決定はもう一度考えてみてください。同僚との意見の衝突があるかもしれませんが、まず耳を傾ける姿勢が大切です。情熱は素晴らしいですが、計画的に進めることも忘れないでください。',

    zodiac_career_water_good: '直感がお仕事で光を放つ日です。創造的なアイデアが上司や同僚に良い印象を与えるでしょう。チーム内のムードメーカーとして、協力の相乗効果を高めてみてください。',
    zodiac_career_water_caution: '感情に左右されて業務の判断が曇ることがありますので、客観的な視点を保ちましょう。職場の人間関係に感情的に巻き込まれすぎるとストレスが大きくなります。仕事と感情を切り分ける意識が助けになるでしょう。',

    zodiac_career_earth_good: '丁寧さと誠実さが輝く一日です。細やかな業務処理が高い評価を得られ、金銭面でも安定した流れが続きます。長期的な投資や貯蓄の計画を立てるのに良い日です。',
    zodiac_career_earth_caution: '完璧主義が仕事のスピードを遅くすることがありますので、適切な妥協点を見つけてみてください。変化を恐れると成長の機会を逃してしまうかもしれません。新しいやり方にも柔軟な気持ちで向き合ってみましょう。',

    zodiac_career_air_good: 'コミュニケーション力が際立つ日です。プレゼンテーションや会議であなたのアイデアが注目を集めるでしょう。多角的な視点で問題を捉える能力がチームに大きく貢献します。',
    zodiac_career_air_caution: 'あれこれ手を出して何も完成しないことがありますので、優先順位を決めて集中しましょう。言葉が先行して実行が追いつかないと信頼を損なうことがあります。約束したことは必ず守る姿を見せてください。',

    zodiac_health_fire_good: 'エネルギーに満ち溢れ、活動的な運動がぴったりの日です。ランニングやダンス、高強度トレーニングなどでエネルギーをポジティブに発散してみてください。体を動かすと心まで爽快になるのを感じられるでしょう。',
    zodiac_health_fire_caution: '過度な活動で体力が消耗することがありますので、無理をなさらないでください。怒りを我慢するとストレスが体に溜まりますので、適切な発散法を見つけることが大切です。十分な水分補給と休息をお忘れなく。',

    zodiac_health_water_good: '心と体の調和が取れやすい日です。瞑想やヨガ、半身浴などのリラクゼーションが大きな効果をもたらすでしょう。十分な睡眠が明日のエネルギーを充電してくれますので、早めにお休みになってください。',
    zodiac_health_water_caution: '感情の動揺が身体の健康にも影響することがありますので、マインドフルネスを心がけてください。過食やストレス食いにご注意いただき、健康的な方法で気分転換をなさってください。温かいお茶が心を落ち着かせてくれるでしょう。',

    zodiac_health_earth_good: '規則正しい生活リズムが健康の頼もしい土台となる日です。バランスの取れた食事と適度な散歩が心身に活力を与えてくれるでしょう。自然の中で過ごす時間は特別な癒しのエネルギーをもたらします。',
    zodiac_health_earth_caution: '同じ姿勢で長時間座っていると体が固くなりますので、こまめにストレッチをしてください。過度な心配が消化機能に影響することがありますので、心を楽に持つことが大切です。軽い散歩で気分をリフレッシュしてみましょう。',

    zodiac_health_air_good: '軽い有酸素運動やアウトドア活動が活力を与えてくれる日です。澄んだ空気を吸いながらの散歩は、複雑な思考を整理し気分をすっきりさせてくれるでしょう。朝の呼吸法やストレッチで一日を始めると効果的です。',
    zodiac_health_air_caution: '考えすぎが頭痛や不眠につながることがありますので、頭を空にする時間を設けてみてください。カフェインの摂りすぎは不安感を増幅させることがありますので、適度にコントロールしましょう。デジタル機器から離れて、目と頭を休ませる時間を作ってください。',

    zodiac_affirm_fire: '私は内なる炎を信じ、どんな挑戦にも立ち向かう勇気を持っています。今日、私の情熱は世界を照らす光となります。',
    zodiac_affirm_water: '私は感情の流れを自然に受け入れ、その深みから知恵を得ます。今日、私の直感が最も正しい道へと導いてくれます。',
    zodiac_affirm_earth: '私は大地のように揺るぎなく、たゆまぬ努力で豊かさを築いていきます。今日、私の誠実さは必ず報われるでしょう。',
    zodiac_affirm_air: '私は風のように自由に考え、無限の可能性に向かって羽ばたきます。今日、私のアイデアは世界に新鮮なインスピレーションを届けます。',

    zodiac_compat_same: '同じ元素を持つ{signs}との間に、今日は特別な共感が生まれそうです。似たエネルギーを共有し、お互いをより深く理解できる一日になるでしょう。',
    zodiac_compat_complement: '補完的な元素を持つ{signs}と、素晴らしい相乗効果を生み出せそうです。それぞれの異なる長所が合わさり、一人では成し得ない素敵な結果を引き出せるでしょう。',

    zodiac_color_fire: '赤、オレンジ',
    zodiac_color_water: '青、シルバー',
    zodiac_color_earth: '緑、茶色',
    zodiac_color_air: '黄色、水色',

    zodiac_horoscope: '今日の運勢',
    zodiac_energy_level: 'エネルギーレベル',
    zodiac_about_sign: '📖 星座について',
    zodiac_element: 'エレメント'
  });

  /* ══════════════════════════════════════════
   *  Español (es)
   * ══════════════════════════════════════════ */
  addKeys('es', {
    landing_zodiac: 'Horóscopo Zodiacal',
    landing_zodiac_sub: 'Horóscopo diario para los 12 signos',
    zodiac_title: 'Horóscopo Zodiacal',
    zodiac_select_sign: 'Selecciona tu signo zodiacal',
    zodiac_your_sign: 'Tu signo: {sign}',
    zodiac_today: 'Horóscopo de hoy',

    zodiac_overview_header: '✦ Energía estelar de hoy',
    zodiac_love_header: '💕 Amor y relaciones',
    zodiac_career_header: '💼 Trabajo y finanzas',
    zodiac_health_header: '💪 Salud y bienestar',
    zodiac_lucky_header: '🍀 Información de la suerte',
    zodiac_compat_header: '💫 Compatibilidad de hoy',
    zodiac_affirm_header: '✨ Afirmación del día',
    zodiac_rating_header: '⭐ Puntuación estelar de hoy',

    zodiac_rating_love: 'Amor',
    zodiac_rating_career: 'Trabajo',
    zodiac_rating_health: 'Salud',
    zodiac_rating_luck: 'Suerte',

    zodiac_lucky_number: 'Números de la suerte',
    zodiac_lucky_color: 'Color de la suerte',
    zodiac_lucky_time: 'Hora de la suerte',
    zodiac_best_match: 'Mejor compatibilidad hoy',
    zodiac_watch_out: 'Ten cuidado con',

    zodiac_dates_aries: '3/21 - 4/19',
    zodiac_dates_taurus: '4/20 - 5/20',
    zodiac_dates_gemini: '5/21 - 6/21',
    zodiac_dates_cancer: '6/22 - 7/22',
    zodiac_dates_leo: '7/23 - 8/22',
    zodiac_dates_virgo: '8/23 - 9/22',
    zodiac_dates_libra: '9/23 - 10/23',
    zodiac_dates_scorpio: '10/24 - 11/21',
    zodiac_dates_sagittarius: '11/22 - 12/21',
    zodiac_dates_capricorn: '12/22 - 1/19',
    zodiac_dates_aquarius: '1/20 - 2/18',
    zodiac_dates_pisces: '2/19 - 3/20',

    zodiac_element_fire: 'Hoy el cosmos enciende una llama audaz en el interior de {sign}. Tu fuego interior arde con fuerza, impulsándote hacia nuevas aventuras y metas apasionantes. Confía en este torrente de energía — el universo está conspirando a tu favor.',
    zodiac_element_water: 'Una marea suave de profundidad emocional envuelve a {sign} hoy. Tu intuición está extraordinariamente aguda, permitiéndote percibir las corrientes invisibles a tu alrededor. Déjate llevar — revelaciones profundas te esperan bajo la superficie.',
    zodiac_element_earth: 'La energía estabilizadora de la tierra envuelve a {sign} con firmeza hoy. Las semillas que has plantado con paciencia comienzan a brotar y los resultados tangibles se acercan. Mantén tu rumbo — la cosecha está más cerca de lo que crees.',
    zodiac_element_air: 'Una brisa brillante de inspiración sopla sobre {sign} hoy. Las ideas centellean como relámpagos y cada conversación guarda el potencial de un descubrimiento inesperado. Abre tu mente de par en par — los vientos del cambio traen regalos extraordinarios.',

    zodiac_love_fire_good: 'La energía apasionada electrifica tu vida amorosa hoy. Tu confianza magnética y tu honestidad audaz cautivarán a quienes te rodean. Toma la iniciativa en el romance — las estrellas favorecen a quienes se atreven a expresar su corazón.',
    zodiac_love_fire_caution: 'Tu intensidad ardiente podría abrumar a alguien que necesita ternura ahora mismo. Las declaraciones impulsivas pueden generar presión en vez de pasión. Reduce el ritmo y escucha tanto como hablas — la paciencia aviva la llama.',

    zodiac_love_water_good: 'La intimidad emocional alcanza una profundidad hermosa hoy. Las conversaciones sinceras fortalecen tus lazos de maneras que las palabras solas no pueden capturar. Un pequeño gesto de cariño podría convertirse en un punto de inflexión en tu relación.',
    zodiac_love_water_caution: 'La sensibilidad elevada puede hacer que interpretes demasiado los comentarios casuales. Evita caer en suposiciones — pregunta directamente en lugar de interpretar en silencio. Un momento de soledad te ayudará a recalibrar tu brújula emocional.',

    zodiac_love_earth_good: 'Una energía estable y acogedora aporta calidez y confianza a tus relaciones. Encontrarás alegría profunda en los momentos simples compartidos. Una promesa hecha con el corazón hoy tendrá un significado duradero.',
    zodiac_love_earth_caution: 'Una mentalidad demasiado práctica puede apagar la chispa romántica que tu pareja anhela. No todo en el amor se puede medir o planificar — a veces la magia vive en la espontaneidad. Baja la guardia y abraza un poco de caos encantador.',

    zodiac_love_air_good: 'El ingenio chispeante y la conexión intelectual hacen que tu vida amorosa sea vibrante hoy. Un comentario ingenioso podría encender una nueva atracción o profundizar una existente. Planes ligeros pueden florecer en recuerdos inolvidables.',
    zodiac_love_air_caution: 'Analizar el amor solo con la cabeza puede dejar tu corazón desatendido. La lógica y la emoción siguen mapas diferentes — honra ambos. Ten presente que un aire de desapego podría confundirse con indiferencia por alguien que te quiere de verdad.',

    zodiac_career_fire_good: 'Tu impulso está en su punto máximo — este es el día para lanzar, presentar o liderar. Las oportunidades favorecen a los audaces y tu liderazgo natural atrae a otros hacia tu visión. Una decisión valiente hoy podría marcar el tono de las semanas por venir.',
    zodiac_career_fire_caution: 'Lanzarte de cabeza en las decisiones puede causar errores costosos. Un colega podría cuestionar tu enfoque — escúchale antes de reaccionar. Canaliza tu fuego en un plan estructurado y tus ambiciones tendrán un impacto mucho mayor.',

    zodiac_career_water_good: 'Tu intuición es un arma secreta en el trabajo hoy. Las soluciones creativas surgen sin esfuerzo, impresionando a superiores y compañeros por igual. Apóyate en la energía colaborativa — tu empatía te convierte en un miembro invaluable del equipo.',
    zodiac_career_water_caution: 'Las corrientes emocionales en el entorno laboral podrían nublar tu juicio profesional. Evita tomarte la dinámica de oficina como algo personal. Traza un límite claro entre sentimientos y hechos para mantenerte productivo.',

    zodiac_career_earth_good: 'La precisión y la fiabilidad te ganan un reconocimiento bien merecido hoy. El trabajo detallista te distinguirá, y las finanzas muestran tendencias favorables. Es un día excelente para revisar presupuestos, firmar contratos o planificar inversiones a largo plazo.',
    zodiac_career_earth_caution: 'El perfeccionismo puede frenar tu impulso — aprende a reconocer cuándo algo es lo suficientemente bueno. La resistencia a nuevos métodos podría hacerte perder un atajo innovador. Abraza la flexibilidad sin abandonar tus estándares.',

    zodiac_career_air_good: 'La comunicación es tu superpoder hoy. Presentaciones, negociaciones y lluvias de ideas se benefician de tu pensamiento ágil y tu expresión articulada. Una perspectiva fresca que ofrezcas podría ser el avance que tu equipo ha estado buscando.',
    zodiac_career_air_caution: 'Un enfoque disperso puede dejar demasiados proyectos a medias — prioriza sin piedad. Las palabras dichas a la ligera tienen peso, así que asegúrate de cumplir lo que prometes. Entrega resultados para reforzar la confianza que has ganado.',

    zodiac_health_fire_good: 'Una energía vibrante recorre tu cuerpo — canalízala con ejercicio dinámico. Los entrenamientos de alta intensidad, el baile o los deportes competitivos te llenarán de vitalidad. El movimiento es la mejor medicina para tu espíritu fogoso hoy.',
    zodiac_health_fire_caution: 'Quemar la vela por ambos extremos podría llevarte al agotamiento o a lesiones menores. La frustración reprimida puede manifestarse como dolores de cabeza o tensión muscular. Mantente hidratado, estira con frecuencia y date permiso para descansar.',

    zodiac_health_water_good: 'La armonía entre mente y cuerpo surge de forma natural hoy. La meditación, el yoga suave o un baño caliente renovarán tu espíritu en lo más profundo. Prioriza el sueño esta noche — tu subconsciente está realizando un trabajo de sanación importante.',
    zodiac_health_water_caution: 'La turbulencia emocional puede repercutir en síntomas físicos como fatiga o malestar digestivo. Sé consciente de la alimentación emocional — nutre tu cuerpo con intención, no por impulso. Una taza de té de hierbas y unas respiraciones profundas restaurarán tu equilibrio.',

    zodiac_health_earth_good: 'Una rutina constante es tu mayor activo de salud hoy. Comidas equilibradas, ejercicio moderado y tiempo en la naturaleza recargarán tus reservas maravillosamente. Incluso un breve paseo entre árboles puede equilibrar tu energía de formas sorprendentes.',
    zodiac_health_earth_caution: 'Estar sentado mucho tiempo puede causar rigidez — estira cada hora. La preocupación excesiva puede alterar tu digestión, así que suelta conscientemente lo que no puedes controlar. Un paseo suave por la tarde aliviará tanto el cuerpo como la mente.',

    zodiac_health_air_good: 'El cardio ligero y el aire fresco son exactamente lo que tu cuerpo necesita hoy. Una caminata enérgica, un paseo en bici o estiramientos al aire libre despejarán la niebla mental y elevarán tu ánimo. Comienza la mañana con ejercicios de respiración para un día centrado y lleno de energía.',
    zodiac_health_air_caution: 'Una mente hiperactiva puede provocar dolores de cabeza o insomnio — practica relajarte antes de dormir. Demasiada cafeína amplificará la energía nerviosa en lugar del enfoque. Aléjate de las pantallas periódicamente para dar a tus ojos y mente un merecido descanso.',

    zodiac_affirm_fire: 'Confío en el fuego que arde dentro de mí y poseo la valentía para conquistar cualquier desafío. Hoy, mi pasión se convierte en una luz que ilumina el mundo a mi alrededor.',
    zodiac_affirm_water: 'Abrazo el flujo natural de mis emociones y extraigo sabiduría de su profundidad. Hoy, mi intuición me guía por el camino más verdadero.',
    zodiac_affirm_earth: 'Me mantengo firme como la tierra misma, construyendo abundancia con esfuerzo constante. Hoy, mi dedicación será ricamente recompensada.',
    zodiac_affirm_air: 'Pienso libremente como el viento y me elevo hacia posibilidades infinitas. Hoy, mis ideas inspiran al mundo con frescura y creatividad.',

    zodiac_compat_same: 'Una resonancia natural con {signs} crea una comprensión poderosa hoy. La energía elemental compartida amplifica vuestra conexión, haciendo que la colaboración y la compañía fluyan sin esfuerzo.',
    zodiac_compat_complement: 'Una sinergia magnética con {signs} podría encender algo extraordinario hoy. Vuestras fortalezas complementarias se fusionan para crear resultados que ninguno podría lograr solo — apóyate en esta alianza dinámica.',

    zodiac_color_fire: 'Rojo, Naranja',
    zodiac_color_water: 'Azul, Plateado',
    zodiac_color_earth: 'Verde, Marrón',
    zodiac_color_air: 'Amarillo, Celeste',

    zodiac_horoscope: 'Horóscopo del día',
    zodiac_energy_level: 'Nivel de energía',
    zodiac_about_sign: '📖 Sobre este signo',
    zodiac_element: 'Elemento'
  });

  /* ══════════════════════════════════════════
   *  Português (pt)
   * ══════════════════════════════════════════ */
  addKeys('pt', {
    landing_zodiac: 'Horóscopo do Zodíaco',
    landing_zodiac_sub: 'Horóscopo diário para os 12 signos',
    zodiac_title: 'Horóscopo do Zodíaco',
    zodiac_select_sign: 'Selecione seu signo',
    zodiac_your_sign: 'Seu signo: {sign}',
    zodiac_today: 'Horóscopo de hoje',

    zodiac_overview_header: '✦ Energia estelar de hoje',
    zodiac_love_header: '💕 Amor e relacionamentos',
    zodiac_career_header: '💼 Carreira e finanças',
    zodiac_health_header: '💪 Saúde e bem-estar',
    zodiac_lucky_header: '🍀 Informações da sorte',
    zodiac_compat_header: '💫 Compatibilidade de hoje',
    zodiac_affirm_header: '✨ Afirmação do dia',
    zodiac_rating_header: '⭐ Avaliação estelar de hoje',

    zodiac_rating_love: 'Amor',
    zodiac_rating_career: 'Carreira',
    zodiac_rating_health: 'Saúde',
    zodiac_rating_luck: 'Sorte',

    zodiac_lucky_number: 'Números da sorte',
    zodiac_lucky_color: 'Cor da sorte',
    zodiac_lucky_time: 'Hora da sorte',
    zodiac_best_match: 'Melhor combinação hoje',
    zodiac_watch_out: 'Cuidado com',

    zodiac_dates_aries: '3/21 - 4/19',
    zodiac_dates_taurus: '4/20 - 5/20',
    zodiac_dates_gemini: '5/21 - 6/21',
    zodiac_dates_cancer: '6/22 - 7/22',
    zodiac_dates_leo: '7/23 - 8/22',
    zodiac_dates_virgo: '8/23 - 9/22',
    zodiac_dates_libra: '9/23 - 10/23',
    zodiac_dates_scorpio: '10/24 - 11/21',
    zodiac_dates_sagittarius: '11/22 - 12/21',
    zodiac_dates_capricorn: '12/22 - 1/19',
    zodiac_dates_aquarius: '1/20 - 2/18',
    zodiac_dates_pisces: '2/19 - 3/20',

    zodiac_element_fire: 'Hoje o cosmos acende uma chama ousada dentro de {sign}. Seu fogo interior queima intensamente, atraindo você para aventuras audaciosas e buscas apaixonadas. Confie nessa onda radiante de confiança — o universo está se alinhando para recompensar sua coragem.',
    zodiac_element_water: 'Uma maré suave de profundidade emocional envolve {sign} hoje. Sua intuição está notavelmente aguçada, permitindo que você perceba as correntes invisíveis ao seu redor. Entregue-se a esse fluxo — percepções profundas aguardam sob a superfície.',
    zodiac_element_earth: 'A energia fundamentadora da terra envolve {sign} com segurança firme hoje. As sementes que você pacientemente cultivou estão começando a brotar, e resultados concretos se aproximam. Mantenha seu curso — a colheita está mais perto do que você imagina.',
    zodiac_element_air: 'Uma brisa brilhante de inspiração sopra sobre {sign} hoje. Ideias faíscam como relâmpagos, e cada conversa guarda o potencial de uma descoberta inesperada. Abra sua mente amplamente — os ventos da mudança trazem presentes extraordinários.',

    zodiac_love_fire_good: 'A energia apaixonada eletrifica sua vida amorosa hoje. Sua confiança magnética e honestidade corajosa vão cativar quem está ao seu redor. Tome a iniciativa no romance — as estrelas favorecem quem ousa expressar o coração.',
    zodiac_love_fire_caution: 'Sua intensidade ardente pode sobrecarregar alguém que precisa de gentileza agora. Declarações impulsivas podem criar pressão em vez de paixão. Diminua o ritmo e ouça tanto quanto fala — a paciência aprofunda a chama.',

    zodiac_love_water_good: 'A intimidade emocional atinge uma profundidade encantadora hoje. Conversas sinceras fortalecem seus laços de formas que palavras sozinhas não conseguem captar. Um pequeno gesto genuíno de carinho pode se tornar um ponto de virada no seu relacionamento.',
    zodiac_love_water_caution: 'A sensibilidade elevada pode fazer você interpretar demais comentários casuais. Evite espiralar em suposições — pergunte diretamente em vez de interpretar em silêncio. Um momento de solidão pode ajudar a recalibrar sua bússola emocional.',

    zodiac_love_earth_good: 'Uma energia estável e acolhedora traz calor e confiança aos seus relacionamentos. Você encontrará alegria profunda nos momentos simples compartilhados. Uma promessa feita de coração hoje carrega um significado duradouro.',
    zodiac_love_earth_caution: 'Uma mentalidade excessivamente prática pode sufocar a centelha romântica que seu parceiro deseja. Nem tudo no amor pode ser medido ou planejado — às vezes a magia mora na espontaneidade. Baixe a guarda e abrace um pouco de belo caos.',

    zodiac_love_air_good: 'Brilho intelectual e conexão espirituosa tornam sua vida amorosa vibrante hoje. Um comentário esperto pode acender uma nova atração ou aprofundar uma existente. Planos despretensiosos podem florescer em memórias inesquecíveis.',
    zodiac_love_air_caution: 'Analisar o amor só com a cabeça pode deixar seu coração negligenciado. Lógica e emoção seguem mapas diferentes — honre ambos. Esteja atento para que uma postura distante não seja interpretada como indiferença por alguém que se importa profundamente.',

    zodiac_career_fire_good: 'Sua determinação está no auge — este é o dia para lançar, apresentar ou liderar. As oportunidades favorecem os ousados, e sua liderança natural atrai outros para sua visão. Uma decisão corajosa hoje pode definir o tom das próximas semanas.',
    zodiac_career_fire_caution: 'Mergulhar de cabeça nas decisões pode causar descuidos custosos. Um colega pode questionar sua abordagem — ouça antes de reagir. Canalize seu fogo em um plano estruturado e suas ambições terão um impacto muito maior.',

    zodiac_career_water_good: 'Sua intuição é uma arma secreta no trabalho hoje. Soluções criativas surgem naturalmente, impressionando superiores e colegas igualmente. Apoie-se na energia colaborativa — sua empatia faz de você um membro inestimável da equipe.',
    zodiac_career_water_caution: 'Correntes emocionais no ambiente de trabalho podem turvar seu julgamento profissional. Evite levar a dinâmica do escritório para o lado pessoal. Estabeleça um limite claro entre sentimentos e fatos para manter a produtividade.',

    zodiac_career_earth_good: 'Precisão e confiabilidade lhe rendem um reconhecimento merecido hoje. O trabalho detalhista vai destacá-lo, e as finanças apontam tendências favoráveis. É um dia excelente para revisar orçamentos, assinar contratos ou planejar investimentos de longo prazo.',
    zodiac_career_earth_caution: 'O perfeccionismo pode frear seu impulso — saiba quando o bom o suficiente é realmente bom o suficiente. A resistência a novos métodos pode fazer você perder um atalho inovador. Abrace a flexibilidade sem abandonar seus padrões.',

    zodiac_career_air_good: 'A comunicação é seu superpoder hoje. Apresentações, negociações e brainstorms se beneficiam do seu raciocínio rápido e expressão articulada. Uma perspectiva nova que você oferecer pode ser a inovação que sua equipe procurava.',
    zodiac_career_air_caution: 'O foco disperso pode deixar muitos projetos pela metade — priorize com rigor. Palavras ditas sem cuidado têm peso, então garanta que promessas sejam acompanhadas de ação. Entregue resultados para reforçar a confiança que você conquistou.',

    zodiac_health_fire_good: 'Energia vibrante percorre seu corpo — canalize-a com exercício dinâmico. Treinos de alta intensidade, dança ou esportes competitivos vão deixá-lo radiante. O movimento é o melhor remédio para seu espírito fogoso hoje.',
    zodiac_health_fire_caution: 'Queimar energia dos dois lados pode levar ao esgotamento ou a lesões leves. A frustração reprimida pode se manifestar como dores de cabeça ou tensão muscular. Mantenha-se hidratado, alongue-se frequentemente e dê a si mesmo permissão para descansar.',

    zodiac_health_water_good: 'A harmonia entre mente e corpo flui naturalmente hoje. Meditação, yoga suave ou um banho quente renovarão seu espírito profundamente. Priorize o sono esta noite — seu subconsciente está realizando um importante trabalho de cura.',
    zodiac_health_water_caution: 'A turbulência emocional pode repercutir em sintomas físicos como fadiga ou desconforto digestivo. Esteja atento à alimentação emocional — nutra-se com intenção, não por impulso. Uma xícara de chá de ervas e algumas respirações profundas restaurarão seu equilíbrio.',

    zodiac_health_earth_good: 'Uma rotina constante é seu maior ativo de saúde hoje. Refeições equilibradas, exercício moderado e tempo na natureza recarregarão suas reservas maravilhosamente. Até uma breve caminhada entre árvores pode equilibrar sua energia de formas surpreendentes.',
    zodiac_health_earth_caution: 'Ficar sentado por muito tempo pode causar rigidez — alongue-se a cada hora. A preocupação excessiva pode afetar sua digestão, então solte conscientemente o que não pode controlar. Uma caminhada suave à noite aliviará corpo e mente.',

    zodiac_health_air_good: 'Cardio leve e ar fresco são exatamente o que seu corpo precisa hoje. Uma caminhada rápida, um passeio de bicicleta ou alongamentos ao ar livre limparão a névoa mental e elevarão seu ânimo. Comece a manhã com exercícios de respiração para um dia centrado e energizado.',
    zodiac_health_air_caution: 'Uma mente hiperativa pode causar dores de cabeça ou noites sem sono — pratique se desligar antes de dormir. Cafeína em excesso amplifica a energia nervosa em vez do foco. Afaste-se das telas periodicamente para dar aos seus olhos e mente o descanso que merecem.',

    zodiac_affirm_fire: 'Confio no fogo que arde dentro de mim e possuo a coragem para conquistar qualquer desafio. Hoje, minha paixão se torna uma luz que ilumina o mundo ao meu redor.',
    zodiac_affirm_water: 'Abraço o fluxo natural das minhas emoções e extraio sabedoria de sua profundidade. Hoje, minha intuição me guia pelo caminho mais verdadeiro.',
    zodiac_affirm_earth: 'Mantenho-me firme como a própria terra, construindo abundância com esforço persistente. Hoje, minha dedicação será ricamente recompensada.',
    zodiac_affirm_air: 'Penso livremente como o vento e voo em direção a possibilidades infinitas. Hoje, minhas ideias sopram inspiração fresca para o mundo.',

    zodiac_compat_same: 'Uma ressonância natural com {signs} cria uma compreensão poderosa hoje. A energia elemental compartilhada amplifica a conexão de vocês, tornando a colaboração e a companhia algo natural e fluido.',
    zodiac_compat_complement: 'Uma sinergia magnética com {signs} pode acender algo extraordinário hoje. Suas forças complementares se fundem para criar resultados que nenhum dos dois alcançaria sozinho — apoie-se nessa parceria dinâmica.',

    zodiac_color_fire: 'Vermelho, Laranja',
    zodiac_color_water: 'Azul, Prata',
    zodiac_color_earth: 'Verde, Marrom',
    zodiac_color_air: 'Amarelo, Azul-claro',

    zodiac_horoscope: 'Horóscopo do dia',
    zodiac_energy_level: 'Nível de energia',
    zodiac_about_sign: '📖 Sobre este signo',
    zodiac_element: 'Elemento'
  });

  /* ══════════════════════════════════════════
   *  Français (fr)
   * ══════════════════════════════════════════ */
  addKeys('fr', {
    landing_zodiac: 'Horoscope du Zodiaque',
    landing_zodiac_sub: 'Horoscope quotidien des 12 signes',
    zodiac_title: 'Horoscope du Zodiaque',
    zodiac_select_sign: 'Choisissez votre signe',
    zodiac_your_sign: 'Votre signe : {sign}',
    zodiac_today: "Horoscope du jour",

    zodiac_overview_header: "✦ Énergie stellaire du jour",
    zodiac_love_header: '💕 Amour & relations',
    zodiac_career_header: '💼 Carrière & finances',
    zodiac_health_header: '💪 Santé & bien-être',
    zodiac_lucky_header: '🍀 Infos chance',
    zodiac_compat_header: '💫 Compatibilité du jour',
    zodiac_affirm_header: '✨ Affirmation du jour',
    zodiac_rating_header: '⭐ Note stellaire du jour',

    zodiac_rating_love: 'Amour',
    zodiac_rating_career: 'Carrière',
    zodiac_rating_health: 'Santé',
    zodiac_rating_luck: 'Chance',

    zodiac_lucky_number: 'Chiffres porte-bonheur',
    zodiac_lucky_color: 'Couleur porte-bonheur',
    zodiac_lucky_time: 'Heure de chance',
    zodiac_best_match: 'Meilleure compatibilité du jour',
    zodiac_watch_out: 'Attention à',

    zodiac_dates_aries: '3/21 - 4/19',
    zodiac_dates_taurus: '4/20 - 5/20',
    zodiac_dates_gemini: '5/21 - 6/21',
    zodiac_dates_cancer: '6/22 - 7/22',
    zodiac_dates_leo: '7/23 - 8/22',
    zodiac_dates_virgo: '8/23 - 9/22',
    zodiac_dates_libra: '9/23 - 10/23',
    zodiac_dates_scorpio: '10/24 - 11/21',
    zodiac_dates_sagittarius: '11/22 - 12/21',
    zodiac_dates_capricorn: '12/22 - 1/19',
    zodiac_dates_aquarius: '1/20 - 2/18',
    zodiac_dates_pisces: '2/19 - 3/20',

    zodiac_element_fire: "Aujourd'hui, le cosmos allume une flamme audacieuse au cœur de {sign}. Votre feu intérieur brûle intensément, vous attirant vers des aventures passionnantes et des défis stimulants. Faites confiance à cette vague rayonnante de confiance — l'univers conspire en votre faveur.",
    zodiac_element_water: "Une douce marée de profondeur émotionnelle enveloppe {sign} aujourd'hui. Votre intuition est remarquablement aiguisée, vous permettant de percevoir les courants invisibles autour de vous. Laissez-vous porter — des révélations profondes vous attendent sous la surface.",
    zodiac_element_earth: "L'énergie stabilisatrice de la terre entoure {sign} d'une assurance solide aujourd'hui. Les graines que vous avez patiemment semées commencent à germer, et des résultats concrets approchent. Gardez le cap — la récolte est plus proche que vous ne le pensez.",
    zodiac_element_air: "Un souffle brillant d'inspiration traverse {sign} aujourd'hui. Les idées jaillissent comme des éclairs, et chaque conversation recèle le potentiel d'une découverte inattendue. Ouvrez grand votre esprit — les vents du changement portent des cadeaux extraordinaires.",

    zodiac_love_fire_good: "L'énergie passionnée électrise votre vie amoureuse aujourd'hui. Votre confiance magnétique et votre honnêteté audacieuse captiveront votre entourage. Prenez l'initiative en amour — les étoiles favorisent ceux qui osent exprimer leur cœur.",
    zodiac_love_fire_caution: "Votre intensité ardente pourrait submerger quelqu'un qui a besoin de douceur en ce moment. Les déclarations impulsives risquent de créer de la pression plutôt que de la passion. Ralentissez et écoutez autant que vous parlez — la patience nourrit la flamme.",

    zodiac_love_water_good: "L'intimité émotionnelle atteint une profondeur magnifique aujourd'hui. Les conversations sincères renforcent vos liens d'une manière que les mots seuls ne sauraient capturer. Un petit geste de tendresse pourrait devenir un tournant dans votre relation.",
    zodiac_love_water_caution: "Une sensibilité accrue pourrait vous amener à surinterpreter des remarques anodines. Évitez de vous perdre dans les suppositions — posez la question directement plutôt que d'interpréter en silence. Un moment de solitude vous aidera à recalibrer votre boussole émotionnelle.",

    zodiac_love_earth_good: "Une énergie stable et bienveillante apporte chaleur et confiance à vos relations. Vous trouverez une joie profonde dans les moments simples partagés. Une promesse faite avec le cœur aujourd'hui portera une signification durable.",
    zodiac_love_earth_caution: "Un esprit trop pratique peut étouffer l'étincelle romantique que votre partenaire espère. Tout dans l'amour ne peut être mesuré ou planifié — parfois la magie réside dans la spontanéité. Baissez votre garde et accueillez un peu de beau désordre.",

    zodiac_love_air_good: "L'esprit pétillant et la connexion intellectuelle rendent votre vie amoureuse vibrante aujourd'hui. Un mot d'esprit pourrait allumer une nouvelle attirance ou approfondir un lien existant. Des projets légers peuvent fleurir en souvenirs inoubliables.",
    zodiac_love_air_caution: "Analyser l'amour uniquement avec la tête risque de négliger votre cœur. La logique et l'émotion suivent des cartes différentes — honorez les deux. Attention à ce qu'un air de détachement ne soit pas perçu comme de l'indifférence par quelqu'un qui tient à vous.",

    zodiac_career_fire_good: "Votre élan est à son apogée — c'est le jour pour lancer, présenter ou diriger. Les opportunités favorisent les audacieux, et votre leadership naturel attire les autres vers votre vision. Une décision courageuse aujourd'hui pourrait donner le ton des semaines à venir.",
    zodiac_career_fire_caution: "Foncer tête baissée dans les décisions peut entraîner des erreurs coûteuses. Un collègue pourrait remettre en question votre approche — écoutez-le avant de réagir. Canalisez votre feu dans un plan structuré et vos ambitions auront un impact bien plus grand.",

    zodiac_career_water_good: "Votre intuition est une arme secrète au travail aujourd'hui. Les solutions créatives surgissent naturellement, impressionnant supérieurs et collègues. Appuyez-vous sur l'énergie collaborative — votre empathie fait de vous un membre inestimable de l'équipe.",
    zodiac_career_water_caution: "Les courants émotionnels au bureau pourraient troubler votre jugement professionnel. Évitez de prendre la dynamique de bureau personnellement. Établissez une frontière claire entre sentiments et faits pour rester productif.",

    zodiac_career_earth_good: "La précision et la fiabilité vous valent une reconnaissance bien méritée aujourd'hui. Le travail minutieux vous distinguera, et les finances montrent des tendances favorables. C'est un excellent jour pour revoir les budgets, signer des contrats ou planifier des investissements à long terme.",
    zodiac_career_earth_caution: "Le perfectionnisme peut freiner votre élan — sachez quand le bien est l'ennemi du mieux. La résistance aux nouvelles méthodes pourrait vous faire manquer un raccourci innovant. Embrassez la flexibilité sans abandonner vos standards.",

    zodiac_career_air_good: "La communication est votre super-pouvoir aujourd'hui. Présentations, négociations et brainstorms bénéficient de votre pensée vive et de votre expression articulée. Une perspective fraîche que vous offrirez pourrait être la percée que votre équipe attendait.",
    zodiac_career_air_caution: "Un focus dispersé peut laisser trop de projets inachevés — priorisez impitoyablement. Les mots prononcés à la légère ont du poids, alors assurez-vous que vos promesses sont suivies d'actes. Tenez vos engagements pour renforcer la confiance que vous avez gagnée.",

    zodiac_health_fire_good: "Une énergie vibrante parcourt votre corps — canalisez-la par un exercice dynamique. Les entraînements intenses, la danse ou les sports compétitifs vous rempliront de vitalité. Le mouvement est le meilleur remède pour votre esprit fougueux aujourd'hui.",
    zodiac_health_fire_caution: "Brûler la chandelle par les deux bouts pourrait mener à l'épuisement ou à des blessures mineures. La frustration refoulée peut se manifester par des maux de tête ou des tensions musculaires. Restez hydraté, étirez-vous souvent et accordez-vous la permission de vous reposer.",

    zodiac_health_water_good: "L'harmonie corps-esprit vient naturellement aujourd'hui. La méditation, le yoga doux ou un bain chaud renouvelleront votre esprit en profondeur. Priorisez le sommeil ce soir — votre subconscient effectue un important travail de guérison.",
    zodiac_health_water_caution: "La turbulence émotionnelle peut se répercuter en symptômes physiques comme la fatigue ou l'inconfort digestif. Soyez attentif à l'alimentation émotionnelle — nourrissez-vous avec intention, pas par impulsion. Une tasse de tisane et quelques respirations profondes restaureront votre équilibre.",

    zodiac_health_earth_good: "Une routine régulière est votre meilleur atout santé aujourd'hui. Des repas équilibrés, de l'exercice modéré et du temps dans la nature rechargeront merveilleusement vos réserves. Même une brève promenade parmi les arbres peut ancrer votre énergie de façon remarquable.",
    zodiac_health_earth_caution: "Rester assis longtemps peut causer des raideurs — étirez-vous toutes les heures. L'inquiétude excessive peut perturber votre digestion, alors lâchez consciemment ce que vous ne pouvez pas contrôler. Une douce promenade en soirée apaisera corps et esprit.",

    zodiac_health_air_good: "Le cardio léger et l'air frais sont exactement ce dont votre corps a besoin aujourd'hui. Une marche rapide, une balade à vélo ou des étirements en plein air dissiperont le brouillard mental et rehausseront votre moral. Commencez la matinée par des exercices de respiration pour une journée centrée et énergisée.",
    zodiac_health_air_caution: "Un esprit hyperactif peut provoquer des maux de tête ou des nuits agitées — pratiquez le lâcher-prise avant le coucher. Trop de caféine amplifiera l'énergie nerveuse plutôt que la concentration. Éloignez-vous des écrans périodiquement pour offrir à vos yeux et votre esprit un repos bien mérité.",

    zodiac_affirm_fire: "Je fais confiance au feu qui brûle en moi et je possède le courage de surmonter tout défi. Aujourd'hui, ma passion devient une lumière qui illumine le monde autour de moi.",
    zodiac_affirm_water: "J'accueille le flux naturel de mes émotions et j'en tire sagesse et profondeur. Aujourd'hui, mon intuition me guide sur le chemin le plus juste.",
    zodiac_affirm_earth: "Je me tiens solide comme la terre elle-même, bâtissant l'abondance par un effort constant. Aujourd'hui, ma dévotion sera richement récompensée.",
    zodiac_affirm_air: "Je pense librement comme le vent et m'élève vers des possibilités infinies. Aujourd'hui, mes idées insufflent une inspiration fraîche dans le monde.",

    zodiac_compat_same: "Une résonance naturelle avec {signs} crée une compréhension profonde aujourd'hui. L'énergie élémentaire partagée amplifie votre connexion, rendant la collaboration et la compagnie naturelles et fluides.",
    zodiac_compat_complement: "Une synergie magnétique avec {signs} pourrait allumer quelque chose d'extraordinaire aujourd'hui. Vos forces complémentaires fusionnent pour créer des résultats qu'aucun de vous ne pourrait atteindre seul — embrassez cette alliance dynamique.",

    zodiac_color_fire: 'Rouge, Orange',
    zodiac_color_water: 'Bleu, Argenté',
    zodiac_color_earth: 'Vert, Marron',
    zodiac_color_air: 'Jaune, Bleu ciel',

    zodiac_horoscope: "Horoscope du jour",
    zodiac_energy_level: "Niveau d'énergie",
    zodiac_about_sign: '📖 À propos de ce signe',
    zodiac_element: 'Élément'
  });

  /* ══════════════════════════════════════════
   *  Deutsch (de)
   * ══════════════════════════════════════════ */
  addKeys('de', {
    landing_zodiac: 'Sternzeichen-Horoskop',
    landing_zodiac_sub: 'Tageshoroskop für 12 Sternzeichen',
    zodiac_title: 'Sternzeichen-Horoskop',
    zodiac_select_sign: 'Wählen Sie Ihr Sternzeichen',
    zodiac_your_sign: 'Ihr Sternzeichen: {sign}',
    zodiac_today: 'Horoskop für heute',

    zodiac_overview_header: '✦ Heutige Sternenenergie',
    zodiac_love_header: '💕 Liebe & Beziehungen',
    zodiac_career_header: '💼 Karriere & Finanzen',
    zodiac_health_header: '💪 Gesundheit & Wohlbefinden',
    zodiac_lucky_header: '🍀 Glücksinformationen',
    zodiac_compat_header: '💫 Kompatibilität des Tages',
    zodiac_affirm_header: '✨ Affirmation des Tages',
    zodiac_rating_header: '⭐ Sternbewertung des Tages',

    zodiac_rating_love: 'Liebe',
    zodiac_rating_career: 'Karriere',
    zodiac_rating_health: 'Gesundheit',
    zodiac_rating_luck: 'Glück',

    zodiac_lucky_number: 'Glückszahlen',
    zodiac_lucky_color: 'Glücksfarbe',
    zodiac_lucky_time: 'Glücksstunde',
    zodiac_best_match: 'Beste Übereinstimmung heute',
    zodiac_watch_out: 'Vorsicht vor',

    zodiac_dates_aries: '3/21 - 4/19',
    zodiac_dates_taurus: '4/20 - 5/20',
    zodiac_dates_gemini: '5/21 - 6/21',
    zodiac_dates_cancer: '6/22 - 7/22',
    zodiac_dates_leo: '7/23 - 8/22',
    zodiac_dates_virgo: '8/23 - 9/22',
    zodiac_dates_libra: '9/23 - 10/23',
    zodiac_dates_scorpio: '10/24 - 11/21',
    zodiac_dates_sagittarius: '11/22 - 12/21',
    zodiac_dates_capricorn: '12/22 - 1/19',
    zodiac_dates_aquarius: '1/20 - 2/18',
    zodiac_dates_pisces: '2/19 - 3/20',

    zodiac_element_fire: 'Heute entfacht der Kosmos eine kühne Flamme im Inneren von {sign}. Ihr inneres Feuer lodert kraftvoll und zieht Sie zu mutigen Unternehmungen und leidenschaftlichen Zielen. Vertrauen Sie dieser strahlenden Welle des Selbstvertrauens — das Universum richtet sich aus, um Ihren Mut zu belohnen.',
    zodiac_element_water: 'Eine sanfte Flut emotionaler Tiefe umhüllt {sign} heute. Ihre Intuition ist bemerkenswert geschärft und ermöglicht es Ihnen, die unsichtbaren Strömungen um Sie herum wahrzunehmen. Geben Sie sich diesem Fluss hin — tiefgreifende Erkenntnisse warten unter der Oberfläche.',
    zodiac_element_earth: 'Die erdende Energie der Erde umgibt {sign} heute mit beständiger Zuversicht. Die Samen, die Sie geduldig gepflegt haben, beginnen zu sprießen, und greifbare Ergebnisse rücken näher. Halten Sie Ihren Kurs — die Ernte ist näher, als Sie denken.',
    zodiac_element_air: 'Ein brillanter Windhauch der Inspiration weht heute durch {sign}. Ideen sprühen wie Blitze, und jedes Gespräch birgt das Potenzial für unerwartete Entdeckungen. Öffnen Sie Ihren Geist weit — die Winde des Wandels tragen außergewöhnliche Geschenke.',

    zodiac_love_fire_good: 'Leidenschaftliche Energie elektrisiert heute Ihr Liebesleben. Ihr magnetisches Selbstvertrauen und Ihre mutige Ehrlichkeit werden Ihr Umfeld fesseln. Ergreifen Sie die Initiative in der Liebe — die Sterne begünstigen jene, die ihr Herz auszudrücken wagen.',
    zodiac_love_fire_caution: 'Ihre feurige Intensität könnte jemanden überwältigen, der gerade Sanftheit braucht. Impulsive Bekenntnisse könnten Druck statt Leidenschaft erzeugen. Verlangsamen Sie Ihr Tempo und hören Sie ebenso viel zu, wie Sie sprechen — Geduld vertieft die Flamme.',

    zodiac_love_water_good: 'Emotionale Intimität erreicht heute eine wunderschöne Tiefe. Herzliche Gespräche stärken Ihre Bindungen auf eine Weise, die Worte allein nicht erfassen können. Eine kleine, aufrichtige Geste der Fürsorge könnte zum Wendepunkt in Ihrer Beziehung werden.',
    zodiac_love_water_caution: 'Erhöhte Empfindsamkeit könnte dazu führen, dass Sie beiläufige Bemerkungen überinterpretieren. Hüten Sie sich davor, in Annahmen zu versinken — fragen Sie direkt, statt stillschweigend zu deuten. Ein Moment der Stille hilft Ihnen, Ihren emotionalen Kompass neu auszurichten.',

    zodiac_love_earth_good: 'Beständige, nährende Energie bringt Wärme und Vertrauen in Ihre Beziehungen. Sie werden tiefe Freude in einfachen gemeinsamen Momenten finden. Ein aufrichtiges Versprechen heute trägt eine bleibende Bedeutung.',
    zodiac_love_earth_caution: 'Eine zu praktische Denkweise kann den romantischen Funken ersticken, den Ihr Partner sich wünscht. Nicht alles in der Liebe lässt sich messen oder planen — manchmal lebt die Magie in der Spontanität. Lassen Sie Ihre Deckung fallen und begrüßen Sie ein wenig wunderbares Chaos.',

    zodiac_love_air_good: 'Sprühender Witz und intellektuelle Verbindung machen Ihr Liebesleben heute lebendig. Eine geistreiche Bemerkung könnte eine neue Anziehung entfachen oder eine bestehende vertiefen. Unbeschwerte Pläne können zu unvergesslichen Erinnerungen erblühen.',
    zodiac_love_air_caution: 'Liebe nur mit dem Kopf zu analysieren, kann Ihr Herz vernachlässigen. Logik und Emotion folgen verschiedenen Landkarten — ehren Sie beide. Achten Sie darauf, dass eine distanzierte Haltung nicht als Gleichgültigkeit missverstanden wird von jemandem, dem Sie am Herzen liegen.',

    zodiac_career_fire_good: 'Ihr Antrieb ist auf dem Höhepunkt — dies ist der Tag zum Starten, Präsentieren oder Führen. Gelegenheiten begünstigen die Mutigen, und Ihre natürliche Führungsstärke zieht andere zu Ihrer Vision. Eine mutige Entscheidung heute könnte den Ton für die kommenden Wochen setzen.',
    zodiac_career_fire_caution: 'Kopflos in Entscheidungen zu stürzen, kann kostspielige Versäumnisse verursachen. Ein Kollege könnte Ihren Ansatz hinterfragen — hören Sie zu, bevor Sie reagieren. Kanalisieren Sie Ihr Feuer in einen strukturierten Plan, und Ihre Ambitionen werden mit weit größerer Wirkung landen.',

    zodiac_career_water_good: 'Ihre Intuition ist heute eine Geheimwaffe bei der Arbeit. Kreative Lösungen entstehen mühelos und beeindrucken Vorgesetzte und Kollegen gleichermaßen. Setzen Sie auf kollaborative Energie — Ihre Empathie macht Sie zu einem unschätzbaren Teammitglied.',
    zodiac_career_water_caution: 'Emotionale Unterströmungen am Arbeitsplatz könnten Ihr professionelles Urteil trüben. Nehmen Sie die Büro-Dynamik nicht persönlich — nicht jede Spitze ist beabsichtigt. Ziehen Sie eine klare Grenze zwischen Gefühlen und Fakten, um produktiv zu bleiben.',

    zodiac_career_earth_good: 'Präzision und Zuverlässigkeit bringen Ihnen heute wohlverdiente Anerkennung. Detailgenaue Arbeit wird Sie hervorheben, und die Finanzen zeigen günstige Trends. Dies ist ein hervorragender Tag, um Budgets zu prüfen, Verträge zu unterzeichnen oder langfristige Investitionen zu planen.',
    zodiac_career_earth_caution: 'Perfektionismus kann Ihren Schwung bremsen — wissen Sie, wann gut genug wirklich gut genug ist. Widerstand gegen neue Methoden könnte Sie eine innovative Abkürzung verpassen lassen. Umarmen Sie Flexibilität, ohne Ihre Standards aufzugeben.',

    zodiac_career_air_good: 'Kommunikation ist heute Ihre Superkraft. Präsentationen, Verhandlungen und Brainstormings profitieren von Ihrem schnellen Denken und Ihrer eloquenten Ausdrucksweise. Eine frische Perspektive, die Sie einbringen, könnte der Durchbruch sein, auf den Ihr Team gewartet hat.',
    zodiac_career_air_caution: 'Ein verstreuter Fokus kann zu viele Projekte halb fertig lassen — priorisieren Sie konsequent. Leichtfertig gesprochene Worte haben Gewicht, also stellen Sie sicher, dass Versprechen durch Taten untermauert werden. Liefern Sie Ergebnisse, um das Vertrauen zu stärken, das Sie sich erarbeitet haben.',

    zodiac_health_fire_good: 'Vibrierende Energie durchströmt Ihren Körper — kanalisieren Sie sie durch dynamische Bewegung. Hochintensive Workouts, Tanzen oder Wettkampfsport werden Sie zum Strahlen bringen. Bewegung ist heute die beste Medizin für Ihren feurigen Geist.',
    zodiac_health_fire_caution: 'Die Kerze an beiden Enden zu brennen, könnte zu Erschöpfung oder leichten Verletzungen führen. Unterdrückte Frustration kann sich als Kopfschmerzen oder Muskelverspannungen äußern. Bleiben Sie hydriert, dehnen Sie sich oft und erlauben Sie sich Ruhe.',

    zodiac_health_water_good: 'Körper-Geist-Harmonie stellt sich heute ganz natürlich ein. Meditation, sanftes Yoga oder ein warmes Bad werden Ihren Geist auf tiefster Ebene erneuern. Priorisieren Sie heute Nacht den Schlaf — Ihr Unterbewusstsein leistet wichtige Heilarbeit.',
    zodiac_health_water_caution: 'Emotionale Turbulenzen können sich in körperlichen Symptomen wie Müdigkeit oder Verdauungsbeschwerden niederschlagen. Achten Sie auf emotionales Essen — nähren Sie sich mit Absicht, nicht aus Impuls. Eine Tasse Kräutertee und ein paar tiefe Atemzüge stellen Ihr Gleichgewicht wieder her.',

    zodiac_health_earth_good: 'Eine beständige Routine ist heute Ihr größtes Gesundheitskapital. Ausgewogene Mahlzeiten, moderate Bewegung und Zeit in der Natur laden Ihre Reserven wunderbar auf. Selbst ein kurzer Spaziergang unter Bäumen kann Ihre Energie auf bemerkenswerte Weise erden.',
    zodiac_health_earth_caution: 'Langes Sitzen kann zu Steifheit führen — dehnen Sie sich jede Stunde. Übermäßige Sorgen können Ihre Verdauung beeinträchtigen, also lassen Sie bewusst los, was Sie nicht kontrollieren können. Ein sanfter Abendspaziergang wird Körper und Geist gleichermaßen erleichtern.',

    zodiac_health_air_good: 'Leichtes Cardio und frische Luft sind genau das, was Ihr Körper heute braucht. Ein zügiger Spaziergang, eine Fahrradtour oder Dehnen im Freien werden den mentalen Nebel lichten und Ihre Stimmung heben. Beginnen Sie den Morgen mit Atemübungen für einen zentrierten, energiereichen Tag.',
    zodiac_health_air_caution: 'Ein überaktiver Geist kann zu Kopfschmerzen oder unruhigem Schlaf führen — üben Sie, vor dem Schlafengehen abzuschalten. Zu viel Koffein verstärkt nervöse Energie statt Konzentration. Entfernen Sie sich regelmäßig von Bildschirmen, um Ihren Augen und Ihrem Geist eine wohlverdiente Pause zu gönnen.',

    zodiac_affirm_fire: 'Ich vertraue dem Feuer in mir und besitze den Mut, jede Herausforderung zu meistern. Heute wird meine Leidenschaft zu einem Licht, das die Welt um mich herum erleuchtet.',
    zodiac_affirm_water: 'Ich nehme den natürlichen Fluss meiner Emotionen an und schöpfe Weisheit aus ihrer Tiefe. Heute führt mich meine Intuition auf den wahrhaftigsten Weg.',
    zodiac_affirm_earth: 'Ich stehe fest wie die Erde selbst und schaffe Fülle durch beständige Anstrengung. Heute wird meine Hingabe reich belohnt werden.',
    zodiac_affirm_air: 'Ich denke frei wie der Wind und fliege unendlichen Möglichkeiten entgegen. Heute hauchen meine Ideen der Welt frische Inspiration ein.',

    zodiac_compat_same: 'Eine natürliche Resonanz mit {signs} schafft heute ein tiefes Verständnis. Gemeinsame elementare Energie verstärkt Ihre Verbindung und lässt Zusammenarbeit und Gesellschaft mühelos erscheinen.',
    zodiac_compat_complement: 'Eine magnetische Synergie mit {signs} könnte heute etwas Außergewöhnliches entfachen. Ihre komplementären Stärken verschmelzen zu Ergebnissen, die keiner allein erreichen könnte — lehnen Sie sich in diese dynamische Partnerschaft.',

    zodiac_color_fire: 'Rot, Orange',
    zodiac_color_water: 'Blau, Silber',
    zodiac_color_earth: 'Grün, Braun',
    zodiac_color_air: 'Gelb, Himmelblau',

    zodiac_horoscope: 'Tageshoroskop',
    zodiac_energy_level: 'Energielevel',
    zodiac_about_sign: '📖 Über dieses Sternzeichen',
    zodiac_element: 'Element'
  });

})();
