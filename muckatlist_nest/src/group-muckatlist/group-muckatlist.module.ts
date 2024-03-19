import { Module } from '@nestjs/common';
import { GroupMuckatlistController } from './group-muckatlist.controller';
import { GroupMuckatlistService } from './group-muckatlist.service';

@Module({
  controllers: [GroupMuckatlistController],
  providers: [GroupMuckatlistService]
})
export class GroupMuckatlistModule {}
