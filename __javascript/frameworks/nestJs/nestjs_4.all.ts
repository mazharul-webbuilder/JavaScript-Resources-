// 🚀 NestJS v4.x.x (Fourth Major Release)

// 1) **GraphQL Apollo Federation Support**
//    * NestJS v4.x.x introduced support for Apollo Federation, enabling developers to create a unified GraphQL API across multiple services. This allows for a distributed GraphQL architecture where different modules or services can define their own GraphQL schemas and then combine them into a single schema for the client.

// Example: Apollo Federation Setup
import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class ProductResolver {
    @Query(() => String)
    getProduct(): string {
        return 'Product Data from the Product Service';
    }
}

// 2) **Improved Logging System**
//    * NestJS v4.x.x improved the logging system by adding built-in support for different log levels, custom loggers, and enhanced log formatting. This made it easier to capture and display logs in a structured and meaningful way for debugging and monitoring applications.

// Example: Custom Logger
import { Logger, Injectable } from '@nestjs/common';

@Injectable()
export class MyLogger extends Logger {
    log(message: string) {
        super.log(message);
    }

    error(message: string, trace: string) {
        super.error(message, trace);
    }

    warn(message: string) {
        super.warn(message);
    }
}

// 3) **Caching Support**
//    * NestJS v4.x.x introduced built-in support for caching, making it easier to implement caching strategies for HTTP requests, methods, or entire applications. This feature can significantly improve performance, especially for read-heavy applications.

// Example: Using Cache Interceptor
import { CacheInterceptor, UseInterceptors } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';

@Controller()
@UseInterceptors(CacheInterceptor)
export class AppController {
    @Get()
    getHello(): string {
        return 'Hello World!';
    }
}

// 4) **Swagger Enhancements**
//    * NestJS v4.x.x made it easier to generate Swagger API documentation using decorators. It provided better integration with the Swagger module, allowing automatic generation of API docs with enhanced customization options for metadata, query parameters, and response types.

// Example: Creating Swagger Documentation
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const options = new DocumentBuilder()
        .setTitle('NestJS API')
        .setDescription('API Documentation')
        .setVersion('1.0')
        .addTag('cats')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}

// 5) **Async Configuration with Dynamic Modules**
//    * NestJS v4.x.x introduced more advanced configuration handling with dynamic modules, which allow modules to be configured asynchronously. This is especially useful for modules like database connections and external services that may require dynamic configuration before being instantiated.

// Example: Dynamic Module with Asynchronous Configuration
import { Module, DynamicModule } from '@nestjs/common';

@Module({})
export class DatabaseModule {
    static forRootAsync(): DynamicModule {
        return {
            module: DatabaseModule,
            providers: [
                {
                    provide: 'DATABASE_CONFIG',
                    useFactory: async () => {
                        return { host: 'localhost', port: 5432 };
                    },
                },
            ],
        };
    }
}

// 6) **Enhanced TypeORM Integration with Migration Support**
//    * NestJS v4.x.x introduced more robust support for TypeORM migrations, making it easier to manage database schema changes in production applications. This included more streamlined integration with TypeORM’s CLI, allowing migrations to be run as part of the application lifecycle.

// Example: Running TypeORM Migrations
// nest generate migration CreateUsersTable
// nest migration:run

// 7) **Enhanced Security Middleware and Guards**
//    * With the rise of security concerns in modern web applications, NestJS v4.x.x introduced more advanced security mechanisms like rate limiting, IP blocking, and API key validation via middleware and guards. This helped developers create more secure applications by default.

// Example: Rate Limiting Middleware
import { Injectable, NestMiddleware } from '@nestjs/common';
import * as rateLimit from 'express-rate-limit';

@Injectable()
export class RateLimitMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        rateLimit({ windowMs: 15 * 60 * 1000, max: 100 })(req, res, next);
    }
}

// 8) **Enhanced Testing with SuperTest Integration**
//    * NestJS v4.x.x integrated the SuperTest library for more powerful and flexible testing capabilities. This library allows for easy HTTP request testing, enabling integration testing of endpoints in NestJS applications with minimal setup.

// Example: SuperTest HTTP Test
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './app.module';

describe('AppController (e2e)', () => {
    let app;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/GET /', () => {
        return request(app.getHttpServer())
            .get('/')
            .expect(200)
            .expect('Hello World!');
    });
});

// 9) **Improved Internationalization (i18n) Support**
//    * NestJS v4.x.x enhanced its internationalization capabilities, allowing developers to easily implement multi-language support in their applications. It introduced the i18n module, which made it simple to manage translations and locale-based content.

// Example: i18n Integration
import { Module } from '@nestjs/common';
import { I18nModule } from 'nestjs-i18n';

@Module({
    imports: [I18nModule.forRoot({ path: './i18n', saveMissing: true })],
})
export class AppModule {}

// 10) **Performance Improvements and Optimizations**
//    * NestJS v4.x.x included performance improvements and optimizations for large-scale applications, focusing on reducing memory usage, improving response times, and better handling of concurrent requests. These improvements made NestJS even more suitable for production-grade applications.

// Conclusion: NestJS v4.x.x brought a wide range of improvements, including GraphQL Apollo Federation support, enhanced caching and logging, better TypeORM integration, new dynamic module capabilities, and improved security features. The release also focused on performance optimizations and developer tools like Swagger and SuperTest to improve both development and testing workflows. These enhancements made NestJS a more powerful, scalable, and secure framework for building modern applications.
