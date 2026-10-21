import { Entity } from '../__entity/type';
import { Content } from '../content/type';
import { Project } from '../project/type';
import { Folder } from '../folder/type';

export type Funnel = Entity & {
  name: string;
  lifecycle: FunnelLifecycles;
  isDefault: boolean;
  isRestartable: boolean;
  hasContentProtection: boolean;
  priority: number;
  content: Content;
  project: Project;
  triggerFunnel: Funnel;
  folder: Folder | null;
};

export type FunnelMetrics = {
  visit: {
    count: number;
  };
};

export enum FunnelLifecycles {
  ARCHIVED = 'archived',
  DISABLED = 'disabled',
  ENABLED = 'enabled',
}
