import { EntityEntity } from '../__entity/entity';
import { Visit } from './type';
import { EntityDto } from '../type';
import { visitSchema } from './entity.schema';
import { StringBuilder } from '../__string';
import { EnumBuilder } from '../__enum';
import { ClientBuilder } from '../client/builder';

export class VisitEntity extends EntityEntity<Visit> {
  constructor(entity?: Partial<Visit>, entityDto: EntityDto = {}) {
    super(visitSchema, entity, entityDto);
  }

  getLanguage() {
    return EnumBuilder.make(this.entity.language);
  }

  getTimezone() {
    return EnumBuilder.make(this.entity.timezone);
  }

  getProvider() {
    return EnumBuilder.make(this.entity.provider);
  }

  getStatus() {
    return EnumBuilder.make(this.entity.status);
  }

  getJoinStatus() {
    return EnumBuilder.make(this.entity.joinStatus);
  }

  getEmail() {
    return StringBuilder.make(this.entity.email);
  }

  getProjectId() {
    return this.entity.project?.id;
  }

  getClient() {
    return ClientBuilder.make(this.entity.client, this.dto);
  }

  getClientId() {
    return this.entity.client?.id;
  }

  getMarketingProgramId() {
    return this.entity.marketingProgram?.id;
  }
}
