const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://hasura.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '/components/images/logo.svg',
    logoLink:
      'https://www.modulbaukasten.ch/module/210/1/de-DE?title=Public-Cloud-f%C3%BCr-Anwendungen-nutzen',
    title: 'M210 - Public Cloud für Anwendungen nutzen',
    githubUrl: 'https://github.com/faxg/ict-modulbaukasten-m210-azure',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/msdev_ch" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>`,
    links: [
      {
        text: 'Modul 210-1',
        link: 'https://www.modulbaukasten.ch/Module/210_1_Public%20Cloud%20f%C3%BCr%20Anwendungen%20nutzen.pdf',
      },
      {
        text: 'LBV',
        link: 'https://www.modulbaukasten.ch/module/210/1/de-DE?title=Public-Cloud-f%C3%BCr-Anwendungen-nutzen&lbv=0',
      },
    ],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      //   '/lbv', // add trailing slash if enabled above
    ],
    collapsedNav: [
      //   '/lbv', // add trailing slash if enabled above
    ],
    links: [
      { text: 'Microsoft Learn', link: 'https://learn.microsoft.com/de-de' },
      {
        text: 'Microsoft for Educators',
        link: 'https://learn.microsoft.com/de-de/training/educator-center/programs/msle/',
      },
      {
        text: 'Microsoft Student Hub',
        link: 'https://learn.microsoft.com/de-de/training/student-hub/',
      },
      {
        text: 'Microsoft Certifications',
        link: 'https://learn.microsoft.com/de-de/certifications/',
      },
      { text: 'GitHub Education', link: 'https://education.github.com/' },
      {
        text: 'Azure Pricing Calculator',
        link: 'https://azure.microsoft.com/de-de/pricing/calculator/',
      },
    ],
    frontLine: false,
    ignoreIndex: false,
    title: 'M210',
  },
  siteMetadata: {
    title:
      'ICT Berufsbildung Schweiz | Modulbaukasten | M210 - Public Cloud für Anwendungen nutzen | Azure',
    description: 'Content for learning course M210 (ICT Berufsbildung Schweiz)',
    ogImage: null,
    docsLocation: 'https://github.com/faxg/ict-modulbaukasten-m210-azure/tree/master/content',
    favicon: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'ICT Modulbaukasten M210',
      short_name: 'ICT_M210',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
