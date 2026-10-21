import { Link } from '@src/entities/link/type';
import { CreateDto, SearchDto, SearchField, UpdateDto, UpdateField } from '@src/types/dto';

export type LinkSearchDto = SearchDto<Link, 'type' | 'name'> & {
  projectId?: SearchField<string>;
  productId?: SearchField<string>;
  subscriptionPlanId?: SearchField<string>;
  funnelId?: SearchField<string>;
  promoCodeId?: SearchField<string>;
};

export type LinkCreateDto = CreateDto<Link, 'type', 'name' | 'usageLimit' | 'expiresAt' | 'priority'> & {
  productId?: string | null;
  subscriptionPlanId?: string | null;
  funnelId?: string | null;
  promoCodeId?: string | null;
};

export type LinkUpdateDto = UpdateDto<
  Link,
  'name' | 'tgToken' | 'maxToken' | 'webToken' | 'usageLimit' | 'expiresAt' | 'priority'
> & {
  productId?: UpdateField<string>;
  subscriptionPlanId?: UpdateField<string>;
  funnelId?: UpdateField<string>;
  promoCodeId?: UpdateField<string>;
};
