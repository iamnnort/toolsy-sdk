import isNil from 'lodash/isNil.js';
import type { ZodType } from 'zod';
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
    };
  }

  getId() {
    return this.entity.id;
  }

  getCreatedAt() {
    return DateBuilder.make(this.entity.createdAt, this.dto);
  }

  getUpdatedAt() {
    return DateBuilder.make(this.entity.updatedAt, this.dto);
  }

  hasEntity() {
    return !isNil(this.entity.id);
  }

  resetEntity() {
    this.entity = this.schema.parse({}) as T;
  }
}
