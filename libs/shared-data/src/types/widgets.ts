/* eslint-disable @typescript-eslint/no-namespace */
import { notion } from '.';

export type SelectOption = {
  value: string;
  label: string;
  color: notion.NotionPalette;
};

export enum Periodicity {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
}

export enum WeekStartDay {
  SUNDAY = 0,
  MONDAY = 1,
}

export type DefinedRange = {
  from: Date;
  to: Date;
};

export type IsoWeek = {
  startDate: Date;
  endDate: Date;
  weekNumber: number;
};

export type WidgetConfig = {
  disabledChangeRange?: boolean;
  disabledRangeText?: boolean;
  publicNotionPageComponentVariant?: JSX.Element;

  components?: {
    widgetTitleWrapper?: (
      widgetTitle: React.ReactNode,
      isLoading: boolean
    ) => React.ReactNode;
    widgetMainWrapper?: (widgetMain: React.ReactNode) => React.ReactNode;
    widgetFooterWrapper?: (widgetFooter: React.ReactNode) => React.ReactNode;
  };
};

export namespace barChart {
  export type Series<T> = {
    data: number[];
    categories: T[];
    formatter: (value: T) => string;
  };
}
