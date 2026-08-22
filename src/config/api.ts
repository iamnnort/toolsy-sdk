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
      },
      paymentSystem: {
        default: 'payment-systems',
        subscriptionPlan: 'subscription-plans',
        donate: 'donates',
      },
      billingPlan: {
        default: 'billing-plans',
      },
      donate: {
        default: 'donates',
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
      visit: {
        default: 'visits',
      },
      client: {
        default: 'clients',
      },
    },
  };
};
