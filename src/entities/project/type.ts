import { Languages, Timezones } from '../../types/common';
import { Entity } from '../__entity/type';

export type Project = Entity & {
  status: ProjectStatuses;
  lifecycle: ProjectLifecycles;
  priority: number;
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

export type ProjectMetrics = {
  visit: {
    count: number;
  };
  recurringSubscription: {
    count: number;
  };
};

export enum ProjectStatuses {
  ACTIVE = 'active',
  BANNED = 'banned',
}

export enum ProjectLifecycles {
  ARCHIVED = 'archived',
  DISABLED = 'disabled',
  ENABLED = 'enabled',
}
