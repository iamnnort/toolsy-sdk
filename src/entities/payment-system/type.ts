import { Entity } from '../__entity/type';
import { Content } from '../content/type';
import { Project } from '../project/type';

export type PaymentSystem = Entity & {
  name: string;
  provider: PaymentSystemProviders;
  taxation: TaxationSystems;
  vat: Vats;
  content: Content;
  project: Project;
};

export enum PaymentSystemProviders {
  BEPAID = 'bepaid',
  CLOUDPAYMENTS = 'cloudpayments',
  COINBASE = 'coinbase',
  COINPAYMENTS = 'coinpayments',
  CRYPTOBOT = 'cryptobot',
  CRYPTOCOM = 'cryptocom',
  FREEDOMPAY_KG = 'freedompay_kg',
  FREEDOMPAY_KZ = 'freedompay_kz',
  FREEDOMPAY_UZ = 'freedompay_uz',
  IYZICO = 'iyzico',
  MODULBANK = 'modulbank',
  PAYKEEPER = 'paykeeper',
  PAYPAL = 'paypal',
  PAYTR = 'paytr',
  PLATEGA = 'platega',
  PRODAMUS_EDUCATION_KZ = 'prodamus_education_kz',
  PRODAMUS_RU = 'prodamus_ru',
  PRZELEWY24 = 'przelewy24',
  ROBOKASSA_KZ = 'robokassa_kz',
  ROBOKASSA_RU = 'robokassa_ru',
  SEMIAUTO_PAYMENTS = 'semiauto_payments',
  STRIPE = 'stripe',
  TBANK = 'tbank',
  TELEGRAM_PAYMENTS = 'telegram_payments',
  TELEGRAM_STARS = 'telegram_stars',
  TOCHKA = 'tochka',
  WAYFORPAY = 'wayforpay',
  WEBPAY = 'webpay',
  YOOKASSA = 'yookassa',
  YOOMONEY = 'yoomoney',
}

export enum TaxationSystems {
  ENVD = 'envd',
  ESN = 'esn',
  NPD = 'npd',
  OSN = 'osn',
  PATENT = 'patent',
  USN_INCOME = 'usn_income',
  USN_INCOME_OUTCOME = 'usn_income_outcome',
}

export enum Vats {
  NONE = 'none',
  VAT0 = 'vat0',
  VAT10 = 'vat10',
  VAT105 = 'vat105',
  VAT107 = 'vat107',
  VAT110 = 'vat110',
  VAT122 = 'vat122',
  VAT22 = 'vat22',
  VAT5 = 'vat5',
  VAT7 = 'vat7',
}
