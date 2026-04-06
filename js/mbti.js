/**
 * MBTI 간이 검사 (12문항) & 16유형 데이터
 * 7개 언어 지원: ko, en, ja, es, pt, fr, de
 */
(function () {
  'use strict';

  /* ======================================================
   *  QUESTIONS — 12문항 (각 축 3문항)
   * ====================================================== */
  var QUESTIONS = [
    // ── E / I 축 ──────────────────────────────────
    {
      id: 1,
      axis: 'EI',
      question: {
        ko: '주말에 에너지를 충전하는 방법은?',
        en: 'How do you recharge on weekends?',
        ja: '週末のエネルギー充電方法は？',
        es: '¿Cómo recargas energía los fines de semana?',
        pt: 'Como você recarrega nos fins de semana?',
        fr: 'Comment rechargez-vous le week-end ?',
        de: 'Wie laden Sie am Wochenende auf?'
      },
      optionA: {
        text: {
          ko: '친구들과 만나서 수다 떨기',
          en: 'Meeting friends and chatting',
          ja: '友達と会っておしゃべり',
          es: 'Quedar con amigos y charlar',
          pt: 'Encontrar amigos e conversar',
          fr: 'Retrouver des amis et discuter',
          de: 'Freunde treffen und plaudern'
        },
        value: 'E'
      },
      optionB: {
        text: {
          ko: '집에서 혼자 조용히 쉬기',
          en: 'Resting quietly at home alone',
          ja: '家で一人静かに休む',
          es: 'Descansar tranquilamente solo en casa',
          pt: 'Descansar em casa sozinho(a)',
          fr: 'Se reposer tranquillement seul(e) à la maison',
          de: 'Zu Hause allein ruhig entspannen'
        },
        value: 'I'
      }
    },
    {
      id: 2,
      axis: 'EI',
      question: {
        ko: '새로운 모임에 갔을 때 나는?',
        en: 'When you go to a new gathering?',
        ja: '新しい集まりに行ったとき、あなたは？',
        es: '¿Qué haces en una reunión nueva?',
        pt: 'Quando vai a um novo encontro?',
        fr: 'Lors d\'une nouvelle rencontre ?',
        de: 'Wenn Sie zu einem neuen Treffen gehen?'
      },
      optionA: {
        text: {
          ko: '먼저 다가가서 말을 건다',
          en: 'I approach others and start talking',
          ja: '自分から話しかける',
          es: 'Me acerco y empiezo a hablar',
          pt: 'Eu me aproximo e começo a conversar',
          fr: 'Je vais vers les autres et engage la conversation',
          de: 'Ich gehe auf andere zu und spreche sie an'
        },
        value: 'E'
      },
      optionB: {
        text: {
          ko: '누군가 말을 걸어주길 기다린다',
          en: 'I wait for someone to talk to me',
          ja: '誰かが話しかけてくれるのを待つ',
          es: 'Espero a que alguien me hable',
          pt: 'Espero alguém vir falar comigo',
          fr: 'J\'attends que quelqu\'un vienne me parler',
          de: 'Ich warte, bis jemand mich anspricht'
        },
        value: 'I'
      }
    },
    {
      id: 3,
      axis: 'EI',
      question: {
        ko: '생각을 정리하는 방식은?',
        en: 'How do you organize your thoughts?',
        ja: '考えをまとめる方法は？',
        es: '¿Cómo organizas tus pensamientos?',
        pt: 'Como você organiza seus pensamentos?',
        fr: 'Comment organisez-vous vos pensées ?',
        de: 'Wie ordnen Sie Ihre Gedanken?'
      },
      optionA: {
        text: {
          ko: '누군가에게 말하면서 정리한다',
          en: 'I talk it out with someone',
          ja: '誰かに話しながら整理する',
          es: 'Hablo con alguien para aclararme',
          pt: 'Converso com alguém para organizar',
          fr: 'J\'en parle avec quelqu\'un pour clarifier',
          de: 'Ich rede mit jemandem darüber'
        },
        value: 'E'
      },
      optionB: {
        text: {
          ko: '혼자 조용히 생각하며 정리한다',
          en: 'I think it through quietly alone',
          ja: '一人で静かに考えて整理する',
          es: 'Lo pienso tranquilamente a solas',
          pt: 'Penso sozinho(a) em silêncio',
          fr: 'J\'y réfléchis tranquillement seul(e)',
          de: 'Ich denke still für mich darüber nach'
        },
        value: 'I'
      }
    },

    // ── S / N 축 ──────────────────────────────────
    {
      id: 4,
      axis: 'SN',
      question: {
        ko: '여행을 계획할 때 나는?',
        en: 'When planning a trip, you?',
        ja: '旅行を計画するとき、あなたは？',
        es: '¿Cómo planificas un viaje?',
        pt: 'Ao planejar uma viagem, você?',
        fr: 'Quand vous planifiez un voyage ?',
        de: 'Wenn Sie eine Reise planen?'
      },
      optionA: {
        text: {
          ko: '구체적인 일정과 장소를 정한다',
          en: 'I set a detailed schedule and places',
          ja: '具体的な日程と場所を決める',
          es: 'Hago un itinerario detallado',
          pt: 'Faço um roteiro detalhado com horários',
          fr: 'Je prépare un planning détaillé',
          de: 'Ich erstelle einen detaillierten Zeitplan'
        },
        value: 'S'
      },
      optionB: {
        text: {
          ko: '대략적인 방향만 정하고 떠난다',
          en: 'I just set a rough direction and go',
          ja: 'だいたいの方向だけ決めて出発する',
          es: 'Solo decido la dirección general y voy',
          pt: 'Defino apenas a direção geral e vou',
          fr: 'Je choisis juste une direction générale et je pars',
          de: 'Ich lege nur eine grobe Richtung fest und los'
        },
        value: 'N'
      }
    },
    {
      id: 5,
      axis: 'SN',
      question: {
        ko: '더 관심이 가는 정보는?',
        en: 'What kind of information interests you more?',
        ja: 'もっと興味がある情報は？',
        es: '¿Qué tipo de información te interesa más?',
        pt: 'Que tipo de informação te interessa mais?',
        fr: 'Quel type d\'information vous intéresse davantage ?',
        de: 'Welche Art von Information interessiert Sie mehr?'
      },
      optionA: {
        text: {
          ko: '검증된 사실과 경험담',
          en: 'Proven facts and experiences',
          ja: '検証された事実と経験談',
          es: 'Hechos comprobados y experiencias',
          pt: 'Fatos comprovados e experiências',
          fr: 'Des faits vérifiés et des témoignages',
          de: 'Bewiesene Fakten und Erfahrungen'
        },
        value: 'S'
      },
      optionB: {
        text: {
          ko: '새로운 가능성과 아이디어',
          en: 'New possibilities and ideas',
          ja: '新しい可能性とアイデア',
          es: 'Nuevas posibilidades e ideas',
          pt: 'Novas possibilidades e ideias',
          fr: 'De nouvelles possibilités et idées',
          de: 'Neue Möglichkeiten und Ideen'
        },
        value: 'N'
      }
    },
    {
      id: 6,
      axis: 'SN',
      question: {
        ko: '일할 때 선호하는 방식은?',
        en: 'Your preferred work style?',
        ja: '仕事をするとき好むスタイルは？',
        es: '¿Tu estilo de trabajo preferido?',
        pt: 'Seu estilo de trabalho preferido?',
        fr: 'Votre style de travail préféré ?',
        de: 'Ihr bevorzugter Arbeitsstil?'
      },
      optionA: {
        text: {
          ko: '순서대로 차근차근 진행한다',
          en: 'I proceed step by step in order',
          ja: '順番通りにコツコツ進める',
          es: 'Avanzo paso a paso en orden',
          pt: 'Avanço passo a passo em ordem',
          fr: 'J\'avance étape par étape dans l\'ordre',
          de: 'Ich gehe Schritt für Schritt vor'
        },
        value: 'S'
      },
      optionB: {
        text: {
          ko: '전체 그림을 먼저 그린다',
          en: 'I see the big picture first',
          ja: '全体像をまず描く',
          es: 'Primero veo el panorama general',
          pt: 'Primeiro vejo o quadro geral',
          fr: 'Je vois d\'abord la vue d\'ensemble',
          de: 'Ich sehe zuerst das große Ganze'
        },
        value: 'N'
      }
    },

    // ── T / F 축 ──────────────────────────────────
    {
      id: 7,
      axis: 'TF',
      question: {
        ko: '친구가 고민 상담을 할 때 나는?',
        en: 'When a friend comes to you for advice?',
        ja: '友達が悩みを相談してきたら？',
        es: '¿Cuando un amigo te pide consejo?',
        pt: 'Quando um amigo pede conselho?',
        fr: 'Quand un(e) ami(e) vous demande conseil ?',
        de: 'Wenn ein Freund Sie um Rat bittet?'
      },
      optionA: {
        text: {
          ko: '현실적인 해결책을 제시한다',
          en: 'I suggest practical solutions',
          ja: '現実的な解決策を提示する',
          es: 'Sugiero soluciones prácticas',
          pt: 'Sugiro soluções práticas',
          fr: 'Je propose des solutions concrètes',
          de: 'Ich schlage praktische Lösungen vor'
        },
        value: 'T'
      },
      optionB: {
        text: {
          ko: '먼저 공감하고 위로한다',
          en: 'I empathize and comfort them first',
          ja: 'まず共感して慰める',
          es: 'Primero empatizo y consuelo',
          pt: 'Primeiro demonstro empatia e conforto',
          fr: 'Je compatis et réconforte d\'abord',
          de: 'Ich zeige zuerst Mitgefühl und tröste'
        },
        value: 'F'
      }
    },
    {
      id: 8,
      axis: 'TF',
      question: {
        ko: '중요한 결정을 내릴 때 기준은?',
        en: 'What guides your important decisions?',
        ja: '重要な決定を下すときの基準は？',
        es: '¿Qué guía tus decisiones importantes?',
        pt: 'O que guia suas decisões importantes?',
        fr: 'Qu\'est-ce qui guide vos décisions importantes ?',
        de: 'Was leitet Ihre wichtigen Entscheidungen?'
      },
      optionA: {
        text: {
          ko: '논리와 효율을 기준으로 판단한다',
          en: 'I decide based on logic and efficiency',
          ja: '論理と効率を基準に判断する',
          es: 'Decido según la lógica y la eficiencia',
          pt: 'Decido com base na lógica e eficiência',
          fr: 'Je décide selon la logique et l\'efficacité',
          de: 'Ich entscheide nach Logik und Effizienz'
        },
        value: 'T'
      },
      optionB: {
        text: {
          ko: '관련된 사람과 감정을 고려한다',
          en: 'I consider the people and feelings involved',
          ja: '関わる人と感情を考慮する',
          es: 'Considero a las personas y sus sentimientos',
          pt: 'Considero as pessoas e os sentimentos envolvidos',
          fr: 'Je considère les personnes et les sentiments en jeu',
          de: 'Ich berücksichtige die Menschen und Gefühle'
        },
        value: 'F'
      }
    },
    {
      id: 9,
      axis: 'TF',
      question: {
        ko: '비판을 받았을 때 나는?',
        en: 'When you receive criticism?',
        ja: '批判を受けたとき、あなたは？',
        es: '¿Cuando recibes una crítica?',
        pt: 'Quando você recebe uma crítica?',
        fr: 'Quand vous recevez une critique ?',
        de: 'Wenn Sie kritisiert werden?'
      },
      optionA: {
        text: {
          ko: '내용이 맞는지 객관적으로 분석한다',
          en: 'I objectively analyze if it\'s valid',
          ja: '内容が正しいか客観的に分析する',
          es: 'Analizo objetivamente si es válida',
          pt: 'Analiso objetivamente se é válida',
          fr: 'J\'analyse objectivement si c\'est justifié',
          de: 'Ich analysiere sachlich, ob es berechtigt ist'
        },
        value: 'T'
      },
      optionB: {
        text: {
          ko: '기분이 먼저 상하고 속상하다',
          en: 'My feelings get hurt first',
          ja: '気分がまず傷つく',
          es: 'Primero me siento herido(a)',
          pt: 'Primeiro fico magoado(a)',
          fr: 'Je me sens d\'abord blessé(e)',
          de: 'Meine Gefühle werden zuerst verletzt'
        },
        value: 'F'
      }
    },

    // ── J / P 축 ──────────────────────────────────
    {
      id: 10,
      axis: 'JP',
      question: {
        ko: '약속 시간에 대한 나의 태도는?',
        en: 'Your attitude about appointment times?',
        ja: '約束の時間に対するあなたの態度は？',
        es: '¿Tu actitud con los horarios?',
        pt: 'Sua atitude com horários?',
        fr: 'Votre attitude envers la ponctualité ?',
        de: 'Ihre Einstellung zu Terminen?'
      },
      optionA: {
        text: {
          ko: '항상 미리 도착하는 편이다',
          en: 'I always arrive early',
          ja: 'いつも早めに到着する',
          es: 'Siempre llego temprano',
          pt: 'Sempre chego cedo',
          fr: 'J\'arrive toujours en avance',
          de: 'Ich komme immer früh an'
        },
        value: 'J'
      },
      optionB: {
        text: {
          ko: '시간에 딱 맞춰서 간다',
          en: 'I arrive just on time',
          ja: '時間ぴったりに行く',
          es: 'Llego justo a tiempo',
          pt: 'Chego bem na hora',
          fr: 'J\'arrive juste à l\'heure',
          de: 'Ich komme genau pünktlich'
        },
        value: 'P'
      }
    },
    {
      id: 11,
      axis: 'JP',
      question: {
        ko: '할 일을 관리하는 방식은?',
        en: 'How do you manage your tasks?',
        ja: 'やることの管理方法は？',
        es: '¿Cómo gestionas tus tareas?',
        pt: 'Como você gerencia suas tarefas?',
        fr: 'Comment gérez-vous vos tâches ?',
        de: 'Wie verwalten Sie Ihre Aufgaben?'
      },
      optionA: {
        text: {
          ko: '리스트를 작성하고 체크한다',
          en: 'I make a list and check things off',
          ja: 'リストを作ってチェックする',
          es: 'Hago una lista y voy tachando',
          pt: 'Faço uma lista e vou marcando',
          fr: 'Je fais une liste et je coche',
          de: 'Ich mache eine Liste und hake ab'
        },
        value: 'J'
      },
      optionB: {
        text: {
          ko: '그때그때 상황에 맞게 처리한다',
          en: 'I handle things as they come',
          ja: 'その都度状況に合わせて処理する',
          es: 'Las resuelvo según vayan surgiendo',
          pt: 'Resolvo conforme vão aparecendo',
          fr: 'Je gère au fur et à mesure',
          de: 'Ich erledige Dinge, wie sie kommen'
        },
        value: 'P'
      }
    },
    {
      id: 12,
      axis: 'JP',
      question: {
        ko: '계획이 갑자기 변경되면?',
        en: 'When plans suddenly change?',
        ja: '計画が急に変更されたら？',
        es: '¿Cuando los planes cambian de repente?',
        pt: 'Quando os planos mudam de repente?',
        fr: 'Quand les plans changent soudainement ?',
        de: 'Wenn Pläne sich plötzlich ändern?'
      },
      optionA: {
        text: {
          ko: '스트레스를 받고 불안하다',
          en: 'I feel stressed and anxious',
          ja: 'ストレスを感じて不安になる',
          es: 'Me estreso y me pongo ansioso(a)',
          pt: 'Fico estressado(a) e ansioso(a)',
          fr: 'Je me sens stressé(e) et anxieux(se)',
          de: 'Ich fühle mich gestresst und unruhig'
        },
        value: 'J'
      },
      optionB: {
        text: {
          ko: '오히려 재밌고 흥미롭다',
          en: 'I actually find it fun and exciting',
          ja: 'むしろ楽しくてワクワクする',
          es: 'Me parece divertido y emocionante',
          pt: 'Acho até divertido e empolgante',
          fr: 'Je trouve ça plutôt amusant et stimulant',
          de: 'Ich finde es sogar spannend und aufregend'
        },
        value: 'P'
      }
    }
  ];

  /* ======================================================
   *  TYPES — 16유형 데이터
   * ====================================================== */
  var TYPES = {
    INTJ: {
      name: { ko: '전략가', en: 'Architect', ja: '建築家', es: 'Arquitecto', pt: 'Arquiteto', fr: 'Architecte', de: 'Architekt' },
      desc: {
        ko: '독립적이고 분석적인 전략가로, 복잡한 문제 앞에서 오히려 빛을 발합니다. 관계에서는 깊이 있는 소수의 인연을 소중히 여기며, 피상적인 교류보다 진정한 지적 교감을 추구합니다. 뛰어난 통찰력과 체계적 사고력으로 남들이 보지 못하는 패턴을 읽어내는 것이 최대 강점입니다. 때로 완벽주의와 감정 표현의 어려움이 성장 과제가 될 수 있습니다. 장기적 비전을 세우고 한 걸음씩 나아가라는 조언이 가장 잘 맞는 유형입니다.',
        en: 'An independent and analytical strategist who truly shines when faced with complex challenges. In relationships, you treasure a small circle of deep connections over superficial socializing, seeking genuine intellectual rapport. Your greatest strengths are exceptional insight and systematic thinking that reveal patterns others miss. Perfectionism and difficulty expressing emotions can sometimes become growth areas. Fortune advice that encourages long-term vision and steady, strategic progress resonates most deeply with you.',
        ja: '独立的で分析的な戦略家であり、複雑な課題に直面したときこそ真価を発揮します。人間関係では表面的な交流よりも、少数の深い絆を大切にし、真の知的共感を求めます。卓越した洞察力と体系的思考で他の人が見逃すパターンを読み取る力が最大の強みです。完璧主義や感情表現の難しさが時に成長課題となることもあります。長期的なビジョンを描き、着実に前進せよというアドバイスが最もしっくりくるタイプです。',
        es: 'Estratega independiente y analítico que brilla ante desafíos complejos. En las relaciones, valora unas pocas conexiones profundas sobre el trato superficial, buscando una verdadera sintonía intelectual. Su mayor fortaleza es una perspicacia excepcional y un pensamiento sistemático que revela patrones que otros pasan por alto. El perfeccionismo y la dificultad para expresar emociones pueden ser áreas de crecimiento. Los consejos que fomentan una visión a largo plazo y un avance estratégico constante son los que más resuenan con este tipo.',
        pt: 'Estrategista independente e analítico que brilha diante de desafios complexos. Nos relacionamentos, valoriza poucas conexões profundas em vez de interações superficiais, buscando sintonia intelectual genuína. Sua maior força é a perspicácia excepcional e o pensamento sistemático que revelam padrões que outros não percebem. O perfeccionismo e a dificuldade em expressar emoções podem ser áreas de crescimento. Conselhos que incentivam visão de longo prazo e progresso estratégico constante ressoam mais profundamente com você.',
        fr: 'Stratège indépendant et analytique qui s\'épanouit face aux défis complexes. Dans les relations, vous privilégiez quelques liens profonds plutôt que des échanges superficiels, recherchant une véritable connexion intellectuelle. Votre plus grande force est une perspicacité exceptionnelle et une pensée systématique qui révèlent des schémas invisibles aux autres. Le perfectionnisme et la difficulté à exprimer vos émotions peuvent constituer des axes de développement. Les conseils encourageant une vision à long terme et une progression stratégique régulière vous parlent le plus.',
        de: 'Ein unabhängiger und analytischer Stratege, der bei komplexen Herausforderungen erst richtig aufblüht. In Beziehungen schätzen Sie wenige tiefe Verbindungen mehr als oberflächlichen Umgang und suchen echte intellektuelle Resonanz. Ihre größte Stärke ist außergewöhnliche Einsicht und systematisches Denken, das Muster erkennt, die andere übersehen. Perfektionismus und Schwierigkeiten beim Ausdrücken von Gefühlen können Wachstumsbereiche sein. Ratschläge, die langfristige Vision und stetigen strategischen Fortschritt fördern, treffen bei Ihnen am besten ins Schwarze.'
      },
      emoji: '🧠',
      strengths: {
        ko: ['전략적 사고', '독립성', '결단력'],
        en: ['Strategic thinking', 'Independence', 'Decisiveness'],
        ja: ['戦略的思考', '独立性', '決断力'],
        es: ['Pensamiento estratégico', 'Independencia', 'Decisión'],
        pt: ['Pensamento estratégico', 'Independência', 'Decisão'],
        fr: ['Pensée stratégique', 'Indépendance', 'Détermination'],
        de: ['Strategisches Denken', 'Unabhängigkeit', 'Entschlossenheit']
      }
    },

    INTP: {
      name: { ko: '논리술사', en: 'Logician', ja: '論理学者', es: 'Lógico', pt: 'Lógico', fr: 'Logicien', de: 'Logiker' },
      desc: {
        ko: '끝없는 호기심으로 세상의 원리를 탐구하는 논리적 사색가입니다. 사교적인 자리보다 깊이 있는 일대일 대화를 선호하며, 지적으로 자극을 주는 사람에게 강하게 끌립니다. 복잡한 이론을 명쾌하게 분석하고 독창적인 해결책을 만들어내는 능력이 탁월합니다. 실행력 부족이나 감정적 소통의 어려움이 성장 과제가 될 수 있습니다. 자유롭게 탐구하되 때로는 실천으로 옮기라는 조언이 큰 도움이 되는 유형입니다.',
        en: 'A logical thinker driven by endless curiosity to explore how the world works. You prefer deep one-on-one conversations over social gatherings, drawn to those who stimulate you intellectually. Your exceptional ability to analyze complex theories and craft original solutions is your defining strength. Difficulty with follow-through and emotional communication can be areas for growth. Advice that encourages free exploration while reminding you to act on your ideas resonates most with you.',
        ja: '尽きない好奇心で世界の原理を探求する論理的な思索家です。社交的な場よりも深い一対一の会話を好み、知的刺激を与えてくれる人に強く惹かれます。複雑な理論を明快に分析し、独創的な解決策を生み出す能力が際立っています。実行力の不足や感情的なコミュニケーションの難しさが成長課題になることもあります。自由に探求しつつも時には実践に移せというアドバイスが最も響くタイプです。',
        es: 'Un pensador lógico impulsado por una curiosidad infinita para explorar cómo funciona el mundo. Prefiere conversaciones profundas uno a uno sobre reuniones sociales, atraído por quienes le estimulan intelectualmente. Su capacidad excepcional para analizar teorías complejas y crear soluciones originales es su mayor fortaleza. La dificultad para ejecutar ideas y la comunicación emocional pueden ser áreas de crecimiento. Los consejos que fomentan la exploración libre mientras recuerdan pasar a la acción son los que más resuenan con este tipo.',
        pt: 'Um pensador lógico movido por curiosidade infinita para explorar como o mundo funciona. Prefere conversas profundas individuais a encontros sociais, atraído por quem o estimula intelectualmente. Sua capacidade excepcional de analisar teorias complexas e criar soluções originais é sua maior força. Dificuldade com execução e comunicação emocional podem ser áreas de crescimento. Conselhos que incentivam exploração livre enquanto lembram de agir sobre as ideias ressoam mais com você.',
        fr: 'Un penseur logique animé par une curiosité sans fin pour comprendre les rouages du monde. Vous préférez les conversations profondes en tête-à-tête aux mondanités, attiré par ceux qui vous stimulent intellectuellement. Votre capacité exceptionnelle à analyser des théories complexes et à concevoir des solutions originales est votre force distinctive. La difficulté à concrétiser vos idées et la communication émotionnelle peuvent être des axes de progrès. Les conseils qui encouragent l\'exploration libre tout en rappelant de passer à l\'action vous parlent le plus.',
        de: 'Ein logischer Denker, angetrieben von endloser Neugier, die Funktionsweise der Welt zu erforschen. Sie bevorzugen tiefgründige Einzelgespräche gegenüber gesellschaftlichen Zusammenkünften und fühlen sich zu intellektuell anregenden Menschen hingezogen. Ihre außergewöhnliche Fähigkeit, komplexe Theorien zu analysieren und originelle Lösungen zu entwickeln, ist Ihre herausragende Stärke. Schwierigkeiten bei der Umsetzung und emotionaler Kommunikation können Wachstumsbereiche sein. Ratschläge, die freies Erkunden fördern und gleichzeitig ans Handeln erinnern, treffen bei Ihnen am besten.'
      },
      emoji: '🔬',
      strengths: {
        ko: ['분석력', '창의성', '객관성'],
        en: ['Analytical skills', 'Creativity', 'Objectivity'],
        ja: ['分析力', '創造性', '客観性'],
        es: ['Capacidad analítica', 'Creatividad', 'Objetividad'],
        pt: ['Capacidade analítica', 'Criatividade', 'Objetividade'],
        fr: ['Esprit analytique', 'Créativité', 'Objectivité'],
        de: ['Analytisches Denken', 'Kreativität', 'Objektivität']
      }
    },

    ENTJ: {
      name: { ko: '통솔자', en: 'Commander', ja: '指揮官', es: 'Comandante', pt: 'Comandante', fr: 'Commandant', de: 'Kommandeur' },
      desc: {
        ko: '대담하고 카리스마 넘치는 타고난 리더로, 어떤 상황에서든 주도적으로 방향을 제시합니다. 관계에서도 솔직하고 직접적이며, 서로 성장할 수 있는 파트너를 원합니다. 뛰어난 결단력과 조직 운영 능력으로 복잡한 상황을 효율적으로 정리하는 것이 큰 강점입니다. 다만 타인의 감정을 간과하거나 지나치게 통제하려는 성향이 성장 과제가 될 수 있습니다. 큰 꿈을 향해 과감히 나아가되 주변과 함께 가라는 조언이 잘 맞습니다.',
        en: 'A bold and charismatic natural leader who takes charge and sets direction in any situation. In relationships, you are honest and direct, seeking partners who challenge you to grow together. Your exceptional decisiveness and organizational ability to efficiently manage complex situations is a major strength. However, overlooking others\' feelings or being overly controlling can be growth areas. Advice that encourages pursuing big dreams boldly while bringing others along resonates deeply with you.',
        ja: '大胆でカリスマ溢れる生まれながらのリーダーで、どんな状況でも主導的に方向を示します。人間関係でも率直で直接的であり、共に成長できるパートナーを求めます。卓越した決断力と組織運営能力で複雑な状況を効率的に整理する力が大きな強みです。ただし他者の感情を見落としたり、過度にコントロールしようとする傾向が成長課題になることもあります。大きな夢に向かって果敢に進みつつも周囲と共に歩めというアドバイスが響くタイプです。',
        es: 'Un líder nato audaz y carismático que toma las riendas y marca la dirección en cualquier situación. En las relaciones, es honesto y directo, buscando compañeros que le impulsen a crecer juntos. Su excepcional capacidad de decisión y habilidad organizativa para gestionar situaciones complejas es una gran fortaleza. Sin embargo, pasar por alto los sentimientos ajenos o ser excesivamente controlador pueden ser áreas de mejora. Los consejos que animan a perseguir grandes sueños con audacia mientras se lleva a otros consigo le resuenan profundamente.',
        pt: 'Um líder nato ousado e carismático que assume o comando e define a direção em qualquer situação. Nos relacionamentos, é honesto e direto, buscando parceiros que o desafiem a crescer juntos. Sua excepcional capacidade de decisão e habilidade organizacional para gerenciar situações complexas é uma grande força. No entanto, ignorar os sentimentos alheios ou ser excessivamente controlador podem ser áreas de crescimento. Conselhos que incentivam perseguir grandes sonhos com ousadia enquanto traz outros consigo ressoam profundamente.',
        fr: 'Un leader né, audacieux et charismatique, qui prend les commandes et fixe le cap dans toute situation. Dans les relations, vous êtes honnête et direct, recherchant des partenaires qui vous poussent à grandir ensemble. Votre capacité de décision exceptionnelle et votre talent organisationnel pour gérer efficacement les situations complexes sont de grandes forces. Toutefois, négliger les sentiments des autres ou vouloir trop contrôler peuvent être des axes de développement. Les conseils qui encouragent à poursuivre de grands rêves avec audace tout en emmenant les autres vous parlent profondément.',
        de: 'Ein geborener Anführer voller Mut und Charisma, der in jeder Situation die Führung übernimmt und die Richtung vorgibt. In Beziehungen sind Sie ehrlich und direkt und suchen Partner, die Sie zum gemeinsamen Wachstum herausfordern. Ihre außergewöhnliche Entscheidungskraft und organisatorische Fähigkeit, komplexe Situationen effizient zu bewältigen, ist eine große Stärke. Allerdings können das Übersehen der Gefühle anderer oder übermäßige Kontrolle Wachstumsbereiche sein. Ratschläge, die ermutigen, große Träume mutig zu verfolgen und andere mitzunehmen, treffen bei Ihnen ins Schwarze.'
      },
      emoji: '👑',
      strengths: {
        ko: ['리더십', '효율성', '자신감'],
        en: ['Leadership', 'Efficiency', 'Confidence'],
        ja: ['リーダーシップ', '効率性', '自信'],
        es: ['Liderazgo', 'Eficiencia', 'Confianza'],
        pt: ['Liderança', 'Eficiência', 'Confiança'],
        fr: ['Leadership', 'Efficacité', 'Confiance'],
        de: ['Führungsstärke', 'Effizienz', 'Selbstvertrauen']
      }
    },

    ENTP: {
      name: { ko: '변론가', en: 'Debater', ja: '討論者', es: 'Innovador', pt: 'Inovador', fr: 'Innovateur', de: 'Erfinder' },
      desc: {
        ko: '재치 넘치고 도전을 즐기는 혁신가로, 기존의 틀을 깨는 아이디어를 끊임없이 쏟아냅니다. 사람들과의 지적 토론을 즐기며, 다양한 관점을 가진 사람들에게 자연스럽게 끌립니다. 빠른 사고력과 뛰어난 언변으로 어떤 주제든 흥미롭게 풀어내는 능력이 독보적입니다. 한 가지에 집중하기 어렵고 논쟁적 성향이 관계에서 마찰을 일으킬 수 있습니다. 새로운 도전을 두려워 말되, 시작한 일은 끝까지 해보라는 조언이 잘 맞는 유형입니다.',
        en: 'A witty and challenge-loving innovator who constantly generates ideas that break conventional molds. You thrive in intellectual debates and are naturally drawn to people with diverse perspectives. Your rapid thinking and exceptional eloquence make you uniquely capable of making any topic fascinating. Difficulty maintaining focus and a confrontational tendency can sometimes create friction in relationships. Advice that encourages embracing new challenges while following through on what you start resonates best with you.',
        ja: '機知に富み挑戦を楽しむ革新家で、既存の枠を壊すアイデアを絶えず生み出します。知的な議論を楽しみ、多様な視点を持つ人々に自然と惹かれます。素早い思考力と卓越した弁舌でどんなテーマも面白く展開する能力が際立っています。一つのことに集中するのが難しく、論争的な傾向が人間関係で摩擦を起こすことがあります。新しい挑戦を恐れずに、始めたことは最後までやり遂げよというアドバイスが最もしっくりくるタイプです。',
        es: 'Un innovador ingenioso y amante de los desafíos que genera constantemente ideas que rompen moldes convencionales. Prospera en debates intelectuales y se siente naturalmente atraído por personas con perspectivas diversas. Su pensamiento rápido y elocuencia excepcional le permiten hacer fascinante cualquier tema. La dificultad para mantener el enfoque y una tendencia confrontativa pueden crear fricción en las relaciones. Los consejos que animan a abrazar nuevos retos mientras se completa lo empezado son los que mejor resuenan con este tipo.',
        pt: 'Um inovador perspicaz e amante de desafios que gera constantemente ideias que quebram paradigmas convencionais. Você prospera em debates intelectuais e é naturalmente atraído por pessoas com perspectivas diversas. Seu pensamento rápido e eloquência excepcional o tornam capaz de tornar qualquer tema fascinante. Dificuldade em manter o foco e tendência confrontativa podem criar atrito nos relacionamentos. Conselhos que incentivam abraçar novos desafios enquanto conclui o que começou ressoam melhor com você.',
        fr: 'Un innovateur astucieux et avide de défis qui génère sans cesse des idées brisant les conventions. Vous excellez dans les débats intellectuels et êtes naturellement attiré par les personnes aux perspectives variées. Votre rapidité de pensée et votre éloquence exceptionnelle vous rendent capable de rendre n\'importe quel sujet passionnant. La difficulté à maintenir votre concentration et une tendance à la confrontation peuvent parfois créer des frictions. Les conseils encourageant à relever de nouveaux défis tout en terminant ce que vous commencez vous parlent le mieux.',
        de: 'Ein geistreicher, herausforderungsliebender Innovator, der ständig Ideen hervorbringt, die konventionelle Muster sprengen. Sie blühen in intellektuellen Debatten auf und fühlen sich von Menschen mit vielfältigen Perspektiven angezogen. Ihr schnelles Denken und außergewöhnliche Redegewandtheit machen Sie einzigartig fähig, jedes Thema fesselnd darzustellen. Schwierigkeiten bei der Fokussierung und eine konfrontative Tendenz können manchmal Reibung erzeugen. Ratschläge, die ermutigen, neue Herausforderungen anzunehmen und Begonnenes zu Ende zu führen, treffen bei Ihnen am besten.'
      },
      emoji: '💡',
      strengths: {
        ko: ['재치', '적응력', '혁신성'],
        en: ['Quick wit', 'Adaptability', 'Innovation'],
        ja: ['機知', '適応力', '革新性'],
        es: ['Ingenio', 'Adaptabilidad', 'Innovación'],
        pt: ['Perspicácia', 'Adaptabilidade', 'Inovação'],
        fr: ['Vivacité d\'esprit', 'Adaptabilité', 'Innovation'],
        de: ['Schlagfertigkeit', 'Anpassungsfähigkeit', 'Innovation']
      }
    },

    INFJ: {
      name: { ko: '옹호자', en: 'Advocate', ja: '提唱者', es: 'Abogado', pt: 'Advogado', fr: 'Avocat', de: 'Advokat' },
      desc: {
        ko: '이상주의적이고 깊은 통찰력을 지닌 조력자로, 겉으로는 조용하지만 내면에 강한 신념을 품고 있습니다. 타인의 감정을 직관적으로 읽어내며, 진실된 관계를 맺는 소수의 사람들에게 한없이 헌신합니다. 복잡한 인간 심리를 꿰뚫는 통찰력과 더 나은 세상을 향한 비전이 가장 큰 강점입니다. 자신을 희생하면서까지 타인을 돌보거나, 이상과 현실의 괴리에 지칠 수 있습니다. 내면의 목소리를 믿되 자신도 돌보라는 조언이 가장 필요한 유형입니다.',
        en: 'An idealistic helper with profound insight who appears quiet on the surface but holds powerful convictions within. You intuitively read others\' emotions and devote yourself wholeheartedly to the few with whom you form genuine bonds. Your penetrating understanding of complex human psychology and vision for a better world are your greatest strengths. You may exhaust yourself caring for others at your own expense, or feel drained by the gap between ideals and reality. Advice that affirms trusting your inner voice while also caring for yourself is what you need most.',
        ja: '理想主義的で深い洞察力を持つ助言者であり、外見は静かですが内面に強い信念を秘めています。他者の感情を直感的に読み取り、真の絆を結んだ少数の人々に限りなく献身します。複雑な人間心理を見抜く洞察力とより良い世界へのビジョンが最大の強みです。自分を犠牲にして他者を世話したり、理想と現実の乖離に疲れることがあります。内なる声を信じつつ自分自身も大切にせよというアドバイスが最も必要なタイプです。',
        es: 'Un ayudante idealista con una perspicacia profunda que parece tranquilo por fuera pero alberga convicciones poderosas. Lee intuitivamente las emociones de los demás y se entrega por completo a las pocas personas con quienes forma vínculos genuinos. Su comprensión penetrante de la psicología humana y su visión de un mundo mejor son sus mayores fortalezas. Puede agotarse cuidando a otros a costa propia o sentirse drenado por la brecha entre ideales y realidad. Los consejos que afirman confiar en su voz interior mientras también se cuida a sí mismo son los que más necesita.',
        pt: 'Um ajudante idealista com profunda perspicácia que parece tranquilo por fora, mas carrega convicções poderosas. Lê intuitivamente as emoções dos outros e se dedica completamente às poucas pessoas com quem forma laços genuínos. Sua compreensão penetrante da psicologia humana complexa e visão de um mundo melhor são suas maiores forças. Pode se esgotar cuidando dos outros às custas de si mesmo, ou se sentir esgotado pela distância entre ideais e realidade. Conselhos que afirmam confiar em sua voz interior enquanto também cuida de si mesmo são o que mais precisa.',
        fr: 'Un aide idéaliste doté d\'une perspicacité profonde, calme en apparence mais porteur de convictions puissantes. Vous lisez intuitivement les émotions des autres et vous consacrez entièrement aux rares personnes avec qui vous tissez des liens authentiques. Votre compréhension pénétrante de la psychologie humaine et votre vision d\'un monde meilleur sont vos plus grandes forces. Vous pouvez vous épuiser en prenant soin des autres à vos dépens ou être fatigué par l\'écart entre idéaux et réalité. Les conseils qui encouragent à faire confiance à votre voix intérieure tout en prenant soin de vous sont ceux dont vous avez le plus besoin.',
        de: 'Ein idealistischer Helfer mit tiefgründiger Einsicht, der äußerlich ruhig wirkt, aber innerlich starke Überzeugungen trägt. Sie lesen intuitiv die Emotionen anderer und widmen sich ganz den wenigen Menschen, mit denen Sie echte Bindungen eingehen. Ihr durchdringendes Verständnis komplexer menschlicher Psychologie und Ihre Vision einer besseren Welt sind Ihre größten Stärken. Sie können sich erschöpfen, wenn Sie andere auf eigene Kosten umsorgen, oder unter der Kluft zwischen Ideal und Realität leiden. Ratschläge, die bestärken, der inneren Stimme zu vertrauen und dabei auch sich selbst zu pflegen, sind das, was Sie am meisten brauchen.'
      },
      emoji: '🌟',
      strengths: {
        ko: ['통찰력', '공감 능력', '헌신'],
        en: ['Insight', 'Empathy', 'Dedication'],
        ja: ['洞察力', '共感力', '献身'],
        es: ['Perspicacia', 'Empatía', 'Dedicación'],
        pt: ['Perspicácia', 'Empatia', 'Dedicação'],
        fr: ['Perspicacité', 'Empathie', 'Dévouement'],
        de: ['Einsicht', 'Empathie', 'Hingabe']
      }
    },

    INFP: {
      name: { ko: '중재자', en: 'Mediator', ja: '仲介者', es: 'Mediador', pt: 'Mediador', fr: 'Médiateur', de: 'Mediator' },
      desc: {
        ko: '풍부한 감성과 깊은 이상을 품은 몽상가로, 자신만의 내면 세계가 매우 넓고 깊습니다. 진정성 있는 관계를 갈망하며, 자신의 가치관과 맞는 사람에게 마음을 활짝 엽니다. 창의적 표현력과 깊은 공감 능력으로 예술, 글쓰기, 상담 등에서 빛을 발합니다. 지나친 이상주의로 현실에 실망하거나, 갈등 상황을 회피하는 경향이 성장 과제입니다. 꿈을 지키되 현실과도 조화를 이루라는 따뜻한 조언이 가장 마음에 와닿는 유형입니다.',
        en: 'A dreamer with rich emotions and deep ideals whose inner world is vast and profound. You long for authentic connections and open your heart fully to those who share your values. Your creative expressiveness and deep empathy let you shine in art, writing, and counseling. Excessive idealism leading to disappointment with reality and a tendency to avoid conflict are growth areas. Warm advice encouraging you to protect your dreams while finding harmony with reality touches you most deeply.',
        ja: '豊かな感性と深い理想を抱く夢想家で、自分だけの内面世界がとても広く深いです。真の絆を渇望し、自分の価値観に合う人には心を大きく開きます。創造的な表現力と深い共感力で、芸術や文章、カウンセリングなどで輝きを放ちます。過度な理想主義による現実への失望や、葛藤を回避する傾向が成長課題です。夢を守りつつ現実とも調和を図れという温かいアドバイスが最も心に響くタイプです。',
        es: 'Un soñador con emociones ricas e ideales profundos cuyo mundo interior es vasto y profundo. Anhela conexiones auténticas y abre su corazón completamente a quienes comparten sus valores. Su expresividad creativa y profunda empatía le hacen brillar en el arte, la escritura y la orientación. El idealismo excesivo que lleva a la decepción con la realidad y la tendencia a evitar conflictos son áreas de crecimiento. Los consejos cálidos que animan a proteger sus sueños mientras encuentra armonía con la realidad le tocan más profundamente.',
        pt: 'Um sonhador com emoções ricas e ideais profundos cujo mundo interior é vasto e profundo. Anseia por conexões autênticas e abre completamente o coração para quem compartilha seus valores. Sua expressividade criativa e profunda empatia o fazem brilhar na arte, escrita e aconselhamento. Idealismo excessivo levando à decepção com a realidade e tendência a evitar conflitos são áreas de crescimento. Conselhos calorosos que incentivam proteger seus sonhos enquanto encontra harmonia com a realidade tocam você mais profundamente.',
        fr: 'Un rêveur aux émotions riches et aux idéaux profonds dont le monde intérieur est vaste et profond. Vous aspirez à des liens authentiques et ouvrez votre cœur à ceux qui partagent vos valeurs. Votre expressivité créative et votre empathie profonde vous font briller dans l\'art, l\'écriture et le conseil. Un idéalisme excessif menant à la déception face à la réalité et une tendance à fuir les conflits sont des axes de développement. Les conseils chaleureux encourageant à préserver vos rêves tout en trouvant l\'harmonie avec la réalité vous touchent le plus profondément.',
        de: 'Ein Träumer mit reichen Emotionen und tiefen Idealen, dessen Innenwelt weit und tiefgründig ist. Sie sehnen sich nach authentischen Verbindungen und öffnen Ihr Herz denen, die Ihre Werte teilen. Ihre kreative Ausdruckskraft und tiefe Empathie lassen Sie in Kunst, Schreiben und Beratung erstrahlen. Übermäßiger Idealismus, der zur Enttäuschung mit der Realität führt, und die Neigung, Konflikten auszuweichen, sind Wachstumsbereiche. Warmherzige Ratschläge, die ermutigen, Träume zu schützen und gleichzeitig Harmonie mit der Realität zu finden, berühren Sie am tiefsten.'
      },
      emoji: '🦋',
      strengths: {
        ko: ['공감력', '창의성', '이상주의'],
        en: ['Empathy', 'Creativity', 'Idealism'],
        ja: ['共感力', '創造性', '理想主義'],
        es: ['Empatía', 'Creatividad', 'Idealismo'],
        pt: ['Empatia', 'Criatividade', 'Idealismo'],
        fr: ['Empathie', 'Créativité', 'Idéalisme'],
        de: ['Empathie', 'Kreativität', 'Idealismus']
      }
    },

    ENFJ: {
      name: { ko: '선도자', en: 'Protagonist', ja: '主人公', es: 'Protagonista', pt: 'Protagonista', fr: 'Protagoniste', de: 'Protagonist' },
      desc: {
        ko: '따뜻한 카리스마로 사람들을 이끄는 영향력 있는 리더로, 타인의 성장을 돕는 것에서 진정한 기쁨을 느낍니다. 관계에서 깊은 유대감을 형성하며, 상대방의 잠재력을 끌어내는 데 탁월한 능력을 보입니다. 뛰어난 소통 능력과 이타적 리더십으로 어떤 집단이든 하나로 결속시키는 것이 큰 강점입니다. 타인의 기대에 부응하느라 자신의 필요를 무시하거나, 지나친 이상주의에 빠질 수 있습니다. 남을 돌보는 만큼 자신의 마음도 살피라는 조언이 가장 와닿는 유형입니다.',
        en: 'An influential leader with warm charisma who finds genuine joy in helping others grow and reach their potential. You form deep emotional bonds in relationships and have a remarkable ability to draw out the best in people. Your outstanding communication skills and altruistic leadership that can unite any group are major strengths. You may neglect your own needs while meeting others\' expectations or fall into excessive idealism. Advice reminding you to care for your own heart as much as you care for others resonates most with you.',
        ja: '温かいカリスマで人々を導く影響力あるリーダーであり、他者の成長を助けることに真の喜びを感じます。人間関係では深い絆を築き、相手の潜在能力を引き出す卓越した能力を持っています。優れたコミュニケーション力と利他的リーダーシップでどんな集団も一つにまとめる力が大きな強みです。他者の期待に応えるあまり自分の欲求を無視したり、過度な理想主義に陥ることがあります。人を大切にするのと同じくらい自分の心も大切にせよというアドバイスが最も響くタイプです。',
        es: 'Un líder influyente con cálido carisma que encuentra alegría genuina en ayudar a otros a crecer y alcanzar su potencial. Forma vínculos emocionales profundos en las relaciones y tiene una capacidad notable para sacar lo mejor de las personas. Sus habilidades de comunicación sobresalientes y liderazgo altruista que puede unir cualquier grupo son grandes fortalezas. Puede descuidar sus propias necesidades mientras cumple las expectativas de otros o caer en un idealismo excesivo. Los consejos que recuerdan cuidar su propio corazón tanto como cuida a los demás resuenan más con usted.',
        pt: 'Um líder influente com carisma caloroso que encontra alegria genuína em ajudar outros a crescer e alcançar seu potencial. Forma laços emocionais profundos nos relacionamentos e tem uma capacidade notável de extrair o melhor das pessoas. Suas habilidades de comunicação excepcionais e liderança altruísta que une qualquer grupo são grandes forças. Pode negligenciar suas próprias necessidades enquanto atende às expectativas dos outros ou cair em idealismo excessivo. Conselhos que lembram de cuidar do próprio coração tanto quanto cuida dos outros ressoam mais com você.',
        fr: 'Un leader influent au charisme chaleureux qui trouve une joie authentique à aider les autres à grandir et à réaliser leur potentiel. Vous tissez des liens émotionnels profonds et possédez une capacité remarquable à révéler le meilleur chez les autres. Vos compétences exceptionnelles en communication et votre leadership altruiste capable d\'unir n\'importe quel groupe sont de grandes forces. Vous pouvez négliger vos propres besoins en répondant aux attentes des autres ou tomber dans un idéalisme excessif. Les conseils rappelant de prendre soin de votre cœur autant que vous prenez soin des autres vous parlent le plus.',
        de: 'Ein einflussreicher Anführer mit warmem Charisma, der echte Freude darin findet, anderen beim Wachsen zu helfen und ihr Potenzial zu entfalten. Sie bilden tiefe emotionale Bindungen und besitzen eine bemerkenswerte Fähigkeit, das Beste aus Menschen herauszuholen. Ihre herausragenden Kommunikationsfähigkeiten und Ihr selbstloses Leadership, das jede Gruppe vereinen kann, sind große Stärken. Sie können Ihre eigenen Bedürfnisse vernachlässigen, um den Erwartungen anderer gerecht zu werden, oder in übermäßigen Idealismus verfallen. Ratschläge, die daran erinnern, das eigene Herz ebenso zu pflegen wie das der anderen, treffen Sie am tiefsten.'
      },
      emoji: '🌈',
      strengths: {
        ko: ['카리스마', '이타심', '소통력'],
        en: ['Charisma', 'Altruism', 'Communication'],
        ja: ['カリスマ', '利他心', 'コミュニケーション力'],
        es: ['Carisma', 'Altruismo', 'Comunicación'],
        pt: ['Carisma', 'Altruísmo', 'Comunicação'],
        fr: ['Charisme', 'Altruisme', 'Communication'],
        de: ['Charisma', 'Selbstlosigkeit', 'Kommunikation']
      }
    },

    ENFP: {
      name: { ko: '활동가', en: 'Campaigner', ja: '広報運動家', es: 'Activista', pt: 'Ativista', fr: 'Inspirateur', de: 'Aktivist' },
      desc: {
        ko: '열정과 자유로운 영혼을 가진 활동가로, 새로운 가능성만 보이면 가슴이 뛰고 즉시 행동에 옮깁니다. 넓은 인간관계를 즐기면서도 진정한 내면의 교감을 나눌 수 있는 사람을 특별히 소중히 여깁니다. 풍부한 상상력과 전염되는 긍정 에너지로 어디서든 분위기를 밝히는 것이 독보적인 강점입니다. 관심사가 자주 바뀌어 마무리가 약하거나, 감정 기복이 클 수 있는 것이 성장 과제입니다. 자유롭게 날되 뿌리를 내리는 것도 잊지 말라는 조언이 딱 맞는 유형입니다.',
        en: 'A passionate free spirit and activist whose heart races at every new possibility, driving you to act immediately. You enjoy wide social circles yet especially treasure those with whom you can share genuine inner connection. Your rich imagination and contagious positive energy that brighten any room are your standout strengths. Frequently shifting interests leading to poor follow-through and emotional ups and downs can be growth areas. Advice encouraging you to fly free while also putting down roots fits you perfectly.',
        ja: '情熱と自由な魂を持つ活動家で、新しい可能性が見えると胸が高鳴りすぐに行動に移します。広い人間関係を楽しみながらも、真の内面的な共感を分かち合える人を特に大切にします。豊かな想像力と伝染するポジティブエネルギーでどこでも雰囲気を明るくする力が際立った強みです。興味がよく変わり仕上げが弱かったり、感情の起伏が大きいことが成長課題です。自由に飛びつつも根を下ろすことも忘れるなというアドバイスがぴったりのタイプです。',
        es: 'Un espíritu libre y apasionado cuyo corazón se acelera ante cada nueva posibilidad, impulsándole a actuar de inmediato. Disfruta de amplios círculos sociales pero valora especialmente a quienes comparten una conexión interior genuina. Su rica imaginación y energía positiva contagiosa que ilumina cualquier ambiente son sus fortalezas más destacadas. Intereses que cambian frecuentemente llevando a poca constancia y altibajos emocionales pueden ser áreas de crecimiento. Los consejos que animan a volar libre mientras también echa raíces le encajan perfectamente.',
        pt: 'Um espírito livre e apaixonado cujo coração dispara diante de cada nova possibilidade, impulsionando-o a agir imediatamente. Aprecia amplos círculos sociais mas valoriza especialmente aqueles com quem pode compartilhar conexão interior genuína. Sua rica imaginação e energia positiva contagiante que ilumina qualquer ambiente são seus pontos fortes mais marcantes. Interesses que mudam frequentemente levando a pouca conclusão e oscilações emocionais podem ser áreas de crescimento. Conselhos que incentivam voar livre enquanto também cria raízes se encaixam perfeitamente.',
        fr: 'Un esprit libre et passionné dont le cœur s\'emballe à chaque nouvelle possibilité, vous poussant à agir immédiatement. Vous appréciez les larges cercles sociaux mais chérissez particulièrement ceux avec qui vous partagez une connexion intérieure authentique. Votre imagination débordante et votre énergie positive contagieuse qui illuminent n\'importe quel lieu sont vos forces distinctives. Des intérêts changeants menant à un manque de suivi et des hauts et bas émotionnels peuvent être des axes de progrès. Les conseils encourageant à voler librement tout en prenant racine vous correspondent parfaitement.',
        de: 'Ein leidenschaftlicher Freigeist, dessen Herz bei jeder neuen Möglichkeit schneller schlägt und der sofort ins Handeln kommt. Sie genießen breite soziale Kreise, schätzen aber besonders jene, mit denen Sie echte innere Verbindung teilen können. Ihre reiche Vorstellungskraft und ansteckende positive Energie, die jeden Raum erhellt, sind Ihre herausragenden Stärken. Häufig wechselnde Interessen mit schwacher Nachverfolgung und emotionale Schwankungen können Wachstumsbereiche sein. Ratschläge, die ermutigen, frei zu fliegen und gleichzeitig Wurzeln zu schlagen, passen perfekt zu Ihnen.'
      },
      emoji: '🎭',
      strengths: {
        ko: ['열정', '창의력', '사교성'],
        en: ['Enthusiasm', 'Creativity', 'Sociability'],
        ja: ['情熱', '創造力', '社交性'],
        es: ['Entusiasmo', 'Creatividad', 'Sociabilidad'],
        pt: ['Entusiasmo', 'Criatividade', 'Sociabilidade'],
        fr: ['Enthousiasme', 'Créativité', 'Sociabilité'],
        de: ['Begeisterung', 'Kreativität', 'Geselligkeit']
      }
    },

    ISTJ: {
      name: { ko: '현실주의자', en: 'Logistician', ja: '管理者', es: 'Logístico', pt: 'Logístico', fr: 'Logisticien', de: 'Logistiker' },
      desc: {
        ko: '책임감이 강하고 신뢰할 수 있는 현실주의자로, 한번 맡은 일은 끝까지 완수하는 사람입니다. 관계에서도 약속과 의리를 중시하며, 꾸준하고 변함없는 태도로 신뢰를 쌓아갑니다. 체계적이고 꼼꼼한 성격으로 어떤 조직이든 든든한 기둥 역할을 하는 것이 큰 강점입니다. 변화에 대한 저항감이나 지나친 경직성이 때로 성장의 걸림돌이 될 수 있습니다. 꾸준함을 유지하되 새로운 가능성에도 마음을 열라는 조언이 잘 맞는 유형입니다.',
        en: 'A deeply responsible and reliable realist who sees every commitment through to the end. In relationships, you value promises and loyalty, building trust through steadfast consistency. Your systematic and meticulous nature makes you the dependable pillar of any organization, which is a great strength. Resistance to change and excessive rigidity can sometimes become obstacles to growth. Advice encouraging you to maintain your steadfastness while opening your heart to new possibilities suits you well.',
        ja: '責任感が強く信頼できる現実主義者で、一度引き受けた仕事は最後まで全うする人です。人間関係でも約束と義理を重視し、変わらない誠実な態度で信頼を築きます。体系的で丁寧な性格でどんな組織でも頼もしい柱の役割を果たすのが大きな強みです。変化への抵抗感や過度な堅さが時に成長の妨げになることがあります。着実さを保ちつつ新しい可能性にも心を開けというアドバイスがしっくりくるタイプです。',
        es: 'Un realista profundamente responsable y confiable que cumple cada compromiso hasta el final. En las relaciones, valora las promesas y la lealtad, construyendo confianza con una consistencia inquebrantable. Su naturaleza sistemática y meticulosa le convierte en el pilar confiable de cualquier organización, lo cual es una gran fortaleza. La resistencia al cambio y la rigidez excesiva pueden ser obstáculos para el crecimiento. Los consejos que animan a mantener su constancia mientras abre el corazón a nuevas posibilidades le van bien.',
        pt: 'Um realista profundamente responsável e confiável que leva cada compromisso até o fim. Nos relacionamentos, valoriza promessas e lealdade, construindo confiança com consistência inabalável. Sua natureza sistemática e meticulosa o torna o pilar confiável de qualquer organização, o que é uma grande força. Resistência à mudança e rigidez excessiva podem às vezes se tornar obstáculos ao crescimento. Conselhos que incentivam manter sua constância enquanto abre o coração para novas possibilidades se adequam bem a você.',
        fr: 'Un réaliste profondément responsable et fiable qui mène chaque engagement jusqu\'au bout. Dans les relations, vous valorisez les promesses et la loyauté, construisant la confiance par une constance inébranlable. Votre nature systématique et méticuleuse fait de vous le pilier fiable de toute organisation, ce qui est une grande force. La résistance au changement et une rigidité excessive peuvent parfois freiner votre développement. Les conseils encourageant à maintenir votre constance tout en ouvrant votre cœur aux nouvelles possibilités vous conviennent bien.',
        de: 'Ein zutiefst verantwortungsvoller und verlässlicher Realist, der jede Verpflichtung bis zum Ende durchzieht. In Beziehungen schätzen Sie Versprechen und Loyalität und bauen Vertrauen durch beständige Zuverlässigkeit auf. Ihre systematische und sorgfältige Art macht Sie zur verlässlichen Säule jeder Organisation, was eine große Stärke ist. Widerstand gegen Veränderungen und übermäßige Starrheit können manchmal Hindernisse für das Wachstum sein. Ratschläge, die ermutigen, Beständigkeit zu bewahren und gleichzeitig das Herz für neue Möglichkeiten zu öffnen, passen gut zu Ihnen.'
      },
      emoji: '📋',
      strengths: {
        ko: ['성실함', '책임감', '체계성'],
        en: ['Diligence', 'Responsibility', 'Organization'],
        ja: ['誠実さ', '責任感', '体系性'],
        es: ['Diligencia', 'Responsabilidad', 'Organización'],
        pt: ['Diligência', 'Responsabilidade', 'Organização'],
        fr: ['Diligence', 'Responsabilité', 'Organisation'],
        de: ['Sorgfalt', 'Verantwortung', 'Organisation']
      }
    },

    ISFJ: {
      name: { ko: '수호자', en: 'Defender', ja: '擁護者', es: 'Defensor', pt: 'Defensor', fr: 'Défenseur', de: 'Verteidiger' },
      desc: {
        ko: '헌신적이고 따뜻한 마음을 가진 수호자로, 사랑하는 사람들을 위해 묵묵히 최선을 다합니다. 관계에서 상대방의 작은 변화까지 세심하게 알아차리며, 말없이 필요한 것을 채워주는 배려의 달인입니다. 뛰어난 인내력과 끈기로 어떤 어려움 속에서도 주변을 든든하게 지켜내는 것이 가장 큰 강점입니다. 자신의 감정을 억누르거나 변화를 두려워하는 경향이 성장 과제가 될 수 있습니다. 남을 돌보는 따뜻한 마음을 자신에게도 써보라는 조언이 가장 필요한 유형입니다.',
        en: 'A devoted and warmhearted protector who quietly gives their best for the people they love. In relationships, you notice even the smallest changes in others and are a master of silent, attentive care that fills needs without being asked. Your remarkable patience and perseverance that shield those around you through any hardship are your greatest strengths. Suppressing your own emotions and fearing change can be growth areas. Advice encouraging you to turn your caring warmth toward yourself is what you need most.',
        ja: '献身的で温かい心を持つ守護者で、愛する人々のために黙々と最善を尽くします。人間関係では相手の小さな変化まで細やかに気づき、言葉なく必要なものを満たす気配りの達人です。優れた忍耐力と粘り強さでどんな困難の中でも周囲をしっかり守り抜く力が最大の強みです。自分の感情を抑え込んだり変化を恐れる傾向が成長課題になることがあります。人を思いやる温かい心を自分にも向けてみよというアドバイスが最も必要なタイプです。',
        es: 'Un protector devoto y afectuoso que da silenciosamente lo mejor de sí por quienes ama. En las relaciones, nota incluso los cambios más pequeños en los demás y es un maestro del cuidado atento y silencioso. Su notable paciencia y perseverancia que protegen a quienes le rodean en cualquier adversidad son sus mayores fortalezas. Reprimir sus propias emociones y temer el cambio pueden ser áreas de crecimiento. Los consejos que animan a dirigir su calidez hacia sí mismo son los que más necesita.',
        pt: 'Um protetor devotado e afetuoso que silenciosamente dá o melhor de si pelas pessoas que ama. Nos relacionamentos, nota até as menores mudanças nos outros e é mestre no cuidado atento e silencioso que supre necessidades sem ser pedido. Sua notável paciência e perseverança que protegem os que estão ao redor em qualquer adversidade são suas maiores forças. Reprimir suas próprias emoções e temer mudanças podem ser áreas de crescimento. Conselhos que incentivam direcionar seu carinho para si mesmo são o que mais precisa.',
        fr: 'Un protecteur dévoué et chaleureux qui donne silencieusement le meilleur de lui-même pour ceux qu\'il aime. Dans les relations, vous remarquez même les plus petits changements chez les autres et êtes un maître de l\'attention silencieuse et bienveillante. Votre patience remarquable et votre persévérance qui protègent votre entourage dans toute adversité sont vos plus grandes forces. Réprimer vos propres émotions et craindre le changement peuvent être des axes de développement. Les conseils encourageant à tourner votre chaleur bienveillante vers vous-même sont ce dont vous avez le plus besoin.',
        de: 'Ein hingebungsvoller und warmherziger Beschützer, der still sein Bestes für die Menschen gibt, die er liebt. In Beziehungen bemerken Sie selbst die kleinsten Veränderungen bei anderen und sind ein Meister der stillen, aufmerksamen Fürsorge. Ihre bemerkenswerte Geduld und Ausdauer, die Ihre Umgebung durch jede Schwierigkeit schützen, sind Ihre größten Stärken. Das Unterdrücken eigener Emotionen und die Angst vor Veränderung können Wachstumsbereiche sein. Ratschläge, die ermutigen, Ihre fürsorgliche Wärme auch sich selbst zuzuwenden, sind das, was Sie am meisten brauchen.'
      },
      emoji: '🛡️',
      strengths: {
        ko: ['헌신', '배려심', '인내력'],
        en: ['Devotion', 'Thoughtfulness', 'Patience'],
        ja: ['献身', '思いやり', '忍耐力'],
        es: ['Dedicación', 'Consideración', 'Paciencia'],
        pt: ['Dedicação', 'Consideração', 'Paciência'],
        fr: ['Dévouement', 'Prévenance', 'Patience'],
        de: ['Hingabe', 'Rücksichtnahme', 'Geduld']
      }
    },

    ESTJ: {
      name: { ko: '경영자', en: 'Executive', ja: '幹部', es: 'Ejecutivo', pt: 'Executivo', fr: 'Directeur', de: 'Geschäftsführer' },
      desc: {
        ko: '질서와 원칙을 중시하는 실행력 있는 관리자로, 맡은 역할에서 항상 모범을 보이려 합니다. 관계에서도 약속을 철저히 지키고, 신뢰를 기반으로 한 안정적인 유대를 추구합니다. 명확한 기준을 세우고 조직을 효율적으로 이끄는 탁월한 실행력이 가장 큰 강점입니다. 다른 사람의 방식을 인정하지 않거나, 감정보다 논리만 앞세우는 점이 성장 과제가 될 수 있습니다. 원칙을 지키되 유연함도 힘이라는 것을 기억하라는 조언이 잘 맞는 유형입니다.',
        en: 'An action-oriented manager who values order and principles, always striving to lead by example in every role. In relationships, you keep promises faithfully and seek stable bonds built on trust. Your outstanding ability to set clear standards and lead organizations efficiently is your greatest strength. Difficulty accepting others\' approaches or prioritizing logic over feelings can be growth areas. Advice reminding you that maintaining principles is important but flexibility is also a strength suits you well.',
        ja: '秩序と原則を重んじる実行力のある管理者で、任された役割では常に模範を示そうとします。人間関係でも約束を徹底的に守り、信頼を基盤とした安定的な絆を追求します。明確な基準を立て組織を効率的に導く卓越した実行力が最大の強みです。他者のやり方を認められなかったり、感情より論理だけを優先する点が成長課題になることがあります。原則を守りつつも柔軟さも力であることを忘れるなというアドバイスがしっくりくるタイプです。',
        es: 'Un gerente orientado a la acción que valora el orden y los principios, esforzándose siempre por dar ejemplo en cada rol. En las relaciones, cumple sus promesas fielmente y busca vínculos estables basados en la confianza. Su capacidad sobresaliente para establecer estándares claros y liderar organizaciones eficientemente es su mayor fortaleza. La dificultad para aceptar los métodos de otros o priorizar la lógica sobre los sentimientos pueden ser áreas de crecimiento. Los consejos que recuerdan que mantener principios es importante pero la flexibilidad también es una fortaleza le van bien.',
        pt: 'Um gerente orientado à ação que valoriza ordem e princípios, sempre se esforçando para dar o exemplo em cada função. Nos relacionamentos, cumpre promessas fielmente e busca laços estáveis construídos sobre confiança. Sua capacidade excepcional de estabelecer padrões claros e liderar organizações eficientemente é sua maior força. Dificuldade em aceitar as abordagens dos outros ou priorizar lógica sobre sentimentos podem ser áreas de crescimento. Conselhos que lembram que manter princípios é importante, mas flexibilidade também é uma força, se adequam bem a você.',
        fr: 'Un manager orienté action qui valorise l\'ordre et les principes, s\'efforçant toujours de montrer l\'exemple dans chaque rôle. Dans les relations, vous tenez fidèlement vos promesses et recherchez des liens stables fondés sur la confiance. Votre capacité exceptionnelle à fixer des normes claires et à diriger des organisations efficacement est votre plus grande force. La difficulté à accepter les méthodes des autres ou à privilégier la logique sur les émotions peuvent être des axes de progrès. Les conseils rappelant que maintenir ses principes est important mais que la flexibilité est aussi une force vous conviennent bien.',
        de: 'Ein handlungsorientierter Manager, der Ordnung und Prinzipien schätzt und stets danach strebt, in jeder Rolle mit gutem Beispiel voranzugehen. In Beziehungen halten Sie Versprechen treu und suchen stabile Bindungen auf Vertrauensbasis. Ihre herausragende Fähigkeit, klare Standards zu setzen und Organisationen effizient zu führen, ist Ihre größte Stärke. Schwierigkeiten, die Methoden anderer zu akzeptieren, oder das Bevorzugen von Logik über Gefühle können Wachstumsbereiche sein. Ratschläge, die daran erinnern, dass Prinzipien wichtig sind, aber Flexibilität auch eine Stärke ist, passen gut zu Ihnen.'
      },
      emoji: '📊',
      strengths: {
        ko: ['실행력', '조직력', '리더십'],
        en: ['Execution', 'Organization', 'Leadership'],
        ja: ['実行力', '組織力', 'リーダーシップ'],
        es: ['Ejecución', 'Organización', 'Liderazgo'],
        pt: ['Execução', 'Organização', 'Liderança'],
        fr: ['Exécution', 'Organisation', 'Leadership'],
        de: ['Umsetzungskraft', 'Organisation', 'Führung']
      }
    },

    ESFJ: {
      name: { ko: '집정관', en: 'Consul', ja: '領事', es: 'Cónsul', pt: 'Cônsul', fr: 'Consul', de: 'Konsul' },
      desc: {
        ko: '사교적이고 배려심 깊은 돌봄의 리더로, 함께하는 모든 사람이 편안하도록 분위기를 조성합니다. 관계에서 상대방의 감정에 민감하게 반응하며, 갈등 없는 조화로운 관계를 위해 적극적으로 노력합니다. 탁월한 사교 능력과 세심한 배려로 어떤 모임에서든 중심 역할을 하는 것이 큰 강점입니다. 타인의 평가에 지나치게 신경 쓰거나, 거절하지 못해 스스로 지칠 수 있는 것이 성장 과제입니다. 모두를 챙기되 때로는 자신의 의견도 당당히 말하라는 조언이 잘 맞는 유형입니다.',
        en: 'A sociable and deeply caring leader who creates an atmosphere where everyone feels comfortable and welcome. In relationships, you respond sensitively to others\' emotions and actively work to maintain harmonious, conflict-free connections. Your excellent social skills and thoughtful consideration that make you the natural center of any gathering are great strengths. Caring too much about others\' opinions or being unable to say no, leading to exhaustion, can be growth areas. Advice encouraging you to look after everyone while also confidently voicing your own opinions suits you well.',
        ja: '社交的で思いやり深い世話役リーダーで、一緒にいるすべての人が快適になるよう雰囲気を作ります。人間関係では相手の感情に敏感に反応し、葛藤のない調和的な関係のために積極的に努力します。卓越した社交力と細やかな配慮でどんな集まりでも中心的役割を果たす力が大きな強みです。他者の評価を気にしすぎたり、断れずに自分が疲弊することが成長課題です。皆を大切にしつつも時には自分の意見も堂々と言えというアドバイスがしっくりくるタイプです。',
        es: 'Un líder sociable y profundamente atento que crea un ambiente donde todos se sienten cómodos y bienvenidos. En las relaciones, responde con sensibilidad a las emociones de los demás y trabaja activamente para mantener conexiones armoniosas. Sus excelentes habilidades sociales y consideración atenta que le convierten en el centro natural de cualquier reunión son grandes fortalezas. Preocuparse demasiado por las opiniones ajenas o no poder decir que no pueden ser áreas de crecimiento. Los consejos que animan a cuidar a todos mientras también expresa con confianza sus propias opiniones le van bien.',
        pt: 'Um líder sociável e profundamente atencioso que cria um ambiente onde todos se sentem confortáveis e bem-vindos. Nos relacionamentos, responde com sensibilidade às emoções dos outros e trabalha ativamente para manter conexões harmoniosas. Suas excelentes habilidades sociais e consideração atenciosa que o tornam o centro natural de qualquer reunião são grandes forças. Preocupar-se demais com opiniões alheias ou não conseguir dizer não podem ser áreas de crescimento. Conselhos que incentivam cuidar de todos enquanto também expressa suas próprias opiniões com confiança se adequam bem.',
        fr: 'Un leader sociable et profondément attentionné qui crée une atmosphère où chacun se sent à l\'aise et bienvenu. Dans les relations, vous réagissez avec sensibilité aux émotions des autres et travaillez activement à maintenir des liens harmonieux. Vos excellentes compétences sociales et votre considération attentive qui font de vous le centre naturel de tout rassemblement sont de grandes forces. Se soucier trop de l\'avis des autres ou ne pas savoir dire non peuvent être des axes de développement. Les conseils encourageant à veiller sur tous tout en exprimant aussi vos propres opinions avec assurance vous conviennent bien.',
        de: 'Ein geselliger und zutiefst fürsorglicher Anführer, der eine Atmosphäre schafft, in der sich alle wohl und willkommen fühlen. In Beziehungen reagieren Sie einfühlsam auf die Emotionen anderer und arbeiten aktiv an harmonischen Verbindungen. Ihre hervorragenden sozialen Fähigkeiten und aufmerksame Rücksichtnahme, die Sie zum natürlichen Mittelpunkt jeder Zusammenkunft machen, sind große Stärken. Sich zu sehr um die Meinung anderer zu sorgen oder nicht Nein sagen zu können, können Wachstumsbereiche sein. Ratschläge, die ermutigen, für alle zu sorgen und gleichzeitig selbstbewusst die eigene Meinung zu vertreten, passen gut zu Ihnen.'
      },
      emoji: '🤝',
      strengths: {
        ko: ['사교성', '배려심', '협동력'],
        en: ['Sociability', 'Caring', 'Cooperation'],
        ja: ['社交性', '思いやり', '協調性'],
        es: ['Sociabilidad', 'Atención', 'Cooperación'],
        pt: ['Sociabilidade', 'Cuidado', 'Cooperação'],
        fr: ['Sociabilité', 'Bienveillance', 'Coopération'],
        de: ['Geselligkeit', 'Fürsorge', 'Kooperation']
      }
    },

    ISTP: {
      name: { ko: '장인', en: 'Virtuoso', ja: '巨匠', es: 'Virtuoso', pt: 'Virtuoso', fr: 'Virtuose', de: 'Virtuose' },
      desc: {
        ko: '침착하고 실용적인 문제 해결사로, 위기 상황에서 오히려 빛을 발하는 냉정한 행동파입니다. 관계에서는 말보다 행동으로 마음을 표현하며, 개인의 자유와 공간을 중요하게 생각합니다. 뛰어난 관찰력과 손재주로 복잡한 기술적 문제도 직접 해결해내는 능력이 독보적인 강점입니다. 감정 표현이 서투르거나 장기적 계획을 세우는 데 어려움을 느낄 수 있습니다. 지금 이 순간에 집중하되 가끔은 미래도 설계해보라는 조언이 잘 맞는 유형입니다.',
        en: 'A calm and practical problem solver who shines brightest in crisis situations with cool-headed action. In relationships, you express your feelings through actions rather than words and value personal freedom and space. Your exceptional observation skills and dexterity that let you solve complex technical problems hands-on are standout strengths. Difficulty expressing emotions or making long-term plans can be growth areas. Advice encouraging you to stay focused on the present moment while occasionally designing your future suits you well.',
        ja: '冷静で実用的な問題解決者で、危機的状況でこそ輝く冷静な行動派です。人間関係では言葉よりも行動で気持ちを表し、個人の自由と空間を大切にします。優れた観察力と器用さで複雑な技術的問題も自ら解決する能力が際立った強みです。感情表現が苦手だったり、長期的な計画を立てるのが難しいことがあります。今この瞬間に集中しつつ、たまには未来も描いてみよというアドバイスがしっくりくるタイプです。',
        es: 'Un solucionador de problemas tranquilo y práctico que brilla más en situaciones de crisis con acción serena. En las relaciones, expresa sentimientos a través de acciones más que palabras y valora la libertad personal y el espacio. Su excepcional capacidad de observación y destreza manual que le permiten resolver problemas técnicos complejos son fortalezas destacadas. La dificultad para expresar emociones o hacer planes a largo plazo pueden ser áreas de crecimiento. Los consejos que animan a concentrarse en el momento presente mientras ocasionalmente diseña su futuro le van bien.',
        pt: 'Um solucionador de problemas calmo e prático que brilha mais em situações de crise com ação serena. Nos relacionamentos, expressa sentimentos através de ações em vez de palavras e valoriza liberdade pessoal e espaço. Sua excepcional capacidade de observação e destreza que permitem resolver problemas técnicos complexos são forças marcantes. Dificuldade em expressar emoções ou fazer planos de longo prazo podem ser áreas de crescimento. Conselhos que incentivam focar no momento presente enquanto ocasionalmente projeta seu futuro se adequam bem.',
        fr: 'Un résolveur de problèmes calme et pragmatique qui brille le plus dans les situations de crise par son action posée. Dans les relations, vous exprimez vos sentiments par des actes plutôt que des mots et valorisez la liberté personnelle et l\'espace. Votre capacité d\'observation exceptionnelle et votre dextérité qui vous permettent de résoudre des problèmes techniques complexes sont des forces remarquables. La difficulté à exprimer vos émotions ou à faire des plans à long terme peuvent être des axes de progrès. Les conseils encourageant à rester concentré sur le moment présent tout en concevant parfois votre avenir vous conviennent bien.',
        de: 'Ein ruhiger und praktischer Problemlöser, der in Krisensituationen mit besonnener Aktion am hellsten strahlt. In Beziehungen drücken Sie Ihre Gefühle durch Taten statt Worte aus und schätzen persönliche Freiheit und Raum. Ihre außergewöhnliche Beobachtungsgabe und Geschicklichkeit, die Sie komplexe technische Probleme eigenständig lösen lassen, sind herausragende Stärken. Schwierigkeiten beim Ausdrücken von Emotionen oder bei langfristiger Planung können Wachstumsbereiche sein. Ratschläge, die ermutigen, im Moment zu bleiben und gelegentlich auch die Zukunft zu gestalten, passen gut zu Ihnen.'
      },
      emoji: '🔧',
      strengths: {
        ko: ['냉철함', '실용성', '적응력'],
        en: ['Cool-headedness', 'Practicality', 'Adaptability'],
        ja: ['冷静さ', '実用性', '適応力'],
        es: ['Serenidad', 'Practicidad', 'Adaptabilidad'],
        pt: ['Serenidade', 'Praticidade', 'Adaptabilidade'],
        fr: ['Sang-froid', 'Pragmatisme', 'Adaptabilité'],
        de: ['Besonnenheit', 'Praktisches Denken', 'Anpassungsfähigkeit']
      }
    },

    ISFP: {
      name: { ko: '모험가', en: 'Adventurer', ja: '冒険家', es: 'Aventurero', pt: 'Aventureiro', fr: 'Aventurier', de: 'Abenteurer' },
      desc: {
        ko: '감성이 풍부하고 예술적 감각이 뛰어난 자유로운 영혼으로, 아름다움이 있는 곳에 자연스럽게 끌립니다. 관계에서 진심을 중요하게 여기며, 말보다는 따뜻한 행동과 분위기로 사랑을 전합니다. 섬세한 감수성과 뛰어난 미적 감각으로 일상 속에서도 특별한 아름다움을 발견하는 것이 독보적 강점입니다. 갈등 상황을 피하거나 미래 계획에 소극적인 경향이 성장 과제가 될 수 있습니다. 현재를 즐기되 때로는 용기를 내어 자신의 목소리를 내라는 조언이 잘 맞는 유형입니다.',
        en: 'A free spirit with rich emotions and exceptional artistic sense, naturally drawn to wherever beauty exists. In relationships, you value sincerity and convey love through warm actions and atmosphere rather than words. Your delicate sensitivity and outstanding aesthetic sense that discover extraordinary beauty in everyday life are standout strengths. Avoiding conflict situations or being passive about future planning can be growth areas. Advice encouraging you to enjoy the present while sometimes finding the courage to speak up suits you well.',
        ja: '感性が豊かで芸術的センスに優れた自由な魂で、美しさのある場所に自然と惹かれます。人間関係では誠意を大切にし、言葉よりも温かい行動と雰囲気で愛を伝えます。繊細な感受性と優れた美的センスで日常の中にも特別な美しさを見出す力が際立った強みです。葛藤を避けたり将来の計画に消極的な傾向が成長課題になることがあります。今を楽しみつつも時には勇気を出して自分の声を上げよというアドバイスがしっくりくるタイプです。',
        es: 'Un espíritu libre con emociones ricas y un sentido artístico excepcional, naturalmente atraído hacia donde existe la belleza. En las relaciones, valora la sinceridad y transmite amor a través de acciones cálidas y ambiente más que palabras. Su sensibilidad delicada y sentido estético sobresaliente que descubren belleza extraordinaria en la vida cotidiana son fortalezas destacadas. Evitar situaciones de conflicto o ser pasivo respecto a la planificación futura pueden ser áreas de crecimiento. Los consejos que animan a disfrutar el presente mientras encuentra el valor de alzar la voz le van bien.',
        pt: 'Um espírito livre com emoções ricas e senso artístico excepcional, naturalmente atraído para onde a beleza existe. Nos relacionamentos, valoriza a sinceridade e transmite amor através de ações calorosas e atmosfera em vez de palavras. Sua sensibilidade delicada e senso estético excepcional que descobrem beleza extraordinária no cotidiano são forças marcantes. Evitar situações de conflito ou ser passivo quanto ao planejamento futuro podem ser áreas de crescimento. Conselhos que incentivam aproveitar o presente enquanto encontra coragem para se expressar se adequam bem.',
        fr: 'Un esprit libre aux émotions riches et au sens artistique exceptionnel, naturellement attiré là où la beauté se trouve. Dans les relations, vous valorisez la sincérité et transmettez votre amour par des gestes chaleureux et une atmosphère plutôt que des mots. Votre sensibilité délicate et votre sens esthétique remarquable qui découvrent une beauté extraordinaire dans le quotidien sont des forces distinctives. Éviter les conflits ou manquer de proactivité pour planifier l\'avenir peuvent être des axes de développement. Les conseils encourageant à profiter du présent tout en trouvant le courage de s\'exprimer vous conviennent bien.',
        de: 'Ein Freigeist mit reichen Emotionen und außergewöhnlichem Kunstsinn, der sich natürlich dorthin gezogen fühlt, wo Schönheit existiert. In Beziehungen schätzen Sie Aufrichtigkeit und vermitteln Liebe durch warme Gesten und Atmosphäre statt Worte. Ihre zarte Sensibilität und Ihr herausragender ästhetischer Sinn, die außergewöhnliche Schönheit im Alltag entdecken, sind herausragende Stärken. Konfliktsituationen zu meiden oder bei Zukunftsplanung passiv zu sein, können Wachstumsbereiche sein. Ratschläge, die ermutigen, die Gegenwart zu genießen und manchmal den Mut zu finden, Ihre Stimme zu erheben, passen gut zu Ihnen.'
      },
      emoji: '🎨',
      strengths: {
        ko: ['감수성', '예술성', '유연함'],
        en: ['Sensitivity', 'Artistry', 'Flexibility'],
        ja: ['感受性', '芸術性', '柔軟さ'],
        es: ['Sensibilidad', 'Creatividad artística', 'Flexibilidad'],
        pt: ['Sensibilidade', 'Criatividade artística', 'Flexibilidade'],
        fr: ['Sensibilité', 'Sens artistique', 'Souplesse'],
        de: ['Sensibilität', 'Kunstsinn', 'Flexibilität']
      }
    },

    ESTP: {
      name: { ko: '사업가', en: 'Entrepreneur', ja: '起業家', es: 'Emprendedor', pt: 'Empreendedor', fr: 'Entrepreneur', de: 'Unternehmer' },
      desc: {
        ko: '에너지가 넘치고 행동력이 뛰어난 모험가로, 생각보다 실행이 앞서는 현장형 리더입니다. 관계에서도 솔직하고 직설적이며, 함께 활동하고 경험을 나누는 것을 통해 유대감을 쌓습니다. 빠른 상황 판단력과 위기 대처 능력으로 어떤 현장에서든 즉각 결과를 만들어내는 것이 최대 강점입니다. 충동적인 결정이나 장기적 결과를 고려하지 않는 성향이 성장 과제가 될 수 있습니다. 과감하게 행동하되 때로는 멈추고 생각하는 시간도 가져보라는 조언이 잘 맞습니다.',
        en: 'An energetic and action-driven adventurer who leads on the ground, executing before overthinking. In relationships, you are straightforward and honest, building bonds through shared activities and experiences. Your rapid situational judgment and crisis management ability that produce immediate results in any setting are your greatest strengths. Impulsive decisions and not considering long-term consequences can be growth areas. Advice encouraging bold action while sometimes pausing to reflect suits you well.',
        ja: 'エネルギーに溢れ行動力抜群の冒険家で、考えるより先に動く現場型リーダーです。人間関係でも率直で直接的であり、一緒に活動し経験を共有することで絆を深めます。素早い状況判断力と危機対応能力でどんな現場でも即座に結果を出す力が最大の強みです。衝動的な決断や長期的な結果を考慮しない傾向が成長課題になることがあります。大胆に行動しつつも時には立ち止まって考える時間も持てというアドバイスがしっくりきます。',
        es: 'Un aventurero enérgico y orientado a la acción que lidera sobre el terreno, ejecutando antes de pensar demasiado. En las relaciones, es directo y honesto, construyendo vínculos a través de actividades y experiencias compartidas. Su rápido juicio situacional y capacidad de gestión de crisis que producen resultados inmediatos son sus mayores fortalezas. Las decisiones impulsivas y no considerar consecuencias a largo plazo pueden ser áreas de crecimiento. Los consejos que animan a actuar con audacia mientras ocasionalmente se pausa para reflexionar le van bien.',
        pt: 'Um aventureiro enérgico e orientado à ação que lidera no campo, executando antes de pensar demais. Nos relacionamentos, é direto e honesto, construindo laços através de atividades e experiências compartilhadas. Seu rápido julgamento situacional e capacidade de gestão de crise que produzem resultados imediatos são suas maiores forças. Decisões impulsivas e não considerar consequências de longo prazo podem ser áreas de crescimento. Conselhos que incentivam ação ousada enquanto ocasionalmente faz uma pausa para refletir se adequam bem.',
        fr: 'Un aventurier énergique et orienté action qui mène sur le terrain, exécutant avant de trop réfléchir. Dans les relations, vous êtes direct et honnête, construisant des liens par des activités et expériences partagées. Votre jugement situationnel rapide et votre capacité de gestion de crise qui produisent des résultats immédiats sont vos plus grandes forces. Les décisions impulsives et le manque de considération pour les conséquences à long terme peuvent être des axes de progrès. Les conseils encourageant à agir avec audace tout en prenant parfois le temps de réfléchir vous conviennent bien.',
        de: 'Ein energiegeladener, aktionsorientierter Abenteurer, der vor Ort führt und handelt, bevor er zu viel nachdenkt. In Beziehungen sind Sie geradlinig und ehrlich, und bauen Bindungen durch gemeinsame Aktivitäten und Erlebnisse auf. Ihr schnelles Situationsurteil und Ihre Krisenmanagement-Fähigkeit, die in jeder Umgebung sofortige Ergebnisse liefern, sind Ihre größten Stärken. Impulsive Entscheidungen und das Nichtbedenken langfristiger Konsequenzen können Wachstumsbereiche sein. Ratschläge, die mutiges Handeln fördern und gleichzeitig gelegentliches Innehalten zum Nachdenken empfehlen, passen gut zu Ihnen.'
      },
      emoji: '🚀',
      strengths: {
        ko: ['행동력', '대담함', '순발력'],
        en: ['Action-oriented', 'Boldness', 'Quick reflexes'],
        ja: ['行動力', '大胆さ', '瞬発力'],
        es: ['Capacidad de acción', 'Audacia', 'Reflejos rápidos'],
        pt: ['Capacidade de ação', 'Audácia', 'Reflexos rápidos'],
        fr: ['Esprit d\'action', 'Audace', 'Réactivité'],
        de: ['Tatkraft', 'Kühnheit', 'Schnelle Reaktion']
      }
    },

    ESFP: {
      name: { ko: '연예인', en: 'Entertainer', ja: 'エンターテイナー', es: 'Animador', pt: 'Animador', fr: 'Amuseur', de: 'Entertainer' },
      desc: {
        ko: '밝고 유쾌한 에너지로 어디서든 분위기를 살리는 타고난 엔터테이너입니다. 사람들과 함께하는 것을 진심으로 즐기며, 진솔한 태도로 누구와도 금방 친해집니다. 뛰어난 현장 감각과 낙천적 에너지로 주변 사람들에게 활력과 기쁨을 선사하는 것이 가장 큰 강점입니다. 즉흥적인 성향 탓에 미래 준비가 부족하거나, 진지한 상황을 피하려는 경향이 성장 과제입니다. 지금의 즐거움을 만끽하되 내일을 위한 작은 준비도 해보라는 조언이 딱 맞는 유형입니다.',
        en: 'A natural entertainer with bright and cheerful energy who lights up any room they enter. You genuinely love being with people and quickly befriend anyone with your authentic, open attitude. Your outstanding sense of the moment and optimistic energy that bring vitality and joy to everyone around you are your greatest strengths. An impulsive nature leading to lack of future preparation and avoiding serious situations can be growth areas. Advice encouraging you to savor present joys while also making small preparations for tomorrow fits you perfectly.',
        ja: '明るく愉快なエネルギーでどこでも場を盛り上げる生まれながらのエンターテイナーです。人と一緒にいることを心から楽しみ、飾らない態度で誰とでもすぐに打ち解けます。優れた現場感覚と楽観的なエネルギーで周りの人々に活力と喜びを届ける力が最大の強みです。即興的な性格ゆえに将来の準備が不足したり、真剣な場面を避ける傾向が成長課題です。今の楽しさを満喫しつつ明日のための小さな準備もしてみよというアドバイスがぴったりのタイプです。',
        es: 'Un animador nato con energía brillante y alegre que ilumina cualquier lugar al que llega. Disfruta genuinamente estar con la gente y se hace amigo de cualquiera rápidamente con su actitud auténtica y abierta. Su sentido sobresaliente del momento y energía optimista que aportan vitalidad y alegría a todos son sus mayores fortalezas. Una naturaleza impulsiva que lleva a falta de preparación para el futuro y evitar situaciones serias pueden ser áreas de crecimiento. Los consejos que animan a saborear las alegrías presentes mientras hace pequeñas preparaciones para el mañana le encajan perfectamente.',
        pt: 'Um animador nato com energia brilhante e alegre que ilumina qualquer lugar onde entra. Aprecia genuinamente estar com pessoas e rapidamente faz amizade com qualquer um com sua atitude autêntica e aberta. Seu senso excepcional do momento e energia otimista que trazem vitalidade e alegria a todos são suas maiores forças. Natureza impulsiva levando à falta de preparação para o futuro e evitar situações sérias podem ser áreas de crescimento. Conselhos que incentivam saborear as alegrias presentes enquanto faz pequenas preparações para o amanhã se encaixam perfeitamente.',
        fr: 'Un animateur né à l\'énergie rayonnante et joyeuse qui illumine chaque lieu où il entre. Vous aimez sincèrement être entouré et vous liez d\'amitié rapidement grâce à votre attitude authentique et ouverte. Votre sens remarquable du moment et votre énergie optimiste qui apportent vitalité et joie à tous sont vos plus grandes forces. Une nature impulsive menant à un manque de préparation pour l\'avenir et l\'évitement des situations sérieuses peuvent être des axes de progrès. Les conseils encourageant à savourer les joies présentes tout en faisant de petits préparatifs pour demain vous correspondent parfaitement.',
        de: 'Ein geborener Entertainer mit strahlender, fröhlicher Energie, der jeden Raum erhellt, den er betritt. Sie genießen es aufrichtig, mit Menschen zusammen zu sein, und schließen dank Ihrer authentischen, offenen Art schnell Freundschaften. Ihr herausragendes Gespür für den Moment und Ihre optimistische Energie, die allen Vitalität und Freude bringen, sind Ihre größten Stärken. Eine impulsive Natur, die zu mangelnder Zukunftsvorsorge führt, und das Vermeiden ernster Situationen können Wachstumsbereiche sein. Ratschläge, die ermutigen, gegenwärtige Freuden zu genießen und gleichzeitig kleine Vorbereitungen für morgen zu treffen, passen perfekt zu Ihnen.'
      },
      emoji: '🎉',
      strengths: {
        ko: ['사교성', '낙관주의', '유머감각'],
        en: ['Sociability', 'Optimism', 'Sense of humor'],
        ja: ['社交性', '楽観主義', 'ユーモアセンス'],
        es: ['Sociabilidad', 'Optimismo', 'Sentido del humor'],
        pt: ['Sociabilidade', 'Otimismo', 'Senso de humor'],
        fr: ['Sociabilité', 'Optimisme', 'Sens de l\'humour'],
        de: ['Geselligkeit', 'Optimismus', 'Humor']
      }
    }
  };

  /* ======================================================
   *  COMPATIBILITY — 궁합 텍스트 (7개 언어)
   * ====================================================== */
  var COMPAT_MESSAGES = {
    perfect: {
      ko: '환상의 궁합! 서로를 깊이 이해하고 완벽하게 보완하는 최고의 파트너입니다.',
      en: 'A perfect match! You deeply understand and perfectly complement each other.',
      ja: '最高の相性！お互いを深く理解し、完璧に補い合う最高のパートナーです。',
      es: '¡Combinación perfecta! Se entienden profundamente y se complementan a la perfección.',
      pt: 'Combinação perfeita! Vocês se entendem profundamente e se complementam perfeitamente.',
      fr: 'Accord parfait ! Vous vous comprenez profondément et vous vous complétez parfaitement.',
      de: 'Perfektes Match! Ihr versteht euch zutiefst und ergänzt euch perfekt.'
    },
    great: {
      ko: '훌륭한 궁합! 서로 다른 점이 오히려 매력이 되어 함께 성장할 수 있습니다.',
      en: 'A great match! Your differences become attractive strengths that help you grow together.',
      ja: '素晴らしい相性！お互いの違いがむしろ魅力となり、共に成長できます。',
      es: '¡Gran combinación! Sus diferencias se convierten en fortalezas atractivas para crecer juntos.',
      pt: 'Ótima combinação! Suas diferenças se tornam pontos fortes que ajudam a crescer juntos.',
      fr: 'Excellent accord ! Vos différences deviennent des forces qui vous aident à grandir ensemble.',
      de: 'Großartiges Match! Eure Unterschiede werden zu Stärken, die euch gemeinsam wachsen lassen.'
    },
    good: {
      ko: '좋은 궁합! 비슷한 가치관을 공유하면서도 적당한 차이가 관계를 흥미롭게 만듭니다.',
      en: 'A good match! You share similar values while enough differences keep things interesting.',
      ja: '良い相性！似た価値観を共有しながらも、適度な違いが関係を面白くします。',
      es: '¡Buena combinación! Comparten valores similares mientras las diferencias mantienen la relación interesante.',
      pt: 'Boa combinação! Compartilham valores semelhantes enquanto as diferenças mantêm a relação interessante.',
      fr: 'Bon accord ! Vous partagez des valeurs similaires tandis que vos différences rendent la relation intéressante.',
      de: 'Gutes Match! Ihr teilt ähnliche Werte, während genügend Unterschiede es spannend halten.'
    },
    same: {
      ko: '동류 궁합! 서로를 거울처럼 이해하지만, 같은 약점을 공유할 수 있으니 주의가 필요합니다.',
      en: 'Kindred spirits! You understand each other like mirrors, but watch out for shared blind spots.',
      ja: '同類の相性！鏡のようにお互いを理解しますが、同じ弱点を共有する可能性があるので注意が必要です。',
      es: '¡Almas gemelas! Se entienden como espejos, pero cuidado con los puntos ciegos compartidos.',
      pt: 'Almas gêmeas! Se entendem como espelhos, mas cuidado com os pontos cegos compartilhados.',
      fr: 'Âmes sœurs ! Vous vous comprenez comme des miroirs, mais attention aux angles morts partagés.',
      de: 'Seelenverwandte! Ihr versteht euch wie Spiegel, aber achtet auf gemeinsame blinde Flecken.'
    },
    challenging: {
      ko: '도전적 궁합! 서로 다른 시각이 갈등을 일으킬 수 있지만, 이를 극복하면 크게 성장합니다.',
      en: 'A challenging match! Different perspectives may cause friction, but overcoming it leads to great growth.',
      ja: '挑戦的な相性！異なる視点が衝突を起こすこともありますが、それを乗り越えれば大きく成長します。',
      es: '¡Combinación desafiante! Las perspectivas diferentes pueden causar fricción, pero superarlo lleva a un gran crecimiento.',
      pt: 'Combinação desafiadora! Perspectivas diferentes podem causar atrito, mas superá-lo leva a grande crescimento.',
      fr: 'Accord stimulant ! Des perspectives différentes peuvent créer des frictions, mais les surmonter mène à une grande croissance.',
      de: 'Herausforderndes Match! Unterschiedliche Sichtweisen können Reibung verursachen, aber das Überwinden führt zu großem Wachstum.'
    }
  };

  /* ======================================================
   *  보완 궁합 테이블
   * ====================================================== */
  var IDEAL_PAIRS = {
    INFP: ['ENFJ', 'ENTJ'],
    ENFP: ['INFJ', 'INTJ'],
    INFJ: ['ENFP', 'ENTP'],
    ENFJ: ['INFP', 'ISFP'],
    INTJ: ['ENFP', 'ENTP'],
    ENTJ: ['INFP', 'INTP'],
    INTP: ['ENTJ', 'ESTJ'],
    ENTP: ['INFJ', 'INTJ'],
    ISFP: ['ENFJ', 'ESFJ', 'ESTJ'],
    ESFP: ['ISFJ', 'ISTJ'],
    ISTP: ['ESFJ', 'ESTJ'],
    ESTP: ['ISFJ', 'ISTJ'],
    ISFJ: ['ESFP', 'ESTP'],
    ESFJ: ['ISFP', 'ISTP'],
    ISTJ: ['ESFP', 'ESTP'],
    ESTJ: ['INTP', 'ISFP', 'ISTP']
  };

  /* ======================================================
   *  calculate(answers) — MBTI 결과 산출
   * ====================================================== */
  function calculate(answers) {
    var count = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

    for (var i = 0; i < answers.length; i++) {
      var a = answers[i];
      if (a && a.value && count.hasOwnProperty(a.value)) {
        count[a.value]++;
      }
    }

    var ei = count.E > count.I ? 'E' : 'I';  // 동점 → I
    var sn = count.S > count.N ? 'S' : 'N';  // 동점 → N
    var tf = count.T > count.F ? 'T' : 'F';  // 동점 → F
    var jp = count.J > count.P ? 'J' : 'P';  // 동점 → P

    return ei + sn + tf + jp;
  }

  /* ======================================================
   *  getTypeInfo(type)
   * ====================================================== */
  function getTypeInfo(type) {
    return TYPES[type] || null;
  }

  /* ======================================================
   *  getCompatibility(type1, type2)
   * ====================================================== */
  function getCompatibility(type1, type2) {
    if (!TYPES[type1] || !TYPES[type2]) {
      return null;
    }

    // 같은 유형
    if (type1 === type2) {
      return { score: 85, message: COMPAT_MESSAGES.same };
    }

    // 보완(이상적) 궁합 확인
    var ideals1 = IDEAL_PAIRS[type1] || [];
    var ideals2 = IDEAL_PAIRS[type2] || [];
    if (ideals1.indexOf(type2) !== -1 || ideals2.indexOf(type1) !== -1) {
      return { score: 92, message: COMPAT_MESSAGES.perfect };
    }

    // 축별 비교 점수 계산
    var axes = [
      [type1.charAt(0), type2.charAt(0)],  // E/I
      [type1.charAt(1), type2.charAt(1)],  // S/N
      [type1.charAt(2), type2.charAt(2)],  // T/F
      [type1.charAt(3), type2.charAt(3)]   // J/P
    ];

    var matchCount = 0;
    for (var i = 0; i < axes.length; i++) {
      if (axes[i][0] === axes[i][1]) {
        matchCount++;
      }
    }

    // 매칭 축 개수에 따른 점수
    if (matchCount >= 3) {
      return { score: 82, message: COMPAT_MESSAGES.great };
    } else if (matchCount === 2) {
      return { score: 75, message: COMPAT_MESSAGES.good };
    } else if (matchCount === 1) {
      return { score: 68, message: COMPAT_MESSAGES.challenging };
    } else {
      // 0개 매칭 — 완전 반대
      return { score: 63, message: COMPAT_MESSAGES.challenging };
    }
  }

  /* ======================================================
   *  window.MBTI 노출
   * ====================================================== */
  window.MBTI = {
    QUESTIONS: QUESTIONS,
    TYPES: TYPES,
    calculate: calculate,
    getTypeInfo: getTypeInfo,
    getCompatibility: getCompatibility
  };

})();
