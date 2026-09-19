import { Project } from '@src/entities/project/type';
import { CreateDto, SearchDto, UpdateDto } from '@src/types/dto';

export type ProjectSearchDto = SearchDto<Project, 'botTgId' | 'botMaxId' | 'status' | 'lifecycle'>;

export type ProjectCreateDto = CreateDto<Project, 'name', 'lifecycle'> & {
  botTgToken?: string;
  botMaxToken?: string;
};

export type ProjectUpdateDto = UpdateDto<Project, 'name' | 'lifecycle' | 'priority'> & {
  botTgToken?: string;
  botMaxToken?: string;
};
