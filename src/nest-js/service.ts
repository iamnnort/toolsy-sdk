import { Inject, Injectable } from '@nestjs/common';
import { ToolsyClient } from '@src/node-js';
import { MODULE_OPTIONS_TOKEN } from './module-definition';
import type { ToolsyClientConfig } from '@src/node-js/types';

@Injectable()
export class ToolsyClientService extends ToolsyClient {
  constructor(@Inject(MODULE_OPTIONS_TOKEN) config: ToolsyClientConfig) {
    super(config);
  }
}
