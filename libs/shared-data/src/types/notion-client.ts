import { PersonUserObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export type ProxyApiCallBody = {
  proxiedUrl: string;
  proxiedMethod: string;
  proxiedHeaders: HeadersInit;
};

export type OauthDocData = {
  access_token: string;
  token_type: 'bearer';
  bot_id: string;
  workspace_name?: string;
  workspace_icon?: string;
  workspace_id: string;
  duplicated_template_id?: string;
};

export type UserDocData = {
  owner: {
    type: 'user';
    user: PersonUserObjectResponse;
  };
};

export type OauthTokenResponse = OauthDocData & UserDocData;
