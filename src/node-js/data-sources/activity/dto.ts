import { Activity } from '@src/entities/activity/type';
import { SearchDto, SearchField } from '@src/types/dto';

export type ActivitySearchDto = SearchDto<Activity, 'type'> & {
  projectId?: SearchField<string>;
  visitId?: SearchField<string>;
  clientId?: SearchField<string>;
  invoiceId?: SearchField<string>;
  paymentId?: SearchField<string>;
  refundId?: SearchField<string>;
  billingPlanId?: SearchField<string>;
};
