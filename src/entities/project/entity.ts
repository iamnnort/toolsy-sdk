import { EntityEntity } from '../__entity/entity';
import { Project } from './type';
import { EntityDto } from '../type';
import { projectSchema } from './entity.schema';
import { BotProviders } from '@src/types';
import { BotProviderBuilder } from '../__bot-provider';
import { StringBuilder } from '../__string';

export class ProjectEntity extends EntityEntity<Project> {
  constructor(entity?: Partial<Project>, entityDto: EntityDto = {}) {
    super(projectSchema, entity, entityDto);
  }

  getName() {
    return StringBuilder.make(this.entity.name);
  }

  getBotProvider(botProvider: BotProviders) {
    if (botProvider === BotProviders.TELEGRAM) {
      return BotProviderBuilder.make(BotProviders.TELEGRAM, {
        id: this.entity.botTgId,
        username: this.entity.botTgUsername,
        name: this.entity.botTgName,
      });
    }

    if (botProvider === BotProviders.MAX) {
      return BotProviderBuilder.make(BotProviders.MAX, {
        id: this.entity.botMaxId,
        username: this.entity.botMaxUsername,
        name: this.entity.botMaxName,
      });
    }

    return BotProviderBuilder.make(botProvider);
  }
}
