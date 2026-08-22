import { Entity } from '../__entity/type';

export type Currency = Entity & {
  code: CurrencyCodes;
  symbol: string;
  exp: number;
  usdExchangeRate: number;
};

export enum CurrencyCodes {
  ADA = 'ADA',
  AMD = 'AMD',
  AZN = 'AZN',
  BCH = 'BCH',
  BGN = 'BGN',
  BNB = 'BNB',
  BTC = 'BTC',
  BUSD = 'BUSD',
  BYN = 'BYN',
  CAD = 'CAD',
  CRO = 'CRO',
  CZK = 'CZK',
  DAI = 'DAI',
  DOGE = 'DOGE',
  ETH = 'ETH',
  EUR = 'EUR',
  GEL = 'GEL',
  IDR = 'IDR',
  KGS = 'KGS',
  KZT = 'KZT',
  LTC = 'LTC',
  MDL = 'MDL',
  PLN = 'PLN',
  RON = 'RON',
  RUB = 'RUB',
  TJS = 'TJS',
  TON = 'TON',
  TRY = 'TRY',
  UAH = 'UAH',
  USD = 'USD',
  USDC = 'USDC',
  USDT = 'USDT',
  UZS = 'UZS',
  XRP = 'XRP',
  XTR = 'XTR',
}
