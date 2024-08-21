import { EntitySchema } from 'typeorm';

import { Client } from 'domain/models/Client';

import { BaseEntity } from './BaseEntity';

export const ClientEntity = new EntitySchema<Client>({
  name: 'Client',
  tableName: 'client',
  target: Client,
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
      name: 'IDX_CLIENTS',
      unique: true,
      columns: ['name', 'lastName', 'email'],
    },
  ],
  uniques: [
    {
      name: 'UNIQUE_USERS',
      columns: ['email'],
    },
  ],
});
