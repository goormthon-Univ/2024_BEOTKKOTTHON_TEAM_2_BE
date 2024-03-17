import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // Swagger 옵션 설정
  const options = new DocumentBuilder()
    .setTitle('Your API')
    .setDescription('API description')
    .setVersion('1.0')
    .build();

  // Swagger 문서 생성 및 노출
  const document = SwaggerModule.createDocument(app, options);
  app.use('/swagger-json', (req, res) => {
    res.json(document);
  });

  // SwaggerService를 사용하여 서버들의 Swagger JSON을 가져와 병합
  // 병합된 Swagger JSON을 Swagger UI에 설정
  SwaggerModule.setup('swagger-ui', app, document);

  // 앱 실행
  await app.listen(3000);
}

bootstrap();
