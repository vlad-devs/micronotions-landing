import { Periodicity } from '../types';
import { defaultMessages } from './defaultMessages';

export const localizePeriodicity = (periodicity: Periodicity) => {
  const { periodicity: periodicityMessages } = defaultMessages.habitTracker;
  return {
    [Periodicity.DAILY]: periodicityMessages.daily,
    [Periodicity.WEEKLY]: periodicityMessages.weekly,
    [Periodicity.MONTHLY]: periodicityMessages.monthly,
  }[periodicity];
};
