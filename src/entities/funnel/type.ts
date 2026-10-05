import { Entity } from '../__entity/type';
import { Content } from '../content/type';
import { Project } from '../project/type';

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
};

export enum FunnelLifecycles {
  ARCHIVED = 'archived',
  DISABLED = 'disabled',
  ENABLED = 'enabled',
}
