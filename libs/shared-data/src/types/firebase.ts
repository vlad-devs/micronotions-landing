import { FIRE_CONST } from '../constants';
import { appGeneric } from './apps';
import { OauthDocData } from './notion-client';

export type FireConst = typeof FIRE_CONST;
export type FireConstWidgetNames =
  FireConst['WIDGETS'][keyof FireConst['WIDGETS']];

export type WidgetConfig = {
  hasInitialSetup?: boolean;
};

export type AppConfig<
  DbIdsConfig extends appGeneric.GenericDbIdsConfig = appGeneric.GenericDbIdsConfig,
  AppPropertiesConfig extends appGeneric.AppPropertiesConfig<DbIdsConfig> = appGeneric.AppPropertiesConfig<DbIdsConfig>
> = {
  DEPLOYED_URL: string;
  CLOUDFLARE_WORKERS_URL: string;
  OAUTH_CLIENT_ID: string;
  // The initial names of the databases and properties in Notion
  // e.g. { habitConfigs: "Habits Config", dailyHabits: "Daily Habits" }
  dbIdsConfig: DbIdsConfig;
  // e.g. {
  //  habitConfigs: { status: { expectedName: "Status" }, ... }
  //  dailyHabits: { ... }
  // } etc
  appPropertiesConfig: AppPropertiesConfig;
  WIDGETS_CONFIG: {
    [K in FireConstWidgetNames]?: WidgetConfig;
  };
};

export type FirebaseOauthDocData<
  DbIdsConfig extends appGeneric.GenericDbIdsConfig = appGeneric.GenericDbIdsConfig,
  PropertiesSchemaConfig extends appGeneric.PropertiesSchemaConfig<DbIdsConfig> = appGeneric.PropertiesSchemaConfig<DbIdsConfig>
> = OauthDocData & {
  dbIdsConfig?: DbIdsConfig;
  propertiesSchemaConfig?: PropertiesSchemaConfig;
};
