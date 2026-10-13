import { BotProviders, Languages, Timezones } from '../../types/common';
import { Entity } from '../__entity/type';
import { Project } from '../project/type';
import { Client } from '../client/type';
import { MarketingProgram } from '../marketing-program/type';

export type Visit = Entity & {
  language: Languages;
  timezone: Timezones;
  provider: BotProviders;
  status: VisitStatuses;
  joinStatus: VisitJoinStatuses;
  email: string | null;
  project: Project;
  client: Client;
  marketingProgram: MarketingProgram;
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
