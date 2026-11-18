import { EntityDto } from '@src/types';
import { QuestionEntity } from './entity';
import { Question } from './type';

export class QuestionBuilder {
  static make(entity?: Partial<Question>, entityDto: EntityDto = {}) {
    return new QuestionEntity(entity, entityDto);
  }
}
