import { Languages, Timezones } from '../../types/common';
import { Entity } from '../__entity/type';

export type Client = Entity & {
  status: ClientStatuses;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  tgId: string | null;
  tgUsername: string | null;
  tgFirstName: string | null;
  tgLastName: string | null;
  maxId: string | null;
  maxUsername: string | null;
  maxFirstName: string | null;
  maxLastName: string | null;
  language: Languages;
  timezone: Timezones;
};

export enum ClientStatuses {
  ACTIVE = 'active',
  BANNED = 'banned',
}

export type ClientGetNameOptions = {
  link?: boolean;
};
