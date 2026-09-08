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
      },
      currency: {
        default: 'currencies',
      },
      product: {
        default: 'products',
      },
      subscriptionPlan: {
        default: 'subscription-plans',
        paymentSystem: 'payment-systems',
      },
      paymentSystem: {
        default: 'payment-systems',
        subscriptionPlan: 'subscription-plans',
        donate: 'donates',
      },
      billingPlan: {
        default: 'billing-plans',
      },
      content: {
        default: 'contents',
      },
      contentButton: {
        default: 'content-buttons',
        tag: 'tags',
      },
      donate: {
        default: 'donates',
      },
      funnel: {
        default: 'funnels',
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
      },
      payment: {
        default: 'payments',
      },
      promoCode: {
        default: 'promo-codes',
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
    },
  };
};
