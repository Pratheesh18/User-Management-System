/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Company } from "src/schemas/company.schema";


@Injectable()
export class CompanyService{
    constructor(@InjectModel(Company.name) private companyModel:Model<Company>){}

    async addCompany(companyDto:any):Promise<Company> {
        const company = new this.companyModel(companyDto);
        return company.save();
    }
    
    async getAllCompanies():Promise<Company[]> {
        return this.companyModel.find().exec();
    }

    async getCompanyId(companyId:string):Promise<Company>{
        return this.companyModel.findById(companyId).exec();
    }
}