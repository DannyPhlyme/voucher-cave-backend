import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
// import { useContainer } from 'class-validator';
import { ValidationPipe } from 'src/validation.pipe';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe());

  // useContainer(app.select(AppModule), { fallbackOnErrors: true });

  /**
   * Swagger configuration
   * @todo transfer this to a config file
   */
  const config = new DocumentBuilder()
    .setTitle('Voucher Cave')
    .setDescription('Vocher cave description')
    .setVersion('1.0')
    .build();
  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'Cave Voucher',
  };
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1', app, document, customOptions);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
