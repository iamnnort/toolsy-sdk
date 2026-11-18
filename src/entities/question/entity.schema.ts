import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { QuestionTypes } from './type';

export const questionSchema = entitySchema.extend({
  type: z.enum(QuestionTypes).catch('' as QuestionTypes),
  hasAutosave: z.boolean().catch(false),
  hasMultipleAnswers: z.boolean().catch(false),
  hasCustomAnswer: z.boolean().catch(false),
  hasCorrectAnswer: z.boolean().catch(false),
  hasRevote: z.boolean().catch(false),
  hasShuffledOptions: z.boolean().catch(false),
  hasAutoCheck: z.boolean().catch(false),
  closesAt: z.string().nullable().catch(null),
});
