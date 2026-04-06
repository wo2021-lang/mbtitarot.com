/* ============================================
 *  translations-compat.js - MBTI 궁합 분석 번역 (7개 언어)
 *  generateMBTICompatSection 에서 사용하는 모든 텍스트
 * ============================================ */
(function () {
  'use strict';

  function addKeys(langCode, keys) {
    if (!window.I18N) return;
    if (!window.I18N[langCode]) window.I18N[langCode] = {};
    var target = window.I18N[langCode];
    for (var k in keys) { if (keys.hasOwnProperty(k)) target[k] = keys[k]; }
  }

  /* ══════════════════════════════════════════
   *  한국어 (ko)
   * ══════════════════════════════════════════ */
  addKeys('ko', {
    // 축 이름
    compat_axis_energy: '에너지 방향',
    compat_axis_perception: '정보 인식',
    compat_axis_decision: '의사 결정',
    compat_axis_lifestyle: '생활 방식',

    // 축별 설명 (각 극성)
    compat_axis_E: '외향적(E)으로 사교적이고 활동적인 에너지를 발산',
    compat_axis_I: '내향적(I)으로 조용한 환경에서 깊이 있는 사고를 선호',
    compat_axis_S: '감각적(S)으로 현실적이고 구체적인 정보를 중시',
    compat_axis_N: '직관적(N)으로 가능성과 큰 그림을 먼저 포착',
    compat_axis_T: '사고형(T)으로 논리와 공정함을 기준으로 판단',
    compat_axis_F: '감정형(F)으로 사람과 가치를 기준으로 판단',
    compat_axis_J: '판단형(J)으로 계획적이고 체계적인 생활을 선호',
    compat_axis_P: '인식형(P)으로 유연하고 즉흥적인 생활을 즐김',

    // 궁합 유형
    compat_type_perfect: '완벽한 동질감',
    compat_type_high: '높은 친밀감',
    compat_type_balanced: '균형 잡힌 보완',
    compat_type_challenging: '도전적 성장',
    compat_type_opposite: '정반대의 매력',

    // 궁합 유형 설명
    compat_type_perfect_desc: '같은 유형끼리의 만남은 서로를 깊이 이해하는 편안함이 있습니다. 하지만 동일한 약점도 공유하기 때문에, 서로의 부족한 부분을 보완하려는 의식적인 노력이 필요합니다. 너무 비슷해서 오히려 성장의 자극이 부족할 수 있으니, 서로에게 새로운 경험과 관점을 의도적으로 제공해주세요.',
    compat_type_high_desc: '세 가지 축이 같아 기본적인 소통이 매우 원활합니다. 한 가지 다른 축이 서로에게 신선한 자극을 주면서도 큰 갈등 없이 보완이 됩니다. 이상적인 궁합 중 하나로, 서로의 차이를 배움의 기회로 삼으면 더욱 깊은 관계로 발전합니다.',
    compat_type_balanced_desc: '공통점과 차이점이 균형을 이루는 조합입니다. 서로 비슷한 부분에서 공감대를 형성하면서도, 다른 부분에서 새로운 시각을 얻을 수 있습니다. 차이를 존중하고 상대방의 관점에서 생각하려는 노력이 관계의 질을 크게 높입니다.',
    compat_type_challenging_desc: '세 가지 축이 달라 소통에 노력이 필요하지만, 그만큼 서로에게 배울 점이 많은 관계입니다. 상대방을 통해 자신이 미처 발견하지 못한 세계를 경험할 수 있습니다. 인내심과 열린 마음이 이 관계의 핵심 열쇠입니다.',
    compat_type_opposite_desc: '모든 축이 달라 처음에는 서로를 이해하기 어려울 수 있지만, 이것이 오히려 가장 강력한 보완 관계가 됩니다. 상대방이 가진 것이 바로 자신에게 없는 것이기에, 서로를 통해 온전한 하나가 될 수 있습니다. 존중과 인정이 무엇보다 중요합니다.',

    // 라벨
    compat_me_label: '나',
    compat_partner_label: '상대',
    compat_match_label: '일치',
    compat_empathy: '공감',
    compat_complement: '보완',

    // 축별 같을 때 (공감)
    compat_same_axis: '두 분 모두 {desc}합니다. 이 영역에서는 자연스러운 이해와 공감이 형성됩니다. 같은 스타일이기에 충돌이 적지만, 한쪽으로 치우칠 수 있으니 균형을 의식하세요.',

    // 축별 다를 때 (갈등/보완)
    compat_conflict_energy: '외향적인 쪽은 함께 활동하고 싶어하고, 내향적인 쪽은 혼자만의 시간이 필요합니다. 서로의 에너지 충전 방식을 존중하고, 함께하는 시간과 개인 시간의 균형을 맞추세요.',
    compat_conflict_perception: '감각형은 "지금, 여기, 사실"에 집중하고, 직관형은 "앞으로의 가능성"에 집중합니다. 감각형의 현실 감각과 직관형의 미래 통찰이 합쳐지면 최고의 팀이 됩니다.',
    compat_conflict_decision: '사고형은 논리적 옳고 그름으로, 감정형은 관계와 감정을 기준으로 판단합니다. 사고형은 상대의 감정을 먼저 인정한 후 논리를 펼치고, 감정형은 감정 표현 후 상대의 분석에도 귀를 기울여주세요.',
    compat_conflict_lifestyle: '판단형은 계획대로 진행되기를 원하고, 인식형은 상황에 따라 유연하게 대처하고 싶어합니다. 큰 틀은 판단형의 계획을 따르되, 세부 사항에서는 인식형의 유연함을 수용하는 것이 좋은 타협점입니다.',

    // 소통 팁 / 주의사항 헤더
    compat_comm_tips_header: '◆ 소통 팁',
    compat_watch_out_header: '◆ 주의할 점',

    // 소통 팁 항목
    compat_tip_energy: '대화의 양과 빈도에 대한 기대를 미리 맞추세요',
    compat_tip_perception: '구체적 사실과 전체적 맥락을 함께 전달하세요',
    compat_tip_decision: '문제 해결 시 감정과 논리를 모두 다뤄주세요',
    compat_tip_lifestyle: '계획과 즉흥의 적절한 밸런스를 찾으세요',
    compat_tip_general1: '상대의 유형을 바꾸려 하지 말고, 있는 그대로를 이해하는 것이 핵심입니다',
    compat_tip_general2: '서로의 강점을 인정하고 칭찬하는 습관을 만드세요',

    // 주의할 점 - 유사형 (sameCount >= 3)
    compat_warn_similar1: '너무 비슷해서 서로의 단점도 같다는 점을 인식하세요',
    compat_warn_similar2: '의도적으로 새로운 경험을 함께 시도하세요',
    compat_warn_similar3: '갈등이 생겼을 때 "당연히 이해할 것"이라는 기대를 버리세요',

    // 주의할 점 - 차이형 (sameCount < 3)
    compat_warn_diff1: '차이를 "잘못된 것"으로 판단하지 마세요. 단지 "다른 것"입니다',
    compat_warn_diff2: '갈등 상황에서 상대의 MBTI 관점에서 한 번 더 생각해보세요',
    compat_warn_diff3: '서로의 약점을 비판하기보다, 강점으로 보완해주세요'
  });

  /* ══════════════════════════════════════════
   *  영어 (en)
   * ══════════════════════════════════════════ */
  addKeys('en', {
    compat_axis_energy: 'Energy Direction',
    compat_axis_perception: 'Information Perception',
    compat_axis_decision: 'Decision Making',
    compat_axis_lifestyle: 'Lifestyle',

    compat_axis_E: 'Extroverted (E), radiating sociable and active energy',
    compat_axis_I: 'Introverted (I), preferring deep thought in quiet settings',
    compat_axis_S: 'Sensing (S), valuing practical and concrete information',
    compat_axis_N: 'Intuitive (N), grasping possibilities and the bigger picture',
    compat_axis_T: 'Thinking (T), judging by logic and fairness',
    compat_axis_F: 'Feeling (F), judging by people and values',
    compat_axis_J: 'Judging (J), preferring planned and structured living',
    compat_axis_P: 'Perceiving (P), enjoying flexible and spontaneous living',

    compat_type_perfect: 'Perfect Harmony',
    compat_type_high: 'High Intimacy',
    compat_type_balanced: 'Balanced Complement',
    compat_type_challenging: 'Challenging Growth',
    compat_type_opposite: 'Opposite Attraction',

    compat_type_perfect_desc: 'Being the same type brings deep mutual understanding and comfort. However, you share the same weaknesses, so conscious effort to compensate for each other\'s shortcomings is needed. Being too similar may lack growth stimulation, so intentionally provide new experiences and perspectives for each other.',
    compat_type_high_desc: 'Three matching axes mean excellent basic communication. The one different axis provides fresh stimulation while complementing without major conflict. This is one of the ideal combinations \u2014 treating differences as learning opportunities deepens the relationship further.',
    compat_type_balanced_desc: 'A combination where similarities and differences are well balanced. You can form common ground in similar areas while gaining fresh perspectives from different ones. Respecting differences and trying to see from your partner\'s viewpoint greatly improves relationship quality.',
    compat_type_challenging_desc: 'With three different axes, communication requires effort, but there\'s much to learn from each other. Through your partner, you can experience worlds you never discovered on your own. Patience and an open mind are the key to this relationship.',
    compat_type_opposite_desc: 'All axes are different, which may make initial understanding difficult, but this creates the strongest complementary relationship. What your partner has is exactly what you lack, so together you become complete. Respect and appreciation are paramount.',

    compat_me_label: 'Me',
    compat_partner_label: 'Partner',
    compat_match_label: 'match',
    compat_empathy: 'Empathy',
    compat_complement: 'Complement',

    compat_same_axis: 'Both of you are {desc}. Natural understanding and empathy form in this area. Less conflict due to the same style, but be mindful of balance as it can lean too far in one direction.',

    compat_conflict_energy: 'The extroverted side wants shared activities, while the introverted side needs alone time. Respect each other\'s energy recharging methods and balance time together with personal time.',
    compat_conflict_perception: 'Sensors focus on "here and now, facts" while Intuitives focus on "future possibilities." When the Sensor\'s practical awareness combines with the Intuitive\'s future insight, you become the best team.',
    compat_conflict_decision: 'Thinkers judge by logical right and wrong, Feelers by relationships and emotions. Thinkers should acknowledge emotions first before presenting logic; Feelers should also listen to their partner\'s analysis after expressing feelings.',
    compat_conflict_lifestyle: 'Judgers want things to go according to plan, while Perceivers want to adapt flexibly. Follow the Judger\'s plan for the big picture, but allow the Perceiver\'s flexibility in the details \u2014 that\'s a good compromise.',

    compat_comm_tips_header: '\u25C6 Communication Tips',
    compat_watch_out_header: '\u25C6 Things to Watch Out For',

    compat_tip_energy: 'Align expectations about conversation frequency and depth',
    compat_tip_perception: 'Share both specific facts and the broader context',
    compat_tip_decision: 'Address both emotions and logic when solving problems',
    compat_tip_lifestyle: 'Find the right balance between planning and spontaneity',
    compat_tip_general1: 'Don\'t try to change your partner\'s type \u2014 understanding them as they are is key',
    compat_tip_general2: 'Build a habit of recognizing and praising each other\'s strengths',

    compat_warn_similar1: 'Recognize that being so similar means sharing the same weaknesses',
    compat_warn_similar2: 'Intentionally try new experiences together',
    compat_warn_similar3: 'Let go of the expectation that they "should naturally understand"',

    compat_warn_diff1: 'Don\'t judge differences as "wrong" \u2014 they\'re simply "different"',
    compat_warn_diff2: 'In conflicts, try thinking from your partner\'s MBTI perspective',
    compat_warn_diff3: 'Instead of criticizing weaknesses, complement them with strengths'
  });

  /* ══════════════════════════════════════════
   *  일본어 (ja)
   * ══════════════════════════════════════════ */
  addKeys('ja', {
    compat_axis_energy: 'エネルギーの方向',
    compat_axis_perception: '情報の認識',
    compat_axis_decision: '意思決定',
    compat_axis_lifestyle: 'ライフスタイル',

    compat_axis_E: '外向的(E)で社交的かつ活動的なエネルギーを発する',
    compat_axis_I: '内向的(I)で静かな環境での深い思考を好む',
    compat_axis_S: '感覚的(S)で現実的かつ具体的な情報を重視する',
    compat_axis_N: '直感的(N)で可能性と全体像をまず捉える',
    compat_axis_T: '思考型(T)で論理と公平さを基準に判断する',
    compat_axis_F: '感情型(F)で人と価値を基準に判断する',
    compat_axis_J: '判断型(J)で計画的かつ体系的な生活を好む',
    compat_axis_P: '知覚型(P)で柔軟かつ即興的な生活を楽しむ',

    compat_type_perfect: '完璧な同質感',
    compat_type_high: '高い親密感',
    compat_type_balanced: 'バランスの取れた補完',
    compat_type_challenging: '挑戦的な成長',
    compat_type_opposite: '正反対の魅力',

    compat_type_perfect_desc: '同じタイプ同士の出会いは、互いを深く理解する心地よさがあります。しかし同じ弱点も共有するため、互いの不足を補う意識的な努力が必要です。似すぎて成長の刺激が不足することもあるので、意図的に新しい経験と視点を提供し合いましょう。',
    compat_type_high_desc: '3つの軸が同じで基本的なコミュニケーションが非常にスムーズです。1つの異なる軸が新鮮な刺激を与えつつ、大きな葛藤なく補完し合えます。理想的な相性の一つで、違いを学びの機会とすればさらに深い関係に発展します。',
    compat_type_balanced_desc: '共通点と相違点がバランスよく調和した組み合わせです。似ている部分で共感を形成しながら、異なる部分で新しい視点を得られます。違いを尊重し、相手の立場で考える努力が関係の質を大きく高めます。',
    compat_type_challenging_desc: '3つの軸が異なりコミュニケーションに努力が必要ですが、それだけ互いに学ぶ点が多い関係です。パートナーを通じて自分がまだ発見していない世界を体験できます。忍耐と開かれた心がこの関係の鍵です。',
    compat_type_opposite_desc: 'すべての軸が異なり最初は理解が難しいかもしれませんが、これがむしろ最も強力な補完関係になります。相手が持つものがまさに自分にないものであり、互いを通じて一つの完全体になれます。尊重と認め合いが何より大切です。',

    compat_me_label: '自分',
    compat_partner_label: '相手',
    compat_match_label: '一致',
    compat_empathy: '共感',
    compat_complement: '補完',

    compat_same_axis: 'お二人とも{desc}タイプです。この領域では自然な理解と共感が生まれます。同じスタイルなので衝突は少ないですが、偏りすぎないようバランスを意識しましょう。',

    compat_conflict_energy: '外向的な方は一緒に活動したがり、内向的な方は一人の時間が必要です。互いのエネルギー充電方法を尊重し、一緒の時間と個人の時間のバランスを取りましょう。',
    compat_conflict_perception: '感覚型は「今、ここ、事実」に集中し、直感型は「将来の可能性」に集中します。感覚型の現実感覚と直感型の未来への洞察が合わされば最高のチームになります。',
    compat_conflict_decision: '思考型は論理的な正誤で、感情型は関係と感情を基準に判断します。思考型は相手の感情をまず認めてから論理を展開し、感情型は感情表現の後に相手の分析にも耳を傾けましょう。',
    compat_conflict_lifestyle: '判断型は計画通りに進めたく、知覚型は状況に応じて柔軟に対応したがります。大枠は判断型の計画に従い、細部では知覚型の柔軟さを受け入れるのが良い妥協点です。',

    compat_comm_tips_header: '\u25C6 コミュニケーションのコツ',
    compat_watch_out_header: '\u25C6 注意すべきポイント',

    compat_tip_energy: '会話の量と頻度の期待値を事前に合わせましょう',
    compat_tip_perception: '具体的な事実と全体的な文脈を一緒に伝えましょう',
    compat_tip_decision: '問題解決時に感情と論理の両方を扱いましょう',
    compat_tip_lifestyle: '計画と即興の適切なバランスを見つけましょう',
    compat_tip_general1: '相手のタイプを変えようとせず、ありのままを理解することが大切です',
    compat_tip_general2: '互いの強みを認め、褒める習慣を作りましょう',

    compat_warn_similar1: '似すぎているため、互いの弱点も同じであることを認識しましょう',
    compat_warn_similar2: '意図的に新しい体験を一緒に試みましょう',
    compat_warn_similar3: '葛藤が生じた時「当然わかるはず」という期待を手放しましょう',

    compat_warn_diff1: '違いを「間違い」と判断しないでください。ただ「異なる」だけです',
    compat_warn_diff2: '葛藤の場面で相手のMBTIの視点からもう一度考えてみましょう',
    compat_warn_diff3: '互いの弱点を批判するより、強みで補い合いましょう'
  });

  /* ══════════════════════════════════════════
   *  스페인어 (es)
   * ══════════════════════════════════════════ */
  addKeys('es', {
    compat_axis_energy: 'Dirección de Energía',
    compat_axis_perception: 'Percepción de Información',
    compat_axis_decision: 'Toma de Decisiones',
    compat_axis_lifestyle: 'Estilo de Vida',

    compat_axis_E: 'Extrovertido (E), irradia energía sociable y activa',
    compat_axis_I: 'Introvertido (I), prefiere la reflexión profunda en entornos tranquilos',
    compat_axis_S: 'Sensorial (S), valora la información práctica y concreta',
    compat_axis_N: 'Intuitivo (N), capta posibilidades y el panorama general',
    compat_axis_T: 'Pensador (T), juzga por lógica y equidad',
    compat_axis_F: 'Sentimental (F), juzga por personas y valores',
    compat_axis_J: 'Juzgador (J), prefiere una vida planificada y estructurada',
    compat_axis_P: 'Perceptivo (P), disfruta de una vida flexible y espontánea',

    compat_type_perfect: 'Armonía Perfecta',
    compat_type_high: 'Alta Intimidad',
    compat_type_balanced: 'Complemento Equilibrado',
    compat_type_challenging: 'Crecimiento Desafiante',
    compat_type_opposite: 'Atracción Opuesta',

    compat_type_perfect_desc: 'Ser del mismo tipo trae una comprensión mutua profunda y comodidad. Sin embargo, comparten las mismas debilidades, por lo que se necesita un esfuerzo consciente para compensar las carencias del otro. Al ser tan similares, puede faltar estímulo de crecimiento, así que ofrézcanse intencionalmente nuevas experiencias y perspectivas.',
    compat_type_high_desc: 'Tres ejes coincidentes significan una comunicación básica excelente. El eje diferente proporciona estímulo fresco mientras se complementan sin conflictos mayores. Es una de las combinaciones ideales: tratar las diferencias como oportunidades de aprendizaje profundiza aún más la relación.',
    compat_type_balanced_desc: 'Una combinación donde similitudes y diferencias están bien equilibradas. Pueden formar terreno común en áreas similares mientras obtienen perspectivas frescas de las diferentes. Respetar las diferencias e intentar ver desde el punto de vista del otro mejora enormemente la calidad de la relación.',
    compat_type_challenging_desc: 'Con tres ejes diferentes, la comunicación requiere esfuerzo, pero hay mucho que aprender mutuamente. A través de tu pareja, puedes experimentar mundos que nunca descubriste por tu cuenta. La paciencia y una mente abierta son la clave de esta relación.',
    compat_type_opposite_desc: 'Todos los ejes son diferentes, lo que puede dificultar la comprensión inicial, pero esto crea la relación complementaria más fuerte. Lo que tu pareja tiene es exactamente lo que te falta, así que juntos se completan. El respeto y la apreciación son fundamentales.',

    compat_me_label: 'Yo',
    compat_partner_label: 'Pareja',
    compat_match_label: 'coincidencia',
    compat_empathy: 'Empatía',
    compat_complement: 'Complemento',

    compat_same_axis: 'Ambos son {desc}. En esta área se forma una comprensión y empatía naturales. Menos conflicto por el mismo estilo, pero tengan cuidado con el desequilibrio al inclinarse demasiado en una dirección.',

    compat_conflict_energy: 'El lado extrovertido quiere actividades compartidas, mientras el introvertido necesita tiempo a solas. Respeten los métodos de recarga de energía del otro y equilibren el tiempo juntos con el tiempo personal.',
    compat_conflict_perception: 'Los sensoriales se enfocan en "aquí y ahora, hechos" mientras los intuitivos en "posibilidades futuras". Cuando la conciencia práctica del sensorial se combina con la visión futura del intuitivo, forman el mejor equipo.',
    compat_conflict_decision: 'Los pensadores juzgan por lo lógicamente correcto, los sentimentales por relaciones y emociones. Los pensadores deben reconocer las emociones primero antes de presentar lógica; los sentimentales también deben escuchar el análisis del otro después de expresar sentimientos.',
    compat_conflict_lifestyle: 'Los juzgadores quieren que las cosas sigan el plan, mientras los perceptivos quieren adaptarse con flexibilidad. Sigan el plan del juzgador para el panorama general, pero permitan la flexibilidad del perceptivo en los detalles.',

    compat_comm_tips_header: '\u25C6 Consejos de Comunicación',
    compat_watch_out_header: '\u25C6 Cosas a Tener en Cuenta',

    compat_tip_energy: 'Alineen las expectativas sobre la frecuencia y profundidad de las conversaciones',
    compat_tip_perception: 'Compartan tanto hechos específicos como el contexto general',
    compat_tip_decision: 'Aborden tanto las emociones como la lógica al resolver problemas',
    compat_tip_lifestyle: 'Encuentren el equilibrio adecuado entre planificación y espontaneidad',
    compat_tip_general1: 'No intenten cambiar el tipo de su pareja; comprenderlos tal como son es la clave',
    compat_tip_general2: 'Creen el hábito de reconocer y elogiar las fortalezas del otro',

    compat_warn_similar1: 'Reconozcan que ser tan similares significa compartir las mismas debilidades',
    compat_warn_similar2: 'Intenten intencionalmente nuevas experiencias juntos',
    compat_warn_similar3: 'Abandonen la expectativa de que "deberían entender naturalmente"',

    compat_warn_diff1: 'No juzguen las diferencias como "incorrectas"; simplemente son "diferentes"',
    compat_warn_diff2: 'En conflictos, intenten pensar desde la perspectiva MBTI de su pareja',
    compat_warn_diff3: 'En vez de criticar debilidades, complémentense con fortalezas'
  });

  /* ══════════════════════════════════════════
   *  포르투갈어 (pt)
   * ══════════════════════════════════════════ */
  addKeys('pt', {
    compat_axis_energy: 'Direção de Energia',
    compat_axis_perception: 'Percepção de Informação',
    compat_axis_decision: 'Tomada de Decisão',
    compat_axis_lifestyle: 'Estilo de Vida',

    compat_axis_E: 'Extrovertido (E), irradiando energia sociável e ativa',
    compat_axis_I: 'Introvertido (I), preferindo pensamento profundo em ambientes tranquilos',
    compat_axis_S: 'Sensorial (S), valorizando informações práticas e concretas',
    compat_axis_N: 'Intuitivo (N), captando possibilidades e o panorama geral',
    compat_axis_T: 'Pensador (T), julgando por lógica e justiça',
    compat_axis_F: 'Sentimental (F), julgando por pessoas e valores',
    compat_axis_J: 'Julgador (J), preferindo uma vida planejada e estruturada',
    compat_axis_P: 'Perceptivo (P), aproveitando uma vida flexível e espontânea',

    compat_type_perfect: 'Harmonia Perfeita',
    compat_type_high: 'Alta Intimidade',
    compat_type_balanced: 'Complemento Equilibrado',
    compat_type_challenging: 'Crescimento Desafiador',
    compat_type_opposite: 'Atração Oposta',

    compat_type_perfect_desc: 'Ser do mesmo tipo traz compreensão mútua profunda e conforto. Porém, compartilham as mesmas fraquezas, então é preciso esforço consciente para compensar as deficiências do outro. Sendo tão similares, pode faltar estímulo de crescimento, então ofereçam intencionalmente novas experiências e perspectivas.',
    compat_type_high_desc: 'Três eixos coincidentes significam comunicação básica excelente. O eixo diferente proporciona estímulo fresco enquanto se complementam sem grandes conflitos. É uma das combinações ideais: tratar diferenças como oportunidades de aprendizado aprofunda ainda mais a relação.',
    compat_type_balanced_desc: 'Uma combinação onde semelhanças e diferenças estão bem equilibradas. Podem formar terreno comum em áreas semelhantes enquanto ganham perspectivas novas das diferentes. Respeitar diferenças e tentar ver do ponto de vista do parceiro melhora muito a qualidade da relação.',
    compat_type_challenging_desc: 'Com três eixos diferentes, a comunicação requer esforço, mas há muito a aprender mutuamente. Através do parceiro, você pode experimentar mundos que nunca descobriu sozinho. Paciência e mente aberta são a chave desta relação.',
    compat_type_opposite_desc: 'Todos os eixos são diferentes, o que pode dificultar a compreensão inicial, mas isso cria a relação complementar mais forte. O que seu parceiro tem é exatamente o que lhe falta, então juntos se completam. Respeito e apreciação são fundamentais.',

    compat_me_label: 'Eu',
    compat_partner_label: 'Parceiro',
    compat_match_label: 'coincidência',
    compat_empathy: 'Empatia',
    compat_complement: 'Complemento',

    compat_same_axis: 'Ambos são {desc}. Nesta área, compreensão e empatia naturais se formam. Menos conflito pelo mesmo estilo, mas fiquem atentos ao equilíbrio para não pender demais para um lado.',

    compat_conflict_energy: 'O lado extrovertido quer atividades compartilhadas, enquanto o introvertido precisa de tempo sozinho. Respeitem os métodos de recarga de energia do outro e equilibrem o tempo juntos com o tempo pessoal.',
    compat_conflict_perception: 'Sensoriais focam em "aqui e agora, fatos" enquanto intuitivos focam em "possibilidades futuras". Quando a consciência prática do sensorial combina com a visão futura do intuitivo, formam a melhor equipe.',
    compat_conflict_decision: 'Pensadores julgam pelo certo e errado lógico, sentimentais por relacionamentos e emoções. Pensadores devem reconhecer emoções primeiro antes de apresentar lógica; sentimentais devem também ouvir a análise do parceiro após expressar sentimentos.',
    compat_conflict_lifestyle: 'Julgadores querem que as coisas sigam o plano, enquanto perceptivos querem se adaptar com flexibilidade. Sigam o plano do julgador no panorama geral, mas permitam a flexibilidade do perceptivo nos detalhes.',

    compat_comm_tips_header: '\u25C6 Dicas de Comunicação',
    compat_watch_out_header: '\u25C6 Pontos de Atenção',

    compat_tip_energy: 'Alinhem expectativas sobre frequência e profundidade das conversas',
    compat_tip_perception: 'Compartilhem tanto fatos específicos quanto o contexto geral',
    compat_tip_decision: 'Abordem tanto emoções quanto lógica ao resolver problemas',
    compat_tip_lifestyle: 'Encontrem o equilíbrio certo entre planejamento e espontaneidade',
    compat_tip_general1: 'Não tente mudar o tipo do parceiro; compreendê-lo como é constitui a chave',
    compat_tip_general2: 'Criem o hábito de reconhecer e elogiar os pontos fortes do outro',

    compat_warn_similar1: 'Reconheçam que ser tão similares significa compartilhar as mesmas fraquezas',
    compat_warn_similar2: 'Tentem intencionalmente novas experiências juntos',
    compat_warn_similar3: 'Abandonem a expectativa de que "deveriam entender naturalmente"',

    compat_warn_diff1: 'Não julguem diferenças como "erradas"; são simplesmente "diferentes"',
    compat_warn_diff2: 'Em conflitos, tentem pensar pela perspectiva MBTI do parceiro',
    compat_warn_diff3: 'Em vez de criticar fraquezas, complementem-se com forças'
  });

  /* ══════════════════════════════════════════
   *  프랑스어 (fr)
   * ══════════════════════════════════════════ */
  addKeys('fr', {
    compat_axis_energy: 'Direction de l\u2019\u00C9nergie',
    compat_axis_perception: 'Perception de l\u2019Information',
    compat_axis_decision: 'Prise de D\u00E9cision',
    compat_axis_lifestyle: 'Style de Vie',

    compat_axis_E: 'Extraverti (E), rayonnant d\u2019\u00E9nergie sociable et active',
    compat_axis_I: 'Introverti (I), pr\u00E9f\u00E9rant la r\u00E9flexion profonde dans le calme',
    compat_axis_S: 'Sensoriel (S), valorisant les informations pratiques et concr\u00E8tes',
    compat_axis_N: 'Intuitif (N), saisissant les possibilit\u00E9s et la vue d\u2019ensemble',
    compat_axis_T: 'Penseur (T), jugeant par la logique et l\u2019\u00E9quit\u00E9',
    compat_axis_F: 'Sentimental (F), jugeant par les personnes et les valeurs',
    compat_axis_J: 'Juge (J), pr\u00E9f\u00E9rant une vie planifi\u00E9e et structur\u00E9e',
    compat_axis_P: 'Perceptif (P), appr\u00E9ciant une vie flexible et spontan\u00E9e',

    compat_type_perfect: 'Harmonie Parfaite',
    compat_type_high: 'Haute Intimit\u00E9',
    compat_type_balanced: 'Compl\u00E9ment \u00C9quilibr\u00E9',
    compat_type_challenging: 'Croissance Stimulante',
    compat_type_opposite: 'Attraction des Oppos\u00E9s',

    compat_type_perfect_desc: '\u00CAtre du m\u00EAme type apporte une compr\u00E9hension mutuelle profonde et du confort. Cependant, vous partagez les m\u00EAmes faiblesses, un effort conscient pour compenser les lacunes de l\u2019autre est donc n\u00E9cessaire. \u00CAtre trop similaires peut manquer de stimulation de croissance, offrez-vous intentionnellement de nouvelles exp\u00E9riences et perspectives.',
    compat_type_high_desc: 'Trois axes correspondants signifient une excellente communication de base. L\u2019axe diff\u00E9rent apporte une stimulation fra\u00eeche tout en se compl\u00E9tant sans conflit majeur. C\u2019est l\u2019une des combinaisons id\u00E9ales \u2014 traiter les diff\u00E9rences comme des opportunit\u00E9s d\u2019apprentissage approfondit la relation.',
    compat_type_balanced_desc: 'Une combinaison o\u00F9 similitudes et diff\u00E9rences sont bien \u00E9quilibr\u00E9es. Vous pouvez former un terrain commun dans les domaines similaires tout en gagnant de nouvelles perspectives dans les diff\u00E9rents. Respecter les diff\u00E9rences et essayer de voir du point de vue du partenaire am\u00E9liore grandement la qualit\u00E9 de la relation.',
    compat_type_challenging_desc: 'Avec trois axes diff\u00E9rents, la communication demande des efforts, mais il y a beaucoup \u00E0 apprendre mutuellement. \u00C0 travers votre partenaire, vous pouvez d\u00E9couvrir des mondes insoup\u00E7onn\u00E9s. La patience et l\u2019ouverture d\u2019esprit sont la cl\u00E9 de cette relation.',
    compat_type_opposite_desc: 'Tous les axes sont diff\u00E9rents, ce qui peut rendre la compr\u00E9hension initiale difficile, mais cela cr\u00E9e la relation compl\u00E9mentaire la plus forte. Ce que votre partenaire a est exactement ce qui vous manque, ensemble vous devenez complets. Le respect et l\u2019appr\u00E9ciation sont primordiaux.',

    compat_me_label: 'Moi',
    compat_partner_label: 'Partenaire',
    compat_match_label: 'correspondance',
    compat_empathy: 'Empathie',
    compat_complement: 'Compl\u00E9ment',

    compat_same_axis: 'Vous \u00EAtes tous les deux {desc}. La compr\u00E9hension et l\u2019empathie naturelles se forment dans ce domaine. Moins de conflits gr\u00E2ce au m\u00EAme style, mais attention \u00E0 l\u2019\u00E9quilibre car cela peut pencher trop d\u2019un c\u00F4t\u00E9.',

    compat_conflict_energy: 'Le c\u00F4t\u00E9 extraverti veut des activit\u00E9s partag\u00E9es, tandis que l\u2019introverti a besoin de temps seul. Respectez les m\u00E9thodes de recharge \u00E9nerg\u00E9tique de l\u2019autre et \u00E9quilibrez le temps ensemble et le temps personnel.',
    compat_conflict_perception: 'Les sensoriels se concentrent sur "ici et maintenant, les faits" tandis que les intuitifs sur "les possibilit\u00E9s futures". Quand la conscience pratique du sensoriel se combine avec la vision future de l\u2019intuitif, vous formez la meilleure \u00E9quipe.',
    compat_conflict_decision: 'Les penseurs jugent par le bien et le mal logique, les sentimentaux par les relations et les \u00E9motions. Les penseurs doivent reconna\u00eetre les \u00E9motions avant de pr\u00E9senter la logique ; les sentimentaux doivent aussi \u00E9couter l\u2019analyse du partenaire apr\u00E8s avoir exprim\u00E9 leurs sentiments.',
    compat_conflict_lifestyle: 'Les juges veulent que les choses suivent le plan, tandis que les perceptifs veulent s\u2019adapter avec flexibilit\u00E9. Suivez le plan du juge pour les grandes lignes, mais laissez la flexibilit\u00E9 du perceptif dans les d\u00E9tails.',

    compat_comm_tips_header: '\u25C6 Conseils de Communication',
    compat_watch_out_header: '\u25C6 Points de Vigilance',

    compat_tip_energy: 'Alignez vos attentes sur la fr\u00E9quence et la profondeur des conversations',
    compat_tip_perception: 'Partagez \u00E0 la fois les faits sp\u00E9cifiques et le contexte g\u00E9n\u00E9ral',
    compat_tip_decision: 'Abordez \u00E0 la fois les \u00E9motions et la logique lors de la r\u00E9solution de probl\u00E8mes',
    compat_tip_lifestyle: 'Trouvez le bon \u00E9quilibre entre planification et spontan\u00E9it\u00E9',
    compat_tip_general1: 'N\u2019essayez pas de changer le type de votre partenaire \u2014 le comprendre tel qu\u2019il est constitue la cl\u00E9',
    compat_tip_general2: 'Prenez l\u2019habitude de reconna\u00eetre et de f\u00E9liciter les forces de l\u2019autre',

    compat_warn_similar1: 'Reconnaissez qu\u2019\u00EAtre si similaires signifie partager les m\u00EAmes faiblesses',
    compat_warn_similar2: 'Essayez intentionnellement de nouvelles exp\u00E9riences ensemble',
    compat_warn_similar3: 'Abandonnez l\u2019attente qu\u2019ils "devraient naturellement comprendre"',

    compat_warn_diff1: 'Ne jugez pas les diff\u00E9rences comme "fausses" \u2014 elles sont simplement "diff\u00E9rentes"',
    compat_warn_diff2: 'En cas de conflit, essayez de penser du point de vue MBTI de votre partenaire',
    compat_warn_diff3: 'Au lieu de critiquer les faiblesses, compl\u00E9tez-les avec des forces'
  });

  /* ══════════════════════════════════════════
   *  독일어 (de)
   * ══════════════════════════════════════════ */
  addKeys('de', {
    compat_axis_energy: 'Energierichtung',
    compat_axis_perception: 'Informationswahrnehmung',
    compat_axis_decision: 'Entscheidungsfindung',
    compat_axis_lifestyle: 'Lebensstil',

    compat_axis_E: 'Extravertiert (E), strahlt gesellige und aktive Energie aus',
    compat_axis_I: 'Introvertiert (I), bevorzugt tiefes Nachdenken in ruhiger Umgebung',
    compat_axis_S: 'Sensorisch (S), sch\u00E4tzt praktische und konkrete Informationen',
    compat_axis_N: 'Intuitiv (N), erfasst M\u00F6glichkeiten und das gro\u00DFe Ganze',
    compat_axis_T: 'Denker (T), urteilt nach Logik und Fairness',
    compat_axis_F: 'F\u00FChler (F), urteilt nach Menschen und Werten',
    compat_axis_J: 'Beurteiler (J), bevorzugt ein geplantes und strukturiertes Leben',
    compat_axis_P: 'Wahrnehmer (P), genie\u00DFt ein flexibles und spontanes Leben',

    compat_type_perfect: 'Perfekte Harmonie',
    compat_type_high: 'Hohe Intimit\u00E4t',
    compat_type_balanced: 'Ausgewogene Erg\u00E4nzung',
    compat_type_challenging: 'Herausforderndes Wachstum',
    compat_type_opposite: 'Anziehung der Gegens\u00E4tze',

    compat_type_perfect_desc: 'Gleicher Typ zu sein bringt tiefes gegenseitiges Verst\u00E4ndnis und Komfort. Allerdings teilen Sie die gleichen Schw\u00E4chen, daher ist bewusste Anstrengung n\u00F6tig, um die Defizite des anderen auszugleichen. Zu \u00E4hnlich zu sein kann Wachstumsanreize vermissen lassen \u2014 bieten Sie sich bewusst neue Erfahrungen und Perspektiven.',
    compat_type_high_desc: 'Drei \u00FCbereinstimmende Achsen bedeuten ausgezeichnete Grundkommunikation. Die eine unterschiedliche Achse bringt frische Anregung und erg\u00E4nzt ohne gro\u00DFe Konflikte. Dies ist eine der idealen Kombinationen \u2014 Unterschiede als Lernchancen zu behandeln vertieft die Beziehung weiter.',
    compat_type_balanced_desc: 'Eine Kombination, bei der \u00C4hnlichkeiten und Unterschiede gut ausbalanciert sind. Sie k\u00F6nnen in \u00E4hnlichen Bereichen Gemeinsamkeiten bilden und aus verschiedenen frische Perspektiven gewinnen. Unterschiede zu respektieren und die Sichtweise des Partners einzunehmen verbessert die Beziehungsqualit\u00E4t erheblich.',
    compat_type_challenging_desc: 'Mit drei verschiedenen Achsen erfordert die Kommunikation Anstrengung, aber es gibt viel voneinander zu lernen. Durch Ihren Partner k\u00F6nnen Sie Welten erleben, die Sie allein nie entdeckt h\u00E4tten. Geduld und ein offener Geist sind der Schl\u00FCssel zu dieser Beziehung.',
    compat_type_opposite_desc: 'Alle Achsen sind verschieden, was anf\u00E4ngliches Verst\u00E4ndnis erschweren kann, aber dies schafft die st\u00E4rkste erg\u00E4nzende Beziehung. Was Ihr Partner hat, ist genau das, was Ihnen fehlt \u2014 zusammen werden Sie vollst\u00E4ndig. Respekt und Wertsch\u00E4tzung sind von gr\u00F6\u00DFter Bedeutung.',

    compat_me_label: 'Ich',
    compat_partner_label: 'Partner',
    compat_match_label: '\u00DCbereinstimmung',
    compat_empathy: 'Empathie',
    compat_complement: 'Erg\u00E4nzung',

    compat_same_axis: 'Sie sind beide {desc}. In diesem Bereich entsteht nat\u00FCrliches Verst\u00E4ndnis und Empathie. Weniger Konflikte durch den gleichen Stil, aber achten Sie auf Balance, da es zu einseitig werden kann.',

    compat_conflict_energy: 'Die extravertierte Seite m\u00F6chte gemeinsame Aktivit\u00E4ten, w\u00E4hrend die introvertierte Seite Zeit allein braucht. Respektieren Sie die Energieauflademethoden des anderen und balancieren Sie gemeinsame und pers\u00F6nliche Zeit.',
    compat_conflict_perception: 'Sensorische konzentrieren sich auf "hier und jetzt, Fakten", w\u00E4hrend Intuitive sich auf "zuk\u00FCnftige M\u00F6glichkeiten" konzentrieren. Wenn das praktische Bewusstsein des Sensorischen mit der Zukunftsvision des Intuitiven kombiniert wird, werden Sie das beste Team.',
    compat_conflict_decision: 'Denker urteilen nach logischem Richtig und Falsch, F\u00FChler nach Beziehungen und Emotionen. Denker sollten zuerst Emotionen anerkennen, bevor sie Logik pr\u00E4sentieren; F\u00FChler sollten nach dem Ausdruck von Gef\u00FChlen auch der Analyse des Partners zuh\u00F6ren.',
    compat_conflict_lifestyle: 'Beurteiler m\u00F6chten, dass alles nach Plan l\u00E4uft, w\u00E4hrend Wahrnehmer sich flexibel anpassen m\u00F6chten. Folgen Sie dem Plan des Beurteilers f\u00FCr das gro\u00DFe Ganze, aber erlauben Sie die Flexibilit\u00E4t des Wahrnehmers in den Details.',

    compat_comm_tips_header: '\u25C6 Kommunikationstipps',
    compat_watch_out_header: '\u25C6 Worauf Sie achten sollten',

    compat_tip_energy: 'Stimmen Sie die Erwartungen \u00FCber H\u00E4ufigkeit und Tiefe der Gespr\u00E4che ab',
    compat_tip_perception: 'Teilen Sie sowohl spezifische Fakten als auch den breiteren Kontext',
    compat_tip_decision: 'Behandeln Sie sowohl Emotionen als auch Logik bei der Probleml\u00F6sung',
    compat_tip_lifestyle: 'Finden Sie die richtige Balance zwischen Planung und Spontaneit\u00E4t',
    compat_tip_general1: 'Versuchen Sie nicht, den Typ Ihres Partners zu \u00E4ndern \u2014 ihn so zu verstehen, wie er ist, ist der Schl\u00FCssel',
    compat_tip_general2: 'Machen Sie es zur Gewohnheit, die St\u00E4rken des anderen anzuerkennen und zu loben',

    compat_warn_similar1: 'Erkennen Sie, dass so \u00E4hnlich zu sein bedeutet, die gleichen Schw\u00E4chen zu teilen',
    compat_warn_similar2: 'Versuchen Sie bewusst gemeinsam neue Erfahrungen',
    compat_warn_similar3: 'Lassen Sie die Erwartung los, dass sie "nat\u00FCrlich verstehen sollten"',

    compat_warn_diff1: 'Beurteilen Sie Unterschiede nicht als "falsch" \u2014 sie sind einfach "anders"',
    compat_warn_diff2: 'Versuchen Sie bei Konflikten, aus der MBTI-Perspektive Ihres Partners zu denken',
    compat_warn_diff3: 'Statt Schw\u00E4chen zu kritisieren, erg\u00E4nzen Sie sie mit St\u00E4rken'
  });

})();
