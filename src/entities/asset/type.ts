import { BotProviders, MediaTypes } from '../../types/common';
import { Entity } from '../__entity/type';
import { Content } from '../content/type';

export type Asset = Entity & {
  type: MediaTypes;
  provider: BotProviders;
  priority: number;
  providerId: string;
  name: string;
  size: number | null;
  width: number | null;
  height: number | null;
  duration: number | null;
  mimeType: string;
  url: string;
  html: string;
  hasSpoiler: boolean;
  hasCaption: boolean;
  content: Content;
};
