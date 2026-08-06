import { LoggerConfig } from '@iamnnort/request';

export type ToolsyClientConfig = {
  host?: string;
  apiKey?: string;
  bearerToken?: string;
  logger?: Partial<LoggerConfig>;
};
