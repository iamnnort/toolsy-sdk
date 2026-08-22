import { Price } from './entity';
import { PriceConvertOptions, PriceExchangeRateOptions, PriceOptions } from './type';

export class PriceBuilder {
  static make(amountGross: number, options: PriceOptions = {}) {
    return new Price(amountGross, options);
  }

  static makeExchangeRate(options: PriceExchangeRateOptions = {}) {
    if (options.originCurrencyExchangeRate == null || options.targetCurrencyExchangeRate == null) {
      return 1;
    }

    const exchangeRate = options.originCurrencyExchangeRate / options.targetCurrencyExchangeRate;

    return exchangeRate;
  }

  static convert(amount?: number | null, options: PriceConvertOptions = {}) {
    const scale = options.scale || 2;
    const exchangeRate = this.makeExchangeRate(options);

    if (amount == null || options.originCurrencyExchangeRate == null || options.targetCurrencyExchangeRate == null) {
      return {
        convertedAmount: amount,
        exchangeRate,
      };
    }

    const convertedAmount = amount / exchangeRate;

    if (options.targetCurrencyExp != null) {
      if (options.targetCurrencyExp < 1) {
        return {
          convertedAmount: Math.ceil(convertedAmount),
          exchangeRate,
        };
      }
    }

    if (convertedAmount < 1) {
      return {
        convertedAmount,
        exchangeRate,
      };
    }

    return {
      convertedAmount: parseFloat(convertedAmount.toFixed(scale)),
      exchangeRate,
    };
  }

  static makeExp(amount?: number, options: Pick<PriceOptions, 'currencyExp'> = {}) {
    if (amount == null || options.currencyExp == null) {
      return amount;
    }

    return amount * Math.pow(10, options.currencyExp);
  }
}
