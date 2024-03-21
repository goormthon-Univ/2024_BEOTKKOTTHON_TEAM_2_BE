import { ApiProperty } from "@nestjs/swagger"
export class PostFavoriteDto {
    @ApiProperty()
    kakao_Id: string;
    @ApiProperty()
    restaurant_Id: string;
}