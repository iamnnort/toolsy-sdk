import { Folder } from '@src/entities/folder/type';
import { CreateDto, SearchDto, SearchField, UpdateDto } from '@src/types/dto';

export type FolderSearchDto = SearchDto<Folder, 'type' | 'name'> & {
  projectId?: SearchField<string>;
};

export type FolderCreateDto = CreateDto<Folder, 'type' | 'name', 'priority'> & {
  projectId: string;
};

export type FolderUpdateDto = UpdateDto<Folder, 'name' | 'priority'>;
