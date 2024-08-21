import { IEntity } from 'domain/shared/IEntity';

export class Fruit implements IEntity {
  id?: number;
  name: string;
  variety: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(name: string, variety: string) {
    this.name = name;
    this.variety = variety;
  }

  equals(entity: IEntity) {
    if (!(entity instanceof Fruit)) return false;

    return true;
  }
}
