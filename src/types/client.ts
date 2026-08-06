import { Entity, Languages, Timezones } from './common';

export type Client = Entity & {
  status: ClientStatuses;
  email: string;
  tgId: string;
  tgUsername: string;
  tgFirstName: string;
  tgLastName: string;
  maxId: string;
  maxUsername: string;
  maxFirstName: string;
  maxLastName: string;
  language: Languages;
  timezone: Timezones;
};

export enum ClientStatuses {
  ACTIVE = 'active',
  BANNED = 'banned',
}
