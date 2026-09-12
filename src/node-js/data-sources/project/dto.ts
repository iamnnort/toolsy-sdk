import { Project } from '@src/entities/project/type';
import { SearchDto } from '@src/types/dto';

export type ProjectSearchDto = SearchDto<Project, 'botTgId' | 'botMaxId' | 'status'>;
