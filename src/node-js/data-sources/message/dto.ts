import { Message } from '@src/entities/message/type';
import { SearchDto, SearchField } from '@src/types/dto';

export type MessageSearchDto = SearchDto<Message> & {
  projectId?: SearchField<string>;
  marketingProgramId?: SearchField<string>;
  visitId?: SearchField<string>;
  clientId?: SearchField<string>;
  clientTgId?: SearchField<string>;
};

export type MessageCreateContentDto = {
  text: string;
};

export type MessageCreateDto = {
  visitId: string;
  content: MessageCreateContentDto;
};
