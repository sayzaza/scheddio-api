import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post, UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth, ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiProperty,
  ApiTags,
} from '@nestjs/swagger';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SuccessResponse } from '../../shared/types';
import { CustomerUserDto } from './dto/customer-user.dto';
import { AuthGuard } from '../auth/auth.guard';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({
    summary: 'User signup API',
    description: 'User signup endpoint with an email and a password',
  })
  @ApiOkResponse({
    type: () => SuccessResponse,
    description: 'User created successfully.',
  })
  @ApiBadRequestResponse({
    description: 'Request parameters are invalid. Please check the schema for details',
  })
  @ApiForbiddenResponse({
    description: 'The email is already taken or failed by other reason'
  })
  @Post()
  async create(
    @Body() payload: CreateUserDto,
  ): Promise<SuccessResponse<CustomerUserDto>> {
    const user = await this.usersService.create(payload);
    return {
      success: true,
      payload: user.toDto(),
    };
  }

  @ApiOperation({
    summary: 'List All Users',
    description: 'Get a list of all users. No pagination provided yet. Will be implemented later on',
  })
  @ApiOkResponse({
    type: () => CustomerUserDto,
    isArray: true,
  })
  @ApiForbiddenResponse({
    description: 'Authentication token is not provided or already expired'
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get()
  async findAll(): Promise<CustomerUserDto[]> {
    const users = await this.usersService.findAll();
    return users.map(user => user.toDto());
  }

  @ApiOperation({
    summary: 'Detail of a user by id',
    description: 'Get user\'s details',
  })
  @ApiOkResponse({ type: () => CustomerUserDto })
  @ApiForbiddenResponse({
    description: 'Authentication token is not provided or already expired'
  })
  @ApiBearerAuth()
  @ApiParam({ name: 'id', description: 'id of a user to get the detailed information. Authorization guard should be added but not yet implemented' })
  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  /*
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }*/
}
