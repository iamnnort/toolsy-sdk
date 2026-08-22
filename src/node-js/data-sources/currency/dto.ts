import { Currency } from '@src/entities/currency/type';
import { SearchDto } from '@src/types/dto';

export type CurrencySearchDto = SearchDto<Currency, 'code'>;
