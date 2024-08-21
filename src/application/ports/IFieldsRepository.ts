import { Injectable } from '@nestjs/common';

import { Field } from 'domain/models/Field';

import { IRepository } from 'application/ports/IRepository';

@Injectable()
export abstract class IFieldsRepository extends IRepository<Field> {}
