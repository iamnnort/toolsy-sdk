import { EntityEntity } from '../__entity/entity';
import { Content } from './type';
import { EntityDto } from '../type';
import { contentSchema } from './entity.schema';
import { StringBuilder } from '../__string';
import { NotificationBuilder } from '../notification/builder';

export class ContentEntity extends EntityEntity<Content> {
  constructor(entity?: Partial<Content>, entityDto: EntityDto = {}) {
    super(contentSchema, entity, entityDto);
  }

  getTitle() {
    return StringBuilder.make(this.entity.title);
  }

  getText() {
    return StringBuilder.make(this.entity.text);
  }

  getNotification() {
    return NotificationBuilder.make(this.entity.notification, this.dto);
  }
}
