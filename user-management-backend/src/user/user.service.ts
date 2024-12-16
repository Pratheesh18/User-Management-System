/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import { Company } from 'src/schemas/company.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Company.name) private companyModel: Model<Company>,
  ) {}

  async addUser(userDto:any) : Promise<User> {
    const company = await this.companyModel.findById(userDto.companyId);
    if(!company){
        throw new NotFoundException('Company not found');
    }

    const user = new this.userModel(userDto);
    return user.save();
  }

  async getAllUsers() : Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUsersByCompany(companyId:string) : Promise<User[]> {
    return this.userModel.find({companyId}).exec();
  }

  async updateUser(userId:string,updateDto:any) : Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(
        userId,
        updateDto,
        {new:true},
    );
    if(!updatedUser){
        throw new NotFoundException('User not found')
    }
    
    return updatedUser;
  }

  async deleteUser(userId:string) : Promise<void> {
    const user = await this.userModel.findByIdAndDelete(userId);
    if(!user){
        throw new NotFoundException('User not found');
    }

    const remainingUsers = await this.userModel.find({
        companyId : user.companyId,
    });

    if(remainingUsers.length === 0){
        await this.companyModel.findByIdAndDelete(user.companyId);
    }
  }
}
