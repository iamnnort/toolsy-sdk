import isNil from 'lodash/isNil.js';
import type { ZodType } from 'zod';
import { config as cfg } from '@src/config';
import { Timezones } from '@src/types';
import { Entity, EntityDto } from './type';
import { DateBuilder } from '../__date';

export abstract class EntityEntity<T extends Entity, E extends Record<string, Entity> = Record<string, Entity>> {
  entity: T;

  entities: E;

  dto: EntityDto;

  protected schema: ZodType;

  constructor(schema: ZodType, entity?: Partial<T>, entityDto: EntityDto = {}, entities: E = {} as E) {
    this.schema = schema;
    this.entity = schema.parse(entity || {}) as T;
    this.entities = entities;

    this.dto = {
      timezone: entityDto.timezone || Timezones.UTC,
      locale: entityDto.locale,
    };
  }

  getId() {
    return this.entity.id;
  }

  getShortId() {
    const id = this.getId();
    const { headLength, tailLength, separator } = cfg.entity.shortId;

    if (id.length <= headLength + separator.length + tailLength) {
      return id;
    }

    return `${id.slice(0, headLength)}${separator}${id.slice(-tailLength)}`;
  }

  getCreatedAt() {
    return DateBuilder.make(this.entity.createdAt, this.dto);
  }

  getUpdatedAt() {
    return DateBuilder.make(this.entity.updatedAt, this.dto);
  }

  hasEntity() {
    return !isNil(this.entity.id) && this.entity.id !== '';
  }

  resetEntity() {
    this.entity = this.schema.parse({}) as T;
  }
}
