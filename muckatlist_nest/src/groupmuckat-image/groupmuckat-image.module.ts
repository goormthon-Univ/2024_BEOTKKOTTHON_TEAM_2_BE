import { Module } from '@nestjs/common';
import { GroupmuckatImageController } from './groupmuckat-image.controller';
import { GroupmuckatImageService } from './groupmuckat-image.service';

@Module({
  controllers: [GroupmuckatImageController],
  providers: [GroupmuckatImageService]
})
export class GroupmuckatImageModule {}
