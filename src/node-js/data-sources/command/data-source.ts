import { PaginationResponse, pickRequestDataSource } from '@iamnnort/request';
import { config as cfg } from '@src/config';
import { ToolsyClientService } from '@src/node-js/service';
import { ToolsyClientConfig } from '@src/node-js/types';
import { Command } from '@src/entities/command/type';
import { CommandCreateDto, CommandSearchDto, CommandUpdateDto } from './dto';

export class CommandDataSource extends pickRequestDataSource<
  'search' | 'get' | 'create' | 'update' | 'remove',
  Command,
  { params: CommandSearchDto },
  PaginationResponse<Command>,
  { data: CommandCreateDto },
  { data: CommandUpdateDto }
>() {
  constructor(config: ToolsyClientConfig) {
    super({
      ...ToolsyClientService.getDataSourceConfig(config),
      url: cfg.api.endpoints.command.default,
    });
  }
}
