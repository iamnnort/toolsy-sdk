import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { FieldTypes } from './type';

export const fieldSchema = entitySchema.extend({
  name: z.string().catch(''),
  type: z.enum(FieldTypes).catch('' as FieldTypes),
});
