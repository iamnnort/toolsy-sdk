import { BaseRequestConfig, LoggerLevels } from '@iamnnort/request';
import { ToolsyClientConfig } from './types';

export class ToolsyClientService {
  static getDataSourceConfig(config: ToolsyClientConfig): BaseRequestConfig {
    return {
      apiKey: config.apiKey,
      bearerToken: config.bearerToken,
      baseUrl: config.host ?? 'https://api.toolsy.bot/v1',
      logger: {
        name: config.logger?.name ?? 'ToolsyApi',
        level: config.logger?.level ?? LoggerLevels.INFO,
      },
    };
  }
}
