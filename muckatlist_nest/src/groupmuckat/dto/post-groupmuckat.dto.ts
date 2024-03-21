import { ApiProperty } from "@nestjs/swagger";

export class PostGroupmuckatDto{
    // @ApiProperty()
    // groupmuckatlist_Id: string;
    @ApiProperty()
    kakao_Id: string;
    @ApiProperty()
    groupmuckat_Name: string;
    // @ApiProperty()
    // room_Master: boolean
}