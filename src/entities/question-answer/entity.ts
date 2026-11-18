import { EntityEntity } from '../__entity/entity';
import { QuestionAnswer } from './type';
import { EntityDto } from '../type';
import { questionAnswerSchema } from './entity.schema';
import { EnumBuilder } from '../__enum';
import { ContentBuilder } from '../content';
import { VisitBuilder } from '../visit/builder';
import { QuestionBuilder } from '../question/builder';

export class QuestionAnswerEntity extends EntityEntity<QuestionAnswer> {
  constructor(entity?: Partial<QuestionAnswer>, entityDto: EntityDto = {}) {
    super(questionAnswerSchema, entity, entityDto);
  }

  getQuestionType() {
    return EnumBuilder.make(this.entity.questionType);
  }

  hasQuestionAutosave() {
    return this.entity.questionHasAutosave;
  }

  isCorrect() {
    return this.entity.isCorrect;
  }

  getStatus() {
    return EnumBuilder.make(this.entity.status);
  }

  getQuestionId() {
    return this.entity.question?.id;
  }

  getQuestion() {
    return QuestionBuilder.make(this.entity.question, this.dto);
  }

  getVisitId() {
    return this.entity.visit?.id;
  }

  getVisit() {
    return VisitBuilder.make(this.entity.visit, this.dto);
  }

  getContentId() {
    return this.entity.content?.id;
  }

  getContent() {
    return ContentBuilder.make(this.entity.content, this.dto);
  }
}
