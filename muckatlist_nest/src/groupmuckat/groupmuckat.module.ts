import { Module } from '@nestjs/common';
import { GroupmuckatController } from './groupmuckat.controller';
import { GroupmuckatService } from './groupmuckat.service';

@Module({
  controllers: [GroupmuckatController],
  providers: [GroupmuckatService]
})
export class GroupMuckatModule {}
