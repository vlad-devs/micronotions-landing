export const content = {
  emailCollectionId: 'micronotions-email-signup',
  widgetPresentationId: 'micronotions-widget-presentation',
  widgetsPresentation: {
    habitTracker: {
      isActive: true,
      label: 'Habit Tracker App',
      opensNotionPage:
        'https://vladdevs.notion.site/Habit-Tracker-240281e956674bf7928d860a9c0d1b25',
    },
    financialTracker: {
      isActive: false,
      label: 'Financial Tracker App',
      opensNotionPage: '',
    },
  },
  assets: {
    micronotionsLogo: '/assets/images/micronotions-logo.svg',
    logoAnimation: '/assets/animations/logoAnimation.riv',
    presentationVideoDesktop: '/assets/videos/habitTrackerDesktop.mp4',
    presentationVideoMobile: '/assets/videos/habitTrackerMobile.mp4',
    notionAvatar: '/assets/images/notion-avatar.svg',
  },

  footerLinks: [
    {
      title: 'Links',
      data: [
        // {
        //   type: 'next' as const,
        //   label: 'Contact',
        //   link: '/contact',
        // },
        {
          type: 'next' as const,
          label: 'Notice of Non-Affiliation',
          link: '/nonAffiliation',
        },
      ],
    },

    {
      data: [
        {
          type: 'icon' as const,
          iconSrc: '/assets/images/twitter-logo.svg',
          label: 'Follow me on Twitter',
          link: 'https://twitter.com/vladdevs',
        },
      ],
    },
  ],

  appConfig: {
    CLOUDFLARE_WORKERS_URL: 'https://api.micronotions.workers.dev/',
    OAUTH_CLIENT_ID: '',
    DEPLOYED_URL: '',
    appPropertiesConfig: {},
    dbIdsConfig: {},
    WIDGETS_CONFIG: {
      METRICS: {},
      CONSISTENCY: {},
    },
  },
};
