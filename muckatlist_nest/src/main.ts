import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // Swagger 옵션 설정
  const options = new DocumentBuilder()
    .setTitle('Nestjs')
    .setDescription('유저, 맛집, 그룹 먹킷리스트, 개인 먹킷리스트, 마음함, 추억보관함 관련 API 명세서가 기록되어 있습니다.')
    .setVersion('1.0')
    .addTag('유저')
    .addTag('개인 먹킷리스트')
    .addTag('개인 먹킷리스트 추억 보관함')
    .addTag('그룹 먹킷리스트')
    .addTag('그룹 먹킷리스트 추억 보관함')
    .addTag('마음함')
    .addTag('맛집')
    .build();

  const document = SwaggerModule.createDocument(app, options, {
    include: [],
    deepScanRoutes: true,
  });
  app.use('/swagger-json', (req, res) => {
    res.json(document);
  });

  SwaggerModule.setup('swagger-ui', app, document);

  await app.listen(3000);
}

bootstrap();
