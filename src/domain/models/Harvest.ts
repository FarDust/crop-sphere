import { IEntity } from 'domain/shared/IEntity';

export class Harvest implements IEntity {
  constructor() {}

  equals(entity: IEntity) {
    if (!(entity instanceof Harvest)) return false;

    return true;
  }
}
