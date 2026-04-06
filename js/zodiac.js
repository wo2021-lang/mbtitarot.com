/* ============================================
 *  zodiac.js - 별자리(Zodiac) 계산 모듈
 *  신비로운 MBTI 타로카드
 * ============================================ */

(function () {
  'use strict';

  const SIGNS = [
    {
      id: 'aquarius', symbol: '♒', element: 'air', startMonth: 1, startDay: 20, endMonth: 2, endDay: 18,
      name: { ko: '물병자리', en: 'Aquarius', ja: '水瓶座', es: 'Acuario', pt: 'Aquário', fr: 'Verseau', de: 'Wassermann' },
      desc: {
        ko: '독창적이고 진보적인 사고의 소유자로, 시대를 앞서가는 비전을 지녔습니다. 관계에서는 정신적 교감을 중시하며, 진정한 이해를 나눌 수 있는 사람에게 깊이 끌립니다. 혁신적 아이디어와 인류를 향한 넓은 사랑이 가장 큰 강점입니다. 기술·과학 분야와 사회적 활동에서 행운이 따르며, 뜻밖의 인연이 행운을 가져옵니다. 지나친 고집과 감정 표현의 부족이 소중한 사람을 멀어지게 할 수 있으니 주의하세요.',
        en: 'You possess an original and progressive mind, often envisioning the future before others can see it. In relationships, you value intellectual connection and are drawn to those who truly understand your inner world. Your greatest strengths are innovative thinking and a boundless love for humanity. Luck favors you in technology, science, and social causes—unexpected encounters often bring fortune. Be mindful of stubbornness and emotional detachment, which may push loved ones away.',
        ja: '独創的で進歩的な思考の持ち主であり、時代を先取りするビジョンを持っています。人間関係では精神的なつながりを重視し、本当の理解を分かち合える人に深く惹かれます。革新的なアイデアと人類への広い愛が最大の強みです。テクノロジーや科学、社会的活動に幸運が訪れ、思いがけない出会いが幸運をもたらします。頑固さや感情表現の不足が大切な人を遠ざけることがあるので気をつけましょう。',
        es: 'Posees una mente original y progresista, a menudo visionando el futuro antes que los demás. En las relaciones, valoras la conexión intelectual y te sientes atraído por quienes comprenden tu mundo interior. Tus mayores fortalezas son el pensamiento innovador y un amor sin límites por la humanidad. La suerte te favorece en tecnología, ciencia y causas sociales; los encuentros inesperados traen fortuna. Ten cuidado con la terquedad y el distanciamiento emocional, que pueden alejar a tus seres queridos.',
        pt: 'Você possui uma mente original e progressista, frequentemente vislumbrando o futuro antes dos outros. Nos relacionamentos, valoriza a conexão intelectual e é atraído por quem realmente compreende seu mundo interior. Seus maiores pontos fortes são o pensamento inovador e um amor ilimitado pela humanidade. A sorte o favorece em tecnologia, ciência e causas sociais — encontros inesperados trazem fortuna. Cuidado com a teimosia e o distanciamento emocional, que podem afastar pessoas queridas.',
        fr: 'Vous possédez un esprit original et progressiste, souvent visionnaire avant les autres. En amour, vous valorisez la connexion intellectuelle et êtes attiré par ceux qui comprennent votre monde intérieur. Vos plus grandes forces sont la pensée innovante et un amour sans limites pour l\'humanité. La chance vous sourit en technologie, science et causes sociales — les rencontres inattendues portent bonheur. Méfiez-vous de l\'entêtement et du détachement émotionnel, qui peuvent éloigner vos proches.',
        de: 'Sie besitzen einen originellen und fortschrittlichen Geist und sehen die Zukunft oft vor anderen. In Beziehungen schätzen Sie intellektuelle Verbindung und fühlen sich zu Menschen hingezogen, die Ihre innere Welt verstehen. Ihre größten Stärken sind innovatives Denken und eine grenzenlose Liebe zur Menschheit. Glück begünstigt Sie in Technologie, Wissenschaft und sozialen Anliegen — unerwartete Begegnungen bringen Glück. Achten Sie auf Sturheit und emotionale Distanz, die geliebte Menschen entfremden können.'
      }
    },
    {
      id: 'pisces', symbol: '♓', element: 'water', startMonth: 2, startDay: 19, endMonth: 3, endDay: 20,
      name: { ko: '물고기자리', en: 'Pisces', ja: '魚座', es: 'Piscis', pt: 'Peixes', fr: 'Poissons', de: 'Fische' },
      desc: {
        ko: '깊은 감수성과 놀라운 직관력을 타고난 몽상가이자 예술가의 영혼입니다. 사랑에 빠지면 헌신적이며, 상대의 감정을 말보다 먼저 느끼는 공감의 천재입니다. 창의적 상상력과 영적 통찰력이 가장 빛나는 재능이며, 치유와 예술의 영역에서 특별한 능력을 발휘합니다. 물가나 음악이 있는 공간에서 행운이 찾아오며, 꿈속 영감이 현실의 기회로 이어집니다. 현실 도피와 지나친 자기희생이 자신을 지치게 할 수 있으니 경계가 필요합니다.',
        en: 'You are a dreamer and artist at heart, blessed with deep sensitivity and remarkable intuition. In love, you are utterly devoted—sensing your partner\'s emotions before words are spoken. Your greatest gifts are creative imagination and spiritual insight, shining brightest in healing and artistic realms. Luck finds you near water and in spaces filled with music; dreams often reveal real opportunities. Guard against escapism and excessive self-sacrifice, which can drain your precious energy.',
        ja: '深い感受性と驚くべき直感力を持つ夢想家であり、芸術家の魂の持ち主です。恋に落ちると献身的で、相手の感情を言葉より先に感じ取る共感の天才です。創造的な想像力とスピリチュアルな洞察力が最も輝く才能であり、癒しと芸術の領域で特別な力を発揮します。水辺や音楽のある空間で幸運が訪れ、夢の中のインスピレーションが現実のチャンスにつながります。現実逃避や過度な自己犠牲が自分を疲弊させることがあるので注意が必要です。',
        es: 'Eres un soñador y artista de corazón, dotado de una sensibilidad profunda e intuición extraordinaria. En el amor, eres completamente devoto y percibes las emociones de tu pareja antes de que hablen. Tus mayores dones son la imaginación creativa y la percepción espiritual, brillando en las artes y la sanación. La suerte te encuentra cerca del agua y en espacios con música; los sueños revelan oportunidades reales. Cuídate del escapismo y el autosacrificio excesivo, que pueden agotar tu energía.',
        pt: 'Você é um sonhador e artista de coração, abençoado com sensibilidade profunda e intuição notável. No amor, é completamente devotado — sentindo as emoções do parceiro antes das palavras. Seus maiores dons são a imaginação criativa e a percepção espiritual, brilhando nas artes e na cura. A sorte o encontra perto da água e em espaços com música; sonhos frequentemente revelam oportunidades reais. Cuidado com o escapismo e o autossacrifício excessivo, que podem drenar sua energia preciosa.',
        fr: 'Vous êtes un rêveur et un artiste dans l\'âme, doté d\'une sensibilité profonde et d\'une intuition remarquable. En amour, vous êtes entièrement dévoué, ressentant les émotions de votre partenaire avant les mots. Vos plus grands dons sont l\'imagination créative et la perspicacité spirituelle, brillant dans l\'art et la guérison. La chance vous trouve près de l\'eau et dans les espaces emplis de musique ; les rêves révèlent souvent de vraies opportunités. Méfiez-vous de l\'évasion et du sacrifice excessif de soi.',
        de: 'Sie sind ein Träumer und Künstler im Herzen, gesegnet mit tiefer Sensibilität und bemerkenswerter Intuition. In der Liebe sind Sie hingebungsvoll und spüren die Emotionen Ihres Partners vor allen Worten. Ihre größten Gaben sind kreative Vorstellungskraft und spirituelle Einsicht, die in Kunst und Heilung am hellsten strahlen. Glück findet Sie in der Nähe von Wasser und in Räumen voller Musik; Träume offenbaren oft reale Chancen. Hüten Sie sich vor Realitätsflucht und übermäßiger Selbstaufopferung.'
      }
    },
    {
      id: 'aries', symbol: '♈', element: 'fire', startMonth: 3, startDay: 21, endMonth: 4, endDay: 19,
      name: { ko: '양자리', en: 'Aries', ja: '牡羊座', es: 'Aries', pt: 'Áries', fr: 'Bélier', de: 'Widder' },
      desc: {
        ko: '타고난 개척자로서 불꽃 같은 열정과 두려움 없는 용기를 지녔습니다. 사랑에서도 직진형이며, 솔직하고 뜨거운 애정 표현으로 상대의 마음을 사로잡습니다. 뛰어난 추진력과 리더십, 그리고 새로운 길을 여는 선구자적 기질이 최고의 강점입니다. 스포츠·경쟁 분야와 새로운 시작에서 행운이 따르며, 과감한 첫 걸음이 큰 기회를 엽니다. 성급한 판단과 참을성 부족이 좋은 기회를 놓치게 할 수 있으니 한 박자 쉬는 여유를 가지세요.',
        en: 'You are a born pioneer with fiery passion and fearless courage that sets you apart. In love, you are direct and expressive—your bold affection captivates hearts instantly. Your greatest strengths are unstoppable drive, natural leadership, and the trailblazer spirit that opens new paths. Luck follows you in sports, competition, and new beginnings; bold first steps unlock great opportunities. Watch out for impulsive decisions and impatience, which may cause you to miss valuable chances—pause before you leap.',
        ja: '生まれながらの開拓者として、燃えるような情熱と恐れを知らない勇気を持っています。恋愛でも一直線で、率直で熱い愛情表現で相手の心をつかみます。優れた推進力とリーダーシップ、新しい道を切り開くパイオニア精神が最大の強みです。スポーツや競争の場、新しい始まりに幸運が訪れ、大胆な第一歩が大きなチャンスを開きます。性急な判断と忍耐力の不足が良い機会を逃す原因になることがあるので、一拍置く余裕を持ちましょう。',
        es: 'Eres un pionero nato con pasión ardiente y valentía intrépida que te distingue. En el amor, eres directo y expresivo; tu afecto audaz cautiva corazones al instante. Tus mayores fortalezas son un impulso imparable, liderazgo natural y espíritu de explorador. La suerte te acompaña en deportes, competencia y nuevos comienzos; los primeros pasos audaces abren grandes oportunidades. Cuidado con las decisiones impulsivas y la impaciencia, que pueden hacerte perder valiosas oportunidades.',
        pt: 'Você é um pioneiro nato com paixão ardente e coragem destemida que o diferencia. No amor, é direto e expressivo — seu afeto ousado cativa corações instantaneamente. Suas maiores forças são determinação imparável, liderança natural e espírito desbravador. A sorte o acompanha em esportes, competição e novos começos; primeiros passos ousados abrem grandes oportunidades. Cuidado com decisões impulsivas e impaciência, que podem fazer você perder chances valiosas.',
        fr: 'Vous êtes un pionnier né avec une passion ardente et un courage intrépide qui vous distinguent. En amour, vous êtes direct et expressif — votre affection audacieuse captive instantanément. Vos plus grandes forces sont une détermination inarrêtable, un leadership naturel et un esprit d\'explorateur. La chance vous sourit dans le sport, la compétition et les nouveaux départs. Attention aux décisions impulsives et à l\'impatience, qui peuvent vous faire manquer de précieuses opportunités.',
        de: 'Sie sind ein geborener Pionier mit feuriger Leidenschaft und furchtlosem Mut, der Sie auszeichnet. In der Liebe sind Sie direkt und ausdrucksstark — Ihre kühne Zuneigung fesselt Herzen sofort. Ihre größten Stärken sind unaufhaltsamer Antrieb, natürliche Führung und Entdeckergeist. Glück begleitet Sie im Sport, Wettbewerb und bei Neuanfängen; mutige erste Schritte eröffnen große Chancen. Vorsicht vor impulsiven Entscheidungen und Ungeduld, die wertvolle Gelegenheiten kosten können.'
      }
    },
    {
      id: 'taurus', symbol: '♉', element: 'earth', startMonth: 4, startDay: 20, endMonth: 5, endDay: 20,
      name: { ko: '황소자리', en: 'Taurus', ja: '牡牛座', es: 'Tauro', pt: 'Touro', fr: 'Taureau', de: 'Stier' },
      desc: {
        ko: '흔들림 없는 안정감과 깊은 인내심을 가진 현실주의자로, 삶의 풍요로움을 만들어가는 사람입니다. 사랑에서는 느리지만 확실하게 깊어지며, 한번 마음을 주면 변함없는 헌신을 보여줍니다. 타고난 심미안과 재물 운용 능력, 그리고 끝까지 해내는 끈기가 최고의 무기입니다. 미식·예술·부동산 관련 분야에서 행운이 따르며, 오감을 만족시키는 경험이 좋은 에너지를 불러옵니다. 변화에 대한 저항과 지나친 소유욕이 성장의 발목을 잡을 수 있으니 유연함을 길러보세요.',
        en: 'You are an unwavering realist with deep patience, steadily building abundance in every area of life. In love, you are slow to open up but profoundly loyal—once committed, your devotion never wavers. Your greatest assets are refined taste, financial acumen, and the tenacity to see everything through to the end. Luck favors you in food, art, and real estate; experiences that delight the senses bring positive energy. Beware of resistance to change and excessive possessiveness, which can hold back your growth.',
        ja: '揺るぎない安定感と深い忍耐力を持つ現実主義者で、人生の豊かさを築き上げる人です。恋愛ではゆっくりですが確実に深まり、一度心を開けば変わらない献身を見せます。生まれ持った審美眼と財務能力、そして最後までやり遂げる粘り強さが最大の武器です。美食・芸術・不動産関連で幸運が訪れ、五感を満たす体験が良いエネルギーを呼び込みます。変化への抵抗と過度な所有欲が成長の足かせになることがあるので、柔軟さを身につけましょう。',
        es: 'Eres un realista inquebrantable con profunda paciencia, construyendo abundancia en cada área de la vida. En el amor, te abres lentamente pero con lealtad profunda; una vez comprometido, tu devoción es constante. Tus mejores cualidades son el gusto refinado, la habilidad financiera y la tenacidad para completar todo. La suerte te favorece en gastronomía, arte y bienes raíces; las experiencias sensoriales traen energía positiva. Cuidado con la resistencia al cambio y la posesividad excesiva.',
        pt: 'Você é um realista inabalável com profunda paciência, construindo abundância em cada área da vida. No amor, abre-se lentamente, mas com lealdade profunda — uma vez comprometido, sua devoção nunca vacila. Seus maiores trunfos são gosto refinado, habilidade financeira e tenacidade para concluir tudo. A sorte o favorece em gastronomia, arte e imóveis; experiências sensoriais trazem energia positiva. Cuidado com a resistência à mudança e a possessividade excessiva, que podem travar seu crescimento.',
        fr: 'Vous êtes un réaliste inébranlable doté d\'une patience profonde, bâtissant l\'abondance dans chaque domaine. En amour, vous vous ouvrez lentement mais avec une loyauté profonde — votre dévouement ne faiblit jamais. Vos meilleurs atouts sont le goût raffiné, le sens financier et la ténacité. La chance vous sourit en gastronomie, art et immobilier ; les expériences sensorielles apportent une énergie positive. Méfiez-vous de la résistance au changement et de la possessivité excessive.',
        de: 'Sie sind ein unerschütterlicher Realist mit tiefer Geduld, der in allen Lebensbereichen Wohlstand aufbaut. In der Liebe öffnen Sie sich langsam, aber mit tiefer Treue — einmal gebunden, wankt Ihre Hingabe nie. Ihre größten Stärken sind feiner Geschmack, finanzielles Geschick und die Ausdauer, alles zu Ende zu bringen. Glück begünstigt Sie in Gastronomie, Kunst und Immobilien; sinnliche Erfahrungen bringen positive Energie. Vorsicht vor Veränderungsresistenz und übermäßigem Besitzdenken.'
      }
    },
    {
      id: 'gemini', symbol: '♊', element: 'air', startMonth: 5, startDay: 21, endMonth: 6, endDay: 20,
      name: { ko: '쌍둥이자리', en: 'Gemini', ja: '双子座', es: 'Géminis', pt: 'Gêmeos', fr: 'Gémeaux', de: 'Zwillinge' },
      desc: {
        ko: '재치와 언어적 재능을 겸비한 소통의 천재로, 어떤 자리에서든 분위기를 이끕니다. 연애에서는 지적 자극을 주고받는 관계를 원하며, 대화가 통하는 사람에게 강하게 끌립니다. 빠른 학습력, 다재다능함, 그리고 어떤 환경에도 적응하는 유연성이 탁월한 강점입니다. 정보·미디어·여행 관련 분야에서 행운이 따르며, 새로운 사람과의 만남이 뜻밖의 기회를 열어줍니다. 관심사가 자주 바뀌는 산만함과 깊이 부족이 신뢰를 약화시킬 수 있으니 하나에 집중하는 연습이 필요합니다.',
        en: 'You are a communication genius with sharp wit and linguistic talent, naturally leading any social setting. In romance, you crave intellectual stimulation and are drawn to those who match your conversational spark. Quick learning, versatility, and remarkable adaptability to any environment are your standout strengths. Luck follows you in media, information, and travel; meeting new people opens unexpected doors. Beware of scattered interests and lack of depth, which can undermine trust—practice focusing on one thing at a time.',
        ja: '機知と言語的才能を兼ね備えたコミュニケーションの天才で、どんな場でも雰囲気をリードします。恋愛では知的刺激を求め、会話が弾む相手に強く惹かれます。素早い学習力、多才さ、どんな環境にも適応する柔軟性が際立つ強みです。情報・メディア・旅行関連で幸運が訪れ、新しい人との出会いが思わぬチャンスを開きます。興味が移りやすい散漫さと深さの不足が信頼を弱めることがあるので、一つに集中する練習が必要です。',
        es: 'Eres un genio de la comunicación con ingenio agudo y talento lingüístico, liderando naturalmente cualquier entorno social. En el amor, buscas estimulación intelectual y te atrae quien iguala tu chispa conversacional. Aprendizaje rápido, versatilidad y adaptabilidad son tus fortalezas destacadas. La suerte te acompaña en medios, información y viajes; conocer gente nueva abre puertas inesperadas. Cuidado con la dispersión y la falta de profundidad, que pueden debilitar la confianza.',
        pt: 'Você é um gênio da comunicação com perspicácia afiada e talento linguístico, liderando naturalmente qualquer ambiente social. No amor, busca estímulo intelectual e é atraído por quem corresponde à sua vivacidade. Aprendizado rápido, versatilidade e notável adaptabilidade são seus pontos fortes. A sorte o acompanha em mídia, informação e viagens; conhecer novas pessoas abre portas inesperadas. Cuidado com interesses dispersos e falta de profundidade, que podem minar a confiança.',
        fr: 'Vous êtes un génie de la communication avec un esprit vif et un talent linguistique, menant naturellement tout cercle social. En amour, vous recherchez la stimulation intellectuelle et êtes attiré par ceux qui partagent votre vivacité. Apprentissage rapide, polyvalence et adaptabilité remarquable sont vos forces. La chance vous sourit dans les médias, l\'information et les voyages ; les nouvelles rencontres ouvrent des portes inattendues. Attention à la dispersion et au manque de profondeur.',
        de: 'Sie sind ein Kommunikationsgenie mit scharfem Witz und sprachlichem Talent, das jede soziale Runde natürlich anführt. In der Liebe suchen Sie intellektuelle Anregung und fühlen sich zu geistreichen Gesprächspartnern hingezogen. Schnelles Lernen, Vielseitigkeit und bemerkenswerte Anpassungsfähigkeit sind Ihre herausragenden Stärken. Glück begleitet Sie in Medien, Information und Reisen; neue Bekanntschaften öffnen unerwartete Türen. Vorsicht vor Sprunghaftigkeit und mangelnder Tiefe.'
      }
    },
    {
      id: 'cancer', symbol: '♋', element: 'water', startMonth: 6, startDay: 21, endMonth: 7, endDay: 22,
      name: { ko: '게자리', en: 'Cancer', ja: '蟹座', es: 'Cáncer', pt: 'Câncer', fr: 'Cancer', de: 'Krebs' },
      desc: {
        ko: '따뜻한 감성과 깊은 모성애를 지닌 가정의 수호자로, 소중한 사람들을 온 마음으로 보살핍니다. 사랑에서는 깊은 정서적 유대를 갈망하며, 진심으로 마음을 나눌 수 있는 관계에서 가장 빛납니다. 뛰어난 공감 능력과 직관, 그리고 사람을 편안하게 만드는 따뜻한 포용력이 특별한 재능입니다. 가정·요리·부동산 분야에서 행운이 찾아오며, 가족과 함께하는 시간이 운을 높여줍니다. 과거에 대한 집착과 지나친 감정 기복이 현재의 행복을 흐리게 할 수 있으니 놓아주는 연습을 해보세요.',
        en: 'You are a warm-hearted guardian of home and family, caring for loved ones with your whole being. In love, you crave deep emotional bonds and shine brightest in relationships built on genuine trust. Your special gifts are extraordinary empathy, intuition, and a nurturing warmth that puts everyone at ease. Luck finds you in home, cooking, and real estate; time spent with family amplifies your fortune. Beware of clinging to the past and emotional mood swings that can cloud present happiness—practice letting go.',
        ja: '温かい感性と深い母性愛を持つ家庭の守護者で、大切な人を心を込めて世話します。恋愛では深い情緒的な絆を渇望し、心から分かち合える関係で最も輝きます。優れた共感能力と直感、そして人を安心させる温かい包容力が特別な才能です。家庭・料理・不動産分野で幸運が訪れ、家族と過ごす時間が運を高めます。過去への執着と感情の起伏が現在の幸福を曇らせることがあるので、手放す練習をしてみましょう。',
        es: 'Eres un guardián cálido del hogar y la familia, cuidando a tus seres queridos con todo tu ser. En el amor, anhelas lazos emocionales profundos y brillas en relaciones de confianza genuina. Tus dones especiales son empatía extraordinaria, intuición y una calidez que reconforta a todos. La suerte te encuentra en el hogar, la cocina y los bienes raíces; el tiempo en familia amplifica tu fortuna. Cuidado con aferrarte al pasado y los cambios de humor que pueden nublar la felicidad presente.',
        pt: 'Você é um guardião caloroso do lar e da família, cuidando dos entes queridos com todo o seu ser. No amor, anseia por laços emocionais profundos e brilha em relacionamentos de confiança genuína. Seus dons especiais são empatia extraordinária, intuição e uma calidez acolhedora. A sorte o encontra no lar, na culinária e em imóveis; tempo com a família amplifica sua fortuna. Cuidado com o apego ao passado e oscilações de humor que podem obscurecer a felicidade presente.',
        fr: 'Vous êtes un gardien chaleureux du foyer et de la famille, prenant soin de vos proches de tout votre être. En amour, vous recherchez des liens émotionnels profonds et brillez dans les relations de confiance sincère. Vos dons sont une empathie extraordinaire, l\'intuition et une chaleur réconfortante. La chance vous trouve au foyer, en cuisine et dans l\'immobilier ; le temps en famille amplifie votre fortune. Méfiez-vous de l\'attachement au passé et des sautes d\'humeur.',
        de: 'Sie sind ein warmherziger Hüter von Heim und Familie, der geliebte Menschen mit ganzem Herzen umsorgt. In der Liebe sehnen Sie sich nach tiefen emotionalen Bindungen und strahlen in Beziehungen mit echtem Vertrauen. Ihre besonderen Gaben sind außergewöhnliche Empathie, Intuition und eine Wärme, die jeden beruhigt. Glück findet Sie im Bereich Heim, Kochen und Immobilien; Familienzeit verstärkt Ihr Glück. Vorsicht vor dem Festhalten an der Vergangenheit und Stimmungsschwankungen.'
      }
    },
    {
      id: 'leo', symbol: '♌', element: 'fire', startMonth: 7, startDay: 23, endMonth: 8, endDay: 22,
      name: { ko: '사자자리', en: 'Leo', ja: '獅子座', es: 'Leo', pt: 'Leão', fr: 'Lion', de: 'Löwe' },
      desc: {
        ko: '태양처럼 빛나는 카리스마와 넘치는 자신감으로 어디서든 중심이 되는 왕의 별자리입니다. 사랑에서는 로맨틱하고 관대하며, 상대를 왕자나 공주처럼 대해 주는 드라마틱한 연인입니다. 탁월한 창의력과 표현력, 사람들에게 영감을 주는 리더십이 가장 강력한 무기입니다. 무대·엔터테인먼트·창작 활동에서 행운이 따르며, 자기 표현을 할수록 운이 상승합니다. 인정받고 싶은 욕구가 지나치면 자만이 될 수 있으니, 겸손함과 경청의 자세를 잊지 마세요.',
        en: 'You are the sign of royalty, radiating solar charisma and overflowing confidence that makes you the center of any room. In love, you are romantic and generous—a dramatic partner who treats your beloved like royalty. Your most powerful assets are exceptional creativity, expressive talent, and leadership that inspires others. Luck favors you on stage, in entertainment, and creative pursuits; the more you express yourself, the more fortune rises. Guard against the need for constant validation turning into arrogance—never forget humility and the art of listening.',
        ja: '太陽のように輝くカリスマと溢れる自信で、どこにいても中心となる王の星座です。恋愛ではロマンチックで寛大、相手を王子や姫のように扱うドラマチックな恋人です。卓越した創造力と表現力、人々にインスピレーションを与えるリーダーシップが最強の武器です。ステージ・エンターテイメント・創作活動で幸運が訪れ、自己表現するほど運が上昇します。認められたい欲求が過ぎると傲慢になりかねないので、謙虚さと傾聴の姿勢を忘れないでください。',
        es: 'Eres el signo de la realeza, irradiando carisma solar y confianza desbordante que te hace el centro de atención. En el amor, eres romántico y generoso — una pareja dramática que trata a su amado como realeza. Tus activos más poderosos son creatividad excepcional, talento expresivo y un liderazgo inspirador. La suerte te favorece en el escenario, el entretenimiento y las artes creativas; cuanto más te expresas, más crece la fortuna. Cuida que la necesidad de validación no se convierta en arrogancia.',
        pt: 'Você é o signo da realeza, irradiando carisma solar e confiança transbordante que o torna o centro de qualquer ambiente. No amor, é romântico e generoso — um parceiro dramático que trata o amado como realeza. Seus maiores trunfos são criatividade excepcional, talento expressivo e liderança inspiradora. A sorte o favorece no palco, entretenimento e atividades criativas; quanto mais se expressa, mais a fortuna cresce. Cuidado para que a necessidade de validação não se torne arrogância.',
        fr: 'Vous êtes le signe de la royauté, rayonnant d\'un charisme solaire et d\'une confiance débordante qui fait de vous le centre de toute pièce. En amour, vous êtes romantique et généreux — un partenaire dramatique qui traite l\'être aimé comme un roi. Vos atouts sont une créativité exceptionnelle, un talent expressif et un leadership inspirant. La chance vous sourit sur scène et dans les arts créatifs ; plus vous vous exprimez, plus la fortune grandit. Veillez à ce que le besoin de validation ne devienne pas arrogance.',
        de: 'Sie sind das Zeichen des Königtums, strahlen solares Charisma und überbordende Selbstsicherheit aus, die Sie zum Mittelpunkt jedes Raumes macht. In der Liebe sind Sie romantisch und großzügig — ein dramatischer Partner, der den Geliebten wie Könige behandelt. Ihre stärksten Waffen sind außergewöhnliche Kreativität, Ausdruckstalent und inspirierende Führung. Glück begünstigt Sie auf der Bühne, in Unterhaltung und kreativen Bereichen. Achten Sie darauf, dass das Bedürfnis nach Anerkennung nicht in Arroganz umschlägt.'
      }
    },
    {
      id: 'virgo', symbol: '♍', element: 'earth', startMonth: 8, startDay: 23, endMonth: 9, endDay: 22,
      name: { ko: '처녀자리', en: 'Virgo', ja: '乙女座', es: 'Virgo', pt: 'Virgem', fr: 'Vierge', de: 'Jungfrau' },
      desc: {
        ko: '정밀한 분석력과 섬세한 관찰력을 지닌 완벽주의자로, 남들이 놓치는 디테일을 꿰뚫어 봅니다. 사랑에서는 말보다 행동으로 마음을 표현하며, 상대를 세심하게 챙기는 묵묵한 헌신가입니다. 뛰어난 문제 해결 능력과 실용적 지혜, 그리고 끊임없는 자기 개선 의지가 핵심 강점입니다. 건강·교육·서비스 분야에서 행운이 따르며, 정리정돈된 환경이 좋은 기운을 불러옵니다. 지나친 완벽주의와 자기 비판이 마음의 평화를 해칠 수 있으니 스스로를 있는 그대로 인정해 주세요.',
        en: 'You are a perfectionist with precise analytical skills and keen observation, catching details others miss. In love, you show affection through actions rather than words—a quietly devoted partner who cares for every detail. Your core strengths are exceptional problem-solving, practical wisdom, and a relentless drive for self-improvement. Luck favors you in health, education, and service industries; an organized environment attracts positive energy. Watch out for excessive perfectionism and self-criticism that can disturb your inner peace—learn to accept yourself as you are.',
        ja: '精密な分析力と繊細な観察力を持つ完璧主義者で、他の人が見逃すディテールを見抜きます。恋愛では言葉より行動で気持ちを表し、相手を細やかに気遣う静かな献身者です。優れた問題解決能力と実用的な知恵、そして絶え間ない自己改善の意志が核心的な強みです。健康・教育・サービス分野で幸運が訪れ、整理整頓された環境が良い気を呼び込みます。過度な完璧主義と自己批判が心の平和を乱すことがあるので、ありのままの自分を認めてあげましょう。',
        es: 'Eres un perfeccionista con habilidades analíticas precisas y observación aguda, captando detalles que otros pasan por alto. En el amor, muestras afecto con acciones más que palabras — una pareja devota y atenta. Tus fortalezas son resolución de problemas excepcional, sabiduría práctica y búsqueda constante de superación. La suerte te favorece en salud, educación y servicios; un entorno organizado atrae energía positiva. Cuidado con el perfeccionismo excesivo y la autocrítica que pueden perturbar tu paz interior.',
        pt: 'Você é um perfeccionista com habilidades analíticas precisas e observação aguçada, captando detalhes que outros perdem. No amor, demonstra afeto por ações, não palavras — um parceiro devotado e atencioso. Suas forças são resolução excepcional de problemas, sabedoria prática e busca constante por autoaperfeiçoamento. A sorte o favorece em saúde, educação e serviços; um ambiente organizado atrai energia positiva. Cuidado com perfeccionismo excessivo e autocrítica que podem perturbar sua paz interior.',
        fr: 'Vous êtes un perfectionniste doté de compétences analytiques précises et d\'un sens aigu de l\'observation, percevant des détails que d\'autres manquent. En amour, vous montrez votre affection par des actes — un partenaire dévoué et attentionné. Vos forces sont la résolution de problèmes, la sagesse pratique et une quête constante d\'amélioration. La chance vous sourit en santé, éducation et services ; un environnement ordonné attire l\'énergie positive. Méfiez-vous du perfectionnisme excessif et de l\'autocritique.',
        de: 'Sie sind ein Perfektionist mit präzisen analytischen Fähigkeiten und scharfer Beobachtungsgabe, der Details erfasst, die andere übersehen. In der Liebe zeigen Sie Zuneigung durch Taten statt Worte — ein stiller, hingebungsvoller Partner. Ihre Kernstärken sind außergewöhnliche Problemlösung, praktische Weisheit und unermüdlicher Selbstverbesserungsdrang. Glück begünstigt Sie in Gesundheit, Bildung und Dienstleistung; eine ordentliche Umgebung zieht positive Energie an. Vorsicht vor übertriebenen Perfektionismus und Selbstkritik.'
      }
    },
    {
      id: 'libra', symbol: '♎', element: 'air', startMonth: 9, startDay: 23, endMonth: 10, endDay: 22,
      name: { ko: '천칭자리', en: 'Libra', ja: '天秤座', es: 'Libra', pt: 'Libra', fr: 'Balance', de: 'Waage' },
      desc: {
        ko: '우아한 균형 감각과 뛰어난 심미안을 가진 조화의 수호자로, 어디서나 평화를 만듭니다. 연애에서는 로맨틱한 분위기를 즐기며, 서로 존중하고 아름답게 성장하는 파트너십을 꿈꿉니다. 탁월한 외교력과 공정한 판단력, 그리고 사람들을 자연스럽게 연결하는 사교적 매력이 핵심 강점입니다. 예술·패션·법률 분야에서 행운이 따르며, 아름다운 환경에 둘러싸일수록 좋은 기운이 커집니다. 결정 장애와 갈등 회피 성향이 중요한 선택을 지연시킬 수 있으니 때로는 과감한 결단이 필요합니다.',
        en: 'You are a guardian of harmony with elegant balance and refined aesthetic sense, creating peace wherever you go. In romance, you cherish romantic atmospheres and dream of partnerships built on mutual respect and shared growth. Your core strengths are exceptional diplomacy, fair judgment, and a social charm that naturally connects people. Luck follows you in art, fashion, and law; surrounding yourself with beauty amplifies positive energy. Beware of indecisiveness and conflict avoidance that can delay important choices—sometimes bold decisions are necessary.',
        ja: '優雅なバランス感覚と優れた審美眼を持つ調和の守護者で、どこにいても平和を生み出します。恋愛ではロマンチックな雰囲気を楽しみ、互いに尊重し美しく成長するパートナーシップを夢見ます。卓越した外交力と公正な判断力、人々を自然につなげる社交的魅力が核心的な強みです。芸術・ファッション・法律分野で幸運が訪れ、美しい環境に囲まれるほど良い気が高まります。優柔不断と対立回避が重要な選択を遅らせることがあるので、時には果敢な決断が必要です。',
        es: 'Eres un guardián de la armonía con elegante equilibrio y refinado sentido estético, creando paz donde vayas. En el amor, disfrutas del romanticismo y sueñas con relaciones de respeto mutuo y crecimiento compartido. Tus fortalezas son diplomacia excepcional, juicio justo y un encanto social que conecta personas naturalmente. La suerte te acompaña en arte, moda y derecho; rodearte de belleza amplifica la energía positiva. Cuidado con la indecisión y la evasión de conflictos que retrasan decisiones importantes.',
        pt: 'Você é um guardião da harmonia com equilíbrio elegante e senso estético refinado, criando paz por onde passa. No amor, aprecia o romantismo e sonha com parcerias de respeito mútuo e crescimento compartilhado. Suas forças são diplomacia excepcional, julgamento justo e um charme social que conecta pessoas naturalmente. A sorte o acompanha em arte, moda e direito; cercar-se de beleza amplifica a energia positiva. Cuidado com a indecisão e a fuga de conflitos que podem atrasar escolhas importantes.',
        fr: 'Vous êtes un gardien de l\'harmonie avec un équilibre élégant et un sens esthétique raffiné, créant la paix partout. En amour, vous chérissez le romantisme et rêvez de partenariats fondés sur le respect mutuel. Vos forces sont une diplomatie exceptionnelle, un jugement équitable et un charme social qui relie naturellement les gens. La chance vous sourit en art, mode et droit ; s\'entourer de beauté amplifie l\'énergie positive. Méfiez-vous de l\'indécision et de l\'évitement des conflits.',
        de: 'Sie sind ein Hüter der Harmonie mit elegantem Gleichgewicht und feinem ästhetischen Sinn, der überall Frieden schafft. In der Liebe genießen Sie Romantik und träumen von Partnerschaften mit gegenseitigem Respekt und gemeinsamen Wachstum. Ihre Stärken sind außergewöhnliche Diplomatie, faires Urteil und sozialer Charme, der Menschen verbindet. Glück begleitet Sie in Kunst, Mode und Recht; eine schöne Umgebung verstärkt positive Energie. Vorsicht vor Unentschlossenheit und Konfliktvermeidung bei wichtigen Entscheidungen.'
      }
    },
    {
      id: 'scorpio', symbol: '♏', element: 'water', startMonth: 10, startDay: 23, endMonth: 11, endDay: 21,
      name: { ko: '전갈자리', en: 'Scorpio', ja: '蠍座', es: 'Escorpio', pt: 'Escorpião', fr: 'Scorpion', de: 'Skorpion' },
      desc: {
        ko: '깊은 통찰력과 강렬한 열정을 지닌 탐구자로, 표면 아래 숨겨진 진실을 꿰뚫어 봅니다. 사랑에서는 전부 아니면 전무의 태도로 깊이 빠져들며, 영혼까지 닿는 강렬한 유대를 원합니다. 놀라운 집중력과 불굴의 의지, 그리고 위기를 기회로 바꾸는 변환의 힘이 최대 강점입니다. 투자·심리학·연구 분야에서 행운이 따르며, 위기 상황에서 오히려 빛을 발합니다. 의심과 집착, 그리고 감정의 극단이 소중한 관계를 해칠 수 있으니 신뢰하는 법을 배워보세요.',
        en: 'You are a seeker with profound insight and intense passion, piercing through to hidden truths beneath the surface. In love, you go all or nothing—craving soul-deep bonds that reach the very core of being. Your greatest strengths are extraordinary focus, indomitable willpower, and the transformative power to turn crisis into opportunity. Luck favors you in investment, psychology, and research; you shine brightest in moments of crisis. Guard against suspicion, obsession, and emotional extremes that can damage precious relationships—learn to trust.',
        ja: '深い洞察力と激しい情熱を持つ探求者で、表面の下に隠された真実を見抜きます。恋愛では全か無かの姿勢で深く入り込み、魂まで届く強烈な絆を求めます。驚くべき集中力と不屈の意志、そして危機を好機に変える変容の力が最大の強みです。投資・心理学・研究分野で幸運が訪れ、危機的状況でこそ真価を発揮します。疑念と執着、感情の極端さが大切な関係を傷つけることがあるので、信頼することを学びましょう。',
        es: 'Eres un buscador con perspicacia profunda y pasión intensa, penetrando verdades ocultas bajo la superficie. En el amor, vas con todo o nada, anhelando vínculos que alcancen el alma. Tus mayores fortalezas son enfoque extraordinario, voluntad inquebrantable y el poder transformador de convertir crisis en oportunidades. La suerte te acompaña en inversiones, psicología e investigación; brillas en momentos de crisis. Cuídate de la sospecha, la obsesión y los extremos emocionales que pueden dañar relaciones preciosas.',
        pt: 'Você é um buscador com percepção profunda e paixão intensa, penetrando verdades ocultas sob a superfície. No amor, é tudo ou nada — ansiando vínculos que alcancem a alma. Suas maiores forças são foco extraordinário, vontade inabalável e o poder transformador de converter crises em oportunidades. A sorte o favorece em investimentos, psicologia e pesquisa; você brilha em momentos de crise. Cuidado com desconfiança, obsessão e extremos emocionais que podem prejudicar relacionamentos preciosos.',
        fr: 'Vous êtes un chercheur doté d\'une perspicacité profonde et d\'une passion intense, perçant les vérités cachées sous la surface. En amour, c\'est tout ou rien — vous désirez des liens qui touchent l\'âme. Vos forces sont une concentration extraordinaire, une volonté indomptable et le pouvoir de transformer les crises en opportunités. La chance vous sourit en investissement, psychologie et recherche ; vous brillez dans les moments de crise. Méfiez-vous de la suspicion, de l\'obsession et des extrêmes émotionnels.',
        de: 'Sie sind ein Sucher mit tiefgründiger Einsicht und intensiver Leidenschaft, der verborgene Wahrheiten unter der Oberfläche durchdringt. In der Liebe gehen Sie aufs Ganze — Sie sehnen sich nach Bindungen, die bis zur Seele reichen. Ihre größten Stärken sind außergewöhnliche Konzentration, unbeugsamer Wille und die Kraft, Krisen in Chancen zu verwandeln. Glück begleitet Sie bei Investitionen, Psychologie und Forschung; in Krisenzeiten strahlen Sie am hellsten. Vorsicht vor Misstrauen, Besessenheit und emotionalen Extremen.'
      }
    },
    {
      id: 'sagittarius', symbol: '♐', element: 'fire', startMonth: 11, startDay: 22, endMonth: 12, endDay: 21,
      name: { ko: '사수자리', en: 'Sagittarius', ja: '射手座', es: 'Sagitario', pt: 'Sagitário', fr: 'Sagittaire', de: 'Schütze' },
      desc: {
        ko: '끝없는 낙관주의와 모험심으로 세상을 무대 삼는 자유로운 영혼의 철학자입니다. 사랑에서는 자유를 존중하는 동반자를 원하며, 함께 세상을 탐험할 수 있는 관계에서 가장 행복합니다. 넓은 시야와 긍정 에너지, 그리고 진리를 향한 지칠 줄 모르는 탐구심이 가장 빛나는 재능입니다. 해외·교육·출판 분야에서 행운이 찾아오며, 여행과 새로운 문화 체험이 운을 크게 높여줍니다. 무책임함과 약속에 대한 가벼움이 신뢰를 잃게 할 수 있으니 말한 것은 반드시 지키는 습관을 들이세요.',
        en: 'You are a free-spirited philosopher with boundless optimism and adventurous energy, making the whole world your stage. In love, you seek a companion who respects your freedom—happiest in relationships that explore the world together. Your shining gifts are broad vision, infectious positive energy, and a tireless quest for truth and wisdom. Luck finds you abroad, in education, and publishing; travel and cultural experiences greatly boost your fortune. Beware of irresponsibility and taking commitments lightly, which can erode trust—always keep your promises.',
        ja: '果てしない楽観主義と冒険心で世界を舞台にする自由な魂の哲学者です。恋愛では自由を尊重するパートナーを求め、一緒に世界を探検できる関係で最も幸せを感じます。広い視野とポジティブなエネルギー、真理への疲れを知らない探求心が最も輝く才能です。海外・教育・出版分野で幸運が訪れ、旅行や異文化体験が運を大きく高めます。無責任さと約束の軽さが信頼を失う原因になるので、言ったことは必ず守る習慣をつけましょう。',
        es: 'Eres un filósofo de espíritu libre con optimismo ilimitado y energía aventurera, haciendo del mundo tu escenario. En el amor, buscas un compañero que respete tu libertad y comparta la exploración del mundo. Tus dones son visión amplia, energía positiva contagiosa y búsqueda incansable de verdad. La suerte te encuentra en el extranjero, la educación y la publicación; viajar y las experiencias culturales elevan tu fortuna. Cuidado con la irresponsabilidad y tomar compromisos a la ligera.',
        pt: 'Você é um filósofo de espírito livre com otimismo ilimitado e energia aventureira, fazendo do mundo seu palco. No amor, busca um companheiro que respeite sua liberdade e explore o mundo junto. Seus dons são visão ampla, energia positiva contagiante e busca incansável pela verdade. A sorte o encontra no exterior, na educação e na publicação; viagens e experiências culturais elevam sua fortuna. Cuidado com irresponsabilidade e leviandade com compromissos, que podem minar a confiança.',
        fr: 'Vous êtes un philosophe à l\'esprit libre avec un optimisme sans bornes et une énergie aventurière, faisant du monde votre scène. En amour, vous cherchez un compagnon qui respecte votre liberté et partage l\'exploration. Vos dons sont une vision large, une énergie positive contagieuse et une quête infatigable de vérité. La chance vous trouve à l\'étranger, dans l\'éducation et l\'édition ; voyager amplifie votre fortune. Méfiez-vous de l\'irresponsabilité et de la légèreté envers les engagements.',
        de: 'Sie sind ein freigeistiger Philosoph mit grenzenlosem Optimismus und Abenteuerlust, der die ganze Welt zur Bühne macht. In der Liebe suchen Sie einen Partner, der Ihre Freiheit respektiert und die Welt gemeinsam erkundet. Ihre Gaben sind weite Sicht, ansteckende positive Energie und ein unermüdlicher Wahrheitsdrang. Glück findet Sie im Ausland, in Bildung und Verlagswesen; Reisen und kulturelle Erfahrungen steigern Ihr Glück enorm. Vorsicht vor Verantwortungslosigkeit und Leichtfertigkeit bei Versprechen.'
      }
    },
    {
      id: 'capricorn', symbol: '♑', element: 'earth', startMonth: 12, startDay: 22, endMonth: 1, endDay: 19,
      name: { ko: '염소자리', en: 'Capricorn', ja: '山羊座', es: 'Capricornio', pt: 'Capricórnio', fr: 'Capricorne', de: 'Steinbock' },
      desc: {
        ko: '강한 책임감과 원대한 야망을 품은 현실주의자로, 묵묵히 정상을 향해 나아가는 등반가입니다. 사랑에서는 진지하고 신중하며, 시간이 갈수록 깊어지는 성숙한 사랑을 선사합니다. 뛰어난 전략적 사고와 자기 절제력, 그리고 어떤 역경도 이겨내는 불굴의 인내가 최강의 무기입니다. 사업·행정·전통 산업 분야에서 행운이 따르며, 나이가 들수록 운이 상승하는 대기만성형입니다. 지나친 업무 집착과 감정 억압이 삶의 즐거움을 앗아갈 수 있으니 가끔은 쉬어가며 마음을 열어보세요.',
        en: 'You are a realist with fierce responsibility and grand ambition, steadily climbing toward the summit like a mountain goat. In love, you are serious and thoughtful, offering a mature affection that deepens beautifully over time. Your ultimate weapons are strategic thinking, iron self-discipline, and unyielding perseverance through any adversity. Luck favors you in business, administration, and traditional industries; your fortune grows stronger with age—a true late bloomer. Watch out for overworking and emotional suppression that can rob life of its joy—sometimes pause, rest, and open your heart.',
        ja: '強い責任感と壮大な野望を抱く現実主義者で、黙々と頂点を目指す登山家です。恋愛では真剣で慎重、時間とともに深まる成熟した愛を捧げます。優れた戦略的思考と自己制御力、どんな逆境にも打ち勝つ不屈の忍耐が最強の武器です。ビジネス・行政・伝統産業で幸運が訪れ、年を重ねるほど運が上昇する大器晩成型です。過度な仕事への執着と感情の抑圧が人生の喜びを奪うことがあるので、時には休んで心を開いてみましょう。',
        es: 'Eres un realista con gran responsabilidad y ambición, escalando constantemente hacia la cima como una cabra montesa. En el amor, eres serio y reflexivo, ofreciendo un afecto maduro que se profundiza con el tiempo. Tus armas definitivas son pensamiento estratégico, autodisciplina férrea y perseverancia inquebrantable. La suerte te favorece en negocios, administración e industrias tradicionales; tu fortuna crece con la edad. Cuidado con el exceso de trabajo y la represión emocional que pueden robar la alegría de vivir.',
        pt: 'Você é um realista com grande responsabilidade e ambição, escalando constantemente rumo ao topo como uma cabra montesa. No amor, é sério e reflexivo, oferecendo um afeto maduro que se aprofunda com o tempo. Suas armas definitivas são pensamento estratégico, autodisciplina de ferro e perseverança inabalável. A sorte o favorece em negócios, administração e indústrias tradicionais; sua fortuna cresce com a idade. Cuidado com o excesso de trabalho e a repressão emocional que podem roubar a alegria de viver.',
        fr: 'Vous êtes un réaliste doté d\'une grande responsabilité et d\'ambitions élevées, gravissant patiemment le sommet. En amour, vous êtes sérieux et réfléchi, offrant un amour mature qui s\'approfondit avec le temps. Vos armes ultimes sont la pensée stratégique, l\'autodiscipline de fer et la persévérance inébranlable. La chance vous sourit en affaires, administration et industries traditionnelles ; votre fortune grandit avec l\'âge. Méfiez-vous du surmenage et de la répression émotionnelle qui volent la joie de vivre.',
        de: 'Sie sind ein Realist mit starkem Verantwortungsbewusstsein und großem Ehrgeiz, der beständig zum Gipfel aufsteigt wie eine Bergziege. In der Liebe sind Sie ernst und bedacht und bieten reife Zuneigung, die mit der Zeit tiefer wird. Ihre stärksten Waffen sind strategisches Denken, eiserne Selbstdisziplin und unbeugsame Ausdauer. Glück begleitet Sie in Wirtschaft, Verwaltung und traditionellen Branchen; Ihr Glück wächst mit dem Alter. Vorsicht vor Überarbeitung und emotionaler Unterdrückung, die Lebensfreude rauben können.'
      }
    }
  ];

  /* 생년월일로 별자리 판별 */
  function getZodiac(month, day) {
    for (const sign of SIGNS) {
      if (sign.startMonth === sign.endMonth) continue; // 안전장치
      // 염소자리처럼 연도를 넘기는 경우
      if (sign.startMonth > sign.endMonth) {
        if ((month === sign.startMonth && day >= sign.startDay) ||
            (month === sign.endMonth && day <= sign.endDay)) {
          return sign;
        }
      } else {
        if ((month === sign.startMonth && day >= sign.startDay) ||
            (month === sign.endMonth && day <= sign.endDay)) {
          return sign;
        }
      }
    }
    return SIGNS[0]; // 폴백
  }

  /* 원소 이름 다국어 */
  const ELEMENT_NAMES = {
    fire:  { ko: '불', en: 'Fire', ja: '火', es: 'Fuego', pt: 'Fogo', fr: 'Feu', de: 'Feuer' },
    water: { ko: '물', en: 'Water', ja: '水', es: 'Agua', pt: 'Água', fr: 'Eau', de: 'Wasser' },
    earth: { ko: '흙', en: 'Earth', ja: '地', es: 'Tierra', pt: 'Terra', fr: 'Terre', de: 'Erde' },
    air:   { ko: '바람', en: 'Air', ja: '風', es: 'Aire', pt: 'Ar', fr: 'Air', de: 'Luft' }
  };

  /* 원소 호환성 */
  const ELEMENT_COMPAT = {
    fire:  { fire: 'good', air: 'great', water: 'poor', earth: 'neutral' },
    water: { water: 'good', earth: 'great', fire: 'poor', air: 'neutral' },
    air:   { air: 'good', fire: 'great', water: 'neutral', earth: 'poor' },
    earth: { earth: 'good', water: 'great', air: 'poor', fire: 'neutral' }
  };

  function getElementCompat(el1, el2) {
    return ELEMENT_COMPAT[el1]?.[el2] || 'neutral';
  }

  function getElementName(element) {
    const lang = window.getLang ? window.getLang() : 'ko';
    return ELEMENT_NAMES[element]?.[lang] || ELEMENT_NAMES[element]?.en || element;
  }

  /* 공개 API */
  window.ZODIAC = {
    SIGNS: SIGNS,
    ELEMENT_NAMES: ELEMENT_NAMES,
    getZodiac: getZodiac,
    getElementCompat: getElementCompat,
    getElementName: getElementName,
    getSignById: function (id) {
      return SIGNS.find(s => s.id === id) || null;
    },
    getAllSigns: function () {
      return SIGNS;
    }
  };
})();
