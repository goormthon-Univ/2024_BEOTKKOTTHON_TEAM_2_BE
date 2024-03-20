import { ApiProperty } from "@nestjs/swagger";

export class PostPersonalmuckatImageDto{
    @ApiProperty()
    image: File;
    @ApiProperty()
    personalmuckat_Id: string;
    @ApiProperty()
    user_Id: string;
}