import { PaymentSystem, PaymentSystemProviders } from '@src/entities/payment-system/type';
import { CreateDto, SearchDto, SearchField, SyncDto, UpdateDto } from '@src/types/dto';

export type PaymentSystemSearchDto = SearchDto<PaymentSystem, 'provider' | 'taxation' | 'vat'> & {
  projectId?: SearchField<string>;
  subscriptionPlanId?: SearchField<string>;
};

export type PaymentSystemCreateDto = CreateDto<PaymentSystem, 'name', 'taxation' | 'vat'> & {
  projectId: string;
  allocatePaymentSystems?: boolean;
} & (
    | {
        provider: PaymentSystemProviders.SEMIAUTO_PAYMENTS;
        providerCreds?: never;
      }
    | {
        provider: Exclude<PaymentSystemProviders, PaymentSystemProviders.SEMIAUTO_PAYMENTS>;
        providerCreds: string[];
      }
  );

export type PaymentSystemUpdateDto = UpdateDto<PaymentSystem, 'name' | 'taxation' | 'vat'>;

export type PaymentSystemSyncDto = SyncDto;
