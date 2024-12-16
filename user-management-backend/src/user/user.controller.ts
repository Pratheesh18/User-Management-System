import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async addUser(@Body() userDto: any) {
    return this.userService.addUser(userDto);
  }

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get('/company/:companyId')
  async getUsersByCompany(@Param('companyId') companyId: string) {
    return this.userService.getUsersByCompany(companyId);
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() updateDto: any) {
    return this.userService.updateUser(id, updateDto);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
