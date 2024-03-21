import { ApiProperty } from "@nestjs/swagger";

export class PatchUserDto{
    @ApiProperty()
    kakao_Id: string;
    @ApiProperty()
    user_Id?: string;
    @ApiProperty()
    university_Name?: string;
    @ApiProperty()
    fcm_Token?: string;
    @ApiProperty()
    point?: number;
}