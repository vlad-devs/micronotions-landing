import { DocumentData } from 'firebase/firestore';
import { AppConfig } from '../types/firebase';

export const isAppConfig = (
  firebaseData: DocumentData
): firebaseData is AppConfig => {
  return (
    firebaseData &&
    'CLOUDFLARE_WORKERS_URL' in firebaseData &&
    'DEPLOYED_URL' in firebaseData &&
    'OAUTH_CLIENT_ID' in firebaseData
  );
};
