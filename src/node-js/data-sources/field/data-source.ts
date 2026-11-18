import { PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { Field } from '@src/entities/field/type';
import { FieldCreateDto, FieldSearchDto, FieldUpdateDto } from './dto';

export class FieldDataSource extends pickRequestDataSource<
  'search' | 'get' | 'create' | 'update' | 'remove',
  Field,
  { params: FieldSearchDto },
  PaginationResponse<Field>,
  { data: FieldCreateDto },
  { data: FieldUpdateDto }
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.field.default,
    });
  }
}
