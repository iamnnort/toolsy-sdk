import { Command } from '@src/entities/command/type';
import { CreateDto, SearchDto, SearchField, UpdateDto } from '@src/types/dto';

export type CommandSearchDto = SearchDto<Command, 'title' | 'trigger'> & {
  projectId?: SearchField<string>;
};

export type CommandCreateDto = CreateDto<Command, 'title' | 'trigger', never> & {
  projectId: string;
};

export type CommandUpdateDto = UpdateDto<Command, 'title' | 'trigger'>;
