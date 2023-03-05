import { notion } from '..';

export type GenericDbIdsConfig = Record<string, string>;

export type SelectPropertyConfig = {
  select: {
    expectedValuesConfig: Record<string, string>;
  };
};

export type PropertyConfig = {
  expectedName: string;
} & (SelectPropertyConfig | Record<string, never>);

export type AppPropertiesConfig<DbIdsConfig extends GenericDbIdsConfig> = {
  [K in keyof DbIdsConfig]: Record<string, PropertyConfig>;
};

export type PropertyParsedSchema = Record<
  string,
  notion.properties.values.SelectValue | notion.properties.values.StatusValue
>;

export type PropertySchemaConfig<
  T extends notion.PageProperty['type'] = notion.PageProperty['type']
> = {
  id: string;
  schema: PropertyParsedSchema | null;

  // Just for TS inference
  __type__: T;
};

export type PropertiesSchemaConfig<DbIdsConfig extends GenericDbIdsConfig> = {
  [K in keyof DbIdsConfig]: Record<string, PropertySchemaConfig>;
};

export type PropertiesSchemaToAppProperties<
  PSC extends PropertiesSchemaConfig<GenericDbIdsConfig>
> = {
  [K in keyof PSC]: {
    [KK in keyof PSC[K]]: PropertyConfig;
  };
};
