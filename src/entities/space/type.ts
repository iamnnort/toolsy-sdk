import { Entity } from '../__entity/type';
import { Chat } from '../chat/type';
import { Project } from '../project/type';

export type Space = Entity & {
  lifecycle: SpaceLifecycles;
  priority: number;
  url: string;
  joinUrl: string;
  isFollowRequired: boolean;
  project: Project;
  chat: Chat;
};

export enum SpaceLifecycles {
  ARCHIVED = 'archived',
  DISABLED = 'disabled',
  ENABLED = 'enabled',
}
