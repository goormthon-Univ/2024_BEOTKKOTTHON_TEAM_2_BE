import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PersonalmuckatImageService } from './personalmuckat-image.service';
import { PostPersonalmuckatImageDto } from './dto';
import { throwErrorHttp } from 'src/utils';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('개인 먹킷리스트 추억 보관함')
@Controller('personalmuckat-image')
export class PersonalmuckatImageController {

    constructor(private readonly personalmuckatImage: PersonalmuckatImageService){}
    
    @ApiOperation({ summary: '개인 먹킷리스트 추억 보관함 이미지 저장'})
    @Post()
    async postPersonalmuckatImage(@Body() postPersonalmuckatImageDto: PostPersonalmuckatImageDto){
        try{

        }
        catch (error) {
            throwErrorHttp(error);
        }
    }

    @ApiOperation({ summary: '개인 먹킷리스트 추억 보관함 이미지 조회'})
    @Get('/:user_Id/:personalmuckat_Id')
    async getPersonalmuckatImage(@Param('user_Id') user_Id: string, @Param('personalmuckat_Id') personalmuckat_Id: string){
        try{

        }
        catch (error) {
            throwErrorHttp(error);
        }
    }

    // @Delete('/:user_Id/:personalmuckat_Id')
    // async deleteAllPersonalmuckatImage(@Param('user_Id') user_Id: string, @Param('personalmuckat_Id') personalmuckat_Id: string){
    //     try{

    //     }
    //     catch (error) {
    //         throwErrorHttp(error);
    //     }
    // }

    @ApiOperation({ summary: '개인 먹킷리스트 추억 보관함 특정 이미지 삭제'})
    @Delete('/:user_Id/:personalmuckat_Id/:image_Id')
    async deletePersonalmuckatImage(@Param('user_Id') user_Id: string, @Param('personalmuckat_Id') personalmuckat_Id: string, @Param('image_Id') image_Id: string){
        try{

        }
        catch (error) {
            throwErrorHttp(error);
        }
    }
}
