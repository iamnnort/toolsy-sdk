import { ToolsyClientConfig } from './types';
import {
  AssetDataSource,
  AutomationDataSource,
  BillingPlanDataSource,
  ClientDataSource,
  CommandDataSource,
  ContentButtonActionDataSource,
  ContentButtonDataSource,
  ContentDataSource,
  CurrencyDataSource,
  DialogDataSource,
  DialogNotificationDataSource,
  DonateDataSource,
  FunnelDataSource,
  InvoiceDataSource,
  MarketingProgramDataSource,
  AccessPolicyDataSource,
  NotificationDataSource,
  PaymentDataSource,
  PaymentSystemDataSource,
  ProductDataSource,
  ProjectDataSource,
  PromoCodeDataSource,
  RefundDataSource,
  SessionDataSource,
  SpaceDataSource,
  SubscriptionDataSource,
  SubscriptionPlanDataSource,
  SubscriptionPlanCycleDataSource,
  TagDataSource,
  FolderDataSource,
  LinkDataSource,
  VisitDataSource,
} from './data-sources';

export class ToolsyClient {
  asset: AssetDataSource;

  automation: AutomationDataSource;

  billingPlan: BillingPlanDataSource;

  client: ClientDataSource;

  command: CommandDataSource;

  content: ContentDataSource;

  contentButton: ContentButtonDataSource;

  contentButtonAction: ContentButtonActionDataSource;

  currency: CurrencyDataSource;

  dialog: DialogDataSource;

  dialogNotification: DialogNotificationDataSource;

  donate: DonateDataSource;

  funnel: FunnelDataSource;

  invoice: InvoiceDataSource;

  marketingProgram: MarketingProgramDataSource;

  notification: NotificationDataSource;

  accessPolicy: AccessPolicyDataSource;

  payment: PaymentDataSource;

  paymentSystem: PaymentSystemDataSource;

  product: ProductDataSource;

  project: ProjectDataSource;

  promoCode: PromoCodeDataSource;

  refund: RefundDataSource;

  session: SessionDataSource;

  space: SpaceDataSource;

  subscription: SubscriptionDataSource;

  subscriptionPlan: SubscriptionPlanDataSource;

  subscriptionPlanCycle: SubscriptionPlanCycleDataSource;

  tag: TagDataSource;

  folder: FolderDataSource;

  link: LinkDataSource;

  visit: VisitDataSource;

  constructor(config: ToolsyClientConfig) {
    this.asset = new AssetDataSource(config);
    this.automation = new AutomationDataSource(config);
    this.billingPlan = new BillingPlanDataSource(config);
    this.client = new ClientDataSource(config);
    this.command = new CommandDataSource(config);
    this.content = new ContentDataSource(config);
    this.contentButton = new ContentButtonDataSource(config);
    this.contentButtonAction = new ContentButtonActionDataSource(config);
    this.currency = new CurrencyDataSource(config);
    this.dialog = new DialogDataSource(config);
    this.dialogNotification = new DialogNotificationDataSource(config);
    this.donate = new DonateDataSource(config);
    this.funnel = new FunnelDataSource(config);
    this.invoice = new InvoiceDataSource(config);
    this.marketingProgram = new MarketingProgramDataSource(config);
    this.notification = new NotificationDataSource(config);
    this.accessPolicy = new AccessPolicyDataSource(config);
    this.payment = new PaymentDataSource(config);
    this.paymentSystem = new PaymentSystemDataSource(config);
    this.product = new ProductDataSource(config);
    this.project = new ProjectDataSource(config);
    this.promoCode = new PromoCodeDataSource(config);
    this.refund = new RefundDataSource(config);
    this.session = new SessionDataSource(config);
    this.space = new SpaceDataSource(config);
    this.subscription = new SubscriptionDataSource(config);
    this.subscriptionPlan = new SubscriptionPlanDataSource(config);
    this.subscriptionPlanCycle = new SubscriptionPlanCycleDataSource(config);
    this.tag = new TagDataSource(config);
    this.folder = new FolderDataSource(config);
    this.link = new LinkDataSource(config);
    this.visit = new VisitDataSource(config);
  }
}
