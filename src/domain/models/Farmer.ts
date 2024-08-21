import { IEntity } from 'domain/shared/IEntity';

export class Farmer implements IEntity {
  id?: number;
  name: string;
  lastName: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(name: string, lastName: string, email: string) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
  }

  equals(entity: IEntity) {
    if (!(entity instanceof Farmer)) return false;

    return true;
  }
}
