import {
  addDays,
  addMonths,
  addWeeks,
  differenceInDays,
  differenceInWeeks,
  eachMonthOfInterval,
  eachWeekOfInterval,
  endOfISOWeek,
  endOfMonth,
  endOfWeek,
  format,
  getISOWeek,
  isSameDay,
  isWithinInterval,
  startOfISOWeek,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import { DateRange } from 'react-day-picker';
import { constants } from '../';
import { DefinedRange, IsoWeek } from '../types';

export const getRangeArray = (
  startDate: Date,
  endDate: Date,
  { includeLeftEnd = true, includeRightEnd = false } = {}
) => {
  [startDate, endDate] =
    startDate <= endDate ? [startDate, endDate] : [endDate, startDate];
  const daysDiff = differenceInDays(endDate, startDate);
  const diffLength =
    daysDiff + (includeLeftEnd ? 0 : -1) + (includeRightEnd ? 1 : 0);

  return Array.from({ length: diffLength }).map((_, diff) =>
    addDays(startDate, diff + (includeLeftEnd ? 0 : 1))
  );
};

export const getWeekRange = (
  dateRange: DefinedRange,
  weekStartDay: number = constants.WEEK_START_DAY
) => {
  const { from, to } = dateRange;

  return eachWeekOfInterval(
    { start: from, end: to },
    {
      weekStartsOn: weekStartDay as 0 | 1,
    }
  );
};

export const getMonthRange = (dateRange: DefinedRange) => {
  const { from, to } = dateRange;

  return eachMonthOfInterval({ start: from, end: to });
};

export const getCurrentWeekRange = () => {
  const today = new Date();
  return getRangeArray(startOfISOWeek(today), endOfISOWeek(today), {
    includeLeftEnd: true,
    includeRightEnd: true,
  });
};

export const formatDateRange = (range: DateRange) => {
  const from = range.from ? format(range.from, 'PPP') : '';
  const to = range.to ? format(range.to, 'PPP') : '';

  if (from && to) {
    return `${from} → ${to}`;
  }

  const definedDate = [from, to].find(Boolean);

  if (definedDate) {
    return definedDate;
  }

  return '';
};

export const getDayWeekRange = (day: Date) => ({
  from: startOfISOWeek(day),
  to: endOfISOWeek(day),
});

export const getLast12MonthsRange = () => {
  const endOfMonthDay = endOfMonth(new Date());

  return {
    from: addMonths(endOfMonthDay, -12),
    to: endOfMonthDay,
  };
};

export const extendDayRangeToWeekRange = (range: DefinedRange) => ({
  from: startOfISOWeek(range.from),
  to: endOfISOWeek(range.to),
});

export const getPaddingDaysToWeekRange = (range: DefinedRange) => {
  const weekRange = extendDayRangeToWeekRange(range);

  return getRangeArray(weekRange.from, range.from, {
    includeLeftEnd: true,
    includeRightEnd: false,
  }).concat(
    getRangeArray(range.to, weekRange.to, {
      includeLeftEnd: false,
      includeRightEnd: true,
    })
  );
};

export const rangeLengthInDays = (range: DefinedRange) =>
  Math.abs(differenceInDays(range.to, range.from)) + 1;

export const rangeLengthInWeeks = (range: DefinedRange) =>
  Math.abs(differenceInWeeks(range.to, range.from)) + 1;

export const monthDateToSixIsoWeekNumbers = (monthDate: Date): IsoWeek[] => {
  const monthStartDate = startOfMonth(monthDate);
  const isoWeekStartDate = startOfISOWeek(monthStartDate);

  return Array.from({ length: 6 }).map((_, idx) => {
    const nextISOWeekStartDate = addWeeks(isoWeekStartDate, idx);

    return {
      startDate: nextISOWeekStartDate,
      endDate: endOfISOWeek(nextISOWeekStartDate),
      weekNumber: getISOWeek(nextISOWeekStartDate),
    };
  });
};

export const isDefinedRange = (
  range: DateRange | undefined
): range is DefinedRange => !!range && !!range.to && !!range.from;

export const areSameDay = (dateLeft: Date | string, dateRight: Date | string) =>
  isSameDay(new Date(dateLeft), new Date(dateRight));

export const isWithinWeekRange = (
  date: Date | string,
  weekStart: Date,
  weekStartDay: number = constants.WEEK_START_DAY
) => {
  return isWithinInterval(new Date(date), {
    start: startOfWeek(weekStart, {
      weekStartsOn: weekStartDay as 0 | 1,
    }),
    end: endOfWeek(weekStart, {
      weekStartsOn: weekStartDay as 0 | 1,
    }),
  });
};

export const isWithinMonthRange = (date: Date | string, monthStart: Date) => {
  return isWithinInterval(new Date(date), {
    start: startOfMonth(monthStart),
    end: endOfMonth(monthStart),
  });
};
