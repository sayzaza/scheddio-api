import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import expressBasicAuth from 'express-basic-auth';
import { config as dotenvConfig } from 'dotenv';

import { AppModule } from './app.module';

dotenvConfig({ path: '.env' });

const authConfig = {
  user: process.env.DOCS_AUTH_USER || 'dev',
  password: process.env.DOCS_AUTH_PASSWORD || 'secret',
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Scheddio API')
    .setDescription('The Scheddio API documentation')
    .setVersion('1.0')
    .addTag('Scheddio')
    .addBearerAuth()
    .build();

  app.use('/docs', expressBasicAuth({
    challenge: true,
    users: {
      [authConfig.user]: authConfig.password,
    }
  }));

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
