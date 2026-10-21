import { z } from 'zod';
import { entitySchema } from '../__entity/entity.schema';
import { FolderTypes } from './type';

export const folderSchema = entitySchema.extend({
  type: z.enum(FolderTypes).catch('' as FolderTypes),
  name: z.string().catch(''),
  priority: z.number().catch(0),
});
