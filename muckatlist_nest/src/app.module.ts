import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantModule } from './restaurant/restaurant.module';
import { GroupMuckatlistModule } from './group-muckatlist/group-muckatlist.module';
import { PersonalMuckatlistModule } from './personal-muckatlist/personal-muckatlist.module';
import { FavoritelistModule } from './favoritelist/favoritelist.module';
import { GroupmuckatImageModule } from './groupmuckat-image/groupmuckat-image.module';
import { PersonalmuckatImageModule } from './personalmuckat-image/personalmuckat-image.module';
@Module({
  imports: [
    RestaurantModule,
    GroupMuckatlistModule,
    PersonalMuckatlistModule,
    FavoritelistModule,
    GroupmuckatImageModule,
    PersonalmuckatImageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
