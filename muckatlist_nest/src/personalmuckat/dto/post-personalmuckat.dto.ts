import { ApiProperty } from "@nestjs/swagger";

export class PostPersonalmuckatDto{
    @ApiProperty()
    personalmuckatlist_Id: string;
    @ApiProperty()
    user_Id: string;
    @ApiProperty()
    personalmuckatlist_Name: string;
}