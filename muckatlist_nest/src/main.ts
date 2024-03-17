import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // Swagger 옵션 설정
  const options = new DocumentBuilder()
    .setTitle('네스트 프로젝트 API')
    .setDescription('API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  app.use('/swagger-json', (req, res) => {
    res.json(document);
  });

  SwaggerModule.setup('swagger-ui', app, document);

  await app.listen(3000);
}

bootstrap();
