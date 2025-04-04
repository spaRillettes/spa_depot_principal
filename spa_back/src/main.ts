import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3001);
 // await app.listen(3000,'localhost:3001',() => {console.log('listening port:3001')});
}
bootstrap();
