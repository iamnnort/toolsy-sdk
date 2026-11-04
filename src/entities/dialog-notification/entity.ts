import { EntityEntity } from '../__entity/entity';
import { DialogNotification } from './type';
import { EntityDto } from '../type';
import { dialogNotificationSchema } from './entity.schema';
import { EnumBuilder } from '../__enum';
import { StringBuilder } from '../__string';
import { DateBuilder } from '../__date';
import { ContentBuilder } from '../content/builder';
import { ClientBuilder } from '../client/builder';
import { DialogNotificationBuilder } from './builder';
import { DialogBuilder } from '../dialog/builder';

export class DialogNotificationEntity extends EntityEntity<DialogNotification> {
  constructor(entity?: Partial<DialogNotification>, entityDto: EntityDto = {}) {
    super(dialogNotificationSchema, entity, entityDto);
  }

  getEvent() {
    return EnumBuilder.make(this.entity.event);
  }

  getStatus() {
    return EnumBuilder.make(this.entity.status);
  }

  getSendError() {
    return EnumBuilder.make(this.entity.sendError);
  }

  getProviderId() {
    return StringBuilder.make(this.entity.providerId);
  }

  getEditedAt() {
    return DateBuilder.make(this.entity.editedAt, this.dto);
  }

  getContent() {
    return ContentBuilder.make(this.entity.content, this.dto);
  }

  getDialog() {
    return DialogBuilder.make(this.entity.dialog, this.dto);
  }

  getClient() {
    return ClientBuilder.make(this.entity.client, this.dto);
  }

  getReplyToDialogNotification() {
    return DialogNotificationBuilder.make(this.entity.replyToDialogNotification, this.dto);
  }

  getContentId() {
    return this.entity.content?.id;
  }

  getDialogId() {
    return this.entity.dialog?.id;
  }

  getClientId() {
    return this.entity.client?.id;
  }

  getReplyToDialogNotificationId() {
    return this.entity.replyToDialogNotification?.id;
  }
}
