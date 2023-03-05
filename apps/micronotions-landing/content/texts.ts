const firstTextAnimationSequence = 'bringing your everyday apps';
export const texts = {
  sections: {
    hero: {
      description:
        ' Supercharging your Notion pages beyond just simple templates',
      textPrefix: 'Micronotions is',
      textSuffix: 'in Notion',
      firstTextAnimationSequence,
      typeAnimationSequences: [
        firstTextAnimationSequence,
        2500,
        'enriching your templates',
        3000,
      ],
    },
    widgetsShowcase: {
      title: 'Beyond generic Notion utilities and widgets',
      description:
        'Functional widgets that come pre-integrated with your dbs. No more time wasted finding the right widgets for your workspace and setting them up',
    },

    faq: {
      title: 'Frequently Asked Questions',
      questions: [
        {
          label: 'micronotions-general',
          question: 'What is Micronotions all about?',
          answer:
            "If you're like me, you always find yourself trying to hack some app-like functionalities on top of Notion's blocks and databases to obtain that perfect overview or handling of your data. Micronotions is a collection of Notion templates that have custom application widgets built-in, each template trying to bring an experience as close as possible to a standalone app.",
        },
      ],
    },

    footer: {
      copyright: '© 2023',
    },
  },
  ctas: {
    getStarted: 'Try it out',
    comingSoon: 'Coming Soon',
    signUp: 'Sign up for early access',
  },
  nonAffiliation:
    'We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with Notion or any of its subsidiaries or its affiliates. The official Notion website can be found at https://www.notion.so/. The name Notion as well as related names, marks, emblems and images are registered trademarks of their respective owners.',
  logo: {
    alt: 'Micronotions Logo',
    title: 'Micronotions',
  },
};
