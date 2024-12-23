// 🚀 NestJS v1.x.x (First Major Release)

// 1) **Modular Architecture**
//    * NestJS v1.x.x introduced a modular architecture, allowing developers to organize their application into discrete, reusable modules. This modular system ensures better maintainability and scalability of server-side applications.

// Example: Basic Module Setup
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

// 2) **Controllers and Routes**
//    * NestJS v1.x.x introduced the concept of controllers to handle HTTP requests. Developers can define routes and associate them with corresponding methods using decorators such as `@Get()`, `@Post()`, etc.

// Example: Creating a Controller
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    getHello(): string {
        return 'Hello, NestJS!';
    }
}

// 3) **Dependency Injection (DI)**
//    * NestJS v1.x.x provided a powerful dependency injection system. With decorators like `@Injectable()`, developers could inject services into controllers and other services, making the code more modular and testable.

// Example: Using Dependency Injection
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello from AppService!';
    }
}

// 4) **Providers for Business Logic**
//    * Providers were used to encapsulate business logic and were injected into controllers or other services. These could be services, repositories, or other custom classes that handle complex functionality.

// Example: Provider with Business Logic
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getData(): string {
        return 'This is some data';
    }
}

// 5) **TypeScript Support**
//    * NestJS v1.x.x was built with TypeScript, providing developers with strong typing, decorators, and modern JavaScript features. TypeScript support allowed for better tooling, code autocompletion, and enhanced maintainability.

// Example: TypeScript with NestJS
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getUserData(userId: number): string {
        return `User data for user ID: ${userId}`;
    }
}

// 6) **Routing and HTTP Request Handling**
//    * NestJS v1.x.x used decorators to define HTTP request handlers and manage routing. This made it easy to implement RESTful APIs with various HTTP methods (GET, POST, PUT, DELETE).

// Example: Handling HTTP Requests
import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll(): string {
        return 'This action returns all users';
    }

    @Post()
    create(): string {
        return 'This action creates a new user';
    }
}

// 7) **Exception Handling**
//    * NestJS v1.x.x provided built-in exception filters that made it easier to handle errors gracefully and return consistent error responses from the server.

// Example: Basic Error Handling
import { Catch, ExceptionFilter, ArgumentsHost } from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const response = host.switchToHttp().getResponse();
        response.status(500).json({
            statusCode: 500,
            message: 'Internal Server Error',
            error: exception.message,
        });
    }
}

// 8) **Logging System**
//    * NestJS v1.x.x introduced a logging system that allowed easy integration of logging mechanisms, providing insights into the behavior of the application during development and production.

// Example: Using NestJS Logger
import { Logger } from '@nestjs/common';

const logger = new Logger('AppModule');
logger.log('Application is starting...');
logger.error('An error occurred');

// Conclusion: NestJS v1.x.x laid the foundation for scalable, maintainable, and modular server-side applications using TypeScript. It introduced key concepts such as modular architecture, dependency injection, decorators for routing and request handling, and built-in support for exception handling, logging, and strong TypeScript support. These features made it a powerful framework for building enterprise-level applications.
