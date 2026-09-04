import { ToolsyClientConfig } from './types';
import {
  BillingPlanDataSource,
  ClientDataSource,
  ContentDataSource,
  CurrencyDataSource,
  DonateDataSource,
  InvoiceDataSource,
  MarketingProgramDataSource,
  MessageDataSource,
  PaymentDataSource,
  PaymentSystemDataSource,
  ProductDataSource,
  ProjectDataSource,
  PromoCodeDataSource,
  RefundDataSource,
  SessionDataSource,
  SubscriptionDataSource,
  SubscriptionPlanDataSource,
  VisitDataSource,
} from './data-sources';

export class ToolsyClient {
  billingPlan: BillingPlanDataSource;

  client: ClientDataSource;

  content: ContentDataSource;

  currency: CurrencyDataSource;

  donate: DonateDataSource;

  invoice: InvoiceDataSource;

  marketingProgram: MarketingProgramDataSource;

  message: MessageDataSource;

  payment: PaymentDataSource;

  paymentSystem: PaymentSystemDataSource;

  product: ProductDataSource;

  project: ProjectDataSource;

  promoCode: PromoCodeDataSource;

  refund: RefundDataSource;

  session: SessionDataSource;

  subscription: SubscriptionDataSource;

  subscriptionPlan: SubscriptionPlanDataSource;

  visit: VisitDataSource;

  constructor(config: ToolsyClientConfig) {
    this.billingPlan = new BillingPlanDataSource(config);
    this.client = new ClientDataSource(config);
    this.content = new ContentDataSource(config);
    this.currency = new CurrencyDataSource(config);
    this.donate = new DonateDataSource(config);
    this.invoice = new InvoiceDataSource(config);
    this.marketingProgram = new MarketingProgramDataSource(config);
    this.message = new MessageDataSource(config);
    this.payment = new PaymentDataSource(config);
    this.paymentSystem = new PaymentSystemDataSource(config);
    this.product = new ProductDataSource(config);
    this.project = new ProjectDataSource(config);
    this.promoCode = new PromoCodeDataSource(config);
    this.refund = new RefundDataSource(config);
    this.session = new SessionDataSource(config);
    this.subscription = new SubscriptionDataSource(config);
    this.subscriptionPlan = new SubscriptionPlanDataSource(config);
    this.visit = new VisitDataSource(config);
  }
}
