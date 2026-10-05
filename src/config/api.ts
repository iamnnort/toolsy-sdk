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
        copy: 'copy',
      },
      subscriptionPlan: {
        default: 'subscription-plans',
        paymentSystem: 'payment-systems',
        copy: 'copy',
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
      },
      funnel: {
        default: 'funnels',
        copy: 'copy',
      },
      invoice: {
        default: 'invoices',
        pay: 'pay',
      },
      marketingProgram: {
        default: 'marketing-programs',
      },
      message: {
        default: 'messages',
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
