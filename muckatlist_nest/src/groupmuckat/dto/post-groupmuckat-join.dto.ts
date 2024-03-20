import { ApiProperty } from "@nestjs/swagger";

export class PostGroupmuckatJoinDto{
    @ApiProperty()
    groupmuckat_Id: string;
    @ApiProperty()
    user_Id: string;
    @ApiProperty()
    groupmuckat_Name: string;
}