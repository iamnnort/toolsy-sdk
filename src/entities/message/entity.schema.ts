import { entitySchema, localeEntitySchema } from '../__entity/entity.schema';

export const messageSchema = entitySchema.extend({
  ...localeEntitySchema.shape,
});
