import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GroupmuckatService } from './groupmuckat.service';
import { throwError } from 'src/utils';
import { PostGroupmuckatDto, PostGroupmuckatJoinDto } from './dto';

@ApiTags('그룹 먹킷리스트')
@Controller('/api/groupmuckat')
export class GroupmuckatController {
    constructor(private readonly groupmuckatService: GroupmuckatService){}
    
    @Get('/:user_Id')
    async getGroupmuckat(@Param('user_Id') user_Id: string){
        
    }


    @Post()
    async postGroupmuckat(@Body() postGroupmuckatDto: PostGroupmuckatDto){
        try{

        }
        catch (error) {
            throwError(error);
        }
    }

    @Post('/join')
    async postGroupmuckatJoin(@Body() postGroupmuckatJoinDto: PostGroupmuckatJoinDto){
        try{

        }
        catch (error) {
            throwError(error);
        }
    }

    // @Patch()
    // async patchGroupmuckat(@Body() patchGroupmuckatDto: PatchGroupmuckatDto){
    //     try{

    //     }
    //     catch (error) {
    //         throwError(error);
    //     }
    // }

    @Delete('/:groupmuckat_Id/:user_Id')
    async deleteGroupmuckat(@Param('groupmuckat_Id') groupmuckat_Id: string, @Param('user_Id') user_Id: string){
        try{

        }
        catch (error) {
            throwError(error);
        }
    }
}
