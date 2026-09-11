import { ToolsyClientConfig } from './types';
import {
  BillingPlanDataSource,
  ClientDataSource,
  CommandDataSource,
  ContentButtonActionDataSource,
  ContentButtonDataSource,
  ContentDataSource,
  CurrencyDataSource,
  DonateDataSource,
  FunnelDataSource,
  InvoiceDataSource,
  MarketingProgramDataSource,
  MessageDataSource,
  NotificationDataSource,
  PaymentDataSource,
  PaymentSystemDataSource,
  ProductDataSource,
  ProjectDataSource,
  PromoCodeDataSource,
  RefundDataSource,
  SessionDataSource,
  SubscriptionDataSource,
  SubscriptionPlanDataSource,
  TagDataSource,
  VisitDataSource,
} from './data-sources';

export class ToolsyClient {
  billingPlan: BillingPlanDataSource;

  client: ClientDataSource;

  command: CommandDataSource;

  content: ContentDataSource;

  contentButton: ContentButtonDataSource;

  contentButtonAction: ContentButtonActionDataSource;

  currency: CurrencyDataSource;

  donate: DonateDataSource;

  funnel: FunnelDataSource;

  invoice: InvoiceDataSource;

  marketingProgram: MarketingProgramDataSource;

  message: MessageDataSource;

  notification: NotificationDataSource;

  payment: PaymentDataSource;

  paymentSystem: PaymentSystemDataSource;

  product: ProductDataSource;

  project: ProjectDataSource;

  promoCode: PromoCodeDataSource;

  refund: RefundDataSource;

  session: SessionDataSource;

  subscription: SubscriptionDataSource;

  subscriptionPlan: SubscriptionPlanDataSource;

  tag: TagDataSource;

  visit: VisitDataSource;

  constructor(config: ToolsyClientConfig) {
    this.billingPlan = new BillingPlanDataSource(config);
    this.client = new ClientDataSource(config);
    this.command = new CommandDataSource(config);
    this.content = new ContentDataSource(config);
    this.contentButton = new ContentButtonDataSource(config);
    this.contentButtonAction = new ContentButtonActionDataSource(config);
    this.currency = new CurrencyDataSource(config);
    this.donate = new DonateDataSource(config);
    this.funnel = new FunnelDataSource(config);
    this.invoice = new InvoiceDataSource(config);
    this.marketingProgram = new MarketingProgramDataSource(config);
    this.message = new MessageDataSource(config);
    this.notification = new NotificationDataSource(config);
    this.payment = new PaymentDataSource(config);
    this.paymentSystem = new PaymentSystemDataSource(config);
    this.product = new ProductDataSource(config);
    this.project = new ProjectDataSource(config);
    this.promoCode = new PromoCodeDataSource(config);
    this.refund = new RefundDataSource(config);
    this.session = new SessionDataSource(config);
    this.subscription = new SubscriptionDataSource(config);
    this.subscriptionPlan = new SubscriptionPlanDataSource(config);
    this.tag = new TagDataSource(config);
    this.visit = new VisitDataSource(config);
  }
}
