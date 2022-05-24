module.exports = {
  locales: {
    '/': {
      title: 'Docpress',
      description: 'Guides, steps-by-steps, releases notes and much more...',
    },
    '/docgen/docs/fr/': {
      lang: 'fr-FR',
      title: 'Docpress',
      description: 'Guides, pas à pas, releases notes et plus encore...',
    },
  },

  themeConfig: {
    locales: {
      '/': {
        navbar: [
          { text: 'Guide', link: '/docgen/docs/en/guides/' },
        ],
        lastUpdated: 'Last Updated',
      },
      '/docgen/docs/fr/': {
        selectLanguageName: 'Français',
        selectLanguageText: 'Langues',
        navbar: [
          { text: 'Guide', link: '/docgen/docs/fr/guides/' },
        ],
        lastUpdated: 'Dernière mise à jour',
      },
    },
  },
};
