import { Entity } from '../__entity/type';
import { Currency } from '../currency/type';
import { Project } from '../project/type';

export type PromoCode = Entity & {
  code: string;
  access: PromoCodeAccesses;
  visibility: PromoCodeVisibilities;
  discountPercentage: number | null;
  discountAmount: number | null;
  usageLimit: number | null;
  recurringUsageLimit: number | null;
  perUserUsageLimit: number | null;
  expiresAt: string | null;
  priority: number;
  discountCurrency: Currency;
  project: Project;
};

export type PromoCodeMetrics = {
  paidInvoice: {
    count: number;
  };
  visitPromoCodeUsageCount: {
    sum: number;
  };
};

export enum PromoCodeAccesses {
  PRIVATE = 'private',
  PUBLIC = 'public',
  RESTRICTED = 'restricted',
}

export enum PromoCodeVisibilities {
  CUSTOMERS = 'customers',
  EVERYONE = 'everyone',
  LAPSED = 'lapsed',
  PROSPECTS = 'prospects',
  SUBSCRIBERS = 'subscribers',
  WINBACK = 'winback',
}
