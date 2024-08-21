import { Injectable } from '@nestjs/common';
import {
  FindManyOptions,
  FindOptionsWhere,
  ObjectId,
  FindOneOptions,
  DeepPartial,
} from 'typeorm';

@Injectable()
export abstract class IRepository<Entity> {
  abstract create(): Entity;

  abstract create(entityLikeArray: DeepPartial<Entity>[]): Entity[];

  abstract create(entityLike: DeepPartial<Entity>): Entity;

  abstract count(conditions?: FindOptionsWhere<Entity>): Promise<number>;

  abstract find(options?: FindManyOptions<Entity>): Promise<Entity[]>;

  abstract find(conditions?: FindOptionsWhere<Entity>): Promise<Entity[]>;

  abstract find(
    optionsOrConditions?: FindManyOptions<Entity> | FindOptionsWhere<Entity>,
  ): Promise<Entity[]>;

  abstract findByIds(
    ids: any[],
    options?: FindManyOptions<Entity>,
  ): Promise<Entity[]>;

  abstract findByIds(
    ids: any[],
    conditions?: FindOptionsWhere<Entity>,
  ): Promise<Entity[]>;

  abstract findByIds(
    ids: any[],
    optionsOrConditions?: FindManyOptions<Entity> | FindOptionsWhere<Entity>,
  ): Promise<Entity[]>;

  abstract findOne(
    id?: string | number | Date | ObjectId,
    options?: FindOneOptions<Entity>,
  ): Promise<Entity | undefined>;

  abstract findOne(
    options?: FindOneOptions<Entity>,
  ): Promise<Entity | undefined>;

  abstract findOne(
    conditions?: FindOptionsWhere<Entity>,
    options?: FindOneOptions<Entity>,
  ): Promise<Entity | undefined>;

  abstract findOne(
    optionsOrConditions?:
      | string
      | number
      | Date
      | ObjectId
      | FindOneOptions<Entity>
      | FindOptionsWhere<Entity>,
    maybeOptions?: FindOneOptions<Entity>,
  ): Promise<Entity | undefined>;
}
