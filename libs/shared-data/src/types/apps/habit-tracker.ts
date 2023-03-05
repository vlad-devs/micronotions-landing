import { appGeneric } from '.';
import { notion } from '..';
import { AppConfig } from '../firebase';

export type DbIdsConfig = {
  habitConfigs: string;
  dailyHabits: string;
};

export type StatusSchema = {
  [K in
    | 'notStarted'
    | 'skipped'
    | 'failed'
    | 'achieved']: notion.properties.values.StatusValue;
};

export type PropertiesSchemaConfig = {
  habitConfigs: {
    habitTag: appGeneric.PropertySchemaConfig<'select'>;
    trackableMetric: appGeneric.PropertySchemaConfig<'rich_text'>;
    metricGoal: appGeneric.PropertySchemaConfig<'number'>;
  };

  dailyHabits: {
    status: appGeneric.PropertySchemaConfig & {
      schema: StatusSchema;
    };
    metric: appGeneric.PropertySchemaConfig<'number'>;
    date: appGeneric.PropertySchemaConfig<'created_time'>;
    habitConfig: appGeneric.PropertySchemaConfig<'relation'>;
  };
};

type AppPropertiesConfig = {
  habitConfigs: {
    metricGoal: appGeneric.PropertyConfig;
    habitTag: appGeneric.PropertyConfig;
    trackableMetric: appGeneric.PropertyConfig;
  };
  dailyHabits: {
    habitConfig: appGeneric.PropertyConfig;
    date: appGeneric.PropertyConfig;
    metric: appGeneric.PropertyConfig;
    status: appGeneric.PropertyConfig & {
      select: {
        expectedValuesConfig: {
          skipped: string;
          achieved: string;
          notStarted: string;
          failed: string;
        };
      };
    };
  };
};

export type FirebaseAppConfig = AppConfig<DbIdsConfig, AppPropertiesConfig>;
