import { z } from 'zod';
import { entitySchema, localeEntitySchema } from '../__entity/entity.schema';
import { ProjectStatuses } from './type';

export const projectSchema = entitySchema.extend({
  ...localeEntitySchema.shape,
  status: z.enum(ProjectStatuses).catch('' as ProjectStatuses),
  name: z.string().catch(''),
  botTgId: z.string().nullable().catch(null),
  botTgUsername: z.string().nullable().catch(null),
  botTgName: z.string().nullable().catch(null),
  botMaxId: z.string().nullable().catch(null),
  botMaxUsername: z.string().nullable().catch(null),
  botMaxName: z.string().nullable().catch(null),
});
