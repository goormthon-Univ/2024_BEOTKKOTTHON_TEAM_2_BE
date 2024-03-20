import { Module } from '@nestjs/common';
import { PersonalmuckatController } from './personalmuckat.controller';
import { PersonalmuckatService } from './personalmuckat.service';

@Module({
  controllers: [PersonalmuckatController],
  providers: [PersonalmuckatService]
})
export class PersonalMuckatModule {}
