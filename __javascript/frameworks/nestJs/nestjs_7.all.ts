// 🚀 NestJS v7.x.x (Seventh Major Release)

// 1) **Improved TypeScript Support with Type Definitions**
//    * NestJS v7.x.x introduced enhanced TypeScript support, with improved type definitions for various modules. This allowed for better IntelliSense and type checking, leading to improved developer productivity and fewer runtime errors.

// Example: TypeScript Enhancements in Controllers
import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    getCats(): string {
        return 'This action returns all cats';
    }
}

// 2) **Support for MongoDB and Mongoose Integration**
//    * NestJS v7.x.x brought official support for integrating MongoDB via Mongoose, providing a full-featured and flexible solution for managing MongoDB data in NestJS applications.

// Example: MongoDB with Mongoose Integration
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cat, CatSchema } from './schemas/cat.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
    controllers: [CatsController],
    providers: [CatsService],
})
export class CatsModule {}

// 3) **Enhanced Dependency Injection (DI) System**
//    * NestJS v7.x.x introduced several improvements to the **dependency injection** (DI) system. The new enhancements allowed for more flexibility and control over how services and components were injected and instantiated.

// Example: Dependency Injection with Custom Providers
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class CatsService {
    constructor(@Inject('CAT_MODEL') private catModel) {}

    // use catModel to interact with MongoDB
}

// 4) **Support for GraphQL Federation**
//    * NestJS v7.x.x introduced support for **GraphQL Federation**, allowing applications to break up a large GraphQL API into multiple smaller, federated services. This made it easier to scale applications and manage large APIs in a microservices-based architecture.

// Example: GraphQL Federation Setup
import { Resolver, Query } from '@nestjs/graphql';
import { FederatedModule } from '@nestjs/graphql-federation';

@Resolver()
export class CatsResolver {
    @Query(() => String)
    getCats(): string {
        return 'Federated Cats API';
    }
}

@Module({
    imports: [FederatedModule],
    providers: [CatsResolver],
})
export class CatsModule {}

// 5) **Support for Health Checks and Metrics**
//    * NestJS v7.x.x introduced built-in support for **health checks** and **metrics**, allowing developers to easily monitor the health and performance of their applications, especially useful for production environments.

// Example: Health Check Endpoint
import { Injectable } from '@nestjs/common';
import { HealthCheckService, HealthCheck } from '@nestjs/terminus';

@Injectable()
export class HealthService {
    constructor(private health: HealthCheckService) {}

    @HealthCheck()
    check() {
        return this.health.check([]);
    }
}

// 6) **WebSockets and Real-time Communication Improvements**
//    * NestJS v7.x.x further enhanced its support for **WebSockets**, improving the real-time communication capabilities of applications. It made it easier to implement real-time features such as chat applications, live updates, and notifications.

// Example: WebSocket Integration
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

@WebSocketGateway()
export class EventsGateway {
    @WebSocketServer() server;

    sendEvent() {
        this.server.emit('event', { message: 'Hello, WebSocket!' });
    }
}

// 7) **Advanced Custom Decorators for Validation and Transformation**
//    * NestJS v7.x.x introduced advanced custom decorators to handle **validation** and **transformation** of data within controllers and DTOs. This made it easier to implement sophisticated data validation mechanisms using decorators like `@IsString()`, `@IsNotEmpty()`, and more.

// Example: Custom Validation with Decorators
import { IsString, IsInt } from 'class-validator';

export class CreateCatDto {
    @IsString()
    readonly name: string;

    @IsInt()
    readonly age: number;
}

// 8) **GraphQL Enhancements with Input Types and Custom Scalars**
//    * NestJS v7.x.x improved the GraphQL integration by allowing better use of **input types** and **custom scalars**. This allowed for more control over data structures and how data was passed between clients and servers via GraphQL.

// Example: Custom GraphQL Scalar
import { Scalar, CustomScalar } from '@nestjs/graphql';
import { Kind } from 'graphql';

@Scalar('Date')
export class DateScalar implements CustomScalar<number, Date> {
    description = 'Date custom scalar type';

    parseValue(value: number): Date {
        return new Date(value);
    }

    serialize(value: Date): number {
        return value.getTime();
    }

    parseLiteral(ast: any): Date {
        if (ast.kind === Kind.INT) {
            return new Date(ast.value);
        }
        return null;
    }
}

// 9) **Async Configuration Module for Dynamic Configuration**
//    * NestJS v7.x.x enhanced configuration management by adding an **Async Configuration Module**, which allowed for dynamic configuration values to be fetched and set asynchronously, making it easier to configure services that require runtime data or environment variables.

// Example: Async Configuration
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
    constructor(private configService: ConfigService) {}

    getApiKey() {
        return this.configService.get<string>('API_KEY');
    }
}

// 10) **NestJS CLI Enhancements for Code Generation**
//    * The NestJS CLI tool in v7.x.x saw several improvements, such as better scaffolding for modules, services, and controllers, along with new commands for generating other essential components like guards, interceptors, and pipes. This allowed developers to automate even more parts of their workflow.

// Example: Generating a Service and Guard
// nest generate service cats
// nest generate guard roles

// Conclusion: NestJS v7.x.x introduced significant improvements to the framework, including better **TypeScript support**, enhanced **GraphQL** capabilities (including federation), **MongoDB** and **Mongoose** integration, and support for **real-time communication** via **WebSockets**. It also improved **health checks**, **metrics**, **custom decorators**, and configuration management, making it easier for developers to build scalable, maintainable, and performant applications.
