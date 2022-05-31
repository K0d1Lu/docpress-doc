const path = require('path');

const { getGuideSidebar } = require(path.join(__dirname, 'utils.js')); // eslint-disable-line

module.exports = {
  locales: {
    '/': {
      title: 'Docpress',
      description: 'Outil configurable permettant de récupérer du contenu externe via des sources multiples et de les packager dans une application Vuepress',
    },
    '/docpress/en/': {
      lang: 'en-EN',
      title: 'Docpress',
      description: 'Configuration tooling to fetch external content from multiple sources and build it together in a vuepress application.',
    },
  },

  themeConfig: {
    locales: {
      '/': {
        selectLanguageName: 'Français',
        selectLanguageText: 'Langues',
        navbar: [
          { text: 'Guides', link: '/docpress/fr/guides/' },
        ],
        sidebar: {
          '/docpress/fr/guides/': getGuideSidebar('fr', 'Basics', 'Advanced'),
        },
        lastUpdated: 'Dernière mise à jour',
      },
      '/docpress/en/': {
        navbar: [
          { text: 'Guides', link: '/docpress/en/guides/' },
        ],
        /**
         * 
         */
        sidebar: {
          '/docpress/en/guides/': getGuideSidebar('en', 'Basics', 'Advanced'),
        },
        lastUpdated: 'Last Updated',
      },
    },
  },
};
