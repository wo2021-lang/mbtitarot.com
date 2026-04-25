/* ============================================
 *  app.js - Mystical Orion MBTI Tarot
 *  리치 카드 디자인 + 딥 해석 + 라운드별 뽑기
 * ============================================ */
(function () {
  'use strict';

  /* ──── 다국어 헬퍼 ──── */
  function L(key, params) {
    var val = (window.t ? window.t(key) : null) || key;
    if (params) {
      Object.keys(params).forEach(function(k) { val = val.replace('{' + k + '}', params[k]); });
    }
    return val;
  }
  function lang() { return window.getLang ? window.getLang() : 'ko'; }
  function isKo() { return lang() === 'ko'; }

  /* ──── 커스텀 날짜 입력 헬퍼 ──── */
  function getDateValue(groupId) {
    var g = document.getElementById(groupId);
    if (!g) return '';
    var y = g.querySelector('.date-y');
    var m = g.querySelector('.date-m');
    var d = g.querySelector('.date-d');
    if (!y || !m || !d || !y.value || !m.value || !d.value) return '';
    var yv = parseInt(y.value), mv = parseInt(m.value), dv = parseInt(d.value);
    if (isNaN(yv) || isNaN(mv) || isNaN(dv)) return '';
    return yv + '-' + (mv < 10 ? '0' + mv : mv) + '-' + (dv < 10 ? '0' + dv : dv);
  }
  function setDateValue(groupId, val) {
    var g = document.getElementById(groupId);
    if (!g || !val) return;
    var parts = val.split('-');
    if (parts.length !== 3) return;
    var y = g.querySelector('.date-y');
    var m = g.querySelector('.date-m');
    var d = g.querySelector('.date-d');
    if (y) y.value = parseInt(parts[0]);
    if (m) m.value = parseInt(parts[1]);
    if (d) d.value = parseInt(parts[2]);
  }
  function clearDateValue(groupId) {
    var g = document.getElementById(groupId);
    if (!g) return;
    var inputs = g.querySelectorAll('input');
    inputs.forEach(function(inp) { inp.value = ''; });
  }

  /* ──── 다국어 예제 질문 & placeholder ──── */
  var EXAMPLE_Q = {
    ko: {
      love: ['그 사람이 나를 좋아할까?', '이 연애를 계속해도 될까?', '새로운 인연이 올까?', '전 애인과 다시 만날 수 있을까?', '언제쯤 좋은 사람을 만날까?', '지금 고백해도 괜찮을까?', '이 사람이 나의 운명일까?'],
      money: ['이번 달 재물운은?', '투자해도 괜찮을까?', '부업을 시작해도 될까?', '빌려준 돈을 돌려받을 수 있을까?', '올해 안에 목돈을 모을 수 있을까?', '지금 사업을 시작해도 될까?', '로또 같은 횡재가 올까?'],
      health: ['건강에서 주의할 점은?', '올해 건강운은 어떨까?', '다이어트에 성공할 수 있을까?', '수면 문제가 해결될까?', '스트레스를 줄이는 방법은?', '운동을 시작해도 될까?', '검진을 받아봐야 할까?'],
      career: ['이직해도 괜찮을까?', '승진할 수 있을까?', '상사와의 관계가 나아질까?', '새 직장에 잘 적응할 수 있을까?', '프리랜서로 전향해도 될까?', '지금 하는 일이 내 적성에 맞을까?', '올해 안에 좋은 기회가 올까?'],
      study: ['시험에 합격할 수 있을까?', '이 전공이 나에게 맞을까?', '유학을 가도 될까?', '자격증 시험 결과가 좋을까?', '공부 방법을 바꿔야 할까?', '올해 성적이 오를까?', '대학원에 진학해도 될까?'],
      general: ['요즘 내 운세는 어떨까?', '올해 가장 좋은 시기는?', '지금 내 삶의 방향이 맞을까?', '큰 변화가 찾아올까?', '행운이 올 시기는 언제일까?', '가장 주의해야 할 것은?', '이사를 해도 괜찮을까?'],
      today: ['오늘 하루 어떤 일이 생길까?', '오늘 주의할 점은?', '오늘 좋은 일이 생길까?', '오늘 어떤 마음가짐이 좋을까?', '오늘 만나는 사람과 잘 될까?', '오늘 중요한 결정을 해도 될까?'],
      tomorrow: ['내일 기대해도 될까?', '내일 무엇을 조심해야 할까?', '내일 중요한 약속이 잘 될까?', '내일의 에너지는 어떨까?', '내일 새로운 시작을 해도 될까?', '내일 좋은 소식이 올까?'],
      week: ['이번 주 핵심 메시지는?', '이번 주 가장 좋은 날은?', '이번 주 주의할 요일은?', '이번 주 기회가 올까?', '이번 주 대인관계는?', '이번 주 건강은 어떨까?'],
      month: ['이번 달 가장 좋은 시기는?', '이번 달 재물운은?', '이번 달 주의할 점은?', '이번 달 인연이 찾아올까?', '이번 달 중요한 변화가 있을까?', '이번 달 목표를 이룰 수 있을까?'],
      year: ['올해 전체 운세는?', '올해 가장 좋은 달은?', '올해 주의해야 할 시기는?', '올해 큰 행운이 올까?', '올해 인생의 전환점이 있을까?', '올해 이루고 싶은 소원이 이루어질까?'],
      marriage: ['결혼 시기가 다가오고 있을까?', '지금 만나는 사람과 결혼해도 될까?', '결혼 후 행복할 수 있을까?', '올해 안에 좋은 혼처가 나타날까?', '결혼 준비를 시작해도 될까?', '배우자와의 궁합은 어떨까?'],
      social: ['직장 동료와의 관계가 나아질까?', '새로운 인맥을 만들 수 있을까?', '갈등 중인 사람과 화해할 수 있을까?', '모임에서 좋은 인연을 만날까?', '친구 관계에서 주의할 점은?', '상사와의 갈등이 해결될까?'],
      question: ['지금 내가 가장 알아야 할 것은?', '이 고민이 해결될까?', '내가 올바른 선택을 하고 있을까?', '지금 포기해야 할까 계속해야 할까?', '숨겨진 기회가 있을까?', '나에게 필요한 메시지는?', '이 상황이 언제 좋아질까?']
    },
    en: {
      love: ['Does that person like me?', 'Should I continue this relationship?', 'Will a new love come?', 'Can I get back with my ex?', 'When will I meet someone special?', 'Is now a good time to confess?', 'Is this person my soulmate?'],
      money: ["What's my financial luck this month?", 'Is it safe to invest now?', 'Should I start a side hustle?', 'Will I get my money back?', 'Can I save a lot this year?', 'Should I start a business now?', 'Will I have a financial windfall?'],
      health: ['Any health concerns to watch?', "How's my health luck this year?", 'Will my diet succeed?', 'Will my sleep improve?', 'How can I reduce stress?', 'Should I start exercising?', 'Should I get a checkup?'],
      career: ['Should I change jobs?', 'Will I get promoted?', 'Will my boss relationship improve?', 'Will I adapt well to a new job?', 'Should I go freelance?', 'Is this job right for me?', 'Will a good opportunity come this year?'],
      study: ['Will I pass the exam?', 'Is this major right for me?', 'Should I study abroad?', 'How will my certification go?', 'Should I change study methods?', 'Will my grades improve?', 'Should I pursue grad school?'],
      general: ["What's my fortune lately?", 'When is the best time this year?', 'Am I on the right path?', 'Is a big change coming?', 'When will luck arrive?', 'What should I watch out for?', 'Is it okay to move homes?'],
      today: ['What will happen today?', 'What should I watch out for?', 'Will something good happen?', "What's the best mindset for today?", 'Will things go well with people I meet?', 'Can I make a big decision today?'],
      tomorrow: ['Can I look forward to tomorrow?', 'What should I be careful about?', 'Will my plans go well?', "What's tomorrow's energy like?", 'Good for new beginnings?', 'Will good news come?'],
      week: ["This week's key message?", 'Best day of the week?', 'Which day requires caution?', 'Will opportunities come?', 'How are relationships this week?', "How's my health this week?"],
      month: ['Best time this month?', "This month's financial luck?", 'What to watch out for?', 'Will I meet someone special?', 'Any big changes?', 'Can I reach my goals?'],
      year: ["This year's overall fortune?", 'Best month of the year?', 'When to be cautious?', 'Will great luck come?', 'Any turning points?', 'Will my wishes come true?'],
      marriage: ['Is marriage timing near?', 'Should I marry this person?', 'Will I be happy after marriage?', 'Will a good match appear?', 'Should I start wedding prep?', "What's our compatibility like?"],
      social: ['Will colleague relationships improve?', 'Can I build new connections?', 'Can I reconcile with someone?', 'Will I meet good people at events?', 'What to watch in friendships?', 'Will conflicts with my boss resolve?'],
      question: ['What do I most need to know?', 'Will this worry be resolved?', 'Am I making the right choice?', 'Should I give up or keep going?', 'Are there hidden opportunities?', 'What message do I need?', 'When will things get better?']
    },
    ja: {
      love: ['あの人は私のことが好き？', 'この恋を続けてもいい？', '新しい出会いはある？', '元カレと復縁できる？', 'いつ良い人に出会える？', '今告白してもいい？', 'この人は運命の人？'],
      money: ['今月の金運は？', '投資しても大丈夫？', '副業を始めてもいい？', '貸したお金は返ってくる？', '今年中にお金が貯まる？', '今起業してもいい？', '思わぬ臨時収入がある？'],
      health: ['健康で注意すべき点は？', '今年の健康運は？', 'ダイエットは成功する？', '睡眠の問題は解決する？', 'ストレスを減らす方法は？', '運動を始めてもいい？', '健康診断を受けるべき？'],
      career: ['転職してもいい？', '昇進できる？', '上司との関係は良くなる？', '新しい職場に馴染める？', 'フリーランスに転向すべき？', '今の仕事は自分に合ってる？', '良い機会が来る？'],
      study: ['試験に受かる？', 'この専攻は自分に合ってる？', '留学してもいい？', '資格試験の結果は？', '勉強方法を変えるべき？', '今年成績は上がる？', '大学院に進学すべき？'],
      general: ['最近の運勢は？', '今年一番良い時期は？', '今の人生の方向は正しい？', '大きな変化が来る？', '幸運が来る時期は？', '注意すべきことは？', '引っ越ししてもいい？'],
      today: ['今日はどんな一日？', '今日注意すべき点は？', '今日良いことがある？', '今日の心構えは？', '会う人とうまくいく？', '重要な決断をしていい？'],
      tomorrow: ['明日は期待していい？', '明日何に気をつけるべき？', '明日の約束はうまくいく？', '明日のエネルギーは？', '明日新しいスタートを切っていい？', '良い知らせが来る？'],
      week: ['今週のキーメッセージは？', '今週一番良い日は？', '注意すべき曜日は？', '今週チャンスが来る？', '今週の対人関係は？', '今週の健康運は？'],
      month: ['今月一番良い時期は？', '今月の金運は？', '今月注意すべき点は？', '良い出会いがある？', '大きな変化がある？', '目標は達成できる？'],
      year: ['今年の全体運は？', '一番良い月は？', '注意すべき時期は？', '大きな幸運が来る？', '人生の転換点がある？', '今年の願いは叶う？'],
      marriage: ['結婚の時期は近い？', '今の相手と結婚していい？', '結婚後幸せになれる？', '良い縁がある？', '結婚準備を始めていい？', 'パートナーとの相性は？'],
      social: ['同僚との関係は良くなる？', '新しい人脈を作れる？', '仲直りできる？', '良い出会いがある？', '友人関係で注意すべき点は？', '上司との対立は解決する？'],
      question: ['今一番知るべきことは？', 'この悩みは解決する？', '正しい選択をしている？', '諦めるべき？続けるべき？', '隠れたチャンスがある？', '必要なメッセージは？', 'いつ状況は良くなる？']
    },
    es: {
      love: ['¿Le gusto a esa persona?', '¿Debo continuar esta relación?', '¿Llegará un nuevo amor?', '¿Puedo volver con mi ex?', '¿Cuándo conoceré a alguien?', '¿Es buen momento para confesar?', '¿Es esta persona mi destino?'],
      money: ['¿Cómo va mi suerte financiera?', '¿Es seguro invertir ahora?', '¿Debo empezar un negocio extra?', '¿Recuperaré mi dinero?', '¿Puedo ahorrar mucho este año?', '¿Debo emprender un negocio?', '¿Vendrá una ganancia inesperada?'],
      health: ['¿Qué debo cuidar en mi salud?', '¿Cómo es mi salud este año?', '¿Tendré éxito con la dieta?', '¿Mejorarán mis problemas de sueño?', '¿Cómo reducir el estrés?', '¿Debo hacer ejercicio?', '¿Debo hacerme un chequeo?'],
      career: ['¿Debo cambiar de trabajo?', '¿Podré ascender?', '¿Mejorará la relación con mi jefe?', '¿Me adaptaré al nuevo trabajo?', '¿Debo ser freelancer?', '¿Este trabajo es para mí?', '¿Vendrá una buena oportunidad?'],
      study: ['¿Aprobaré el examen?', '¿Esta carrera es para mí?', '¿Debo estudiar en el extranjero?', '¿Cómo irá mi certificación?', '¿Debo cambiar mi método de estudio?', '¿Mejorarán mis notas?', '¿Debo hacer un posgrado?'],
      general: ['¿Cómo es mi suerte últimamente?', '¿Cuál es el mejor momento del año?', '¿Voy por buen camino?', '¿Viene un gran cambio?', '¿Cuándo llegará la suerte?', '¿Qué debo cuidar más?', '¿Es buen momento para mudarme?'],
      today: ['¿Qué pasará hoy?', '¿Qué debo cuidar hoy?', '¿Pasará algo bueno?', '¿Cuál es la mejor actitud?', '¿Irá bien con la gente que vea?', '¿Puedo tomar decisiones importantes?'],
      tomorrow: ['¿Puedo esperar algo bueno mañana?', '¿Qué debo cuidar mañana?', '¿Saldrán bien mis planes?', '¿Cómo será la energía de mañana?', '¿Es buen día para empezar algo?', '¿Vendrán buenas noticias?'],
      week: ['¿Mensaje clave de esta semana?', '¿Mejor día de la semana?', '¿Qué día debo cuidar?', '¿Vendrán oportunidades?', '¿Cómo van las relaciones?', '¿Cómo estará mi salud?'],
      month: ['¿Mejor momento del mes?', '¿Suerte financiera este mes?', '¿Qué cuidar este mes?', '¿Conoceré a alguien especial?', '¿Habrá grandes cambios?', '¿Puedo lograr mis metas?'],
      year: ['¿Fortuna general del año?', '¿Mejor mes del año?', '¿Cuándo debo ser cauteloso?', '¿Vendrá gran suerte?', '¿Habrá un punto de inflexión?', '¿Se cumplirán mis deseos?'],
      marriage: ['¿Se acerca el momento del matrimonio?', '¿Debo casarme con esta persona?', '¿Seré feliz después de casarme?', '¿Aparecerá una buena pareja?', '¿Debo empezar los preparativos?', '¿Cómo es nuestra compatibilidad?'],
      social: ['¿Mejorará la relación con colegas?', '¿Puedo hacer nuevas conexiones?', '¿Puedo reconciliarme?', '¿Conoceré buenas personas?', '¿Qué cuidar en las amistades?', '¿Se resolverá el conflicto con mi jefe?'],
      question: ['¿Qué necesito saber ahora?', '¿Se resolverá esta preocupación?', '¿Estoy decidiendo bien?', '¿Debo rendirme o seguir?', '¿Hay oportunidades ocultas?', '¿Qué mensaje necesito?', '¿Cuándo mejorarán las cosas?']
    },
    pt: {
      love: ['Essa pessoa gosta de mim?', 'Devo continuar esse relacionamento?', 'Um novo amor virá?', 'Posso voltar com meu ex?', 'Quando vou conhecer alguém especial?', 'É hora de me declarar?', 'Essa pessoa é meu destino?'],
      money: ['Como está minha sorte financeira?', 'É seguro investir agora?', 'Devo começar um trabalho extra?', 'Vou recuperar meu dinheiro?', 'Consigo juntar bastante este ano?', 'Devo abrir um negócio?', 'Virá uma sorte inesperada?'],
      health: ['O que devo cuidar na saúde?', 'Como está minha saúde este ano?', 'Minha dieta vai funcionar?', 'Meu sono vai melhorar?', 'Como reduzir o estresse?', 'Devo começar a me exercitar?', 'Devo fazer um check-up?'],
      career: ['Devo mudar de emprego?', 'Vou conseguir uma promoção?', 'A relação com o chefe vai melhorar?', 'Vou me adaptar ao novo trabalho?', 'Devo virar freelancer?', 'Esse trabalho é pra mim?', 'Uma boa oportunidade virá?'],
      study: ['Vou passar no exame?', 'Esse curso é pra mim?', 'Devo estudar fora?', 'Como vai minha certificação?', 'Devo mudar o método de estudo?', 'Minhas notas vão melhorar?', 'Devo fazer pós-graduação?'],
      general: ['Como está minha sorte?', 'Qual o melhor momento do ano?', 'Estou no caminho certo?', 'Vem uma grande mudança?', 'Quando a sorte vai chegar?', 'O que devo ter cuidado?', 'É bom momento para mudar de casa?'],
      today: ['O que vai acontecer hoje?', 'O que devo ter cuidado?', 'Algo bom vai acontecer?', 'Qual a melhor atitude?', 'Vai dar certo com quem eu encontrar?', 'Posso tomar decisões importantes?'],
      tomorrow: ['Posso esperar coisas boas amanhã?', 'O que devo ter cuidado?', 'Meus planos vão dar certo?', 'Como será a energia de amanhã?', 'Amanhã é bom para começar algo?', 'Boas notícias virão?'],
      week: ['Mensagem chave da semana?', 'Melhor dia da semana?', 'Qual dia devo ter cuidado?', 'Oportunidades virão?', 'Como estão as relações?', 'Como está minha saúde?'],
      month: ['Melhor momento do mês?', 'Sorte financeira deste mês?', 'O que cuidar este mês?', 'Vou conhecer alguém especial?', 'Grandes mudanças?', 'Posso alcançar minhas metas?'],
      year: ['Fortuna geral do ano?', 'Melhor mês do ano?', 'Quando devo ter cautela?', 'Grande sorte virá?', 'Haverá um ponto de virada?', 'Meus desejos se realizarão?'],
      marriage: ['O casamento está perto?', 'Devo casar com essa pessoa?', 'Serei feliz depois de casar?', 'Um bom par aparecerá?', 'Devo começar os preparativos?', 'Como é nossa compatibilidade?'],
      social: ['A relação com colegas vai melhorar?', 'Posso fazer novas conexões?', 'Posso me reconciliar?', 'Vou conhecer boas pessoas?', 'O que cuidar nas amizades?', 'O conflito com o chefe vai resolver?'],
      question: ['O que mais preciso saber?', 'Essa preocupação será resolvida?', 'Estou fazendo a escolha certa?', 'Devo desistir ou continuar?', 'Há oportunidades escondidas?', 'Que mensagem eu preciso?', 'Quando as coisas vão melhorar?']
    },
    fr: {
      love: ['Est-ce que cette personne m\'aime ?', 'Dois-je continuer cette relation ?', 'Un nouvel amour viendra ?', 'Puis-je revenir avec mon ex ?', 'Quand vais-je rencontrer quelqu\'un ?', 'Est-ce le bon moment d\'avouer ?', 'Cette personne est-elle mon destin ?'],
      money: ['Comment est ma chance financière ?', 'Est-il sûr d\'investir ?', 'Dois-je lancer une activité secondaire ?', 'Vais-je récupérer mon argent ?', 'Puis-je économiser cette année ?', 'Dois-je créer une entreprise ?', 'Un gain inattendu viendra ?'],
      health: ['Que surveiller pour ma santé ?', 'Comment est ma santé cette année ?', 'Mon régime va réussir ?', 'Mon sommeil va s\'améliorer ?', 'Comment réduire le stress ?', 'Dois-je commencer le sport ?', 'Dois-je faire un bilan ?'],
      career: ['Dois-je changer de travail ?', 'Vais-je être promu(e) ?', 'La relation avec mon chef va s\'améliorer ?', 'Vais-je m\'adapter au nouveau poste ?', 'Dois-je devenir freelance ?', 'Ce travail me convient-il ?', 'Une bonne opportunité viendra ?'],
      study: ['Vais-je réussir l\'examen ?', 'Cette filière est-elle pour moi ?', 'Dois-je étudier à l\'étranger ?', 'Comment ira ma certification ?', 'Dois-je changer de méthode ?', 'Mes notes vont monter ?', 'Dois-je faire un master ?'],
      general: ['Comment est ma chance en ce moment ?', 'Meilleur moment de l\'année ?', 'Suis-je sur le bon chemin ?', 'Un grand changement arrive ?', 'Quand la chance va arriver ?', 'De quoi me méfier ?', 'Bon moment pour déménager ?'],
      today: ['Que va-t-il se passer aujourd\'hui ?', 'Que surveiller aujourd\'hui ?', 'Quelque chose de bien arrivera ?', 'Quelle attitude adopter ?', 'Les rencontres d\'aujourd\'hui iront bien ?', 'Puis-je prendre des décisions importantes ?'],
      tomorrow: ['Puis-je espérer demain ?', 'Que dois-je surveiller demain ?', 'Mes plans de demain iront bien ?', 'Quelle sera l\'énergie de demain ?', 'Demain est-il bon pour un nouveau départ ?', 'De bonnes nouvelles viendront ?'],
      week: ['Message clé de la semaine ?', 'Meilleur jour de la semaine ?', 'Quel jour faire attention ?', 'Des opportunités cette semaine ?', 'Comment sont les relations ?', 'Comment va ma santé ?'],
      month: ['Meilleur moment du mois ?', 'Chance financière ce mois-ci ?', 'Que surveiller ce mois-ci ?', 'Vais-je rencontrer quelqu\'un ?', 'De grands changements ?', 'Puis-je atteindre mes objectifs ?'],
      year: ['Fortune générale de l\'année ?', 'Meilleur mois de l\'année ?', 'Quand être prudent ?', 'Une grande chance viendra ?', 'Y aura-t-il un tournant ?', 'Mes souhaits se réaliseront ?'],
      marriage: ['Le mariage approche ?', 'Dois-je épouser cette personne ?', 'Serai-je heureux(se) après ?', 'Un bon parti apparaîtra ?', 'Dois-je commencer les préparatifs ?', 'Comment est notre compatibilité ?'],
      social: ['La relation avec les collègues va s\'améliorer ?', 'Puis-je créer de nouveaux contacts ?', 'Puis-je me réconcilier ?', 'Vais-je rencontrer de bonnes personnes ?', 'Que surveiller dans les amitiés ?', 'Le conflit avec mon chef se résoudra ?'],
      question: ['Que dois-je savoir maintenant ?', 'Ce souci sera résolu ?', 'Fais-je le bon choix ?', 'Dois-je abandonner ou continuer ?', 'Y a-t-il des opportunités cachées ?', 'Quel message ai-je besoin ?', 'Quand les choses s\'amélioreront ?']
    },
    de: {
      love: ['Mag diese Person mich?', 'Soll ich die Beziehung fortsetzen?', 'Kommt eine neue Liebe?', 'Kann ich meinen Ex zurückgewinnen?', 'Wann treffe ich jemand Besonderen?', 'Soll ich mich jetzt gestehen?', 'Ist diese Person mein Schicksal?'],
      money: ['Wie ist mein Finanzglück?', 'Ist es sicher zu investieren?', 'Soll ich einen Nebenjob starten?', 'Bekomme ich mein Geld zurück?', 'Kann ich dieses Jahr viel sparen?', 'Soll ich ein Geschäft gründen?', 'Kommt ein unerwarteter Gewinn?'],
      health: ['Was bei der Gesundheit beachten?', 'Wie ist meine Gesundheit dieses Jahr?', 'Wird meine Diät erfolgreich?', 'Wird sich mein Schlaf verbessern?', 'Wie kann ich Stress reduzieren?', 'Soll ich mit Sport anfangen?', 'Soll ich eine Untersuchung machen?'],
      career: ['Soll ich den Job wechseln?', 'Werde ich befördert?', 'Wird sich das Verhältnis zum Chef bessern?', 'Werde ich mich gut einarbeiten?', 'Soll ich Freelancer werden?', 'Passt dieser Job zu mir?', 'Kommt eine gute Chance?'],
      study: ['Werde ich die Prüfung bestehen?', 'Ist dieses Fach das Richtige?', 'Soll ich im Ausland studieren?', 'Wie wird meine Zertifizierung?', 'Soll ich meine Lernmethode ändern?', 'Werden meine Noten steigen?', 'Soll ich den Master machen?'],
      general: ['Wie ist mein Glück derzeit?', 'Beste Zeit des Jahres?', 'Bin ich auf dem richtigen Weg?', 'Kommt eine große Veränderung?', 'Wann kommt das Glück?', 'Worauf soll ich achten?', 'Ist es gut umzuziehen?'],
      today: ['Was passiert heute?', 'Worauf heute achten?', 'Passiert heute etwas Gutes?', 'Welche Einstellung für heute?', 'Wird es gut mit den Leuten laufen?', 'Kann ich wichtige Entscheidungen treffen?'],
      tomorrow: ['Kann ich mich auf morgen freuen?', 'Worauf morgen achten?', 'Werden meine Pläne klappen?', 'Wie ist die Energie morgen?', 'Ist morgen gut für einen Neuanfang?', 'Kommen gute Nachrichten?'],
      week: ['Schlüsselbotschaft der Woche?', 'Bester Tag der Woche?', 'Welcher Tag erfordert Vorsicht?', 'Kommen Chancen?', 'Wie sind die Beziehungen?', 'Wie ist meine Gesundheit?'],
      month: ['Bester Zeitpunkt des Monats?', 'Finanzglück diesen Monat?', 'Worauf achten diesen Monat?', 'Treffe ich jemand Besonderen?', 'Große Veränderungen?', 'Kann ich meine Ziele erreichen?'],
      year: ['Gesamtglück des Jahres?', 'Bester Monat?', 'Wann Vorsicht?', 'Kommt großes Glück?', 'Gibt es einen Wendepunkt?', 'Werden meine Wünsche wahr?'],
      marriage: ['Nähert sich die Hochzeit?', 'Soll ich diese Person heiraten?', 'Werde ich nach der Hochzeit glücklich?', 'Erscheint ein guter Partner?', 'Soll ich mit Vorbereitungen beginnen?', 'Wie ist unsere Kompatibilität?'],
      social: ['Wird sich das Kollegenverhältnis bessern?', 'Kann ich neue Kontakte knüpfen?', 'Kann ich mich versöhnen?', 'Werde ich gute Leute treffen?', 'Worauf achten bei Freundschaften?', 'Wird der Konflikt mit dem Chef gelöst?'],
      question: ['Was muss ich jetzt wissen?', 'Wird diese Sorge gelöst?', 'Treffe ich die richtige Wahl?', 'Aufgeben oder weitermachen?', 'Gibt es versteckte Chancen?', 'Welche Botschaft brauche ich?', 'Wann werden die Dinge besser?']
    }
  };

  var PLACEHOLDERS = {
    ko: { love:'그 사람과의 인연은 어떻게 될까요?', money:'이번 달 재물운은 어떨까요?', health:'건강에서 주의할 점이 있을까요?', career:'이직을 해도 괜찮을까요?', general:'요즘 제 전반적인 운세는 어떨까요?', study:'시험에 합격할 수 있을까요?', _default:'마음속 질문을 자유롭게 적어주세요' },
    en: { love:'How will things go with that person?', money:"What's my financial luck this month?", health:'Any health concerns I should know?', career:'Should I change jobs?', general:"How's my overall fortune lately?", study:'Will I pass the exam?', _default:'Write your question freely' },
    ja: { love:'あの人との縁はどうなる？', money:'今月の金運は？', health:'健康で気をつけることは？', career:'転職してもいい？', general:'最近の全体的な運勢は？', study:'試験に合格できる？', _default:'心の中の質問を自由に書いてください' },
    es: { love:'¿Cómo irán las cosas con esa persona?', money:'¿Cómo es mi suerte financiera?', health:'¿Hay algo que deba cuidar?', career:'¿Debería cambiar de trabajo?', general:'¿Cómo es mi fortuna últimamente?', study:'¿Aprobaré el examen?', _default:'Escribe tu pregunta libremente' },
    pt: { love:'Como vão as coisas com essa pessoa?', money:'Como está minha sorte financeira?', health:'Há algo para cuidar na saúde?', career:'Devo mudar de emprego?', general:'Como está minha sorte geral?', study:'Vou passar no exame?', _default:'Escreva sua pergunta livremente' },
    fr: { love:'Comment ça va se passer avec cette personne ?', money:'Comment est ma chance financière ?', health:'Y a-t-il des précautions de santé ?', career:'Dois-je changer de travail ?', general:'Comment est ma fortune en ce moment ?', study:'Vais-je réussir l\'examen ?', _default:'Écrivez votre question librement' },
    de: { love:'Wie wird es mit dieser Person laufen?', money:'Wie ist mein Finanzglück?', health:'Gibt es gesundheitliche Bedenken?', career:'Soll ich den Job wechseln?', general:'Wie ist mein Gesamtglück?', study:'Werde ich die Prüfung bestehen?', _default:'Schreiben Sie Ihre Frage frei' }
  };

  function getExampleQuestions(topic) {
    var l = lang();
    var qs = EXAMPLE_Q[l] || EXAMPLE_Q.en;
    return qs[topic] || qs.general;
  }

  function getPlaceholder(topic) {
    var l = lang();
    var ph = PLACEHOLDERS[l] || PLACEHOLDERS.en;
    return ph[topic] || ph._default;
  }

  /* ──── 타로 카드 심볼 맵 (78장) ──── */
  var TAROT_SYMBOLS = {
    major_0:'🎭', major_1:'🎩', major_2:'🌙', major_3:'👑', major_4:'🏛️',
    major_5:'📿', major_6:'💑', major_7:'⚡', major_8:'🦁', major_9:'🏮',
    major_10:'☸️', major_11:'⚖️', major_12:'🔮', major_13:'🦋', major_14:'⏳',
    major_15:'😈', major_16:'🗼', major_17:'⭐', major_18:'🌕', major_19:'☀️',
    major_20:'📯', major_21:'🌍',
    wands_1:'🕯️', wands_2:'🌱', wands_3:'🚢', wands_4:'🏠', wands_5:'⚔️',
    wands_6:'🏆', wands_7:'🛡️', wands_8:'✈️', wands_9:'🏰', wands_10:'📦',
    wands_11:'🐾', wands_12:'🏇', wands_13:'👸', wands_14:'🤴',
    cups_1:'🏆', cups_2:'💕', cups_3:'🥂', cups_4:'😔', cups_5:'😢',
    cups_6:'🧒', cups_7:'💭', cups_8:'🚶', cups_9:'😊', cups_10:'🌈',
    cups_11:'🐟', cups_12:'🏇', cups_13:'👸', cups_14:'🤴',
    swords_1:'⚔️', swords_2:'🤞', swords_3:'💔', swords_4:'🛌', swords_5:'💨',
    swords_6:'⛵', swords_7:'🗡️', swords_8:'🔗', swords_9:'😰', swords_10:'🌅',
    swords_11:'🦅', swords_12:'🏇', swords_13:'👸', swords_14:'🤴',
    pentacles_1:'💰', pentacles_2:'🎪', pentacles_3:'🏗️', pentacles_4:'🏦', pentacles_5:'❄️',
    pentacles_6:'🤝', pentacles_7:'🌻', pentacles_8:'⚒️', pentacles_9:'🍇', pentacles_10:'👨‍👩‍👧‍👦',
    pentacles_11:'🐇', pentacles_12:'🏇', pentacles_13:'👸', pentacles_14:'🤴'
  };

  /* ──── 원소별 색상 ──── */
  var ELEMENT_COLORS = {
    fire:   { main: '#e74c3c', light: '#f5a0a0', dark: '#8b1a1a', symbol: '🔥' },
    water:  { main: '#3b82f6', light: '#93c5fd', dark: '#1e40af', symbol: '💧' },
    earth:  { main: '#d97706', light: '#fbbf24', dark: '#78350f', symbol: '🌿' },
    air:    { main: '#8b5cf6', light: '#c4b5fd', dark: '#4c1d95', symbol: '💨' }
  };

  /* ──── 카드 슈트 정보 ──── */
  var SUIT_INFO = {
    null:       { name: { ko:'메이저 아르카나', en:'Major Arcana', ja:'大アルカナ', es:'Arcanos Mayores', pt:'Arcanos Maiores', fr:'Arcanes Majeurs', de:'Große Arkana' }, icon: '✦', element: 'spirit' },
    wands:      { name: { ko:'완드', en:'Wands', ja:'ワンド', es:'Bastos', pt:'Paus', fr:'Bâtons', de:'Stäbe' }, icon: '🪄', element: 'fire' },
    cups:       { name: { ko:'컵', en:'Cups', ja:'カップ', es:'Copas', pt:'Copas', fr:'Coupes', de:'Kelche' }, icon: '🏆', element: 'water' },
    swords:     { name: { ko:'소드', en:'Swords', ja:'ソード', es:'Espadas', pt:'Espadas', fr:'Épées', de:'Schwerter' }, icon: '⚔️', element: 'air' },
    pentacles:  { name: { ko:'펜타클', en:'Pentacles', ja:'ペンタクル', es:'Oros', pt:'Ouros', fr:'Deniers', de:'Münzen' }, icon: '⭐', element: 'earth' }
  };

  /* ──── 상태 변수 ──── */
  var currentReadingType = '';
  var pickedCards = [];
  var cardsToPick = 3;
  var dailyCardFlipped = false;
  var partnerMBTI = 'ESTJ';
  var currentQuestion = '';
  var currentRound = 0;
  var shuffledDeck = [];
  window.currentReadingType = '';

  /* ──── 스프레드 설정 ──── */
  /* ──── 방향 라벨 다국어 ──── */
  var DIR_LABEL = {
    upright:  { ko:'정방향', en:'Upright', ja:'正位置', es:'Normal', pt:'Normal', fr:'Droit', de:'Aufrecht' },
    reversed: { ko:'역방향', en:'Reversed', ja:'逆位置', es:'Invertida', pt:'Invertida', fr:'Inversé', de:'Umgekehrt' }
  };
  function getDirLabel(isReversed, ln) { var k = isReversed ? 'reversed' : 'upright'; return DIR_LABEL[k][ln] || DIR_LABEL[k].en; }

  var SPREAD_CONFIG = {
    1: {
      name: { ko:'원카드 리딩', en:'One Card Reading', ja:'ワンカードリーディング', es:'Lectura de una carta', pt:'Leitura de uma carta', fr:'Tirage une carte', de:'Ein-Karten-Lesung' },
      rounds: [
        { icon: '✦', label: { ko:'핵심 메시지', en:'Core Message', ja:'核心メッセージ', es:'Mensaje Central', pt:'Mensagem Central', fr:'Message Clé', de:'Kernbotschaft' }, desc: { ko:'가장 끌리는 카드 1장을 선택하세요', en:'Choose the card that calls to you', ja:'最も惹かれるカードを1枚選んでください', es:'Elige la carta que te atraiga', pt:'Escolha a carta que te chama', fr:'Choisissez la carte qui vous attire', de:'Wählen Sie die Karte, die Sie anspricht' } }
      ]
    },
    3: {
      name: { ko:'천·지·인 삼재 리딩', en:'Past·Present·Future Reading', ja:'過去·現在·未来リーディング', es:'Pasado·Presente·Futuro', pt:'Passado·Presente·Futuro', fr:'Passé·Présent·Futur', de:'Vergangenheit·Gegenwart·Zukunft' },
      rounds: [
        { icon: '🌅', label: { ko:'과거', en:'Past', ja:'過去', es:'Pasado', pt:'Passado', fr:'Passé', de:'Vergangenheit' }, desc: { ko:'지나온 흐름을 비추는 카드', en:'A card reflecting the past', ja:'過ぎ去った流れを映すカード', es:'Una carta que refleja el pasado', pt:'Uma carta que reflete o passado', fr:'Une carte reflétant le passé', de:'Eine Karte, die die Vergangenheit widerspiegelt' } },
        { icon: '⚡', label: { ko:'현재', en:'Present', ja:'現在', es:'Presente', pt:'Presente', fr:'Présent', de:'Gegenwart' }, desc: { ko:'지금 이 순간의 에너지', en:'Energy of the present moment', ja:'今この瞬間のエネルギー', es:'Energía del momento presente', pt:'Energia do momento presente', fr:'Énergie du moment présent', de:'Energie des gegenwärtigen Moments' } },
        { icon: '🌟', label: { ko:'미래', en:'Future', ja:'未来', es:'Futuro', pt:'Futuro', fr:'Futur', de:'Zukunft' }, desc: { ko:'다가올 가능성의 카드', en:'A card of future possibilities', ja:'これから来る可能性のカード', es:'Una carta de posibilidades futuras', pt:'Uma carta de possibilidades futuras', fr:'Une carte de possibilités futures', de:'Eine Karte zukünftiger Möglichkeiten' } }
      ]
    }
  };

  /* ============ 초기화 ============ */
  function init() {
    try {
      if (window.detectLang) window.detectLang();
      applyTranslations();
      highlightLangBtn();
    } catch (e) { console.error('i18n:', e); }

    var lang = window.getLang ? window.getLang() : 'en';
    document.documentElement.lang = lang;
    toggleKoreanOnly(lang);

    // 이벤트 바인딩
    var qi = document.getElementById('question-input');
    if (qi) qi.addEventListener('input', function () {
      var cc = document.getElementById('q-char-count');
      if (cc) cc.textContent = this.value.length;
    });
    var gs = document.getElementById('gallery-search');
    if (gs) gs.addEventListener('input', function () { renderGallery(this.value.trim()); });
    var sbg = document.getElementById('setup-birth-group');
    if (sbg) {
      sbg.querySelectorAll('input').forEach(function(inp) {
        inp.addEventListener('change', updateZodiacPreview);
      });
    }

    initPoints();
    initParticles();
    showTopNav(true);
    loadCoupangAds();
    updateVisitorCounter();

    // 최초 접속 시 안내 팝업 표시
    if (!localStorage.getItem('mystical_welcome_seen')) {
      localStorage.setItem('mystical_welcome_seen', '1');
      setTimeout(function() {
        var wm = document.getElementById('welcome-modal');
        if (wm) wm.classList.add('show');
      }, 800);
    }
  }

  /* ============ 쿠팡 파트너스 광고 (한국어만) ============ */
  var COUPANG_COOLDOWN = 2 * 60 * 60 * 1000; // 2시간
  var COUPANG_POINTS = 50;
  var COUPANG_MAX_CLICKS = 3; // 2시간마다 3번

  function getCoupangClickData() {
    var data = JSON.parse(localStorage.getItem('coupang_clicks') || '{"count":0,"start":0}');
    if (Date.now() - data.start >= COUPANG_COOLDOWN) {
      data = { count: 0, start: Date.now() };
      localStorage.setItem('coupang_clicks', JSON.stringify(data));
    }
    return data;
  }

  function canEarnCoupangPoints() {
    var data = getCoupangClickData();
    return data.count < COUPANG_MAX_CLICKS;
  }

  function getCoupangCooldownText() {
    var data = getCoupangClickData();
    if (data.count < COUPANG_MAX_CLICKS) return '';
    var diff = COUPANG_COOLDOWN - (Date.now() - data.start);
    if (diff <= 0) return '';
    var h = Math.floor(diff / 3600000);
    var m = Math.floor((diff % 3600000) / 60000);
    return h + '시간 ' + m + '분 후 적립 가능';
  }

  function onCoupangAdClick() {
    var data = getCoupangClickData();
    if (data.count < COUPANG_MAX_CLICKS) {
      data.count++;
      if (data.count === 1) data.start = Date.now();
      localStorage.setItem('coupang_clicks', JSON.stringify(data));
      addPoints(COUPANG_POINTS);
      updatePointsDisplay();
      var remain = COUPANG_MAX_CLICKS - data.count;
      showToast('+' + COUPANG_POINTS + 'P 적립! (남은 횟수: ' + remain + ')');
    } else {
      showToast('⏳ ' + getCoupangCooldownText());
    }
  }

  /* ──── 방문자 카운터 (Firestore 실시간) ──── */
  var VISITOR_API = 'https://firestore.googleapis.com/v1/projects/mbtitarot-a02c6/databases/(default)/documents/stats/visitors';
  var VISITOR_LANGS = ['ko','en','ja','es','pt','fr','de'];

  function updateVisitorCounter() {
    var currentLang = window.getLang ? window.getLang() : 'ko';

    // 세션당 1회만 카운트 (같은 탭에서 중복 방지)
    if (sessionStorage.getItem('visitor_counted')) {
      // 이미 카운트됨 - 데이터만 표시
      fetchVisitorData();
      return;
    }
    sessionStorage.setItem('visitor_counted', '1');

    // Firestore에서 현재 데이터 읽기 → 증가 → 저장
    fetch(VISITOR_API)
      .then(function(r) {
        if (r.ok) return r.json();
        // 문서가 없으면 새로 생성
        return null;
      })
      .then(function(doc) {
        var fields = {};
        if (doc && doc.fields) {
          // 기존 데이터 가져오기
          for (var i = 0; i < VISITOR_LANGS.length; i++) {
            var l = VISITOR_LANGS[i];
            fields[l] = { integerValue: String(parseInt(doc.fields[l] ? doc.fields[l].integerValue : '0')) };
          }
        } else {
          for (var j = 0; j < VISITOR_LANGS.length; j++) {
            fields[VISITOR_LANGS[j]] = { integerValue: '0' };
          }
        }
        // 현재 언어 +1
        var cur = parseInt(fields[currentLang] ? fields[currentLang].integerValue : '0');
        fields[currentLang] = { integerValue: String(cur + 1) };

        // Firestore에 저장 (PATCH = 생성 또는 업데이트)
        return fetch(VISITOR_API, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fields: fields })
        });
      })
      .then(function(r) { return r.json(); })
      .then(function(doc) {
        renderVisitorData(doc.fields);
      })
      .catch(function() {
        // 실패 시 로컬 폴백
        renderVisitorFallback();
      });
  }

  function fetchVisitorData() {
    fetch(VISITOR_API)
      .then(function(r) { return r.json(); })
      .then(function(doc) {
        if (doc && doc.fields) renderVisitorData(doc.fields);
      })
      .catch(function() { renderVisitorFallback(); });
  }

  function renderVisitorData(fields) {
    var total = 0;
    for (var i = 0; i < VISITOR_LANGS.length; i++) {
      var l = VISITOR_LANGS[i];
      var cnt = parseInt(fields[l] ? fields[l].integerValue : '0');
      total += cnt;
      var el = document.getElementById('vc-' + l);
      if (el) el.textContent = cnt.toLocaleString();
    }
    var totalEl = document.getElementById('visitor-total');
    if (totalEl) totalEl.textContent = total.toLocaleString();
  }

  function renderVisitorFallback() {
    var totalEl = document.getElementById('visitor-total');
    if (totalEl) totalEl.textContent = '-';
  }

  function loadCoupangAds() {
    var lang = window.getLang ? window.getLang() : 'en';
    document.querySelectorAll('.coupang-ko-only').forEach(function(el) {
      el.style.display = (lang === 'ko') ? '' : 'none';
    });
    document.querySelectorAll('.amazon-ja-only').forEach(function(el) {
      var show = (lang === 'ja');
      if (el.classList.contains('amazon-top-banner')) {
        el.style.display = show ? 'block' : 'none';
      } else {
        el.style.display = show ? 'flex' : 'none';
      }
    });
    // iframe 클릭 감지 (blur 방식)
    window.addEventListener('blur', function() {
      var ae = document.activeElement;
      if (ae && ae.tagName === 'IFRAME' && ae.src && ae.src.indexOf('coupang') !== -1) {
        onCoupangAdClick();
        setTimeout(function() { window.focus(); }, 100);
      }
    });
  }
  window.onCoupangAdClick = onCoupangAdClick;

  /* ============ 포인트 시스템 ============ */
  function initPoints() {
    // 첫 방문 보너스
    if (!localStorage.getItem('mystical_points') && !localStorage.getItem('mystical_uuid')) {
      localStorage.setItem('mystical_points', '500');
    }
    updatePointsDisplay();
    checkDailyCheckinAvailable();
  }

  function getPoints() {
    return parseInt(localStorage.getItem('mystical_points') || '0');
  }

  function setPoints(val) {
    localStorage.setItem('mystical_points', String(Math.max(0, val)));
    updatePointsDisplay();
  }

  function addPoints(amount) {
    setPoints(getPoints() + amount);
  }

  function usePoints(amount) {
    var current = getPoints();
    if (current < amount) return false;
    setPoints(current - amount);
    return true;
  }

  function updatePointsDisplay() {
    var pts = getPoints();
    var el = document.getElementById('points-balance');
    if (el) el.textContent = pts;
    var hdr = document.getElementById('points-header');
    if (hdr) hdr.style.display = '';
    var bal = document.getElementById('point-balance-display');
    if (bal) bal.textContent = L('points_have', {n: pts});
    var modalD = document.getElementById('modal-points-display');
    if (modalD) modalD.textContent = pts + 'P';
  }

  window.showPointsInfo = function () {
    updatePointsDisplay();
    var modal = document.getElementById('points-modal');
    if (modal) modal.classList.add('show');
  };

  window.doDailyCheckin = function () {
    var today = new Date().toISOString().split('T')[0];
    var last = localStorage.getItem('mystical_last_checkin');
    if (last === today) {
      showToast(L('checkin_done'));
      return;
    }
    localStorage.setItem('mystical_last_checkin', today);
    addPoints(50);
    showToast(L('checkin_ok'));
    checkDailyCheckinAvailable();
  };

  function checkDailyCheckinAvailable() {
    var today = new Date().toISOString().split('T')[0];
    var last = localStorage.getItem('mystical_last_checkin');
    var btn = document.getElementById('checkin-btn');
    if (btn) {
      if (last === today) {
        btn.textContent = L('checkin_btn_done');
        btn.disabled = true;
        btn.style.opacity = '0.5';
      } else {
        btn.textContent = L('checkin_btn');
        btn.disabled = false;
        btn.style.opacity = '1';
      }
    }
  }

  window.watchAdForPoints = function () {
    // 실제로는 광고 SDK 연동, 여기선 시뮬레이션
    showToast(L('ad_loading'));
    setTimeout(function () {
      addPoints(30);
      showToast(L('ad_reward'));
    }, 1500);
  };

  /* ============ 별 파티클 배경 ============ */
  function initParticles() {
    var canvas = document.getElementById('particles');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    var particles = [];
    for (var i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.3,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.5 + 0.15,
        twinkle: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.02 + 0.005
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(function (p) {
        p.x += p.speedX;
        p.y += p.speedY;
        p.twinkle += p.twinkleSpeed;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        var alpha = p.opacity * (0.6 + 0.4 * Math.sin(p.twinkle));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(212, 175, 55, ' + alpha + ')';
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }
    animate();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }



  function toggleKoreanOnly(lang) {
    var saju = document.getElementById('saju-section');
    if (saju) saju.style.display = lang === 'ko' ? '' : 'none';
    var bh = document.getElementById('birth-hour-group');
    if (bh) bh.style.display = lang === 'ko' ? '' : 'none';
  }

  /* ============ 화면 전환 ============ */
  var noNavScreens = ['mbti-test-screen', 'shuffle-screen', 'pick-screen', 'reading-setup-screen'];

  window.showScreen = function (id) {
    document.querySelectorAll('.screen').forEach(function (s) { s.classList.remove('active'); });
    var el = document.getElementById(id);
    if (el) el.classList.add('active');
    showTopNav(noNavScreens.indexOf(id) === -1);
    var lang = window.getLang ? window.getLang() : 'ko';
    toggleKoreanOnly(lang);
    window.scrollTo(0, 0);
  };

  window.navigateTo = function (screenId, btn) {
    // 홈 버튼 → 랜딩 화면
    if (screenId === 'landing-screen') {
      showScreen('landing-screen');
      document.querySelectorAll('.topnav .nav').forEach(function (n) { n.classList.remove('active'); });
      if (btn) btn.classList.add('active');
      return;
    }
    var needsProfile = ['home-screen', 'category-screen', 'profile-screen'];
    if (needsProfile.indexOf(screenId) !== -1 && !localStorage.getItem('mystical_mbti')) {
      pendingAction = screenId === 'category-screen' ? 'reading' : 'daily';
      openSetupModal();
      return;
    }
    showScreen(screenId);
    document.querySelectorAll('.topnav .nav').forEach(function (n) { n.classList.remove('active'); });
    if (btn) btn.classList.add('active');
    if (screenId === 'home-screen') updateHomeScreen();
    if (screenId === 'gallery-screen') renderGallery();
    if (screenId === 'profile-screen') renderProfile();
    if (screenId === 'category-screen') updateCategorySummary();
  };

    function showTopNav(show) {
    var nav = document.getElementById('top-nav');
    if (nav) nav.style.display = show ? 'flex' : 'none';
  }

  /* ============ 랜딩 화면 ============ */
  var pendingAction = null;

  window.goLanding = function (action) {
    var hasProfile = localStorage.getItem('mystical_mbti');
    if (action === 'gallery') {
      showScreen('gallery-screen');
      showTopNav(true);
      renderGallery();
      return;
    }
    if (!hasProfile) {
      pendingAction = action;
      openSetupModal();
      return;
    }
    if (action === 'zodiac') {
      showScreen('zodiac-screen');
      showTopNav(true);
      renderZodiacScreen();
      return;
    }
    if (action === 'saju') {
      showTopNav(true);
      showSajuAnalysis();
      return;
    }
    if (action === 'lotto') {
      showTopNav(true);
      goToReading('lotto');
      return;
    }
    if (action === 'biorhythm') {
      showScreen('biorhythm-screen');
      showTopNav(true);
      renderBiorhythmScreen();
      return;
    }
    if (action === 'daily') {
      showScreen('home-screen');
      showTopNav(true);
      updateHomeScreen();
    } else if (action === 'reading') {
      showScreen('category-screen');
      showTopNav(true);
      updateCategorySummary();
    }
  };

  /* ============ 다국어 ============ */
  window.switchLang = function (lang) {
    if (window.setLang) window.setLang(lang);
    applyTranslations();
    highlightLangBtn();
    toggleKoreanOnly(lang);
    document.documentElement.lang = lang;
    loadCoupangAds();
    showToast(lang.toUpperCase());
  };

  function applyTranslations() {
    var htmlKeys = { app_name: true, cache_notice: true, ad_watch: true };
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = window.t ? window.t(key) : key;
      if (val && val !== key) {
        if (htmlKeys[key]) {
          el.innerHTML = val.replace(/\n/g, '<br>');
        } else {
          el.textContent = val;
        }
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var val = window.t ? window.t(key) : key;
      if (val && val !== key) el.placeholder = val;
    });
    // 태어난 시 select 옵션 다국어
    var hourSelect = document.getElementById('setup-birth-hour');
    if (hourSelect) {
      var hourNames = (window.t ? window.t('hour_names') : '').split(',');
      var hourValues = [0,1,3,5,7,9,11,13,15,17,19,21];
      var timeRanges = ['23:00~01:00','01:00~03:00','03:00~05:00','05:00~07:00','07:00~09:00','09:00~11:00','11:00~13:00','13:00~15:00','15:00~17:00','17:00~19:00','19:00~21:00','21:00~23:00'];
      if (hourNames.length === 12) {
        hourSelect.querySelectorAll('option').forEach(function(opt) {
          var v = parseInt(opt.value);
          var idx = hourValues.indexOf(v);
          if (idx !== -1) {
            opt.textContent = hourNames[idx] + ' (' + timeRanges[idx] + ')';
          }
        });
      }
    }
    var titleText = window.t ? window.t('app_name') : 'Mystical Orion MBTI Tarot';
    document.title = titleText.replace(/\n/g, ' ');
    // 서비스 안내 링크에 lang 파라미터 추가
    var currentLang = window.getLang ? window.getLang() : 'ko';
    document.querySelectorAll('.content-links-grid a').forEach(function(a) {
      var href = a.getAttribute('href');
      if (href && href.indexOf('.html') !== -1) {
        a.href = href.split('?')[0] + (currentLang !== 'ko' ? '?lang=' + currentLang : '');
      }
    });
  }

  function highlightLangBtn() {
    var lang = window.getLang ? window.getLang() : 'en';
    document.querySelectorAll('[data-lang-btn]').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang-btn') === lang);
    });
  }

  /* ============ 설정 모달 ============ */
  window.openSetupModal = function () {
    var modal = document.getElementById('setup-modal');
    if (modal) modal.classList.add('show');
    var mbti = localStorage.getItem('mystical_mbti');
    if (mbti) {
      selectedAxes.EI = mbti[0]; selectedAxes.SN = mbti[1];
      selectedAxes.TF = mbti[2]; selectedAxes.JP = mbti[3];
      updateMBTIPreview();
    }
    var birth = localStorage.getItem('mystical_birth');
    if (birth) {
      setDateValue('setup-birth-group', birth);
      updateZodiacPreview();
    }
  };

  window.switchSetupTab = function (tab, btn) {
    document.querySelectorAll('.tab').forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');
    document.querySelectorAll('.tab-body').forEach(function (c) { c.classList.remove('active'); });
    var el = document.getElementById('mbti-' + tab + '-tab');
    if (el) el.classList.add('active');
  };

  var selectedAxes = { EI: 'E', SN: 'S', TF: 'T', JP: 'J' };

  window.selectAxis = function (btn, value) {
    var parent = btn.parentElement;
    parent.querySelectorAll('.ax').forEach(function (b) { b.classList.remove('selected'); });
    btn.classList.add('selected');
    var axis = (value === 'E' || value === 'I') ? 'EI' :
               (value === 'S' || value === 'N') ? 'SN' :
               (value === 'T' || value === 'F') ? 'TF' : 'JP';
    selectedAxes[axis] = value;
    updateMBTIPreview();
  };

  function updateMBTIPreview() {
    var type = selectedAxes.EI + selectedAxes.SN + selectedAxes.TF + selectedAxes.JP;
    var el = document.getElementById('mbti-preview');
    if (el) el.textContent = type;
  }

  function updateZodiacPreview() {
    var birth = getDateValue('setup-birth-group');
    if (!birth) return;
    var parts = birth.split('-');
    var month = parseInt(parts[1]), day = parseInt(parts[2]);
    if (window.ZODIAC) {
      var sign = window.ZODIAC.getZodiac(month, day);
      var lang = window.getLang ? window.getLang() : 'en';
      var preview = document.getElementById('zodiac-preview');
      if (preview) {
        preview.style.display = '';
        document.getElementById('zodiac-symbol').textContent = sign.symbol;
        document.getElementById('zodiac-name').textContent = sign.name[lang] || sign.name.en;
      }
    }
  }

  window.saveSetup = function () {
    var mbti = selectedAxes.EI + selectedAxes.SN + selectedAxes.TF + selectedAxes.JP;
    var birth = getDateValue('setup-birth-group');
    var hour = document.getElementById('setup-birth-hour') ? document.getElementById('setup-birth-hour').value : '';
    var gender = document.querySelector('input[name="setup-gender"]:checked');
    if (!birth) { showToast(L('enter_birth')); return; }

    localStorage.setItem('mystical_mbti', mbti);
    localStorage.setItem('mystical_birth', birth);
    if (hour) localStorage.setItem('mystical_birth_hour', hour);
    if (gender) localStorage.setItem('mystical_gender', gender.value);
    if (!localStorage.getItem('mystical_uuid')) {
      localStorage.setItem('mystical_uuid', crypto.randomUUID ? crypto.randomUUID() : 'u-' + Date.now());
    }
    var parts = birth.split('-');
    if (window.ZODIAC) {
      var sign = window.ZODIAC.getZodiac(parseInt(parts[1]), parseInt(parts[2]));
      localStorage.setItem('mystical_zodiac', sign.id);
    }
    closeModal('setup-modal');

    if (pendingAction === 'daily') {
      showScreen('home-screen'); showTopNav(true); updateHomeScreen();
    } else if (pendingAction === 'biorhythm') {
      showScreen('biorhythm-screen'); showTopNav(true); renderBiorhythmScreen();
    } else if (pendingAction === 'reading' && pendingReadingType) {
      goToReading(pendingReadingType);
    } else if (pendingAction === 'reading') {
      showScreen('category-screen'); showTopNav(true); updateCategorySummary();
    } else {
      showScreen('home-screen'); showTopNav(true); updateHomeScreen();
    }
    pendingAction = null;
    pendingReadingType = '';
    showToast(L('saved'));
  };

  /* ============ MBTI 검사 ============ */
  var testAnswers = [];
  var testIndex = 0;

  window.startMBTITest = function () {
    if (!window.MBTI) { showToast('Loading...'); setTimeout(window.startMBTITest, 500); return; }
    testAnswers = []; testIndex = 0;
    closeModal('setup-modal');
    showScreen('mbti-test-screen');
    renderTestQuestion();
  };

  function renderTestQuestion() {
    var lang = window.getLang ? window.getLang() : 'en';
    var questions = window.MBTI ? window.MBTI.QUESTIONS : [];
    if (testIndex >= questions.length) { finishMBTITest(); return; }
    var q = questions[testIndex];
    var bar = document.getElementById('test-progress-bar');
    if (bar) bar.style.width = ((testIndex / questions.length) * 100) + '%';
    var counter = document.getElementById('test-counter');
    if (counter) counter.textContent = (testIndex + 1) + ' / ' + questions.length;
    var qText = document.getElementById('test-question-text');
    if (qText) qText.textContent = q.question[lang] || q.question.en;
    var opts = document.getElementById('test-options');
    if (opts) {
      opts.innerHTML =
        '<button class="btn" onclick="answerMBTI(\'' + q.optionA.value + '\')">' +
          escapeHtml(q.optionA.text[lang] || q.optionA.text.en) + '</button>' +
        '<button class="btn" onclick="answerMBTI(\'' + q.optionB.value + '\')">' +
          escapeHtml(q.optionB.text[lang] || q.optionB.text.en) + '</button>';
    }
  }

  window.answerMBTI = function (value) {
    testAnswers.push({ axis: window.MBTI.QUESTIONS[testIndex].axis, value: value });
    testIndex++;
    renderTestQuestion();
  };

  function finishMBTITest() {
    var result = window.MBTI.calculate(testAnswers);
    var lang = window.getLang ? window.getLang() : 'en';
    var info = window.MBTI.TYPES[result];
    document.getElementById('mbti-result-emoji').textContent = info ? info.emoji : '🔮';
    document.getElementById('mbti-result-type').textContent = result;
    document.getElementById('mbti-result-name').textContent = info ? (info.name[lang] || info.name.en) : '';
    document.getElementById('mbti-result-desc').textContent = info ? (info.desc[lang] || info.desc.en) : '';

    var barsEl = document.getElementById('mbti-result-bars');
    if (barsEl) {
      var counts = { E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0 };
      testAnswers.forEach(function (a) { counts[a.value] = (counts[a.value] || 0) + 1; });
      var axes = [['E','I'],['S','N'],['T','F'],['J','P']];
      var html = '';
      axes.forEach(function (pair) {
        var total = (counts[pair[0]]||0) + (counts[pair[1]]||0);
        var pct = total > 0 ? Math.round((counts[pair[0]]||0) / total * 100) : 50;
        html += '<div class="mbti-bar"><span class="bar-label">' + pair[0] + '</span>' +
          '<div class="bar-track"><div class="bar-fill" style="width:' + pct + '%"></div></div>' +
          '<span class="bar-pct">' + pct + '%</span>' +
          '<div class="bar-track"><div class="bar-fill" style="width:' + (100-pct) + '%"></div></div>' +
          '<span class="bar-label">' + pair[1] + '</span></div>';
      });
      barsEl.innerHTML = html;
    }
    window._testResultMBTI = result;
    showScreen('mbti-result-screen');
  }

  window.useMBTIResult = function () {
    if (window._testResultMBTI) {
      selectedAxes.EI = window._testResultMBTI[0]; selectedAxes.SN = window._testResultMBTI[1];
      selectedAxes.TF = window._testResultMBTI[2]; selectedAxes.JP = window._testResultMBTI[3];
    }
    showScreen('landing-screen');
    openSetupModal();
    updateMBTIPreview();
  };

  /* ============ 홈 화면 ============ */
  function updateHomeScreen() {
    var lang = window.getLang ? window.getLang() : 'en';
    var mbti = localStorage.getItem('mystical_mbti') || '????';
    var greeting = document.getElementById('home-greeting');
    if (greeting) greeting.textContent = (window.t ? window.t('home_greeting') : 'Welcome').replace('{name}', mbti);
    var badge = document.getElementById('home-mbti-badge');
    if (badge) badge.textContent = mbti;
    dailyCardFlipped = false;
    var inner = document.getElementById('daily-card-inner');
    if (inner) inner.classList.remove('flipped');
    var expertEl = document.getElementById('daily-expert-reading');
    if (expertEl) expertEl.style.display = 'none';
    // 자동으로 카드 뒤집기 + 점괘 표시
    setTimeout(function () { window.flipDailyCard(); }, 600);
  }

  window.flipDailyCard = function () {
    if (dailyCardFlipped) return;
    if (!window.TAROT) { showToast('Loading...'); setTimeout(window.flipDailyCard, 300); return; }
    dailyCardFlipped = true;
    var inner = document.getElementById('daily-card-inner');
    if (inner) inner.classList.add('flipped');
    var drawn = window.TAROT.draw(1);
    var card = drawn[0];
    var lang = window.getLang ? window.getLang() : 'en';
    var back = document.getElementById('daily-card-back');
    if (back && card) {
      var sym = getCardSymbol(card);
      var el = card.element || 'air';
      var color = ELEMENT_COLORS[el] || ELEMENT_COLORS.air;
      var dir = card.isReversed;
      back.innerHTML =
        '<div class="card-top-info">' +
          '<span class="card-element-badge" style="background:' + color.main + '">' + color.symbol + ' ' + getElementName(el, lang) + '</span>' +
          '<span class="card-pillar-badge">' + getSuitName(card.suit, lang) + '</span>' +
        '</div>' +
        '<div class="card-symbol" style="font-size:2.5rem">' + sym + '</div>' +
        '<h3 class="card-title" style="font-size:1rem;margin:6px 0">' + escapeHtml(card.name[lang] || card.name.en) + '</h3>' +
        (card.number !== undefined ? '<div class="card-hanja" style="font-size:0.75rem;color:var(--text-dim)">' + romanize(card.number) + '</div>' : '') +
        '<div class="card-divider"></div>' +
        '<div style="font-size:0.75rem;color:' + (dir ? '#f87171' : '#4ade80') + '">' + (dir ? '↻ ' + getDirLabel(true, lang) : '↑ ' + getDirLabel(false, lang)) + '</div>' +
        '<div class="card-keywords">' + (card.keywords[lang] || card.keywords.en || []).slice(0, 3).map(function(k) { return '<span>' + escapeHtml(k) + '</span>'; }).join('') + '</div>';

      // 1초 뒤 전문가 해석 표시
      setTimeout(function () {
        var expertEl = document.getElementById('daily-expert-reading');
        if (expertEl) {
          var reading = generateDailyExpertReading(card, lang);
          expertEl.innerHTML =
            '<div class="expert-badge">' + L('daily_master_badge') + '</div>' +
            '<div class="expert-text">' + reading + '</div>';
          expertEl.style.display = 'block';
        }
      }, 1000);
    }
  };

  function generateDailyExpertReading(card, curLang) {
    var name = escapeHtml(card.name[curLang] || card.name.en);
    var dir = card.isReversed;
    var kws = (card.keywords[curLang] || card.keywords.en || []);
    var uprightText = escapeHtml(card.upright[curLang] || card.upright.en || '');
    var reversedText = escapeHtml(card.reversed[curLang] || card.reversed.en || '');
    var el = card.element || 'air';
    var dirLabel = getDirLabel(dir, curLang);
    var kwStr = escapeHtml(kws.slice(0, 3).join(', '));
    var kwAll = escapeHtml(kws.slice(0, 4).join(', '));
    var elName = L('el_' + el);

    // 원소별 데이터 (translations.js의 ELEMENT_DATA_I18N 활용)
    var eRaw = window.ELEMENT_DATA_I18N && window.ELEMENT_DATA_I18N[el] ? window.ELEMENT_DATA_I18N[el] : {};
    var eGet = function(field) { return (eRaw[field] && (eRaw[field][curLang] || eRaw[field].en)) || ''; };

    var p = [];

    // 1. 인사
    p.push('<p class="expert-greeting">' + L('daily_greeting') + '</p>');

    // 2. 카드 기본
    p.push('<p style="margin-top:16px"><strong style="font-size:1.1em;color:var(--gold)">' + L('daily_card_title', { card: name, dir: dirLabel }) + '</strong></p>');
    p.push('<p>' + L('daily_card_desc', { card: name, kw: kwStr, el: elName, dir: dirLabel }) + '</p>');
    p.push('<p>' + (dir ? reversedText : uprightText) + '</p>');

    // 3. 심층 해석
    p.push('<p>' + L('daily_deep_1', { card: name, kw: kwAll, el: elName }) + '</p>');
    p.push('<p>' + (dir ? L('daily_reversed_msg') : L('daily_upright_msg')) + '</p>');

    // 4. 종합 운세
    p.push('<p style="margin-top:16px"><strong style="color:var(--gold)">' + L('daily_general_header') + '</strong></p>');
    if (dir) {
      p.push('<p>' + L('daily_general_rev_1', { kw0: escapeHtml(kws[0] || '') }) + '</p>');
      p.push('<p>' + L('daily_general_rev_2') + '</p>');
      p.push('<p>' + L('daily_general_rev_3') + '</p>');
    } else {
      p.push('<p>' + L('daily_general_up_1', { kw0: escapeHtml(kws[0] || ''), kw1: escapeHtml(kws[1] || '') }) + '</p>');
      p.push('<p>' + L('daily_general_up_2') + '</p>');
      p.push('<p>' + L('daily_general_up_3') + '</p>');
    }

    // 5. 연애운
    p.push('<p style="margin-top:16px"><strong style="color:var(--gold)">' + L('daily_love_header') + '</strong></p>');
    if (dir) { p.push('<p>' + L('daily_love_rev_1') + '</p>'); p.push('<p>' + L('daily_love_rev_2') + '</p>'); }
    else { p.push('<p>' + L('daily_love_up_1') + '</p>'); p.push('<p>' + L('daily_love_up_2') + '</p>'); }

    // 6. 금전운
    p.push('<p style="margin-top:16px"><strong style="color:var(--gold)">' + L('daily_money_header') + '</strong></p>');
    if (dir) { p.push('<p>' + L('daily_money_rev_1') + '</p>'); p.push('<p>' + L('daily_money_rev_2') + '</p>'); }
    else { p.push('<p>' + L('daily_money_up_1') + '</p>'); p.push('<p>' + L('daily_money_up_2') + '</p>'); }

    // 7. 직업 & 학업
    p.push('<p style="margin-top:16px"><strong style="color:var(--gold)">' + L('daily_career_header') + '</strong></p>');
    p.push('<p>' + (dir ? L('daily_career_rev') : L('daily_career_up')) + '</p>');

    // 8. 건강
    p.push('<p style="margin-top:16px"><strong style="color:var(--gold)">' + L('daily_health_header') + '</strong></p>');
    p.push('<p>' + (dir ? L('daily_health_rev') : L('daily_health_up')) + '</p>');

    // 9. 시간대별
    p.push('<p style="margin-top:16px"><strong style="color:var(--gold)">' + L('daily_time_header') + '</strong></p>');
    p.push('<p><strong>' + L('daily_time_morning_label') + '</strong> ' + (dir ? L('daily_time_morning_rev') : L('daily_time_morning_up')) + '</p>');
    p.push('<p><strong>' + L('daily_time_afternoon_label') + '</strong> ' + (dir ? L('daily_time_afternoon_rev') : L('daily_time_afternoon_up')) + '</p>');
    p.push('<p><strong>' + L('daily_time_evening_label') + '</strong> ' + (dir ? L('daily_time_evening_rev') : L('daily_time_evening_up')) + '</p>');

    // 10. 행운 정보
    p.push('<p style="margin-top:16px"><strong style="color:var(--gold)">' + L('daily_lucky_header') + '</strong></p>');
    p.push('<p><strong>' + L('daily_lucky_dir', { val: eGet('direction') }) + '</strong><br>' + L('daily_lucky_dir_desc', { desc: eGet('dirDesc') }) + '</p>');
    p.push('<p>' + L('daily_lucky_num', { val: eGet('number') }) + '</p>');
    p.push('<p>' + L('daily_lucky_food', { val: eGet('food') }) + '</p>');

    // 11. 패션 & 컬러
    p.push('<p style="margin-top:16px"><strong style="color:var(--gold)">' + L('daily_fashion_header') + '</strong></p>');
    p.push('<p><strong>' + L('daily_fashion_color', { val: eGet('luckyColor') }) + '</strong></p>');
    p.push('<p>' + L('daily_fashion_desc', { desc: eGet('fashion') }) + '</p>');
    p.push('<p>' + L('daily_fashion_tip') + '</p>');

    // 12. 주의사항
    p.push('<p style="margin-top:16px"><strong style="color:var(--gold)">' + L('daily_warning_header') + '</strong></p>');
    p.push('<p><strong>' + L('daily_warning_avoid', { val: eGet('avoid') }) + '</strong></p>');
    if (dir) { p.push('<p>' + L('daily_warning_rev') + '</p>'); p.push('<p>' + L('daily_warning_rev_2') + '</p>'); }
    else { p.push('<p>' + L('daily_warning_up') + '</p>'); p.push('<p>' + L('daily_warning_up_2') + '</p>'); }

    // 13. 실천 미션
    p.push('<p style="margin-top:16px"><strong style="color:var(--gold)">' + L('daily_mission_header') + '</strong></p>');
    p.push('<p>' + (dir ? L('daily_mission_rev') : L('daily_mission_up')).replace(/\n/g, '<br>') + '</p>');

    // 14. MBTI 전용 섹션 (카드 스타일)
    var mbti = localStorage.getItem('mystical_mbti');
    if (mbti) {
      var mbtiGroup = getMBTIGroup(mbti);
      var mbtiEmoji = getMBTIEmoji(mbti);
      p.push('<div class="daily-section-card daily-mbti-section">');
      p.push('<div class="dsc-header"><span class="dsc-icon">' + mbtiEmoji + '</span><span class="dsc-title">' + L('daily_mbti_section_title', { mbti: mbti }) + '</span></div>');
      p.push('<div class="dsc-badge">' + L('daily_mbti_group', { group: mbtiGroup }) + '</div>');
      // 주요 메시지
      p.push('<div class="dsc-body">');
      p.push('<p>' + (curLang === 'ko' ? buildMBTITipDeep(mbti) : buildMBTITipDeepEn(mbti)) + '</p>');
      p.push('</div>');
      // MBTI 강점/약점 미니 차트
      var mbtiTraits = getMBTITraits(mbti, curLang);
      p.push('<div class="dsc-traits">');
      p.push('<div class="dsc-trait"><span class="dsc-trait-label">💪 ' + L('daily_mbti_strength') + '</span><span class="dsc-trait-value">' + mbtiTraits.strength + '</span></div>');
      p.push('<div class="dsc-trait"><span class="dsc-trait-label">⚡ ' + L('daily_mbti_energy') + '</span><span class="dsc-trait-value">' + mbtiTraits.energy + '</span></div>');
      p.push('<div class="dsc-trait"><span class="dsc-trait-label">💡 ' + L('daily_mbti_tip') + '</span><span class="dsc-trait-value">' + mbtiTraits.tip + '</span></div>');
      p.push('</div>');
      // 오늘의 MBTI 행동 미션
      p.push('<div class="dsc-mission"><span class="dsc-mission-icon">🎯</span> ' + L('daily_mbti_mission_' + mbti[0]) + '</div>');
      p.push('</div>');
    }

    // 15. 별자리 운세 전용 섹션
    var zodiacId = localStorage.getItem('mystical_zodiac');
    if (zodiacId && window.ZODIAC) {
      var zSign = window.ZODIAC.getSignById(zodiacId);
      if (zSign) {
        var zName = zSign.name[curLang] || zSign.name.en;
        var allSigns = window.ZODIAC.getAllSigns();
        var zIdx = 0;
        for (var zi = 0; zi < allSigns.length; zi++) { if (allSigns[zi].id === zodiacId) { zIdx = zi; break; } }
        var zRng = zodiacSeed(zIdx);
        var zLove = Math.floor(zRng() * 5) + 1;
        var zCareer = Math.floor(zRng() * 5) + 1;
        var zHealth = Math.floor(zRng() * 5) + 1;
        var zLuck = Math.floor(zRng() * 5) + 1;
        var zElem = zSign.element;
        var zMood = (zLove + zCareer + zHealth + zLuck) >= 12 ? '_good' : '_caution';

        p.push('<div class="daily-section-card daily-zodiac-section">');
        p.push('<div class="dsc-header"><span class="dsc-icon">' + zSign.symbol + '</span><span class="dsc-title">' + L('daily_zodiac_section_title', { sign: zName }) + '</span></div>');

        // 별점 미니 차트
        p.push('<div class="dsc-stars-row">');
        p.push('<div class="dsc-star-item"><span class="dsc-star-label">' + L('zodiac_rating_love') + '</span>' + makeStars(zLove) + '</div>');
        p.push('<div class="dsc-star-item"><span class="dsc-star-label">' + L('zodiac_rating_career') + '</span>' + makeStars(zCareer) + '</div>');
        p.push('<div class="dsc-star-item"><span class="dsc-star-label">' + L('zodiac_rating_health') + '</span>' + makeStars(zHealth) + '</div>');
        p.push('<div class="dsc-star-item"><span class="dsc-star-label">' + L('zodiac_rating_luck') + '</span>' + makeStars(zLuck) + '</div>');
        p.push('</div>');

        // 오늘의 에너지 메시지
        p.push('<div class="dsc-body">');
        p.push('<p>' + L('zodiac_element_' + zElem, { sign: zName }) + '</p>');
        p.push('</div>');

        // 연애/직업 한줄 요약
        p.push('<div class="dsc-highlights">');
        p.push('<div class="dsc-highlight"><span class="dsc-hl-icon">💕</span><span class="dsc-hl-text">' + L('zodiac_love_' + zElem + zMood) + '</span></div>');
        p.push('<div class="dsc-highlight"><span class="dsc-hl-icon">💼</span><span class="dsc-hl-text">' + L('zodiac_career_' + zElem + zMood) + '</span></div>');
        p.push('</div>');

        // 행운 정보 + 확언
        p.push('<div class="dsc-lucky-row">');
        p.push('<span class="dsc-lucky-item">🍀 ' + L('zodiac_lucky_color') + ': ' + L('zodiac_color_' + zElem) + '</span>');
        p.push('</div>');
        p.push('<div class="dsc-affirm">✨ ' + L('zodiac_affirm_' + zElem) + ' ✨</div>');

        // 더보기 버튼
        p.push('<div class="dsc-more"><button class="dsc-more-btn" onclick="goLanding(\'zodiac\')">' + L('daily_zodiac_more') + ' →</button></div>');
        p.push('</div>');
      }
    }

    // 16. 마무리
    p.push('<p style="margin-top:20px;padding:16px;background:rgba(212,175,55,0.06);border-radius:12px;border-left:3px solid var(--gold)">' +
      '<strong style="color:var(--gold)">' + L('daily_master_closing') + '</strong><br><br>' +
      L('daily_closing_1') + '</p>');
    p.push('<p>' + L('daily_closing_2') + '</p>');
    p.push('<p>' + L('daily_closing_3') + '</p>');

    return p.join('');
  }

  /* ============ 운세 진행 (통합 플로우) ============ */
  var TOPIC_KEY_MAP = {
    love:'topic_love', money:'topic_money', health:'topic_health', career:'topic_career',
    study:'topic_study', general:'topic_general', today:'topic_today', tomorrow:'topic_tomorrow',
    week:'topic_week', month:'topic_month', year:'topic_year',
    marriage:'topic_marriage', social:'topic_social', question:'topic_question',
    compatibility:'topic_compat', datepick:'topic_datepick', lotto:'topic_lotto', custom:'topic_custom'
  };
  function getTopicName(key) { return L(TOPIC_KEY_MAP[key] || 'topic_general'); }
  var selectedSpread = 3;

  window.selectSpread = function (num) {
    selectedSpread = num;
    document.querySelectorAll('.spread-option').forEach(function (el) { el.classList.remove('active'); });
    var el = document.getElementById('spread-' + num);
    if (el) el.classList.add('active');
  };

  window.goToReading = function (type) {
    if (!localStorage.getItem('mystical_mbti')) {
      pendingAction = 'reading';
      pendingReadingType = type;
      openSetupModal();
      return;
    }
    // 특수 화면
    if (type === 'compatibility') { showScreen('compatibility-screen'); updateCompatMyInfo(); return; }
    if (type === 'datepick') { showScreen('datepick-screen'); return; }
    if (type === 'custom') { showScreen('custom-date-screen'); return; }
    if (type === 'saju') { showSajuAnalysis(); return; }
    if (type === 'lotto') {
      if (!usePoints(50)) { showToast(L('points_lack')); return; }
      showToast(L('points_deducted', {n: 50}));
      cardsToPick = 3; currentReadingType = 'lotto'; window.currentReadingType = 'lotto'; startShuffle(); return;
    }

    // 통합 리딩 화면으로 이동
    window.currentReadingType = type;
    currentReadingType = type;
    openReadingSetup(type);
  };

  var pendingReadingType = '';

  function openReadingSetup(type) {
    var title = document.getElementById('reading-setup-title');
    if (title) title.textContent = '✦ ' + L('nav_reading') + ' ✦';
    var topicDisplay = document.getElementById('reading-topic-display');
    if (topicDisplay) topicDisplay.textContent = getTopicName(type);

    // 질문 초기화 + 주제별 placeholder
    var qi = document.getElementById('question-input');
    if (qi) {
      qi.value = '';
      qi.placeholder = getPlaceholder(type);
    }
    var cc = document.getElementById('q-char-count');
    if (cc) cc.textContent = '0';

    // 주제별 예제 질문 칩
    var chips = getExampleQuestions(type);
    var chipsEl = document.getElementById('example-chips');
    if (chipsEl) {
      chipsEl.innerHTML = chips.map(function (q) {
        return '<button class="chip" onclick="setQuestion(this)">' + q + '</button>';
      }).join('');
    }

    // 포인트 표시
    updatePointsDisplay();
    var ptsBadge = document.getElementById('reading-points-badge');
    if (ptsBadge) ptsBadge.textContent = getPoints() + 'P';

    // 기본 스프레드: today/tomorrow → 1장, 나머지 → 3장
    if (type === 'today' || type === 'tomorrow') {
      selectSpread(1);
    } else {
      selectSpread(3);
    }

    showScreen('reading-setup-screen');
  }

  window.setQuestion = function (btn) {
    var input = document.getElementById('question-input');
    if (input) {
      input.value = btn.textContent;
      var cc = document.getElementById('q-char-count');
      if (cc) cc.textContent = btn.textContent.length;
    }
  };

  /* ============ 통합 리딩 시작 ============ */
  window.startReading = function () {
    // 질문 확인
    var qi = document.getElementById('question-input');
    currentQuestion = qi ? qi.value.trim() : '';
    if (!currentQuestion) {
      showToast(L('enter_question'));
      if (qi) qi.focus();
      return;
    }

    // 포인트 차감
    if (!usePoints(50)) {
      showToast(L('points_lack'));
      return;
    }
    showToast(L('points_deducted', {n: 50}));

    cardsToPick = selectedSpread;
    startShuffle();
  };

  // 궁합/택일 등에서도 사용
  window.startCardPick = function (type) {
    currentReadingType = type;
    window.currentReadingType = type;
    // 궁합/택일은 질문 자동 생성
    if (type === 'compatibility') {
      var pBirthVal = getDateValue('partner-birth-group');
      if (pBirthVal) {
        var pYear = parseInt(pBirthVal.split('-')[0]);
        if (pYear < 1920 || pYear > 2025) {
          showToast(L('invalid_birth'));
          clearDateValue('partner-birth-group');
          return;
        }
      }
      currentQuestion = 'MBTI 궁합을 봐주세요';
    }
    if (type === 'datepick') currentQuestion = '어느 날짜가 더 좋을까요?';
    if (type === 'custom') currentQuestion = '이 날의 운세를 봐주세요';

    // 포인트 차감 로직
    // 궁합/택일: 항상 무료
    // 오늘의 운세: 하루 1회 무료, 이후 50P
    // 나머지: 50P
    if (type !== 'compatibility' && type !== 'datepick') {
      var isFree = false;
      if (type === 'today') {
        var todayStr = new Date().toISOString().slice(0, 10);
        var lastFree = localStorage.getItem('mystical_today_free');
        if (lastFree !== todayStr) {
          isFree = true;
          localStorage.setItem('mystical_today_free', todayStr);
        }
      }
      if (!isFree) {
        if (!usePoints(50)) {
          showToast(L('points_lack'));
          return;
        }
        showToast(L('points_deducted', {n: 50}));
      } else {
        showToast(L('today_free'));
      }
    }
    cardsToPick = 3;
    startShuffle();
  };

  function startShuffle() {
    if (!window.TAROT) { showToast('Loading...'); setTimeout(startShuffle, 300); return; }
    pickedCards = [];
    currentRound = 0;
    shuffledDeck = window.TAROT.shuffle();

    showScreen('shuffle-screen');
    renderShuffleAnimation();

    var textEl = document.getElementById('shuffle-text');
    var lang = window.getLang ? window.getLang() : 'en';
    var shuffleMsgs = {
      ko: ['카드를 섞고 있습니다...', '당신의 기운을 느끼고 있습니다...', '카드가 준비되었습니다...'],
      en: ['Shuffling the cards...', 'Sensing your energy...', 'Cards are ready...'],
      ja: ['カードをシャッフルしています...', 'あなたの気を感じています...', 'カードの準備ができました...'],
      es: ['Barajando las cartas...', 'Sintiendo tu energía...', 'Las cartas están listas...'],
      pt: ['Embaralhando as cartas...', 'Sentindo sua energia...', 'As cartas estão prontas...'],
      fr: ['Mélange des cartes...', 'Ressenti de votre énergie...', 'Les cartes sont prêtes...'],
      de: ['Karten werden gemischt...', 'Ihre Energie wird gespürt...', 'Die Karten sind bereit...']
    };
    var msgs = shuffleMsgs[lang] || shuffleMsgs.en;
    var mi = 0;
    var msgInterval = setInterval(function () {
      mi++;
      if (mi < msgs.length && textEl) textEl.textContent = msgs[mi];
    }, 900);

    setTimeout(function () {
      clearInterval(msgInterval);
      showPickRound();
    }, 2700);
  }

  function renderShuffleAnimation() {
    var container = document.getElementById('shuffle-cards');
    if (!container) return;
    container.innerHTML = '';
    for (var i = 0; i < 7; i++) {
      var card = document.createElement('div');
      card.className = 'shuffle-card';
      card.innerHTML = '<span>✦</span>';
      card.style.animationDelay = (i * 0.1) + 's';
      container.appendChild(card);
    }
  }

  /* ============ 라운드별 카드 뽑기 (myeongri-tarot 스타일) ============ */
  function showPickRound() {
    var config = SPREAD_CONFIG[cardsToPick];
    var round = config.rounds[currentRound];
    var lang = window.getLang ? window.getLang() : 'en';

    // 라운드 인디케이터
    var indicator = document.getElementById('pick-round-indicator');
    if (config.rounds.length > 1) {
      indicator.innerHTML = config.rounds.map(function (r, i) {
        var cls = 'round-dot';
        if (i === currentRound) cls += ' active';
        if (i < currentRound) cls += ' done';
        return '<span class="' + cls + '">' + r.icon + '</span>';
      }).join('');
      indicator.style.display = 'flex';
    } else {
      indicator.style.display = 'none';
    }

    var title = document.getElementById('pick-title');
    if (title) title.textContent = round.icon + ' ' + (round.label[lang] || round.label.en);
    var subtitle = document.getElementById('pick-subtitle');
    if (subtitle) subtitle.textContent = round.desc[lang] || round.desc.en;

    // 카드 그리드 렌더 (78장 전체 사용)
    var grid = document.getElementById('pick-grid');
    if (!grid) return;
    var html = '';
    var gridCount = shuffledDeck.length || 78;
    for (var i = 0; i < gridCount; i++) {
      html += '<div class="pick-card" id="pick-card-' + i + '" onclick="pickOneCard(' + i + ')">' +
        '<div class="pick-card-inner">' +
          '<div class="pick-card-back">' +
            '<span>✦</span>' +
            '<small>' + (i + 1) + '</small>' +
          '</div>' +
        '</div>' +
      '</div>';
    }
    grid.innerHTML = html;
    showScreen('pick-screen');
  }

  var pickLocked = false;

  window.pickOneCard = function (index) {
    if (pickLocked) return;
    pickLocked = true;

    var el = document.getElementById('pick-card-' + index);
    if (!el) { pickLocked = false; return; }
    el.classList.add('picked');

    // 덱에서 카드 뽑기 (순차적 드로우)
    var drawnCards = window.TAROT.draw(1);
    var card = drawnCards[0];

    setTimeout(function () {
      pickLocked = false;
      pickedCards.push(card);
      currentRound++;

      var config = SPREAD_CONFIG[cardsToPick];
      if (currentRound < config.rounds.length) {
        showPickRound();
      } else {
        revealResult();
      }
    }, 600);
  };

  /* ============ 리치 카드 HTML 빌더 ============ */
  function buildTarotCardHtml(card, positionLabel, idx) {
    if (!card) return '';
    var lang = window.getLang ? window.getLang() : 'en';
    var sym = getCardSymbol(card);
    var el = card.element || 'air';
    var color = ELEMENT_COLORS[el] || ELEMENT_COLORS.air;
    var dir = card.isReversed;
    var suitInfo = SUIT_INFO[card.suit] || SUIT_INFO[null];

    var elCorner = { fire: '△', water: '▽', earth: '◇', air: '○' };
    var cornerSym = elCorner[el] || '✦';
    return '<div class="tarot-card-wrapper" style="animation-delay:' + (idx * 0.4) + 's">' +
      (positionLabel ? '<div class="card-position-label">' + positionLabel + '</div>' : '') +
      '<div class="tarot-card' + (dir ? ' reversed-card' : '') + '" onclick="flipCard(this)" style="--card-color:' + color.main + ';--card-color-light:' + color.light + ';--card-color-dark:' + color.dark + '">' +
        '<div class="card-inner">' +
          '<div class="card-front">' +
            '<div class="card-pattern"></div>' +
            '<div class="card-corner-tl">' + cornerSym + '</div>' +
            '<div class="card-corner-br">' + cornerSym + '</div>' +
            '<div class="card-center-symbol">✦</div>' +
            '<div class="card-subtitle">Mystical Orion</div>' +
          '</div>' +
          '<div class="card-back">' +
            '<div class="card-top-info">' +
              '<span class="card-element-badge" style="background:' + color.main + '">' + color.symbol + ' ' + getElementName(el, lang) + '</span>' +
              '<span class="card-pillar-badge">' + (suitInfo.name[lang] || suitInfo.name.en) + '</span>' +
            '</div>' +
            '<div class="card-symbol">' + sym + '</div>' +
            '<h3 class="card-title">' + escapeHtml(card.name[lang] || card.name.en) + '</h3>' +
            (card.number !== undefined ? '<div class="card-hanja">' + romanize(card.number) + '</div>' : '') +
            '<div class="card-divider"></div>' +
            '<div class="card-dir-badge" style="color:' + (dir ? '#f87171' : '#6ee7b7') + ';border-color:' + (dir ? 'rgba(248,113,113,0.2)' : 'rgba(110,231,183,0.2)') + '">' +
              (dir ? '↻ ' + getDirLabel(true, lang) : '↑ ' + getDirLabel(false, lang)) +
            '</div>' +
            '<div class="card-keywords">' +
              (card.keywords[lang] || card.keywords.en || []).slice(0, 3).map(function(k) { return '<span>' + escapeHtml(k) + '</span>'; }).join('') +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  window.flipCard = function (el) { el.classList.toggle('flipped'); };

  /* ============ 결과 화면 (30년차 전문가 해석) ============ */
  function revealResult() {
    var lang = window.getLang ? window.getLang() : 'en';
    var mbti = localStorage.getItem('mystical_mbti') || 'ESTJ';
    var zodiacId = localStorage.getItem('mystical_zodiac');
    var zodiacSign = zodiacId && window.ZODIAC ? window.ZODIAC.getSignById(zodiacId) : null;
    var mbtiInfo = window.MBTI && window.MBTI.TYPES ? window.MBTI.TYPES[mbti] : null;

    if (currentReadingType === 'lotto') { showLottoResult(); return; }

    var config = SPREAD_CONFIG[cardsToPick];
    var container = document.getElementById('result-content');
    if (!container) return;

    var topicName = getTopicName(currentReadingType);
    var html = '';

    // ── 헤더 ──
    html += '<div class="reading-header">' +
      '<span class="reading-icon">🔮</span>' +
      '<h2>' + topicName + '</h2>' +
      '<p>' + mbti + (zodiacSign ? ' · ' + zodiacSign.symbol + ' ' + (zodiacSign.name[lang] || zodiacSign.name.en) : '') + '</p>' +
      (currentQuestion ? '<p class="daily-question-display">"' + escapeHtml(currentQuestion) + '"</p>' : '') +
    '</div>';

    // ── 카드 스프레드 ──
    html += '<div class="card-spread">';
    pickedCards.forEach(function (card, i) {
      var roundInfo = config.rounds[i];
      var posLabel = roundInfo ? (roundInfo.icon + ' ' + (roundInfo.label[lang] || roundInfo.label.en)) : '';
      html += buildTarotCardHtml(card, posLabel, i);
    });
    html += '</div>';

    // ── 30년차 전문가 해석 (최상단, 핵심) ──
    var expertReading = generateExpertReading(pickedCards, currentReadingType, currentQuestion, mbti, mbtiInfo, zodiacSign, lang);
    html += '<div class="expert-reading-section">' +
      '<div class="expert-badge">' + L('expert_badge') + '</div>' +
      '<div class="expert-text">' + expertReading + '</div>' +
    '</div>';

    // ── MBTI 궁합 심층 분석 (궁합일 때만) ──
    if (currentReadingType === 'compatibility') {
      html += generateMBTICompatSection(mbti, partnerMBTI, lang);
      // 궁합에도 별자리 섹션 추가
      html += buildZodiacSectionHtml();
    }

    // ── 광고 ──
    html += '<div class="ad-slot"><div class="ad-placeholder">AD</div></div>';

    // ── 카드별 기본 뜻 설명 ──
    html += '<div class="reading-interpretation">';
    html += '<h3>' + L('card_meanings') + '</h3>';
    pickedCards.forEach(function (card, i) {
      var roundInfo = config.rounds[i];
      var posLabel = roundInfo ? (roundInfo.icon + ' ' + (roundInfo.label[lang] || roundInfo.label.en)) : '';
      var dir = card.isReversed;
      var meaning = dir ? (card.reversed[lang] || card.reversed.en || '') : (card.upright[lang] || card.upright.en || '');
      var kws = (card.keywords[lang] || card.keywords.en || []);

      html += '<div class="card-meaning-section">' +
        '<h4>' + getCardSymbol(card) + ' ' + escapeHtml(card.name[lang] || card.name.en) +
          ' <span style="font-size:0.8rem;color:' + (dir ? '#f87171' : '#4ade80') + '">' +
          (dir ? L('reversed') : L('upright')) + '</span>' +
          (posLabel ? ' <span style="font-size:0.75rem;color:var(--text-dim)">(' + posLabel + ')</span>' : '') +
        '</h4>' +
        '<p>' + escapeHtml(meaning) + '</p>' +
        '<div style="margin-top:6px;display:flex;gap:4px;flex-wrap:wrap">' +
          kws.map(function(k) { return '<span class="keyword-tag">' + escapeHtml(k) + '</span>'; }).join('') +
        '</div>' +
      '</div>';
    });
    html += '</div>';

    // ── 카드 사전 (접이식) ──
    html += buildDictionarySection(pickedCards, lang);

    container.innerHTML = html;
    showScreen('result-screen');
    showTopNav(false);

    // 카드 자동 뒤집기
    setTimeout(function () {
      document.querySelectorAll('#result-content .tarot-card').forEach(function (card, i) {
        setTimeout(function () { card.classList.add('flipped'); }, 800 + i * 600);
      });
    }, 500);

    saveHistory(currentReadingType, pickedCards);
  }

  /* ============ 30년차 전문가 해석 엔진 (3000자+) ============ */
  function generateExpertReading(cards, topic, question, mbti, mbtiInfo, zodiac, lang) {
    if (lang !== 'ko') return generateExpertReadingEn(cards, topic, question, mbti, lang);

    var p = [];
    var q = escapeHtml(question || '');
    var topicKo = getTopicKo(topic);

    // ── 도입: 따뜻한 인사 + 분위기 조성 ──
    p.push('<p class="expert-greeting">반갑습니다. 저는 30년 넘게 타로 카드를 읽어온 타로 마스터입니다. ' +
      '오늘 이렇게 카드를 펼쳐주셔서 감사해요. 카드를 섞는 순간부터 당신의 에너지가 카드에 담기기 시작했고, ' +
      '지금 이 카드들은 다른 누구도 아닌 오직 당신만을 위해 나온 카드입니다.</p>');

    p.push('<p>"<strong>' + q + '</strong>" — 이 질문을 마음에 품고 카드를 뽑으셨군요. ' +
      '좋습니다. 질문이 명확할수록 카드는 더 정확한 답을 주거든요. ' +
      '30년간 수만 번의 리딩을 해왔지만, 매번 카드가 펼쳐지는 순간은 저도 설렙니다. ' +
      '자, 그럼 카드가 당신에게 어떤 이야기를 들려주고 싶어하는지, 천천히 하나씩 풀어드릴게요.</p>');

    if (cards.length === 1) {
      // ═══ 원카드 리딩 (3000자+) ═══
      var c = cards[0];
      var name = escapeHtml(c.name.ko || c.name.en);
      var dir = c.isReversed;
      var kws = (c.keywords.ko || c.keywords.en || []);
      var uprightMeaning = escapeHtml(c.upright.ko || c.upright.en || '');
      var reversedMeaning = escapeHtml(c.reversed.ko || c.reversed.en || '');

      p.push('<p style="margin-top:16px"><strong style="font-size:1.1em;color:var(--gold)">✦ ' + name + ' — ' +
        getDirLabel(dir, 'ko') + '</strong></p>');

      p.push('<p>먼저 눈을 감고 이 카드의 에너지를 느껴보세요. <strong>' + name + '</strong> 카드가 ' +
        (dir ? '역방향으로' : '정방향으로') + ' 나왔습니다. ' +
        '78장의 카드 중에서 바로 이 카드가 나왔다는 것 자체가 이미 큰 의미가 있어요. ' +
        '이 카드는 <strong>' + escapeHtml(kws.slice(0, 3).join(', ')) + '</strong>의 에너지를 품고 있는 카드입니다. ' +
        '이 에너지가 지금 당신의 삶에 깊이 연결되어 있다는 뜻이에요.</p>');

      if (dir) {
        p.push('<p>역방향으로 나왔다고 해서 겁먹지 마세요. 많은 분들이 역방향 카드를 보고 불안해하시는데, ' +
          '30년간 카드를 읽어온 제 경험으로 말씀드리면 역방향은 "나쁜 것"이 아니라 <strong>"아직 준비가 필요한 것"</strong>을 의미합니다. ' +
          '정방향이 밖으로 드러나는 에너지라면, 역방향은 안으로 향하는 에너지예요. ' +
          '지금 ' + q + '에 대해 마음 깊은 곳에서 무언가 걸리는 게 있으시죠? 그 느낌이 바로 카드가 말하는 겁니다.</p>');

        p.push('<p>이 카드가 역방향으로 나왔을 때의 핵심 메시지는 이렇습니다: <strong>잠시 멈추고, 내면을 들여다보세요.</strong> ' +
          '지금 당장 결과를 내려고 서두르기보다는, 한 발짝 물러서서 전체 그림을 바라볼 필요가 있어요. ' +
          '혹시 다른 사람의 기대나 외부 상황에 끌려다니고 있지는 않나요? ' +
          '카드는 지금 당신에게 "진짜 네가 원하는 게 뭔지 먼저 확인해"라고 말하고 있습니다. ' +
          '급하게 움직이면 나중에 후회할 수 있으니, 충분히 생각하는 시간을 가지세요.</p>');

        p.push('<p>그렇다고 아무것도 하지 말라는 뜻은 아닙니다. ' +
          '오히려 이 시기는 내면의 힘을 키우는 소중한 시간이에요. ' +
          '겉으로는 조용해 보여도 안에서는 엄청난 변화가 일어나고 있거든요. ' +
          '마치 나비가 되기 전 고치 안에서 변화하는 것처럼, 지금의 정체감은 더 큰 도약을 위한 준비 기간입니다. ' +
          '이 시간이 지나면 훨씬 명확한 답이 보일 거예요.</p>');
      } else {
        p.push('<p>정방향으로 나온 것은 정말 좋은 신호입니다! 카드의 에너지가 순수하게, 막힘없이 당신에게 흘러들어오고 있어요. ' +
          '이것은 ' + q + '에 대해 <strong>우주의 흐름이 당신 편</strong>이라는 강력한 메시지입니다. ' +
          '지금 마음속에 떠오르는 직감, 그 느낌을 절대 무시하지 마세요. ' +
          '30년간 수많은 리딩을 해왔지만, 정방향으로 이 카드가 나올 때는 대부분 좋은 결과로 이어졌습니다.</p>');

        p.push('<p>다만 한 가지 당부드리고 싶은 것이 있어요. 흐름이 좋다고 해서 과욕을 부리면 안 됩니다. ' +
          '강물이 순조롭게 흐를 때, 억지로 물살을 거스르거나 너무 빨리 가려고 하면 오히려 넘어지잖아요? ' +
          '지금은 그 흐름에 자연스럽게 몸을 맡기면서, <strong>차분하게 한 걸음씩 나아가는 것</strong>이 최선입니다. ' +
          '결과는 반드시 따라올 테니, 과정을 즐기면서 가세요.</p>');

        p.push('<p>특히 이 카드의 정방향은 새로운 시작이나 전환점에서 자주 나타나는 카드예요. ' +
          '혹시 지금 새로운 도전을 앞두고 있거나, 중요한 결정을 해야 하는 상황이라면 ' +
          '카드가 "지금이 바로 그때야, 망설이지 마"라고 등을 밀어주고 있는 겁니다. ' +
          '용기를 내세요. 당신이 생각하는 것보다 당신은 훨씬 더 준비되어 있습니다.</p>');
      }

      // 주제별 심층 분석
      p.push('<p style="margin-top:16px"><strong style="color:var(--gold)">✦ ' + topicKo + ' 관점에서 본 해석</strong></p>');
      p.push('<p>제가 30년간 봐온 경험으로 ' + topicKo + ' 관점에서 이 카드를 더 깊이 풀어드릴게요. ' +
        buildTopicAdviceDeep(topic, dir, name) + '</p>');

      // 행동 가이드
      p.push('<p style="margin-top:16px"><strong style="color:var(--gold)">✦ 실천 가이드</strong></p>');
      p.push('<p>카드 리딩은 알고만 있으면 소용이 없어요. 실천이 중요합니다. ' +
        buildActionGuide(topic, dir) + '</p>');

    } else {
      // ═══ 3카드 리딩 (과거·현재·미래) - 3000자+ ═══

      p.push('<p style="margin-top:16px">세 장의 카드가 아름다운 이야기를 들려주고 있네요. ' +
        '과거에서 현재로, 현재에서 미래로 흘러가는 당신의 운명의 흐름을 하나씩 풀어드리겠습니다. ' +
        '마치 한 편의 이야기를 읽듯, 천천히 따라와 주세요.</p>');

      // ── 과거 카드 ──
      var c0 = cards[0], n0 = escapeHtml(c0.name.ko || c0.name.en), d0 = c0.isReversed;
      var kws0 = (c0.keywords.ko || c0.keywords.en || []);
      p.push('<p style="margin-top:20px"><strong style="font-size:1.05em;color:var(--gold)">🌅 과거의 흐름 — ' + n0 + (d0 ? ' (역방향)' : ' (정방향)') + '</strong></p>');

      p.push('<p>과거 자리에 <strong>' + n0 + '</strong> 카드가 ' + (d0 ? '역방향으로' : '정방향으로') + ' 놓였습니다. ' +
        '이 카드는 ' + escapeHtml(kws0.slice(0, 2).join('과(와) ')) + '의 에너지를 담고 있는데요, ' +
        '이것이 당신의 과거 경험 속에 깊이 새겨져 있다는 뜻이에요.</p>');

      if (d0) {
        p.push('<p>과거에 ' + escapeHtml(kws0[0] || '') + '와 관련해서 순탄하지 않았던 경험이 있으셨을 거예요. ' +
          '뭔가 원하는 대로 되지 않았거나, 예상치 못한 장애물이 있었을 수 있습니다. ' +
          '그때의 좌절감이나 답답함이 아직도 마음 한켠에 남아있을지 모르겠어요. ' +
          '하지만 아세요? 그 시련이 있었기에 지금의 당신이 더 단단해진 겁니다. ' +
          '실패는 성공의 어머니라는 말이 있듯이, 과거의 경험은 지금 당신의 가장 큰 자산이에요. ' +
          '그때 배운 교훈을 잊지 마세요. 그것이 앞으로의 여정에서 나침반이 되어줄 겁니다.</p>');
      } else {
        p.push('<p>과거에 ' + escapeHtml(kws0[0] || '') + '의 좋은 에너지가 작용했던 것이 보여요. ' +
          '돌이켜보면 잘 해왔고, 좋은 기반을 다져온 시간이었습니다. ' +
          '그때 내렸던 선택들이 옳았다는 것을 카드가 확인해주고 있어요. ' +
          '혹시 과거의 어떤 결정에 대해 후회하고 계시다면, 걱정 마세요. ' +
          '카드는 그 선택이 결과적으로 당신을 올바른 방향으로 이끌었다고 말하고 있습니다. ' +
          '자신을 좀 더 믿으셔도 됩니다.</p>');
      }

      // ── 현재 카드 ──
      var c1 = cards[1], n1 = escapeHtml(c1.name.ko || c1.name.en), d1 = c1.isReversed;
      var kws1 = (c1.keywords.ko || c1.keywords.en || []);
      p.push('<p style="margin-top:20px"><strong style="font-size:1.05em;color:var(--gold)">⚡ 현재의 에너지 — ' + n1 + (d1 ? ' (역방향)' : ' (정방향)') + '</strong></p>');

      p.push('<p>현재 자리에 <strong>' + n1 + '</strong> 카드가 나왔네요. ' +
        '이 자리는 가장 중요한 자리입니다. 왜냐하면 과거는 바꿀 수 없고, 미래는 아직 오지 않았지만, ' +
        '<strong>현재는 지금 당장 당신이 영향을 미칠 수 있는 유일한 시간</strong>이니까요.</p>');

      if (d1) {
        p.push('<p>현재 ' + escapeHtml(kws1[0] || '') + '의 에너지가 막혀있는 상태예요. ' +
          '답답하시죠? 뭔가 앞으로 나아가고 싶은데 보이지 않는 벽에 부딪힌 것 같은 느낌... ' +
          '그 감정 충분히 이해합니다. 하지만 이것은 영원한 상태가 아니에요. ' +
          '오히려 이 시기는 <strong>변화의 전조</strong>입니다. 태풍이 오기 전에 바람이 잠잠해지는 것처럼, ' +
          '지금의 정체감은 곧 다가올 큰 변화를 위한 준비 기간이에요.</p>');

        p.push('<p>지금 당장 해야 할 것은 조급해하지 않는 겁니다. ' +
          '억지로 상황을 밀어붙이기보다는 내면의 목소리에 귀를 기울여보세요. ' +
          '"이게 정말 내가 원하는 건가?" "내가 놓치고 있는 건 뭘까?" ' +
          '이런 질문을 스스로에게 던져보시면, 의외로 명확한 답이 떠오를 수 있어요. ' +
          '카드는 당신에게 잠시 멈추고 방향을 재정비할 것을 권하고 있습니다.</p>');
      } else {
        p.push('<p>현재 ' + escapeHtml(kws1[0] || '') + '의 에너지가 강하게 흐르고 있어요! ' +
          '지금 흐름이 정말 좋습니다. 이 기운을 느끼고 계시죠? ' +
          '뭔가 일이 잘 풀리는 느낌, 사람들과의 관계가 좋아지는 느낌, ' +
          '그것이 바로 이 카드의 에너지입니다.</p>');

        p.push('<p>지금 이 에너지를 최대한 활용하셔야 해요. ' +
          '기회라는 것은 영원히 기다려주지 않습니다. ' +
          '지금 당장 시작하고 싶었던 것이 있다면, 더 이상 미루지 마세요. ' +
          '카드가 <strong>"바로 지금이 적기"</strong>라고 힘차게 말하고 있으니까요. ' +
          '자신감을 갖고 한 걸음 내딛어 보세요. 결과가 당신을 놀라게 할 겁니다.</p>');
      }

      // ── 미래 카드 ──
      var c2 = cards[2], n2 = escapeHtml(c2.name.ko || c2.name.en), d2 = c2.isReversed;
      var kws2 = (c2.keywords.ko || c2.keywords.en || []);
      p.push('<p style="margin-top:20px"><strong style="font-size:1.05em;color:var(--gold)">🌟 미래의 가능성 — ' + n2 + (d2 ? ' (역방향)' : ' (정방향)') + '</strong></p>');

      p.push('<p>미래 자리에 <strong>' + n2 + '</strong> 카드가 놓였습니다. ' +
        '미래 카드는 "반드시 이렇게 된다"는 예언이 아니라, ' +
        '<strong>"현재의 흐름이 이어진다면 이런 방향으로 갈 가능성이 높다"</strong>는 길잡이예요. ' +
        '즉, 당신의 선택에 따라 미래는 얼마든지 바뀔 수 있습니다.</p>');

      if (d2) {
        p.push('<p>미래 카드가 역방향이라고 해서 불안해하실 필요 없어요. ' +
          '이것은 "조심하라"는 경고가 아니라 "준비하라"는 조언입니다. ' +
          escapeHtml(kws2[0] || '') + '과(와) ' + escapeHtml(kws2[1] || '') + '의 에너지가 뒤집힌 상태로 향하고 있는데, ' +
          '이는 예상치 못한 변수가 생길 수 있다는 뜻이에요. ' +
          '하지만 미리 알았으니 대비할 수 있잖아요? 그것이 바로 타로의 가치입니다.</p>');

        p.push('<p>제 30년 경험상, 미래 카드가 역방향일 때 가장 좋은 전략은 <strong>유연함</strong>입니다. ' +
          '계획을 세우되 계획에 너무 집착하지 마세요. 상황이 바뀌면 계획도 바꿀 수 있는 여유를 가지세요. ' +
          '의외로 예상 밖의 상황이 전화위복이 되는 경우를 정말 많이 봤거든요. ' +
          '위기를 기회로 바꾸는 것은 당신의 태도에 달려 있습니다.</p>');
      } else {
        p.push('<p>' + escapeHtml(kws2[0] || '') + '과(와) ' + escapeHtml(kws2[1] || '') + '의 밝은 에너지가 미래를 비추고 있어요! ' +
          '이것은 정말 반가운 소식입니다. 앞으로의 흐름이 긍정적이라는 강력한 신호거든요. ' +
          '지금 하고 있는 일을 꾸준히 이어가시면, 원하는 결과에 한 걸음 더 가까워질 수 있어요.</p>');

        p.push('<p>다만 기억하세요. 좋은 미래는 저절로 오는 것이 아니라, ' +
          '현재의 노력이 쌓여서 만들어지는 겁니다. ' +
          '카드가 좋게 나왔다고 아무것도 하지 않으면 그 좋은 에너지도 흩어져버려요. ' +
          '지금의 긍정적인 흐름에 힘입어 <strong>적극적으로 움직여 보세요</strong>. ' +
          '카드가 당신의 앞길을 환하게 비춰주고 있으니, 자신 있게 나아가시면 됩니다!</p>');
      }

      // ── 세 카드 종합 해석 ──
      p.push('<p style="margin-top:20px"><strong style="font-size:1.05em;color:var(--gold)">✦ 세 카드의 종합 메시지</strong></p>');

      p.push('<p>자, 이제 세 장의 카드를 하나의 이야기로 엮어볼게요. ' +
        '과거의 <strong>' + n0 + '</strong>에서 시작하여, 현재 <strong>' + n1 + '</strong>을(를) 거쳐, ' +
        '미래의 <strong>' + n2 + '</strong>으로 향하는 흐름... ' +
        '이 세 카드가 만들어내는 이야기는 ' + q + '에 대해 이렇게 말하고 있어요.</p>');

      p.push('<p>' + buildTopicAdviceDeep(topic, d2, n1) + '</p>');
    }

    // ── MBTI 전용 섹션 (카드 스타일) ──
    if (mbti) {
      var mbtiGroupK = getMBTIGroup(mbti);
      var mbtiEmojiK = getMBTIEmoji(mbti);
      var mbtiTraitsK = getMBTITraits(mbti, lang);
      p.push('<div class="daily-section-card daily-mbti-section">');
      p.push('<div class="dsc-header"><span class="dsc-icon">' + mbtiEmojiK + '</span><span class="dsc-title">' + L('daily_mbti_section_title', { mbti: mbti }) + '</span></div>');
      p.push('<div class="dsc-badge">' + L('daily_mbti_group', { group: mbtiGroupK }) + '</div>');
      p.push('<div class="dsc-body">');
      p.push('<p>' + buildMBTITipDeep(mbti) + '</p>');
      p.push('</div>');
      p.push('<div class="dsc-traits">');
      p.push('<div class="dsc-trait"><span class="dsc-trait-label">💪 ' + L('daily_mbti_strength') + '</span><span class="dsc-trait-value">' + mbtiTraitsK.strength + '</span></div>');
      p.push('<div class="dsc-trait"><span class="dsc-trait-label">⚡ ' + L('daily_mbti_energy') + '</span><span class="dsc-trait-value">' + mbtiTraitsK.energy + '</span></div>');
      p.push('<div class="dsc-trait"><span class="dsc-trait-label">💡 ' + L('daily_mbti_tip') + '</span><span class="dsc-trait-value">' + mbtiTraitsK.tip + '</span></div>');
      p.push('</div>');
      p.push('<div class="dsc-mission"><span class="dsc-mission-icon">🎯</span> ' + L('daily_mbti_mission_' + mbti[0]) + '</div>');
      p.push('</div>');
    }

    // ── 별자리 운세 전용 섹션 ──
    var zodiacIdK = localStorage.getItem('mystical_zodiac');
    if (zodiacIdK && window.ZODIAC) {
      var zSignK = window.ZODIAC.getSignById(zodiacIdK);
      if (zSignK) {
        var zNameK = zSignK.name[lang] || zSignK.name.en;
        var allSignsK = window.ZODIAC.getAllSigns();
        var zIdxK = 0;
        for (var zk = 0; zk < allSignsK.length; zk++) { if (allSignsK[zk].id === zodiacIdK) { zIdxK = zk; break; } }
        var zRngK = zodiacSeed(zIdxK);
        var zLoveK = Math.floor(zRngK() * 5) + 1;
        var zCareerK = Math.floor(zRngK() * 5) + 1;
        var zHealthK = Math.floor(zRngK() * 5) + 1;
        var zLuckK = Math.floor(zRngK() * 5) + 1;
        var zElemK = zSignK.element;
        var zMoodK = (zLoveK + zCareerK + zHealthK + zLuckK) >= 12 ? '_good' : '_caution';

        p.push('<div class="daily-section-card daily-zodiac-section">');
        p.push('<div class="dsc-header"><span class="dsc-icon">' + zSignK.symbol + '</span><span class="dsc-title">' + L('daily_zodiac_section_title', { sign: zNameK }) + '</span></div>');
        p.push('<div class="dsc-stars-row">');
        p.push('<div class="dsc-star-item"><span class="dsc-star-label">' + L('zodiac_rating_love') + '</span>' + makeStars(zLoveK) + '</div>');
        p.push('<div class="dsc-star-item"><span class="dsc-star-label">' + L('zodiac_rating_career') + '</span>' + makeStars(zCareerK) + '</div>');
        p.push('<div class="dsc-star-item"><span class="dsc-star-label">' + L('zodiac_rating_health') + '</span>' + makeStars(zHealthK) + '</div>');
        p.push('<div class="dsc-star-item"><span class="dsc-star-label">' + L('zodiac_rating_luck') + '</span>' + makeStars(zLuckK) + '</div>');
        p.push('</div>');
        p.push('<div class="dsc-body">');
        p.push('<p>' + L('zodiac_element_' + zElemK, { sign: zNameK }) + '</p>');
        p.push('</div>');
        p.push('<div class="dsc-highlights">');
        p.push('<div class="dsc-highlight"><span class="dsc-hl-icon">💕</span><span class="dsc-hl-text">' + L('zodiac_love_' + zElemK + zMoodK) + '</span></div>');
        p.push('<div class="dsc-highlight"><span class="dsc-hl-icon">💼</span><span class="dsc-hl-text">' + L('zodiac_career_' + zElemK + zMoodK) + '</span></div>');
        p.push('</div>');
        p.push('<div class="dsc-lucky-row">');
        p.push('<span class="dsc-lucky-item">🍀 ' + L('zodiac_lucky_color') + ': ' + L('zodiac_color_' + zElemK) + '</span>');
        p.push('</div>');
        p.push('<div class="dsc-affirm">✨ ' + L('zodiac_affirm_' + zElemK) + ' ✨</div>');
        p.push('<div class="dsc-more"><button class="dsc-more-btn" onclick="goLanding(\'zodiac\')">' + L('daily_zodiac_more') + ' →</button></div>');
        p.push('</div>');
      }
    }

    // ── 실천 가이드 ──
    p.push('<p style="margin-top:20px"><strong style="color:var(--gold)">✦ 오늘부터 실천해보세요</strong></p>');
    p.push('<p>카드 리딩은 알고만 있으면 의미가 없어요. 작은 것이라도 실천해야 변화가 시작됩니다. ' +
      buildActionGuide(topic, cards[cards.length - 1].isReversed) + '</p>');

    // ── 따뜻한 마무리 ──
    p.push('<p style="margin-top:20px;padding:16px;background:rgba(212,175,55,0.06);border-radius:12px;border-left:3px solid var(--gold)">' +
      '<strong style="color:var(--gold)">타로 마스터의 한마디</strong><br><br>' +
      '30년 넘게 카드를 읽어오면서 한 가지 확실히 깨달은 것이 있어요. ' +
      '카드는 운명을 결정하지 않습니다. 카드는 지금 이 순간 당신에게 필요한 메시지를 전해줄 뿐이에요. ' +
      '진짜 중요한 건 이 메시지를 받아들이고 어떤 행동을 하느냐에 달려 있습니다.</p>');

    p.push('<p>오늘의 리딩이 당신에게 작은 등불이 되었으면 좋겠어요. ' +
      '어떤 상황에서든 포기하지 마시고, 자신을 믿으세요. ' +
      '당신은 이미 충분히 강하고, 충분히 준비되어 있습니다. ' +
      '좋은 일이 가득하시길 진심으로 바랍니다. ✦</p>');

    return p.join('');
  }

  function getTopicKo(topic) {
    var map = { love:'연애운', money:'재물운', health:'건강운', career:'직업운',
      study:'학업운', general:'종합운세', today:'오늘의 운세', tomorrow:'내일의 운세',
      week:'이번 주 운세', month:'이번 달 운세', year:'올해 운세',
      marriage:'결혼운', social:'대인관계운', question:'자유 질문' };
    return map[topic] || '종합운세';
  }

  function buildTopicAdviceDeep(topic, isReversed, cardName) {
    var advice = {
      love: isReversed
        ? '연애에서 지금은 감정이 조금 복잡한 시기입니다. 마음이 이끄는 대로 가고 싶지만, 머리는 다른 소리를 하고 있죠. ' +
          '이럴 때일수록 서두르지 마세요. 사랑은 타이밍도 중요하지만, 진심은 시간이 지나도 변하지 않거든요. ' +
          '상대의 입장을 한 번 더 생각해보고, 나 자신의 감정도 솔직하게 들여다보는 시간을 가져보세요. ' +
          '급하게 결론 내리면 나중에 후회할 수 있어요. 천천히 가도 괜찮습니다. ' +
          '진정한 인연이라면 기다림 끝에 반드시 만날 수 있을 거예요.'
        : '연애 운의 흐름이 좋네요! 사랑의 기운이 당신 주위를 감싸고 있어요. ' +
          '지금 마음에 두고 있는 사람이 있다면, 용기를 내서 먼저 다가가 보세요. ' +
          '이미 연인이 있다면 관계가 한층 깊어질 수 있는 시기예요. ' +
          '작은 표현이라도 좋으니 진심을 전해보세요. 예상보다 따뜻한 반응이 돌아올 겁니다. ' +
          '사랑은 주는 만큼 돌아오는 법이니까요.',
      money: isReversed
        ? '재물 운에서는 지금 조심해야 할 시기입니다. 큰 투자나 충동적인 소비는 삼가시는 게 좋겠어요. ' +
          '"이건 분명 좋은 기회야!" 하는 유혹이 와도 한 번 더 생각하세요. ' +
          '지금은 공격보다 수비가 중요한 때입니다. 있는 것을 지키는 것도 번영의 일부예요. ' +
          '작은 돈이라도 꾸준히 모아가는 습관을 들이시면, 나중에 큰 차이를 만들어낼 수 있을 거예요. ' +
          '안정이 확보된 후에 투자를 생각해도 늦지 않습니다.'
        : '재물의 흐름이 순조롭습니다! 금전적으로 좋은 소식이 있을 수 있어요. ' +
          '다만 욕심을 부리기보다는 꾸준히 모아가는 자세가 더 큰 부를 가져다줄 거예요. ' +
          '새로운 수익원이나 부업에 관심이 있다면 지금 알아보기 좋은 시기입니다. ' +
          '단, 한 번에 큰 돈을 벌려는 생각보다는 장기적인 관점에서 접근하세요. ' +
          '물방울이 모여 강이 되듯, 꾸준함이 당신의 재물운을 키워줄 것입니다.',
      health: isReversed
        ? '건강에 관해서는 카드가 분명한 메시지를 보내고 있어요. 몸이 보내는 작은 신호를 절대 무시하지 마세요. ' +
          '"좀 피곤한데 괜찮겠지" 하고 넘기는 습관이 있다면 지금 바꿔야 합니다. ' +
          '충분한 수면, 규칙적인 식사, 가벼운 운동부터 시작하세요. ' +
          '거창한 변화가 아니어도 됩니다. 매일 10분만 걸어도 큰 차이를 만들 수 있어요. ' +
          '지금 잠깐의 휴식이 나중에 큰 병을 예방하는 최고의 보약입니다.'
        : '건강 에너지가 좋은 편이에요! 현재 컨디션이 괜찮으시다면 이 흐름을 유지하는 것이 중요합니다. ' +
          '이미 하고 계신 건강 습관이 있다면 계속 이어가시고, ' +
          '새로운 운동이나 취미를 시작하기에도 좋은 시기예요. ' +
          '몸과 마음이 연결되어 있다는 것을 기억하세요. ' +
          '규칙적인 생활 리듬을 유지하면서, 스트레스 관리에도 신경 써주시면 됩니다.',
      career: isReversed
        ? '직업 운에서 지금은 변화의 바람이 불고 있어요. 이직이나 전직을 고민하고 계실 수 있는데, ' +
          '성급한 결정은 금물입니다. 충분히 정보를 모으고, 주변 사람들의 조언도 들어보세요. ' +
          '지금 당장 움직이기보다는 실력을 쌓고 준비하는 시간을 갖는 것이 좋겠어요. ' +
          '때를 기다리는 것도 전략입니다. 준비된 사람에게 기회는 반드시 찾아옵니다. ' +
          '지금은 씨앗을 뿌리는 시기라고 생각하세요.'
        : '커리어에 좋은 기운이 감돌고 있어요! 새로운 기회가 찾아올 가능성이 높습니다. ' +
          '프로젝트, 승진, 혹은 새로운 제안... 무엇이든 왔을 때 주저하지 말고 잡으세요. ' +
          '당신의 능력을 세상에 보여줄 때가 왔습니다. 자신감을 갖고 적극적으로 나서보세요. ' +
          '주변에서 당신의 노력을 인정해주는 일도 있을 거예요. ' +
          '그동안 열심히 해온 것들이 이제 결실을 맺기 시작합니다.',
      study: isReversed
        ? '학업에서 잠시 정체감을 느낄 수 있는 시기예요. 공부를 해도 머리에 안 들어오고, 집중이 안 되는 느낌... ' +
          '이럴 때는 무작정 오래 공부하는 것보다 방법을 바꿔보는 게 효과적이에요. ' +
          '새로운 공부법을 시도하거나, 환경을 바꿔보세요. 짧은 휴식도 좋은 전략입니다. ' +
          '지금의 정체기는 다음 도약을 위한 충전 기간이에요. 자신을 너무 몰아붙이지 마세요.'
        : '학업 운이 상승세에요! 집중력이 높아지고, 노력한 만큼 성과가 나올 시기입니다. ' +
          '지금 공부하는 내용이 술술 풀리는 느낌을 받으실 수 있어요. ' +
          '이 흐름을 놓치지 말고 꾸준히 이어가세요. 특히 어려운 과목이나 시험이 있다면 ' +
          '지금 집중적으로 파고들기 좋은 때입니다. 당신의 노력은 배신하지 않을 거예요.',
      general: isReversed
        ? '전반적으로 지금은 속도보다 방향이 중요한 시기입니다. 바쁘게 움직이기보다는 잠시 멈추고 ' +
          '"내가 정말 원하는 것이 무엇인가?"를 스스로에게 물어보세요. 놀랍게도 답은 이미 마음속에 있을 수 있어요. ' +
          '외부의 소음에 휘둘리지 말고, 내면의 소리에 귀를 기울여보세요. ' +
          '지금의 고민과 번뇌는 더 나은 내일을 위한 성장통입니다. ' +
          '이 시기를 잘 넘기면 한층 성숙해진 자신을 발견하게 될 거예요.'
        : '전반적인 운의 흐름이 좋습니다! 여러 방면에서 순풍이 불고 있어요. ' +
          '지금의 긍정적인 에너지를 잘 활용하면 원하는 바를 이룰 수 있을 겁니다. ' +
          '특히 새로운 시도나 도전에 적합한 시기예요. 망설이지 말고 시작해보세요. ' +
          '주변 사람들과의 관계도 좋아지고, 예상치 못한 행운이 찾아올 수도 있어요. ' +
          '이 좋은 기운을 최대한 누리세요!'
    };
    return advice[topic] || advice.general;
  }

  function buildActionGuide(topic, isReversed) {
    var guides = {
      love: isReversed
        ? '오늘 하루, 혼자만의 시간을 갖고 자신의 감정을 정리하는 일기를 써보세요. ' +
          '상대에게 바라는 것보다 내가 줄 수 있는 것이 무엇인지 생각해보세요. ' +
          '조급한 연락이나 확인 행동은 자제하고, 자연스러운 흐름에 맡겨보세요.'
        : '오늘 마음에 두고 있는 사람에게 따뜻한 메시지를 보내보세요. 거창하지 않아도 됩니다. ' +
          '"오늘 하루 어땠어?" 한마디면 충분해요. 작은 관심이 큰 사랑으로 이어질 수 있습니다.',
      money: isReversed
        ? '이번 주는 불필요한 지출을 줄여보세요. 가계부를 작성하거나, 구독 서비스를 점검해보는 것도 좋아요. ' +
          '작은 절약이 모여 큰 안정을 만들어낼 수 있습니다. 투자 유혹이 와도 한 박자 쉬어가세요.'
        : '재물 운이 좋을 때 한 가지 실천: 소액이라도 저축을 시작하거나 늘려보세요. ' +
          '관심 있었던 부업이나 스킬업에 투자하는 것도 좋은 시기입니다. 돈의 흐름에 감사하는 마음을 가지세요.',
      health: isReversed
        ? '오늘부터 매일 10분씩 걷기를 시작해보세요. 수면 시간을 30분만 일찍 당겨보는 것도 좋아요. ' +
          '무리하지 마시고, 몸이 보내는 신호에 귀 기울여주세요. 작은 변화가 큰 건강을 만듭니다.'
        : '좋은 건강 흐름을 유지하기 위해, 오늘 한 가지 건강한 습관을 정해보세요. ' +
          '물 2리터 마시기, 계단 오르기, 스트레칭 등 작은 것이라도 좋습니다. 꾸준함이 답이에요.',
      career: isReversed
        ? '이번 주에 자기 계발에 1시간만 투자해보세요. 온라인 강의, 책 읽기, 관련 분야 정보 수집 등 ' +
          '무엇이든 좋습니다. 준비하는 사람에게 기회가 찾아옵니다. 지금은 실력을 키울 때예요.'
        : '기회가 올 때 잡을 수 있도록 이력서/포트폴리오를 업데이트해두세요. ' +
          '주변 사람들과 적극적으로 네트워킹하는 것도 좋습니다. 당신의 가치를 세상에 알리세요.',
      general: isReversed
        ? '오늘 밤 자기 전에 5분만 명상이나 조용한 시간을 가져보세요. ' +
          '내가 진짜 원하는 것 3가지를 종이에 적어보세요. 방향이 명확해지면 길도 보이기 시작합니다.'
        : '오늘 하루, 감사한 것 3가지를 적어보세요. 작은 것이라도 좋습니다. ' +
          '긍정적인 에너지를 의식적으로 키우면, 좋은 일이 더 많이 찾아옵니다. 웃는 얼굴에 복이 와요!',
      study: isReversed
        ? '공부 방법을 바꿔보세요. 새로운 장소에서 공부하거나, 타이머를 활용한 집중 학습을 시도해보세요. ' +
          '25분 집중 + 5분 휴식의 뽀모도로 기법도 추천합니다. 무작정 오래 하는 것보다 효율이 중요해요.'
        : '지금 집중력이 좋을 때, 가장 어렵거나 중요한 과목부터 시작하세요. ' +
          '이 좋은 흐름을 타고 한 단계 도약할 수 있어요. 매일 조금씩이라도 꾸준히 하는 게 핵심입니다.'
    };
    return guides[topic] || guides.general;
  }

  function buildMBTITipDeep(mbti) {
    var tips = {
      'E': '외향적인 에너지가 넘치시는 분이죠. 사람들과 어울리면서 에너지를 충전하는 타입이시지만, ' +
        '이번에는 혼자만의 조용한 시간을 가져보시는 것을 추천드려요. 때로는 내면으로 향하는 시간이 더 명확한 답을 줄 수 있거든요. ' +
        '주변 사람들의 의견도 좋지만, 최종 결정만큼은 조용히 혼자서 내려보세요. 당신의 직관을 믿으시면 됩니다.',
      'I': '내면의 세계가 풍요로운 분이시네요. 깊이 생각하고 신중하게 행동하시는 장점이 있지만, ' +
        '때로는 그 깊은 생각이 결정을 늦추기도 해요. 이번에는 가까운 사람 한 명에게 솔직하게 이야기를 나눠보세요. ' +
        '혼자 안고 있던 것을 말로 꺼내는 순간, 의외로 간단한 해결책이 보일 수 있어요.',
      'S': '현실적이고 구체적인 것을 중시하시는 분이시죠. 그 특성을 카드 해석에도 활용해보세요. ' +
        '카드의 메시지를 추상적으로 느끼기보다, 구체적인 행동 계획으로 바꿔보시면 좋겠어요. ' +
        '"그래서 내가 당장 할 수 있는 건 뭐지?" 이 질문을 항상 기억하세요.',
      'N': '직관과 영감이 뛰어나신 분이에요! 카드를 처음 봤을 때 느낀 그 첫 번째 인상, 그 순간적인 느낌을 정말 소중히 여기세요. ' +
        '그것이 바로 당신의 가장 강력한 무기입니다. 논리적으로 설명이 안 되더라도, 직감이 맞을 때가 많거든요. ' +
        '다만 가끔은 현실적인 부분도 체크해주시면 더 완벽해질 거예요.',
      'T': '논리적이고 분석적인 분이시네요. 카드의 메시지를 이성적으로 받아들이시겠지만, ' +
        '이번만큼은 감정적인 부분에도 귀를 기울여보시면 좋겠어요. 머리로는 이해되지 않지만 마음이 끌리는 방향... ' +
        '그것도 충분히 근거 있는 선택이 될 수 있습니다. 감정과 논리의 균형을 찾아보세요.',
      'F': '감성이 풍부하고 공감 능력이 뛰어나신 분이에요. 다른 사람의 감정을 잘 읽지만, ' +
        '정작 본인의 감정은 뒤로 미루실 때가 있죠. 이번에는 자신의 마음을 먼저 챙겨보세요. ' +
        '"내가 진짜 원하는 게 뭐지?" 다른 사람이 아닌, 나 자신에게 물어보는 시간을 가져보세요.',
      'J': '계획적이고 체계적인 분이시죠. 그 특성을 살려 카드의 메시지를 구체적인 계획으로 만들어보세요. ' +
        '다만 계획대로 안 될 때도 있다는 것을 받아들이는 유연함도 필요해요. ' +
        '때로는 흐름에 몸을 맡기는 것도 좋은 전략이 될 수 있습니다.',
      'P': '유연하고 적응력이 뛰어나신 분이에요! 변화에 강한 것이 당신의 최대 장점이죠. ' +
        '다만 이번에는 핵심적인 것 한 가지만은 확실히 정하고 실행해보세요. ' +
        '모든 것을 열어두는 것보다, 하나라도 확실히 끝내는 것이 더 큰 성취감을 줄 거예요.'
    };
    return tips[mbti[0]] || '카드의 메시지를 마음에 새기고 실천해보세요. 작은 변화가 큰 차이를 만들어낼 수 있습니다.';
  }

  function getTopicNameEn(topic) {
    var map = { love:'love', money:'finances', health:'health', career:'career', study:'studies', general:'life', today:'today', tomorrow:'tomorrow', week:'this week', month:'this month', year:'this year', marriage:'marriage', social:'relationships', question:'your question' };
    return map[topic] || 'life';
  }

  function buildTopicAdviceDeepEn(topic, isReversed, cardName) {
    var t = topic || 'general';
    var dir = isReversed ? 'reversed' : 'upright';
    var key = 'reading_topic_' + t + '_' + dir;
    var fallback = 'reading_topic_general_' + dir;
    var result = L(key);
    if (result === key) result = L(fallback);
    return result;
  }

  function buildActionGuideEn(topic, isReversed) {
    var t = topic || 'general';
    var dir = isReversed ? 'reversed' : 'upright';
    var key = 'reading_action_' + t + '_' + dir;
    var fallback = 'reading_action_general_' + dir;
    var result = L(key);
    if (result === key) result = L(fallback);
    return result;
  }

  function buildMBTITipDeepEn(mbti) {
    var key = 'reading_mbti_' + mbti[0];
    var result = L(key);
    if (result === key) result = L('reading_mbti_default');
    return result;
  }

  function generateExpertReadingEn(cards, topic, question, mbti, curLang) {
    var p = [];
    var q = escapeHtml(question || '');
    var topicName = getTopicNameEn(topic);

    // ── Warm greeting + atmosphere ──
    p.push('<p class="expert-greeting">' + L('reading_greeting') + '</p>');

    p.push('<p>' + L('reading_question_ack', { question: '<strong>' + q + '</strong>' }) + '</p>');

    if (cards.length === 1) {
      // ═══ 1-Card Reading (detailed) ═══
      var c = cards[0];
      var name = escapeHtml(c.name[curLang] || c.name.en);
      var dir = c.isReversed;
      var kws = (c.keywords[curLang] || c.keywords.en || []);

      p.push('<p style="margin-top:16px"><strong style="font-size:1.1em;color:var(--gold)">\u2726 ' + name + ' \u2014 ' +
        getDirLabel(dir, curLang) + '</strong></p>');

      p.push('<p>' + L('reading_card_intro', { card: name }) + ' ' +
        L('reading_card_energy', { card: name, kw: escapeHtml(kws.slice(0, 3).join(', ')), dir: getDirLabel(dir, curLang) }) + '</p>');

      if (dir) {
        p.push('<p>' + L('reading_reversed_msg', { question: q }) + '</p>');
        p.push('<p>' + L('reading_1card_reversed_core') + '</p>');
        p.push('<p>' + L('reading_1card_reversed_growth') + '</p>');
      } else {
        p.push('<p>' + L('reading_upright_msg', { question: q }) + '</p>');
        p.push('<p>' + L('reading_1card_upright_caution') + '</p>');
        p.push('<p>' + L('reading_1card_upright_newstart') + '</p>');
      }

      // Topic-specific deep analysis
      p.push('<p style="margin-top:16px"><strong style="color:var(--gold)">' + L('reading_topic_header', { topic: topicName }) + '</strong></p>');
      p.push('<p>' + L('reading_topic_intro', { topic: topicName }) + ' ' +
        buildTopicAdviceDeepEn(topic, dir, name) + '</p>');

      // Action guide
      p.push('<p style="margin-top:16px"><strong style="color:var(--gold)">' + L('reading_action_header') + '</strong></p>');
      p.push('<p>' + L('reading_action_intro') + ' ' +
        buildActionGuideEn(topic, dir) + '</p>');

    } else {
      // ═══ 3-Card Reading (Past · Present · Future) ═══
      p.push('<p style="margin-top:16px">' + L('reading_3card_intro') + '</p>');

      // ── Past Card ──
      var c0 = cards[0], n0 = escapeHtml(c0.name[curLang] || c0.name.en), d0 = c0.isReversed;
      var kws0 = (c0.keywords[curLang] || c0.keywords.en || []);
      p.push('<p style="margin-top:20px"><strong style="font-size:1.05em;color:var(--gold)">' + L('reading_past_header') + ' \u2014 ' + n0 + ' (' + getDirLabel(d0, curLang) + ')</strong></p>');

      p.push('<p>' + L('reading_past_intro', { card: n0, kw: escapeHtml(kws0.slice(0, 2).join(', ')) }) + '</p>');

      if (d0) {
        p.push('<p>' + L('reading_past_reversed', { kw: escapeHtml(kws0[0] || ''), card: n0 }) + '</p>');
      } else {
        p.push('<p>' + L('reading_past_upright', { kw: escapeHtml(kws0[0] || ''), card: n0 }) + '</p>');
      }

      // ── Present Card ──
      var c1 = cards[1], n1 = escapeHtml(c1.name[curLang] || c1.name.en), d1 = c1.isReversed;
      var kws1 = (c1.keywords[curLang] || c1.keywords.en || []);
      p.push('<p style="margin-top:20px"><strong style="font-size:1.05em;color:var(--gold)">' + L('reading_present_header') + ' \u2014 ' + n1 + ' (' + getDirLabel(d1, curLang) + ')</strong></p>');

      p.push('<p>' + L('reading_present_intro', { card: n1 }) + '</p>');

      if (d1) {
        p.push('<p>' + L('reading_present_reversed', { kw: escapeHtml(kws1[0] || ''), card: n1 }) + '</p>');
        p.push('<p>' + L('reading_present_reversed_act') + '</p>');
      } else {
        p.push('<p>' + L('reading_present_upright', { kw: escapeHtml(kws1[0] || ''), card: n1 }) + '</p>');
        p.push('<p>' + L('reading_present_upright_act') + '</p>');
      }

      // ── Future Card ──
      var c2 = cards[2], n2 = escapeHtml(c2.name[curLang] || c2.name.en), d2 = c2.isReversed;
      var kws2 = (c2.keywords[curLang] || c2.keywords.en || []);
      p.push('<p style="margin-top:20px"><strong style="font-size:1.05em;color:var(--gold)">' + L('reading_future_header') + ' \u2014 ' + n2 + ' (' + getDirLabel(d2, curLang) + ')</strong></p>');

      p.push('<p>' + L('reading_future_intro', { card: n2 }) + '</p>');

      if (d2) {
        p.push('<p>' + L('reading_future_reversed_intro') + ' ' +
          L('reading_future_reversed', { kw: escapeHtml(kws2[0] || '') + ', ' + escapeHtml(kws2[1] || '') }) + '</p>');
        p.push('<p>' + L('reading_future_reversed_strategy') + '</p>');
      } else {
        p.push('<p>' + L('reading_future_upright', { kw: escapeHtml(kws2[0] || '') + ', ' + escapeHtml(kws2[1] || '') }) + '</p>');
        p.push('<p>' + L('reading_future_upright_action') + '</p>');
      }

      // ── Combined Synthesis ──
      p.push('<p style="margin-top:20px"><strong style="font-size:1.05em;color:var(--gold)">' + L('reading_combined_header') + '</strong></p>');

      p.push('<p>' + L('reading_combined_msg', { c0: n0, c1: n1, c2: n2 }) + '</p>');

      p.push('<p>' + buildTopicAdviceDeepEn(topic, d2, n1) + '</p>');
    }

    // ── MBTI 전용 섹션 (카드 스타일) ──
    if (mbti) {
      var mbtiGroupE = getMBTIGroup(mbti);
      var mbtiEmojiE = getMBTIEmoji(mbti);
      var mbtiTraitsE = getMBTITraits(mbti, curLang);
      p.push('<div class="daily-section-card daily-mbti-section">');
      p.push('<div class="dsc-header"><span class="dsc-icon">' + mbtiEmojiE + '</span><span class="dsc-title">' + L('daily_mbti_section_title', { mbti: mbti }) + '</span></div>');
      p.push('<div class="dsc-badge">' + L('daily_mbti_group', { group: mbtiGroupE }) + '</div>');
      p.push('<div class="dsc-body">');
      p.push('<p>' + buildMBTITipDeepEn(mbti) + '</p>');
      p.push('</div>');
      p.push('<div class="dsc-traits">');
      p.push('<div class="dsc-trait"><span class="dsc-trait-label">💪 ' + L('daily_mbti_strength') + '</span><span class="dsc-trait-value">' + mbtiTraitsE.strength + '</span></div>');
      p.push('<div class="dsc-trait"><span class="dsc-trait-label">⚡ ' + L('daily_mbti_energy') + '</span><span class="dsc-trait-value">' + mbtiTraitsE.energy + '</span></div>');
      p.push('<div class="dsc-trait"><span class="dsc-trait-label">💡 ' + L('daily_mbti_tip') + '</span><span class="dsc-trait-value">' + mbtiTraitsE.tip + '</span></div>');
      p.push('</div>');
      p.push('<div class="dsc-mission"><span class="dsc-mission-icon">🎯</span> ' + L('daily_mbti_mission_' + mbti[0]) + '</div>');
      p.push('</div>');
    }

    // ── 별자리 운세 전용 섹션 ──
    var zodiacIdE = localStorage.getItem('mystical_zodiac');
    if (zodiacIdE && window.ZODIAC) {
      var zSignE = window.ZODIAC.getSignById(zodiacIdE);
      if (zSignE) {
        var zNameE = zSignE.name[curLang] || zSignE.name.en;
        var allSignsE = window.ZODIAC.getAllSigns();
        var zIdxE = 0;
        for (var ze = 0; ze < allSignsE.length; ze++) { if (allSignsE[ze].id === zodiacIdE) { zIdxE = ze; break; } }
        var zRngE = zodiacSeed(zIdxE);
        var zLoveE = Math.floor(zRngE() * 5) + 1;
        var zCareerE = Math.floor(zRngE() * 5) + 1;
        var zHealthE = Math.floor(zRngE() * 5) + 1;
        var zLuckE = Math.floor(zRngE() * 5) + 1;
        var zElemE = zSignE.element;
        var zMoodE = (zLoveE + zCareerE + zHealthE + zLuckE) >= 12 ? '_good' : '_caution';

        p.push('<div class="daily-section-card daily-zodiac-section">');
        p.push('<div class="dsc-header"><span class="dsc-icon">' + zSignE.symbol + '</span><span class="dsc-title">' + L('daily_zodiac_section_title', { sign: zNameE }) + '</span></div>');
        p.push('<div class="dsc-stars-row">');
        p.push('<div class="dsc-star-item"><span class="dsc-star-label">' + L('zodiac_rating_love') + '</span>' + makeStars(zLoveE) + '</div>');
        p.push('<div class="dsc-star-item"><span class="dsc-star-label">' + L('zodiac_rating_career') + '</span>' + makeStars(zCareerE) + '</div>');
        p.push('<div class="dsc-star-item"><span class="dsc-star-label">' + L('zodiac_rating_health') + '</span>' + makeStars(zHealthE) + '</div>');
        p.push('<div class="dsc-star-item"><span class="dsc-star-label">' + L('zodiac_rating_luck') + '</span>' + makeStars(zLuckE) + '</div>');
        p.push('</div>');
        p.push('<div class="dsc-body">');
        p.push('<p>' + L('zodiac_element_' + zElemE, { sign: zNameE }) + '</p>');
        p.push('</div>');
        p.push('<div class="dsc-highlights">');
        p.push('<div class="dsc-highlight"><span class="dsc-hl-icon">💕</span><span class="dsc-hl-text">' + L('zodiac_love_' + zElemE + zMoodE) + '</span></div>');
        p.push('<div class="dsc-highlight"><span class="dsc-hl-icon">💼</span><span class="dsc-hl-text">' + L('zodiac_career_' + zElemE + zMoodE) + '</span></div>');
        p.push('</div>');
        p.push('<div class="dsc-lucky-row">');
        p.push('<span class="dsc-lucky-item">🍀 ' + L('zodiac_lucky_color') + ': ' + L('zodiac_color_' + zElemE) + '</span>');
        p.push('</div>');
        p.push('<div class="dsc-affirm">✨ ' + L('zodiac_affirm_' + zElemE) + ' ✨</div>');
        p.push('<div class="dsc-more"><button class="dsc-more-btn" onclick="goLanding(\'zodiac\')">' + L('daily_zodiac_more') + ' →</button></div>');
        p.push('</div>');
      }
    }

    // ── Practical takeaway ──
    p.push('<p style="margin-top:20px"><strong style="color:var(--gold)">' + L('reading_practice_header') + '</strong></p>');
    p.push('<p>' + buildActionGuideEn(topic, cards[cards.length-1].isReversed) + '</p>');

    p.push('<p style="margin-top:20px;padding:16px;background:rgba(201,162,39,0.06);border-radius:12px;border-left:3px solid var(--gold)">' +
      L('reading_closing') + '</p>');

    return p.join('');
  }

  /* ============ 사주 섹션 ============ */
  function buildSajuSection() {
    var birth = localStorage.getItem('mystical_birth');
    var hour = parseInt(localStorage.getItem('mystical_birth_hour') || '12');
    if (!birth || !window.calculateSaju) return '';
    try {
      var p = birth.split('-');
      var saju = window.calculateSaju(parseInt(p[0]), parseInt(p[1]), parseInt(p[2]), hour);
      var pillarLabels = [L('saju_pillar_hour'), L('saju_pillar_day'), L('saju_pillar_month'), L('saju_pillar_year')];
      return '<div class="reading-interpretation">' +
        '<h3>📊 ' + L('analysis_saju') + '</h3>' +
        '<div class="reading-card-section">' +
          '<div style="display:flex;justify-content:center;gap:12px;margin:16px 0">' +
            sajuPillarHtml(pillarLabels[0], saju.hourPillar) +
            sajuPillarHtml(pillarLabels[1], saju.dayPillar) +
            sajuPillarHtml(pillarLabels[2], saju.monthPillar) +
            sajuPillarHtml(pillarLabels[3], saju.yearPillar) +
          '</div>' +
          '<p class="rcs-text">' + L('saju_harmony_msg') + '</p>' +
        '</div>' +
      '</div>';
    } catch (e) { return ''; }
  }

  function sajuPillarHtml(label, p) {
    return '<div style="text-align:center;background:var(--bg-card);border:1px solid var(--border-subtle);' +
      'border-radius:12px;padding:12px 16px;min-width:60px">' +
      '<div style="font-size:11px;color:var(--text-dim)">' + label + '</div>' +
      '<div style="font-size:24px;margin:8px 0;color:var(--gold)">' + (p.stem || '') + '</div>' +
      '<div style="font-size:24px;color:var(--text-primary)">' + (p.branch || '') + '</div>' +
      '<div style="font-size:11px;color:var(--text-secondary);margin-top:4px">' + (p.full || '') + '</div></div>';
  }

  /* ============ 카드 사전 ============ */
  function buildDictionarySection(cards, lang) {
    var html = '<div class="card-dictionary-section">' +
      '<h3>📖 ' + L('card_dict') + '</h3>';
    cards.forEach(function (card) {
      var sym = getCardSymbol(card);
      var el = card.element || 'air';
      var color = ELEMENT_COLORS[el] || ELEMENT_COLORS.air;
      html += '<details class="dict-card">' +
        '<summary>' +
          '<span style="margin-right:8px">' + sym + '</span>' +
          '<strong>' + escapeHtml(card.name[lang] || card.name.en) + '</strong>' +
          '<span style="margin-left:auto;font-size:0.8rem;color:' + color.main + '">' + color.symbol + ' ' + getElementName(el, lang) + '</span>' +
        '</summary>' +
        '<div class="dict-body">' +
          '<div style="margin-bottom:8px"><strong>' + getDirLabel(false, lang) + ':</strong> ' +
            escapeHtml(card.upright[lang] || card.upright.en || '') + '</div>' +
          '<div style="margin-bottom:8px"><strong>' + getDirLabel(true, lang) + ':</strong> ' +
            escapeHtml(card.reversed[lang] || card.reversed.en || '') + '</div>' +
          '<div><strong>' + ({ko:'키워드',en:'Keywords',ja:'キーワード',es:'Palabras clave',pt:'Palavras-chave',fr:'Mots-clés',de:'Schlüsselwörter'}[lang] || 'Keywords') + ':</strong> ' +
            (card.keywords[lang] || card.keywords.en || []).map(function(k) {
              return '<span class="keyword-tag">' + escapeHtml(k) + '</span>';
            }).join(' ') + '</div>' +
        '</div>' +
      '</details>';
    });
    html += '</div>';
    return html;
  }

  /* ============ 로또 결과 ============ */
  function showLottoResult() {
    var lang = window.getLang ? window.getLang() : 'en';
    var drawn = pickedCards.length > 0 ? pickedCards : (window.TAROT ? window.TAROT.draw(3) : []);
    showScreen('lotto-result-screen');
    showTopNav(false);
    var ch = '';
    drawn.forEach(function (card) {
      ch += '<div class="result-card">' +
        '<div class="card-emoji" style="font-size:2rem">' + getCardSymbol(card) + '</div>' +
        '<div class="card-name">' + escapeHtml(card.name[lang] || card.name.en) + '</div></div>';
    });
    document.getElementById('lotto-cards').innerHTML = ch;
    var nums = [];
    while (nums.length < 6) { var n = Math.floor(Math.random() * 45) + 1; if (nums.indexOf(n) === -1) nums.push(n); }
    nums.sort(function(a,b){return a-b;});
    var colors = ['#f87171','#fbbf24','#4ade80','#60a5fa','#a78bfa','#f472b6'];
    var nh = '';
    nums.forEach(function(n,i){ nh += '<div class="lotto-ball" style="background:'+colors[i]+'">'+n+'</div>'; });
    document.getElementById('lotto-numbers').innerHTML = nh;

    // MBTI/별자리 섹션 추가
    var lottoExtra = document.getElementById('lotto-extra-sections');
    if (lottoExtra) {
      lottoExtra.innerHTML = buildMBTISectionHtml() + buildZodiacSectionHtml();
    }
  }

  window.copyLottoNumbers = function () {
    var balls = document.querySelectorAll('.lotto-ball');
    var nums = []; balls.forEach(function(b){ nums.push(b.textContent); });
    copyToClipboard(nums.join(', '));
  };

  /* ============ 택일 (길일 분석) ============ */
  window.analyzeDatepick = function () {
    var birth = localStorage.getItem('mystical_birth');
    if (!birth) { showToast(L('datepick_need_birth')); return; }
    var dateAVal = getDateValue('datepick-a-group');
    var dateBVal = getDateValue('datepick-b-group');
    if (!dateAVal || !dateBVal) { showToast(L('datepick_need_dates')); return; }
    var startDate = new Date(dateAVal);
    var endDate = new Date(dateBVal);
    if (endDate <= startDate) { showToast(L('datepick_range_error')); return; }
    var diffDays = Math.round((endDate - startDate) / (1000*60*60*24));
    if (diffDays > 90) { showToast(L('datepick_range_limit')); return; }

    // 포인트 차감
    if (!usePoints(50)) { showToast(L('points_lack')); return; }
    showToast(L('points_deducted', {n: 50}));

    var bp = birth.split('-');
    var birthYear = parseInt(bp[0]), birthMonth = parseInt(bp[1]), birthDay = parseInt(bp[2]);
    var hour = parseInt(localStorage.getItem('mystical_birth_hour') || '12');
    var mySaju = window.calculateSaju(birthYear, birthMonth, birthDay, hour);
    var myDayStem = mySaju.dayMaster.stem;
    var myOheng = mySaju.ohengCount;
    var isKoLang = lang() === 'ko';

    // 부족한 오행 찾기
    var ohengArr = Object.entries(myOheng).sort(function(a,b){ return a[1]-b[1]; });
    var weakOhengs = ohengArr.filter(function(e){ return e[1] <= 1; }).map(function(e){ return e[0]; });

    // 각 날짜 점수 계산
    var dayScores = [];
    var cur = new Date(startDate);
    while (cur <= endDate) {
      var y = cur.getFullYear(), m = cur.getMonth() + 1, d = cur.getDate();
      var dayPillar = window.getDayPillar(y, m, d);
      var yukchin = window.getYukchin(myDayStem, dayPillar.stem);
      var stemOheng = OHENG_OF_CHEONGAN[dayPillar.stem];
      var branchOheng = OHENG_OF_JIJI[dayPillar.branch];

      var score = 0;
      var reasons = [];

      // 1. 육친 점수
      var yukchinScores = { '정인':10, '편인':8, '식신':9, '정관':7, '정재':7, '편재':6, '비견':5, '겁재':3, '상관':3, '편관':2 };
      score += (yukchinScores[yukchin] || 5);
      reasons.push({ type: 'yukchin', value: yukchin });

      // 2. 오행 보충 점수 (부족한 오행을 채워주면 +)
      if (weakOhengs.indexOf(stemOheng) !== -1) { score += 5; reasons.push({ type: 'supplement', value: stemOheng }); }
      if (weakOhengs.indexOf(branchOheng) !== -1) { score += 3; reasons.push({ type: 'supplement', value: branchOheng }); }

      // 3. 생 관계 (날의 오행이 나를 생해주면 +)
      if (PRODUCES[stemOheng] === OHENG_OF_CHEONGAN[myDayStem]) { score += 4; reasons.push({ type: 'produces', value: stemOheng }); }

      // 4. 극 관계 (날의 오행이 나를 극하면 -)
      if (OVERCOMES[stemOheng] === OHENG_OF_CHEONGAN[myDayStem]) { score -= 3; }

      // 5. 일지(지지) 동물 에너지
      var animalCard = JIJI_CARDS[dayPillar.branch];

      dayScores.push({
        date: dateA.value.substring(0,4) === ''+y ? (y+'-'+(m<10?'0'+m:m)+'-'+(d<10?'0'+d:d)) : (y+'-'+(m<10?'0'+m:m)+'-'+(d<10?'0'+d:d)),
        y: y, m: m, d: d,
        score: score,
        dayPillar: dayPillar,
        yukchin: yukchin,
        stemOheng: stemOheng,
        branchOheng: branchOheng,
        animalCard: animalCard,
        reasons: reasons
      });
      cur.setDate(cur.getDate() + 1);
    }

    // 상위 3개 추출
    dayScores.sort(function(a,b){ return b.score - a.score; });
    var top3 = dayScores.slice(0, 3);

    // 결과 HTML 생성
    var el = document.getElementById('datepick-result-content');
    if (!el) return;

    var html = '<div class="reading-header">' +
      '<span class="reading-icon">📅</span>' +
      '<h2>' + L('datepick_best3') + '</h2>' +
      '<p>' + dateA.value + ' ~ ' + dateB.value + ' (' + diffDays + (isKoLang ? '일' : ' days') + ')</p>' +
    '</div>';

    top3.forEach(function(item, idx) {
      var rank = idx + 1;
      var stemCard = CHEONGAN_CARDS[item.dayPillar.stem];
      var dateObj = new Date(item.y, item.m - 1, item.d);
      var dayNames = isKoLang ? ['일','월','화','수','목','금','토'] : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
      var dayName = dayNames[dateObj.getDay()];

      var medalColors = ['#fbbf24', '#c0c0c0', '#cd7f32'];
      var medalEmojis = ['🥇','🥈','🥉'];

      // 육친 설명
      var yukchinDesc = getDateYukchinDesc(item.yukchin, isKoLang);
      // 오행 조화 설명
      var harmonyDesc = getDateOhengDesc(item, myDayStem, isKoLang);
      // 활용 팁
      var tipDesc = getDateTip(item.yukchin, isKoLang);

      html += '<div class="datepick-card" style="border-left:4px solid ' + medalColors[idx] + '">' +
        '<div class="dp-rank">' + medalEmojis[idx] + ' <strong>' + L('datepick_rank', {n: rank}) + '</strong></div>' +
        '<div class="dp-date">' +
          '<span class="dp-date-main">' + item.y + '.' + item.m + '.' + item.d + ' (' + dayName + ')</span>' +
          '<span class="dp-score">' + (isKoLang ? '점수' : 'Score') + ': ' + item.score + '</span>' +
        '</div>' +
        '<div class="dp-pillar-info">' +
          '<span class="dp-stem" style="color:' + OHENG_COLORS[item.stemOheng].main + '">' + stemCard.symbol + ' ' + CHEONGAN[item.dayPillar.stem] + JIJI[item.dayPillar.branch] + (isKoLang ? '일' : '') + '</span>' +
          '<span class="dp-animal">' + item.animalCard.symbol + ' ' + (isKoLang ? item.animalCard.animal : item.animalCard.title) + '</span>' +
          '<span class="dp-yukchin-badge" style="background:' + OHENG_COLORS[item.stemOheng].main + '22;color:' + OHENG_COLORS[item.stemOheng].main + '">' + item.yukchin + '</span>' +
        '</div>' +

        '<div class="dp-section">' +
          '<h4>' + L('datepick_yukchin_rel') + ' — ' + item.yukchin + '</h4>' +
          '<p>' + yukchinDesc + '</p>' +
        '</div>' +

        '<div class="dp-section">' +
          '<h4>' + L('datepick_oheng_harmony') + '</h4>' +
          '<p>' + harmonyDesc + '</p>' +
        '</div>' +

        '<div class="dp-section dp-tip">' +
          '<h4>' + L('datepick_tip') + '</h4>' +
          '<p>' + tipDesc + '</p>' +
        '</div>' +

      '</div>';
    });

    // MBTI/별자리 섹션 추가
    html += buildMBTISectionHtml() + buildZodiacSectionHtml();

    el.innerHTML = html;
    showScreen('datepick-result-screen');
    showTopNav(false);
  };

  function getDateYukchinDesc(yukchin, isKo) {
    var descs = isKo ? {
      '정인': '정인의 날은 귀인의 도움과 지혜가 열리는 길일입니다. 학습, 계약, 중요한 결정에 최적입니다. 어른이나 윗사람의 조언이 큰 도움이 되며, 문서 관련 일에 유리합니다.',
      '편인': '편인의 날은 특별한 영감과 창의력이 높아지는 날입니다. 새로운 아이디어, 창작 활동, 비일상적인 계획에 좋습니다. 직감을 따르면 좋은 결과를 얻습니다.',
      '식신': '식신의 날은 풍요와 창조의 기운이 넘치는 최고의 길일입니다. 사업 개시, 개업, 잔치, 모임 등 경사스러운 일에 탁월합니다. 먹고 즐기는 복이 있는 날입니다.',
      '정관': '정관의 날은 권위와 인정을 받기 좋은 날입니다. 공식적인 행사, 면접, 승진 관련 일, 관공서 방문에 유리합니다. 책임감 있는 결정을 내리기 좋습니다.',
      '정재': '정재의 날은 안정적인 재물운이 흐르는 날입니다. 계약, 부동산, 저축, 안정적 투자에 좋습니다. 성실한 노력이 정직하게 보상받는 날입니다.',
      '편재': '편재의 날은 큰 기회와 재물의 흐름이 있는 날입니다. 사업 확장, 거래, 새로운 수익원 개발에 좋습니다. 과감한 결정이 필요할 수 있습니다.',
      '비견': '비견의 날은 자신의 힘으로 일을 추진하기 좋은 날입니다. 독립적인 활동, 운동, 경쟁 시험에 유리합니다. 자기 주도적 행동이 빛을 발합니다.',
      '겁재': '겁재의 날은 에너지가 분산될 수 있는 날입니다. 큰 금전 거래보다 소소한 일상 활동에 집중하는 것이 좋습니다. 대인관계에서 양보의 미덕이 필요합니다.',
      '상관': '상관의 날은 변화와 표현의 에너지가 강한 날입니다. 창의적 발표, 예술 활동에는 좋지만, 중요한 계약이나 공식적 행사는 피하는 것이 좋습니다.',
      '편관': '편관의 날은 도전과 시련의 기운이 있는 날입니다. 큰 결정보다는 준비와 계획에 시간을 쓰는 것이 현명합니다. 건강 관리에 신경 쓰세요.'
    } : {
      '정인': 'A day blessed by the Direct Seal — wisdom, mentoring, and auspicious guidance flow freely. Ideal for learning, signing contracts, and making important decisions. Seek advice from elders.',
      '편인': 'An Indirect Seal day brings special inspiration and heightened creativity. Great for new ideas, artistic projects, and unconventional plans. Trust your intuition today.',
      '식신': 'An Eating God day overflows with abundance and creative energy — one of the most auspicious days. Perfect for business launches, celebrations, and gatherings.',
      '정관': 'A Direct Officer day brings authority and recognition. Excellent for official events, interviews, promotions, and government matters. Make responsible decisions with confidence.',
      '정재': 'A Direct Wealth day carries stable financial energy. Favorable for contracts, real estate, savings, and steady investments. Honest effort is rewarded.',
      '편재': 'An Indirect Wealth day brings big opportunities and financial flow. Good for business expansion, deals, and developing new income sources. Bold decisions may be needed.',
      '비견': 'A Companion day empowers self-driven action. Favorable for independent activities, sports, and competitive exams. Self-initiative shines today.',
      '겁재': 'A Rob Wealth day may scatter energy. Focus on routine activities rather than major financial transactions. Practice generosity in relationships.',
      '상관': 'A Hurting Officer day is strong in expression and change. Good for creative presentations and art, but avoid formal contracts or official events.',
      '편관': 'A Seven Killings day carries challenging energy. Better for preparation and planning than big decisions. Take care of your health.'
    };
    return descs[yukchin] || '';
  }

  function getDateOhengDesc(item, myDayStem, isKo) {
    var myOheng = OHENG_OF_CHEONGAN[myDayStem];
    var dayStemOheng = item.stemOheng;
    var dayBranchOheng = item.branchOheng;
    var relation = '';

    if (PRODUCES[dayStemOheng] === myOheng) {
      relation = isKo ? dayStemOheng + '(' + OHENG_SYMBOLS[dayStemOheng] + ')이 나의 ' + myOheng + '(' + OHENG_SYMBOLS[myOheng] + ')을 생(生)해주는 관계로, 에너지를 보충받는 좋은 날입니다.'
        : OHENG_COLORS[dayStemOheng].name + ' generates your ' + OHENG_COLORS[myOheng].name + ' energy — a day of nourishment and support.';
    } else if (dayStemOheng === myOheng) {
      relation = isKo ? '일간의 오행이 나와 같은 ' + myOheng + '(' + OHENG_SYMBOLS[myOheng] + ')으로, 에너지가 강화되는 날입니다. 자신감을 갖고 행동하기 좋습니다.'
        : 'The day shares your ' + OHENG_COLORS[myOheng].name + ' element — your energy is amplified. Act with confidence.';
    } else if (PRODUCES[myOheng] === dayStemOheng) {
      relation = isKo ? '나의 ' + myOheng + '이 날의 ' + dayStemOheng + '을 생해주는 관계로, 베풀고 투자하기 좋은 날입니다.'
        : 'Your ' + OHENG_COLORS[myOheng].name + ' nurtures the day\'s ' + OHENG_COLORS[dayStemOheng].name + ' — a good day for giving and investing.';
    } else if (OVERCOMES[dayStemOheng] === myOheng) {
      relation = isKo ? '날의 ' + dayStemOheng + '이 나의 ' + myOheng + '을 극(克)하는 관계이나, 다른 요소가 이를 보완합니다.'
        : 'The day\'s ' + OHENG_COLORS[dayStemOheng].name + ' challenges your ' + OHENG_COLORS[myOheng].name + ', but other factors compensate.';
    } else {
      relation = isKo ? '날의 오행 ' + dayStemOheng + '(' + OHENG_SYMBOLS[dayStemOheng] + ')과 ' + dayBranchOheng + '(' + OHENG_SYMBOLS[dayBranchOheng] + ')이 조화를 이루는 날입니다.'
        : 'The day\'s ' + OHENG_COLORS[dayStemOheng].name + ' and ' + OHENG_COLORS[dayBranchOheng].name + ' create a harmonious combination.';
    }
    return relation;
  }

  function getDateTip(yukchin, isKo) {
    var tips = isKo ? {
      '정인': '학원 등록, 계약서 서명, 중요한 상담, 이사, 입학에 적합합니다.',
      '편인': '창작 활동 시작, 새로운 취미, 명상, 종교 활동에 좋습니다.',
      '식신': '개업, 결혼식, 잔치, 여행 출발, 사업 개시에 최적입니다.',
      '정관': '면접, 승진 발표, 관공서 서류, 공식 행사에 유리합니다.',
      '정재': '부동산 계약, 저축 시작, 급여 협상, 안정적 거래에 좋습니다.',
      '편재': '사업 투자, 새로운 거래, 시장 진출, 주식 매매에 유리합니다.',
      '비견': '운동 시작, 자격증 시험, 독립적 프로젝트 착수에 좋습니다.',
      '겁재': '가벼운 일상 활동, 정리 정돈, 소규모 모임에 적합합니다.',
      '상관': '예술 발표회, 블로그 작성, 자유로운 브레인스토밍에 좋습니다.',
      '편관': '건강검진, 체력 관리, 서류 정리, 조용한 준비 시간에 적합합니다.'
    } : {
      '정인': 'Great for signing contracts, important consultations, moving, and enrollment.',
      '편인': 'Good for starting creative projects, new hobbies, meditation, and spiritual activities.',
      '식신': 'Perfect for grand openings, weddings, celebrations, travel departures, and business launches.',
      '정관': 'Favorable for interviews, promotion announcements, government documents, and official events.',
      '정재': 'Good for real estate deals, starting savings, salary negotiations, and stable transactions.',
      '편재': 'Favorable for business investments, new deals, market entry, and stock trading.',
      '비견': 'Good for starting exercise routines, certification exams, and independent projects.',
      '겁재': 'Suitable for light daily activities, organizing, and small gatherings.',
      '상관': 'Good for art shows, blogging, and free brainstorming sessions.',
      '편관': 'Suitable for health checkups, fitness, document organization, and quiet preparation.'
    };
    return tips[yukchin] || '';
  }

  /* ============ MBTI 궁합 심층 분석 ============ */
  function generateMBTICompatSection(myMBTI, theirMBTI, lang) {
    var TYPES = window.MBTI && window.MBTI.TYPES ? window.MBTI.TYPES : {};
    var myInfo = TYPES[myMBTI] || {};
    var theirInfo = TYPES[theirMBTI] || {};
    var myName = (myInfo.name && myInfo.name[lang]) || (myInfo.name && myInfo.name.en) || myMBTI;
    var theirName = (theirInfo.name && theirInfo.name[lang]) || (theirInfo.name && theirInfo.name.en) || theirMBTI;
    var myEmoji = myInfo.emoji || '🧠';
    var theirEmoji = theirInfo.emoji || '🧠';
    var myDesc = (myInfo.desc && myInfo.desc[lang]) || (myInfo.desc && myInfo.desc.en) || '';
    var theirDesc = (theirInfo.desc && theirInfo.desc[lang]) || (theirInfo.desc && theirInfo.desc.en) || '';

    // 축별 분석 (번역 키 사용)
    var axisKeys = ['energy', 'perception', 'decision', 'lifestyle'];
    var axisLetters = [
      { idx: 0, poles: ['E', 'I'] },
      { idx: 1, poles: ['S', 'N'] },
      { idx: 2, poles: ['T', 'F'] },
      { idx: 3, poles: ['J', 'P'] }
    ];
    var axes = axisLetters.map(function(a) {
      return {
        nameKey: axisKeys[a.idx],
        name: L('compat_axis_' + axisKeys[a.idx]),
        my: myMBTI[a.idx],
        their: theirMBTI[a.idx],
        desc: function(letter) { return L('compat_axis_' + letter); }
      };
    });

    var sameCount = 0;
    var diffAxes = [];
    var sameAxes = [];
    axes.forEach(function(ax) {
      if (ax.my === ax.their) { sameCount++; sameAxes.push(ax); }
      else { diffAxes.push(ax); }
    });

    // 궁합 유형 판별 (번역 키 사용)
    var compatType = '';
    var compatDesc = '';
    if (sameCount === 4) { compatType = L('compat_type_perfect'); compatDesc = L('compat_type_perfect_desc'); }
    else if (sameCount === 3) { compatType = L('compat_type_high'); compatDesc = L('compat_type_high_desc'); }
    else if (sameCount === 2) { compatType = L('compat_type_balanced'); compatDesc = L('compat_type_balanced_desc'); }
    else if (sameCount === 1) { compatType = L('compat_type_challenging'); compatDesc = L('compat_type_challenging_desc'); }
    else { compatType = L('compat_type_opposite'); compatDesc = L('compat_type_opposite_desc'); }

    // 축별 조화/갈등 분석
    var axisAnalysis = '';
    var conflictKeys = { energy: 'compat_conflict_energy', perception: 'compat_conflict_perception', decision: 'compat_conflict_decision', lifestyle: 'compat_conflict_lifestyle' };
    axes.forEach(function(ax) {
      if (ax.my === ax.their) {
        axisAnalysis += '<p><strong>✦ ' + ax.name + ' [' + ax.my + '/' + ax.their + '] — ' + L('compat_empathy') + '</strong><br>' +
          L('compat_same_axis', { desc: ax.desc(ax.my) }) + '</p>';
      } else {
        axisAnalysis += '<p><strong>✦ ' + ax.name + ' [' + ax.my + '/' + ax.their + '] — ' + L('compat_complement') + '</strong><br>' +
          L(conflictKeys[ax.nameKey]) + '</p>';
      }
    });

    // 실천 팁
    var tips = '';
    tips += '<p><strong>' + L('compat_comm_tips_header') + '</strong><br>';
    if (myMBTI[0] !== theirMBTI[0]) tips += '• ' + L('compat_tip_energy') + '<br>';
    if (myMBTI[1] !== theirMBTI[1]) tips += '• ' + L('compat_tip_perception') + '<br>';
    if (myMBTI[2] !== theirMBTI[2]) tips += '• ' + L('compat_tip_decision') + '<br>';
    if (myMBTI[3] !== theirMBTI[3]) tips += '• ' + L('compat_tip_lifestyle') + '<br>';
    tips += '• ' + L('compat_tip_general1') + '<br>';
    tips += '• ' + L('compat_tip_general2') + '</p>';
    tips += '<p><strong>' + L('compat_watch_out_header') + '</strong><br>';
    if (sameCount >= 3) tips += '• ' + L('compat_warn_similar1') + '<br>• ' + L('compat_warn_similar2') + '<br>• ' + L('compat_warn_similar3') + '</p>';
    else tips += '• ' + L('compat_warn_diff1') + '<br>• ' + L('compat_warn_diff2') + '<br>• ' + L('compat_warn_diff3') + '</p>';

    var html = '<div class="compat-analysis-section">' +
      '<div class="expert-badge">' + L('compat_badge') + '</div>' +
      '<div class="expert-text">';

    html += '<p><strong>' + myEmoji + ' ' + L('compat_me_label') + ' (' + myMBTI + ' ' + myName + ')</strong><br>' + myDesc + '</p>';
    html += '<p><strong>' + theirEmoji + ' ' + L('compat_partner_label') + ' (' + theirMBTI + ' ' + theirName + ')</strong><br>' + theirDesc + '</p>';

    html += '<p><strong>◆ ' + L('compat_type') + ': ' + compatType + ' (' + sameCount + '/4 ' + L('compat_match_label') + ')</strong><br>' + compatDesc + '</p>';

    html += axisAnalysis;
    html += tips;

    html += '</div></div>';
    return html;
  }

  /* ============ 궁합 ============ */
  window.selectPartnerAxis = function (btn, value) {
    var row = btn.closest('.mbti-row');
    row.querySelectorAll('.ax').forEach(function(b){ b.classList.remove('selected'); });
    btn.classList.add('selected');
    var axes = document.querySelectorAll('#compatibility-screen .mbti-row .ax.selected');
    var type = '';
    axes.forEach(function(a){ type += a.textContent.trim().charAt(0); });
    partnerMBTI = type || 'ESTJ';
    var el = document.getElementById('partner-mbti-preview');
    if (el) el.textContent = partnerMBTI;
  };

  function updateCompatMyInfo() {
    var mbti = localStorage.getItem('mystical_mbti') || '????';
    var birth = localStorage.getItem('mystical_birth') || '';
    var gender = localStorage.getItem('mystical_gender');
    var genderIcon = gender === 'female' ? L('setup_gender_f') : (gender === 'male' ? L('setup_gender_m') : '');
    var lang = window.getLang ? window.getLang() : 'ko';
    var zodiac = '';
    if (birth && window.ZODIAC && window.ZODIAC.getZodiac) {
      try {
        var bp = birth.split('-');
        var z = window.ZODIAC.getZodiac(parseInt(bp[1]), parseInt(bp[2]));
        if (z) zodiac = z.symbol + ' ' + (z.name[lang] || z.name.en);
      } catch(e) {}
    }
    var el = document.getElementById('compat-my-info');
    if (el) {
      el.innerHTML = '<span class="compat-mbti">' + mbti + '</span>' +
        (birth ? '<span class="compat-detail">' + birth + '</span>' : '') +
        (genderIcon ? '<span class="compat-detail">' + genderIcon + '</span>' : '') +
        (zodiac ? '<span class="compat-detail">' + zodiac + '</span>' : '');
    }
  }

  /* ============ 사주 (리치 UI) ============ */
  function getHourText(hour) {
    var hourNames = (window.t ? window.t('hour_names') : '').split(',');
    var timeRanges = ['23-01','01-03','03-05','05-07','07-09','09-11','11-13','13-15','15-17','17-19','19-21','21-23'];
    var idx = hour === 23 || hour === 0 ? 0 : Math.floor((hour + 1) / 2);
    var name = hourNames[idx] || '';
    return name ? name + '(' + timeRanges[idx] + ')' : '';
  }

  function getYearYukchinReading(yukchin) {
    var starKeyMap = {
      '비견': 'bigyeon', '겁재': 'geopjae', '식신': 'siksin', '상관': 'sanggwan',
      '편재': 'pyeonjae', '정재': 'jeongjae', '편관': 'pyeongwan', '정관': 'jeonggwan',
      '편인': 'pyeonin', '정인': 'jeongin'
    };
    var key = starKeyMap[yukchin];
    return key ? L('saju_fortune_' + key) : '';
  }

  /* ============ 바이오리듬 ============ */
  function renderBiorhythmScreen() {
    var birth = localStorage.getItem('mystical_birth');
    var needEl = document.getElementById('bio-need-birth');
    var contentEl = document.getElementById('bio-content');
    var langCode = window.getLang ? window.getLang() : 'ko';
    var t = (window.BIORHYTHM_I18N && window.BIORHYTHM_I18N[langCode]) || (window.BIORHYTHM_I18N && window.BIORHYTHM_I18N.ko) || {};

    if (!birth) {
      needEl.style.display = 'block';
      contentEl.style.display = 'none';
      var needText = document.getElementById('bio-need-text');
      if (needText) needText.textContent = t.need_birth || '';
      var setupBtn = document.getElementById('bio-setup-btn');
      if (setupBtn) setupBtn.textContent = t.btn_setup || '';
      return;
    }
    needEl.style.display = 'none';
    contentEl.style.display = 'block';

    var bio = window.BIORHYTHM.getTodayBio(birth);
    var analysis = window.BIORHYTHM.getAnalysis(bio, langCode);

    // 수치 카드 업데이트
    var pVal = document.getElementById('bio-p-value');
    var eVal = document.getElementById('bio-e-value');
    var iVal = document.getElementById('bio-i-value');
    if (pVal) pVal.textContent = (bio.physical >= 0 ? '+' : '') + bio.physical + '%';
    if (eVal) eVal.textContent = (bio.emotional >= 0 ? '+' : '') + bio.emotional + '%';
    if (iVal) iVal.textContent = (bio.intellectual >= 0 ? '+' : '') + bio.intellectual + '%';

    // 라벨
    var pLbl = document.getElementById('bio-p-label');
    var eLbl = document.getElementById('bio-e-label');
    var iLbl = document.getElementById('bio-i-label');
    if (pLbl) pLbl.textContent = t.legend_physical || '';
    if (eLbl) eLbl.textContent = t.legend_emotional || '';
    if (iLbl) iLbl.textContent = t.legend_intellectual || '';

    // 상태
    var statusMap = { excellent: t.status_excellent, good: t.status_good, normal: t.status_normal, critical: t.status_critical, low: t.status_low, caution: t.status_caution, poor: t.status_poor };
    var pSt = document.getElementById('bio-p-status');
    var eSt = document.getElementById('bio-e-status');
    var iSt = document.getElementById('bio-i-status');
    if (pSt) { pSt.textContent = statusMap[analysis.physical.level] || ''; pSt.className = 'bio-card-status level-' + analysis.physical.level; }
    if (eSt) { eSt.textContent = statusMap[analysis.emotional.level] || ''; eSt.className = 'bio-card-status level-' + analysis.emotional.level; }
    if (iSt) { iSt.textContent = statusMap[analysis.intellectual.level] || ''; iSt.className = 'bio-card-status level-' + analysis.intellectual.level; }

    // 카드 색상
    var pCard = document.querySelector('.bio-card.physical');
    var eCard = document.querySelector('.bio-card.emotional');
    var iCard = document.querySelector('.bio-card.intellectual');
    if (pCard) pCard.style.borderTopColor = '#ff6b6b';
    if (eCard) eCard.style.borderTopColor = '#4ecdc4';
    if (iCard) iCard.style.borderTopColor = '#ffd93d';

    // 분석 텍스트
    var aTitle = document.getElementById('bio-analysis-title');
    if (aTitle) aTitle.textContent = t.analysis_title || '';

    var aP = document.getElementById('bio-analysis-physical');
    var aE = document.getElementById('bio-analysis-emotional');
    var aI = document.getElementById('bio-analysis-intellectual');
    if (aP) aP.innerHTML = '<h4 style="color:#ff6b6b">' + analysis.physical.label + ' (' + (bio.physical >= 0 ? '+' : '') + bio.physical + '%)</h4><p>' + analysis.physical.analysis + '</p>';
    if (aE) aE.innerHTML = '<h4 style="color:#4ecdc4">' + analysis.emotional.label + ' (' + (bio.emotional >= 0 ? '+' : '') + bio.emotional + '%)</h4><p>' + analysis.emotional.analysis + '</p>';
    if (aI) aI.innerHTML = '<h4 style="color:#ffd93d">' + analysis.intellectual.label + ' (' + (bio.intellectual >= 0 ? '+' : '') + bio.intellectual + '%)</h4><p>' + analysis.intellectual.analysis + '</p>';

    // 주의사항
    var warnSection = document.getElementById('bio-warnings');
    var warnList = document.getElementById('bio-warning-list');
    var warnTitle = document.getElementById('bio-warning-title');
    var warnings = [];
    if (analysis.physical.warning) warnings.push(analysis.physical.warning);
    if (analysis.emotional.warning) warnings.push(analysis.emotional.warning);
    if (analysis.intellectual.warning) warnings.push(analysis.intellectual.warning);
    if (warnings.length > 0) {
      warnSection.style.display = 'block';
      if (warnTitle) warnTitle.textContent = t.warning_title || '';
      warnList.innerHTML = warnings.map(function(w) { return '<li>' + w + '</li>'; }).join('');
    } else {
      warnSection.style.display = 'none';
    }

    // 행복 조언
    var advTitle = document.getElementById('bio-advice-title');
    var advText = document.getElementById('bio-advice-text');
    if (advTitle) advTitle.textContent = t.advice_title || '';
    if (advText) advText.textContent = analysis.advice || '';

    // 그래프 그리기
    setTimeout(function() {
      window.BIORHYTHM.drawGraph('bio-canvas', birth);
    }, 100);
  }

  function showSajuAnalysis() {
    var birth = localStorage.getItem('mystical_birth');
    var hour = parseInt(localStorage.getItem('mystical_birth_hour') || '12');
    var gender = localStorage.getItem('mystical_gender') || 'male';
    if (!birth || !window.calculateSaju) { showToast(L('enter_birth')); return; }
    var p = birth.split('-');
    var year = parseInt(p[0]), month = parseInt(p[1]), day = parseInt(p[2]);

    try {
      var saju = window.calculateSaju(year, month, day, hour);
      var el = document.getElementById('saju-content');
      if (!el) return;

      var isKoLang = lang() === 'ko';
      var genderText = gender === 'male' ? L('saju_gender_m') : L('saju_gender_f');
      var animal = window.getAnimalByLang ? getAnimalByLang(saju.pillars[0].branch) : ANIMALS[saju.pillars[0].branch];
      var userName = localStorage.getItem('mystical_name') || '';

      var html = '<div class="saju-result-header">' +
        '<h2>' + (userName ? userName + L('saju_name_suffix') : '') + L('saju_title') + '</h2>' +
        '<p class="saju-birth-info">' + year + L('saju_birth_year_label') + month + L('saju_birth_month_label') + day + L('saju_birth_day_label') + getHourText(hour) + ' | ' + genderText + ' | ' + animal + L('saju_tti') + '</p>' +
        '<p class="saju-birth-sub">' + L('saju_year_prefix') + saju.sajuYear + L('saju_ipchun') + saju.monthTerm + '</p>' +
      '</div>';

      // 4주 표시 (시-일-월-년)
      html += '<div class="pillars-container">';
      var pillarIndices = [3, 2, 1, 0];
      var pillarKeys = ['year', 'month', 'day', 'hour'];
      var curLangSaju = lang();
      var pillarNamesLocalized = isKoLang ? saju.pillarNames : (window.PILLAR_NAMES_I18N && PILLAR_NAMES_I18N[curLangSaju] ? PILLAR_NAMES_I18N[curLangSaju] : (window.PILLAR_NAMES_EN || saju.pillarNames));
      pillarIndices.forEach(function(idx) {
        var pi = saju.pillars[idx];
        var stemOheng = OHENG_OF_CHEONGAN[pi.stem];
        var branchOheng = OHENG_OF_JIJI[pi.branch];
        var yukchinRaw = saju.yukchins[pillarKeys[idx]];
        var yukchinDisplay = window.getYukchinByLang ? getYukchinByLang(yukchinRaw) : yukchinRaw;
        var stemOhengDisplay = window.getOhengByLang ? getOhengByLang(stemOheng) : stemOheng;
        var branchOhengDisplay = window.getOhengByLang ? getOhengByLang(branchOheng) : branchOheng;

        html += '<div class="pillar">' +
          '<div class="pillar-label">' + pillarNamesLocalized[idx] + '</div>' +
          '<div class="pillar-yukchin">' + yukchinDisplay + '</div>' +
          '<div class="pillar-cell stem" style="background:' + OHENG_COLORS[stemOheng].main + '15;border-color:' + OHENG_COLORS[stemOheng].main + '">' +
            '<span class="cell-char">' + CHEONGAN[pi.stem] + '</span>' +
            '<span class="cell-hanja">' + CHEONGAN_CARDS[pi.stem].hanja + '</span>' +
            '<span class="cell-oheng" style="color:' + OHENG_COLORS[stemOheng].main + '">' + stemOhengDisplay + '(' + OHENG_SYMBOLS[stemOheng] + ')</span>' +
          '</div>' +
          '<div class="pillar-cell branch" style="background:' + OHENG_COLORS[branchOheng].main + '15;border-color:' + OHENG_COLORS[branchOheng].main + '">' +
            '<span class="cell-char">' + JIJI[pi.branch] + '</span>' +
            '<span class="cell-hanja">' + JIJI_CARDS[pi.branch].hanja + '</span>' +
            '<span class="cell-oheng" style="color:' + OHENG_COLORS[branchOheng].main + '">' + branchOhengDisplay + '(' + OHENG_SYMBOLS[branchOheng] + ')</span>' +
          '</div>' +
        '</div>';
      });
      html += '</div>';

      // 오행 분석 바
      html += '<div class="oheng-analysis"><h3>' + L('oheng_title') + '</h3><div class="oheng-bars">';
      var ohengKeys = ['목','화','토','금','수'];
      ohengKeys.forEach(function(oh) {
        var count = saju.ohengCount[oh];
        var pct = (count / 8) * 100;
        var isEmpty = count === 0;
        var ohLabel = window.getOhengByLang ? getOhengByLang(oh) : oh;
        html += '<div class="oheng-bar-item">' +
          '<span class="oheng-label" style="color:' + OHENG_COLORS[oh].main + '">' + OHENG_SYMBOLS[oh] + ' ' + ohLabel + '</span>' +
          '<div class="oheng-bar-track"><div class="oheng-bar-fill" style="width:' + pct + '%;background:' + OHENG_COLORS[oh].main + '"></div></div>' +
          '<span class="oheng-count ' + (isEmpty ? 'oheng-empty' : '') + '">' + count + (isEmpty ? ' !' : '') + '</span>' +
        '</div>';
      });
      html += '</div></div>';

      // 일간(일주 천간) 해석
      var dmCard = CHEONGAN_CARDS[saju.dayMaster.stem];
      var dmI18n = (!isKoLang && window.CHEONGAN_CARDS_I18N && CHEONGAN_CARDS_I18N[curLangSaju]) ? CHEONGAN_CARDS_I18N[curLangSaju][saju.dayMaster.stem] : null;
      var dmTitle = isKoLang ? dmCard.title : (dmI18n ? dmI18n.title : (dmCard.titleEn || dmCard.title));
      var dmDesc = isKoLang ? dmCard.description : (dmI18n ? dmI18n.description : (dmCard.descriptionEn || dmCard.description));
      var dmKeywords = isKoLang ? dmCard.keywords : (dmI18n ? dmI18n.keywords : (dmCard.keywordsEn || dmCard.keywords));
      var dmYinyang = window.getYinyangByLang ? getYinyangByLang(saju.dayMaster.yinyang) : saju.dayMaster.yinyang;
      var dmOheng = window.getOhengByLang ? getOhengByLang(saju.dayMaster.oheng) : saju.dayMaster.oheng;
      html += '<div class="day-master-info">' +
        '<div class="dm-symbol">' + dmCard.symbol + '</div>' +
        '<h3>' + dmTitle + '</h3>' +
        '<p class="dm-subtitle">' + dmYinyang + ' ' + dmOheng + ' · ' + CHEONGAN[saju.dayMaster.stem] + '(' + dmCard.hanja + ') ' + L('saju_day_master_label') + '</p>' +
        '<p class="dm-desc">' + dmDesc + '</p>' +
        '<div class="dm-keywords">' + dmKeywords.map(function(k){ return '<span class="keyword-tag">' + k + '</span>'; }).join('') + '</div>' +
      '</div>';

      // 올해 세운
      var thisYear = new Date().getFullYear();
      var yearStem = ((thisYear - 4) % 10 + 10) % 10;
      var yearBranch = ((thisYear - 4) % 12 + 12) % 12;
      var yearYukchin = getYukchin(saju.dayMaster.stem, yearStem);
      var yearYukchinDisplay = window.getYukchinByLang ? getYukchinByLang(yearYukchin) : yearYukchin;
      var yearCard = CHEONGAN_CARDS[yearStem];
      var yearAnimalCard = JIJI_CARDS[yearBranch];
      var yearAnimalDisplay = window.getAnimalByLang ? getAnimalByLang(yearBranch) : ANIMALS[yearBranch];

      html += '<div class="year-fortune">' +
        '<h3>' + L('year_fortune_title', {y: thisYear}) + '</h3>' +
        '<div class="year-fortune-row">' +
          '<div class="year-fortune-card">' +
            '<span class="yf-symbol">' + yearCard.symbol + '</span>' +
            '<span class="yf-text">' + CHEONGAN[yearStem] + JIJI[yearBranch] + L('saju_year_suffix') + '</span>' +
            '<span class="yf-sub">' + yearAnimalCard.symbol + ' ' + yearAnimalDisplay + L('year_of') + '</span>' +
          '</div>' +
          '<div class="year-fortune-detail">' +
            '<div class="yf-yukchin"><span class="yf-badge">' + yearYukchinDisplay + '</span>' + L('year_of') + '</div>' +
            '<p class="yf-reading">' + getYearYukchinReading(yearYukchin) + '</p>' +
          '</div>' +
        '</div>' +
      '</div>';

      // 동양 철학 마스터 해석 (5000~6000자)
      html += generateSajuExpertReading(saju, year, month, day, hour, gender);

      el.innerHTML = html;
      showScreen('saju-screen');

      // 4주 애니메이션
      setTimeout(function() {
        document.querySelectorAll('.pillar').forEach(function(pill, i) {
          setTimeout(function(){ pill.classList.add('show'); }, i * 200);
        });
      }, 300);

    } catch (e) { showToast(L('saju_calc_error', {msg: e.message})); }
  }

  function generateSajuExpertReading(saju, year, month, day, hour, gender) {
    var dm = saju.dayMaster;
    var dmCard = CHEONGAN_CARDS[dm.stem];
    var oheng = saju.ohengCount;
    var isKoLang = lang() === 'ko';
    var defaultNames = { ko:'그대', en:'Dear One', ja:'あなた', es:'Estimado/a', pt:'Prezado/a', fr:'Cher(e)', de:'Liebe(r)' };
    var curLang = lang();
    var userName = localStorage.getItem('mystical_name') || (defaultNames[curLang] || defaultNames.en);
    var genderText = gender === 'male' ? L('saju_gender_m') : L('saju_gender_f');
    var animal = ANIMALS[saju.pillars[0].branch];
    var animalCard = JIJI_CARDS[saju.pillars[0].branch];
    var animalDisplay = window.getAnimalByLang ? getAnimalByLang(saju.pillars[0].branch) : animal;
    var ohengNameFn = function(oh) { return window.getOhengByLang ? getOhengByLang(oh) : oh; };
    var yinyangDisplay = window.getYinyangByLang ? getYinyangByLang(dm.yinyang) : dm.yinyang;

    // 오행 분포 분석
    var ohengArr = Object.entries(oheng).sort(function(a,b){ return b[1]-a[1]; });
    var strongest = ohengArr[0];
    var weakest = ohengArr[ohengArr.length - 1];
    var missing = ohengArr.filter(function(e){ return e[1] === 0; });
    var balanced = ohengArr.every(function(e){ return e[1] >= 1 && e[1] <= 2; });

    // 육친 분석
    var ykYear = saju.yukchins.year;
    var ykMonth = saju.yukchins.month;
    var ykHour = saju.yukchins.hour;

    // Key maps
    var ohengKeyMap = { '목': 'wood', '화': 'fire', '토': 'earth', '금': 'metal', '수': 'water' };
    var starKeyMap = {
      '비견': 'bigyeon', '겁재': 'geopjae', '식신': 'siksin', '상관': 'sanggwan',
      '편재': 'pyeonjae', '정재': 'jeongjae', '편관': 'pyeongwan', '정관': 'jeonggwan',
      '편인': 'pyeonin', '정인': 'jeongin', '본인': ''
    };
    var animalKeyMap = {
      '쥐': 'rat', '소': 'ox', '호랑이': 'tiger', '토끼': 'rabbit',
      '용': 'dragon', '뱀': 'snake', '말': 'horse', '양': 'goat',
      '원숭이': 'monkey', '닭': 'rooster', '개': 'dog', '돼지': 'pig'
    };

    var yinYangKey = dm.yinyang === '양' ? 'yang' : 'yin';
    var personalityText = L('saju_stem_' + ohengKeyMap[dm.oheng] + '_' + yinYangKey);

    // 오행 조화 해석
    var ohengAdvice = '';
    if (balanced) {
      ohengAdvice = L('saju_oheng_balanced');
    } else if (missing.length > 0) {
      var missingNames = missing.map(function(e){ return ohengNameFn(e[0]) + '(' + OHENG_SYMBOLS[e[0]] + ')'; }).join(', ');
      ohengAdvice = L('saju_oheng_missing', {names: missingNames});
      missing.forEach(function(m) { ohengAdvice += L('saju_supplement_' + ohengKeyMap[m[0]]) + ' '; });
    } else {
      ohengAdvice = L('saju_oheng_dominant', {
        strongest: ohengNameFn(strongest[0]), strongSym: OHENG_SYMBOLS[strongest[0]], strongCount: strongest[1],
        weakest: ohengNameFn(weakest[0]), weakSym: OHENG_SYMBOLS[weakest[0]], weakCount: weakest[1]
      });
      ohengAdvice += L('saju_excess_' + ohengKeyMap[strongest[0]]);
    }

    // 육친 관계 해석
    var yukchinRelation = '';
    if (ykYear !== '본인' && starKeyMap[ykYear]) yukchinRelation += L('saju_yukchin_year_prefix') + L('saju_star_' + starKeyMap[ykYear]) + ' ';
    if (ykMonth !== '본인' && starKeyMap[ykMonth]) yukchinRelation += L('saju_yukchin_month_prefix') + L('saju_star_' + starKeyMap[ykMonth]) + ' ';
    if (ykHour !== '본인' && starKeyMap[ykHour]) yukchinRelation += L('saju_yukchin_hour_prefix') + L('saju_star_' + starKeyMap[ykHour]) + ' ';

    // 올해 세운
    var thisYear = new Date().getFullYear();
    var yearStem = ((thisYear - 4) % 10 + 10) % 10;
    var yearYukchin = getYukchin(dm.stem, yearStem);
    var yearYukchinDisplay = window.getYukchinByLang ? getYukchinByLang(yearYukchin) : yearYukchin;

    // Lucky info
    var supplementOheng = weakest[1] === 0 ? weakest[0] : (strongest[0] === dm.oheng ? weakest[0] : dm.oheng);
    var luckyOhKey = ohengKeyMap[supplementOheng] || ohengKeyMap[dm.oheng];

    var dmI18n2 = (!isKoLang && window.CHEONGAN_CARDS_I18N && CHEONGAN_CARDS_I18N[curLang]) ? CHEONGAN_CARDS_I18N[curLang][dm.stem] : null;
    var dmTitle = isKoLang ? dmCard.title : (dmI18n2 ? dmI18n2.title : (dmCard.titleEn || dmCard.title));
    var text = '';

    // 1. Greeting
    text += '<p>' + L('saju_greeting', {name: userName, year: year, month: month, day: day, gender: genderText, animal: animalDisplay}) + '</p>';
    var yp = CHEONGAN[saju.pillars[0].stem] + JIJI[saju.pillars[0].branch];
    var mp = CHEONGAN[saju.pillars[1].stem] + JIJI[saju.pillars[1].branch];
    var dp = CHEONGAN[saju.pillars[2].stem] + JIJI[saju.pillars[2].branch];
    var hp = CHEONGAN[saju.pillars[3].stem] + JIJI[saju.pillars[3].branch];
    text += '<p>' + L('saju_pillars_intro', {yp: yp, mp: mp, dp: dp, hp: hp}) + '</p>';

    // 2. Nature
    text += '<p>' + L('saju_header_nature', {title: dmTitle, stem: CHEONGAN[dm.stem], hanja: dmCard.hanja}) + '</p>';
    text += '<p>' + L('saju_nature_intro', {yinyang: yinyangDisplay, oheng: ohengNameFn(dm.oheng), stem: CHEONGAN[dm.stem], hanja: dmCard.hanja, personality: personalityText}) + '</p>';

    // 3. Animal
    text += '<p>' + L('saju_header_animal', {animal: animalDisplay}) + '</p>';
    text += '<p>' + animalCard.symbol + ' ' + L('saju_animal_' + animalKeyMap[animal]) + ' ' + L('saju_animal_outro') + '</p>';

    // 4. Five elements
    text += '<p>' + L('saju_header_elements') + '</p>';
    text += '<p>' + L('saju_elements_intro', {wood: oheng['목'], fire: oheng['화'], earth: oheng['토'], metal: oheng['금'], water: oheng['수'], advice: ohengAdvice}) + '</p>';

    // 5. Relations
    text += '<p>' + L('saju_header_relations') + '</p>';
    text += '<p>' + yukchinRelation + L('saju_relations_outro') + '</p>';

    // 6. Fortune
    text += '<p>' + L('saju_header_fortune', {year: thisYear, yukchin: yearYukchinDisplay}) + '</p>';
    var fortuneKey = starKeyMap[yearYukchin];
    text += '<p>' + (fortuneKey ? L('saju_fortune_' + fortuneKey) : '') + '</p>';

    // 7. Enhance
    text += '<p>' + L('saju_header_enhance') + '</p>';
    text += '<p>' + L('saju_lucky_line1', {dir: L('saju_lucky_' + luckyOhKey + '_dir'), color: L('saju_lucky_' + luckyOhKey + '_color'), season: L('saju_lucky_' + luckyOhKey + '_season'), number: L('saju_lucky_' + luckyOhKey + '_number')}) + '</p>';
    text += '<p>' + L('saju_food_label', {food: L('saju_lucky_' + luckyOhKey + '_food')}) + ' | ' + L('saju_time_label', {time: L('saju_lucky_' + luckyOhKey + '_time')}) + '</p>';
    text += '<p>' + L('saju_enhance_outro') + '</p>';

    // 8. Health
    text += '<p>' + L('saju_header_health') + '</p>';
    text += '<p>' + L('saju_health_' + ohengKeyMap[dm.oheng]) + '</p>';

    // 9. Final
    text += '<p>' + L('saju_header_final') + '</p>';
    var yangAdvice = dm.yinyang === '양' ? L('saju_final_yang') : L('saju_final_yin');
    text += '<p>' + L('saju_final_text', {name: userName, title: dmTitle, animal: animalDisplay, yinyang: yinyangDisplay, yangAdvice: yangAdvice}) + '</p>';

    // ── MBTI 전용 섹션 ──
    var sajuMbti = localStorage.getItem('mystical_mbti');
    var sajuLang = lang();
    if (sajuMbti) {
      var smbtiGroup = getMBTIGroup(sajuMbti);
      var smbtiEmoji = getMBTIEmoji(sajuMbti);
      var smbtiTraits = getMBTITraits(sajuMbti, sajuLang);
      text += '<div class="daily-section-card daily-mbti-section">';
      text += '<div class="dsc-header"><span class="dsc-icon">' + smbtiEmoji + '</span><span class="dsc-title">' + L('daily_mbti_section_title', { mbti: sajuMbti }) + '</span></div>';
      text += '<div class="dsc-badge">' + L('daily_mbti_group', { group: smbtiGroup }) + '</div>';
      text += '<div class="dsc-body"><p>' + (sajuLang === 'ko' ? buildMBTITipDeep(sajuMbti) : buildMBTITipDeepEn(sajuMbti)) + '</p></div>';
      text += '<div class="dsc-traits">';
      text += '<div class="dsc-trait"><span class="dsc-trait-label">💪 ' + L('daily_mbti_strength') + '</span><span class="dsc-trait-value">' + smbtiTraits.strength + '</span></div>';
      text += '<div class="dsc-trait"><span class="dsc-trait-label">⚡ ' + L('daily_mbti_energy') + '</span><span class="dsc-trait-value">' + smbtiTraits.energy + '</span></div>';
      text += '<div class="dsc-trait"><span class="dsc-trait-label">💡 ' + L('daily_mbti_tip') + '</span><span class="dsc-trait-value">' + smbtiTraits.tip + '</span></div>';
      text += '</div>';
      text += '<div class="dsc-mission"><span class="dsc-mission-icon">🎯</span> ' + L('daily_mbti_mission_' + sajuMbti[0]) + '</div>';
      text += '</div>';
    }

    // ── 별자리 운세 전용 섹션 ──
    var sajuZodiacId = localStorage.getItem('mystical_zodiac');
    if (sajuZodiacId && window.ZODIAC) {
      var szSign = window.ZODIAC.getSignById(sajuZodiacId);
      if (szSign) {
        var szName = szSign.name[sajuLang] || szSign.name.en;
        var szAll = window.ZODIAC.getAllSigns();
        var szIdx = 0;
        for (var sz = 0; sz < szAll.length; sz++) { if (szAll[sz].id === sajuZodiacId) { szIdx = sz; break; } }
        var szRng = zodiacSeed(szIdx);
        var szL = Math.floor(szRng() * 5) + 1, szC = Math.floor(szRng() * 5) + 1;
        var szH = Math.floor(szRng() * 5) + 1, szK = Math.floor(szRng() * 5) + 1;
        var szElem = szSign.element;
        var szMood = (szL + szC + szH + szK) >= 12 ? '_good' : '_caution';

        text += '<div class="daily-section-card daily-zodiac-section">';
        text += '<div class="dsc-header"><span class="dsc-icon">' + szSign.symbol + '</span><span class="dsc-title">' + L('daily_zodiac_section_title', { sign: szName }) + '</span></div>';
        text += '<div class="dsc-stars-row">';
        text += '<div class="dsc-star-item"><span class="dsc-star-label">' + L('zodiac_rating_love') + '</span>' + makeStars(szL) + '</div>';
        text += '<div class="dsc-star-item"><span class="dsc-star-label">' + L('zodiac_rating_career') + '</span>' + makeStars(szC) + '</div>';
        text += '<div class="dsc-star-item"><span class="dsc-star-label">' + L('zodiac_rating_health') + '</span>' + makeStars(szH) + '</div>';
        text += '<div class="dsc-star-item"><span class="dsc-star-label">' + L('zodiac_rating_luck') + '</span>' + makeStars(szK) + '</div>';
        text += '</div>';
        text += '<div class="dsc-body"><p>' + L('zodiac_element_' + szElem, { sign: szName }) + '</p></div>';
        text += '<div class="dsc-highlights">';
        text += '<div class="dsc-highlight"><span class="dsc-hl-icon">💕</span><span class="dsc-hl-text">' + L('zodiac_love_' + szElem + szMood) + '</span></div>';
        text += '<div class="dsc-highlight"><span class="dsc-hl-icon">💼</span><span class="dsc-hl-text">' + L('zodiac_career_' + szElem + szMood) + '</span></div>';
        text += '</div>';
        text += '<div class="dsc-lucky-row"><span class="dsc-lucky-item">🍀 ' + L('zodiac_lucky_color') + ': ' + L('zodiac_color_' + szElem) + '</span></div>';
        text += '<div class="dsc-affirm">✨ ' + L('zodiac_affirm_' + szElem) + ' ✨</div>';
        text += '<div class="dsc-more"><button class="dsc-more-btn" onclick="goLanding(\'zodiac\')">' + L('daily_zodiac_more') + ' →</button></div>';
        text += '</div>';
      }
    }

    return '<div class="saju-expert-reading">' +
      '<div class="expert-badge">' + L('saju_badge') + '</div>' +
      '<div class="expert-text">' + text + '</div>' +
    '</div>';
  }

  /* [Removed: generateSajuExpertReadingEn - unified into generateSajuExpertReading above]
  function _removed_generateSajuExpertReadingEn(saju, year, month, day, hour, gender) {
    var dm = saju.dayMaster;
    var dmCard = CHEONGAN_CARDS[dm.stem];
    var oheng = saju.ohengCount;
    var userName = localStorage.getItem('mystical_name') || 'Dear One';
    var genderText = gender === 'male' ? 'male' : 'female';
    var animal = ANIMALS[saju.pillars[0].branch];
    var animalCard = JIJI_CARDS[saju.pillars[0].branch];

    var animalsEn = {
      '쥐': 'Rat', '소': 'Ox', '호랑이': 'Tiger', '토끼': 'Rabbit',
      '용': 'Dragon', '뱀': 'Snake', '말': 'Horse', '양': 'Goat',
      '원숭이': 'Monkey', '닭': 'Rooster', '개': 'Dog', '돼지': 'Pig'
    };
    var animalEn = animalsEn[animal] || animal;

    var ohengEn = { '목': 'Wood', '화': 'Fire', '토': 'Earth', '금': 'Metal', '수': 'Water' };
    var yinyangEn = dm.yinyang === '양' ? 'Yang' : 'Yin';

    // Five element distribution analysis
    var ohengArr = Object.entries(oheng).sort(function(a,b){ return b[1]-a[1]; });
    var strongest = ohengArr[0];
    var weakest = ohengArr[ohengArr.length - 1];
    var missing = ohengArr.filter(function(e){ return e[1] === 0; });
    var balanced = ohengArr.every(function(e){ return e[1] >= 1 && e[1] <= 2; });

    // Yukchin analysis
    var ykYear = saju.yukchins.year;
    var ykMonth = saju.yukchins.month;
    var ykHour = saju.yukchins.hour;

    // Personality by Day Master stem
    var stemPersonality = {
      '목': {
        yang: 'Your Day Master is Gap-Wood (甲木) — the great tree, the unwavering pine. You possess an indomitable will and a powerful drive to grow upward. Once you set your mind to something, you rarely waver. Justice and progress run through your veins. You are a natural pioneer and leader, drawn to forge new paths. However, this same steadfastness can become stubbornness — learning flexibility will unlock your highest potential.',
        yin: 'Your Day Master is Eul-Wood (乙木) — the grass and wildflower. Beneath your gentle exterior lies a remarkably tenacious life force. You adapt to any environment and find a way to thrive. Your artistic sensibility is rich, and rather than leading through force, you harmonize and bring people together. Do not mistake your softness for weakness — within you resides an extraordinary power of survival.'
      },
      '화': {
        yang: 'Your Day Master is Byeong-Fire (丙火) — the radiant sun itself. You overflow with energy and passion, naturally becoming the center of any room you enter. Charismatic and optimistic, your social abilities are exceptional. Careers involving public presence, performance, or creative expression are where you truly shine. Be mindful of emotional swings — the sun must also set to rise again.',
        yin: 'Your Day Master is Jeong-Fire (丁火) — the candlelight, the starlight. Quiet yet intensely focused, you carry a deep inner flame. Your ability to concentrate on a single pursuit with unwavering dedication is remarkable. Sensitive and warm-hearted, you possess an extraordinary gift for reading people. Academia, the arts, and fields requiring depth of insight are your natural domain.'
      },
      '토': {
        yang: 'Your Day Master is Mu-Earth (戊土) — the great mountain, the enduring hill. You exude a grounding stability and generous embrace that earns deep trust from those around you. Your ability to hold center is exceptional, and you naturally serve as mediator and peacekeeper. However, take care not to become resistant to change — staying attuned to the currents of the times is essential for your continued growth.',
        yin: 'Your Day Master is Gi-Earth (己土) — the fertile field, the nurturing soil. You carry the energy of cultivation, the power to grow and sustain life. Education, caregiving, and mentorship are where you excel. Humble and practical, your steady effort consistently bears fruit. Rather than seeking the spotlight, you achieve substantial results behind the scenes — and that is your quiet strength.'
      },
      '금': {
        yang: 'Your Day Master is Gyeong-Metal (庚金) — forged steel, the sharp blade. Your judgment is keen, your decisions swift and firm. You cannot abide injustice and will stand against it without hesitation. Direct and honest, you make an excellent leader, though your sharp words can sometimes wound. Cultivate gentleness alongside your strength, and you will become truly formidable.',
        yin: 'Your Day Master is Shin-Metal (辛金) — the precious jewel, refined gold. Within you shines an inner beauty, polished and luminous. Your sense of precision and delicate aesthetics is extraordinary. A perfectionist by nature, you hold yourself and others to high standards. The arts, design, and craftsmanship — any field requiring meticulous refinement — is where your brilliance emerges.'
      },
      '수': {
        yang: 'Your Day Master is Im-Water (壬水) — the vast ocean, the mighty river. You possess boundless depth of wisdom and an open heart that embraces all things. Your intellectual curiosity is insatiable, and you are drawn to philosophical inquiry. Travel and adventure add profound depth to your life. A free spirit at core, you chafe under constraint — your destiny flows best when unconfined.',
        yin: 'Your Day Master is Gye-Water (癸水) — morning dew, gentle rain. Pure and clear of spirit, you possess extraordinary intuition and a sensitivity that perceives the essence of things. Like water that seeps quietly into the earth, your influence is subtle yet far-reaching. Counseling, healing, and spiritual work are fields where your gifts find their fullest expression.'
      }
    };

    var yinYangKey = dm.yinyang === '양' ? 'yang' : 'yin';
    var personalityText = stemPersonality[dm.oheng][yinYangKey];

    // Five element balance interpretation
    var ohengAdvice = '';
    if (balanced) {
      ohengAdvice = 'Your five elements are remarkably well-balanced — a rare and auspicious configuration. This grants you extraordinary adaptability and protects you from extreme circumstances. However, perfect balance can also mean the absence of a standout strength. The key to your success lies in deliberately cultivating deep expertise in one chosen field, turning equilibrium into focused mastery.';
    } else if (missing.length > 0) {
      var missingNames = missing.map(function(e){ return ohengEn[e[0]] + '(' + OHENG_SYMBOLS[e[0]] + ')'; }).join(', ');
      var supplementAdvice = {
        '목': 'To supplement Wood energy: wear green clothing and accessories, spend time in parks and forests, face the east direction, and be active during early morning hours. Eat plenty of leafy greens and sour-tasting foods like citrus and plum.',
        '화': 'To supplement Fire energy: incorporate red and warm tones into your wardrobe and living space, face the south direction, and use warm lighting. Drink hot tea often, enjoy bitter-tasting foods, and maintain active social connections — human warmth feeds your Fire.',
        '토': 'To supplement Earth energy: embrace yellow and brown tones, spend time in your home\'s central area, and try gardening or pottery — working with soil directly. Eat sweet-tasting foods like dates, honey, and sweet potatoes. The southwest direction is favorable.',
        '금': 'To supplement Metal energy: favor white and silver tones, face the west direction, and wear metal jewelry or accessories. Eat pungent-flavored foods like ginger, garlic, and chili. Maintain an orderly, structured environment — discipline feeds your Metal.',
        '수': 'To supplement Water energy: embrace black and navy tones, face the north direction, and live near water if possible. Swimming, long baths, and foot soaking are excellent. Eat salty foods and seafood. Cultivate your inner world through meditation and reading.'
      };
      ohengAdvice = 'Your chart is missing ' + missingNames + '. This creates a vulnerability in the corresponding life domains, but it also presents a powerful opportunity — consciously supplementing the missing element can catalyze tremendous personal growth. ';
      missing.forEach(function(m) { ohengAdvice += supplementAdvice[m[0]] + ' '; });
    } else {
      ohengAdvice = ohengEn[strongest[0]] + '(' + OHENG_SYMBOLS[strongest[0]] + ') is your strongest element with ' + strongest[1] + ' appearances, while ' + ohengEn[weakest[0]] + '(' + OHENG_SYMBOLS[weakest[0]] + ') is your weakest with ' + weakest[1] + '. ';
      var strongAdvice = {
        '목': 'With strong Wood energy, you overflow with growth and pioneering spirit. But excess Wood can manifest as rigidity and self-righteousness. Cultivate Metal\'s virtues of discipline and discernment to achieve balance.',
        '화': 'With strong Fire energy, your passion and expressiveness are extraordinary. But unchecked Fire brings impatience and emotional volatility. Cultivate Water\'s wisdom — calm reflection and deep thinking — to temper your flame.',
        '토': 'With strong Earth energy, you radiate stability and trustworthiness. But excess Earth breeds conservatism and resistance to change. Embrace Wood\'s spirit of new beginnings and bold ventures.',
        '금': 'With strong Metal energy, your decisiveness and drive are formidable. But too much Metal turns cold and overly critical. Nurture Fire\'s warmth and flexibility to soften your edges.',
        '수': 'With strong Water energy, your wisdom and adaptability are exceptional. But excess Water brings indecisiveness and restless anxiety. Build Earth\'s grounding force — centering yourself and taking decisive action.'
      };
      ohengAdvice += strongAdvice[strongest[0]];
    }

    // Yukchin (Six Relations) interpretation
    var yukchinRelation = '';
    var yukchinMapEn = {
      '비견': 'Companion Star (Bigyeon) indicates a strong self-made destiny. You learn through competition with peers and siblings, and your independence runs deep. Solo ventures tend to serve you better than partnerships.',
      '겁재': 'Rob Wealth Star (Geopjae) brings drive around finances, but warns of overextension. Guard against reckless investments and guarantees. Prudent financial management is essential for you.',
      '식신': 'Eating God Star (Siksin) blesses you with innate talent and fortune. You have a natural gift for enjoying life\'s pleasures, and creative pursuits bring you both joy and recognition. Cooking, arts, and education are strong fields.',
      '상관': 'Hurting Officer Star (Sanggwan) grants extraordinary talent with a rebellious edge. You are an innovator who breaks molds, but your sharp tongue can invite trouble. Channel your brilliance with care in your words.',
      '편재': 'Indirect Wealth Star (Pyeonjae) gives you the ability to handle large sums. You have a speculative instinct — capable of great windfalls, but also significant swings. You possess a natural entrepreneur\'s spirit.',
      '정재': 'Direct Wealth Star (Jeongjae) provides steady financial fortune. Through honest, persistent effort you accumulate wealth. Frugality and diligence form the bedrock of your prosperity.',
      '편관': 'Seven Killings Star (Pyeongwan) grants powerful drive and commanding presence. Your authority and charisma make you excel in organizations. Military, law enforcement, and legal careers particularly suit you.',
      '정관': 'Direct Officer Star (Jeonggwan) brings social standing and honor. You value rules and order, and your sense of responsibility is profound. Government service and corporate leadership offer you a natural path of advancement.',
      '편인': 'Indirect Seal Star (Pyeonin) bestows exceptional intellectual ability. You develop expertise in unconventional fields, drawn to research, philosophy, and spiritual inquiry.',
      '정인': 'Direct Seal Star (Jeongin) blesses you with wisdom and learning. Your connection with mentors and maternal figures runs deep. Education, academia, and publishing are paths of great achievement for you.',
      '본인': ''
    };
    if (ykYear !== '본인') yukchinRelation += 'In the Year Pillar: ' + yukchinMapEn[ykYear] + ' ';
    if (ykMonth !== '본인') yukchinRelation += 'In the Month Pillar: ' + yukchinMapEn[ykMonth] + ' ';
    if (ykHour !== '본인') yukchinRelation += 'In the Hour Pillar: ' + yukchinMapEn[ykHour] + ' ';

    // Zodiac animal interpretation
    var animalAdviceEn = {
      '쥐': 'Born in the Year of the Rat (子), you are exceptionally clever with a keen eye for opportunity. Carrying the energy of the first watch of night, you move one step ahead of others with remarkable foresight.',
      '소': 'Born in the Year of the Ox (丑), your quiet perseverance and unwavering diligence achieve great things. Your success may come slowly, but it comes surely — and it is in the second half of life that you truly blossom.',
      '호랑이': 'Born in the Year of the Tiger (寅), you carry a bold and pioneering spirit. Your leadership is natural and your courage in the face of challenge is admirable. Tempering your impetuousness is the key to your mastery.',
      '토끼': 'Born in the Year of the Rabbit (卯), you possess a gentle nature and refined artistic sensibility. Socially graceful and blessed with good relationships, you flourish in harmonious environments.',
      '용': 'Born in the Year of the Dragon (辰), you carry extraordinary latent power and natural charisma. Great ambitions stir within you, and when the time is right, you will soar like the dragon ascending to heaven.',
      '뱀': 'Born in the Year of the Snake (巳), you possess deep wisdom and strategic thinking. Your inner strength rarely shows on the surface, and you achieve your goals through quiet, calculated moves.',
      '말': 'Born in the Year of the Horse (午), your passion is boundless and your spirit free. Active and sociable, you achieve your finest results when given the freedom to run — unbridled and unrestrained.',
      '양': 'Born in the Year of the Goat (未), your warm heart and artistic talents define you. You find deep fulfillment in nurturing others, and careers involving emotion, creativity, and care bring out your best.',
      '원숭이': 'Born in the Year of the Monkey (申), your quick wit and versatility are remarkable. Your mind is agile and your improvisation skills superb — you naturally excel across multiple domains.',
      '닭': 'Born in the Year of the Rooster (酉), precision and propriety are your hallmarks. You pursue perfection in all things and possess an exceptional business sense and talent for financial management.',
      '개': 'Born in the Year of the Dog (戌), loyalty and justice run through your core. Trust is your highest value, and you serve as a steadfast pillar of strength for those around you.',
      '돼지': 'Born in the Year of the Pig (亥), you are blessed with abundance and a generous spirit. Good fortune in matters of pleasure and sustenance follows you, and your life carries an energy of richness and fulfillment.'
    };

    // This year's fortune
    var thisYear = new Date().getFullYear();
    var yearStem = ((thisYear - 4) % 10 + 10) % 10;
    var yearYukchin = getYukchin(dm.stem, yearStem);
    var yukchinEnName = {
      '비견': 'Companion', '겁재': 'Rob Wealth', '식신': 'Eating God', '상관': 'Hurting Officer',
      '편재': 'Indirect Wealth', '정재': 'Direct Wealth', '편관': 'Seven Killings', '정관': 'Direct Officer',
      '편인': 'Indirect Seal', '정인': 'Direct Seal'
    };
    var yearFortuneEn = {
      '비견': 'This year is one of self-confrontation and self-reliance. Competition may arise, but face it with confidence. Investments in personal development will yield tremendous returns next year. Partnerships and joint ventures require careful judgment — an independent path is this year\'s wisest strategy.',
      '겁재': 'This year calls for vigilance with finances. Avoid excessive spending, acting as guarantor, and risky investments. Yet within challenge lies opportunity — conservative saving and prudent financial planning are paramount. In relationships too, maintain clear boundaries.',
      '식신': 'This year your innate talents shine brilliantly. Projects you\'ve been nurturing come to fruition and earn well-deserved recognition. Food, travel, and cultural experiences elevate your quality of life, and your health is strong. Creative side projects may generate unexpected income.',
      '상관': 'This year brings transformation and challenge. Breaking from old patterns and trying new approaches is favored, but avoid impulsive decisions. Be especially mindful of your words — gossip and verbal conflict are possible. Rather than changing jobs, innovate within your current position.',
      '편재': 'This year brings opportunities for significant financial gain. Bold investments and business expansion can pay off, but rigorous risk management is essential. Real estate, stocks, and major transactions may bring profit. Romantic prospects are also active.',
      '정재': 'This year your steady efforts are rewarded. Honest, diligent work guarantees stable income. It\'s an excellent time to begin savings plans, and property purchases are favorable. Domestic harmony and financial stability arrive hand in hand.',
      '편관': 'This year trials and growth coexist. Unexpected difficulties may arise, but overcoming them brings a quantum leap forward. Pay special attention to your health, and actively manage stress. Legal matters or dealings with authorities are possible.',
      '정관': 'This year brings recognition and advancement. Your accumulated efforts earn acknowledgment, and your title or responsibilities may expand. Success in public and official matters is likely, and this could be a pivotal turning point — marriage, career milestones, or major life transitions.',
      '편인': 'This year favors learning and transformation. It\'s an ideal time for studying new fields or earning certifications. Spiritual and intellectual growth accelerates, and unusual connections appear. Balance idealism with practicality to navigate this year well.',
      '정인': 'This year is blessed with wisdom and support. A benefactor will appear to guide you toward good fortune. Academic pursuits and examinations yield excellent results. Bonds with mentors and maternal figures deepen, and investments in education or property are well-starred. A year of inner peace awaits.'
    };

    // Direction / color / lucky info
    var directionAdviceEn = {
      '목': { dir: 'East', color: 'Green, Blue', season: 'Spring', number: '3, 8', food: 'Sour flavors (vinegar, lemon, plum)', time: '3 AM – 7 AM' },
      '화': { dir: 'South', color: 'Red, Orange', season: 'Summer', number: '2, 7', food: 'Bitter flavors (coffee, green tea, mugwort)', time: '9 AM – 1 PM' },
      '토': { dir: 'Center / Southwest', color: 'Yellow, Brown', season: 'Transitional periods', number: '5, 10', food: 'Sweet flavors (honey, dates, sweet potato)', time: '1 PM – 3 PM' },
      '금': { dir: 'West', color: 'White, Silver, Gold', season: 'Autumn', number: '4, 9', food: 'Pungent flavors (ginger, chili, garlic)', time: '3 PM – 7 PM' },
      '수': { dir: 'North', color: 'Black, Navy', season: 'Winter', number: '1, 6', food: 'Salty flavors (seafood, fermented soybean)', time: '9 PM – 1 AM' }
    };

    var supplementOheng = weakest[1] === 0 ? weakest[0] : (strongest[0] === dm.oheng ? weakest[0] : dm.oheng);
    var luckyInfo = directionAdviceEn[supplementOheng] || directionAdviceEn[dm.oheng];

    // Health advice
    var healthAdviceEn = {
      '목': 'Pay attention to your liver, gallbladder, eyes, and muscular system. Stress directly impacts your liver, so adequate sleep and regular exercise are crucial. Spring is a season requiring extra health vigilance. Consume plenty of green vegetables for nourishment.',
      '화': 'Pay attention to your heart, small intestine, blood pressure, and eyes. Excess Fire energy generates internal heat that can cause headaches and skin troubles. Practice meditation and deep breathing to calm the mind. In summer especially, stay well hydrated.',
      '토': 'Pay attention to your stomach, spleen, and digestive system. Avoid irregular meals and overeating, and be especially careful during seasonal transitions. Gentle walks and stretching are beneficial, and warm foods should be a dietary staple.',
      '금': 'Pay attention to your lungs, large intestine, respiratory system, and skin. Avoid dry environments and use a humidifier. In autumn, guard against colds and respiratory illness. Deep breathing exercises and aerobic activity will serve you well.',
      '수': 'Pay attention to your kidneys, bladder, lower back, and joints. Keep your lower body warm, and in winter pay special attention to staying insulated. Foot baths and half-body soaks are excellent remedies. Adequate hydration is essential for you.'
    };

    var text = '';

    // 1. Greeting & Saju introduction
    text += '<p>Greetings, ' + userName + '. Drawing upon forty years of study in Eastern metaphysics, allow me to illuminate the celestial blueprint of your life. Born on ' + year + '-' + month + '-' + day + ' as a ' + genderText + ', you carry the energy of the ' + animalEn + ' in the Chinese zodiac.</p>';

    text += '<p>' + CHEONGAN[saju.pillars[0].stem] + JIJI[saju.pillars[0].branch] + ' Year, ' + CHEONGAN[saju.pillars[1].stem] + JIJI[saju.pillars[1].branch] + ' Month, ' + CHEONGAN[saju.pillars[2].stem] + JIJI[saju.pillars[2].branch] + ' Day, ' + CHEONGAN[saju.pillars[3].stem] + JIJI[saju.pillars[3].branch] + ' Hour — these are your Four Pillars of Destiny, the eight characters bestowed upon you by the heavens. Within these eight characters lie your personality, talents, relationships, health, wealth, and the grand arc of your life\'s journey.</p>';

    // 2. Day Master deep interpretation
    text += '<p>◆ Your Essential Nature — ' + dmCard.title + ' (' + CHEONGAN[dm.stem] + dmCard.hanja + ' Day Master)</p>';
    text += '<p>Your Day Master belongs to ' + yinyangEn + ' ' + ohengEn[dm.oheng] + ', represented by the Heavenly Stem ' + CHEONGAN[dm.stem] + ' (' + dmCard.hanja + '). ' + personalityText + '</p>';

    // 3. Zodiac animal interpretation
    text += '<p>◆ The Energy of the ' + animalEn + '</p>';
    text += '<p>' + animalCard.symbol + ' ' + animalAdviceEn[animal] + ' This zodiac energy shapes your public persona and first impressions — it is the face the world sees before they know your deeper nature.</p>';

    // 4. Five element analysis
    text += '<p>◆ Harmony of the Five Elements</p>';
    text += '<p>Your chart contains Wood(' + oheng['목'] + '), Fire(' + oheng['화'] + '), Earth(' + oheng['토'] + '), Metal(' + oheng['금'] + '), Water(' + oheng['수'] + '). ' + ohengAdvice + '</p>';

    // 5. Yukchin relations
    text += '<p>◆ Human Relationships in Your Chart — The Six Relations</p>';
    text += '<p>' + yukchinRelation + 'These placements reveal the nature of your family bonds, social roles, and the kinds of relationships destiny will bring into your life.</p>';

    // 6. This year's fortune
    text += '<p>◆ ' + thisYear + ' Fortune — Year of the ' + (yukchinEnName[yearYukchin] || yearYukchin) + '</p>';
    text += '<p>' + (yearFortuneEn[yearYukchin] || '') + '</p>';

    // 7. Lucky direction / color / time
    text += '<p>◆ Enhancing Your Fortune — Auspicious Living Habits</p>';
    text += '<p>Lucky Direction: ' + luckyInfo.dir + ' | Lucky Colors: ' + luckyInfo.color + ' | Lucky Season: ' + luckyInfo.season + ' | Lucky Numbers: ' + luckyInfo.number + '</p>';
    text += '<p>Nourishing Foods: ' + luckyInfo.food + ' | Peak Energy Hours: ' + luckyInfo.time + '</p>';
    text += '<p>Actively incorporating these elements into your daily life — through clothing colors, interior design, the direction you face, and your diet — replenishes deficient energy and improves the overall flow of your fortune. Small, consistent changes create profound shifts in your cosmic balance.</p>';

    // 8. Health advice
    text += '<p>◆ Health Outlook</p>';
    text += '<p>' + healthAdviceEn[dm.oheng] + '</p>';

  End of removed generateSajuExpertReadingEn */

  /* ============ 도감 (리치 카드 디자인) ============ */
  var galleryFilter = 'all';
  window.filterGallery = function (filter, btn) {
    galleryFilter = filter;
    document.querySelectorAll('.fil').forEach(function(t){ t.classList.remove('active'); });
    if (btn) btn.classList.add('active');
    renderGallery();
  };

  function renderGallery(searchTerm) {
    if (!window.TAROT) return;
    var lang = window.getLang ? window.getLang() : 'en';
    var cards = window.TAROT.getAll ? window.TAROT.getAll() : [];
    if (galleryFilter === 'major') cards = cards.filter(function(c){ return c.type === 'major'; });
    else if (galleryFilter !== 'all') cards = cards.filter(function(c){ return c.suit === galleryFilter; });
    if (searchTerm) {
      var q = searchTerm.toLowerCase();
      cards = cards.filter(function(c){ return ((c.name[lang]||c.name.en||'') + ' ' + (c.name.en||'')).toLowerCase().indexOf(q) !== -1; });
    }
    var grid = document.getElementById('gallery-grid');
    if (!grid) return;
    var html = '';
    cards.forEach(function (card) {
      var sym = getCardSymbol(card);
      var el = card.element || 'air';
      var color = ELEMENT_COLORS[el] || ELEMENT_COLORS.air;
      html += '<div class="gallery-card" onclick="openCardDetail(\'' + card.id + '\')" style="border-color:' + color.main + '30">' +
        '<div class="g-emoji" style="font-size:2rem">' + sym + '</div>' +
        '<div class="g-name">' + escapeHtml(card.name[lang] || card.name.en) + '</div>' +
        (card.number !== undefined ? '<div class="g-number" style="font-size:0.65rem;color:var(--text-dim)">' + romanize(card.number) + '</div>' : '') +
        '<div class="g-element" style="font-size:0.65rem;color:' + color.main + '">' + color.symbol + '</div>' +
      '</div>';
    });
    grid.innerHTML = html || '<p style="text-align:center;color:var(--text-dim);grid-column:1/-1">' + (lang === 'ko' ? '카드 없음' : 'No cards') + '</p>';
  }

  window.openCardDetail = function (id) {
    if (!window.TAROT) return;
    var card = window.TAROT.getById ? window.TAROT.getById(id) : null;
    if (!card) return;
    var lang = window.getLang ? window.getLang() : 'en';
    var sym = getCardSymbol(card);
    var el = card.element || 'air';
    var color = ELEMENT_COLORS[el] || ELEMENT_COLORS.air;
    var suitInfo = SUIT_INFO[card.suit] || SUIT_INFO[null];
    var content = document.getElementById('card-detail-content');
    if (content) {
      content.innerHTML =
        '<div style="text-align:center;margin-bottom:16px">' +
          '<div style="font-size:3rem;margin-bottom:8px">' + sym + '</div>' +
          '<div style="color:var(--gold);font-weight:700;font-size:1.2rem;font-family:var(--font-serif)">' + escapeHtml(card.name[lang] || card.name.en) + '</div>' +
          (card.number !== undefined ? '<div style="color:var(--text-dim);font-size:0.8rem;margin-top:2px">' + romanize(card.number) + '</div>' : '') +
          '<div style="display:flex;justify-content:center;gap:8px;margin-top:8px">' +
            '<span style="background:' + color.main + ';color:#fff;padding:2px 10px;border-radius:10px;font-size:0.75rem">' + color.symbol + ' ' + getElementName(el, lang) + '</span>' +
            '<span style="background:var(--bg-card);border:1px solid var(--border-subtle);padding:2px 10px;border-radius:10px;font-size:0.75rem">' + (suitInfo.name[lang] || suitInfo.name.en) + '</span>' +
          '</div>' +
        '</div>' +
        '<div style="background:var(--bg-secondary);border-radius:12px;padding:16px;margin-bottom:12px">' +
          '<h4 style="color:#4ade80;font-size:0.85rem;margin-bottom:6px">↑ ' + getDirLabel(false, lang) + '</h4>' +
          '<p style="font-size:0.9rem;line-height:1.6;color:var(--text-primary)">' + escapeHtml(card.upright[lang] || card.upright.en || '') + '</p>' +
        '</div>' +
        '<div style="background:var(--bg-secondary);border-radius:12px;padding:16px;margin-bottom:12px">' +
          '<h4 style="color:#f87171;font-size:0.85rem;margin-bottom:6px">↻ ' + getDirLabel(true, lang) + '</h4>' +
          '<p style="font-size:0.9rem;line-height:1.6;color:var(--text-primary)">' + escapeHtml(card.reversed[lang] || card.reversed.en || '') + '</p>' +
        '</div>' +
        '<div style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center">' +
          (card.keywords[lang] || card.keywords.en || []).map(function(k) {
            return '<span class="keyword-tag">' + escapeHtml(k) + '</span>';
          }).join('') +
        '</div>';
    }
    openModal('card-detail-modal');
  };

  /* ============ 프로필 ============ */
  function renderProfile() {
    var lang = window.getLang ? window.getLang() : 'en';
    var mbti = localStorage.getItem('mystical_mbti') || '????';
    var birth = localStorage.getItem('mystical_birth') || '';
    var zodiacId = localStorage.getItem('mystical_zodiac');
    var zodiacSign = zodiacId && window.ZODIAC ? window.ZODIAC.getSignById(zodiacId) : null;
    var mbtiInfo = window.MBTI && window.MBTI.TYPES ? window.MBTI.TYPES[mbti] : null;

    var card = document.getElementById('profile-card');
    if (card) {
      card.innerHTML =
        '<div style="text-align:center">' +
          (mbtiInfo ? '<div style="font-size:2rem;margin-bottom:4px">' + mbtiInfo.emoji + '</div>' : '') +
          '<div style="font-size:1.8rem;font-weight:700;color:var(--gold);font-family:var(--font-serif)">' + mbti + '</div>' +
          (mbtiInfo ? '<div style="color:var(--text-secondary);font-size:0.85rem;margin-top:4px">' + escapeHtml(mbtiInfo.name[lang] || mbtiInfo.name.en) + '</div>' : '') +
          '<div style="color:var(--text-dim);font-size:0.8rem;margin-top:8px">' + birth +
            (zodiacSign ? ' · ' + zodiacSign.symbol + ' ' + (zodiacSign.name[lang] || zodiacSign.name.en) : '') +
          '</div>' +
        '</div>';
    }

    var histEl = document.getElementById('history-list');
    if (histEl) {
      var history = JSON.parse(localStorage.getItem('mystical_history') || '[]');
      if (history.length === 0) {
        histEl.innerHTML = '<p style="text-align:center;color:var(--text-dim);padding:16px">' + (lang === 'ko' ? '아직 기록이 없습니다' : 'No history yet') + '</p>';
      } else {
        var hh = '';
        history.slice(0, 10).forEach(function (h) {
          hh += '<div style="padding:10px 0;border-bottom:1px solid var(--border-subtle);font-size:0.8rem;color:var(--text-secondary);display:flex;gap:8px">' +
            '<span style="color:var(--text-dim)">' + (h.date || '') + '</span>' +
            '<span style="color:var(--gold)">' + (h.type || '') + '</span>' +
            '<span>' + (h.cards || '') + '</span></div>';
        });
        histEl.innerHTML = hh;
      }
    }
  }

  function updateCategorySummary() {
    var mbti = localStorage.getItem('mystical_mbti') || '????';
    var zodiacId = localStorage.getItem('mystical_zodiac');
    var lang = window.getLang ? window.getLang() : 'en';
    var zodiacSign = zodiacId && window.ZODIAC ? window.ZODIAC.getSignById(zodiacId) : null;
    var mbtiInfo = window.MBTI && window.MBTI.TYPES ? window.MBTI.TYPES[mbti] : null;
    var el = document.getElementById('category-user-summary');
    if (el) el.textContent =
      (mbtiInfo ? mbtiInfo.emoji + ' ' : '') + mbti +
      (zodiacSign ? ' · ' + zodiacSign.symbol + ' ' + (zodiacSign.name[lang] || zodiacSign.name.en) : '');
  }

  /* ============ 히스토리 ============ */
  function saveHistory(type, cards) {
    var lang = window.getLang ? window.getLang() : 'en';
    var history = JSON.parse(localStorage.getItem('mystical_history') || '[]');
    var names = cards.map(function(c){ return c.name[lang] || c.name.en; }).join(', ');
    history.unshift({ date: new Date().toISOString().split('T')[0], type: type, cards: names });
    if (history.length > 20) history = history.slice(0, 20);
    localStorage.setItem('mystical_history', JSON.stringify(history));
  }

  /* ============ 개인정보 초기화 ============ */
  window.confirmResetData = function () {
    var msg = L('reset_confirm');
    if (confirm(msg)) {
      var langPref = localStorage.getItem('mystical_lang');
      localStorage.clear();
      if (langPref) localStorage.setItem('mystical_lang', langPref);
      alert(L('reset_done'));
      location.reload();
    }
  };

  /* ============ 공유 ============ */
  window.shareResult = function () {
    var mbti = localStorage.getItem('mystical_mbti') || '';
    var lang = window.getLang ? window.getLang() : 'en';
    var lines = [window.t ? window.t('app_name') : 'Mystical Orion MBTI Tarot'];
    lines.push(mbti);
    pickedCards.forEach(function(c) {
      lines.push(getCardSymbol(c) + ' ' + (c.name[lang] || c.name.en) + (c.isReversed ? ' ↻' : ' ↑'));
    });
    lines.push(window.location.href);
    var text = lines.join('\n');
    if (navigator.share) { navigator.share({ title: window.t ? window.t('app_name') : 'Tarot', text: text }); }
    else { copyToClipboard(text); }
  };

  /* ============ 모달 ============ */
  function openModal(id) {
    var el = document.getElementById(id);
    if (el) el.classList.add('show');
  }
  window.closeModal = function (id, e) {
    if (e && e.target !== e.currentTarget) return;
    var el = document.getElementById(id);
    if (el) el.classList.remove('show');
  };

  /* ============ 토스트 ============ */
  window.showToast = function (msg) {
    var el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg; el.classList.add('show');
    setTimeout(function(){ el.classList.remove('show'); }, 2500);
  };

  /* ============ 유틸리티 ============ */
  /* ============ MBTI 헬퍼 함수들 ============ */
  function getMBTIGroup(mbti) {
    var groups = {
      'INTJ': 'Architect', 'INTP': 'Logician', 'ENTJ': 'Commander', 'ENTP': 'Debater',
      'INFJ': 'Advocate', 'INFP': 'Mediator', 'ENFJ': 'Protagonist', 'ENFP': 'Campaigner',
      'ISTJ': 'Logistician', 'ISFJ': 'Defender', 'ESTJ': 'Executive', 'ESFJ': 'Consul',
      'ISTP': 'Virtuoso', 'ISFP': 'Adventurer', 'ESTP': 'Entrepreneur', 'ESFP': 'Entertainer'
    };
    return groups[mbti] || mbti;
  }

  function getMBTIEmoji(mbti) {
    var emojis = {
      'INTJ': '🧠', 'INTP': '🔬', 'ENTJ': '👑', 'ENTP': '💡',
      'INFJ': '🔮', 'INFP': '🌸', 'ENFJ': '🌟', 'ENFP': '🦋',
      'ISTJ': '📋', 'ISFJ': '🛡️', 'ESTJ': '⚖️', 'ESFJ': '🤝',
      'ISTP': '🔧', 'ISFP': '🎨', 'ESTP': '🚀', 'ESFP': '🎭'
    };
    return emojis[mbti] || '🧩';
  }

  function getMBTITraits(mbti, curLang) {
    var data = {
      'E': { strength: { ko: '사교력, 리더십', en: 'Social skills, Leadership', ja: '社交力、リーダーシップ', es: 'Habilidades sociales, Liderazgo', pt: 'Habilidades sociais, Liderança', fr: 'Sociabilité, Leadership', de: 'Sozialkompetenz, Führung' },
             energy: { ko: '사람들과 함께할 때 충전', en: 'Energized by social interaction', ja: '人と一緒にいるとエネルギー充電', es: 'Se recarga con la interacción social', pt: 'Energizado pela interação social', fr: "Rechargé par l'interaction sociale", de: 'Aufgeladen durch soziale Interaktion' },
             tip: { ko: '오늘은 혼자만의 성찰 시간도 필요해요', en: 'Take some alone time for reflection today', ja: '今日は一人で振り返る時間も大切に', es: 'Tómate un tiempo a solas para reflexionar hoy', pt: 'Reserve um tempo sozinho para reflexão hoje', fr: "Prenez du temps seul pour réfléchir aujourd'hui", de: 'Nehmen Sie sich heute Zeit für Reflexion' } },
      'I': { strength: { ko: '깊은 통찰력, 집중력', en: 'Deep insight, Focus', ja: '深い洞察力、集中力', es: 'Percepción profunda, Concentración', pt: 'Percepção profunda, Foco', fr: 'Perspicacité profonde, Concentration', de: 'Tiefe Einsicht, Fokus' },
             energy: { ko: '조용한 환경에서 충전', en: 'Energized in quiet settings', ja: '静かな環境でエネルギー充電', es: 'Se recarga en ambientes tranquilos', pt: 'Energizado em ambientes calmos', fr: 'Rechargé dans le calme', de: 'Aufgeladen in ruhiger Umgebung' },
             tip: { ko: '오늘은 한 사람에게 마음을 열어보세요', en: 'Open up to someone you trust today', ja: '今日は信頼できる人に心を開いてみて', es: 'Ábrete a alguien de confianza hoy', pt: 'Abra-se para alguém de confiança hoje', fr: "Ouvrez-vous à quelqu'un de confiance aujourd'hui", de: 'Öffnen Sie sich heute jemandem an' } }
    };
    var first = mbti[0];
    var d = data[first] || data['E'];
    return {
      strength: d.strength[curLang] || d.strength.en,
      energy: d.energy[curLang] || d.energy.en,
      tip: d.tip[curLang] || d.tip.en
    };
  }

  /** 재사용 가능한 MBTI 섹션 HTML 생성 */
  function buildMBTISectionHtml() {
    var curLang = lang();
    var mbti = localStorage.getItem('mystical_mbti');
    if (!mbti) return '';
    var mbtiGroup = getMBTIGroup(mbti);
    var mbtiEmoji = getMBTIEmoji(mbti);
    var mbtiTraits = getMBTITraits(mbti, curLang);
    var html = '<div class="daily-section-card daily-mbti-section">';
    html += '<div class="dsc-header"><span class="dsc-icon">' + mbtiEmoji + '</span><span class="dsc-title">' + L('daily_mbti_section_title', { mbti: mbti }) + '</span></div>';
    html += '<div class="dsc-badge">' + L('daily_mbti_group', { group: mbtiGroup }) + '</div>';
    html += '<div class="dsc-body"><p>' + (curLang === 'ko' ? buildMBTITipDeep(mbti) : buildMBTITipDeepEn(mbti)) + '</p></div>';
    html += '<div class="dsc-traits">';
    html += '<div class="dsc-trait"><span class="dsc-trait-label">💪 ' + L('daily_mbti_strength') + '</span><span class="dsc-trait-value">' + mbtiTraits.strength + '</span></div>';
    html += '<div class="dsc-trait"><span class="dsc-trait-label">⚡ ' + L('daily_mbti_energy') + '</span><span class="dsc-trait-value">' + mbtiTraits.energy + '</span></div>';
    html += '<div class="dsc-trait"><span class="dsc-trait-label">💡 ' + L('daily_mbti_tip') + '</span><span class="dsc-trait-value">' + mbtiTraits.tip + '</span></div>';
    html += '</div>';
    html += '<div class="dsc-mission"><span class="dsc-mission-icon">🎯</span> ' + L('daily_mbti_mission_' + mbti[0]) + '</div>';
    html += '</div>';
    return html;
  }

  /** 재사용 가능한 별자리 섹션 HTML 생성 */
  function buildZodiacSectionHtml() {
    var curLang = lang();
    var zodiacId = localStorage.getItem('mystical_zodiac');
    if (!zodiacId || !window.ZODIAC) return '';
    var zSign = window.ZODIAC.getSignById(zodiacId);
    if (!zSign) return '';
    var zName = zSign.name[curLang] || zSign.name.en;
    var allSigns = window.ZODIAC.getAllSigns();
    var zIdx = 0;
    for (var zi = 0; zi < allSigns.length; zi++) { if (allSigns[zi].id === zodiacId) { zIdx = zi; break; } }
    var zRng = zodiacSeed(zIdx);
    var zLove = Math.floor(zRng() * 5) + 1;
    var zCareer = Math.floor(zRng() * 5) + 1;
    var zHealth = Math.floor(zRng() * 5) + 1;
    var zLuck = Math.floor(zRng() * 5) + 1;
    var zElem = zSign.element;
    var zMood = (zLove + zCareer + zHealth + zLuck) >= 12 ? '_good' : '_caution';

    var html = '<div class="daily-section-card daily-zodiac-section">';
    html += '<div class="dsc-header"><span class="dsc-icon">' + zSign.symbol + '</span><span class="dsc-title">' + L('daily_zodiac_section_title', { sign: zName }) + '</span></div>';
    html += '<div class="dsc-stars-row">';
    html += '<div class="dsc-star-item"><span class="dsc-star-label">' + L('zodiac_rating_love') + '</span>' + makeStars(zLove) + '</div>';
    html += '<div class="dsc-star-item"><span class="dsc-star-label">' + L('zodiac_rating_career') + '</span>' + makeStars(zCareer) + '</div>';
    html += '<div class="dsc-star-item"><span class="dsc-star-label">' + L('zodiac_rating_health') + '</span>' + makeStars(zHealth) + '</div>';
    html += '<div class="dsc-star-item"><span class="dsc-star-label">' + L('zodiac_rating_luck') + '</span>' + makeStars(zLuck) + '</div>';
    html += '</div>';
    html += '<div class="dsc-body"><p>' + L('zodiac_element_' + zElem, { sign: zName }) + '</p></div>';
    html += '<div class="dsc-highlights">';
    html += '<div class="dsc-highlight"><span class="dsc-hl-icon">💕</span><span class="dsc-hl-text">' + L('zodiac_love_' + zElem + zMood) + '</span></div>';
    html += '<div class="dsc-highlight"><span class="dsc-hl-icon">💼</span><span class="dsc-hl-text">' + L('zodiac_career_' + zElem + zMood) + '</span></div>';
    html += '</div>';
    html += '<div class="dsc-lucky-row"><span class="dsc-lucky-item">🍀 ' + L('zodiac_lucky_color') + ': ' + L('zodiac_color_' + zElem) + '</span></div>';
    html += '<div class="dsc-affirm">✨ ' + L('zodiac_affirm_' + zElem) + ' ✨</div>';
    html += '<div class="dsc-more"><button class="dsc-more-btn" onclick="goLanding(\'zodiac\')">' + L('daily_zodiac_more') + ' →</button></div>';
    html += '</div>';
    return html;
  }

  function getCardSymbol(card) {
    if (!card) return '✦';
    var id = card.id || '';
    if (TAROT_SYMBOLS[id]) return TAROT_SYMBOLS[id];
    // 마이너 아르카나 - suit_number 형식 시도
    if (card.suit && card.number !== undefined) {
      var key = card.suit + '_' + card.number;
      if (TAROT_SYMBOLS[key]) return TAROT_SYMBOLS[key];
    }
    // 기본 심볼
    var suitSymbols = { wands: '🪄', cups: '🏆', swords: '⚔️', pentacles: '⭐' };
    return suitSymbols[card.suit] || '✦';
  }

  function getElementName(el, lang) {
    var names = {
      fire:  { ko:'불', en:'Fire', ja:'火', es:'Fuego', pt:'Fogo', fr:'Feu', de:'Feuer' },
      water: { ko:'물', en:'Water', ja:'水', es:'Agua', pt:'Água', fr:'Eau', de:'Wasser' },
      earth: { ko:'땅', en:'Earth', ja:'地', es:'Tierra', pt:'Terra', fr:'Terre', de:'Erde' },
      air:   { ko:'바람', en:'Air', ja:'風', es:'Aire', pt:'Ar', fr:'Air', de:'Luft' }
    };
    return (names[el] && names[el][lang]) || (names[el] && names[el].en) || el;
  }

  function getSuitName(suit, lang) {
    if (!suit) { var mj = SUIT_INFO[null]; return (mj.name[lang] || mj.name.en); }
    var info = SUIT_INFO[suit];
    return (info.name[lang] || info.name.en);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function romanize(num) {
    var lookup = {21:'XXI',20:'XX',19:'XIX',18:'XVIII',17:'XVII',16:'XVI',15:'XV',14:'XIV',13:'XIII',12:'XII',
      11:'XI',10:'X',9:'IX',8:'VIII',7:'VII',6:'VI',5:'V',4:'IV',3:'III',2:'II',1:'I',0:'0'};
    return lookup[num] !== undefined ? lookup[num] : String(num);
  }

  function copyToClipboard(text) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(function(){ showToast('Copied!'); });
    } else {
      var ta = document.createElement('textarea');
      ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand('copy');
      document.body.removeChild(ta); showToast('Copied!');
    }
  }

  /* ============ 별자리 운세 (Zodiac Horoscope) ============ */

  /** Date-seeded pseudo-random number generator */
  function zodiacSeed(signIndex) {
    var d = new Date();
    var dateNum = d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
    var seed = dateNum * 13 + signIndex * 7 + 31;
    return function () {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
  }

  /** Generate star string ★☆ */
  function makeStars(count) {
    var s = '';
    for (var i = 0; i < 5; i++) s += (i < count ? '★' : '☆');
    return s;
  }

  /** Get user's zodiac sign from stored birth */
  function getUserZodiacSign() {
    var birth = localStorage.getItem('mystical_birth');
    if (!birth || !window.ZODIAC) return null;
    var p = birth.split('-');
    return window.ZODIAC.getZodiac(parseInt(p[1]), parseInt(p[2]));
  }

  /** Date range string for a zodiac sign */
  function zodiacDateRange(sign) {
    return sign.startMonth + '/' + sign.startDay + ' - ' + sign.endMonth + '/' + sign.endDay;
  }

  /** Render zodiac screen: user info + 12 sign grid */
  function renderZodiacScreen() {
    var curLang = lang();
    var userSign = getUserZodiacSign();

    // User info bar
    var infoEl = document.getElementById('zodiac-user-info');
    if (infoEl) {
      if (userSign) {
        infoEl.style.display = 'flex';
        infoEl.innerHTML =
          '<span class="zui-symbol">' + userSign.symbol + '</span>' +
          '<div>' +
            '<div class="zui-name">' + (userSign.name[curLang] || userSign.name.en) + '</div>' +
            '<div class="zui-element">' + L('zodiac_element') + ': ' +
              (window.ZODIAC.getElementName ? window.ZODIAC.getElementName(userSign.element) : userSign.element) +
            '</div>' +
          '</div>';
      } else {
        infoEl.style.display = 'none';
      }
    }

    // 12 sign grid
    var gridEl = document.getElementById('zodiac-grid');
    if (!gridEl || !window.ZODIAC) return;
    var signs = window.ZODIAC.getAllSigns();
    var html = '';
    for (var i = 0; i < signs.length; i++) {
      html += renderZodiacCard(signs[i], curLang, userSign && signs[i].id === userSign.id);
    }
    gridEl.innerHTML = html;

    // Auto-select user's sign
    if (userSign) {
      showZodiacReading(userSign.id);
    } else {
      var resultEl = document.getElementById('zodiac-result');
      if (resultEl) resultEl.style.display = 'none';
    }
  }

  /** Render a single zodiac card */
  function renderZodiacCard(sign, curLang, isActive) {
    return '<div class="zodiac-card' + (isActive ? ' active' : '') + '" onclick="selectZodiacSign(\'' + sign.id + '\')" id="zcard-' + sign.id + '">' +
      '<span class="zodiac-symbol">' + sign.symbol + '</span>' +
      '<span class="zodiac-name">' + (sign.name[curLang] || sign.name.en) + '</span>' +
      '<span class="zodiac-dates">' + zodiacDateRange(sign) + '</span>' +
    '</div>';
  }

  /** Select a zodiac sign (called from onclick) */
  window.selectZodiacSign = function (signId) {
    // Update active state
    document.querySelectorAll('.zodiac-card').forEach(function (c) { c.classList.remove('active'); });
    var card = document.getElementById('zcard-' + signId);
    if (card) card.classList.add('active');
    showZodiacReading(signId);
  };

  /** Show zodiac reading for a given sign */
  function showZodiacReading(signId) {
    var resultEl = document.getElementById('zodiac-result');
    if (!resultEl || !window.ZODIAC) return;
    var sign = window.ZODIAC.getSignById(signId);
    if (!sign) return;

    var curLang = lang();
    var reading = generateZodiacReading(sign, curLang);

    resultEl.style.display = 'block';
    resultEl.innerHTML = reading;
    resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /** Generate full zodiac horoscope reading */
  function generateZodiacReading(sign, curLang) {
    var signs = window.ZODIAC.getAllSigns();
    var signIndex = -1;
    for (var i = 0; i < signs.length; i++) {
      if (signs[i].id === sign.id) { signIndex = i; break; }
    }
    var rng = zodiacSeed(signIndex);

    // Star ratings (1-5)
    var loveStars = Math.floor(rng() * 5) + 1;
    var careerStars = Math.floor(rng() * 5) + 1;
    var healthStars = Math.floor(rng() * 5) + 1;
    var luckStars = Math.floor(rng() * 5) + 1;

    // Lucky numbers (3 numbers based on element + date)
    var luckyNums = [];
    for (var ln = 0; ln < 3; ln++) {
      luckyNums.push(Math.floor(rng() * 99) + 1);
    }

    // Lucky color by element
    var luckyColor = L('zodiac_color_' + sign.element);

    // Compatible signs today
    var compatSigns = [];
    var elemCompat = window.ZODIAC.getElementCompat ? null : null;
    for (var ci = 0; ci < signs.length; ci++) {
      if (signs[ci].id === sign.id) continue;
      var compat = window.ZODIAC.getElementCompat(sign.element, signs[ci].element);
      if (compat === 'great' || compat === 'good') {
        compatSigns.push(signs[ci]);
      }
    }
    // Pick top 3 based on rng
    var shuffled = compatSigns.slice();
    for (var si = shuffled.length - 1; si > 0; si--) {
      var sj = Math.floor(rng() * (si + 1));
      var tmp = shuffled[si]; shuffled[si] = shuffled[sj]; shuffled[sj] = tmp;
    }
    var topCompat = shuffled.slice(0, 3);

    // Overview energy level
    var energyPct = Math.floor(rng() * 40) + 60; // 60-100

    // Element-based content variation keys
    var elem = sign.element;
    var signName = sign.name[curLang] || sign.name.en;
    var loveMood = loveStars >= 3 ? '_good' : '_caution';
    var careerMood = careerStars >= 3 ? '_good' : '_caution';
    var healthMood = healthStars >= 3 ? '_good' : '_caution';

    // Today's date
    var d = new Date();
    var dateStr = d.getFullYear() + '.' + (d.getMonth() + 1) + '.' + d.getDate();

    // Affirmation uses element key

    var html = '';

    // Header
    html += '<div class="zodiac-result-header">' +
      '<span class="zr-symbol">' + sign.symbol + '</span>' +
      '<div class="zr-title">' + (sign.name[curLang] || sign.name.en) + ' ' + L('zodiac_horoscope') + '</div>' +
      '<div class="zr-date">' + dateStr + '</div>' +
    '</div>';

    // Star ratings section
    html += '<div class="zodiac-section">' +
      '<h3><span class="zs-icon">⭐</span>' + L('zodiac_rating_header') + '</h3>' +
      '<div class="zodiac-stars">' +
        '<div class="zodiac-star-item"><span class="zs-label">' + L('zodiac_rating_love') + '</span><span class="zs-stars">' + makeStars(loveStars) + '</span></div>' +
        '<div class="zodiac-star-item"><span class="zs-label">' + L('zodiac_rating_career') + '</span><span class="zs-stars">' + makeStars(careerStars) + '</span></div>' +
        '<div class="zodiac-star-item"><span class="zs-label">' + L('zodiac_rating_health') + '</span><span class="zs-stars">' + makeStars(healthStars) + '</span></div>' +
        '<div class="zodiac-star-item"><span class="zs-label">' + L('zodiac_rating_luck') + '</span><span class="zs-stars">' + makeStars(luckStars) + '</span></div>' +
      '</div>' +
    '</div>';

    // 1. Today's Overview
    html += '<div class="zodiac-section">' +
      '<h3><span class="zs-icon">🌅</span>' + L('zodiac_overview_header') + '</h3>' +
      '<p>' + L('zodiac_element_' + elem, { sign: signName }) + '</p>' +
      '<div class="zodiac-meter"><div class="zodiac-meter-fill" style="width:' + energyPct + '%"></div></div>' +
      '<p style="font-size:0.78rem;color:var(--text-dim);text-align:right">' + L('zodiac_energy_level') + ': ' + energyPct + '%</p>' +
    '</div>';

    // 2. Love & Relationships
    html += '<div class="zodiac-section">' +
      '<h3><span class="zs-icon">💕</span>' + L('zodiac_love_header') + '</h3>' +
      '<p>' + L('zodiac_love_' + elem + loveMood) + '</p>' +
    '</div>';

    // 3. Career & Finance
    html += '<div class="zodiac-section">' +
      '<h3><span class="zs-icon">💼</span>' + L('zodiac_career_header') + '</h3>' +
      '<p>' + L('zodiac_career_' + elem + careerMood) + '</p>' +
    '</div>';

    // 4. Health & Wellness
    html += '<div class="zodiac-section">' +
      '<h3><span class="zs-icon">🌿</span>' + L('zodiac_health_header') + '</h3>' +
      '<p>' + L('zodiac_health_' + elem + healthMood) + '</p>' +
    '</div>';

    // 5. Lucky Numbers & Colors
    html += '<div class="zodiac-section">' +
      '<h3><span class="zs-icon">🍀</span>' + L('zodiac_lucky_header') + '</h3>' +
      '<div class="zodiac-lucky-row">' +
        '<div class="zodiac-lucky-item"><span class="zl-label">' + L('zodiac_lucky_number') + '</span><span class="zl-value">' + luckyNums.join(', ') + '</span></div>' +
        '<div class="zodiac-lucky-item"><span class="zl-label">' + L('zodiac_lucky_color') + '</span><span class="zl-value">' + luckyColor + '</span></div>' +
      '</div>' +
    '</div>';

    // 6. Compatibility
    html += '<div class="zodiac-section">' +
      '<h3><span class="zs-icon">🤝</span>' + L('zodiac_compat_header') + '</h3>' +
      '<div class="zodiac-compat-list">';
    var compatNames = [];
    for (var ci2 = 0; ci2 < topCompat.length; ci2++) {
      var cName = topCompat[ci2].name[curLang] || topCompat[ci2].name.en;
      compatNames.push(cName);
      html += '<span class="zodiac-compat-badge">' + topCompat[ci2].symbol + ' ' + cName + '</span>';
    }
    html += '</div>' +
      '<p style="margin-top:0.5rem;font-size:0.9rem">' + L('zodiac_compat_same', { signs: compatNames.join(', ') }) + '</p>' +
    '</div>';

    // 7. Daily Affirmation
    html += '<div class="zodiac-affirmation">' +
      '✨ ' + L('zodiac_affirm_' + elem) + ' ✨' +
    '</div>';

    // 8. Sign description
    html += '<div class="zodiac-section">' +
      '<h3><span class="zs-icon">📖</span>' + L('zodiac_about_sign') + '</h3>' +
      '<p>' + (sign.desc[curLang] || sign.desc.en) + '</p>' +
    '</div>';

    // 9. MBTI 섹션 (별자리 페이지에서는 MBTI만 추가)
    html += buildMBTISectionHtml();

    return html;
  }

})();
