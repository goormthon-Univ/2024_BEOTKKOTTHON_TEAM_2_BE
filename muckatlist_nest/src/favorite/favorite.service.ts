import { Injectable } from '@nestjs/common';
import { PostFavoriteDto } from './dto';

@Injectable()
export class FavoriteService {
    async getUserFavoriteInformation(user_Id: string){

    }

    async postUserFavoriteInformation(postFavoriteDto: PostFavoriteDto){
        //uuid 생성
    }

    async deleteUserFavoriteInformation(user_Id: string, restaurant_Id: string){

    }
}
