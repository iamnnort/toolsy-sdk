import { Entity } from '../__entity/type';
import { Project } from '../project/type';

export type Funnel = Entity & {
  name: string;
  lifecycle: FunnelLifecycles;
  isDefault: boolean;
  isRestartable: boolean;
  isProtectedContent: boolean;
  project: Project;
};

export enum FunnelLifecycles {
  ARCHIVED = 'archived',
  DISABLED = 'disabled',
  ENABLED = 'enabled',
}
