import { IEntity } from 'domain/shared/IEntity';

export class Client implements IEntity {
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
    if (!(entity instanceof Client)) return false;

    return true;
  }
}
