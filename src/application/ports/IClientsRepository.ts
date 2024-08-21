import { Injectable } from '@nestjs/common';

import { Client } from 'domain/models/Client';

import { IRepository } from 'application/ports/IRepository';

@Injectable()
export abstract class IClientsRepository extends IRepository<Client> {}
