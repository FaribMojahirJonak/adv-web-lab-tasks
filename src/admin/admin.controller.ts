import { UseInterceptors, UploadedFile, Body, Controller, Get, Param, Post, Patch, Query, Put, Delete, UsePipes, ValidationPipe} from "@nestjs/common";
import { AdminService } from "./admin.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { MulterError , diskStorage } from "multer";
import { AdminDTO } from "./admin.dto";

@Controller('/admin')
export class AdminController{
    constructor(private readonly adminService: AdminService){}

    @Post('adduser')
    @UsePipes(new ValidationPipe)
    async addUser(@Body() myobj: AdminDTO): Promise<AdminDTO>{
        return this.adminService.addUser(myobj);
    }

    @Get('getuser')
    getUsers(): object{
        return this.adminService.getUsers();
    }

    @Delete('deleteuser/:id')
    deleteUser(@Param('id') id: string): object {
        return this.adminService.deleteUser(id);
    }

    @Put('updateuser/:id')
    async updateUser(@Param('id') id: string, @Body() myobj: AdminDTO): Promise<AdminDTO> {
        return this.adminService.updateUser(id, myobj);
    }

    @Patch('partialupdateuser/:id')
    async partialUpdateUser(@Param('id') id: string, @Body() myobj: Partial<AdminDTO>): Promise<AdminDTO> {
        return this.adminService.partialUpdateUser(id, myobj);
    }

    @Get('getuser/:id')
    getUserById(@Param('id') id: string): object {
        return this.adminService.getUserById(id);
    }

    @Get('getuser/')
    getUsersByNameAndId(@Query('name') name: string, @Query('id') id: string): object {
        return this.adminService.getUsersByNameAndId(name, id);
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
    limits: {fileSize: 30000},
    }))
    
    uploadFile(@UploadedFile() file: Express.Multer.File): object {
        return this.adminService.uploadFile(file);
    }
}