import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FavoriteService } from './favorite.service';
import { PostFavoriteDto } from './dto';
import { throwErrorHttp } from 'src/utils';

@ApiTags('마음함')
@Controller('/api/favorite')
export class FavoriteController {
    constructor(private readonly favoriteService: FavoriteService){}


    @ApiOperation({ summary: '사용자 마음함 조회'})
    @Get('/:kakao_Id')
    async getUserFavoriteLis(@Param('kakao_Id') kakao_Id: string){
        try{
            return await this.favoriteService.getUserFavoriteInformation(kakao_Id);
        }
        catch (error) {
            throwErrorHttp(error)
        }
    }

    @ApiOperation({ summary: '마음함 항목 생성'})
    @Post()
    async postUserFavorite(@Body() postFavoriteDto: PostFavoriteDto){
        try{
            await this.favoriteService.postUserFavoriteInformation(postFavoriteDto);
        }
        catch (error) {
            throwErrorHttp(error)
        }
    }

    @ApiOperation({ summary: '마음함 항목 삭제'})
    @Delete('/:kakao_Id/:restaurant_Id')
    async deleteUserFavorite(@Param('kakao_Id') kakao_Id: string, @Param('restaurant_Id') restaurant_Id: string){
        try{
            await this.favoriteService.deleteUserFavoriteInformation(kakao_Id, restaurant_Id);
        }
        catch (error) {
            throwErrorHttp(error);
        }
    }
}
