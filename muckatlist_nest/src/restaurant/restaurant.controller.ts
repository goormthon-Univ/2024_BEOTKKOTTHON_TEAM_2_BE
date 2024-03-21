import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RestaurantService } from './restaurant.service';
import { throwErrorHttp } from 'src/utils';

@ApiTags('맛집')
@Controller('restaurant')
export class RestaurantController {
    constructor(private readonly restaurantService: RestaurantService){}

    @ApiOperation({ summary: '모든 맛집 목록 조회'})
    @Get()
    async getAllRestaurant(){
      try{

      } 
      catch (error) {
        throwErrorHttp(error);
      } 
    }

    @ApiOperation({ summary: '맛집 상세 조회'})
    @Get('/:restaurant_Id')
    async getRestaurantInformation(@Param('restaurant_Id') restaurant_Id: string){
        try{

        } 
        catch (error) {
          throwErrorHttp(error);
        } 
    }

    @ApiOperation({ summary: '카테고리 별 맛집 조회'})
    @Get('/:category')
    async getCategoryRestaurant(@Param('category') category: string){
        try{

        } 
        catch (error) {
          throwErrorHttp(error);
        } 
    }
}
