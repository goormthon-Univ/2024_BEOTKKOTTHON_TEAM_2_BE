import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PersonalmuckatService } from './personalmuckat.service';
import { PostPersonalmuckatDto } from './dto';
import { throwErrorHttp } from 'src/utils';

@ApiTags('개인 먹킷리스트')
@Controller('/api/personalmuckat')
export class PersonalmuckatController {
    constructor(private readonly personalmuckatService: PersonalmuckatService){}

    @ApiOperation({ summary: '사용자의 모든 개인 먹킷리스트 목록 조회'})
    @Get('/:user_Id')
    async getPersonalmuckat(@Param('user_Id') user_Id: string){
        try{

        }
        catch (error) {
            throwErrorHttp(error);
        }
    }

    @ApiOperation({ summary: '개인 먹킷리스트 생성'})
    @Post()
    async postPersonalmuckat(@Body() postPersonalmuckatDto: PostPersonalmuckatDto){
        try{

        }
        catch (error) {
            throwErrorHttp(error);
        }
    }

    @ApiOperation({ summary: '개인 먹킷리스트 삭제'})
    @Delete('/:user_Id/:personalmuckat_Id')
    async deletePersonalmuckat(@Param('user_Id') user_Id: string, @Param('personalmuckat_Id') groupmuckat_Id: string){
        try{

        }
        catch (error) {
            throwErrorHttp(error);
        }
    }
}
