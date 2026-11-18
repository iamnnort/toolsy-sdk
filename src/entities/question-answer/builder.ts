import { EntityDto } from '@src/types';
import { QuestionAnswerEntity } from './entity';
import { QuestionAnswer } from './type';

export class QuestionAnswerBuilder {
  static make(entity?: Partial<QuestionAnswer>, entityDto: EntityDto = {}) {
    return new QuestionAnswerEntity(entity, entityDto);
  }
}
