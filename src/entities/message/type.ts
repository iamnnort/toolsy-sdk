import { Languages, Timezones } from '../../types/common';
import { Entity } from '../__entity/type';
import { Content } from '../content/type';
import { Visit } from '../visit/type';

export type Message = Entity & {
  language: Languages;
  timezone: Timezones;
  content: Content;
  visit: Visit;
};
