import { Injectable } from '@nestjs/common';
import { PatchUserDto, PostUserDto } from './dto';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
@Injectable()
export class UserService {
    async login(kakao_Id: string) {
        const user = await prisma.user_info.findUnique({
            where: {
                kakao_id: kakao_Id
            },
        })
        throw new Error('Method not implemented.');
    }
    async removeUser(kakao_Id: string) {
        throw new Error('Method not implemented.');
    }
    async modifyUser(patchUserDto: PatchUserDto) {
        throw new Error('Method not implemented.');
    }
    async getUserById(kakao_Id: string) {
        throw new Error('Method not implemented.');
    }
    async saveUser(postUserDto: PostUserDto) {
        throw new Error('Method not implemented.');
    }
}
