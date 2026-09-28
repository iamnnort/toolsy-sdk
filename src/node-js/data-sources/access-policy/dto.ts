import { AccessPolicy } from '@src/entities/access-policy/type';
import { CreateDto, SearchDto, SearchField, UpdateDto } from '@src/types/dto';

export type AccessPolicySearchDto = SearchDto<AccessPolicy> & {
  projectId?: SearchField<string>;
  notificationId?: SearchField<string>;
  spaceId?: SearchField<string>;
};

export type AccessPolicyCreateDto = CreateDto<AccessPolicy, never, 'expiresAt'> & {
  notificationId: string;
  spaceId: string;
};

export type AccessPolicyUpdateDto = UpdateDto<AccessPolicy, 'expiresAt'>;
