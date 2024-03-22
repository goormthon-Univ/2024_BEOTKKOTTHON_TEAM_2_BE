import { ConflictException, HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PatchUserDto, PostUserDto } from './dto';
import { PrismaClient } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { throwPrismaError } from 'src/utils';
@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaClient){}
    async login(kakao_Id: string) {
        try {
            const user = await this.prisma.user_info.findUnique({
                where: {
                    kakao_id: kakao_Id
                },
            });
            if (user !== null) {
                return {
                    message: '로그인 완료',
                    statusCode: 200,
                    // body: user
                };
            }
            else
                throw new NotFoundException();
        }
        catch (error) {
            console.error('서비스: ', error);
            if (error instanceof PrismaClientKnownRequestError) {
                throwPrismaError(error);
            }
            else if (error instanceof NotFoundException)
                throw new NotFoundException();
            else
                throw new InternalServerErrorException();
        }

    }

    async getUserById(kakao_Id: string) {
        try {
            const user = await this.prisma.user_info.findUnique({
                where: {
                    kakao_id: kakao_Id
                },
            });
            if (user !== null) {
                return {
                    message: '유저 정보 조회 완료',
                    statusCode: 200,
                    body: user
                };
            }
            else
                throw new NotFoundException();
        }
        catch (error) {
            console.error('서비스: ', error);
            if (error instanceof PrismaClientKnownRequestError) {
                throwPrismaError(error);
            }
            else if (error instanceof NotFoundException)
                throw new NotFoundException();
            else
                throw new InternalServerErrorException();
        }
    }

    async saveUser(postUserDto: PostUserDto) {
        try {
            const user = await this.prisma.user_info.findUnique({
                where: {
                    kakao_id: postUserDto.kakao_Id
                },
            });
            if (user !== null)
                throw new ConflictException();
            else if (user === null) {
                const saveUser = await this.prisma.user_info.create({
                    data: {
                        kakao_id: postUserDto.kakao_Id,
                        fcm_token: postUserDto.fcm_Token,
                        user_id: postUserDto.user_Id,
                        university_name: postUserDto.university_Name,
                    }
                });
                if (saveUser !== null) {
                    return {
                        message: '회원가입 완료',
                        statusCode: 201,
                        body: saveUser
                    }
                }
                else {
                    throw new InternalServerErrorException();
                }
            }
        }
        catch (error) {
            console.error('서비스: ', error);
            if (error instanceof PrismaClientKnownRequestError) {
                throwPrismaError(error);
            }
            else if (error instanceof ConflictException)
                throw new ConflictException();
            else
                throw new InternalServerErrorException();
        }
    }
}

// async removeUser(kakao_Id: string) {
//     throw new Error('Method not implemented.');
// }
// async modifyUser(patchUserDto: PatchUserDto) {
//     throw new Error('Method not implemented.');
// }
