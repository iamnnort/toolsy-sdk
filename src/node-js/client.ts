import { ToolsyClientConfig } from './types';
import { SessionDataSource } from './data-sources';

export class ToolsyClient {
  session: SessionDataSource;

  constructor(config: ToolsyClientConfig) {
    this.session = new SessionDataSource(config);
  }
}
