export const cloudflare = {
  NOTION_TOKEN_PROXIED_URL_KEY: 'NOTION_TOKEN_URL',
  NOTION_SECRET_APP_HEADER: 'x-notion-secret',
  NOTION_CLIENT_ID_HEADER: 'x-notion-clientid',
  NOTION_TOKEN_URL: 'https://api.notion.com/v1/oauth/token',
  NOTION_SECRETS_KEYS: {
    HABIT_TRACKER: 'HABIT_TRACKER',
  },

  ENDPOINTS: {
    PROXY: 'proxy',
    SEND_EMAIL: 'sendEmail',
  },
};

export type SendMailPayload = {
  fromEmail: string;
  fromName: string;
  to: string;
  templateId: string;
  subject: string;
};
