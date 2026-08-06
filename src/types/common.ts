export type Entity = {
  id: string;
  createdAt: string;
  updatedAt: string;
};

export enum Languages {
  AZ = 'az',
  DE = 'de',
  EN = 'en',
  ES = 'es',
  FR = 'fr',
  IT = 'it',
  KK = 'kk',
  PL = 'pl',
  RO = 'ro',
  RU = 'ru',
  TG = 'tg',
  TR = 'tr',
  UA = 'ua',
  UZ = 'uz',
}

export enum Timezones {
  UTC = 'UTC',
  EUROPE_LONDON = 'Europe/London',
  EUROPE_BERLIN = 'Europe/Berlin',
  EUROPE_PARIS = 'Europe/Paris',
  EUROPE_ROME = 'Europe/Rome',
  EUROPE_MADRID = 'Europe/Madrid',
  EUROPE_WARSAW = 'Europe/Warsaw',
  EUROPE_KYIV = 'Europe/Kyiv',
  EUROPE_BUCHAREST = 'Europe/Bucharest',
  EUROPE_MOSCOW = 'Europe/Moscow',
  EUROPE_ISTANBUL = 'Europe/Istanbul',
  ASIA_BAKU = 'Asia/Baku',
  ASIA_DUSHANBE = 'Asia/Dushanbe',
  ASIA_TASHKENT = 'Asia/Tashkent',
  ASIA_ALMATY = 'Asia/Almaty',
  AMERICA_NEW_YORK = 'America/New_York',
}
