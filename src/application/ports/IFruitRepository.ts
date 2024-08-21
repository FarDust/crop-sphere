import { Injectable } from '@nestjs/common';

import { Fruit } from 'domain/models/Fruit';

import { IRepository } from 'application/ports/IRepository';

@Injectable()
export abstract class IFruitsRepository extends IRepository<Fruit> {}
