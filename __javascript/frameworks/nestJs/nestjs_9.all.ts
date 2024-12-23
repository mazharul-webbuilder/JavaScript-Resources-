// 🚀 NestJS v9.x.x (Ninth Major Release)

// 1) **Extended Microservices Support (GRPC, WebSockets, and more)**
//    * NestJS v9.x.x further expanded its support for **microservices**, adding native support for **gRPC** (a high-performance, open-source RPC framework) and improvements for **WebSockets**. This allowed developers to build more robust, high-performance microservices architectures with multiple communication options for inter-service communication.

// Example: Setting up gRPC Microservice
import { Transport, ClientOptions } from '@nestjs/microservices';

@Module({
    imports: [
        ClientOptions({
            transport: Transport.GRPC,
            options: {
                url: 'localhost:5000',
                package: 'cats',
                protoPath: 'cats.proto',
            },
        }),
    ],
})
export class GrpcMicroserviceModule {}

// 2) **Customizable Middleware and Guards**
//    * NestJS v9.x.x introduced a new, more flexible approach to defining **middleware** and **guards**, allowing for better reusability and scalability across different modules. This made it easier to define and apply custom security, logging, and validation logic throughout the application.

// Example: Custom Middleware
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void) {
        console.log('Request...', req);
        next();
    }
}

// 3) **Improved Dependency Injection (DI) System with Scopes**
//    * NestJS v9.x.x introduced **scoped** providers, allowing more fine-grained control over the lifecycle and instance scope of services and components. This improved the flexibility and performance of dependency injection, enabling more control over resource management in various contexts, such as per-request or per-session scopes.

// Example: Scoped Service Provider
import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class RequestScopedService {
    constructor() {
        console.log('Request Scoped Service Created');
    }
}

// 4) **Support for Advanced Asynchronous Operations (Async/Await)**
//    * NestJS v9.x.x fully embraced modern **async/await** patterns, ensuring that asynchronous operations across controllers, services, and middleware were handled consistently and more efficiently. This led to better readability and error handling across the framework.

// Example: Using async/await in Services
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
    async findAll(): Promise<string[]> {
        return ['cat1', 'cat2', 'cat3'];
    }
}

// 5) **Dynamic Modules and Enhanced Configuration API**
//    * NestJS v9.x.x introduced further improvements to the **dynamic module system**, making it easier to load and configure modules at runtime. This enhancement provided more control over configuration, making it easier to handle more complex application configurations with environment-dependent setups and dynamic module loading.

// Example: Dynamic Module Setup
import { Module } from '@nestjs/common';

@Module({
    imports: [
        DynamicModule.forRoot({
            setting: 'value',
        }),
    ],
})
export class DynamicAppModule {}

// 6) **Support for Multiple Logging Strategies**
//    * NestJS v9.x.x improved its logging system by allowing developers to implement multiple logging strategies. This provided more flexibility to integrate with third-party logging tools like **Winston**, **Pino**, and others, or build custom logging solutions for applications.

// Example: Using Winston for Logging
import { LoggerModule } from 'nestjs-winston';

@Module({
    imports: [
        LoggerModule.forRoot({
            transports: [
                new winston.transports.Console({
                    format: winston.format.combine(
                        winston.format.timestamp(),
                        winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
                    ),
                }),
            ],
        }),
    ],
})
export class AppModule {}

// 7) **Full Support for TypeORM and Sequelize Enhancements**
//    * NestJS v9.x.x continued to improve its integration with **TypeORM** and **Sequelize**, introducing enhancements that simplified database management and provided more advanced features for working with relational databases. This included better integration with **migrations**, **queries**, and **transactions**.

// Example: TypeORM Setup with Migrations
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'user',
            password: 'password',
            database: 'nestjs',
            entities: [User],
            migrations: ['src/migrations/*.ts'],
        }),
    ],
})
export class AppModule {}

// 8) **Improved Custom Decorators for Validation and Transformation**
//    * NestJS v9.x.x enhanced its support for **custom decorators** by adding more features for validation, transformation, and metadata handling. This enabled developers to implement complex business logic and validation scenarios more easily using custom decorators for DTOs and controllers.

// Example: Custom Validation Decorator
import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsCustom(value: string, validationOptions?: ValidationOptions) {
    return (object: object, propertyName: string) => {
        registerDecorator({
            name: 'isCustom',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: string, args: ValidationArguments) {
                    return value.startsWith('custom');
                },
            },
        });
    };
}

// 9) **Advanced Testing Utilities for Unit and E2E Tests**
//    * NestJS v9.x.x introduced new **testing utilities** and improved its integration with testing frameworks like **Jest**. This made it easier to test controllers, services, and entire modules with better support for unit tests and end-to-end (E2E) tests.

// Example: Unit Test for Controller
import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';

describe('CatsController', () => {
    let controller: CatsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CatsController],
        }).compile();

        controller = module.get<CatsController>(CatsController);
    });

    it('should return an array of cats', () => {
        expect(controller.getCats()).toEqual(['cat1', 'cat2']);
    });
});

// 10) **Updated CLI Commands for Better Scaffolding**
//    * NestJS v9.x.x introduced **new CLI commands** and updates to improve code scaffolding and project structure. These commands helped developers generate more complex setups, including guards, interceptors, and custom services more efficiently.

// Example: CLI Command for a Guard
// nest generate guard auth

// Conclusion: NestJS v9.x.x continued the framework's evolution with major enhancements for **microservices**, **dependency injection**, and **dynamic modules**. The new improvements around **async/await** handling, **advanced logging**, **multi-database support**, and **testing utilities** further positioned NestJS as a powerful, flexible, and scalable solution for building enterprise-level applications. The enhanced configuration, logging, and custom decorators allowed developers to manage complex projects with greater ease.
