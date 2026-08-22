import { PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { Message } from '@src/entities/message/type';
import { MessageCreateDto, MessageSearchDto } from './dto';

export class MessageDataSource extends pickRequestDataSource<
  'search' | 'get' | 'create',
  Message,
  { params: MessageSearchDto },
  PaginationResponse<Message>,
  { data: MessageCreateDto }
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.message.default,
    });
  }
}
