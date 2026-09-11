import { Content } from '@src/entities/content/type';
import { UpdateDto } from '@src/types/dto';

export type ContentUpdateDto = UpdateDto<Content, 'title' | 'text'>;
