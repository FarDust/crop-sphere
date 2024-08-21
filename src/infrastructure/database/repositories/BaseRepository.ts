import {
  ObjectLiteral,
  EntityManager,
  QueryRunner,
  EntitySchema,
  DataSource,
} from 'typeorm';

export class BaseRepository<Entity extends ObjectLiteral> {
  readonly manager: EntityManager;
  readonly queryRunner?: QueryRunner;
  readonly entitySchema: EntitySchema<Entity>;

  constructor(connection: DataSource, entity: EntitySchema<Entity>) {
    this.queryRunner = connection.createQueryRunner();
    this.manager = this.queryRunner.manager;
    this.entitySchema = entity;
  }
}
