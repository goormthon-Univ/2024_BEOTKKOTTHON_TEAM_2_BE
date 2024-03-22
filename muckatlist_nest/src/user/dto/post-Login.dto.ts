import { ApiProperty } from "@nestjs/swagger";

export class LoginDto{
    @ApiProperty()
    kakao_Id: string;
}