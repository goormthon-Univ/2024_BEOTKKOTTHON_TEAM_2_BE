import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { PatchUserDto, PostUserDto } from './dto';

@ApiTags('유저')
@Controller('/api/user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @ApiOperation({ summary: '로그인'})
    @Post('/login')
    async login(@Body('kakao_Id') kakao_Id: string){

    }

    @ApiOperation({ summary: '회원가입'})
    @Post('/register')
    async register(@Body() postUserDto: PostUserDto){

    }

    @ApiOperation({ summary: '사용자 정보 조회'})
    @Get('/:kakao_Id')
    async getUserInformation(@Param('kakao_Id') kakao_Id: string){

    }

    @ApiOperation({ summary: '사용자 정보 수정(포인트, 닉네임, 학교정보, fcm_Token 포함)'})
    @Patch()
    async patchUserInformation(@Body() patchUserDto: PatchUserDto){

    }

    @ApiOperation({ summary: '탈퇴'})
    @Delete('/:kakao_Id')
    async deleteUserInformation(@Param('kakao_Id') kakao_Id: string){

    }
}
