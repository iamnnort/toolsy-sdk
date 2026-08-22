import Big from 'big.js';
import { PriceOptions } from './type';

export class Price {
  amountGross: number;
  amountNet?: number;
  amountFee?: number;
  currencyCode?: string;
  currencyExp?: number;
  discountPercent?: number;
  discountAmount?: number | null;
  fixedAmount?: number;

  constructor(amountGross: number, options: PriceOptions = {}) {
    this.amountGross = amountGross;
    this.amountNet = options?.amountNet;
    this.amountFee = options?.amountFee;
    this.currencyCode = options?.currencyCode;
    this.currencyExp = options?.currencyExp;
    this.discountPercent = options?.discountPercent;
    this.discountAmount = options?.discountAmount;
    this.fixedAmount = options?.fixedAmount;
  }

  getTotal(config: { scale?: number } = {}) {
    const scale = config.scale || 2;

    let totalAmount = new Big(this.amountGross);

    if (this.discountPercent != null) {
      totalAmount = totalAmount.times(Big(1).minus(Big(this.discountPercent).div(100)));
    }

    if (this.discountAmount != null) {
      totalAmount = totalAmount.minus(this.discountAmount);
    }

    if (this.fixedAmount != null) {
      totalAmount = new Big(this.fixedAmount);
    }

    if (totalAmount.lt(0)) {
      return 0;
    }

    if (totalAmount.lt(1)) {
      return totalAmount.toNumber();
    }

    return parseFloat(totalAmount.toFixed(scale));
  }

  getRounded() {
    const total = this.getTotal();

    if (this.currencyExp == null && this.amountGross < 1) {
      return total.toString().replace('.', ',');
    }

    const [integer, fraction] = new Big(total).toFixed(this.currencyExp ?? 2).split('.');
    const groupedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    return [groupedInteger, fraction].filter((_) => _).join(',');
  }

  getCurrency() {
    const total = this.getTotal();

    if (!this.currencyExp) {
      return total;
    }

    return new Big(total).times(Big(10).pow(this.currencyExp)).toNumber();
  }

  getFromCurrency() {
    const total = this.getTotal();

    if (!this.currencyExp) {
      return total;
    }

    return new Big(total).div(Big(10).pow(this.currencyExp)).toNumber();
  }

  getLabel() {
    const roundedAmount = this.getRounded();

    return [roundedAmount, this.currencyCode].filter((_) => _).join(' ');
  }

  getNetAmount() {
    if (this.amountNet != null) {
      return this.amountNet;
    }

    if (this.amountFee != null) {
      return this.amountGross - this.amountFee;
    }

    return this.amountGross;
  }

  getGrossAmount() {
    return this.amountGross;
  }

  getFeeAmount() {
    if (this.amountFee != null) {
      return this.amountFee;
    }

    if (this.amountNet != null) {
      return this.amountGross - this.amountNet;
    }

    return 0;
  }

  isFree() {
    return this.getTotal() === 0;
  }

  toString() {
    return this.getLabel();
  }
}
