import { Module } from '@nestjs/common';
import { FavoritelistController } from './favoritelist.controller';
import { FavoritelistService } from './favoritelist.service';

@Module({
  controllers: [FavoritelistController],
  providers: [FavoritelistService]
})
export class FavoritelistModule {}
