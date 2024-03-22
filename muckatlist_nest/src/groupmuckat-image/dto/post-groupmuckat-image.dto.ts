import { ApiProperty } from "@nestjs/swagger";

export class PostGroupmuckatImageDto{
    @ApiProperty({ type: 'string', format: 'binary' })
    image: any;
    @ApiProperty()
    groupmuckat_Id: string;
}