import { ApiProperty } from "@nestjs/swagger";

export class PostGroupmuckatImageDto{
    @ApiProperty({ type: 'string', format: 'binary' })
    file: any;
    @ApiProperty()
    groupmuckat_Id: string;
}