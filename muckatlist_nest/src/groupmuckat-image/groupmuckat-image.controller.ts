import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GroupmuckatImageService } from './groupmuckat-image.service';
import { PostGroupmuckatImageDto } from './dto';
import { throwErrorHttp } from 'src/utils';

@ApiTags('그룹 먹킷리스트 추억 보관함')
@Controller('/api/groupmuckat-image')
export class GroupmuckatImageController {
    constructor(private readonly groupmuckatImage: GroupmuckatImageService){}
    
    @Post()
    async postGroupmuckatImage(@Body() postGroupmuckatImageDto: PostGroupmuckatImageDto){
        try{

        }
        catch (error) {
            throwErrorHttp(error);
        }
    }

    @Get('/:groupmuckat_Id')
    async getGroupmuckatImage(@Param('groupmuckat_Id') groupmuckat_Id: string){
        try{

        }
        catch (error) {
            throwErrorHttp(error);
        }
    }

    @Delete('/:groupmuckat_Id')
    async deleteAllGroupmuckatImage(@Param('groupmuckat_Id') groupmuckat_Id: string){
        try{

        }
        catch (error) {
            throwErrorHttp(error);
        }
    }

    @Delete('/:groupmuckat_Id/:image_Id')
    async deleteGroupmuckatImage(@Param('groupmuckat_Id') groupmuckat_Id: string, @Param('image_Id') image_Id: string){
        try{

        }
        catch (error) {
            throwErrorHttp(error);
        }
    }

}
