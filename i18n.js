// i18n
(function (root) {
  'use strict';

  const HBD_I18N = {
    en: 'Happy Birthday!',
    es: '¡Feliz Cumpleaños!',
    fr: 'Joyeux Anniversaire!',
    de: 'Alles Gute zum Geburtstag!',
    hi: 'जन्मदिन मुबारक हो!',
    ja: 'お誕生日おめでとう!',
  };

  function hbdTranslate(lang) {
    return HBD_I18N[lang] || HBD_I18N.en;
  }

  root.HBD_I18N = HBD_I18N;
  root.hbdTranslate = hbdTranslate;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { HBD_I18N, hbdTranslate };
  }
})(typeof window !== 'undefined' ? window : this);
