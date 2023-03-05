export const KEYS = {
  EMAIL_SUBSCRIPTION: 'EMAIL_SUBSCRIPTION',
  DUPLICATED_PAGE: 'DUPLICATED_PAGE',
  CHILDREN_BLOCK: 'CHILDREN_BLOCK',
  MUTATIONS: {
    // Do not want to trigger a refetch
    EMBED_BLOCK_UPDATE: 'EMBED_BLOCK_UPDATE',
  },
};

export const APP_KEYS = {
  HT: {
    DAILY_HABITS: (
      datePropId: string,
      relationPropId: string,
      selectedPageIdOption: string,
      from: string,
      to: string
    ) =>
      [
        datePropId,
        relationPropId,
        selectedPageIdOption,
        from,
        to,
        'HT_DAILY_HABITS',
      ] as const,
    HABITS_CONFIGS: 'HT_HABITS_CONFIGS',
  },
};
