import { Controller, Param, Get, Post, Body } from '@nestjs/common';
import {
  ApiTags,
  ApiParam,
  ApiOperation,
  ApiCreatedResponse,
  ApiUnprocessableEntityResponse,
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';

import { ClientsUseCases } from 'application/use-cases/ClientsUseCases';
import { ClientDTO } from 'presentation/dtos/clients/ClientDTO';

@ApiTags('Clients')
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsUseCases: ClientsUseCases) {}

  @Get(':id')
  @ApiOperation({
    summary: 'Find one client by id',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'The client id',
  })
  @ApiOkResponse({ description: 'Client founded.', type: ClientDTO })
  @ApiNotFoundResponse({
    description: 'Client cannot be founded.',
  })
  async get(@Param('id') id: string): Promise<ClientDTO> {
    const client = await this.clientsUseCases.getClientById(parseInt(id, 10));

    return ClientDTO.toDTO(client);
  }

  @Get()
  @ApiOperation({
    summary: 'Find all clients',
  })
  @ApiOkResponse({ description: 'All client`s fetched.', type: [ClientDTO] })
  async getAll(): Promise<ClientDTO[]> {
    const clients = await this.clientsUseCases.getClients();

    return clients.map(client => ClientDTO.toDTO(client));
  }
}