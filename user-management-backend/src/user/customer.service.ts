/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from 'src/schemas/customer.schema';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
  ) {}

  
  async createCustomer(customerDto: any): Promise<Customer> {
    const { name, email } = customerDto;

    if (!name || !email) {
      throw new NotFoundException('Name and email are required');
    }

    const newCustomer = new this.customerModel({ name, email });
    return newCustomer.save();
  }

  
  async getAllCustomers(): Promise<Customer[]> {
    return this.customerModel.find().exec();
  }

  
  async updateCustomer(customerId: string, updateDto: any): Promise<Customer> {
    const updatedCustomer = await this.customerModel.findByIdAndUpdate(
      customerId,
      updateDto,
      { new: true },
    );
    if (!updatedCustomer) {
      throw new NotFoundException('Customer not found');
    }

    return updatedCustomer;
  }

  
  async deleteCustomer(customerId: string): Promise<void> {
    const customer = await this.customerModel.findByIdAndDelete(customerId);
    if (!customer) {
      throw new NotFoundException('Customer not found');
    }
  }

  async searchCustomers(searchParams:{name?:string;email?:string}):Promise<Customer[]> {
    const {name,email} = searchParams;
    const filter : any ={};

    if(name){
      filter.name = {$regex:name,$options:'i'};
    }

    if(email){
      filter.email = {$regex:email,$options:'i'};
    }

    return this.customerModel.find(filter).exec();
  }

}
