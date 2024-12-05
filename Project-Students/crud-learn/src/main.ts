import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setDescription("API de Aprendizado BoladoBolox")
  .setVersion("1.0")
  .build();

  app.enableCors({
    origin: 'http://127.0.0.1:5500', // Substitua pelo domínio correto
    methods: 'GET,POST',
  });

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
