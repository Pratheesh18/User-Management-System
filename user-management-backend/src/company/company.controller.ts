/* eslint-disable prettier/prettier */
import { Controller,Get,Post,Param,Body } from "@nestjs/common";
import { CompanyService } from "./company.service";


@Controller('companies')
export class CompanyController{
    constructor(private readonly companyService:CompanyService){}
    
    @Post()
    async addCompany(@Body() companyDto:any){
        return this.companyService.addCompany(companyDto)
    }

    @Get()
    async getAllCompanies(){
        return this.companyService.getAllCompanies();
    }

    @Get('/:id')
    async getCompanyId(@Param('id') id:string){
        return this.companyService.getCompanyId(id);
    }
}