import { Injectable } from '@nestjs/common';

import { Farmer } from 'domain/models/Farmer';

import { IRepository } from 'application/ports/IRepository';

@Injectable()
export abstract class IFarmersRepository extends IRepository<Farmer> {}
