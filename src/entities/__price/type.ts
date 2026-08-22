export type PriceOptions = {
  amountNet?: number;
  amountFee?: number;
  currencyCode?: string;
  currencyExp?: number;
  discountPercent?: number;
  discountAmount?: number | null;
  fixedAmount?: number;
};

export type PriceExchangeRateOptions = {
  originCurrencyExchangeRate?: number;
  targetCurrencyExchangeRate?: number;
};

export type PriceConvertOptions = PriceExchangeRateOptions & {
  targetCurrencyExp?: number;
  scale?: number;
};
