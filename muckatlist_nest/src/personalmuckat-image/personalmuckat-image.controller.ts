// import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
// import { PersonalmuckatImageService } from './personalmuckat-image.service';
// import { PostPersonalmuckatImageDto } from './dto';
// import { throwErrorHttp } from 'src/utils';
// import { ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';

// @ApiTags('개인 먹킷리스트 추억 보관함')
// @Controller('/api/personalmuckat-image')
// export class PersonalmuckatImageController {

//     constructor(private readonly personalmuckatImage: PersonalmuckatImageService){}
    
//     @ApiOperation({ summary: '개인 먹킷리스트 추억 보관함 이미지 저장'})
//     @ApiConsumes('multipart/form-data')
//     @Post()
//     async postPersonalmuckatImage(@Body() postPersonalmuckatImageDto: PostPersonalmuckatImageDto){
//         try{

//         }
//         catch (error) {
//             throwErrorHttp(error);
//         }
//     }

//     @ApiOperation({ summary: '개인 먹킷리스트 추억 보관함 이미지 조회'})
//     @Get('/:personalmuckat_Id')
//     async getPersonalmuckatImage(@Param('personalmuckat_Id') personalmuckat_Id: string){
//         try{

//         }
//         catch (error) {
//             throwErrorHttp(error);
//         }
//     }

//     // @Delete('/:/:personalmuckat_Id')
//     // async deleteAllPersonalmuckatImage(@Param('') : string, @Param('personalmuckat_Id') personalmuckat_Id: string){
//     //     try{

//     //     }
//     //     catch (error) {
//     //         throwErrorHttp(error);
//     //     }
//     // }

//     @ApiOperation({ summary: '개인 먹킷리스트 추억 보관함 특정 이미지 삭제'})
//     @Delete('/:personalmuckat_Id/:image_Id')
//     async deletePersonalmuckatImage(@Param('personalmuckat_Id') personalmuckat_Id: string, @Param('image_Id') image_Id: string){
//         try{

//         }
//         catch (error) {
//             throwErrorHttp(error);
//         }
//     }
// }
