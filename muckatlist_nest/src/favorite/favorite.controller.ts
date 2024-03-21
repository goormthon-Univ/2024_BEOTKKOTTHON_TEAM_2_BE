import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FavoriteService } from './favorite.service';
import { PostFavoriteDto } from './dto';
import { throwErrorHttp } from 'src/utils';

@ApiTags('마음함')
@Controller('/api/favorite')
export class FavoriteController {
    constructor(private readonly favoriteService: FavoriteService){}


    @Get('/:user_Id')
    async getUserFavoriteLis(@Param('user_Id') user_Id: string){
        try{
            return await this.favoriteService.getUserFavoriteInformation(user_Id);
        }
        catch (error) {
            throwErrorHttp(error)
        }
    }

    @Post()
    async postUserFavorite(@Body() postFavoriteDto: PostFavoriteDto){
        try{
            await this.favoriteService.postUserFavoriteInformation(postFavoriteDto);
        }
        catch (error) {
            throwErrorHttp(error)
        }
    }

    @Delete('/:user_Id/:restaurant_Id')
    async deleteUserFavorite(@Param('user_Id') user_Id: string, @Param('restaurant_Id') restaurant_Id: string){
        try{
            await this.favoriteService.deleteUserFavoriteInformation(user_Id, restaurant_Id);
        }
        catch (error) {
            throwErrorHttp(error);
        }
    }
}
