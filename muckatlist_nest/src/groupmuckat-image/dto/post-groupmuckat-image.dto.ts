import { ApiProperty } from "@nestjs/swagger";

export class PostGroupmuckatImageDto{
    @ApiProperty()
    image: File;
    @ApiProperty()
    groupmuckat_Id: string;
}