import { UserDocData, OauthTokenResponse, UnknownObject } from '../types';

export const isNotionOauthResponse = (
  docData: UnknownObject
): docData is OauthTokenResponse =>
  docData && 'access_token' in docData && 'bot_id' in docData;

export const isNotionUserResponse = (
  docData: UnknownObject
): docData is UserDocData =>
  docData && 'owner' in docData && 'id' in (docData as UserDocData).owner.user;
