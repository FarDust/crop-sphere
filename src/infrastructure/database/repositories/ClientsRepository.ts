import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { IClientsRepository } from 'application/ports/IClientsRepository';
import { Client } from 'domain/models/Client';
import { ClientEntity } from 'infrastructure/database/mapper/ClientEntity';

import { BaseRepository } from './BaseRepository';

@Injectable()
export class ClientsRepository
  extends BaseRepository<Client>
  implements IClientsRepository
{
  constructor(@InjectDataSource() connection: DataSource) {
    super(connection, ClientEntity);
  }
}
