import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PostGroupmuckatDto, PostGroupmuckatJoinDto } from './dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { throwPrismaError } from 'src/utils';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class GroupmuckatService {
    constructor(private readonly prisma: PrismaClient){}
    async removeMuckatlist(groupmuckat_Id: string, kakao_Id: string) {
        try{

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
    async joinMuckatlist(postGroupmuckatJoinDto: PostGroupmuckatJoinDto) {
        try{

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
    async createMuckatlist(postGroupmuckatDto: PostGroupmuckatDto) {
        try{

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
    async getAllMuckatlistById(kakao_Id: string) {
        try{

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
    
}
