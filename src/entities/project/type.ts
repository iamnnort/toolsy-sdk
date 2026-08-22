import { Languages, Timezones } from '../../types/common';
import { Entity } from '../__entity/type';

export type Project = Entity & {
  status: ProjectStatuses;
  name: string;
  botTgId: string | null;
  botTgUsername: string | null;
  botTgName: string | null;
  botMaxId: string | null;
  botMaxUsername: string | null;
  botMaxName: string | null;
  language: Languages;
  timezone: Timezones;
};

export enum ProjectStatuses {
  ACTIVE = 'active',
  BANNED = 'banned',
}
