import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { FcmService } from './fcm.service';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class NotificationCronJob {
    constructor(private readonly fcmService: FcmService, private readonly prisma: PrismaClient) { }

    // 매일 오전 9시에 실행되도록 크론잡을 설정합니다.
    @Cron(CronExpression.EVERY_MINUTE)
    async sendDailyNotification() {
        const date = new Date();
        const truncatedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes());

        const schedule = await this.prisma.muckat_schedule.findMany({
            where: {
                timestamp: truncatedDate,
            },
            include: {
                muckat_list: true,
            }
        });
        if (schedule.length === 0) {
            console.log("에정된 예약이 없습니다.");
            return;
        }
        else {
            try {
                schedule.forEach(async (key) => {
                    const token = key.restaurant_id;
                    const restaurant_Name = await this.prisma.restaurant_info.findUnique({
                        where: {
                            restaurant_id: token,
                        },
                        select: {
                            restaurant_name: true,
                        }
                    });
                    const user_List = await this.prisma.muckat_user.findMany({
                        where: {
                            muckat_id: key.muckat_id,
                        },
                        include: {
                            user_info: true,
                        },
                    })

                    user_List.forEach(async (key) => {
                        const token = key.user_info.fcm_token;
                        const title = `두근두근! 맛있는 ${restaurant_Name}에서의 식사 시간이에요!`;
                        const body = `약속한 시간이 되었어요! 모임 시작!`;
                        await this.fcmService.sendNotification(token, title, body);
                    })
                })
            }
            catch (error) {
                console.error('error: ', error);
            }

        }

    }
}