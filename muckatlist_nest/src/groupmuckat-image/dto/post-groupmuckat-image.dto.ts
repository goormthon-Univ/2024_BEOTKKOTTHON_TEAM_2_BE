import { ApiProperty } from "@nestjs/swagger";

export class PostGroupmuckatImageDto{
    @ApiProperty({ type: 'string', format: 'binary' })
    image: File;
    @ApiProperty()
    groupmuckat_Id: string;
}