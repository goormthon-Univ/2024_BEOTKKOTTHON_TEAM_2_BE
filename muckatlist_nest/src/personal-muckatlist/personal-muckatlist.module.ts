import { Module } from '@nestjs/common';
import { PersonalMuckatlistController } from './personal-muckatlist.controller';
import { PersonalMuckatlistService } from './personal-muckatlist.service';

@Module({
  controllers: [PersonalMuckatlistController],
  providers: [PersonalMuckatlistService]
})
export class PersonalMuckatlistModule {}
