import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AppModule } from 'src/app.module';
import { PrismaClient } from '@prisma/client';


@Module({
  controllers: [UserController],
  providers: [UserService],  
})
export class UserModule {}
