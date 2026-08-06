import { ConfigurableModuleBuilder } from '@nestjs/common';
import type { ToolsyClientConfig } from '@src/node-js/types';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<ToolsyClientConfig>().build();
