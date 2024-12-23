// 🚀 NestJS v2.x.x (Second Major Release)

// 1) **Improved Dependency Injection (DI) System**
//    * NestJS v2.x.x introduced further enhancements to the Dependency Injection system, allowing for more flexible and powerful DI handling. It also supported the concept of scope for services (singleton, transient, etc.), enabling developers to control how and when services are instantiated.

// Example: Scoped Providers
import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class AppService {
    getHello(): string {
        return 'Hello from a transient service!';
    }
}

// 2) **Support for Middleware**
//    * NestJS v2.x.x introduced middleware, which allowed developers to intercept and modify HTTP requests before they reach route handlers. Middleware functions are similar to Express middleware but integrated into the NestJS framework.

// Example: Creating Middleware
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('Request made to:', req.url);
        next();
    }
}

// 3) **Custom Decorators**
//    * NestJS v2.x.x made it easier to create custom decorators, which allowed developers to add their own annotations for routing, validation, or other custom behaviors. This flexibility helped in building highly tailored applications.

// Example: Custom Decorator
import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

// 4) **Support for Validation Pipes**
//    * Validation pipes were introduced in NestJS v2.x.x, which provided a convenient way to validate and transform incoming request data. This functionality helped ensure that incoming requests met the expected formats before reaching route handlers.

// Example: Validation Pipe
import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { IsInt, IsString } from 'class-validator';

class CreateUserDto {
    @IsString()
    name: string;

    @IsInt()
    age: number;
}

@Injectable()
export class ValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        return value;
    }
}

// 5) **Support for Asynchronous Configuration**
//    * NestJS v2.x.x improved the framework’s support for asynchronous configuration. Developers could now load configurations asynchronously (e.g., from environment variables or remote sources) while still maintaining a strongly typed configuration system.

// Example: Asynchronous Configuration
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
    constructor(private configService: ConfigService) {}

    getDatabaseHost(): string {
        return this.configService.get<string>('DATABASE_HOST');
    }
}

// 6) **Enhanced Testing Utilities**
//    * NestJS v2.x.x made improvements to the testing utilities. It provided a more robust and flexible testing setup that allowed for easier unit and integration testing of controllers, services, and modules.

// Example: Testing a Service
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

    it('should return "Hello from AppService!"', () => {
        expect(service.getHello()).toBe('Hello from AppService!');
    });
});

// 7) **Introduction of Async/Await Support in Services**
//    * NestJS v2.x.x fully embraced asynchronous programming by integrating async/await support throughout the framework. This change made working with promises much more intuitive and readable, especially when interacting with external resources like databases or APIs.

// Example: Async/Await in Services
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    async getData(): Promise<string> {
        return new Promise((resolve) => resolve('Async data'));
    }
}

// 8) **Improved Documentation and CLI Tools**
//    * NestJS v2.x.x introduced improved CLI commands for project scaffolding and development. It also enhanced the documentation to make it easier for developers to get started with the framework.

// Example: CLI Commands
// Create a new NestJS project
// nest new project-name
// Generate a new module, controller, or service
// nest generate module users
// nest generate service users

// Conclusion: NestJS v2.x.x built upon the foundation of v1.x.x with enhancements in DI, middleware support, custom decorators, validation pipes, and async programming. It improved the developer experience by adding more powerful features for application structure, testing, configuration, and middleware integration. These improvements made it even easier to build scalable and maintainable server-side applications.
