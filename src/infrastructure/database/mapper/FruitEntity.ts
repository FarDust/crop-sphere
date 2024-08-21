import { EntitySchema } from 'typeorm';

import { Fruit } from 'domain/models/Fruit';

import { BaseEntity } from './BaseEntity';

export const FruitEntity = new EntitySchema<Fruit>({
  name: 'Fruit',
  tableName: 'fruit',
  target: Fruit,
  columns: {
    ...BaseEntity,
    name: {
      type: String,
      length: 100,
    },
    variety: {
      type: String,
      length: 100,
    },
  },
  orderBy: {
    createdAt: 'ASC',
  },
  relations: {},
  indices: [
    {
      name: 'IDX_FRUITS',
      unique: true,
      columns: ['name', 'variety'],
    },
  ],
  uniques: [
    {
      name: 'UNIQUE_VARIETIES',
      columns: ['name', 'variety'],
    },
    {
      name: 'UNIQUE_FRUITS',
      columns: ['name'],
    },
  ],
});
