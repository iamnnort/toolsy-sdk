import { Languages, Timezones } from '../../types/common';
import { Entity } from '../__entity/type';

export type Visit = Entity & {
  language: Languages;
  timezone: Timezones;
  status: VisitStatuses;
  email: string | null;
};

export enum VisitStatuses {
  ACTIVE = 'active',
  BANNED = 'banned',
}
