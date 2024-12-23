// 🚀 NestJS v6.x.x (Sixth Major Release)

// 1) **Improved Microservices Support with Redis and NATS**
//    * NestJS v6.x.x introduced better support for additional microservice transport layers, such as Redis and NATS. This allowed developers to use more messaging systems to communicate between services in a more efficient and scalable way.

// Example: Using Redis for Microservices
import { Controller, MessagePattern } from '@nestjs/common';
import { Transport, Client, ClientRedis } from '@nestjs/microservices';

@Controller()
export class AppController {
    @Client({ transport: Transport.REDIS, options: { url: 'redis://localhost:6379' } })
    private client: ClientRedis;

    @MessagePattern('message')
    getMessage(): string {
        return 'Message received from Redis';
    }
}

// 2) **Support for Lambda Functions and Serverless Frameworks**
//    * NestJS v6.x.x extended its serverless framework support, allowing easier deployment on cloud platforms like AWS Lambda, Google Cloud Functions, and Azure Functions. It also integrated better with the Serverless Framework for a seamless developer experience in serverless environments.

// Example: Serverless Lambda Setup with AWS
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ServerlessAdapter } from '@nestjs/platform-serverless';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.init();
    return app.getHttpAdapter().getInstance();
}

export const handler = async (event, context) => {
    const app = await bootstrap();
    return app(event, context);
};

// 3) **Support for NestJS CRUD Operations with `@nestjsx/crud`**
//    * NestJS v6.x.x introduced official integration with `@nestjsx/crud`, a popular library that provides a set of decorators and utilities to easily handle CRUD (Create, Read, Update, Delete) operations. This simplified data handling and allowed for faster development of REST APIs.

// Example: CRUD with NestJS and `@nestjsx/crud`
import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';

@Crud({
    model: { type: User },
})
@Controller('users')
export class UserController {}

// 4) **Global Exception Filters and Enhanced Error Handling**
//    * NestJS v6.x.x introduced global exception filters, making error handling across the entire application much easier. It allowed developers to catch unhandled exceptions globally and apply custom error formatting and responses to improve the developer experience.

// Example: Global Exception Filter
import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const response = host.switchToHttp().getResponse();
        const status = exception instanceof Error ? 500 : 400;
        response.status(status).json({
            statusCode: status,
            message: exception.message,
        });
    }
}

// 5) **GraphQL Enhancements with Subscriptions**
//    * NestJS v6.x.x improved GraphQL support by adding GraphQL subscriptions, enabling real-time updates over WebSocket connections. This made it possible to build real-time applications using GraphQL, such as chat apps or live data dashboards.

// Example: GraphQL Subscription
import { Resolver, Subscription, Mutation, Args } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
    @Mutation(() => Boolean)
    sendMessage(@Args('message') message: string) {
        this.messageSubject.next(message); // Send the message to subscribers
        return true;
    }

    @Subscription(() => String)
    messageReceived() {
        return this.messageSubject.asObservable();
    }
}

// 6) **Support for Caching and Distributed Caching**
//    * NestJS v6.x.x added caching support, including integration with in-memory caching libraries (e.g., `cache-manager`) and distributed caches (e.g., Redis). This helped developers to improve application performance by caching expensive operations or data fetching routines.

// Example: Caching with Redis
import { Injectable } from '@nestjs/common';
import { CacheService } from '@nestjs/cache-manager';

@Injectable()
export class AppService {
    constructor(private cacheService: CacheService) {}

    async getCachedData() {
        const cachedData = await this.cacheService.get('data-key');
        if (cachedData) {
            return cachedData;
        } else {
            const data = 'Expensive Data';
            await this.cacheService.set('data-key', data, { ttl: 60 });
            return data;
        }
    }
}

// 7) **Automated Testing and Improved Test Utilities**
//    * NestJS v6.x.x introduced improvements to testing utilities, including built-in testing tools and better integration with testing libraries. This made it easier for developers to write and run unit and integration tests for their applications.

// Example: Writing Unit Tests with Jest
import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
    let service: AppService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AppService],
        }).compile();

        service = module.get<AppService>(AppService);
    });

    it('should return the correct data', () => {
        expect(service.getCachedData()).toBe('Expensive Data');
    });
});

// 8) **Enhanced Swagger Integration for API Documentation**
//    * NestJS v6.x.x introduced improvements for Swagger integration, allowing developers to fine-tune API documentation, add response schemas, and include more detailed metadata, making the generated docs more user-friendly and organized.

// Example: Detailed Swagger Metadata
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const options = new DocumentBuilder()
        .setTitle('NestJS API')
        .setDescription('API documentation for NestJS application')
        .setVersion('1.0')
        .addTag('users')
        .addBearerAuth()
        .addResponseSchema('User', { properties: { id: { type: 'number' }, name: { type: 'string' } } })
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}

// 9) **Support for Elasticsearch Integration**
//    * NestJS v6.x.x introduced an official Elasticsearch integration, allowing developers to easily integrate Elasticsearch for efficient search functionalities within their applications, especially in data-intensive systems like e-commerce or analytics platforms.

// Example: Elasticsearch Integration
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '@nestjs/elasticsearch';

@Injectable()
export class SearchService {
    constructor(
        @InjectRepository(MyEntity)
        private readonly repo: Repository<MyEntity>,
        private readonly elasticsearchClient: Client,
    ) {}

    async search(query: string) {
        return this.elasticsearchClient.search({ index: 'my-index', query: { match: { title: query } } });
    }
}

// 10) **Enhancement of NestJS CLI for Automation and Scaffolding**
//    * NestJS v6.x.x enhanced the CLI further to allow automatic generation of modules, controllers, services, and other components in a more streamlined manner, enabling faster application development.

// Example: Generating Components with CLI
// nest generate controller users
// nest generate service users
// nest generate module users

// Conclusion: NestJS v6.x.x introduced powerful features such as enhanced **microservices support** with **Redis** and **NATS**, better **GraphQL subscriptions**, **caching**, improved **testing utilities**, and better **Elasticsearch** integration. The release also provided enhanced **Swagger API documentation** and **serverless** deployment capabilities, helping developers build even more scalable, real-time, and efficient applications.
