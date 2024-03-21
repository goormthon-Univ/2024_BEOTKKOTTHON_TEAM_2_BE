import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GroupmuckatService } from './groupmuckat.service';
import { throwErrorHttp } from 'src/utils';
import { PostGroupmuckatDto, PostGroupmuckatJoinDto } from './dto';

@ApiTags('그룹 먹킷리스트')
@Controller('/api/groupmuckat')
export class GroupmuckatController {
    constructor(private readonly groupmuckatService: GroupmuckatService){}
    
    @ApiOperation({ summary: '사용자가 참가하고 있는 모든 그룹 먹킷리스트 목록 조회'})
    @Get('/:kakao_Id')
    async getGroupmuckat(@Param('kakao_Id') kakao_Id: string){
        
    }


    @ApiOperation({ summary: '그룹 먹킷리스트 생성'})
    @Post()
    async postGroupmuckat(@Body() postGroupmuckatDto: PostGroupmuckatDto){
        try{

        }
        catch (error) {
            throwErrorHttp(error);
        }
    }

    @ApiOperation({ summary: '특정 그룹 먹킷리스트 가입'})
    @Post('/join')
    async postGroupmuckatJoin(@Body() postGroupmuckatJoinDto: PostGroupmuckatJoinDto){
        try{

        }
        catch (error) {
            throwErrorHttp(error);
        }
    }

    // @Patch()
    // async patchGroupmuckat(@Body() patchGroupmuckatDto: PatchGroupmuckatDto){
    //     try{

    //     }
    //     catch (error) {
    //         throwErrorHttp(error);
    //     }
    // }

    @ApiOperation({ summary: '사용자 그룹 먹킷리스트 삭제(사용자가 해당 그룹먹킷리스트 방장이면 그룹먹킷리스트 아예 삭제)'})
    @Delete('/:groupmuckat_Id/:kakao_Id')
    async deleteGroupmuckat(@Param('groupmuckat_Id') groupmuckat_Id: string, @Param('kakao_Id') kakao_Id: string){
        try{

        }
        catch (error) {
            throwErrorHttp(error);
        }
    }
}
