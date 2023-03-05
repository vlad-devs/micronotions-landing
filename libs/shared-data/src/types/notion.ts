/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BlockObjectResponse,
  DatabaseObjectResponse,
  PageObjectResponse,
  QueryDatabaseParameters,
  //   GetDatabaseResponse,
  //   UpdatePageParameters,
  //   UpdatePageResponse,
  //   CreatePageResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { types } from '..';

// export {
//   // Query fn (QueryDatabaseParameters) => result
//   QueryDatabaseParameters,
//   // Query fn (...params) => Promise<QueryDatabaseResponse>
//   QueryDatabaseResponse,
//   GetDatabaseResponse,
//   UpdatePageParameters,
// };

// export type SuccessfulCreatePageResponse = types.utils.PickSubset<
//   { properties: any },
//   CreatePageResponse
// >;

// export type SuccessfulUpdatePageResponse = types.utils.PickSubset<
//   { properties: any },
//   UpdatePageResponse
// >;

export enum NotionPalette {
  default = 'default',
  gray = 'gray',
  brown = 'brown',
  orange = 'orange',
  yellow = 'yellow',
  green = 'green',
  blue = 'blue',
  purple = 'purple',
  pink = 'pink',
  red = 'red',
}

export type DbQueryFilter = QueryDatabaseParameters['filter'];
// Utility to pick the { or: .. } object type from a union of types
type PickOrSubset<T> = types.utils.PickSubset<{ or: any }, T>;
type PickAndSubset<T> = types.utils.PickSubset<{ and: any }, T>;

export type CompoundOrType = PickOrSubset<DbQueryFilter>;
export type CompoundAndType = PickAndSubset<DbQueryFilter>;

// Isolating PropertyFilter type from Notion's types
// the form of property filters without any or(s) / and(s)
export type PropertyFilter = types.utils.ArrayParam<
  PickOrSubset<types.utils.ArrayParam<CompoundOrType['or']>>['or']
>;
// All possible property types for filters "rich_text" | "number" | ...
export type PropertyFilterType = PropertyFilter['type'];

type PickPropFilterSubset<Type> = types.utils.PickSubset<
  { type?: Type },
  PropertyFilter
>;
// The filter having { type: "rich_text" }
export type TextFilterType = PickPropFilterSubset<'rich_text'>;
// The filter having { type: "number" }
export type NumberFilterType = PickPropFilterSubset<'number'>;
export type DateFilterType = PickPropFilterSubset<'date'>;
export type TimestampCreatedTimeFilter = types.utils.PickSubset<
  { created_time: any },
  PropertyFilter
>;
export type TimestampLastEditedTimeFilter = types.utils.PickSubset<
  { last_edited_time: any },
  PropertyFilter
>;
export type TimestampFilterType =
  | TimestampCreatedTimeFilter
  | TimestampLastEditedTimeFilter;
export type RelationFilterType = PickPropFilterSubset<'relation'>;
export type CompoundFilterType = CompoundOrType | CompoundAndType;

export type DbQuerySorts = NonNullable<QueryDatabaseParameters['sorts']>;
export type DbQuerySort = DbQuerySorts[number];
export type DbSortDirection = DbQuerySort['direction'];

export type DbSchema = DatabaseObjectResponse['properties'];
export type PageProperty = PageObjectResponse['properties'][string];

export type BlockType = BlockObjectResponse['type'];
export type PropertyType = PageProperty['type'];

export namespace properties {
  export type Select = types.utils.PickSubset<{ select: any }, PageProperty>;
  export type Status = types.utils.PickSubset<{ status: any }, PageProperty>;
  export type NumberProperty = types.utils.PickSubset<
    { number: any },
    PageProperty
  >;
  export type RelationProperty = types.utils.PickSubset<
    { relation: any },
    PageProperty
  >;
  export type CreatedTimeProperty = types.utils.PickSubset<
    { created_time: any },
    PageProperty
  >;
  export type RichTextProperty = types.utils.PickSubset<
    { rich_text: any },
    PageProperty
  >;

  export namespace values {
    export type SelectValue = NonNullable<Select['select']>;
    export type StatusValue = NonNullable<Status['status']>;
    export type NumberValue = NonNullable<NumberProperty['number']>;
    export type RelationValue = NonNullable<RelationProperty['relation']>;
    export type CreateTimeValue = NonNullable<
      CreatedTimeProperty['created_time']
    >;
    export type RichTextValue = NonNullable<RichTextProperty['rich_text']>;
  }
}
