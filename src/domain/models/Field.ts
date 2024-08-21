import { IEntity } from 'domain/shared/IEntity';

export class Field implements IEntity {
  id?: number;
  name: string;
  location: string;

  createdAt?: Date;
  updatedAt?: Date;
  constructor(name: string, location: string) {
    this.name = name;
    this.location = location;
  }

  equals(entity: IEntity) {
    if (!(entity instanceof Field)) return false;

    return true;
  }
}
