import { BotProviders, Languages, Timezones } from '../../types/common';
import { Entity } from '../__entity/type';

export type Visit = Entity & {
  language: Languages;
  timezone: Timezones;
  provider: BotProviders;
  status: VisitStatuses;
  joinStatus: VisitJoinStatuses;
  email: string | null;
};

export enum VisitStatuses {
  ACTIVE = 'active',
  BANNED = 'banned',
}

export enum VisitJoinStatuses {
  PENDING = 'pending',
  JOINED = 'joined',
  LEFT = 'left',
  KICKED = 'kicked',
}
