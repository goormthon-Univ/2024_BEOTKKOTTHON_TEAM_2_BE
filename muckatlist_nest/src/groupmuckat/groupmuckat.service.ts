import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PostGroupmuckatDto, PostGroupmuckatJoinDto } from './dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { throwPrismaError } from 'src/utils';
import { PrismaClient } from '@prisma/client';
import { uuid } from 'src/utils';
@Injectable()
export class GroupmuckatService {
    constructor(private readonly prisma: PrismaClient){}
    async removeMuckatlist(groupmuckat_Id: string, kakao_Id: string) {
        try{
            const groupmuckat_User = await this.prisma.muckat_user.findFirst({
                where: {
                    muckat_id: groupmuckat_Id,
                    kakao_id: kakao_Id,
                }
            });
            if (groupmuckat_User !== null){
                if(groupmuckat_User.room_master){
                    await this.prisma.muckat_list.delete({
                        where: {
                            muckat_id: groupmuckat_Id
                        }
                    });
                    return {
                        message: '그룹 먹킷리스트 전체 삭제 완료',
                        statusCode: 200,
                    }
                }
                else{
                    await this.prisma.muckat_user.deleteMany({
                        where: {
                            muckat_id: groupmuckat_Id,
                            kakao_id: kakao_Id,
                        }
                    });
                    return {
                        message: '그룹 먹킷리스트 회원 삭제 완료',
                        statusCode: 200,
                    }
                }
            }
            else{
                throw new BadRequestException();
            }
        }
        catch (error) {
            console.error('서비스: ', error);
            if (error instanceof PrismaClientKnownRequestError) {
                throwPrismaError(error);
            }
            else if (error instanceof BadRequestException)
                throw new BadRequestException();
            else
                throw new InternalServerErrorException();
        }
    }

    async joinMuckatlist(postGroupmuckatJoinDto: PostGroupmuckatJoinDto) {
        try{
            const groupmuckat = await this.prisma.muckat_list.findUnique({
                where: {
                    muckat_id: postGroupmuckatJoinDto.groupmuckat_Id,
                }
            });
            if(groupmuckat !== null){
                const user = await this.prisma.muckat_user.create({
                    data: {
                        muckat_user_id: uuid(),
                        muckat_id: postGroupmuckatJoinDto.groupmuckat_Id,
                        kakao_id: postGroupmuckatJoinDto.kakao_Id,
                        room_master: false,
                    }
                });
                return {
                    message: '그룹 먹킷리스트 회원 등록 완료',
                    statusCode: 201,
                };
            }
            else{
                throw new BadRequestException();
            }
        }
        catch (error) {
            console.error('서비스: ', error);
            if (error instanceof PrismaClientKnownRequestError) {
                throwPrismaError(error);
            }
            else if (error instanceof BadRequestException)
                throw new BadRequestException();
            else
                throw new InternalServerErrorException();
        }
    }


    async createMuckatlist(postGroupmuckatDto: PostGroupmuckatDto) {
        try{
            const muckat_Id = uuid();
            const groupmuckat = await this.prisma.muckat_list.create({
                data: {
                    muckat_id: muckat_Id,
                    group_name: postGroupmuckatDto.groupmuckat_Name,
                }
            })
            if(groupmuckat !== null){
                const groupmuckat_User = await this.prisma.muckat_user.create({
                    data: {
                        muckat_user_id: uuid(),
                        muckat_id: muckat_Id,
                        kakao_id: postGroupmuckatDto.kakao_Id,
                        room_master: true,
                    }
                });
                return {
                    message: '그룹 먹킷리스트 생성 완료',
                    statusCode: 201,
                }
            }
            
        }
        catch (error) {
            console.error('서비스: ', error);
            if (error instanceof PrismaClientKnownRequestError) {
                throwPrismaError(error);
            }
            else
                throw new InternalServerErrorException();
        }
    }
    async getAllMuckatlistById(kakao_Id: string) {
        try{
            const groupmuckatList = await this.prisma.muckat_user.findMany({
                where: {
                    kakao_id: kakao_Id,
                }
            });
            return {
                message: '사용자의 그룹 먹킷리스트 목록 불러오기 완료',
                statusCode: 200,
                body: groupmuckatList,
            }
        }
        catch (error) {
            console.error('서비스: ', error);
            if (error instanceof PrismaClientKnownRequestError) {
                throwPrismaError(error);
            }
            else
                throw new InternalServerErrorException();
        }
    }
    
}
