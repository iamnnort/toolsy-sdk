import { EntityEntity } from '../__entity/entity';
import { Question } from './type';
import { EntityDto } from '../type';
import { questionSchema } from './entity.schema';
import { EnumBuilder } from '../__enum';
import { DateBuilder } from '../__date';
import { ContentBuilder } from '../content';
import { FieldBuilder } from '../field';
import { NotificationBuilder } from '../notification/builder';

export class QuestionEntity extends EntityEntity<Question> {
  constructor(entity?: Partial<Question>, entityDto: EntityDto = {}) {
    super(questionSchema, entity, entityDto);
  }

  getType() {
    return EnumBuilder.make(this.entity.type);
  }

  hasAutosave() {
    return this.entity.hasAutosave;
  }

  hasMultipleAnswers() {
    return this.entity.hasMultipleAnswers;
  }

  hasCustomAnswer() {
    return this.entity.hasCustomAnswer;
  }

  hasCorrectAnswer() {
    return this.entity.hasCorrectAnswer;
  }

  hasRevote() {
    return this.entity.hasRevote;
  }

  hasShuffledOptions() {
    return this.entity.hasShuffledOptions;
  }

  hasAutoCheck() {
    return this.entity.hasAutoCheck;
  }

  getClosesAt() {
    return DateBuilder.make(this.entity.closesAt, this.dto);
  }

  getValidationErrorContentId() {
    return this.entity.validationErrorContent?.id;
  }

  getValidationErrorContent() {
    return ContentBuilder.make(this.entity.validationErrorContent, this.dto);
  }

  getCorrectAnswerContentId() {
    return this.entity.correctAnswerContent?.id;
  }

  getCorrectAnswerContent() {
    return ContentBuilder.make(this.entity.correctAnswerContent, this.dto);
  }

  getIncorrectAnswerContentId() {
    return this.entity.incorrectAnswerContent?.id;
  }

  getIncorrectAnswerContent() {
    return ContentBuilder.make(this.entity.incorrectAnswerContent, this.dto);
  }

  getRequestAnswerContentId() {
    return this.entity.requestAnswerContent?.id;
  }

  getRequestAnswerContent() {
    return ContentBuilder.make(this.entity.requestAnswerContent, this.dto);
  }

  getSubmitAnswerContentId() {
    return this.entity.submitAnswerContent?.id;
  }

  getSubmitAnswerContent() {
    return ContentBuilder.make(this.entity.submitAnswerContent, this.dto);
  }

  getFieldId() {
    return this.entity.field?.id;
  }

  getNotificationId() {
    return this.entity.notification?.id;
  }

  getField() {
    return FieldBuilder.make(this.entity.field, this.dto);
  }

  getNotification() {
    return NotificationBuilder.make(this.entity.notification, this.dto);
  }
}
