import { EntityDto } from '@src/types';
import { AssetEntity } from './entity';
import { Asset } from './type';

export class AssetBuilder {
  static make(entity?: Partial<Asset>, entityDto: EntityDto = {}) {
    return new AssetEntity(entity, entityDto);
  }
}
