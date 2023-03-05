export const FIRE_CONST = {
  CONFIG: {
    apiKey: 'AIzaSyAMm8A_vg8TaQ_bc39XDLVvX0IDwibQ15o',
    authDomain: 'micronotions.firebaseapp.com',
    projectId: 'micronotions',
    storageBucket: 'micronotions.appspot.com',
    messagingSenderId: '384964043124',
    appId: '1:384964043124:web:7dcecfcbcc9a0053108c21',
    measurementId: 'G-HHGHDJR693',
  },
  COLLECTIONS: {
    NOTION: 'notion',
    DUPLICATED_TEMPLATES: 'duplicatedTemplates',
    CONFIG: 'config',
    EMAIL_SUBSCRIPTION: 'emailSubscription',
  },
  DOCUMENTS: {
    HABIT_TRACKER: 'HABIT_TRACKER',
  },
  WIDGETS: {
    CONSISTENCY: 'CONSISTENCY',
    METRICS: 'METRICS',
    HEADER: 'HEADER',
  },
} as const;
