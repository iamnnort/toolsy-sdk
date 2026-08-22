import { EntityDto } from '../type';

export type DateOptions = EntityDto & {
  isInfinite?: boolean | null;
  infiniteLabel?: string;
};
