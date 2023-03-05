export enum LoadingNamespace {
  FIREBASE_SETUP = 'FIREBASE_SETUP',
  FIREBASE_FETCH = 'FIREBASE_FETCH',
  NOTION_OAUTH = 'NOTION_OAUTH',

  // While the InitialSetup is not in ENDED state
  INITIAL_SETUP_PROCESS = 'INITIAL_SETUP_PROCESS',
  // The WithDefined stuff (until the NotionClient is ready) and InitialSetup is rendered
  INITIAL_SETUP_LOADING_CLIENT = 'INITIAL_SETUP_LOADING_CLIENT',

  WIDGETS_SELECT_OPTIONS = 'WIDGETS_SELECT_OPTIONS',
  WIDGETS_CHART_DATA = 'WIDGETS_CHART_DATA',
}

// The initial setup phases are done, but we are fetching pieces of widget data
export const WIDGET_LOADING_NAMESPACES = [
  LoadingNamespace.WIDGETS_SELECT_OPTIONS,
  LoadingNamespace.WIDGETS_CHART_DATA,
];

export const IDENTIFYING_QS_PARAMS = {
  DUPLICATED_TEMPLATE_ID: 'dup_t',
  USER_ID: 'usr',
  EMBED_BLOCK_ID: 'emb',
};

// Relevant to Firebase paths, just don't find anything, otherwise,
// if the ids are undefined, the firebase utilities start throwing errors
export const DEFAULT_NOT_FOUND_ID = 'NOT_FOUND';

export const DEV_FIREBASE_IDS = {
  USER_ID: 'a64d0c69-45f6-40cf-94ac-2613a784e291',
  DUPLICATED_TEMPLATE_ID: '240281e956674bf7928d860a9c0d1b25',
};

const WIDGET_BOX = 'widget-box';
const HOVERABLE = 'hoverable-widget-box';
const TEXT = 'widget-box-text';
export const CSS_CLASSNAMES = {
  WIDGET: {
    BOX: {
      ALL: `${WIDGET_BOX} ${HOVERABLE} ${TEXT}`,
      HOVERABLE,
      TEXT,
      toString() {
        return WIDGET_BOX;
      },
    },
  },
};
