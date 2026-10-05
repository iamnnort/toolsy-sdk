import { BotProviders } from '../../types/common';
import { Entity } from '../__entity/type';
import { Project } from '../project/type';

export type Chat = Entity & {
  type: ChatTypes;
  provider: BotProviders;
  providerId: string;
  providerName: string;
  providerSubscriberCount: number;
  project: Project;
};

export enum ChatTypes {
  CHANNEL = 'channel',
  GROUP = 'group',
}
