import { z } from 'zod';
import { entitySchema, localeEntitySchema } from '../__entity/entity.schema';
import { ClientStatuses } from './type';

export const clientSchema = entitySchema.extend({
  ...localeEntitySchema.shape,
  status: z.enum(ClientStatuses).catch('' as ClientStatuses),
  firstName: z.string().nullable().catch(null),
  lastName: z.string().nullable().catch(null),
  email: z.string().nullable().catch(null),
  tgId: z.string().nullable().catch(null),
  tgUsername: z.string().nullable().catch(null),
  tgFirstName: z.string().nullable().catch(null),
  tgLastName: z.string().nullable().catch(null),
  maxId: z.string().nullable().catch(null),
  maxUsername: z.string().nullable().catch(null),
  maxFirstName: z.string().nullable().catch(null),
  maxLastName: z.string().nullable().catch(null),
});
