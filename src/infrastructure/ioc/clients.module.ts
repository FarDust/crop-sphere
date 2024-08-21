import { Module } from '@nestjs/common';

import { IClientsRepository } from 'application/ports/IClientsRepository';
import { ClientsUseCases } from 'application/use-cases/ClientsUseCases';
import { ClientsRepository } from 'infrastructure/database/repositories/ClientsRepository';
import { ClientsController } from 'presentation/controllers/ClientsController';

@Module({
  imports: [],
  controllers: [ClientsController],
  providers: [
    ClientsUseCases,
    { provide: IClientsRepository, useClass: ClientsRepository },
  ],
})
export class ClientsModule {}
