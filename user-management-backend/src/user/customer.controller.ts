import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  async createCustomer(@Body() customerDto: any) {
    return this.customerService.createCustomer(customerDto);
  }

  @Get()
  async getAllCustomers() {
    return this.customerService.getAllCustomers();
  }

  @Put('/:id')
  async updateCustomer(@Param('id') id: string, @Body() updateDto: any) {
    return this.customerService.updateCustomer(id, updateDto);
  }

  @Delete('/:id')
  async deleteCustomer(@Param('id') id: string) {
    return this.customerService.deleteCustomer(id);
  }

  @Get('search')
  async searchCustomers(
    @Query('name') name?: string,
    @Query('email') email?: string,
  ) {
    console.log('Hit search endpoint');
    console.log('Search Parameters:', { name, email });
    return this.customerService.searchCustomers({ name, email });
  }
}
