import { ApiProperty } from "@nestjs/swagger"
export class PostFavoriteDto {
    @ApiProperty()
    restaurant_Id: string;
    @ApiProperty()
    user_Id: string;
}