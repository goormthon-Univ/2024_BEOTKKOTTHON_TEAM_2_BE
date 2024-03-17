import { Module } from '@nestjs/common';
import { FavoritelistController } from './favoritelist.controller';

@Module({
  controllers: [FavoritelistController]
})
export class FavoritelistModule {}
