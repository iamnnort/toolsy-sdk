import { EntityEntity } from '../__entity/entity';
import { Dialog } from './type';
import { EntityDto } from '../type';
import { dialogSchema } from './entity.schema';
import { EnumBuilder } from '../__enum';
import { NumberBuilder } from '../__number';
import { VisitBuilder } from '../visit/builder';
import { DialogNotificationBuilder } from '../dialog-notification/builder';
import { ContentBuilder } from '../content/builder';

export class DialogEntity extends EntityEntity<Dialog> {
  constructor(entity?: Partial<Dialog>, entityDto: EntityDto = {}) {
    super(dialogSchema, entity, entityDto);
  }

  getLifecycle() {
    return EnumBuilder.make(this.entity.lifecycle);
  }

  getUnreadCount() {
    return NumberBuilder.make(this.entity.unreadCount);
  }

  hasPin() {
    return this.entity.hasPin;
  }

  hasMute() {
    return this.entity.hasMute;
  }

  getVisit() {
    return VisitBuilder.make(this.entity.visit, this.dto);
  }

  getLatestDialogNotification() {
    return DialogNotificationBuilder.make(this.entity.latestDialogNotification, this.dto);
  }

  getLatestReadDialogNotification() {
    return DialogNotificationBuilder.make(this.entity.latestReadDialogNotification, this.dto);
  }

  getDraftContent() {
    return ContentBuilder.make(this.entity.draftContent, this.dto);
  }

  getVisitId() {
    return this.entity.visit?.id;
  }

  getLatestDialogNotificationId() {
    return this.entity.latestDialogNotification?.id;
  }

  getLatestReadDialogNotificationId() {
    return this.entity.latestReadDialogNotification?.id;
  }

  getDraftContentId() {
    return this.entity.draftContent?.id;
  }
}
