import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { throwPrismaError } from 'src/utils';
@Injectable()
export class RestaurantService {
    constructor(private readonly prisma: PrismaClient){}
    async searchCategoryRestaurantInformation(category: string, token: string) {
        try {
            const restaurantList = await this.prisma.restaurant_info.findMany({
                where: {
                    category: category,
                    restaurant_name: {
                        contains: token,
                    },
                }
            });
            return {
                message: '카테고리 맛집 검색 완료',
                statusCode: 200,
                body: restaurantList,
            }

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

    async searchAllRestaurantInformation(token: string) {
        try {
            const restaurantList = await this.prisma.restaurant_info.findMany({
                where: {
                    restaurant_name: {
                        contains: token,
                    },
                }
            });
            return {
                message: '전체 맛집 검색 완료',
                statusCode: 200,
                body: restaurantList,
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

    async getInformationOfRestaurant(restaurant_Id: string) {
        try {
            const restaurantInfo = await this.prisma.restaurant_info.findUnique({
                where: {
                    restaurant_id: restaurant_Id,
                },
            });
            if (restaurantInfo !== null) {
                return {
                    message: '맛집 정보 불러오기 완료',
                    statusCode: 200,
                    body: restaurantInfo,
                };
            }
            else {
                throw new NotFoundException();
            }
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
    async getCategoryRestaurantInformation(category: string) {
        try {
            const restaurantList = await this.prisma.restaurant_info.findMany({
                where: {
                    category: category,
                }
            });
            return {
                message: '카테고리 맛집 불러오기 완료',
                statusCode: 200,
                body: restaurantList,
            };
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
    async getAllRestaurantInformation() {
        try {
            const restaurantList = await this.prisma.restaurant_info.findMany();
            return {
                message: '전체 맛집 불러오기 완료',
                statusCode: 200,
                body: restaurantList,
            };
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
