import { Entity } from '../__entity/type';
import { ContentButton } from '../content-button/type';
import { Tag } from '../tag/type';

export type ContentButtonTag = Entity & {
  contentButton: ContentButton;
  tag: Tag;
};
