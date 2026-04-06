/**
 * 신비타로 - 78장 타로카드 데이터 (7개 언어)
 * ko, en, ja, es, pt, fr, de
 */
(function () {
  'use strict';

  /* ───────── 메이저 아르카나 22장 ───────── */
  var majorCards = [
    {
      id: 'major_0', number: 0, type: 'major', suit: null, element: 'air',
      name: { ko: '바보', en: 'The Fool', ja: '愚者', es: 'El Loco', pt: 'O Louco', fr: 'Le Mat', de: 'Der Narr' },
      keywords: {
        ko: ['새로운 시작', '순수', '모험', '자유'],
        en: ['new beginnings', 'innocence', 'adventure', 'freedom'],
        ja: ['新しい始まり', '純粋', '冒険', '自由'],
        es: ['nuevos comienzos', 'inocencia', 'aventura', 'libertad'],
        pt: ['novos começos', 'inocência', 'aventura', 'liberdade'],
        fr: ['nouveaux départs', 'innocence', 'aventure', 'liberté'],
        de: ['Neuanfang', 'Unschuld', 'Abenteuer', 'Freiheit']
      },
      upright: {
        ko: '새로운 시작의 에너지가 가득합니다. 두려움 없이 한 발짝 내딛어보세요.',
        en: 'A fresh start awaits. Take a leap of faith without fear.',
        ja: '新しい始まりのエネルギーに満ちています。恐れずに一歩踏み出してみましょう。',
        es: 'Un nuevo comienzo te espera. Da un salto de fe sin miedo.',
        pt: 'Um novo começo te aguarda. Dê um salto de fé sem medo.',
        fr: 'Un nouveau départ vous attend. Faites un acte de foi sans crainte.',
        de: 'Ein Neuanfang erwartet Sie. Wagen Sie einen Vertrauensvorschuss.'
      },
      reversed: {
        ko: '무모한 행동을 조심하세요. 준비가 필요한 시기입니다.',
        en: 'Beware of recklessness. This is a time for preparation.',
        ja: '無謀な行動に注意してください。準備が必要な時期です。',
        es: 'Cuidado con la imprudencia. Es tiempo de preparación.',
        pt: 'Cuidado com a imprudência. É hora de se preparar.',
        fr: 'Méfiez-vous de l\'imprudence. C\'est le moment de se préparer.',
        de: 'Vorsicht vor Leichtsinn. Es ist Zeit für Vorbereitung.'
      }
    },
    {
      id: 'major_1', number: 1, type: 'major', suit: null, element: 'air',
      name: { ko: '마법사', en: 'The Magician', ja: '魔術師', es: 'El Mago', pt: 'O Mago', fr: 'Le Bateleur', de: 'Der Magier' },
      keywords: {
        ko: ['의지력', '창조', '기술', '집중'],
        en: ['willpower', 'creation', 'skill', 'concentration'],
        ja: ['意志力', '創造', '技術', '集中'],
        es: ['voluntad', 'creación', 'habilidad', 'concentración'],
        pt: ['força de vontade', 'criação', 'habilidade', 'concentração'],
        fr: ['volonté', 'création', 'compétence', 'concentration'],
        de: ['Willenskraft', 'Schöpfung', 'Geschick', 'Konzentration']
      },
      upright: {
        ko: '당신에게는 원하는 것을 이룰 수 있는 모든 자원이 있습니다. 집중하고 행동하세요.',
        en: 'You have all the resources to achieve your goals. Focus and take action.',
        ja: 'あなたには目標を達成するためのすべてのリソースがあります。集中して行動しましょう。',
        es: 'Tienes todos los recursos para lograr tus metas. Concéntrate y actúa.',
        pt: 'Você tem todos os recursos para alcançar seus objetivos. Concentre-se e aja.',
        fr: 'Vous avez toutes les ressources pour atteindre vos objectifs. Concentrez-vous et agissez.',
        de: 'Sie haben alle Ressourcen, um Ihre Ziele zu erreichen. Konzentrieren Sie sich und handeln Sie.'
      },
      reversed: {
        ko: '재능을 낭비하고 있지는 않나요? 속임수나 교활함을 경계하세요.',
        en: 'Are you wasting your talents? Beware of trickery and manipulation.',
        ja: '才能を無駄にしていませんか？ごまかしや操作に注意してください。',
        es: '¿Estás desperdiciando tus talentos? Cuidado con los engaños y la manipulación.',
        pt: 'Está desperdiçando seus talentos? Cuidado com truques e manipulação.',
        fr: 'Gaspillez-vous vos talents ? Méfiez-vous de la tromperie et de la manipulation.',
        de: 'Verschwenden Sie Ihre Talente? Hüten Sie sich vor Tricks und Manipulation.'
      }
    },
    {
      id: 'major_2', number: 2, type: 'major', suit: null, element: 'water',
      name: { ko: '여사제', en: 'The High Priestess', ja: '女教皇', es: 'La Sacerdotisa', pt: 'A Sacerdotisa', fr: 'La Papesse', de: 'Die Hohepriesterin' },
      keywords: {
        ko: ['직관', '무의식', '신비', '내면의 지혜'],
        en: ['intuition', 'subconscious', 'mystery', 'inner wisdom'],
        ja: ['直感', '無意識', '神秘', '内なる知恵'],
        es: ['intuición', 'subconsciente', 'misterio', 'sabiduría interior'],
        pt: ['intuição', 'subconsciente', 'mistério', 'sabedoria interior'],
        fr: ['intuition', 'subconscient', 'mystère', 'sagesse intérieure'],
        de: ['Intuition', 'Unterbewusstsein', 'Mysterium', 'innere Weisheit']
      },
      upright: {
        ko: '내면의 목소리에 귀를 기울이세요. 직관이 당신을 올바른 길로 인도할 것입니다.',
        en: 'Listen to your inner voice. Your intuition will guide you to the right path.',
        ja: '内なる声に耳を傾けてください。直感が正しい道へ導いてくれるでしょう。',
        es: 'Escucha tu voz interior. Tu intuición te guiará por el camino correcto.',
        pt: 'Ouça sua voz interior. Sua intuição o guiará pelo caminho certo.',
        fr: 'Écoutez votre voix intérieure. Votre intuition vous guidera sur le bon chemin.',
        de: 'Hören Sie auf Ihre innere Stimme. Ihre Intuition wird Sie auf den richtigen Weg führen.'
      },
      reversed: {
        ko: '직관을 무시하고 있지는 않나요? 내면과의 연결을 다시 회복하세요.',
        en: 'Are you ignoring your intuition? Reconnect with your inner self.',
        ja: '直感を無視していませんか？内面とのつながりを取り戻しましょう。',
        es: '¿Estás ignorando tu intuición? Reconéctate con tu interior.',
        pt: 'Está ignorando sua intuição? Reconecte-se com seu eu interior.',
        fr: 'Ignorez-vous votre intuition ? Reconnectez-vous avec votre moi intérieur.',
        de: 'Ignorieren Sie Ihre Intuition? Verbinden Sie sich wieder mit Ihrem inneren Selbst.'
      }
    },
    {
      id: 'major_3', number: 3, type: 'major', suit: null, element: 'earth',
      name: { ko: '여황제', en: 'The Empress', ja: '女帝', es: 'La Emperatriz', pt: 'A Imperatriz', fr: 'L\'Impératrice', de: 'Die Herrscherin' },
      keywords: {
        ko: ['풍요', '모성', '자연', '아름다움'],
        en: ['abundance', 'motherhood', 'nature', 'beauty'],
        ja: ['豊かさ', '母性', '自然', '美しさ'],
        es: ['abundancia', 'maternidad', 'naturaleza', 'belleza'],
        pt: ['abundância', 'maternidade', 'natureza', 'beleza'],
        fr: ['abondance', 'maternité', 'nature', 'beauté'],
        de: ['Fülle', 'Mutterschaft', 'Natur', 'Schönheit']
      },
      upright: {
        ko: '풍요와 사랑이 당신에게 흘러들고 있습니다. 감각을 열고 자연의 은혜를 받으세요.',
        en: 'Abundance and love are flowing to you. Open your senses and receive nature\'s blessings.',
        ja: '豊かさと愛があなたに流れ込んでいます。感覚を開いて自然の恵みを受け取りましょう。',
        es: 'Abundancia y amor fluyen hacia ti. Abre tus sentidos y recibe las bendiciones de la naturaleza.',
        pt: 'Abundância e amor estão fluindo para você. Abra seus sentidos e receba as bênçãos da natureza.',
        fr: 'L\'abondance et l\'amour affluent vers vous. Ouvrez vos sens et recevez les bienfaits de la nature.',
        de: 'Fülle und Liebe fließen zu Ihnen. Öffnen Sie Ihre Sinne und empfangen Sie die Segnungen der Natur.'
      },
      reversed: {
        ko: '자신을 돌보는 것을 소홀히 하고 있습니다. 창조적 에너지가 막혀 있어요.',
        en: 'You are neglecting self-care. Your creative energy is blocked.',
        ja: '自分を大切にすることをおろそかにしています。創造的なエネルギーが滞っています。',
        es: 'Estás descuidando tu autocuidado. Tu energía creativa está bloqueada.',
        pt: 'Você está negligenciando o autocuidado. Sua energia criativa está bloqueada.',
        fr: 'Vous négligez votre bien-être. Votre énergie créative est bloquée.',
        de: 'Sie vernachlässigen die Selbstfürsorge. Ihre kreative Energie ist blockiert.'
      }
    },
    {
      id: 'major_4', number: 4, type: 'major', suit: null, element: 'fire',
      name: { ko: '황제', en: 'The Emperor', ja: '皇帝', es: 'El Emperador', pt: 'O Imperador', fr: 'L\'Empereur', de: 'Der Herrscher' },
      keywords: {
        ko: ['권위', '안정', '리더십', '구조'],
        en: ['authority', 'stability', 'leadership', 'structure'],
        ja: ['権威', '安定', 'リーダーシップ', '構造'],
        es: ['autoridad', 'estabilidad', 'liderazgo', 'estructura'],
        pt: ['autoridade', 'estabilidade', 'liderança', 'estrutura'],
        fr: ['autorité', 'stabilité', 'leadership', 'structure'],
        de: ['Autorität', 'Stabilität', 'Führung', 'Struktur']
      },
      upright: {
        ko: '체계와 질서를 세울 때입니다. 강한 리더십으로 상황을 장악하세요.',
        en: 'It\'s time to establish order and structure. Take charge with strong leadership.',
        ja: '秩序と構造を確立する時です。強いリーダーシップで状況を掌握しましょう。',
        es: 'Es hora de establecer orden y estructura. Toma el mando con un liderazgo fuerte.',
        pt: 'É hora de estabelecer ordem e estrutura. Assuma o comando com liderança forte.',
        fr: 'Il est temps d\'établir l\'ordre et la structure. Prenez les commandes avec un leadership fort.',
        de: 'Es ist Zeit, Ordnung und Struktur zu schaffen. Übernehmen Sie die Führung.'
      },
      reversed: {
        ko: '지나친 통제는 역효과를 낳습니다. 유연함을 잃지 마세요.',
        en: 'Excessive control backfires. Don\'t lose your flexibility.',
        ja: '過度な支配は逆効果を生みます。柔軟さを失わないでください。',
        es: 'El control excesivo es contraproducente. No pierdas tu flexibilidad.',
        pt: 'O controle excessivo é contraproducente. Não perca sua flexibilidade.',
        fr: 'Le contrôle excessif est contre-productif. Ne perdez pas votre flexibilité.',
        de: 'Übermäßige Kontrolle ist kontraproduktiv. Verlieren Sie nicht Ihre Flexibilität.'
      }
    },
    {
      id: 'major_5', number: 5, type: 'major', suit: null, element: 'earth',
      name: { ko: '교황', en: 'The Hierophant', ja: '教皇', es: 'El Hierofante', pt: 'O Hierofante', fr: 'Le Pape', de: 'Der Hierophant' },
      keywords: {
        ko: ['전통', '가르침', '신앙', '준수'],
        en: ['tradition', 'teaching', 'faith', 'conformity'],
        ja: ['伝統', '教え', '信仰', '順応'],
        es: ['tradición', 'enseñanza', 'fe', 'conformidad'],
        pt: ['tradição', 'ensinamento', 'fé', 'conformidade'],
        fr: ['tradition', 'enseignement', 'foi', 'conformité'],
        de: ['Tradition', 'Lehre', 'Glaube', 'Konformität']
      },
      upright: {
        ko: '지혜로운 조언자를 찾거나 전통적인 방법을 따라보세요. 배움의 시기입니다.',
        en: 'Seek a wise mentor or follow traditional methods. This is a time for learning.',
        ja: '賢い助言者を探すか、伝統的な方法に従ってみてください。学びの時期です。',
        es: 'Busca un mentor sabio o sigue métodos tradicionales. Es tiempo de aprender.',
        pt: 'Busque um mentor sábio ou siga métodos tradicionais. É tempo de aprender.',
        fr: 'Cherchez un mentor sage ou suivez les méthodes traditionnelles. C\'est le temps de l\'apprentissage.',
        de: 'Suchen Sie einen weisen Mentor oder folgen Sie traditionellen Methoden. Es ist Zeit zu lernen.'
      },
      reversed: {
        ko: '기존의 규칙에 의문을 가져보세요. 자신만의 길을 찾을 때입니다.',
        en: 'Question existing rules. It\'s time to find your own path.',
        ja: '既存のルールに疑問を持ってみてください。自分だけの道を見つける時です。',
        es: 'Cuestiona las reglas existentes. Es hora de encontrar tu propio camino.',
        pt: 'Questione as regras existentes. É hora de encontrar seu próprio caminho.',
        fr: 'Remettez en question les règles existantes. Il est temps de trouver votre propre chemin.',
        de: 'Hinterfragen Sie bestehende Regeln. Es ist Zeit, Ihren eigenen Weg zu finden.'
      }
    },
    {
      id: 'major_6', number: 6, type: 'major', suit: null, element: 'air',
      name: { ko: '연인', en: 'The Lovers', ja: '恋人', es: 'Los Enamorados', pt: 'Os Amantes', fr: 'L\'Amoureux', de: 'Die Liebenden' },
      keywords: {
        ko: ['사랑', '조화', '선택', '가치관'],
        en: ['love', 'harmony', 'choices', 'values'],
        ja: ['愛', '調和', '選択', '価値観'],
        es: ['amor', 'armonía', 'elecciones', 'valores'],
        pt: ['amor', 'harmonia', 'escolhas', 'valores'],
        fr: ['amour', 'harmonie', 'choix', 'valeurs'],
        de: ['Liebe', 'Harmonie', 'Entscheidungen', 'Werte']
      },
      upright: {
        ko: '중요한 선택의 기로에 서 있습니다. 마음이 이끄는 대로 따라가세요.',
        en: 'You stand at a crossroads of an important choice. Follow where your heart leads.',
        ja: '重要な選択の岐路に立っています。心が導くままに従いましょう。',
        es: 'Estás en una encrucijada importante. Sigue a donde te lleve tu corazón.',
        pt: 'Você está em uma encruzilhada importante. Siga para onde seu coração o levar.',
        fr: 'Vous êtes à la croisée des chemins. Suivez votre cœur.',
        de: 'Sie stehen an einem wichtigen Scheideweg. Folgen Sie Ihrem Herzen.'
      },
      reversed: {
        ko: '관계에서 불균형이 느껴집니다. 가치관의 충돌을 인식하세요.',
        en: 'There is imbalance in your relationships. Recognize the clash of values.',
        ja: '関係に不均衡が感じられます。価値観の衝突を認識しましょう。',
        es: 'Hay desequilibrio en tus relaciones. Reconoce el choque de valores.',
        pt: 'Há desequilíbrio em seus relacionamentos. Reconheça o conflito de valores.',
        fr: 'Il y a un déséquilibre dans vos relations. Reconnaissez le conflit de valeurs.',
        de: 'Es gibt ein Ungleichgewicht in Ihren Beziehungen. Erkennen Sie den Wertekonflikt.'
      }
    },
    {
      id: 'major_7', number: 7, type: 'major', suit: null, element: 'water',
      name: { ko: '전차', en: 'The Chariot', ja: '戦車', es: 'El Carro', pt: 'A Carruagem', fr: 'Le Chariot', de: 'Der Wagen' },
      keywords: {
        ko: ['승리', '의지', '결단력', '전진'],
        en: ['victory', 'willpower', 'determination', 'progress'],
        ja: ['勝利', '意志', '決断力', '前進'],
        es: ['victoria', 'voluntad', 'determinación', 'progreso'],
        pt: ['vitória', 'força de vontade', 'determinação', 'progresso'],
        fr: ['victoire', 'volonté', 'détermination', 'progrès'],
        de: ['Sieg', 'Willenskraft', 'Entschlossenheit', 'Fortschritt']
      },
      upright: {
        ko: '강한 의지로 앞으로 나아가세요. 승리가 눈앞에 있습니다.',
        en: 'Move forward with strong willpower. Victory is within reach.',
        ja: '強い意志で前進してください。勝利は目の前にあります。',
        es: 'Avanza con fuerte voluntad. La victoria está al alcance.',
        pt: 'Avance com forte determinação. A vitória está ao alcance.',
        fr: 'Avancez avec une volonté forte. La victoire est à portée de main.',
        de: 'Gehen Sie mit starkem Willen voran. Der Sieg ist in Reichweite.'
      },
      reversed: {
        ko: '방향을 잃고 표류하고 있습니다. 다시 목표를 정하고 집중하세요.',
        en: 'You are drifting without direction. Reset your goals and refocus.',
        ja: '方向を見失い漂っています。目標を再設定し、集中し直しましょう。',
        es: 'Estás a la deriva sin dirección. Redefine tus metas y recobra el enfoque.',
        pt: 'Você está à deriva sem direção. Redefina seus objetivos e recupere o foco.',
        fr: 'Vous dérivez sans direction. Redéfinissez vos objectifs et reconcentrez-vous.',
        de: 'Sie treiben ohne Richtung. Setzen Sie Ihre Ziele neu und fokussieren Sie sich.'
      }
    },
    {
      id: 'major_8', number: 8, type: 'major', suit: null, element: 'fire',
      name: { ko: '힘', en: 'Strength', ja: '力', es: 'La Fuerza', pt: 'A Força', fr: 'La Force', de: 'Die Kraft' },
      keywords: {
        ko: ['용기', '인내', '내면의 힘', '자신감'],
        en: ['courage', 'patience', 'inner strength', 'confidence'],
        ja: ['勇気', '忍耐', '内なる力', '自信'],
        es: ['coraje', 'paciencia', 'fuerza interior', 'confianza'],
        pt: ['coragem', 'paciência', 'força interior', 'confiança'],
        fr: ['courage', 'patience', 'force intérieure', 'confiance'],
        de: ['Mut', 'Geduld', 'innere Stärke', 'Selbstvertrauen']
      },
      upright: {
        ko: '부드러운 힘이 강한 힘을 이깁니다. 인내와 용기로 상황을 다스리세요.',
        en: 'Gentle strength overcomes brute force. Manage the situation with patience and courage.',
        ja: '柔らかな力が強い力に勝ります。忍耐と勇気で状況を制しましょう。',
        es: 'La fuerza suave vence a la fuerza bruta. Maneja la situación con paciencia y coraje.',
        pt: 'A força suave vence a força bruta. Administre a situação com paciência e coragem.',
        fr: 'La force douce surmonte la force brute. Gérez la situation avec patience et courage.',
        de: 'Sanfte Stärke überwindet rohe Gewalt. Meistern Sie die Situation mit Geduld und Mut.'
      },
      reversed: {
        ko: '자신감이 부족하거나 자기 의심에 빠져 있습니다. 내면의 힘을 되찾으세요.',
        en: 'You lack confidence or are consumed by self-doubt. Reclaim your inner strength.',
        ja: '自信が不足しているか、自己疑念に陥っています。内なる力を取り戻しましょう。',
        es: 'Te falta confianza o estás consumido por la duda. Recupera tu fuerza interior.',
        pt: 'Você falta confiança ou está consumido pela dúvida. Recupere sua força interior.',
        fr: 'Vous manquez de confiance ou êtes consumé par le doute. Retrouvez votre force intérieure.',
        de: 'Ihnen fehlt Selbstvertrauen oder Sie werden von Zweifeln aufgezehrt. Finden Sie Ihre innere Stärke wieder.'
      }
    },
    {
      id: 'major_9', number: 9, type: 'major', suit: null, element: 'earth',
      name: { ko: '은둔자', en: 'The Hermit', ja: '隠者', es: 'El Ermitaño', pt: 'O Eremita', fr: 'L\'Ermite', de: 'Der Eremit' },
      keywords: {
        ko: ['성찰', '고독', '탐구', '지혜'],
        en: ['reflection', 'solitude', 'seeking', 'wisdom'],
        ja: ['省察', '孤独', '探求', '知恵'],
        es: ['reflexión', 'soledad', 'búsqueda', 'sabiduría'],
        pt: ['reflexão', 'solidão', 'busca', 'sabedoria'],
        fr: ['réflexion', 'solitude', 'quête', 'sagesse'],
        de: ['Reflexion', 'Einsamkeit', 'Suche', 'Weisheit']
      },
      upright: {
        ko: '홀로 있는 시간이 필요합니다. 내면을 비추는 빛을 따라 답을 찾으세요.',
        en: 'You need time alone. Follow the light within to find your answers.',
        ja: '一人の時間が必要です。内面を照らす光に従って答えを見つけましょう。',
        es: 'Necesitas tiempo a solas. Sigue la luz interior para encontrar tus respuestas.',
        pt: 'Você precisa de tempo a sós. Siga a luz interior para encontrar suas respostas.',
        fr: 'Vous avez besoin de temps seul. Suivez la lumière intérieure pour trouver vos réponses.',
        de: 'Sie brauchen Zeit allein. Folgen Sie dem inneren Licht, um Ihre Antworten zu finden.'
      },
      reversed: {
        ko: '고립이 지나칩니다. 세상과 다시 연결될 때입니다.',
        en: 'Your isolation has gone too far. It\'s time to reconnect with the world.',
        ja: '孤立が度を越しています。世界と再びつながる時です。',
        es: 'Tu aislamiento ha ido demasiado lejos. Es hora de reconectarte con el mundo.',
        pt: 'Seu isolamento foi longe demais. É hora de se reconectar com o mundo.',
        fr: 'Votre isolement est allé trop loin. Il est temps de se reconnecter au monde.',
        de: 'Ihre Isolation ist zu weit gegangen. Es ist Zeit, sich wieder mit der Welt zu verbinden.'
      }
    },
    {
      id: 'major_10', number: 10, type: 'major', suit: null, element: 'fire',
      name: { ko: '운명의 수레바퀴', en: 'Wheel of Fortune', ja: '運命の輪', es: 'La Rueda de la Fortuna', pt: 'A Roda da Fortuna', fr: 'La Roue de Fortune', de: 'Das Rad des Schicksals' },
      keywords: {
        ko: ['운명', '전환점', '순환', '행운'],
        en: ['destiny', 'turning point', 'cycles', 'luck'],
        ja: ['運命', '転換点', '循環', '幸運'],
        es: ['destino', 'punto de inflexión', 'ciclos', 'suerte'],
        pt: ['destino', 'ponto de virada', 'ciclos', 'sorte'],
        fr: ['destin', 'tournant', 'cycles', 'chance'],
        de: ['Schicksal', 'Wendepunkt', 'Zyklen', 'Glück']
      },
      upright: {
        ko: '운명의 수레바퀴가 돌아갑니다. 좋은 변화가 찾아오고 있어요.',
        en: 'The wheel of fortune is turning. Positive change is coming your way.',
        ja: '運命の輪が回っています。良い変化が訪れようとしています。',
        es: 'La rueda de la fortuna está girando. Un cambio positivo se acerca.',
        pt: 'A roda da fortuna está girando. Uma mudança positiva está a caminho.',
        fr: 'La roue de la fortune tourne. Un changement positif arrive.',
        de: 'Das Rad des Schicksals dreht sich. Eine positive Veränderung steht bevor.'
      },
      reversed: {
        ko: '예상치 못한 역경이 올 수 있습니다. 변화에 저항하지 말고 흐름을 타세요.',
        en: 'Unexpected setbacks may come. Don\'t resist change — go with the flow.',
        ja: '予期せぬ逆境が来るかもしれません。変化に抵抗せず、流れに身を任せましょう。',
        es: 'Pueden venir contratiempos inesperados. No resistas el cambio, déjate llevar.',
        pt: 'Contratempos inesperados podem vir. Não resista à mudança, siga o fluxo.',
        fr: 'Des revers inattendus peuvent survenir. Ne résistez pas au changement, laissez-vous porter.',
        de: 'Unerwartete Rückschläge können kommen. Widerstehen Sie dem Wandel nicht — gehen Sie mit dem Strom.'
      }
    },
    {
      id: 'major_11', number: 11, type: 'major', suit: null, element: 'air',
      name: { ko: '정의', en: 'Justice', ja: '正義', es: 'La Justicia', pt: 'A Justiça', fr: 'La Justice', de: 'Die Gerechtigkeit' },
      keywords: {
        ko: ['공정', '진실', '균형', '책임'],
        en: ['fairness', 'truth', 'balance', 'accountability'],
        ja: ['公正', '真実', 'バランス', '責任'],
        es: ['justicia', 'verdad', 'equilibrio', 'responsabilidad'],
        pt: ['justiça', 'verdade', 'equilíbrio', 'responsabilidade'],
        fr: ['justice', 'vérité', 'équilibre', 'responsabilité'],
        de: ['Gerechtigkeit', 'Wahrheit', 'Gleichgewicht', 'Verantwortung']
      },
      upright: {
        ko: '공정한 결과가 주어질 것입니다. 진실에 기반한 판단을 내리세요.',
        en: 'A fair outcome awaits. Make decisions based on truth.',
        ja: '公正な結果が与えられるでしょう。真実に基づいた判断を下しましょう。',
        es: 'Un resultado justo te espera. Toma decisiones basadas en la verdad.',
        pt: 'Um resultado justo te aguarda. Tome decisões baseadas na verdade.',
        fr: 'Un résultat juste vous attend. Prenez des décisions basées sur la vérité.',
        de: 'Ein gerechtes Ergebnis erwartet Sie. Treffen Sie Entscheidungen auf der Grundlage der Wahrheit.'
      },
      reversed: {
        ko: '불공정함을 느끼고 있나요? 편견 없이 상황을 바라보세요.',
        en: 'Do you feel injustice? Look at the situation without bias.',
        ja: '不公平を感じていますか？偏見なく状況を見てください。',
        es: '¿Sientes injusticia? Mira la situación sin prejuicios.',
        pt: 'Sente injustiça? Olhe a situação sem preconceitos.',
        fr: 'Ressentez-vous de l\'injustice ? Regardez la situation sans préjugés.',
        de: 'Fühlen Sie Ungerechtigkeit? Betrachten Sie die Situation ohne Vorurteile.'
      }
    },
    {
      id: 'major_12', number: 12, type: 'major', suit: null, element: 'water',
      name: { ko: '매달린 사람', en: 'The Hanged Man', ja: '吊された男', es: 'El Colgado', pt: 'O Enforcado', fr: 'Le Pendu', de: 'Der Gehängte' },
      keywords: {
        ko: ['희생', '기다림', '관점 전환', '내려놓음'],
        en: ['sacrifice', 'waiting', 'new perspective', 'letting go'],
        ja: ['犠牲', '待機', '視点の転換', '手放し'],
        es: ['sacrificio', 'espera', 'nueva perspectiva', 'soltar'],
        pt: ['sacrifício', 'espera', 'nova perspectiva', 'desapego'],
        fr: ['sacrifice', 'attente', 'nouvelle perspective', 'lâcher prise'],
        de: ['Opfer', 'Warten', 'neue Perspektive', 'Loslassen']
      },
      upright: {
        ko: '잠시 멈추고 다른 각도에서 바라보세요. 기다림 속에 답이 있습니다.',
        en: 'Pause and look from a different angle. The answer lies in waiting.',
        ja: '少し立ち止まって別の角度から見てみましょう。待つことの中に答えがあります。',
        es: 'Detente y mira desde un ángulo diferente. La respuesta está en la espera.',
        pt: 'Pare e olhe de um ângulo diferente. A resposta está na espera.',
        fr: 'Faites une pause et regardez sous un angle différent. La réponse est dans l\'attente.',
        de: 'Halten Sie inne und betrachten Sie es aus einem anderen Blickwinkel. Die Antwort liegt im Warten.'
      },
      reversed: {
        ko: '불필요한 희생을 하고 있지는 않나요? 변화를 미루지 마세요.',
        en: 'Are you making unnecessary sacrifices? Don\'t delay change.',
        ja: '不必要な犠牲を払っていませんか？変化を先延ばしにしないでください。',
        es: '¿Estás haciendo sacrificios innecesarios? No retrases el cambio.',
        pt: 'Está fazendo sacrifícios desnecessários? Não adie a mudança.',
        fr: 'Faites-vous des sacrifices inutiles ? Ne retardez pas le changement.',
        de: 'Bringen Sie unnötige Opfer? Verzögern Sie den Wandel nicht.'
      }
    },
    {
      id: 'major_13', number: 13, type: 'major', suit: null, element: 'water',
      name: { ko: '죽음', en: 'Death', ja: '死神', es: 'La Muerte', pt: 'A Morte', fr: 'La Mort', de: 'Der Tod' },
      keywords: {
        ko: ['변환', '끝과 시작', '해방', '변화'],
        en: ['transformation', 'endings', 'release', 'change'],
        ja: ['変容', '終わりと始まり', '解放', '変化'],
        es: ['transformación', 'finales', 'liberación', 'cambio'],
        pt: ['transformação', 'finais', 'liberação', 'mudança'],
        fr: ['transformation', 'fins', 'libération', 'changement'],
        de: ['Transformation', 'Enden', 'Befreiung', 'Veränderung']
      },
      upright: {
        ko: '한 장이 끝나고 새 장이 시작됩니다. 과거를 놓아주고 변화를 받아들이세요.',
        en: 'One chapter ends and a new one begins. Let go of the past and embrace change.',
        ja: '一つの章が終わり、新しい章が始まります。過去を手放し、変化を受け入れましょう。',
        es: 'Un capítulo termina y uno nuevo comienza. Suelta el pasado y abraza el cambio.',
        pt: 'Um capítulo termina e um novo começa. Solte o passado e abrace a mudança.',
        fr: 'Un chapitre se termine et un nouveau commence. Lâchez le passé et embrassez le changement.',
        de: 'Ein Kapitel endet und ein neues beginnt. Lassen Sie die Vergangenheit los und nehmen Sie den Wandel an.'
      },
      reversed: {
        ko: '변화를 두려워하며 과거에 집착하고 있습니다. 놓아줄 용기를 가지세요.',
        en: 'You cling to the past, fearing change. Find the courage to let go.',
        ja: '変化を恐れて過去にしがみついています。手放す勇気を持ちましょう。',
        es: 'Te aferras al pasado, temiendo el cambio. Encuentra el coraje para soltar.',
        pt: 'Você se agarra ao passado, temendo a mudança. Encontre coragem para deixar ir.',
        fr: 'Vous vous accrochez au passé, craignant le changement. Trouvez le courage de lâcher prise.',
        de: 'Sie klammern sich an die Vergangenheit und fürchten den Wandel. Finden Sie den Mut loszulassen.'
      }
    },
    {
      id: 'major_14', number: 14, type: 'major', suit: null, element: 'fire',
      name: { ko: '절제', en: 'Temperance', ja: '節制', es: 'La Templanza', pt: 'A Temperança', fr: 'Tempérance', de: 'Die Mäßigkeit' },
      keywords: {
        ko: ['균형', '절제', '조화', '인내'],
        en: ['balance', 'moderation', 'harmony', 'patience'],
        ja: ['バランス', '節制', '調和', '忍耐'],
        es: ['equilibrio', 'moderación', 'armonía', 'paciencia'],
        pt: ['equilíbrio', 'moderação', 'harmonia', 'paciência'],
        fr: ['équilibre', 'modération', 'harmonie', 'patience'],
        de: ['Gleichgewicht', 'Mäßigung', 'Harmonie', 'Geduld']
      },
      upright: {
        ko: '균형과 조화를 찾을 때입니다. 극단을 피하고 중용의 길을 걸으세요.',
        en: 'It\'s time to find balance and harmony. Avoid extremes and walk the middle path.',
        ja: 'バランスと調和を見つける時です。極端を避け、中庸の道を歩みましょう。',
        es: 'Es hora de encontrar equilibrio y armonía. Evita los extremos y camina por el sendero medio.',
        pt: 'É hora de encontrar equilíbrio e harmonia. Evite extremos e caminhe pelo caminho do meio.',
        fr: 'Il est temps de trouver l\'équilibre et l\'harmonie. Évitez les extrêmes et suivez la voie du milieu.',
        de: 'Es ist Zeit, Gleichgewicht und Harmonie zu finden. Vermeiden Sie Extreme und gehen Sie den Mittelweg.'
      },
      reversed: {
        ko: '균형이 깨지고 있습니다. 과도함이나 부족함을 점검하세요.',
        en: 'Balance is slipping away. Check for excess or deficiency.',
        ja: 'バランスが崩れています。過剰や不足を点検してください。',
        es: 'El equilibrio se está perdiendo. Revisa si hay exceso o deficiencia.',
        pt: 'O equilíbrio está se perdendo. Verifique se há excesso ou deficiência.',
        fr: 'L\'équilibre se perd. Vérifiez les excès ou les manques.',
        de: 'Das Gleichgewicht geht verloren. Überprüfen Sie Überschuss oder Mangel.'
      }
    },
    {
      id: 'major_15', number: 15, type: 'major', suit: null, element: 'earth',
      name: { ko: '악마', en: 'The Devil', ja: '悪魔', es: 'El Diablo', pt: 'O Diabo', fr: 'Le Diable', de: 'Der Teufel' },
      keywords: {
        ko: ['유혹', '속박', '집착', '물질주의'],
        en: ['temptation', 'bondage', 'obsession', 'materialism'],
        ja: ['誘惑', '束縛', '執着', '物質主義'],
        es: ['tentación', 'esclavitud', 'obsesión', 'materialismo'],
        pt: ['tentação', 'escravidão', 'obsessão', 'materialismo'],
        fr: ['tentation', 'servitude', 'obsession', 'matérialisme'],
        de: ['Versuchung', 'Knechtschaft', 'Besessenheit', 'Materialismus']
      },
      upright: {
        ko: '유혹이나 집착에 사로잡혀 있지 않나요? 당신을 묶고 있는 사슬을 인식하세요.',
        en: 'Are you caught in temptation or obsession? Recognize the chains that bind you.',
        ja: '誘惑や執着に囚われていませんか？あなたを縛っている鎖を認識しましょう。',
        es: '¿Estás atrapado en la tentación o la obsesión? Reconoce las cadenas que te atan.',
        pt: 'Está preso na tentação ou obsessão? Reconheça as correntes que o prendem.',
        fr: 'Êtes-vous pris dans la tentation ou l\'obsession ? Reconnaissez les chaînes qui vous lient.',
        de: 'Sind Sie in Versuchung oder Besessenheit gefangen? Erkennen Sie die Ketten, die Sie binden.'
      },
      reversed: {
        ko: '속박에서 벗어나고 있습니다. 자유를 향한 첫 발걸음을 축하하세요.',
        en: 'You are breaking free from bondage. Celebrate the first step toward freedom.',
        ja: '束縛から解放されつつあります。自由への第一歩を祝いましょう。',
        es: 'Te estás liberando de las cadenas. Celebra el primer paso hacia la libertad.',
        pt: 'Você está se libertando das correntes. Celebre o primeiro passo rumo à liberdade.',
        fr: 'Vous vous libérez de vos chaînes. Célébrez le premier pas vers la liberté.',
        de: 'Sie befreien sich aus der Knechtschaft. Feiern Sie den ersten Schritt in die Freiheit.'
      }
    },
    {
      id: 'major_16', number: 16, type: 'major', suit: null, element: 'fire',
      name: { ko: '탑', en: 'The Tower', ja: '塔', es: 'La Torre', pt: 'A Torre', fr: 'La Maison Dieu', de: 'Der Turm' },
      keywords: {
        ko: ['붕괴', '깨달음', '해방', '혼란'],
        en: ['upheaval', 'revelation', 'liberation', 'chaos'],
        ja: ['崩壊', '啓示', '解放', '混乱'],
        es: ['conmoción', 'revelación', 'liberación', 'caos'],
        pt: ['convulsão', 'revelação', 'libertação', 'caos'],
        fr: ['bouleversement', 'révélation', 'libération', 'chaos'],
        de: ['Umbruch', 'Offenbarung', 'Befreiung', 'Chaos']
      },
      upright: {
        ko: '갑작스러운 변화가 찾아옵니다. 무너진 것 위에 더 강한 것을 세울 수 있습니다.',
        en: 'Sudden change arrives. You can build something stronger on the ruins.',
        ja: '突然の変化が訪れます。崩れたものの上にもっと強いものを築くことができます。',
        es: 'Un cambio repentino llega. Puedes construir algo más fuerte sobre las ruinas.',
        pt: 'Uma mudança repentina chega. Você pode construir algo mais forte sobre as ruínas.',
        fr: 'Un changement soudain arrive. Vous pouvez construire quelque chose de plus fort sur les ruines.',
        de: 'Plötzliche Veränderung kommt. Sie können auf den Ruinen etwas Stärkeres aufbauen.'
      },
      reversed: {
        ko: '붕괴를 막으려 하고 있지만, 때로는 놓아주는 것이 답입니다.',
        en: 'You are trying to prevent collapse, but sometimes letting go is the answer.',
        ja: '崩壊を防ごうとしていますが、時には手放すことが答えです。',
        es: 'Intentas evitar el colapso, pero a veces soltar es la respuesta.',
        pt: 'Você tenta evitar o colapso, mas às vezes soltar é a resposta.',
        fr: 'Vous essayez d\'empêcher l\'effondrement, mais parfois lâcher prise est la réponse.',
        de: 'Sie versuchen, den Zusammenbruch zu verhindern, aber manchmal ist Loslassen die Antwort.'
      }
    },
    {
      id: 'major_17', number: 17, type: 'major', suit: null, element: 'air',
      name: { ko: '별', en: 'The Star', ja: '星', es: 'La Estrella', pt: 'A Estrela', fr: 'L\'Étoile', de: 'Der Stern' },
      keywords: {
        ko: ['희망', '영감', '평온', '치유'],
        en: ['hope', 'inspiration', 'serenity', 'healing'],
        ja: ['希望', 'インスピレーション', '平穏', '癒し'],
        es: ['esperanza', 'inspiración', 'serenidad', 'sanación'],
        pt: ['esperança', 'inspiração', 'serenidade', 'cura'],
        fr: ['espoir', 'inspiration', 'sérénité', 'guérison'],
        de: ['Hoffnung', 'Inspiration', 'Gelassenheit', 'Heilung']
      },
      upright: {
        ko: '희망의 빛이 비추고 있습니다. 마음을 열고 우주의 축복을 받으세요.',
        en: 'A light of hope is shining. Open your heart and receive the universe\'s blessings.',
        ja: '希望の光が差しています。心を開いて宇宙の祝福を受け取りましょう。',
        es: 'Una luz de esperanza brilla. Abre tu corazón y recibe las bendiciones del universo.',
        pt: 'Uma luz de esperança brilha. Abra seu coração e receba as bênçãos do universo.',
        fr: 'Une lumière d\'espoir brille. Ouvrez votre cœur et recevez les bénédictions de l\'univers.',
        de: 'Ein Licht der Hoffnung scheint. Öffnen Sie Ihr Herz und empfangen Sie den Segen des Universums.'
      },
      reversed: {
        ko: '희망을 잃고 있나요? 포기하지 마세요, 별은 여전히 빛나고 있습니다.',
        en: 'Are you losing hope? Don\'t give up — the star still shines.',
        ja: '希望を失っていますか？諦めないでください、星はまだ輝いています。',
        es: '¿Estás perdiendo la esperanza? No te rindas, la estrella aún brilla.',
        pt: 'Está perdendo a esperança? Não desista, a estrela ainda brilha.',
        fr: 'Perdez-vous espoir ? N\'abandonnez pas, l\'étoile brille encore.',
        de: 'Verlieren Sie die Hoffnung? Geben Sie nicht auf — der Stern leuchtet noch.'
      }
    },
    {
      id: 'major_18', number: 18, type: 'major', suit: null, element: 'water',
      name: { ko: '달', en: 'The Moon', ja: '月', es: 'La Luna', pt: 'A Lua', fr: 'La Lune', de: 'Der Mond' },
      keywords: {
        ko: ['환상', '불안', '직관', '무의식'],
        en: ['illusion', 'anxiety', 'intuition', 'subconscious'],
        ja: ['幻想', '不安', '直感', '無意識'],
        es: ['ilusión', 'ansiedad', 'intuición', 'subconsciente'],
        pt: ['ilusão', 'ansiedade', 'intuição', 'subconsciente'],
        fr: ['illusion', 'anxiété', 'intuition', 'subconscient'],
        de: ['Illusion', 'Angst', 'Intuition', 'Unterbewusstsein']
      },
      upright: {
        ko: '상황이 불분명합니다. 보이는 것이 전부가 아닐 수 있어요. 직관을 믿으세요.',
        en: 'Things are unclear. What you see may not be the whole truth. Trust your intuition.',
        ja: '状況が不明確です。見えるものがすべてではないかもしれません。直感を信じてください。',
        es: 'Las cosas no están claras. Lo que ves puede no ser toda la verdad. Confía en tu intuición.',
        pt: 'As coisas não estão claras. O que você vê pode não ser toda a verdade. Confie na sua intuição.',
        fr: 'Les choses ne sont pas claires. Ce que vous voyez n\'est peut-être pas toute la vérité. Fiez-vous à votre intuition.',
        de: 'Die Dinge sind unklar. Was Sie sehen, ist vielleicht nicht die ganze Wahrheit. Vertrauen Sie Ihrer Intuition.'
      },
      reversed: {
        ko: '두려움이 걷히고 진실이 드러나고 있습니다. 혼란에서 벗어나고 있어요.',
        en: 'Fear is lifting and truth is being revealed. You are emerging from confusion.',
        ja: '恐れが晴れ、真実が明らかになっています。混乱から抜け出しつつあります。',
        es: 'El miedo se disipa y la verdad se revela. Estás saliendo de la confusión.',
        pt: 'O medo se dissipa e a verdade se revela. Você está saindo da confusão.',
        fr: 'La peur se dissipe et la vérité se révèle. Vous sortez de la confusion.',
        de: 'Die Angst lässt nach und die Wahrheit wird enthüllt. Sie kommen aus der Verwirrung heraus.'
      }
    },
    {
      id: 'major_19', number: 19, type: 'major', suit: null, element: 'fire',
      name: { ko: '태양', en: 'The Sun', ja: '太陽', es: 'El Sol', pt: 'O Sol', fr: 'Le Soleil', de: 'Die Sonne' },
      keywords: {
        ko: ['기쁨', '성공', '활력', '긍정'],
        en: ['joy', 'success', 'vitality', 'positivity'],
        ja: ['喜び', '成功', '活力', 'ポジティブ'],
        es: ['alegría', 'éxito', 'vitalidad', 'positividad'],
        pt: ['alegria', 'sucesso', 'vitalidade', 'positividade'],
        fr: ['joie', 'succès', 'vitalité', 'positivité'],
        de: ['Freude', 'Erfolg', 'Vitalität', 'Positivität']
      },
      upright: {
        ko: '밝은 에너지가 가득합니다! 성공과 기쁨이 당신을 감싸고 있어요.',
        en: 'Bright energy fills you! Success and joy surround you.',
        ja: '明るいエネルギーに満ちています！成功と喜びがあなたを包んでいます。',
        es: '¡La energía brillante te llena! El éxito y la alegría te rodean.',
        pt: 'Energia brilhante te enche! Sucesso e alegria te cercam.',
        fr: 'Une énergie lumineuse vous remplit ! Le succès et la joie vous entourent.',
        de: 'Helle Energie erfüllt Sie! Erfolg und Freude umgeben Sie.'
      },
      reversed: {
        ko: '긍정의 빛이 잠시 가려져 있습니다. 곧 다시 밝아질 거예요.',
        en: 'The positive light is temporarily dimmed. It will brighten again soon.',
        ja: 'ポジティブな光が一時的に曇っています。すぐにまた明るくなるでしょう。',
        es: 'La luz positiva está temporalmente atenuada. Pronto volverá a brillar.',
        pt: 'A luz positiva está temporariamente diminuída. Logo voltará a brilhar.',
        fr: 'La lumière positive est temporairement voilée. Elle reviendra bientôt.',
        de: 'Das positive Licht ist vorübergehend gedämpft. Es wird bald wieder heller.'
      }
    },
    {
      id: 'major_20', number: 20, type: 'major', suit: null, element: 'fire',
      name: { ko: '심판', en: 'Judgement', ja: '審判', es: 'El Juicio', pt: 'O Julgamento', fr: 'Le Jugement', de: 'Das Gericht' },
      keywords: {
        ko: ['부활', '심판', '각성', '소명'],
        en: ['rebirth', 'judgement', 'awakening', 'calling'],
        ja: ['復活', '審判', '覚醒', '召命'],
        es: ['renacimiento', 'juicio', 'despertar', 'llamada'],
        pt: ['renascimento', 'julgamento', 'despertar', 'chamado'],
        fr: ['renaissance', 'jugement', 'éveil', 'appel'],
        de: ['Wiedergeburt', 'Urteil', 'Erwachen', 'Berufung']
      },
      upright: {
        ko: '과거를 돌아보고 자신을 되돌아볼 시간입니다. 새로운 각성이 일어나고 있어요.',
        en: 'It\'s time to reflect on the past and review yourself. A new awakening is happening.',
        ja: '過去を振り返り、自分自身を見つめ直す時間です。新しい覚醒が起こっています。',
        es: 'Es hora de reflexionar sobre el pasado. Un nuevo despertar está ocurriendo.',
        pt: 'É hora de refletir sobre o passado. Um novo despertar está acontecendo.',
        fr: 'Il est temps de réfléchir au passé. Un nouvel éveil se produit.',
        de: 'Es ist Zeit, über die Vergangenheit nachzudenken. Ein neues Erwachen geschieht.'
      },
      reversed: {
        ko: '자기 성찰을 피하고 있나요? 과거의 교훈에서 배우세요.',
        en: 'Are you avoiding self-reflection? Learn from the lessons of the past.',
        ja: '自己省察を避けていますか？過去の教訓から学びましょう。',
        es: '¿Estás evitando la autorreflexión? Aprende de las lecciones del pasado.',
        pt: 'Está evitando a autorreflexão? Aprenda com as lições do passado.',
        fr: 'Évitez-vous l\'introspection ? Apprenez des leçons du passé.',
        de: 'Vermeiden Sie Selbstreflexion? Lernen Sie aus den Lektionen der Vergangenheit.'
      }
    },
    {
      id: 'major_21', number: 21, type: 'major', suit: null, element: 'earth',
      name: { ko: '세계', en: 'The World', ja: '世界', es: 'El Mundo', pt: 'O Mundo', fr: 'Le Monde', de: 'Die Welt' },
      keywords: {
        ko: ['완성', '성취', '통합', '여행'],
        en: ['completion', 'achievement', 'integration', 'travel'],
        ja: ['完成', '達成', '統合', '旅'],
        es: ['completitud', 'logro', 'integración', 'viaje'],
        pt: ['completude', 'conquista', 'integração', 'viagem'],
        fr: ['achèvement', 'accomplissement', 'intégration', 'voyage'],
        de: ['Vollendung', 'Leistung', 'Integration', 'Reise']
      },
      upright: {
        ko: '하나의 큰 순환이 완성되었습니다. 축하하세요! 새로운 세계가 열립니다.',
        en: 'A great cycle is complete. Celebrate! A new world opens before you.',
        ja: '大きな循環が完成しました。お祝いしましょう！新しい世界が開かれます。',
        es: 'Un gran ciclo se ha completado. ¡Celebra! Un nuevo mundo se abre ante ti.',
        pt: 'Um grande ciclo se completou. Celebre! Um novo mundo se abre diante de você.',
        fr: 'Un grand cycle est accompli. Célébrez ! Un nouveau monde s\'ouvre devant vous.',
        de: 'Ein großer Zyklus ist vollendet. Feiern Sie! Eine neue Welt öffnet sich vor Ihnen.'
      },
      reversed: {
        ko: '아직 마무리되지 않은 일이 있습니다. 마지막 단계를 완수하세요.',
        en: 'There is still unfinished business. Complete the final steps.',
        ja: 'まだ終わっていないことがあります。最後のステップを完了しましょう。',
        es: 'Todavía hay asuntos pendientes. Completa los pasos finales.',
        pt: 'Ainda há assuntos pendentes. Complete os passos finais.',
        fr: 'Il reste des affaires inachevées. Complétez les dernières étapes.',
        de: 'Es gibt noch unerledigte Dinge. Schließen Sie die letzten Schritte ab.'
      }
    }
  ];

  /* ───────── 마이너 아르카나 데이터 정의 ───────── */

  var suitData = {
    wands: {
      element: 'fire',
      ko: '완드', en: 'Wands', ja: 'ワンド', es: 'Bastos', pt: 'Paus', fr: 'Bâtons', de: 'Stäbe'
    },
    cups: {
      element: 'water',
      ko: '컵', en: 'Cups', ja: 'カップ', es: 'Copas', pt: 'Taças', fr: 'Coupes', de: 'Kelche'
    },
    swords: {
      element: 'air',
      ko: '소드', en: 'Swords', ja: 'ソード', es: 'Espadas', pt: 'Espadas', fr: 'Épées', de: 'Schwerter'
    },
    pentacles: {
      element: 'earth',
      ko: '펜타클', en: 'Pentacles', ja: 'ペンタクル', es: 'Oros', pt: 'Ouros', fr: 'Deniers', de: 'Münzen'
    }
  };

  var numberNames = {
    1:  { ko: '에이스', en: 'Ace',   ja: 'エース',   es: 'As',      pt: 'Ás',      fr: 'As',      de: 'Ass' },
    2:  { ko: '2',      en: 'Two',   ja: '2',        es: 'Dos',     pt: 'Dois',    fr: 'Deux',    de: 'Zwei' },
    3:  { ko: '3',      en: 'Three', ja: '3',        es: 'Tres',    pt: 'Três',    fr: 'Trois',   de: 'Drei' },
    4:  { ko: '4',      en: 'Four',  ja: '4',        es: 'Cuatro',  pt: 'Quatro',  fr: 'Quatre',  de: 'Vier' },
    5:  { ko: '5',      en: 'Five',  ja: '5',        es: 'Cinco',   pt: 'Cinco',   fr: 'Cinq',    de: 'Fünf' },
    6:  { ko: '6',      en: 'Six',   ja: '6',        es: 'Seis',    pt: 'Seis',    fr: 'Six',     de: 'Sechs' },
    7:  { ko: '7',      en: 'Seven', ja: '7',        es: 'Siete',   pt: 'Sete',    fr: 'Sept',    de: 'Sieben' },
    8:  { ko: '8',      en: 'Eight', ja: '8',        es: 'Ocho',    pt: 'Oito',    fr: 'Huit',    de: 'Acht' },
    9:  { ko: '9',      en: 'Nine',  ja: '9',        es: 'Nueve',   pt: 'Nove',    fr: 'Neuf',    de: 'Neun' },
    10: { ko: '10',     en: 'Ten',   ja: '10',       es: 'Diez',    pt: 'Dez',     fr: 'Dix',     de: 'Zehn' },
    11: { ko: '시종',   en: 'Page',  ja: 'ペイジ',   es: 'Sota',    pt: 'Pajem',   fr: 'Valet',   de: 'Bube' },
    12: { ko: '기사',   en: 'Knight',ja: 'ナイト',   es: 'Caballero',pt:'Cavaleiro',fr: 'Cavalier',de: 'Ritter' },
    13: { ko: '여왕',   en: 'Queen', ja: 'クイーン', es: 'Reina',   pt: 'Rainha',  fr: 'Reine',   de: 'Königin' },
    14: { ko: '왕',     en: 'King',  ja: 'キング',   es: 'Rey',     pt: 'Rei',     fr: 'Roi',     de: 'König' }
  };

  /* 카드 이름 생성 함수 */
  function buildName(suit, num) {
    var s = suitData[suit];
    var n = numberNames[num];
    var isCourtOrAce = (num === 1 || num >= 11);
    return {
      ko: s.ko + ' ' + n.ko,
      en: (isCourtOrAce ? n.en : n.en) + ' of ' + s.en,
      ja: s.ja + 'の' + n.ja,
      es: n.es + ' de ' + s.es,
      pt: n.pt + ' de ' + s.pt,
      fr: n.fr + ' de ' + s.fr,
      de: n.de + ' der ' + s.de
    };
  }

  /* ───────── 마이너 아르카나 카드별 고유 해석 ───────── */

  var minorData = {
    /* ===== WANDS (불 - 열정, 행동, 창의력, 에너지) ===== */
    wands: [
      { // Ace
        keywords: {
          ko: ['새로운 열정', '창의력', '영감', '기회'],
          en: ['new passion', 'creativity', 'inspiration', 'opportunity'],
          ja: ['新しい情熱', '創造力', 'インスピレーション', '機会'],
          es: ['nueva pasión', 'creatividad', 'inspiración', 'oportunidad'],
          pt: ['nova paixão', 'criatividade', 'inspiração', 'oportunidade'],
          fr: ['nouvelle passion', 'créativité', 'inspiration', 'opportunité'],
          de: ['neue Leidenschaft', 'Kreativität', 'Inspiration', 'Gelegenheit']
        },
        upright: {
          ko: '새로운 열정과 영감이 피어오르고 있습니다. 창의적 에너지를 마음껏 발휘하세요.',
          en: 'New passion and inspiration are blooming. Unleash your creative energy fully.',
          ja: '新しい情熱とインスピレーションが芽生えています。創造的なエネルギーを存分に発揮しましょう。',
          es: 'Nueva pasión e inspiración están floreciendo. Libera tu energía creativa.',
          pt: 'Nova paixão e inspiração estão florescendo. Libere sua energia criativa.',
          fr: 'Une nouvelle passion et inspiration fleurissent. Libérez votre énergie créative.',
          de: 'Neue Leidenschaft und Inspiration erblühen. Entfesseln Sie Ihre kreative Energie.'
        },
        reversed: {
          ko: '시작할 용기가 부족하거나 에너지가 분산되고 있습니다. 초점을 맞추세요.',
          en: 'You lack the courage to start or your energy is scattered. Find your focus.',
          ja: '始める勇気が足りないか、エネルギーが分散しています。焦点を合わせましょう。',
          es: 'Te falta coraje para empezar o tu energía está dispersa. Encuentra tu enfoque.',
          pt: 'Falta coragem para começar ou sua energia está dispersa. Encontre seu foco.',
          fr: 'Vous manquez de courage pour commencer ou votre énergie est dispersée. Trouvez votre focus.',
          de: 'Ihnen fehlt der Mut zu beginnen oder Ihre Energie ist zerstreut. Finden Sie Ihren Fokus.'
        }
      },
      { // 2
        keywords: {
          ko: ['계획', '결정', '미래 비전', '진행'],
          en: ['planning', 'decisions', 'future vision', 'progress'],
          ja: ['計画', '決断', '将来のビジョン', '進行'],
          es: ['planificación', 'decisiones', 'visión futura', 'progreso'],
          pt: ['planejamento', 'decisões', 'visão futura', 'progresso'],
          fr: ['planification', 'décisions', 'vision future', 'progrès'],
          de: ['Planung', 'Entscheidungen', 'Zukunftsvision', 'Fortschritt']
        },
        upright: {
          ko: '큰 그림을 그리고 미래를 계획할 때입니다. 가능성은 무한합니다.',
          en: 'It\'s time to see the big picture and plan your future. The possibilities are endless.',
          ja: '大きな絵を描き、未来を計画する時です。可能性は無限です。',
          es: 'Es momento de ver el panorama general y planificar tu futuro. Las posibilidades son infinitas.',
          pt: 'É hora de ver o quadro geral e planejar seu futuro. As possibilidades são infinitas.',
          fr: 'Il est temps de voir la vue d\'ensemble et de planifier votre avenir. Les possibilités sont infinies.',
          de: 'Es ist Zeit, das große Bild zu sehen und Ihre Zukunft zu planen. Die Möglichkeiten sind endlos.'
        },
        reversed: {
          ko: '계획 없이 행동하거나 두려움에 멈춰 있습니다. 명확한 방향을 설정하세요.',
          en: 'You act without planning or are frozen by fear. Set a clear direction.',
          ja: '計画なしに行動しているか、恐れで立ち止まっています。明確な方向を設定しましょう。',
          es: 'Actúas sin planificar o estás paralizado por el miedo. Establece una dirección clara.',
          pt: 'Você age sem planejar ou está paralisado pelo medo. Defina uma direção clara.',
          fr: 'Vous agissez sans planifier ou êtes paralysé par la peur. Définissez une direction claire.',
          de: 'Sie handeln ohne Plan oder sind vor Angst erstarrt. Legen Sie eine klare Richtung fest.'
        }
      },
      { // 3
        keywords: {
          ko: ['확장', '성장', '탐험', '선견지명'],
          en: ['expansion', 'growth', 'exploration', 'foresight'],
          ja: ['拡大', '成長', '探検', '先見の明'],
          es: ['expansión', 'crecimiento', 'exploración', 'previsión'],
          pt: ['expansão', 'crescimento', 'exploração', 'previsão'],
          fr: ['expansion', 'croissance', 'exploration', 'prévoyance'],
          de: ['Expansion', 'Wachstum', 'Erforschung', 'Weitblick']
        },
        upright: {
          ko: '노력이 결실을 맺고 있습니다. 더 넓은 세상으로 뻗어 나가세요.',
          en: 'Your efforts are bearing fruit. Expand into a wider world.',
          ja: '努力が実を結んでいます。より広い世界へ羽ばたきましょう。',
          es: 'Tus esfuerzos están dando frutos. Expándete hacia un mundo más amplio.',
          pt: 'Seus esforços estão dando frutos. Expanda-se para um mundo mais amplo.',
          fr: 'Vos efforts portent leurs fruits. Étendez-vous vers un monde plus large.',
          de: 'Ihre Bemühungen tragen Früchte. Expandieren Sie in eine größere Welt.'
        },
        reversed: {
          ko: '성장이 지연되고 있습니다. 기대에 미치지 못하는 결과에 좌절하지 마세요.',
          en: 'Growth is delayed. Don\'t be discouraged by results that fall short of expectations.',
          ja: '成長が遅れています。期待に届かない結果に落胆しないでください。',
          es: 'El crecimiento se retrasa. No te desanimes por resultados que no cumplen expectativas.',
          pt: 'O crescimento está atrasado. Não desanime com resultados abaixo das expectativas.',
          fr: 'La croissance est retardée. Ne soyez pas découragé par des résultats en deçà des attentes.',
          de: 'Das Wachstum verzögert sich. Lassen Sie sich nicht von enttäuschenden Ergebnissen entmutigen.'
        }
      },
      { // 4
        keywords: {
          ko: ['축하', '안정', '기반', '조화'],
          en: ['celebration', 'stability', 'foundation', 'harmony'],
          ja: ['祝い', '安定', '基盤', '調和'],
          es: ['celebración', 'estabilidad', 'fundación', 'armonía'],
          pt: ['celebração', 'estabilidade', 'fundação', 'harmonia'],
          fr: ['célébration', 'stabilité', 'fondation', 'harmonie'],
          de: ['Feier', 'Stabilität', 'Grundlage', 'Harmonie']
        },
        upright: {
          ko: '안정된 기반 위에서 성과를 축하할 때입니다. 함께하는 기쁨을 누리세요.',
          en: 'Celebrate achievements on a stable foundation. Enjoy the joy of togetherness.',
          ja: '安定した基盤の上で成果を祝う時です。共にいる喜びを楽しみましょう。',
          es: 'Celebra tus logros sobre una base estable. Disfruta la alegría de estar juntos.',
          pt: 'Celebre conquistas sobre uma base estável. Aproveite a alegria de estar junto.',
          fr: 'Célébrez vos réalisations sur une base stable. Profitez de la joie d\'être ensemble.',
          de: 'Feiern Sie Erfolge auf einem stabilen Fundament. Genießen Sie die Freude des Zusammenseins.'
        },
        reversed: {
          ko: '불안정함을 느끼고 있습니다. 진정한 안식처를 찾아야 할 때입니다.',
          en: 'You feel instability. It\'s time to find your true sanctuary.',
          ja: '不安定さを感じています。本当の安らぎの場を見つける時です。',
          es: 'Sientes inestabilidad. Es hora de encontrar tu verdadero refugio.',
          pt: 'Você sente instabilidade. É hora de encontrar seu verdadeiro refúgio.',
          fr: 'Vous ressentez de l\'instabilité. Il est temps de trouver votre vrai refuge.',
          de: 'Sie fühlen Instabilität. Es ist Zeit, Ihren wahren Zufluchtsort zu finden.'
        }
      },
      { // 5
        keywords: {
          ko: ['갈등', '경쟁', '긴장', '투쟁'],
          en: ['conflict', 'competition', 'tension', 'struggle'],
          ja: ['葛藤', '競争', '緊張', '闘争'],
          es: ['conflicto', 'competencia', 'tensión', 'lucha'],
          pt: ['conflito', 'competição', 'tensão', 'luta'],
          fr: ['conflit', 'compétition', 'tension', 'lutte'],
          de: ['Konflikt', 'Wettbewerb', 'Spannung', 'Kampf']
        },
        upright: {
          ko: '경쟁과 갈등 속에 있지만, 건설적인 방법으로 해결할 수 있습니다.',
          en: 'You\'re amid competition and conflict, but you can resolve it constructively.',
          ja: '競争と葛藤の中にいますが、建設的な方法で解決できます。',
          es: 'Estás en medio de competencia y conflicto, pero puedes resolverlo constructivamente.',
          pt: 'Você está em meio a competição e conflito, mas pode resolver construtivamente.',
          fr: 'Vous êtes au milieu de la compétition et du conflit, mais vous pouvez le résoudre de manière constructive.',
          de: 'Sie befinden sich in Wettbewerb und Konflikt, können es aber konstruktiv lösen.'
        },
        reversed: {
          ko: '불필요한 다툼을 피하세요. 타협과 대화가 답입니다.',
          en: 'Avoid unnecessary quarrels. Compromise and dialogue are the answer.',
          ja: '不必要な争いを避けましょう。妥協と対話が答えです。',
          es: 'Evita peleas innecesarias. El compromiso y el diálogo son la respuesta.',
          pt: 'Evite brigas desnecessárias. Compromisso e diálogo são a resposta.',
          fr: 'Évitez les querelles inutiles. Le compromis et le dialogue sont la réponse.',
          de: 'Vermeiden Sie unnötige Streitigkeiten. Kompromiss und Dialog sind die Antwort.'
        }
      },
      { // 6
        keywords: {
          ko: ['승리', '인정', '자신감', '리더십'],
          en: ['victory', 'recognition', 'confidence', 'leadership'],
          ja: ['勝利', '認知', '自信', 'リーダーシップ'],
          es: ['victoria', 'reconocimiento', 'confianza', 'liderazgo'],
          pt: ['vitória', 'reconhecimento', 'confiança', 'liderança'],
          fr: ['victoire', 'reconnaissance', 'confiance', 'leadership'],
          de: ['Sieg', 'Anerkennung', 'Selbstvertrauen', 'Führung']
        },
        upright: {
          ko: '승리와 인정을 받을 때입니다. 당신의 노력이 빛을 발하고 있습니다.',
          en: 'It\'s time for victory and recognition. Your hard work is shining through.',
          ja: '勝利と認知を受ける時です。あなたの努力が輝いています。',
          es: 'Es momento de victoria y reconocimiento. Tu esfuerzo brilla.',
          pt: 'É hora de vitória e reconhecimento. Seu esforço está brilhando.',
          fr: 'C\'est le moment de la victoire et de la reconnaissance. Votre travail brille.',
          de: 'Es ist Zeit für Sieg und Anerkennung. Ihre harte Arbeit strahlt.'
        },
        reversed: {
          ko: '자만하지 마세요. 겸손함이 진정한 승리를 가져다줍니다.',
          en: 'Don\'t be arrogant. Humility brings true victory.',
          ja: '慢心しないでください。謙虚さが本当の勝利をもたらします。',
          es: 'No seas arrogante. La humildad trae la verdadera victoria.',
          pt: 'Não seja arrogante. A humildade traz a verdadeira vitória.',
          fr: 'Ne soyez pas arrogant. L\'humilité apporte la vraie victoire.',
          de: 'Seien Sie nicht arrogant. Demut bringt den wahren Sieg.'
        }
      },
      { // 7
        keywords: {
          ko: ['도전', '방어', '끈기', '용기'],
          en: ['challenge', 'defense', 'perseverance', 'courage'],
          ja: ['挑戦', '防御', '粘り強さ', '勇気'],
          es: ['desafío', 'defensa', 'perseverancia', 'coraje'],
          pt: ['desafio', 'defesa', 'perseverança', 'coragem'],
          fr: ['défi', 'défense', 'persévérance', 'courage'],
          de: ['Herausforderung', 'Verteidigung', 'Ausdauer', 'Mut']
        },
        upright: {
          ko: '도전에 맞서 자신의 입장을 지키세요. 끈기가 승리를 가져옵니다.',
          en: 'Stand your ground against challenges. Perseverance brings victory.',
          ja: '挑戦に立ち向かい、自分の立場を守りましょう。粘り強さが勝利をもたらします。',
          es: 'Mantén tu posición ante los desafíos. La perseverancia trae la victoria.',
          pt: 'Mantenha sua posição diante dos desafios. A perseverança traz a vitória.',
          fr: 'Tenez bon face aux défis. La persévérance apporte la victoire.',
          de: 'Stehen Sie Ihren Herausforderungen stand. Ausdauer bringt den Sieg.'
        },
        reversed: {
          ko: '압도당하는 느낌이 듭니다. 모든 싸움을 할 필요는 없습니다.',
          en: 'You feel overwhelmed. You don\'t need to fight every battle.',
          ja: '圧倒されている感じがします。すべての戦いをする必要はありません。',
          es: 'Te sientes abrumado. No necesitas pelear todas las batallas.',
          pt: 'Você se sente sobrecarregado. Não precisa lutar todas as batalhas.',
          fr: 'Vous vous sentez dépassé. Vous n\'avez pas besoin de mener tous les combats.',
          de: 'Sie fühlen sich überwältigt. Sie müssen nicht jeden Kampf führen.'
        }
      },
      { // 8
        keywords: {
          ko: ['속도', '변화', '행동', '진전'],
          en: ['speed', 'change', 'action', 'momentum'],
          ja: ['速度', '変化', '行動', '勢い'],
          es: ['velocidad', 'cambio', 'acción', 'impulso'],
          pt: ['velocidade', 'mudança', 'ação', 'impulso'],
          fr: ['vitesse', 'changement', 'action', 'élan'],
          de: ['Geschwindigkeit', 'Veränderung', 'Aktion', 'Schwung']
        },
        upright: {
          ko: '일이 빠르게 진행되고 있습니다. 흐름을 타고 신속하게 행동하세요.',
          en: 'Things are moving fast. Ride the momentum and act swiftly.',
          ja: '物事が速く進んでいます。勢いに乗って素早く行動しましょう。',
          es: 'Las cosas se mueven rápido. Aprovecha el impulso y actúa con rapidez.',
          pt: 'As coisas estão se movendo rápido. Aproveite o impulso e aja rapidamente.',
          fr: 'Les choses avancent vite. Profitez de l\'élan et agissez rapidement.',
          de: 'Die Dinge bewegen sich schnell. Nutzen Sie den Schwung und handeln Sie zügig.'
        },
        reversed: {
          ko: '서두르지 마세요. 성급한 결정은 후회를 불러올 수 있습니다.',
          en: 'Don\'t rush. Hasty decisions may lead to regret.',
          ja: '急がないでください。性急な決断は後悔を招くかもしれません。',
          es: 'No te apresures. Las decisiones apresuradas pueden traer arrepentimiento.',
          pt: 'Não se apresse. Decisões precipitadas podem trazer arrependimento.',
          fr: 'Ne vous précipitez pas. Les décisions hâtives peuvent mener au regret.',
          de: 'Überstürzen Sie nichts. Übereilte Entscheidungen können zu Bedauern führen.'
        }
      },
      { // 9
        keywords: {
          ko: ['회복력', '인내', '결의', '경계'],
          en: ['resilience', 'endurance', 'resolve', 'vigilance'],
          ja: ['回復力', '忍耐', '決意', '警戒'],
          es: ['resiliencia', 'resistencia', 'resolución', 'vigilancia'],
          pt: ['resiliência', 'resistência', 'resolução', 'vigilância'],
          fr: ['résilience', 'endurance', 'résolution', 'vigilance'],
          de: ['Widerstandskraft', 'Ausdauer', 'Entschlossenheit', 'Wachsamkeit']
        },
        upright: {
          ko: '힘든 시기를 버티고 있습니다. 마지막 관문 앞에서 포기하지 마세요.',
          en: 'You\'re enduring tough times. Don\'t give up before the final hurdle.',
          ja: '厳しい時期を耐えています。最後の関門の前で諦めないでください。',
          es: 'Estás soportando tiempos difíciles. No te rindas ante el último obstáculo.',
          pt: 'Você está resistindo em tempos difíceis. Não desista antes do último obstáculo.',
          fr: 'Vous endurez des moments difficiles. N\'abandonnez pas avant le dernier obstacle.',
          de: 'Sie durchstehen schwere Zeiten. Geben Sie vor der letzten Hürde nicht auf.'
        },
        reversed: {
          ko: '지나친 방어적 태도가 고립을 부르고 있습니다. 도움을 받아들이세요.',
          en: 'Excessive defensiveness is causing isolation. Accept help from others.',
          ja: '過度な防御的態度が孤立を招いています。助けを受け入れましょう。',
          es: 'La excesiva actitud defensiva causa aislamiento. Acepta ayuda de otros.',
          pt: 'A postura defensiva excessiva causa isolamento. Aceite ajuda dos outros.',
          fr: 'Une attitude trop défensive cause l\'isolement. Acceptez l\'aide des autres.',
          de: 'Übermäßige Abwehrhaltung führt zur Isolation. Nehmen Sie Hilfe an.'
        }
      },
      { // 10
        keywords: {
          ko: ['부담', '책임감', '과로', '완수'],
          en: ['burden', 'responsibility', 'overwork', 'completion'],
          ja: ['負担', '責任感', '過労', '完遂'],
          es: ['carga', 'responsabilidad', 'exceso de trabajo', 'finalización'],
          pt: ['fardo', 'responsabilidade', 'excesso de trabalho', 'conclusão'],
          fr: ['fardeau', 'responsabilité', 'surmenage', 'achèvement'],
          de: ['Last', 'Verantwortung', 'Überarbeitung', 'Vollendung']
        },
        upright: {
          ko: '많은 책임을 짊어지고 있지만, 끝이 보이고 있습니다. 조금만 더 힘내세요.',
          en: 'You carry heavy responsibilities, but the end is in sight. Keep going a bit more.',
          ja: '多くの責任を背負っていますが、終わりが見えています。もう少し頑張ってください。',
          es: 'Cargas con grandes responsabilidades, pero el final está a la vista. Sigue un poco más.',
          pt: 'Você carrega grandes responsabilidades, mas o fim está à vista. Continue um pouco mais.',
          fr: 'Vous portez de lourdes responsabilités, mais la fin est en vue. Tenez encore un peu.',
          de: 'Sie tragen schwere Verantwortung, aber das Ende ist in Sicht. Halten Sie noch etwas durch.'
        },
        reversed: {
          ko: '짐을 나누어야 합니다. 혼자 다 하려 하지 마세요.',
          en: 'You need to share the load. Don\'t try to do everything alone.',
          ja: '荷物を分かち合う必要があります。一人ですべてをやろうとしないでください。',
          es: 'Necesitas compartir la carga. No intentes hacerlo todo solo.',
          pt: 'Você precisa compartilhar o fardo. Não tente fazer tudo sozinho.',
          fr: 'Vous devez partager le fardeau. N\'essayez pas de tout faire seul.',
          de: 'Sie müssen die Last teilen. Versuchen Sie nicht, alles allein zu machen.'
        }
      },
      { // Page (11)
        keywords: {
          ko: ['열정', '탐구심', '새 소식', '모험'],
          en: ['enthusiasm', 'curiosity', 'new message', 'adventure'],
          ja: ['熱意', '探究心', '新しい知らせ', '冒険'],
          es: ['entusiasmo', 'curiosidad', 'nuevas noticias', 'aventura'],
          pt: ['entusiasmo', 'curiosidade', 'novas notícias', 'aventura'],
          fr: ['enthousiasme', 'curiosité', 'nouvelles', 'aventure'],
          de: ['Begeisterung', 'Neugier', 'neue Nachricht', 'Abenteuer']
        },
        upright: {
          ko: '새로운 열정적 소식이나 기회가 찾아옵니다. 호기심을 따라가세요.',
          en: 'Exciting news or opportunities are coming. Follow your curiosity.',
          ja: '新しい情熱的な知らせや機会が訪れます。好奇心に従いましょう。',
          es: 'Noticias emocionantes u oportunidades se acercan. Sigue tu curiosidad.',
          pt: 'Notícias empolgantes ou oportunidades estão chegando. Siga sua curiosidade.',
          fr: 'Des nouvelles passionnantes ou des opportunités arrivent. Suivez votre curiosité.',
          de: 'Aufregende Neuigkeiten oder Chancen kommen. Folgen Sie Ihrer Neugier.'
        },
        reversed: {
          ko: '뜻대로 되지 않는 소식이 있을 수 있습니다. 좌절하지 말고 배움으로 삼으세요.',
          en: 'There may be unfavorable news. Don\'t despair — treat it as a learning experience.',
          ja: '思い通りにならない知らせがあるかもしれません。挫折せず、学びとしましょう。',
          es: 'Puede haber noticias desfavorables. No desesperes, conviértelo en aprendizaje.',
          pt: 'Pode haver notícias desfavoráveis. Não desanime, trate como aprendizado.',
          fr: 'Il peut y avoir des nouvelles défavorables. Ne désespérez pas, prenez-le comme un apprentissage.',
          de: 'Es könnte ungünstige Nachrichten geben. Verzweifeln Sie nicht — sehen Sie es als Lernerfahrung.'
        }
      },
      { // Knight (12)
        keywords: {
          ko: ['행동력', '모험', '에너지', '추진력'],
          en: ['action', 'adventure', 'energy', 'drive'],
          ja: ['行動力', '冒険', 'エネルギー', '推進力'],
          es: ['acción', 'aventura', 'energía', 'impulso'],
          pt: ['ação', 'aventura', 'energia', 'impulso'],
          fr: ['action', 'aventure', 'énergie', 'dynamisme'],
          de: ['Tatkraft', 'Abenteuer', 'Energie', 'Antrieb']
        },
        upright: {
          ko: '열정적으로 목표를 향해 돌진하세요. 행동력이 빛나는 시기입니다.',
          en: 'Charge passionately toward your goal. This is a time when action shines.',
          ja: '情熱的に目標に向かって突進しましょう。行動力が輝く時期です。',
          es: 'Carga apasionadamente hacia tu meta. Es un momento en que la acción brilla.',
          pt: 'Avance apaixonadamente em direção ao seu objetivo. Este é um momento em que a ação brilha.',
          fr: 'Foncez passionnément vers votre objectif. C\'est le moment où l\'action brille.',
          de: 'Stürmen Sie leidenschaftlich auf Ihr Ziel zu. Dies ist eine Zeit, in der Tatkraft glänzt.'
        },
        reversed: {
          ko: '성급하고 무모한 행동을 조심하세요. 열정을 조절하는 것도 능력입니다.',
          en: 'Beware of hasty, reckless action. Controlling your passion is also a skill.',
          ja: '性急で無謀な行動に注意してください。情熱をコントロールすることも能力です。',
          es: 'Cuidado con acciones imprudentes y precipitadas. Controlar tu pasión también es una habilidad.',
          pt: 'Cuidado com ações imprudentes e precipitadas. Controlar sua paixão também é uma habilidade.',
          fr: 'Attention aux actions imprudentes et précipitées. Maîtriser sa passion est aussi une compétence.',
          de: 'Vorsicht vor hastigen, rücksichtslosen Handlungen. Die eigene Leidenschaft zu kontrollieren ist auch eine Fähigkeit.'
        }
      },
      { // Queen (13)
        keywords: {
          ko: ['매력', '자신감', '따뜻함', '독립'],
          en: ['charisma', 'confidence', 'warmth', 'independence'],
          ja: ['魅力', '自信', '温かさ', '独立'],
          es: ['carisma', 'confianza', 'calidez', 'independencia'],
          pt: ['carisma', 'confiança', 'calor', 'independência'],
          fr: ['charisme', 'confiance', 'chaleur', 'indépendance'],
          de: ['Charisma', 'Selbstvertrauen', 'Wärme', 'Unabhängigkeit']
        },
        upright: {
          ko: '따뜻한 열정과 자신감으로 주변을 이끌어가세요. 당신의 매력이 빛납니다.',
          en: 'Lead those around you with warm passion and confidence. Your charisma shines.',
          ja: '温かい情熱と自信で周りを導きましょう。あなたの魅力が輝いています。',
          es: 'Guía a quienes te rodean con cálida pasión y confianza. Tu carisma brilla.',
          pt: 'Guie aqueles ao seu redor com paixão calorosa e confiança. Seu carisma brilha.',
          fr: 'Guidez votre entourage avec passion et confiance. Votre charisme rayonne.',
          de: 'Führen Sie Ihre Umgebung mit warmer Leidenschaft und Selbstvertrauen. Ihr Charisma strahlt.'
        },
        reversed: {
          ko: '지나친 요구나 질투심이 관계를 해칠 수 있습니다. 균형을 찾으세요.',
          en: 'Excessive demands or jealousy may harm relationships. Find balance.',
          ja: '過度な要求や嫉妬が関係を損なう可能性があります。バランスを見つけましょう。',
          es: 'Exigencias excesivas o celos pueden dañar las relaciones. Encuentra el equilibrio.',
          pt: 'Exigências excessivas ou ciúmes podem prejudicar relacionamentos. Encontre o equilíbrio.',
          fr: 'Des exigences excessives ou la jalousie peuvent nuire aux relations. Trouvez l\'équilibre.',
          de: 'Übermäßige Forderungen oder Eifersucht können Beziehungen schaden. Finden Sie das Gleichgewicht.'
        }
      },
      { // King (14)
        keywords: {
          ko: ['비전', '리더십', '대담함', '영감'],
          en: ['vision', 'leadership', 'boldness', 'inspiration'],
          ja: ['ビジョン', 'リーダーシップ', '大胆さ', 'インスピレーション'],
          es: ['visión', 'liderazgo', 'audacia', 'inspiración'],
          pt: ['visão', 'liderança', 'ousadia', 'inspiração'],
          fr: ['vision', 'leadership', 'audace', 'inspiration'],
          de: ['Vision', 'Führung', 'Kühnheit', 'Inspiration']
        },
        upright: {
          ko: '큰 비전을 품고 대담하게 이끌어가세요. 영감을 주는 리더가 되세요.',
          en: 'Hold a grand vision and lead boldly. Be an inspiring leader.',
          ja: '大きなビジョンを抱き、大胆に導きましょう。インスピレーションを与えるリーダーになりましょう。',
          es: 'Abraza una gran visión y lidera con audacia. Sé un líder inspirador.',
          pt: 'Abrace uma grande visão e lidere com ousadia. Seja um líder inspirador.',
          fr: 'Portez une grande vision et menez avec audace. Soyez un leader inspirant.',
          de: 'Tragen Sie eine große Vision und führen Sie kühn. Seien Sie ein inspirierender Anführer.'
        },
        reversed: {
          ko: '독단적 리더십은 반발을 불러옵니다. 다른 사람의 의견을 존중하세요.',
          en: 'Authoritarian leadership invites resistance. Respect others\' opinions.',
          ja: '独断的なリーダーシップは反発を招きます。他の人の意見を尊重しましょう。',
          es: 'El liderazgo autoritario invita a la resistencia. Respeta las opiniones de los demás.',
          pt: 'A liderança autoritária convida resistência. Respeite as opiniões dos outros.',
          fr: 'Le leadership autoritaire invite la résistance. Respectez les opinions des autres.',
          de: 'Autoritäre Führung ruft Widerstand hervor. Respektieren Sie die Meinungen anderer.'
        }
      }
    ],

    /* ===== CUPS (물 - 감정, 관계, 사랑, 직관) ===== */
    cups: [
      { // Ace
        keywords: {
          ko: ['새로운 사랑', '감정의 시작', '직관', '기쁨'],
          en: ['new love', 'emotional beginning', 'intuition', 'joy'],
          ja: ['新しい愛', '感情の始まり', '直感', '喜び'],
          es: ['nuevo amor', 'comienzo emocional', 'intuición', 'alegría'],
          pt: ['novo amor', 'início emocional', 'intuição', 'alegria'],
          fr: ['nouvel amour', 'début émotionnel', 'intuition', 'joie'],
          de: ['neue Liebe', 'emotionaler Anfang', 'Intuition', 'Freude']
        },
        upright: {
          ko: '새로운 감정이 싹트고 있습니다. 사랑과 기쁨이 넘쳐흐르는 시기입니다.',
          en: 'New emotions are blossoming. This is a time overflowing with love and joy.',
          ja: '新しい感情が芽生えています。愛と喜びが溢れる時期です。',
          es: 'Nuevas emociones están floreciendo. Es un tiempo desbordante de amor y alegría.',
          pt: 'Novas emoções estão florescendo. É um tempo transbordando de amor e alegria.',
          fr: 'De nouvelles émotions fleurissent. C\'est un temps débordant d\'amour et de joie.',
          de: 'Neue Emotionen erblühen. Dies ist eine Zeit, die vor Liebe und Freude überquillt.'
        },
        reversed: {
          ko: '감정을 억누르고 있지는 않나요? 마음을 열어보세요.',
          en: 'Are you suppressing your emotions? Try opening your heart.',
          ja: '感情を抑え込んでいませんか？心を開いてみましょう。',
          es: '¿Estás reprimiendo tus emociones? Intenta abrir tu corazón.',
          pt: 'Está reprimindo suas emoções? Tente abrir seu coração.',
          fr: 'Réprimez-vous vos émotions ? Essayez d\'ouvrir votre cœur.',
          de: 'Unterdrücken Sie Ihre Gefühle? Versuchen Sie, Ihr Herz zu öffnen.'
        }
      },
      { // 2
        keywords: {
          ko: ['파트너십', '연합', '상호 매력', '조화'],
          en: ['partnership', 'union', 'mutual attraction', 'harmony'],
          ja: ['パートナーシップ', '結合', '相互の魅力', '調和'],
          es: ['asociación', 'unión', 'atracción mutua', 'armonía'],
          pt: ['parceria', 'união', 'atração mútua', 'harmonia'],
          fr: ['partenariat', 'union', 'attraction mutuelle', 'harmonie'],
          de: ['Partnerschaft', 'Vereinigung', 'gegenseitige Anziehung', 'Harmonie']
        },
        upright: {
          ko: '마음이 통하는 사람과의 연결이 깊어지고 있습니다. 아름다운 관계가 피어납니다.',
          en: 'A deep connection with a kindred spirit is growing. A beautiful relationship blooms.',
          ja: '心が通じる人とのつながりが深まっています。美しい関係が花開きます。',
          es: 'Una conexión profunda con un alma afín está creciendo. Una hermosa relación florece.',
          pt: 'Uma conexão profunda com uma alma afim está crescendo. Uma bela relação floresce.',
          fr: 'Une connexion profonde avec une âme sœur grandit. Une belle relation s\'épanouit.',
          de: 'Eine tiefe Verbindung mit einem Seelenverwandten wächst. Eine schöne Beziehung erblüht.'
        },
        reversed: {
          ko: '관계에서 균형이 깨지고 있습니다. 소통을 회복하세요.',
          en: 'Balance in a relationship is slipping. Restore communication.',
          ja: '関係のバランスが崩れています。コミュニケーションを回復しましょう。',
          es: 'El equilibrio en la relación se está perdiendo. Restaura la comunicación.',
          pt: 'O equilíbrio no relacionamento está se perdendo. Restaure a comunicação.',
          fr: 'L\'équilibre dans la relation se perd. Rétablissez la communication.',
          de: 'Das Gleichgewicht in der Beziehung geht verloren. Stellen Sie die Kommunikation wieder her.'
        }
      },
      { // 3
        keywords: {
          ko: ['축하', '우정', '커뮤니티', '기쁨'],
          en: ['celebration', 'friendship', 'community', 'joy'],
          ja: ['祝い', '友情', 'コミュニティ', '喜び'],
          es: ['celebración', 'amistad', 'comunidad', 'alegría'],
          pt: ['celebração', 'amizade', 'comunidade', 'alegria'],
          fr: ['célébration', 'amitié', 'communauté', 'joie'],
          de: ['Feier', 'Freundschaft', 'Gemeinschaft', 'Freude']
        },
        upright: {
          ko: '함께 기뻐할 일이 있습니다! 소중한 사람들과 기쁨을 나누세요.',
          en: 'There is something to celebrate together! Share your joy with those you cherish.',
          ja: '一緒に喜ぶことがあります！大切な人たちと喜びを分かち合いましょう。',
          es: '¡Hay algo que celebrar juntos! Comparte tu alegría con quienes aprecias.',
          pt: 'Há algo para celebrar juntos! Compartilhe sua alegria com quem você valoriza.',
          fr: 'Il y a quelque chose à célébrer ensemble ! Partagez votre joie avec ceux qui vous sont chers.',
          de: 'Es gibt etwas gemeinsam zu feiern! Teilen Sie Ihre Freude mit denen, die Ihnen wichtig sind.'
        },
        reversed: {
          ko: '과도한 쾌락이나 방종에 주의하세요. 진정한 기쁨은 절제 안에 있습니다.',
          en: 'Beware of excess pleasure or indulgence. True joy lies in moderation.',
          ja: '過度な快楽や放縦に注意してください。本当の喜びは節制の中にあります。',
          es: 'Cuidado con el placer excesivo o la indulgencia. La verdadera alegría está en la moderación.',
          pt: 'Cuidado com prazer excessivo ou indulgência. A verdadeira alegria está na moderação.',
          fr: 'Attention aux plaisirs excessifs ou à l\'indulgence. La vraie joie est dans la modération.',
          de: 'Vorsicht vor übermäßigem Vergnügen oder Nachgiebigkeit. Wahre Freude liegt in der Mäßigung.'
        }
      },
      { // 4
        keywords: {
          ko: ['권태', '무관심', '불만족', '재평가'],
          en: ['boredom', 'apathy', 'dissatisfaction', 'reevaluation'],
          ja: ['倦怠', '無関心', '不満', '再評価'],
          es: ['aburrimiento', 'apatía', 'insatisfacción', 'reevaluación'],
          pt: ['tédio', 'apatia', 'insatisfação', 'reavaliação'],
          fr: ['ennui', 'apathie', 'insatisfaction', 'réévaluation'],
          de: ['Langeweile', 'Apathie', 'Unzufriedenheit', 'Neubewertung']
        },
        upright: {
          ko: '현재에 만족하지 못하고 있습니다. 무엇이 진정 원하는 것인지 다시 생각해보세요.',
          en: 'You are dissatisfied with the present. Reconsider what you truly desire.',
          ja: '現状に満足していません。本当に望んでいることを再考してみてください。',
          es: 'No estás satisfecho con el presente. Reconsidera lo que realmente deseas.',
          pt: 'Você não está satisfeito com o presente. Reconsidere o que realmente deseja.',
          fr: 'Vous n\'êtes pas satisfait du présent. Reconsidérez ce que vous désirez vraiment.',
          de: 'Sie sind mit der Gegenwart unzufrieden. Überdenken Sie, was Sie wirklich wollen.'
        },
        reversed: {
          ko: '새로운 가능성이 눈에 들어오기 시작합니다. 기회를 잡으세요.',
          en: 'New possibilities are starting to catch your eye. Seize the opportunity.',
          ja: '新しい可能性が目に入り始めています。チャンスを掴みましょう。',
          es: 'Nuevas posibilidades empiezan a llamar tu atención. Aprovecha la oportunidad.',
          pt: 'Novas possibilidades estão começando a chamar sua atenção. Aproveite a oportunidade.',
          fr: 'De nouvelles possibilités commencent à attirer votre attention. Saisissez l\'opportunité.',
          de: 'Neue Möglichkeiten fallen Ihnen ins Auge. Ergreifen Sie die Gelegenheit.'
        }
      },
      { // 5
        keywords: {
          ko: ['상실', '후회', '슬픔', '교훈'],
          en: ['loss', 'regret', 'grief', 'lesson'],
          ja: ['喪失', '後悔', '悲しみ', '教訓'],
          es: ['pérdida', 'arrepentimiento', 'duelo', 'lección'],
          pt: ['perda', 'arrependimento', 'luto', 'lição'],
          fr: ['perte', 'regret', 'deuil', 'leçon'],
          de: ['Verlust', 'Reue', 'Trauer', 'Lektion']
        },
        upright: {
          ko: '잃어버린 것에 슬퍼하고 있지만, 아직 남아 있는 것을 보세요.',
          en: 'You grieve what\'s lost, but look at what remains.',
          ja: '失ったものを悲しんでいますが、まだ残っているものを見てください。',
          es: 'Lloras lo perdido, pero mira lo que queda.',
          pt: 'Você lamenta o que perdeu, mas olhe o que resta.',
          fr: 'Vous pleurez ce qui est perdu, mais regardez ce qui reste.',
          de: 'Sie trauern um das Verlorene, aber schauen Sie auf das, was bleibt.'
        },
        reversed: {
          ko: '슬픔에서 벗어나 회복의 길에 들어서고 있습니다. 앞으로 나아가세요.',
          en: 'You are moving past grief and onto the path of recovery. Move forward.',
          ja: '悲しみから抜け出し、回復の道に入っています。前に進みましょう。',
          es: 'Estás superando el duelo y entrando en el camino de la recuperación. Avanza.',
          pt: 'Você está superando o luto e entrando no caminho da recuperação. Siga em frente.',
          fr: 'Vous dépassez le deuil et entrez sur le chemin de la guérison. Avancez.',
          de: 'Sie überwinden die Trauer und betreten den Weg der Genesung. Gehen Sie voran.'
        }
      },
      { // 6
        keywords: {
          ko: ['향수', '추억', '순수함', '재회'],
          en: ['nostalgia', 'memories', 'innocence', 'reunion'],
          ja: ['郷愁', '思い出', '純真', '再会'],
          es: ['nostalgia', 'recuerdos', 'inocencia', 'reencuentro'],
          pt: ['nostalgia', 'memórias', 'inocência', 'reencontro'],
          fr: ['nostalgie', 'souvenirs', 'innocence', 'retrouvailles'],
          de: ['Nostalgie', 'Erinnerungen', 'Unschuld', 'Wiedersehen']
        },
        upright: {
          ko: '따뜻한 추억이 마음을 채우고 있습니다. 과거의 아름다운 순간을 되새기세요.',
          en: 'Warm memories fill your heart. Cherish the beautiful moments of the past.',
          ja: '温かい思い出が心を満たしています。過去の美しい瞬間を大切にしましょう。',
          es: 'Recuerdos cálidos llenan tu corazón. Atesora los momentos hermosos del pasado.',
          pt: 'Memórias calorosas preenchem seu coração. Valorize os belos momentos do passado.',
          fr: 'Des souvenirs chaleureux remplissent votre cœur. Chérissez les beaux moments du passé.',
          de: 'Warme Erinnerungen füllen Ihr Herz. Schätzen Sie die schönen Momente der Vergangenheit.'
        },
        reversed: {
          ko: '과거에 집착하지 마세요. 현재를 살아가는 것이 중요합니다.',
          en: 'Don\'t cling to the past. Living in the present is what matters.',
          ja: '過去に執着しないでください。現在を生きることが大切です。',
          es: 'No te aferres al pasado. Vivir en el presente es lo que importa.',
          pt: 'Não se apegue ao passado. Viver no presente é o que importa.',
          fr: 'Ne vous accrochez pas au passé. Vivre le présent est ce qui compte.',
          de: 'Klammern Sie sich nicht an die Vergangenheit. In der Gegenwart zu leben ist das, was zählt.'
        }
      },
      { // 7
        keywords: {
          ko: ['환상', '선택', '유혹', '상상'],
          en: ['fantasy', 'choices', 'temptation', 'imagination'],
          ja: ['幻想', '選択', '誘惑', '想像'],
          es: ['fantasía', 'elecciones', 'tentación', 'imaginación'],
          pt: ['fantasia', 'escolhas', 'tentação', 'imaginação'],
          fr: ['fantasme', 'choix', 'tentation', 'imagination'],
          de: ['Fantasie', 'Auswahl', 'Versuchung', 'Vorstellung']
        },
        upright: {
          ko: '많은 선택지 앞에서 환상에 빠져 있습니다. 현실적인 판단이 필요합니다.',
          en: 'You\'re lost in fantasy before many choices. Realistic judgment is needed.',
          ja: '多くの選択肢の前で幻想に浸っています。現実的な判断が必要です。',
          es: 'Estás perdido en fantasías ante muchas opciones. Se necesita juicio realista.',
          pt: 'Você está perdido em fantasias diante de muitas opções. É necessário julgamento realista.',
          fr: 'Vous êtes perdu dans la fantaisie face à de nombreux choix. Un jugement réaliste est nécessaire.',
          de: 'Sie sind in Fantasien verloren vor vielen Wahlmöglichkeiten. Realistische Beurteilung ist nötig.'
        },
        reversed: {
          ko: '환상에서 깨어나 현실을 직시할 때입니다. 진정 중요한 것을 선택하세요.',
          en: 'It\'s time to wake from fantasy and face reality. Choose what truly matters.',
          ja: '幻想から覚めて現実を直視する時です。本当に大切なものを選びましょう。',
          es: 'Es hora de despertar de la fantasía y enfrentar la realidad. Elige lo que realmente importa.',
          pt: 'É hora de despertar da fantasia e encarar a realidade. Escolha o que realmente importa.',
          fr: 'Il est temps de sortir du rêve et de faire face à la réalité. Choisissez ce qui compte vraiment.',
          de: 'Es ist Zeit, aus der Fantasie zu erwachen und der Realität ins Auge zu sehen. Wählen Sie, was wirklich zählt.'
        }
      },
      { // 8
        keywords: {
          ko: ['떠남', '포기', '전환', '더 깊은 의미'],
          en: ['departure', 'abandonment', 'transition', 'deeper meaning'],
          ja: ['出発', '放棄', '転換', 'より深い意味'],
          es: ['partida', 'abandono', 'transición', 'significado más profundo'],
          pt: ['partida', 'abandono', 'transição', 'significado mais profundo'],
          fr: ['départ', 'abandon', 'transition', 'sens plus profond'],
          de: ['Aufbruch', 'Aufgabe', 'Übergang', 'tiefere Bedeutung']
        },
        upright: {
          ko: '익숙한 것을 떠나 더 깊은 의미를 찾아갈 때입니다. 용기 있는 선택을 하세요.',
          en: 'It\'s time to leave the familiar and seek deeper meaning. Make a courageous choice.',
          ja: '慣れ親しんだものを離れ、より深い意味を探しに行く時です。勇気ある選択をしましょう。',
          es: 'Es hora de dejar lo familiar y buscar un significado más profundo. Haz una elección valiente.',
          pt: 'É hora de deixar o familiar e buscar um significado mais profundo. Faça uma escolha corajosa.',
          fr: 'Il est temps de quitter le familier et de chercher un sens plus profond. Faites un choix courageux.',
          de: 'Es ist Zeit, das Vertraute zu verlassen und tiefere Bedeutung zu suchen. Treffen Sie eine mutige Wahl.'
        },
        reversed: {
          ko: '떠나야 할지 머물러야 할지 고민 중입니다. 마음의 소리에 귀 기울이세요.',
          en: 'You\'re torn between staying and leaving. Listen to your heart.',
          ja: '去るべきか留まるべきか悩んでいます。心の声に耳を傾けてください。',
          es: 'Estás dividido entre quedarte e irte. Escucha tu corazón.',
          pt: 'Você está dividido entre ficar e ir. Ouça seu coração.',
          fr: 'Vous hésitez entre rester et partir. Écoutez votre cœur.',
          de: 'Sie sind hin- und hergerissen zwischen Bleiben und Gehen. Hören Sie auf Ihr Herz.'
        }
      },
      { // 9
        keywords: {
          ko: ['만족', '소원 성취', '행복', '감사'],
          en: ['satisfaction', 'wish fulfillment', 'happiness', 'gratitude'],
          ja: ['満足', '願望成就', '幸福', '感謝'],
          es: ['satisfacción', 'cumplimiento de deseos', 'felicidad', 'gratitud'],
          pt: ['satisfação', 'realização de desejos', 'felicidade', 'gratidão'],
          fr: ['satisfaction', 'accomplissement de vœux', 'bonheur', 'gratitude'],
          de: ['Zufriedenheit', 'Wunscherfüllung', 'Glück', 'Dankbarkeit']
        },
        upright: {
          ko: '소원이 이루어지고 있습니다! 감정적으로 깊은 만족감을 느끼는 시기입니다.',
          en: 'Your wishes are coming true! This is a time of deep emotional satisfaction.',
          ja: '願いが叶おうとしています！感情的に深い満足感を感じる時期です。',
          es: '¡Tus deseos se están cumpliendo! Es un tiempo de profunda satisfacción emocional.',
          pt: 'Seus desejos estão se realizando! É um tempo de profunda satisfação emocional.',
          fr: 'Vos vœux se réalisent ! C\'est un temps de profonde satisfaction émotionnelle.',
          de: 'Ihre Wünsche werden wahr! Dies ist eine Zeit tiefer emotionaler Zufriedenheit.'
        },
        reversed: {
          ko: '물질적으로는 충분하지만 마음이 채워지지 않습니다. 진정한 행복을 찾으세요.',
          en: 'You have material abundance but feel emotionally unfulfilled. Seek true happiness.',
          ja: '物質的には十分ですが、心が満たされません。本当の幸福を探しましょう。',
          es: 'Tienes abundancia material pero no te sientes emocionalmente satisfecho. Busca la verdadera felicidad.',
          pt: 'Você tem abundância material mas não se sente emocionalmente realizado. Busque a verdadeira felicidade.',
          fr: 'Vous avez l\'abondance matérielle mais vous ne vous sentez pas comblé. Cherchez le vrai bonheur.',
          de: 'Sie haben materiellen Überfluss, fühlen sich aber emotional unerfüllt. Suchen Sie wahres Glück.'
        }
      },
      { // 10
        keywords: {
          ko: ['가정의 행복', '조화', '완성', '평화'],
          en: ['family happiness', 'harmony', 'fulfillment', 'peace'],
          ja: ['家庭の幸福', '調和', '完成', '平和'],
          es: ['felicidad familiar', 'armonía', 'plenitud', 'paz'],
          pt: ['felicidade familiar', 'harmonia', 'plenitude', 'paz'],
          fr: ['bonheur familial', 'harmonie', 'plénitude', 'paix'],
          de: ['Familienglück', 'Harmonie', 'Erfüllung', 'Frieden']
        },
        upright: {
          ko: '가정과 관계에서 깊은 행복과 조화를 누리고 있습니다. 사랑이 완성되는 순간입니다.',
          en: 'You enjoy deep happiness and harmony in family and relationships. Love reaches fulfillment.',
          ja: '家庭と関係で深い幸福と調和を享受しています。愛が完成する瞬間です。',
          es: 'Disfrutas de profunda felicidad y armonía en familia y relaciones. El amor alcanza su plenitud.',
          pt: 'Você desfruta de profunda felicidade e harmonia na família e relacionamentos. O amor alcança a plenitude.',
          fr: 'Vous jouissez d\'un profond bonheur et d\'harmonie en famille et en amour. L\'amour atteint sa plénitude.',
          de: 'Sie genießen tiefes Glück und Harmonie in Familie und Beziehungen. Die Liebe erreicht Erfüllung.'
        },
        reversed: {
          ko: '가정 내 불화나 기대에 못 미치는 관계에 실망하고 있습니다. 대화가 필요합니다.',
          en: 'You\'re disappointed by family discord or unmet expectations. Dialogue is needed.',
          ja: '家庭内の不和や期待に届かない関係に失望しています。対話が必要です。',
          es: 'Estás decepcionado por discordias familiares o expectativas insatisfechas. Se necesita diálogo.',
          pt: 'Você está decepcionado com discórdias familiares ou expectativas não atendidas. Diálogo é necessário.',
          fr: 'Vous êtes déçu par des discordes familiales ou des attentes non satisfaites. Le dialogue est nécessaire.',
          de: 'Sie sind enttäuscht von Familienzwist oder unerfüllten Erwartungen. Dialog ist nötig.'
        }
      },
      { // Page (11)
        keywords: {
          ko: ['감성', '직관', '새 감정', '메시지'],
          en: ['sensitivity', 'intuition', 'new feelings', 'message'],
          ja: ['感性', '直感', '新しい感情', 'メッセージ'],
          es: ['sensibilidad', 'intuición', 'nuevos sentimientos', 'mensaje'],
          pt: ['sensibilidade', 'intuição', 'novos sentimentos', 'mensagem'],
          fr: ['sensibilité', 'intuition', 'nouveaux sentiments', 'message'],
          de: ['Sensibilität', 'Intuition', 'neue Gefühle', 'Botschaft']
        },
        upright: {
          ko: '감정적 직관이 발달하고 있습니다. 사랑의 소식이나 감동적 메시지가 올 수 있어요.',
          en: 'Your emotional intuition is developing. Loving news or a touching message may arrive.',
          ja: '感情的な直感が発達しています。愛の知らせや感動的なメッセージが届くかもしれません。',
          es: 'Tu intuición emocional se está desarrollando. Pueden llegar noticias de amor o un mensaje conmovedor.',
          pt: 'Sua intuição emocional está se desenvolvendo. Notícias de amor ou uma mensagem comovente podem chegar.',
          fr: 'Votre intuition émotionnelle se développe. Des nouvelles d\'amour ou un message touchant peuvent arriver.',
          de: 'Ihre emotionale Intuition entwickelt sich. Liebesnachrichten oder eine berührende Botschaft können kommen.'
        },
        reversed: {
          ko: '감정에 휘둘리고 있습니다. 이성과 감성의 균형이 필요합니다.',
          en: 'You\'re being swayed by emotions. Balance between reason and feeling is needed.',
          ja: '感情に振り回されています。理性と感性のバランスが必要です。',
          es: 'Te dejas llevar por las emociones. Se necesita equilibrio entre razón y sentimiento.',
          pt: 'Você está sendo levado pelas emoções. Equilíbrio entre razão e sentimento é necessário.',
          fr: 'Vous êtes ballotté par les émotions. Un équilibre entre raison et sentiment est nécessaire.',
          de: 'Sie werden von Emotionen mitgerissen. Ein Gleichgewicht zwischen Vernunft und Gefühl ist nötig.'
        }
      },
      { // Knight (12)
        keywords: {
          ko: ['로맨스', '매력', '제안', '이상주의'],
          en: ['romance', 'charm', 'proposal', 'idealism'],
          ja: ['ロマンス', '魅力', '提案', '理想主義'],
          es: ['romance', 'encanto', 'propuesta', 'idealismo'],
          pt: ['romance', 'charme', 'proposta', 'idealismo'],
          fr: ['romance', 'charme', 'proposition', 'idéalisme'],
          de: ['Romantik', 'Charme', 'Vorschlag', 'Idealismus']
        },
        upright: {
          ko: '로맨틱한 제안이나 감동적인 기회가 찾아옵니다. 마음을 열고 받아들이세요.',
          en: 'A romantic proposal or moving opportunity arrives. Open your heart and embrace it.',
          ja: 'ロマンチックな提案や感動的な機会が訪れます。心を開いて受け入れましょう。',
          es: 'Una propuesta romántica u oportunidad conmovedora llega. Abre tu corazón y acéptala.',
          pt: 'Uma proposta romântica ou oportunidade comovente chega. Abra seu coração e aceite.',
          fr: 'Une proposition romantique ou une opportunité émouvante arrive. Ouvrez votre cœur et accueillez-la.',
          de: 'Ein romantischer Vorschlag oder eine bewegende Gelegenheit kommt. Öffnen Sie Ihr Herz und nehmen Sie es an.'
        },
        reversed: {
          ko: '비현실적인 기대를 내려놓으세요. 현실적인 사랑이 더 아름답습니다.',
          en: 'Let go of unrealistic expectations. Realistic love is more beautiful.',
          ja: '非現実的な期待を手放しましょう。現実的な愛の方が美しいです。',
          es: 'Deja ir las expectativas irreales. El amor realista es más hermoso.',
          pt: 'Deixe ir expectativas irreais. O amor realista é mais bonito.',
          fr: 'Lâchez les attentes irréalistes. L\'amour réaliste est plus beau.',
          de: 'Lassen Sie unrealistische Erwartungen los. Realistische Liebe ist schöner.'
        }
      },
      { // Queen (13)
        keywords: {
          ko: ['공감', '돌봄', '직관', '감정 지능'],
          en: ['empathy', 'nurturing', 'intuition', 'emotional intelligence'],
          ja: ['共感', '思いやり', '直感', '感情知能'],
          es: ['empatía', 'cuidado', 'intuición', 'inteligencia emocional'],
          pt: ['empatia', 'cuidado', 'intuição', 'inteligência emocional'],
          fr: ['empathie', 'bienveillance', 'intuition', 'intelligence émotionnelle'],
          de: ['Empathie', 'Fürsorge', 'Intuition', 'emotionale Intelligenz']
        },
        upright: {
          ko: '따뜻한 공감 능력으로 주변 사람들을 치유하세요. 당신의 직관을 믿으세요.',
          en: 'Heal those around you with warm empathy. Trust your intuition.',
          ja: '温かい共感力で周りの人を癒しましょう。直感を信じてください。',
          es: 'Sana a quienes te rodean con cálida empatía. Confía en tu intuición.',
          pt: 'Cure aqueles ao seu redor com empatia calorosa. Confie na sua intuição.',
          fr: 'Guérissez votre entourage avec une empathie chaleureuse. Faites confiance à votre intuition.',
          de: 'Heilen Sie Ihre Umgebung mit warmer Empathie. Vertrauen Sie Ihrer Intuition.'
        },
        reversed: {
          ko: '타인의 감정에 지나치게 영향받고 있습니다. 자신의 경계를 지키세요.',
          en: 'You are overly affected by others\' emotions. Protect your boundaries.',
          ja: '他人の感情に過度に影響を受けています。自分の境界を守りましょう。',
          es: 'Te afectan demasiado las emociones de los demás. Protege tus límites.',
          pt: 'Você é excessivamente afetado pelas emoções dos outros. Proteja seus limites.',
          fr: 'Vous êtes trop affecté par les émotions des autres. Protégez vos limites.',
          de: 'Sie werden zu stark von den Emotionen anderer beeinflusst. Schützen Sie Ihre Grenzen.'
        }
      },
      { // King (14)
        keywords: {
          ko: ['감정 통제', '외교', '지혜', '관용'],
          en: ['emotional control', 'diplomacy', 'wisdom', 'generosity'],
          ja: ['感情のコントロール', '外交', '知恵', '寛容'],
          es: ['control emocional', 'diplomacia', 'sabiduría', 'generosidad'],
          pt: ['controle emocional', 'diplomacia', 'sabedoria', 'generosidade'],
          fr: ['contrôle émotionnel', 'diplomatie', 'sagesse', 'générosité'],
          de: ['emotionale Kontrolle', 'Diplomatie', 'Weisheit', 'Großzügigkeit']
        },
        upright: {
          ko: '감정을 지혜롭게 다스리며 관대한 마음으로 이끌어가세요.',
          en: 'Govern your emotions wisely and lead with generosity.',
          ja: '感情を賢く治め、寛大な心で導きましょう。',
          es: 'Gobierna tus emociones sabiamente y lidera con generosidad.',
          pt: 'Governe suas emoções sabiamente e lidere com generosidade.',
          fr: 'Gouvernez vos émotions avec sagesse et menez avec générosité.',
          de: 'Beherrschen Sie Ihre Emotionen weise und führen Sie mit Großzügigkeit.'
        },
        reversed: {
          ko: '감정을 억압하거나 조종하려 하고 있습니다. 진솔한 소통이 필요합니다.',
          en: 'You are suppressing or manipulating emotions. Honest communication is needed.',
          ja: '感情を抑圧したり操作したりしようとしています。誠実なコミュニケーションが必要です。',
          es: 'Estás suprimiendo o manipulando emociones. Se necesita comunicación honesta.',
          pt: 'Você está suprimindo ou manipulando emoções. Comunicação honesta é necessária.',
          fr: 'Vous supprimez ou manipulez les émotions. Une communication honnête est nécessaire.',
          de: 'Sie unterdrücken oder manipulieren Emotionen. Ehrliche Kommunikation ist nötig.'
        }
      }
    ],

    /* ===== SWORDS (공기 - 지성, 논리, 갈등, 진실) ===== */
    swords: [
      { // Ace
        keywords: {
          ko: ['명확함', '진실', '돌파구', '새 아이디어'],
          en: ['clarity', 'truth', 'breakthrough', 'new idea'],
          ja: ['明確さ', '真実', '突破口', '新しいアイデア'],
          es: ['claridad', 'verdad', 'avance', 'nueva idea'],
          pt: ['clareza', 'verdade', 'avanço', 'nova ideia'],
          fr: ['clarté', 'vérité', 'percée', 'nouvelle idée'],
          de: ['Klarheit', 'Wahrheit', 'Durchbruch', 'neue Idee']
        },
        upright: {
          ko: '명확한 통찰력과 새로운 아이디어가 떠오르고 있습니다. 진실의 검을 잡으세요.',
          en: 'Clear insight and new ideas are emerging. Grasp the sword of truth.',
          ja: '明確な洞察力と新しいアイデアが浮かんでいます。真実の剣を握りましょう。',
          es: 'Una visión clara y nuevas ideas están surgiendo. Toma la espada de la verdad.',
          pt: 'Visão clara e novas ideias estão surgindo. Agarre a espada da verdade.',
          fr: 'Une vision claire et de nouvelles idées émergent. Saisissez l\'épée de la vérité.',
          de: 'Klare Einsicht und neue Ideen entstehen. Ergreifen Sie das Schwert der Wahrheit.'
        },
        reversed: {
          ko: '혼란스러운 생각들이 머릿속을 채우고 있습니다. 정리가 필요합니다.',
          en: 'Confused thoughts fill your mind. You need to organize them.',
          ja: '混乱した思考が頭の中を満たしています。整理が必要です。',
          es: 'Pensamientos confusos llenan tu mente. Necesitas organizarlos.',
          pt: 'Pensamentos confusos enchem sua mente. Você precisa organizá-los.',
          fr: 'Des pensées confuses remplissent votre esprit. Vous devez les organiser.',
          de: 'Verwirrte Gedanken füllen Ihren Geist. Sie müssen sie ordnen.'
        }
      },
      { // 2
        keywords: {
          ko: ['결정 장애', '교착 상태', '균형', '선택'],
          en: ['indecision', 'stalemate', 'balance', 'choices'],
          ja: ['決断できない', '膠着状態', 'バランス', '選択'],
          es: ['indecisión', 'punto muerto', 'equilibrio', 'elecciones'],
          pt: ['indecisão', 'impasse', 'equilíbrio', 'escolhas'],
          fr: ['indécision', 'impasse', 'équilibre', 'choix'],
          de: ['Unentschlossenheit', 'Pattsituation', 'Gleichgewicht', 'Entscheidungen']
        },
        upright: {
          ko: '두 가지 사이에서 결정을 내리지 못하고 있습니다. 직관과 논리를 함께 사용하세요.',
          en: 'You can\'t decide between two options. Use both intuition and logic.',
          ja: '二つの選択肢の間で決断できずにいます。直感と論理を併用しましょう。',
          es: 'No puedes decidir entre dos opciones. Usa tanto la intuición como la lógica.',
          pt: 'Você não consegue decidir entre duas opções. Use tanto a intuição quanto a lógica.',
          fr: 'Vous ne pouvez pas décider entre deux options. Utilisez à la fois l\'intuition et la logique.',
          de: 'Sie können sich nicht zwischen zwei Optionen entscheiden. Nutzen Sie sowohl Intuition als auch Logik.'
        },
        reversed: {
          ko: '결정을 더 이상 미루지 마세요. 어떤 선택이든 행동이 필요합니다.',
          en: 'Don\'t delay your decision any longer. Any choice requires action.',
          ja: '決断をこれ以上先延ばしにしないでください。どんな選択でも行動が必要です。',
          es: 'No retrases más tu decisión. Cualquier elección requiere acción.',
          pt: 'Não adie mais sua decisão. Qualquer escolha requer ação.',
          fr: 'Ne retardez plus votre décision. Tout choix nécessite une action.',
          de: 'Verzögern Sie Ihre Entscheidung nicht länger. Jede Wahl erfordert Handeln.'
        }
      },
      { // 3
        keywords: {
          ko: ['상심', '이별', '고통', '교훈'],
          en: ['heartbreak', 'separation', 'pain', 'lesson'],
          ja: ['悲嘆', '別離', '苦痛', '教訓'],
          es: ['desamor', 'separación', 'dolor', 'lección'],
          pt: ['desilusão', 'separação', 'dor', 'lição'],
          fr: ['chagrin', 'séparation', 'douleur', 'leçon'],
          de: ['Herzschmerz', 'Trennung', 'Schmerz', 'Lektion']
        },
        upright: {
          ko: '마음에 깊은 상처를 받을 수 있습니다. 하지만 이 고통에서 성장할 수 있습니다.',
          en: 'You may suffer deep heartbreak. But you can grow from this pain.',
          ja: '心に深い傷を受けるかもしれません。しかし、この苦痛から成長できます。',
          es: 'Puedes sufrir un profundo desamor. Pero puedes crecer a partir de este dolor.',
          pt: 'Você pode sofrer uma profunda desilusão. Mas pode crescer com essa dor.',
          fr: 'Vous pourriez souffrir d\'un profond chagrin. Mais vous pouvez grandir de cette douleur.',
          de: 'Sie könnten tiefen Herzschmerz erleiden. Aber Sie können an diesem Schmerz wachsen.'
        },
        reversed: {
          ko: '상처에서 회복되고 있습니다. 자신을 용서하고 앞으로 나아가세요.',
          en: 'You are recovering from hurt. Forgive yourself and move forward.',
          ja: '傷から回復しています。自分を許して前に進みましょう。',
          es: 'Te estás recuperando de la herida. Perdónate y sigue adelante.',
          pt: 'Você está se recuperando da ferida. Perdoe-se e siga em frente.',
          fr: 'Vous vous remettez de la blessure. Pardonnez-vous et avancez.',
          de: 'Sie erholen sich von der Verletzung. Vergeben Sie sich selbst und gehen Sie voran.'
        }
      },
      { // 4
        keywords: {
          ko: ['휴식', '회복', '명상', '재충전'],
          en: ['rest', 'recovery', 'meditation', 'recharge'],
          ja: ['休息', '回復', '瞑想', '充電'],
          es: ['descanso', 'recuperación', 'meditación', 'recarga'],
          pt: ['descanso', 'recuperação', 'meditação', 'recarga'],
          fr: ['repos', 'récupération', 'méditation', 'recharge'],
          de: ['Ruhe', 'Erholung', 'Meditation', 'Aufladen']
        },
        upright: {
          ko: '몸과 마음에 휴식이 필요합니다. 잠시 쉬면서 에너지를 회복하세요.',
          en: 'Your body and mind need rest. Take a break and restore your energy.',
          ja: '体と心に休息が必要です。少し休んでエネルギーを回復しましょう。',
          es: 'Tu cuerpo y mente necesitan descanso. Tómate un respiro y restaura tu energía.',
          pt: 'Seu corpo e mente precisam de descanso. Faça uma pausa e restaure sua energia.',
          fr: 'Votre corps et votre esprit ont besoin de repos. Faites une pause et restaurez votre énergie.',
          de: 'Ihr Körper und Geist brauchen Ruhe. Machen Sie eine Pause und tanken Sie neue Energie.'
        },
        reversed: {
          ko: '너무 오래 쉬고 있지는 않나요? 다시 일어나서 행동할 때입니다.',
          en: 'Have you been resting too long? It\'s time to get up and take action.',
          ja: '休みすぎていませんか？立ち上がって行動する時です。',
          es: '¿Has descansado demasiado? Es hora de levantarte y actuar.',
          pt: 'Descansou demais? É hora de se levantar e agir.',
          fr: 'Avez-vous trop reposé ? Il est temps de vous lever et d\'agir.',
          de: 'Haben Sie zu lange geruht? Es ist Zeit aufzustehen und zu handeln.'
        }
      },
      { // 5
        keywords: {
          ko: ['패배', '갈등', '비열함', '자존심'],
          en: ['defeat', 'conflict', 'dishonor', 'ego'],
          ja: ['敗北', '葛藤', '卑劣', 'プライド'],
          es: ['derrota', 'conflicto', 'deshonra', 'ego'],
          pt: ['derrota', 'conflito', 'desonra', 'ego'],
          fr: ['défaite', 'conflit', 'déshonneur', 'ego'],
          de: ['Niederlage', 'Konflikt', 'Unehre', 'Ego']
        },
        upright: {
          ko: '갈등에서 승리해도 정말 이긴 것인가요? 진정한 승리는 품위에 있습니다.',
          en: 'Even if you win the conflict, have you truly won? True victory lies in dignity.',
          ja: '葛藤に勝っても本当に勝ったのでしょうか？本当の勝利は品位にあります。',
          es: 'Aunque ganes el conflicto, ¿has ganado realmente? La verdadera victoria está en la dignidad.',
          pt: 'Mesmo vencendo o conflito, você realmente ganhou? A verdadeira vitória está na dignidade.',
          fr: 'Même si vous gagnez le conflit, avez-vous vraiment gagné ? La vraie victoire réside dans la dignité.',
          de: 'Selbst wenn Sie den Konflikt gewinnen, haben Sie wirklich gewonnen? Wahrer Sieg liegt in der Würde.'
        },
        reversed: {
          ko: '불필요한 싸움에서 물러나세요. 화해의 길을 찾아보세요.',
          en: 'Step back from unnecessary fights. Look for the path of reconciliation.',
          ja: '不必要な争いから身を引きましょう。和解の道を探してみてください。',
          es: 'Retírate de peleas innecesarias. Busca el camino de la reconciliación.',
          pt: 'Recue-se de brigas desnecessárias. Procure o caminho da reconciliação.',
          fr: 'Retirez-vous des combats inutiles. Cherchez le chemin de la réconciliation.',
          de: 'Treten Sie von unnötigen Kämpfen zurück. Suchen Sie den Weg der Versöhnung.'
        }
      },
      { // 6
        keywords: {
          ko: ['이동', '전환기', '치유', '회복'],
          en: ['transition', 'moving on', 'healing', 'recovery'],
          ja: ['移動', '転換期', '癒し', '回復'],
          es: ['transición', 'avance', 'sanación', 'recuperación'],
          pt: ['transição', 'avanço', 'cura', 'recuperação'],
          fr: ['transition', 'avancée', 'guérison', 'récupération'],
          de: ['Übergang', 'Weitergehen', 'Heilung', 'Erholung']
        },
        upright: {
          ko: '어려운 시기를 지나 더 나은 곳으로 이동하고 있습니다. 치유의 여정을 믿으세요.',
          en: 'You\'re moving to a better place after hard times. Trust the healing journey.',
          ja: '困難な時期を過ぎ、より良い場所へ移動しています。癒しの旅を信じましょう。',
          es: 'Te estás moviendo a un lugar mejor después de tiempos difíciles. Confía en el viaje de sanación.',
          pt: 'Você está se movendo para um lugar melhor após tempos difíceis. Confie na jornada de cura.',
          fr: 'Vous allez vers un endroit meilleur après des temps difficiles. Faites confiance au voyage de guérison.',
          de: 'Sie bewegen sich nach schweren Zeiten an einen besseren Ort. Vertrauen Sie dem Heilungsweg.'
        },
        reversed: {
          ko: '변화를 두려워하지 마세요. 과거의 문제를 끌고 가지 않도록 주의하세요.',
          en: 'Don\'t fear change. Be careful not to carry past problems with you.',
          ja: '変化を恐れないでください。過去の問題を引きずらないように注意しましょう。',
          es: 'No temas el cambio. Ten cuidado de no cargar con problemas del pasado.',
          pt: 'Não tenha medo da mudança. Cuidado para não carregar problemas do passado.',
          fr: 'N\'ayez pas peur du changement. Veillez à ne pas emporter les problèmes du passé.',
          de: 'Fürchten Sie den Wandel nicht. Achten Sie darauf, vergangene Probleme nicht mitzunehmen.'
        }
      },
      { // 7
        keywords: {
          ko: ['전략', '속임', '기지', '계략'],
          en: ['strategy', 'deception', 'wit', 'schemes'],
          ja: ['戦略', '欺瞞', '機知', '策略'],
          es: ['estrategia', 'engaño', 'ingenio', 'maquinaciones'],
          pt: ['estratégia', 'engano', 'astúcia', 'esquemas'],
          fr: ['stratégie', 'tromperie', 'esprit', 'stratagèmes'],
          de: ['Strategie', 'Täuschung', 'Witz', 'Pläne']
        },
        upright: {
          ko: '지략이 필요한 상황입니다. 단, 정직한 방법으로 해결하세요.',
          en: 'This situation requires strategy. Just make sure to resolve it honestly.',
          ja: '知略が必要な状況です。ただし、正直な方法で解決しましょう。',
          es: 'Esta situación requiere estrategia. Solo asegúrate de resolverla honestamente.',
          pt: 'Esta situação requer estratégia. Apenas certifique-se de resolvê-la honestamente.',
          fr: 'Cette situation nécessite de la stratégie. Assurez-vous simplement de la résoudre honnêtement.',
          de: 'Diese Situation erfordert Strategie. Achten Sie nur darauf, sie ehrlich zu lösen.'
        },
        reversed: {
          ko: '속임수가 들통날 수 있습니다. 정직이 최선의 방책입니다.',
          en: 'Deception may be exposed. Honesty is the best policy.',
          ja: '欺瞞が露見するかもしれません。正直が最善の方策です。',
          es: 'El engaño puede ser descubierto. La honestidad es la mejor política.',
          pt: 'O engano pode ser descoberto. A honestidade é a melhor política.',
          fr: 'La tromperie peut être découverte. L\'honnêteté est la meilleure politique.',
          de: 'Täuschung könnte aufgedeckt werden. Ehrlichkeit ist die beste Strategie.'
        }
      },
      { // 8
        keywords: {
          ko: ['속박', '제한', '무력감', '자기 제한'],
          en: ['restriction', 'limitation', 'helplessness', 'self-limitation'],
          ja: ['束縛', '制限', '無力感', '自己制限'],
          es: ['restricción', 'limitación', 'impotencia', 'autolimitación'],
          pt: ['restrição', 'limitação', 'impotência', 'autolimitação'],
          fr: ['restriction', 'limitation', 'impuissance', 'autolimitation'],
          de: ['Einschränkung', 'Begrenzung', 'Hilflosigkeit', 'Selbstbegrenzung']
        },
        upright: {
          ko: '자신이 만든 한계에 갇혀 있습니다. 당신을 묶는 것은 바로 생각입니다.',
          en: 'You are trapped by self-imposed limits. What binds you is your own thinking.',
          ja: '自分が作った限界に閉じ込められています。あなたを縛っているのは思考そのものです。',
          es: 'Estás atrapado por límites autoimpuestos. Lo que te ata es tu propio pensamiento.',
          pt: 'Você está preso por limites autoimpostos. O que o prende é seu próprio pensamento.',
          fr: 'Vous êtes piégé par des limites auto-imposées. Ce qui vous lie est votre propre pensée.',
          de: 'Sie sind in selbst auferlegten Grenzen gefangen. Was Sie bindet, ist Ihr eigenes Denken.'
        },
        reversed: {
          ko: '속박에서 벗어나기 시작합니다. 새로운 관점이 자유를 가져다줍니다.',
          en: 'You begin to break free from restrictions. A new perspective brings freedom.',
          ja: '束縛から解放され始めています。新しい視点が自由をもたらします。',
          es: 'Empiezas a liberarte de las restricciones. Una nueva perspectiva trae libertad.',
          pt: 'Você começa a se libertar das restrições. Uma nova perspectiva traz liberdade.',
          fr: 'Vous commencez à vous libérer des restrictions. Une nouvelle perspective apporte la liberté.',
          de: 'Sie beginnen, sich von Einschränkungen zu befreien. Eine neue Perspektive bringt Freiheit.'
        }
      },
      { // 9
        keywords: {
          ko: ['불안', '걱정', '악몽', '스트레스'],
          en: ['anxiety', 'worry', 'nightmares', 'stress'],
          ja: ['不安', '心配', '悪夢', 'ストレス'],
          es: ['ansiedad', 'preocupación', 'pesadillas', 'estrés'],
          pt: ['ansiedade', 'preocupação', 'pesadelos', 'estresse'],
          fr: ['anxiété', 'inquiétude', 'cauchemars', 'stress'],
          de: ['Angst', 'Sorge', 'Albträume', 'Stress']
        },
        upright: {
          ko: '걱정과 불안이 잠을 방해하고 있습니다. 대부분의 걱정은 현실이 되지 않습니다.',
          en: 'Worry and anxiety disturb your sleep. Most worries never become reality.',
          ja: '心配と不安が眠りを妨げています。ほとんどの心配事は現実になりません。',
          es: 'La preocupación y la ansiedad perturban tu sueño. La mayoría de las preocupaciones nunca se hacen realidad.',
          pt: 'Preocupação e ansiedade perturbam seu sono. A maioria das preocupações nunca se torna realidade.',
          fr: 'L\'inquiétude et l\'anxiété perturbent votre sommeil. La plupart des soucis ne se réalisent jamais.',
          de: 'Sorgen und Ängste stören Ihren Schlaf. Die meisten Sorgen werden nie Wirklichkeit.'
        },
        reversed: {
          ko: '불안에서 벗어나고 있습니다. 희망의 빛이 보이기 시작합니다.',
          en: 'You are breaking free from anxiety. A light of hope begins to appear.',
          ja: '不安から解放されつつあります。希望の光が見え始めています。',
          es: 'Te estás liberando de la ansiedad. Una luz de esperanza comienza a aparecer.',
          pt: 'Você está se libertando da ansiedade. Uma luz de esperança começa a aparecer.',
          fr: 'Vous vous libérez de l\'anxiété. Une lueur d\'espoir commence à apparaître.',
          de: 'Sie befreien sich von der Angst. Ein Licht der Hoffnung beginnt zu erscheinen.'
        }
      },
      { // 10
        keywords: {
          ko: ['끝', '바닥', '해방', '새벽'],
          en: ['ending', 'rock bottom', 'release', 'dawn'],
          ja: ['終わり', 'どん底', '解放', '夜明け'],
          es: ['final', 'fondo', 'liberación', 'amanecer'],
          pt: ['final', 'fundo do poço', 'liberação', 'amanhecer'],
          fr: ['fin', 'fond', 'libération', 'aube'],
          de: ['Ende', 'Tiefpunkt', 'Befreiung', 'Morgendämmerung']
        },
        upright: {
          ko: '가장 힘든 시기이지만, 이것이 끝입니다. 여기서부터 회복이 시작됩니다.',
          en: 'This is the hardest point, but it\'s the end. Recovery starts from here.',
          ja: '最もつらい時期ですが、これが終わりです。ここから回復が始まります。',
          es: 'Es el punto más difícil, pero es el final. La recuperación comienza desde aquí.',
          pt: 'É o ponto mais difícil, mas é o final. A recuperação começa a partir daqui.',
          fr: 'C\'est le point le plus difficile, mais c\'est la fin. La guérison commence ici.',
          de: 'Dies ist der schwierigste Punkt, aber es ist das Ende. Die Erholung beginnt von hier.'
        },
        reversed: {
          ko: '최악의 시기는 지났습니다. 서서히 일어서고 있습니다.',
          en: 'The worst is behind you. You are slowly rising again.',
          ja: '最悪の時期は過ぎました。徐々に立ち上がっています。',
          es: 'Lo peor ha quedado atrás. Estás levantándote lentamente.',
          pt: 'O pior ficou para trás. Você está se levantando lentamente.',
          fr: 'Le pire est derrière vous. Vous vous relevez lentement.',
          de: 'Das Schlimmste liegt hinter Ihnen. Sie stehen langsam wieder auf.'
        }
      },
      { // Page (11)
        keywords: {
          ko: ['호기심', '관찰', '새 정보', '경계'],
          en: ['curiosity', 'observation', 'new information', 'vigilance'],
          ja: ['好奇心', '観察', '新しい情報', '警戒'],
          es: ['curiosidad', 'observación', 'nueva información', 'vigilancia'],
          pt: ['curiosidade', 'observação', 'nova informação', 'vigilância'],
          fr: ['curiosité', 'observation', 'nouvelle information', 'vigilance'],
          de: ['Neugier', 'Beobachtung', 'neue Information', 'Wachsamkeit']
        },
        upright: {
          ko: '예리한 관찰력으로 중요한 정보를 얻게 됩니다. 주변을 잘 살피세요.',
          en: 'Your sharp observation will yield important information. Watch your surroundings carefully.',
          ja: '鋭い観察力で重要な情報を得ることになります。周りをよく見てください。',
          es: 'Tu aguda observación te dará información importante. Vigila tu entorno cuidadosamente.',
          pt: 'Sua observação aguçada lhe dará informações importantes. Observe seu entorno cuidadosamente.',
          fr: 'Votre observation aiguë vous apportera des informations importantes. Surveillez attentivement votre entourage.',
          de: 'Ihre scharfe Beobachtung wird wichtige Informationen liefern. Beobachten Sie Ihre Umgebung sorgfältig.'
        },
        reversed: {
          ko: '검증되지 않은 정보에 주의하세요. 소문에 휘둘리지 마세요.',
          en: 'Be cautious of unverified information. Don\'t be swayed by rumors.',
          ja: '検証されていない情報に注意してください。噂に振り回されないでください。',
          es: 'Ten cuidado con la información no verificada. No te dejes llevar por los rumores.',
          pt: 'Cuidado com informações não verificadas. Não se deixe levar por rumores.',
          fr: 'Méfiez-vous des informations non vérifiées. Ne vous laissez pas influencer par les rumeurs.',
          de: 'Seien Sie vorsichtig mit unverifizierten Informationen. Lassen Sie sich nicht von Gerüchten beeinflussen.'
        }
      },
      { // Knight (12)
        keywords: {
          ko: ['결단력', '직진', '논쟁', '성급함'],
          en: ['decisiveness', 'directness', 'debate', 'haste'],
          ja: ['決断力', '直進', '論争', '性急さ'],
          es: ['decisión', 'franqueza', 'debate', 'prisa'],
          pt: ['decisão', 'franqueza', 'debate', 'pressa'],
          fr: ['décision', 'franchise', 'débat', 'hâte'],
          de: ['Entschlossenheit', 'Direktheit', 'Debatte', 'Eile']
        },
        upright: {
          ko: '강한 결단력으로 목표를 향해 돌진하세요. 단, 남을 배려하는 것도 잊지 마세요.',
          en: 'Charge toward your goal with strong decisiveness. Just don\'t forget to consider others.',
          ja: '強い決断力で目標に向かって突進しましょう。ただし、他者への配慮も忘れずに。',
          es: 'Avanza hacia tu meta con fuerte decisión. Solo no olvides considerar a los demás.',
          pt: 'Avance em direção ao seu objetivo com forte determinação. Só não esqueça de considerar os outros.',
          fr: 'Foncez vers votre objectif avec une forte détermination. N\'oubliez pas de tenir compte des autres.',
          de: 'Stürmen Sie mit starker Entschlossenheit auf Ihr Ziel zu. Vergessen Sie nur nicht, andere zu berücksichtigen.'
        },
        reversed: {
          ko: '너무 날카롭게 행동하고 있습니다. 말과 행동에 신중함이 필요합니다.',
          en: 'You are being too sharp. Prudence in words and actions is needed.',
          ja: '鋭すぎる行動をしています。言葉と行動に慎重さが必要です。',
          es: 'Estás siendo demasiado afilado. Se necesita prudencia en palabras y acciones.',
          pt: 'Você está sendo muito afiado. Prudência nas palavras e ações é necessária.',
          fr: 'Vous êtes trop tranchant. La prudence dans les mots et les actes est nécessaire.',
          de: 'Sie sind zu scharf. Umsicht in Worten und Taten ist nötig.'
        }
      },
      { // Queen (13)
        keywords: {
          ko: ['지성', '독립', '명석함', '경험'],
          en: ['intellect', 'independence', 'sharp mind', 'experience'],
          ja: ['知性', '独立', '明晰さ', '経験'],
          es: ['intelecto', 'independencia', 'mente aguda', 'experiencia'],
          pt: ['intelecto', 'independência', 'mente afiada', 'experiência'],
          fr: ['intellect', 'indépendance', 'esprit vif', 'expérience'],
          de: ['Intellekt', 'Unabhängigkeit', 'scharfer Verstand', 'Erfahrung']
        },
        upright: {
          ko: '명석한 판단력으로 진실을 꿰뚫어 보세요. 감정에 흔들리지 마세요.',
          en: 'See through to the truth with sharp judgment. Don\'t be swayed by emotions.',
          ja: '明晰な判断力で真実を見抜きましょう。感情に揺さぶられないでください。',
          es: 'Penetra hasta la verdad con juicio agudo. No te dejes llevar por las emociones.',
          pt: 'Veja a verdade com julgamento afiado. Não se deixe levar pelas emoções.',
          fr: 'Percez la vérité avec un jugement aiguisé. Ne vous laissez pas influencer par les émotions.',
          de: 'Durchschauen Sie die Wahrheit mit scharfem Urteilsvermögen. Lassen Sie sich nicht von Emotionen beeinflussen.'
        },
        reversed: {
          ko: '지나치게 냉정한 태도가 관계를 해칠 수 있습니다. 따뜻함도 필요합니다.',
          en: 'Being overly cold may harm relationships. Warmth is also needed.',
          ja: '冷たすぎる態度が関係を損なう可能性があります。温かさも必要です。',
          es: 'Ser demasiado frío puede dañar las relaciones. También se necesita calidez.',
          pt: 'Ser excessivamente frio pode prejudicar relacionamentos. Calor também é necessário.',
          fr: 'Être trop froid peut nuire aux relations. La chaleur est aussi nécessaire.',
          de: 'Übermäßige Kälte kann Beziehungen schaden. Wärme ist auch nötig.'
        }
      },
      { // King (14)
        keywords: {
          ko: ['권위', '논리', '공정', '지적 리더십'],
          en: ['authority', 'logic', 'fairness', 'intellectual leadership'],
          ja: ['権威', '論理', '公正', '知的リーダーシップ'],
          es: ['autoridad', 'lógica', 'justicia', 'liderazgo intelectual'],
          pt: ['autoridade', 'lógica', 'justiça', 'liderança intelectual'],
          fr: ['autorité', 'logique', 'équité', 'leadership intellectuel'],
          de: ['Autorität', 'Logik', 'Fairness', 'intellektuelle Führung']
        },
        upright: {
          ko: '논리와 공정함으로 판단하세요. 명확한 소통이 성공의 열쇠입니다.',
          en: 'Judge with logic and fairness. Clear communication is the key to success.',
          ja: '論理と公正さで判断しましょう。明確なコミュニケーションが成功の鍵です。',
          es: 'Juzga con lógica y justicia. La comunicación clara es la clave del éxito.',
          pt: 'Julgue com lógica e justiça. A comunicação clara é a chave do sucesso.',
          fr: 'Jugez avec logique et équité. Une communication claire est la clé du succès.',
          de: 'Urteilen Sie mit Logik und Fairness. Klare Kommunikation ist der Schlüssel zum Erfolg.'
        },
        reversed: {
          ko: '권력을 남용하거나 지나치게 비판적이 되고 있습니다. 자비를 잊지 마세요.',
          en: 'You are abusing power or being overly critical. Don\'t forget mercy.',
          ja: '権力を乱用したり、過度に批判的になっています。慈悲を忘れないでください。',
          es: 'Estás abusando del poder o siendo excesivamente crítico. No olvides la misericordia.',
          pt: 'Você está abusando do poder ou sendo excessivamente crítico. Não esqueça a misericórdia.',
          fr: 'Vous abusez du pouvoir ou êtes trop critique. N\'oubliez pas la miséricorde.',
          de: 'Sie missbrauchen Macht oder sind übermäßig kritisch. Vergessen Sie die Barmherzigkeit nicht.'
        }
      }
    ],

    /* ===== PENTACLES (땅 - 물질, 재정, 건강, 현실) ===== */
    pentacles: [
      { // Ace
        keywords: {
          ko: ['새 기회', '번영', '물질적 시작', '잠재력'],
          en: ['new opportunity', 'prosperity', 'material beginning', 'potential'],
          ja: ['新しい機会', '繁栄', '物質的な始まり', '可能性'],
          es: ['nueva oportunidad', 'prosperidad', 'comienzo material', 'potencial'],
          pt: ['nova oportunidade', 'prosperidade', 'começo material', 'potencial'],
          fr: ['nouvelle opportunité', 'prospérité', 'début matériel', 'potentiel'],
          de: ['neue Gelegenheit', 'Wohlstand', 'materieller Anfang', 'Potenzial']
        },
        upright: {
          ko: '물질적 풍요의 씨앗이 심어졌습니다. 현실적인 기회를 잡으세요.',
          en: 'A seed of material abundance has been planted. Seize the practical opportunity.',
          ja: '物質的な豊かさの種が蒔かれました。現実的な機会を掴みましょう。',
          es: 'Una semilla de abundancia material ha sido plantada. Aprovecha la oportunidad práctica.',
          pt: 'Uma semente de abundância material foi plantada. Aproveite a oportunidade prática.',
          fr: 'Une graine d\'abondance matérielle a été plantée. Saisissez l\'opportunité pratique.',
          de: 'Ein Samen materiellen Überflusses wurde gepflanzt. Ergreifen Sie die praktische Gelegenheit.'
        },
        reversed: {
          ko: '좋은 기회를 놓치고 있거나 재정 계획이 부실합니다. 현실을 직시하세요.',
          en: 'You\'re missing good opportunities or your financial planning is poor. Face reality.',
          ja: '良い機会を逃しているか、財務計画が不十分です。現実を直視しましょう。',
          es: 'Estás perdiendo buenas oportunidades o tu planificación financiera es deficiente. Enfrenta la realidad.',
          pt: 'Você está perdendo boas oportunidades ou seu planejamento financeiro é fraco. Encare a realidade.',
          fr: 'Vous ratez de bonnes opportunités ou votre planification financière est insuffisante. Faites face à la réalité.',
          de: 'Sie verpassen gute Gelegenheiten oder Ihre Finanzplanung ist mangelhaft. Sehen Sie der Realität ins Auge.'
        }
      },
      { // 2
        keywords: {
          ko: ['균형', '적응', '우선순위', '유연성'],
          en: ['balance', 'adaptability', 'priorities', 'flexibility'],
          ja: ['バランス', '適応', '優先順位', '柔軟性'],
          es: ['equilibrio', 'adaptabilidad', 'prioridades', 'flexibilidad'],
          pt: ['equilíbrio', 'adaptabilidade', 'prioridades', 'flexibilidade'],
          fr: ['équilibre', 'adaptabilité', 'priorités', 'flexibilité'],
          de: ['Gleichgewicht', 'Anpassungsfähigkeit', 'Prioritäten', 'Flexibilität']
        },
        upright: {
          ko: '여러 일을 동시에 처리해야 합니다. 유연하게 균형을 잡으세요.',
          en: 'You must juggle multiple tasks. Find balance with flexibility.',
          ja: '複数のことを同時に処理する必要があります。柔軟にバランスを取りましょう。',
          es: 'Debes manejar múltiples tareas. Encuentra el equilibrio con flexibilidad.',
          pt: 'Você deve lidar com múltiplas tarefas. Encontre equilíbrio com flexibilidade.',
          fr: 'Vous devez jongler avec plusieurs tâches. Trouvez l\'équilibre avec flexibilité.',
          de: 'Sie müssen mehrere Aufgaben gleichzeitig bewältigen. Finden Sie mit Flexibilität das Gleichgewicht.'
        },
        reversed: {
          ko: '너무 많은 것을 한꺼번에 하려다 혼란에 빠지고 있습니다. 우선순위를 정하세요.',
          en: 'Trying to do too much at once leads to chaos. Set your priorities.',
          ja: '一度に多くのことをやろうとして混乱に陥っています。優先順位を決めましょう。',
          es: 'Intentar hacer demasiado a la vez lleva al caos. Establece tus prioridades.',
          pt: 'Tentar fazer demais de uma vez leva ao caos. Defina suas prioridades.',
          fr: 'Essayer de tout faire en même temps mène au chaos. Établissez vos priorités.',
          de: 'Der Versuch, zu viel auf einmal zu tun, führt zu Chaos. Setzen Sie Prioritäten.'
        }
      },
      { // 3
        keywords: {
          ko: ['장인 정신', '팀워크', '기술', '성장'],
          en: ['craftsmanship', 'teamwork', 'skill', 'growth'],
          ja: ['職人精神', 'チームワーク', '技術', '成長'],
          es: ['artesanía', 'trabajo en equipo', 'habilidad', 'crecimiento'],
          pt: ['artesanato', 'trabalho em equipe', 'habilidade', 'crescimento'],
          fr: ['artisanat', 'travail d\'équipe', 'compétence', 'croissance'],
          de: ['Handwerkskunst', 'Teamarbeit', 'Geschick', 'Wachstum']
        },
        upright: {
          ko: '전문성을 인정받고 있습니다. 팀과 협력하여 더 큰 성과를 이루세요.',
          en: 'Your expertise is being recognized. Collaborate with your team for greater results.',
          ja: '専門性が認められています。チームと協力してより大きな成果を上げましょう。',
          es: 'Tu experiencia está siendo reconocida. Colabora con tu equipo para lograr mejores resultados.',
          pt: 'Sua expertise está sendo reconhecida. Colabore com sua equipe para melhores resultados.',
          fr: 'Votre expertise est reconnue. Collaborez avec votre équipe pour de meilleurs résultats.',
          de: 'Ihre Expertise wird anerkannt. Arbeiten Sie mit Ihrem Team für größere Ergebnisse zusammen.'
        },
        reversed: {
          ko: '품질에 타협하지 마세요. 기초를 다시 다질 때입니다.',
          en: 'Don\'t compromise on quality. It\'s time to rebuild the foundation.',
          ja: '品質に妥協しないでください。基礎を再構築する時です。',
          es: 'No comprometas la calidad. Es hora de reconstruir la base.',
          pt: 'Não comprometa a qualidade. É hora de reconstruir a base.',
          fr: 'Ne compromettez pas la qualité. Il est temps de reconstruire les bases.',
          de: 'Machen Sie keine Kompromisse bei der Qualität. Es ist Zeit, das Fundament neu aufzubauen.'
        }
      },
      { // 4
        keywords: {
          ko: ['절약', '안정', '소유', '인색'],
          en: ['saving', 'security', 'possession', 'stinginess'],
          ja: ['節約', '安定', '所有', 'けち'],
          es: ['ahorro', 'seguridad', 'posesión', 'tacañería'],
          pt: ['economia', 'segurança', 'posse', 'avareza'],
          fr: ['épargne', 'sécurité', 'possession', 'avarice'],
          de: ['Sparen', 'Sicherheit', 'Besitz', 'Geiz']
        },
        upright: {
          ko: '재정적 안정을 위해 절약하고 보존하세요. 하지만 지나친 집착은 경계하세요.',
          en: 'Save and conserve for financial security. But beware of excessive attachment.',
          ja: '財政的安定のために節約し保全しましょう。ただし過度な執着には注意してください。',
          es: 'Ahorra y conserva para la seguridad financiera. Pero cuidado con el apego excesivo.',
          pt: 'Economize e conserve para segurança financeira. Mas cuidado com apego excessivo.',
          fr: 'Épargnez et conservez pour la sécurité financière. Mais attention à l\'attachement excessif.',
          de: 'Sparen und bewahren Sie für finanzielle Sicherheit. Aber hüten Sie sich vor übermäßiger Anhaftung.'
        },
        reversed: {
          ko: '너무 움켜쥐고 있으면 잃게 됩니다. 나눔의 기쁨을 알아보세요.',
          en: 'Holding too tightly leads to loss. Discover the joy of giving.',
          ja: '握りしめすぎると失います。分かち合う喜びを知りましょう。',
          es: 'Agarrar con demasiada fuerza lleva a la pérdida. Descubre la alegría de dar.',
          pt: 'Segurar com muita força leva à perda. Descubra a alegria de dar.',
          fr: 'Serrer trop fort mène à la perte. Découvrez la joie de donner.',
          de: 'Zu fest festzuhalten führt zum Verlust. Entdecken Sie die Freude am Geben.'
        }
      },
      { // 5
        keywords: {
          ko: ['궁핍', '어려움', '고립', '걱정'],
          en: ['hardship', 'difficulty', 'isolation', 'worry'],
          ja: ['窮乏', '困難', '孤立', '心配'],
          es: ['penuria', 'dificultad', 'aislamiento', 'preocupación'],
          pt: ['penúria', 'dificuldade', 'isolamento', 'preocupação'],
          fr: ['pénurie', 'difficulté', 'isolement', 'inquiétude'],
          de: ['Not', 'Schwierigkeit', 'Isolation', 'Sorge']
        },
        upright: {
          ko: '물질적 어려움을 겪고 있습니다. 도움을 구하는 것은 부끄러운 일이 아닙니다.',
          en: 'You are going through material hardship. Seeking help is not shameful.',
          ja: '物質的な困難を経験しています。助けを求めることは恥ずかしいことではありません。',
          es: 'Estás pasando por dificultades materiales. Pedir ayuda no es vergonzoso.',
          pt: 'Você está passando por dificuldades materiais. Pedir ajuda não é vergonhoso.',
          fr: 'Vous traversez des difficultés matérielles. Demander de l\'aide n\'est pas honteux.',
          de: 'Sie durchleben materielle Schwierigkeiten. Hilfe zu suchen ist keine Schande.'
        },
        reversed: {
          ko: '어려운 시기에서 벗어나고 있습니다. 회복의 빛이 보입니다.',
          en: 'You are emerging from hard times. A light of recovery is visible.',
          ja: '困難な時期から抜け出しています。回復の光が見えます。',
          es: 'Estás saliendo de los tiempos difíciles. Una luz de recuperación es visible.',
          pt: 'Você está saindo de tempos difíceis. Uma luz de recuperação é visível.',
          fr: 'Vous sortez des temps difficiles. Une lumière de rétablissement est visible.',
          de: 'Sie kommen aus schweren Zeiten heraus. Ein Licht der Erholung ist sichtbar.'
        }
      },
      { // 6
        keywords: {
          ko: ['나눔', '관대함', '주고받음', '균형'],
          en: ['generosity', 'giving', 'exchange', 'balance'],
          ja: ['分かち合い', '寛大', 'やり取り', 'バランス'],
          es: ['generosidad', 'dar', 'intercambio', 'equilibrio'],
          pt: ['generosidade', 'dar', 'troca', 'equilíbrio'],
          fr: ['générosité', 'don', 'échange', 'équilibre'],
          de: ['Großzügigkeit', 'Geben', 'Austausch', 'Gleichgewicht']
        },
        upright: {
          ko: '주고받는 것의 균형이 이루어지고 있습니다. 관대함이 복을 부릅니다.',
          en: 'A balance of giving and receiving is being achieved. Generosity brings blessings.',
          ja: '与え合いのバランスが取れています。寛大さが福を呼びます。',
          es: 'Se está logrando un equilibrio entre dar y recibir. La generosidad trae bendiciones.',
          pt: 'Um equilíbrio entre dar e receber está sendo alcançado. A generosidade traz bênçãos.',
          fr: 'Un équilibre entre donner et recevoir s\'établit. La générosité attire les bénédictions.',
          de: 'Ein Gleichgewicht zwischen Geben und Nehmen wird erreicht. Großzügigkeit bringt Segen.'
        },
        reversed: {
          ko: '일방적인 관계에 있지 않나요? 공정한 교환이 필요합니다.',
          en: 'Are you in a one-sided relationship? Fair exchange is needed.',
          ja: '一方的な関係にいませんか？公正な交換が必要です。',
          es: '¿Estás en una relación unilateral? Se necesita un intercambio justo.',
          pt: 'Está em um relacionamento unilateral? Troca justa é necessária.',
          fr: 'Êtes-vous dans une relation à sens unique ? Un échange équitable est nécessaire.',
          de: 'Sind Sie in einer einseitigen Beziehung? Fairer Austausch ist nötig.'
        }
      },
      { // 7
        keywords: {
          ko: ['인내', '투자', '장기 계획', '평가'],
          en: ['patience', 'investment', 'long-term plan', 'evaluation'],
          ja: ['忍耐', '投資', '長期計画', '評価'],
          es: ['paciencia', 'inversión', 'plan a largo plazo', 'evaluación'],
          pt: ['paciência', 'investimento', 'plano de longo prazo', 'avaliação'],
          fr: ['patience', 'investissement', 'plan à long terme', 'évaluation'],
          de: ['Geduld', 'Investition', 'langfristiger Plan', 'Bewertung']
        },
        upright: {
          ko: '씨앗을 뿌리고 기다리는 시기입니다. 장기적 관점에서 인내하세요.',
          en: 'This is a time for planting seeds and waiting. Be patient with a long-term view.',
          ja: '種を蒔いて待つ時期です。長期的な視点で忍耐しましょう。',
          es: 'Es tiempo de sembrar semillas y esperar. Ten paciencia con una visión a largo plazo.',
          pt: 'É hora de semear e esperar. Tenha paciência com uma visão de longo prazo.',
          fr: 'C\'est le temps de semer et d\'attendre. Soyez patient avec une vision à long terme.',
          de: 'Es ist Zeit zu säen und zu warten. Seien Sie geduldig mit einer langfristigen Perspektive.'
        },
        reversed: {
          ko: '노력에 비해 결과가 나오지 않아 조급합니다. 방향을 점검해보세요.',
          en: 'Results don\'t match your effort, causing impatience. Review your direction.',
          ja: '努力に見合う結果が出ず焦っています。方向を点検してみましょう。',
          es: 'Los resultados no coinciden con tu esfuerzo, causando impaciencia. Revisa tu dirección.',
          pt: 'Os resultados não correspondem ao esforço, causando impaciência. Revise sua direção.',
          fr: 'Les résultats ne correspondent pas à vos efforts, causant de l\'impatience. Réévaluez votre direction.',
          de: 'Die Ergebnisse entsprechen nicht Ihrem Aufwand, was Ungeduld verursacht. Überprüfen Sie Ihre Richtung.'
        }
      },
      { // 8
        keywords: {
          ko: ['장인 정신', '숙련', '집중', '헌신'],
          en: ['mastery', 'skill', 'focus', 'dedication'],
          ja: ['匠の精神', '熟練', '集中', '献身'],
          es: ['maestría', 'habilidad', 'enfoque', 'dedicación'],
          pt: ['maestria', 'habilidade', 'foco', 'dedicação'],
          fr: ['maîtrise', 'compétence', 'concentration', 'dévouement'],
          de: ['Meisterschaft', 'Fertigkeit', 'Fokus', 'Hingabe']
        },
        upright: {
          ko: '기술을 갈고닦아 완벽함에 가까워지고 있습니다. 꾸준함이 빛을 발합니다.',
          en: 'You\'re honing your skills toward perfection. Consistency shines through.',
          ja: '技術を磨き、完璧に近づいています。着実さが光を放ちます。',
          es: 'Estás perfeccionando tus habilidades hacia la perfección. La constancia brilla.',
          pt: 'Você está aprimorando suas habilidades rumo à perfeição. A consistência brilha.',
          fr: 'Vous perfectionnez vos compétences vers l\'excellence. La constance brille.',
          de: 'Sie verfeinern Ihre Fähigkeiten auf dem Weg zur Perfektion. Beständigkeit strahlt.'
        },
        reversed: {
          ko: '지루함을 느끼거나 열정을 잃고 있습니다. 일의 의미를 되찾으세요.',
          en: 'You feel boredom or are losing passion. Rediscover the meaning in your work.',
          ja: '退屈を感じたり、情熱を失いつつあります。仕事の意味を再発見しましょう。',
          es: 'Sientes aburrimiento o estás perdiendo la pasión. Redescubre el significado de tu trabajo.',
          pt: 'Você sente tédio ou está perdendo a paixão. Redescubra o significado do seu trabalho.',
          fr: 'Vous ressentez de l\'ennui ou perdez votre passion. Redécouvrez le sens de votre travail.',
          de: 'Sie fühlen Langeweile oder verlieren die Leidenschaft. Entdecken Sie den Sinn Ihrer Arbeit wieder.'
        }
      },
      { // 9
        keywords: {
          ko: ['풍요', '독립', '자급자족', '성취'],
          en: ['abundance', 'independence', 'self-sufficiency', 'achievement'],
          ja: ['豊かさ', '独立', '自給自足', '達成'],
          es: ['abundancia', 'independencia', 'autosuficiencia', 'logro'],
          pt: ['abundância', 'independência', 'autossuficiência', 'conquista'],
          fr: ['abondance', 'indépendance', 'autosuffisance', 'réussite'],
          de: ['Fülle', 'Unabhängigkeit', 'Selbstgenügsamkeit', 'Leistung']
        },
        upright: {
          ko: '노력의 결실을 누리고 있습니다. 풍요로운 삶을 즐기세요.',
          en: 'You are enjoying the fruits of your labor. Savor the abundant life.',
          ja: '努力の成果を享受しています。豊かな生活を楽しみましょう。',
          es: 'Estás disfrutando los frutos de tu trabajo. Saborea la vida abundante.',
          pt: 'Você está desfrutando dos frutos do seu trabalho. Saboreie a vida abundante.',
          fr: 'Vous profitez des fruits de votre travail. Savourez la vie abondante.',
          de: 'Sie genießen die Früchte Ihrer Arbeit. Genießen Sie das reiche Leben.'
        },
        reversed: {
          ko: '물질적 성공에도 공허함을 느끼고 있습니다. 진정한 가치를 돌아보세요.',
          en: 'Despite material success, you feel empty. Reflect on true values.',
          ja: '物質的な成功にもかかわらず空虚を感じています。本当の価値を振り返りましょう。',
          es: 'A pesar del éxito material, te sientes vacío. Reflexiona sobre los valores verdaderos.',
          pt: 'Apesar do sucesso material, você se sente vazio. Reflita sobre os valores verdadeiros.',
          fr: 'Malgré le succès matériel, vous vous sentez vide. Réfléchissez aux vraies valeurs.',
          de: 'Trotz materiellen Erfolgs fühlen Sie sich leer. Besinnen Sie sich auf wahre Werte.'
        }
      },
      { // 10
        keywords: {
          ko: ['유산', '가문', '장기적 성공', '전통'],
          en: ['legacy', 'family', 'long-term success', 'tradition'],
          ja: ['遺産', '家族', '長期的な成功', '伝統'],
          es: ['legado', 'familia', 'éxito a largo plazo', 'tradición'],
          pt: ['legado', 'família', 'sucesso a longo prazo', 'tradição'],
          fr: ['héritage', 'famille', 'succès à long terme', 'tradition'],
          de: ['Vermächtnis', 'Familie', 'langfristiger Erfolg', 'Tradition']
        },
        upright: {
          ko: '오래된 노력이 풍요로운 결실을 맺습니다. 가족과 함께 성과를 나누세요.',
          en: 'Long effort bears abundant fruit. Share your success with family.',
          ja: '長年の努力が豊かな実を結びます。家族と成果を分かち合いましょう。',
          es: 'El esfuerzo prolongado da frutos abundantes. Comparte tu éxito con la familia.',
          pt: 'O esforço prolongado dá frutos abundantes. Compartilhe seu sucesso com a família.',
          fr: 'L\'effort prolongé porte des fruits abondants. Partagez votre succès avec votre famille.',
          de: 'Lange Anstrengung trägt reiche Früchte. Teilen Sie Ihren Erfolg mit der Familie.'
        },
        reversed: {
          ko: '가족 내 재정 문제나 유산 갈등이 있을 수 있습니다. 대화로 풀어가세요.',
          en: 'There may be family financial issues or inheritance conflicts. Resolve them through dialogue.',
          ja: '家族内の財政問題や遺産の葛藤があるかもしれません。対話で解決しましょう。',
          es: 'Puede haber problemas financieros familiares o conflictos de herencia. Resuélvelos a través del diálogo.',
          pt: 'Pode haver problemas financeiros familiares ou conflitos de herança. Resolva-os através do diálogo.',
          fr: 'Il peut y avoir des problèmes financiers familiaux ou des conflits d\'héritage. Résolvez-les par le dialogue.',
          de: 'Es kann familiäre Finanzprobleme oder Erbstreitigkeiten geben. Lösen Sie sie durch Dialog.'
        }
      },
      { // Page (11)
        keywords: {
          ko: ['학습', '실용성', '새 기술', '기회'],
          en: ['learning', 'practicality', 'new skill', 'opportunity'],
          ja: ['学習', '実用性', '新しいスキル', '機会'],
          es: ['aprendizaje', 'practicidad', 'nueva habilidad', 'oportunidad'],
          pt: ['aprendizado', 'praticidade', 'nova habilidade', 'oportunidade'],
          fr: ['apprentissage', 'praticité', 'nouvelle compétence', 'opportunité'],
          de: ['Lernen', 'Praktikabilität', 'neue Fähigkeit', 'Gelegenheit']
        },
        upright: {
          ko: '새로운 기술이나 지식을 배울 기회가 왔습니다. 성실하게 임하세요.',
          en: 'An opportunity to learn new skills or knowledge has arrived. Approach it diligently.',
          ja: '新しい技術や知識を学ぶ機会が来ました。真摯に取り組みましょう。',
          es: 'Ha llegado la oportunidad de aprender nuevas habilidades o conocimientos. Abórdalo con diligencia.',
          pt: 'Chegou a oportunidade de aprender novas habilidades ou conhecimentos. Aborde com diligência.',
          fr: 'L\'opportunité d\'apprendre de nouvelles compétences est arrivée. Abordez-la avec diligence.',
          de: 'Eine Gelegenheit, neue Fähigkeiten zu erlernen, ist gekommen. Gehen Sie sie fleißig an.'
        },
        reversed: {
          ko: '배움에 게으르거나 비현실적인 기대를 하고 있습니다. 기초부터 다지세요.',
          en: 'You\'re lazy about learning or have unrealistic expectations. Start with the basics.',
          ja: '学びに怠けているか、非現実的な期待をしています。基礎から固めましょう。',
          es: 'Eres perezoso en el aprendizaje o tienes expectativas irreales. Comienza con lo básico.',
          pt: 'Você está sendo preguiçoso no aprendizado ou tem expectativas irreais. Comece pelo básico.',
          fr: 'Vous êtes paresseux dans l\'apprentissage ou avez des attentes irréalistes. Commencez par les bases.',
          de: 'Sie sind beim Lernen faul oder haben unrealistische Erwartungen. Beginnen Sie mit den Grundlagen.'
        }
      },
      { // Knight (12)
        keywords: {
          ko: ['성실', '책임감', '효율', '인내'],
          en: ['diligence', 'responsibility', 'efficiency', 'patience'],
          ja: ['勤勉', '責任感', '効率', '忍耐'],
          es: ['diligencia', 'responsabilidad', 'eficiencia', 'paciencia'],
          pt: ['diligência', 'responsabilidade', 'eficiência', 'paciência'],
          fr: ['diligence', 'responsabilité', 'efficacité', 'patience'],
          de: ['Fleiß', 'Verantwortung', 'Effizienz', 'Geduld']
        },
        upright: {
          ko: '묵묵히 목표를 향해 나아가세요. 성실한 노력이 보상을 가져옵니다.',
          en: 'Move steadily toward your goal. Diligent effort brings reward.',
          ja: '黙々と目標に向かって進みましょう。勤勉な努力が報いをもたらします。',
          es: 'Avanza firmemente hacia tu meta. El esfuerzo diligente trae recompensa.',
          pt: 'Avance firmemente em direção ao seu objetivo. O esforço diligente traz recompensa.',
          fr: 'Avancez régulièrement vers votre objectif. L\'effort diligent apporte la récompense.',
          de: 'Bewegen Sie sich stetig auf Ihr Ziel zu. Fleißige Anstrengung bringt Belohnung.'
        },
        reversed: {
          ko: '게으름이나 완벽주의가 진행을 막고 있습니다. 움직이기 시작하세요.',
          en: 'Laziness or perfectionism is blocking progress. Start moving.',
          ja: '怠惰や完璧主義が進行を妨げています。動き始めましょう。',
          es: 'La pereza o el perfeccionismo están bloqueando el progreso. Empieza a moverte.',
          pt: 'Preguiça ou perfeccionismo estão bloqueando o progresso. Comece a se mover.',
          fr: 'La paresse ou le perfectionnisme bloque le progrès. Commencez à bouger.',
          de: 'Faulheit oder Perfektionismus blockieren den Fortschritt. Fangen Sie an, sich zu bewegen.'
        }
      },
      { // Queen (13)
        keywords: {
          ko: ['풍요', '실용', '돌봄', '안정감'],
          en: ['abundance', 'practicality', 'nurturing', 'security'],
          ja: ['豊かさ', '実用性', '思いやり', '安定感'],
          es: ['abundancia', 'practicidad', 'cuidado', 'seguridad'],
          pt: ['abundância', 'praticidade', 'cuidado', 'segurança'],
          fr: ['abondance', 'praticité', 'bienveillance', 'sécurité'],
          de: ['Fülle', 'Praktikabilität', 'Fürsorge', 'Sicherheit']
        },
        upright: {
          ko: '실용적 지혜로 풍요로운 환경을 만들어가세요. 따뜻한 돌봄이 빛납니다.',
          en: 'Create an abundant environment with practical wisdom. Your warm care shines.',
          ja: '実用的な知恵で豊かな環境を作りましょう。温かい思いやりが輝きます。',
          es: 'Crea un ambiente abundante con sabiduría práctica. Tu cálido cuidado brilla.',
          pt: 'Crie um ambiente abundante com sabedoria prática. Seu cuidado caloroso brilha.',
          fr: 'Créez un environnement abondant avec sagesse pratique. Votre attention chaleureuse rayonne.',
          de: 'Schaffen Sie eine reiche Umgebung mit praktischer Weisheit. Ihre warme Fürsorge strahlt.'
        },
        reversed: {
          ko: '타인을 위한다는 명목으로 자신을 소진시키고 있습니다. 자기 자신도 돌보세요.',
          en: 'You are depleting yourself in the name of caring for others. Take care of yourself too.',
          ja: '他者のためという名目で自分を消耗させています。自分自身も大切にしましょう。',
          es: 'Te estás agotando en nombre de cuidar a los demás. Cuídate a ti mismo también.',
          pt: 'Você está se esgotando em nome de cuidar dos outros. Cuide de si mesmo também.',
          fr: 'Vous vous épuisez au nom des soins aux autres. Prenez soin de vous aussi.',
          de: 'Sie erschöpfen sich im Namen der Fürsorge für andere. Kümmern Sie sich auch um sich selbst.'
        }
      },
      { // King (14)
        keywords: {
          ko: ['재정 전문가', '풍요', '사업 수완', '안정'],
          en: ['financial expert', 'wealth', 'business acumen', 'stability'],
          ja: ['財務の専門家', '富', 'ビジネスの才覚', '安定'],
          es: ['experto financiero', 'riqueza', 'perspicacia empresarial', 'estabilidad'],
          pt: ['especialista financeiro', 'riqueza', 'perspicácia nos negócios', 'estabilidade'],
          fr: ['expert financier', 'richesse', 'sens des affaires', 'stabilité'],
          de: ['Finanzexperte', 'Reichtum', 'Geschäftssinn', 'Stabilität']
        },
        upright: {
          ko: '재정적 지혜와 사업 수완으로 풍요를 이루세요. 안정적인 리더십을 발휘하세요.',
          en: 'Achieve wealth through financial wisdom and business acumen. Exercise stable leadership.',
          ja: '財務の知恵とビジネスの才覚で豊かさを築きましょう。安定したリーダーシップを発揮しましょう。',
          es: 'Logra la riqueza a través de la sabiduría financiera y perspicacia empresarial. Ejerce un liderazgo estable.',
          pt: 'Alcance riqueza através da sabedoria financeira e perspicácia nos negócios. Exerça liderança estável.',
          fr: 'Atteignez la richesse grâce à la sagesse financière et au sens des affaires. Exercez un leadership stable.',
          de: 'Erreichen Sie Reichtum durch finanzielle Weisheit und Geschäftssinn. Üben Sie stabile Führung aus.'
        },
        reversed: {
          ko: '돈에 대한 집착이 인간관계를 해치고 있습니다. 물질이 전부가 아닙니다.',
          en: 'Obsession with money is harming relationships. Material wealth is not everything.',
          ja: 'お金への執着が人間関係を損ねています。物質がすべてではありません。',
          es: 'La obsesión con el dinero está dañando las relaciones. La riqueza material no lo es todo.',
          pt: 'A obsessão com dinheiro está prejudicando relacionamentos. Riqueza material não é tudo.',
          fr: 'L\'obsession de l\'argent nuit aux relations. La richesse matérielle n\'est pas tout.',
          de: 'Geldgier schadet Beziehungen. Materieller Reichtum ist nicht alles.'
        }
      }
    ]
  };

  /* ───────── 마이너 카드 생성 ───────── */
  var suits = ['wands', 'cups', 'swords', 'pentacles'];
  var minorCards = [];

  suits.forEach(function (suit) {
    for (var n = 1; n <= 14; n++) {
      var data = minorData[suit][n - 1];
      minorCards.push({
        id: suit + '_' + n,
        number: n,
        type: 'minor',
        suit: suit,
        element: suitData[suit].element,
        name: buildName(suit, n),
        keywords: data.keywords,
        upright: data.upright,
        reversed: data.reversed
      });
    }
  });

  /* ───────── 전체 덱 ───────── */
  var allCards = majorCards.concat(minorCards);

  /* ───────── 공개 API ───────── */
  var TAROT = {
    cards: allCards,

    getMajor: function () {
      return allCards.filter(function (c) { return c.type === 'major'; });
    },

    getMinor: function (suit) {
      return allCards.filter(function (c) { return c.type === 'minor' && c.suit === suit; });
    },

    getAll: function () {
      return allCards.slice();
    },

    getById: function (id) {
      for (var i = 0; i < allCards.length; i++) {
        if (allCards[i].id === id) return allCards[i];
      }
      return null;
    },

    /** Fisher-Yates 셔플 */
    shuffle: function () {
      var deck = allCards.slice();
      for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = deck[i];
        deck[i] = deck[j];
        deck[j] = tmp;
      }
      return deck;
    },

    /** 셔플 후 n장 뽑기 (isReversed 30% 확률 추가) */
    draw: function (n) {
      var deck = this.shuffle();
      var hand = deck.slice(0, n);
      for (var i = 0; i < hand.length; i++) {
        hand[i] = Object.assign({}, hand[i], {
          isReversed: Math.random() < 0.3
        });
      }
      return hand;
    }
  };

  window.TAROT = TAROT;
})();
