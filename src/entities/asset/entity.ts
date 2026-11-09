import { EntityEntity } from '../__entity/entity';
import { Asset } from './type';
import { EntityDto } from '../type';
import { assetSchema } from './entity.schema';
import { StringBuilder } from '../__string';
import { EnumBuilder } from '../__enum';
import { NumberBuilder } from '../__number';
import { ContentBuilder } from '../content/builder';

export class AssetEntity extends EntityEntity<Asset> {
  constructor(entity?: Partial<Asset>, entityDto: EntityDto = {}) {
    super(assetSchema, entity, entityDto);
  }

  getType() {
    return EnumBuilder.make(this.entity.type);
  }

  getProvider() {
    return EnumBuilder.make(this.entity.provider);
  }

  getPriority() {
    return NumberBuilder.make(this.entity.priority);
  }

  getProviderId() {
    return StringBuilder.make(this.entity.providerId);
  }

  getName() {
    return StringBuilder.make(this.entity.name);
  }

  getSize() {
    return NumberBuilder.make(this.entity.size);
  }

  getWidth() {
    return NumberBuilder.make(this.entity.width);
  }

  getHeight() {
    return NumberBuilder.make(this.entity.height);
  }

  getDuration() {
    return NumberBuilder.make(this.entity.duration);
  }

  getMimeType() {
    return StringBuilder.make(this.entity.mimeType);
  }

  getUrl() {
    return StringBuilder.make(this.entity.url);
  }

  getHtml() {
    return StringBuilder.make(this.entity.html);
  }

  hasSpoiler() {
    return this.entity.hasSpoiler;
  }

  hasCaption() {
    return this.entity.hasCaption;
  }

  getContent() {
    return ContentBuilder.make(this.entity.content, this.dto);
  }

  getContentId() {
    return this.entity.content?.id;
  }
}
