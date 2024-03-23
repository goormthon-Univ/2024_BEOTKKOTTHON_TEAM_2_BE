import { Global, Module } from '@nestjs/common';
import { RestaurantModule } from './restaurant/restaurant.module';
import { GroupMuckatModule } from './groupmuckat/groupmuckat.module';
// import { PersonalMuckatModule } from './personalmuckat/personalmuckat.module';
// import { FavoriteModule } from './favorite/favorite.module';
import { GroupmuckatImageModule } from './groupmuckat-image/groupmuckat-image.module';
// import { PersonalmuckatImageModule } from './personalmuckat-image/personalmuckat-image.module';
import { UserModule } from './user/user.module';
import { PrismaClient } from '@prisma/client';
// import { FcmModule } from './fcm/fcm.module';
import { ScheduleModule } from '@nestjs/schedule';
import { NotificationCronJob } from './notification-cron-job';
import { FcmService } from './fcm.service';

@Global()
@Module({
  imports: [
    RestaurantModule,
    GroupMuckatModule,
    // PersonalMuckatModule,
    // FavoriteModule,
    GroupmuckatImageModule,
    // PersonalmuckatImageModule,
    UserModule,
    // FcmModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [],
  providers: [PrismaClient, NotificationCronJob, FcmService],
  exports: [PrismaClient],
})
export class AppModule {
}
