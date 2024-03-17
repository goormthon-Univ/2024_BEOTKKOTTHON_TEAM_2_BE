import { Module } from '@nestjs/common';
import { PersonalMuckatlistController } from './personal-muckatlist.controller';

@Module({
  controllers: [PersonalMuckatlistController]
})
export class PersonalMuckatlistModule {}
