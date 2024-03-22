import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { LoginDto, PatchUserDto, PostUserDto } from './dto';
import { throwErrorHttp } from 'src/utils';

@ApiTags('유저')
@Controller('/api/user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @ApiOperation({ summary: '로그인'})
    @HttpCode(200)
    @Post('/login')
    async login(@Body() loginDto: LoginDto){
        try{
            return await this.userService.login(loginDto.kakao_Id);
        }
        catch (error) {
            throwErrorHttp(error);
        }
    }

    @ApiOperation({ summary: '회원가입'})
    @Post('/register')
    async register(@Body() postUserDto: PostUserDto){
        try{
            return await this.userService.saveUser(postUserDto);
        }
        catch (error) {
            throwErrorHttp(error);
        }
    }

    @ApiOperation({ summary: '사용자 정보 조회'})
    @Get('/:kakao_Id')
    async getUserInformation(@Param('kakao_Id') kakao_Id: string){
        try{
            return await this.userService.getUserById(kakao_Id);
        }
        catch (error) {
            throwErrorHttp(error);
        }
    }

    // @ApiOperation({ summary: '사용자 정보 수정(포인트, 닉네임, 학교정보, fcm_Token 포함)'})
    // @Patch()
    // async patchUserInformation(@Body() patchUserDto: PatchUserDto){
    //     try{
    //         return await this.userService.modifyUser(patchUserDto);
    //     }
    //     catch (error) {
    //         throwErrorHttp(error);
    //     }
    // }

    // @ApiOperation({ summary: '탈퇴'})
    // @Delete('/:kakao_Id')
    // async deleteUserInformation(@Param('kakao_Id') kakao_Id: string){
    //     try{
    //         return await this.userService.removeUser(kakao_Id);
    //     }
    //     catch (error) {
    //         throwErrorHttp(error);
    //     }
    // }
}
