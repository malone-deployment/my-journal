/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const HOST = '0.0.0.0';
const PORT = Number(process.env.PORT) || 8080;
const globalPrefix = 'api';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix(globalPrefix);
  await app.listen(PORT, HOST).then(() => {
    console.log(
      `🚀 Nest Live Development Server is listening on ${HOST}:${PORT}, open your browser on http://localhost:${PORT}/${globalPrefix}/journal`,
    );
  });
}

bootstrap();
