import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DatabaseService } from './database/database.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const databaseService = app.get(DatabaseService);
  await databaseService.seedDatabase();
  await app.listen(3001);
}
bootstrap();
