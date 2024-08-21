import { Expose, plainToClass } from 'class-transformer';
import { Client } from 'domain/models/Client';
import { ApiProperty } from '@nestjs/swagger';

export class ClientDTO {
  @Expose()
  @ApiProperty({
    description: 'The id of the client',
    example: 1,
  })
  id: number;

  @Expose()
  @ApiProperty({
    description: 'Client name',
    example: 'John',
  })
  name: string;

  @Expose()
  @ApiProperty({
    description: 'Client Last Name',
    example: 'Doe',
  })
  lastName: string;

  @Expose()
  @ApiProperty({
    description: 'Client email',
    example: 'john.doe@email.com',
  })
  email: string;

  @Expose()
  @ApiProperty({ description: 'The crational date of the client' })
  createdAt: Date;

  @Expose()
  @ApiProperty({ description: 'The date of the last client update' })
  updatedAt: Date;

  static toDTO(client: Client): ClientDTO {
    return plainToClass(ClientDTO, client, { excludeExtraneousValues: true });
  }
}
