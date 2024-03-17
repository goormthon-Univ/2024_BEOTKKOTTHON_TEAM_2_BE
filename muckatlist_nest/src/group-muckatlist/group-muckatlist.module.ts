import { Module } from '@nestjs/common';
import { GroupMuckatlistController } from './group-muckatlist.controller';

@Module({
  controllers: [GroupMuckatlistController]
})
export class GroupMuckatlistModule {}
