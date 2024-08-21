import { EntitySchema } from 'typeorm';

import { Farmer } from 'domain/models/Farmer';

import { BaseEntity } from './BaseEntity';

export const FarmerEntity = new EntitySchema<Farmer>({
  name: 'Farmer',
  tableName: 'farmer',
  target: Farmer,
  columns: {
    ...BaseEntity,
    name: {
      type: String,
      length: 100,
    },
    lastName: {
      type: String,
      length: 100,
    },
    email: {
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
      name: 'IDX_FARMERS',
      unique: true,
      columns: ['name', 'lastName', 'email'],
    },
  ],
  uniques: [
    {
      name: 'UNIQUE_FARMERS',
      columns: ['email'],
    },
  ],
});
