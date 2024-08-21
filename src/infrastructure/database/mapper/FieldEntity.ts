import { EntitySchema } from 'typeorm';

import { Field } from 'domain/models/Field';

import { BaseEntity } from './BaseEntity';

export const FieldEntity = new EntitySchema<Field>({
  name: 'Field',
  tableName: 'field',
  target: Field,
  columns: {
    ...BaseEntity,
    name: {
      type: String,
      length: 100,
    },
    location: {
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
      name: 'IDX_FIELDS',
      unique: true,
      columns: ['name', 'location'],
    },
  ],
  uniques: [
    {
      name: 'UNIQUE_FARMERS',
      columns: ['location', 'name'],
    },
  ],
});
