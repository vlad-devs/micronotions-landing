import { getISOWeeksInYear } from 'date-fns';
import { Periodicity, WeekStartDay } from '../types';

export const PERIODICITIES = [
  Periodicity.DAILY,
  Periodicity.WEEKLY,
  Periodicity.MONTHLY,
];

// Consistency widget individual rectangle size
export const CONSISTENCY_WIDGET = {
  PERIODICTY_TO_PANEL_SIZE: {
    [Periodicity.DAILY]: 40,
    [Periodicity.WEEKLY]: 25,
    [Periodicity.MONTHLY]: 20,
  },
  MAX_WEEKS: Math.floor(366 / 7),
  BINS: 4,
  NEUTRAL_COLOR: '#eee',
};

export const WEEK_START_DAY = WeekStartDay.MONDAY;

export const RANGE_LENGTHS = {
  [Periodicity.DAILY]: {
    max: 7,
  },
  [Periodicity.WEEKLY]: {
    min: 7,
    max: () => (getISOWeeksInYear(new Date()) - 1) * 7,
  },
  [Periodicity.MONTHLY]: {},
};
