import { Subscription } from '@src/entities/subscription/type';
import { SearchDto, SearchField } from '@src/types/dto';

export type SubscriptionSearchDto = SearchDto<Subscription, 'status'> & {
  projectId?: SearchField<string>;
  productId?: SearchField<string>;
  visitId?: SearchField<string>;
  clientId?: SearchField<string>;
  clientTgId?: SearchField<string>;
};
