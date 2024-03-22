import { Module } from '@nestjs/common';
import { GroupmuckatImageController } from './groupmuckat-image.controller';
import { GroupmuckatImageService } from './groupmuckat-image.service';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [GroupmuckatImageController],
  providers: [GroupmuckatImageService],
})
export class GroupmuckatImageModule {}
