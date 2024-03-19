import { Module } from '@nestjs/common';
import { PersonalmuckatImageController } from './personalmuckat-image.controller';
import { PersonalmuckatImageService } from './personalmuckat-image.service';

@Module({
  controllers: [PersonalmuckatImageController],
  providers: [PersonalmuckatImageService]
})
export class PersonalmuckatImageModule {}
