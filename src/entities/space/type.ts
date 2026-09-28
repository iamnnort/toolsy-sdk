import { Entity } from '../__entity/type';
import { Chat } from '../chat/type';
import { Project } from '../project/type';

export type Space = Entity & {
  link: string;
  publicLink: string;
  isMandatorySubscription: boolean;
  project: Project;
  chat: Chat;
};
