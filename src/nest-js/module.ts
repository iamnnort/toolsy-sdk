import { Global, Module } from '@nestjs/common';
import { ConfigurableModuleClass } from './module-definition';
import { ToolsyClientService } from './service';

@Global()
@Module({
  providers: [ToolsyClientService],
  exports: [ToolsyClientService],
})
export class ToolsyClientModule extends ConfigurableModuleClass {}
