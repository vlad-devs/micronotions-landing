import { format, parse } from 'date-fns';
import { NotionPalette } from '../types/notion';

export const mockHabitsOptions = [
  { value: 'meditate', label: 'meditate', color: NotionPalette.blue },
  { value: 'workout', label: 'workout', color: NotionPalette.green },
  { value: 'reading', label: 'reading', color: NotionPalette.purple },
];

export const mockHabitsConsistencyOptions = [
  { value: 'meditate', label: 'meditate', color: NotionPalette.orange },
];

const dailyCategories = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(
  (day) => parse(day, 'EEE', new Date())
);
const dailyFormatter = (date: Date) => format(date, 'EEE');

export const mockHabitsMetricData = {
  workout: {
    seriesData: {
      data: [50, 20, 30, 40, 120, 20, 43],

      categories: dailyCategories,
      formatter: dailyFormatter,
    },
    tooltipValueLabel: 'Minutes Spent in the Gym',
    noDataLabel: "You haven't logged any workouts yet",
  },
  meditate: {
    seriesData: {
      data: [30, 25, 90, 80, 23, 14, 98],
      categories: dailyCategories,
      formatter: dailyFormatter,
    },
    tooltipValueLabel: 'Minutes of Mindfulness',
    noDataLabel: "You haven't logged any meditation sessions yet",
  },
  reading: {
    seriesData: {
      data: [10, 12, 30, 20, 100, 14, 98],
      categories: dailyCategories,
      formatter: dailyFormatter,
    },
    tooltipValueLabel: 'Pages Read',
    noDataLabel: "You haven't logged any reading sessions yet",
  },
};

export const mockHabitsConsistencyData = {
  values: {
    '2023-02-17': 1,
    '2023-02-13': 1,
    '2023-02-12': 1,
    '2023-02-10': 1,
    '2023-02-08': 1,
    '2023-02-06': 1,
    '2023-02-05': 1,
    '2023-02-03': 2,
    '2023-02-01': 1,
    '2023-01-25': 2,
    '2023-01-22': 1,
    '2023-01-20': 1,
    '2023-01-18': 1,
    '2023-01-16': 1,
    '2023-01-11': 1,
    '2023-01-08': 3,
    '2022-12-06': 1,
    '2022-12-05': 1,
    '2022-12-03': 1,
    '2022-12-01': 2,
    '2022-12-25': 2,
    '2022-12-22': 1,
    '2022-12-20': 1,
    '2022-12-18': 1,
    '2022-12-16': 1,
    '2022-12-11': 1,
    '2022-12-08': 3,
    '2022-11-05': 1,
    '2022-11-03': 1,
    '2022-11-01': 2,
    '2022-11-25': 2,
    '2022-11-22': 1,
    '2022-11-20': 1,
    '2022-11-18': 1,
    '2022-11-16': 1,
    '2022-11-15': 1,
    '2022-11-14': 1,
    '2022-11-13': 5,
    '2022-11-11': 1,
    '2022-11-08': 3,
    '2022-10-05': 1,
    '2022-10-03': 1,
    '2022-10-01': 2,
    '2022-10-25': 2,
    '2022-10-22': 1,
    '2022-10-20': 1,
    '2022-10-18': 1,
    '2022-10-16': 1,
    '2022-10-15': 1,
    '2022-10-14': 1,
    '2022-10-13': 5,
    '2022-10-10': 1,
    '2022-10-08': 3,
    '2022-09-05': 1,
    '2022-09-03': 1,
    '2022-09-01': 2,
    '2022-09-25': 2,
    '2022-09-22': 1,
    '2022-09-20': 1,
    '2022-09-18': 1,
    '2022-09-16': 1,
    '2022-09-15': 1,
    '2022-09-14': 1,
    '2022-09-13': 5,
    '2022-09-09': 1,
    '2022-09-08': 3,
    '2022-08-25': 2,
    '2022-08-22': 1,
    '2022-08-20': 1,
    '2022-08-18': 1,
    '2022-08-16': 1,
    '2022-08-15': 1,
    '2022-08-14': 1,
    '2022-08-13': 5,
    '2022-08-09': 1,
    '2022-08-08': 3,
  },
  bins: [
    {
      lowerBound: 0,
      upperBound: 1,
      count: 0,
      color: '#eee',
    },
    {
      lowerBound: 1,
      upperBound: 1.6666666666666665,
      count: 15,
      color: 'rgb(84.706% 46.275% 12.549%)',
    },
    {
      lowerBound: 1.6666666666666665,
      upperBound: 2.333333333333333,
      count: 0,
      color: 'rgb(49.597% 24.606% 0%)',
    },
    {
      lowerBound: 2.333333333333333,
      upperBound: 3,
      count: 1,
      color: 'rgb(24.946% 0% 0%)',
    },
  ],
  hidden: false,
  until: '2023-02-25',
  config: {
    maxWeeks: 52,
  },
  panelSize: 18,
  columns: 22,
};
