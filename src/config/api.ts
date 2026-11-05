export const apiConfig = () => {
  return {
    endpoints: {
      session: {
        default: 'sessions',
        me: 'me',
        project: 'projects',
      },
      project: {
        default: 'projects',
        metric: 'metrics',
      },
      currency: {
        default: 'currencies',
      },
      product: {
        default: 'products',
        metric: 'metrics',
        copy: 'copy',
      },
      subscriptionPlan: {
        default: 'subscription-plans',
        paymentSystem: 'payment-systems',
        copy: 'copy',
      },
      subscriptionPlanCycle: {
        default: 'subscription-plan-cycles',
      },
      paymentSystem: {
        default: 'payment-systems',
        subscriptionPlan: 'subscription-plans',
        donate: 'donates',
      },
      automation: {
        default: 'automations',
        copy: 'copy',
      },
      billingPlan: {
        default: 'billing-plans',
      },
      command: {
        default: 'commands',
      },
      content: {
        default: 'contents',
      },
      asset: {
        default: 'assets',
      },
      dialog: {
        default: 'dialogs',
        read: 'read',
      },
      dialogNotification: {
        default: 'dialog-notifications',
      },
      contentButton: {
        default: 'content-buttons',
        tag: 'tags',
      },
      contentButtonAction: {
        default: 'content-button-actions',
        tag: 'tags',
      },
      donate: {
        default: 'donates',
        paymentSystem: 'payment-systems',
      },
      funnel: {
        default: 'funnels',
        metric: 'metrics',
        copy: 'copy',
        preview: 'preview',
      },
      invoice: {
        default: 'invoices',
        pay: 'pay',
      },
      marketingProgram: {
        default: 'marketing-programs',
      },
      notification: {
        default: 'notifications',
        copy: 'copy',
        preview: 'preview',
      },
      accessPolicy: {
        default: 'access-policies',
      },
      payment: {
        default: 'payments',
      },
      promoCode: {
        default: 'promo-codes',
        metric: 'metrics',
        subscriptionPlan: 'subscription-plans',
        copy: 'copy',
      },
      refund: {
        default: 'refunds',
      },
      subscription: {
        default: 'subscriptions',
      },
      tag: {
        default: 'tags',
      },
      folder: {
        default: 'folders',
      },
      link: {
        default: 'links',
        metric: 'metrics',
      },
      visit: {
        default: 'visits',
      },
      client: {
        default: 'clients',
      },
      space: {
        default: 'spaces',
      },
    },
  };
};
