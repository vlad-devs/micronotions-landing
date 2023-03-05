import { routes } from './routes';
import { types } from '..';
import { notion } from '../types';
import { cloudflare } from './cloudflare-workers';

type AppConfig = types.firebase.AppConfig;

/******************************************************************************
 * const NETLIFY_PROXY_URL = `${DEPLOYED_URL}.netlify/functions/proxyApiCall`;
 *****************************************************************************/

const getRedirectUri = (appConfig: AppConfig) =>
  `${
    process.env['NODE_ENV'] === 'development'
      ? 'https://micronotions.v1.local/'
      : appConfig.DEPLOYED_URL
  }${routes.NOTION_OAUTH}/${routes.NOTION_AUTH_CB}`;

const getAuthUrl = (appConfig: AppConfig) =>
  `https://api.notion.com/v1/oauth/authorize?client_id=${
    appConfig.OAUTH_CLIENT_ID
  }&response_type=code&owner=user&redirect_uri=${encodeURIComponent(
    getRedirectUri(appConfig)
  )}`;

const getCloudflareProxyEndpoint = (appConfig: AppConfig) =>
  `${appConfig.CLOUDFLARE_WORKERS_URL}${cloudflare.ENDPOINTS.PROXY}`;

export const notionClient = {
  getAuthUrl,
  getRedirectUri,
  getCloudflareProxyEndpoint,
  // OAUTH_TOKEN_URL: 'https://api.notion.com/v1/oauth/token'
};

export const notionPalette = Object.values(types.notion.NotionPalette);

export const notionPublicSite = 'notion.site';

export const getNotionIconUrl = (
  iconName: string,
  color: notion.NotionPalette,
  themeSetting: 'light' | 'dark'
) =>
  `https://www.notion.so/icons/${iconName}_${color}.svg?mode=${themeSetting}`;
