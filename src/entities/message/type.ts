import { Languages, Timezones } from '../../types/common';
import { Entity } from '../__entity/type';

export type Message = Entity & {
  language: Languages;
  timezone: Timezones;
};
