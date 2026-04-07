/**
 * 별도 HTML 페이지(guide, about, faq 등)용 다국어 처리
 * URL ?lang=xx 또는 localStorage에서 언어 감지
 */
(function() {
  'use strict';

  var TEXTS = {
    back_home: {
      ko: '← 홈으로 돌아가기', en: '← Back to Home', ja: '← ホームに戻る',
      es: '← Volver al inicio', pt: '← Voltar ao início', fr: '← Retour à l\'accueil', de: '← Zurück zur Startseite'
    },
    cta_tarot: {
      ko: '지금 무료로 타로 점사 보러 가기 →', en: 'Try Free Tarot Reading Now →', ja: '今すぐ無料タロット占いへ →',
      es: 'Prueba la lectura de tarot gratis →', pt: 'Experimente a leitura de tarô grátis →', fr: 'Essayez la lecture de tarot gratuite →', de: 'Jetzt kostenloses Tarot-Reading ausprobieren →'
    },
    cta_mbti: {
      ko: '나의 MBTI 맞춤 타로 보러 가기 →', en: 'Get My MBTI Tarot Reading →', ja: '私のMBTIタロットを見る →',
      es: 'Ver mi tarot MBTI →', pt: 'Ver meu tarô MBTI →', fr: 'Voir mon tarot MBTI →', de: 'Mein MBTI-Tarot sehen →'
    },
    cta_fortune: {
      ko: '지금 무료로 운세 보러 가기 →', en: 'Get Your Free Fortune Now →', ja: '今すぐ無料占いへ →',
      es: 'Consulta tu horóscopo gratis →', pt: 'Consulte seu horóscopo grátis →', fr: 'Consultez votre horoscope gratuit →', de: 'Jetzt kostenloses Horoskop abrufen →'
    },
    kw_label: {
      ko: '키워드:', en: 'Keywords:', ja: 'キーワード:',
      es: 'Palabras clave:', pt: 'Palavras-chave:', fr: 'Mots-clés:', de: 'Schlüsselwörter:'
    },
    dir_upright: {
      ko: '↑ 정방향', en: '↑ Upright', ja: '↑ 正位置',
      es: '↑ Derecho', pt: '↑ Normal', fr: '↑ Droit', de: '↑ Aufrecht'
    },
    dir_reversed: {
      ko: '↻ 역방향', en: '↻ Reversed', ja: '↻ 逆位置',
      es: '↻ Invertida', pt: '↻ Invertida', fr: '↻ Inversé', de: '↻ Umgekehrt'
    }
  };

  function getLang() {
    var params = new URLSearchParams(window.location.search);
    var lang = params.get('lang');
    if (!lang) {
      try { lang = localStorage.getItem('mystical_lang'); } catch(e) {}
    }
    return ['ko','en','ja','es','pt','fr','de'].indexOf(lang) >= 0 ? lang : 'ko';
  }

  var currentLang = getLang();

  // 페이지 html lang 속성 업데이트
  document.documentElement.lang = currentLang === 'ko' ? 'ko' : currentLang === 'ja' ? 'ja' : currentLang === 'es' ? 'es' : currentLang === 'pt' ? 'pt' : currentLang === 'fr' ? 'fr' : currentLang === 'de' ? 'de' : 'en';

  window.STATIC_I18N = {
    lang: currentLang,
    t: function(key) {
      var entry = TEXTS[key];
      if (!entry) return key;
      return entry[currentLang] || entry.en || key;
    }
  };

  // data-si18n 속성으로 번역
  document.addEventListener('DOMContentLoaded', function() {
    var els = document.querySelectorAll('[data-si18n]');
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute('data-si18n');
      var val = window.STATIC_I18N.t(key);
      if (val !== key) els[i].textContent = val;
    }

    // 홈 링크에 lang 파라미터 추가
    var links = document.querySelectorAll('a[href="/"], a[href="./"]');
    for (var j = 0; j < links.length; j++) {
      if (currentLang !== 'ko') {
        links[j].href = '/?lang=' + currentLang;
      }
    }
  });
})();
