// 🚀 NestJS v3.x.x (Third Major Release)

// 1) **Microservices Support**
//    * NestJS v3.x.x introduced full support for building microservices. With this release, developers could build distributed systems using different transport layers such as HTTP, WebSockets, TCP, and more, with ease. The framework introduced `@nestjs/microservices` to provide out-of-the-box support for microservice architectures.

// Example: Creating a Microservice with TCP Transport
import { Controller, MessagePattern } from '@nestjs/common';
import { Client, ClientTCP, Transport } from '@nestjs/microservices';

@Controller()
export class AppController {
    @Client({ transport: Transport.TCP })
    private client: ClientTCP;

    @MessagePattern('message-pattern')
    getHello(): string {
        return 'Hello from the microservice!';
    }
}

// 2) **WebSockets Integration**
//    * NestJS v3.x.x improved WebSocket support, allowing developers to easily implement real-time communication in their applications. With decorators like `@SubscribeMessage()`, `@MessagePattern()`, and `@WebSocketGateway()`, developers could easily integrate WebSockets into their modules.

// Example: WebSocket Gateway
import { WebSocketGateway, SubscribeMessage, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class EventsGateway {
    @WebSocketServer()
    server: Server;

    @SubscribeMessage('message')
    handleMessage(client: Socket, payload: string): string {
        return 'Message received: ' + payload;
    }
}

// 3) **Custom Exception Filters**
//    * NestJS v3.x.x introduced an even more advanced exception filter system. Developers could now define custom exception filters globally or at a module level, allowing for better error handling and standardized error responses.

// Example: Creating a Custom Exception Filter
import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';

@Catch()
export class CustomHttpExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const response = host.switchToHttp().getResponse();
        response.status(exception.getStatus()).json({
            statusCode: exception.getStatus(),
            message: exception.message,
        });
    }
}

// 4) **Improved Validation and Pipes**
//    * NestJS v3.x.x expanded its validation capabilities. With the help of `class-validator` and `class-transformer` libraries, validation became more powerful. NestJS also added built-in support for transforming the input data into the desired type and validating it before it reaches the controller.

// Example: Enhanced Validation Pipe with Transformation
import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class ValidationPipe implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata) {
        const object = plainToClass(metadata.metatype, value);
        const errors = await validate(object);
        if (errors.length > 0) {
            throw new Error('Validation failed');
        }
        return object;
    }
}

// 5) **GraphQL Integration**
//    * NestJS v3.x.x brought enhanced support for GraphQL, allowing developers to build GraphQL APIs with the power of decorators. The framework added automatic schema generation and resolvers, integrating seamlessly with Apollo Server for GraphQL support.

// Example: Creating a GraphQL Resolver
import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
    @Query(() => String)
    getHello(): string {
        return 'Hello from GraphQL!';
    }
}

// 6) **Database Integration with TypeORM and Sequelize**
//    * NestJS v3.x.x improved integration with Object-Relational Mappers (ORM) like TypeORM and Sequelize. It streamlined the configuration process and provided support for using databases within NestJS applications.

// Example: Integrating TypeORM
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'test',
        password: 'test',
        database: 'test',
        entities: [],
        synchronize: true,
    })],
})
export class AppModule {}

// 7) **CLI Tool Improvements**
//    * NestJS v3.x.x enhanced its CLI tools with new commands and capabilities. The framework introduced better scaffolding for generating modules, services, controllers, and even GraphQL resolvers. These improvements made it easier to get started with a new NestJS project or module.

// Example: Generating a New Module using CLI
// nest generate module users

// 8) **Improved Testing and Mocking**
//    * NestJS v3.x.x continued to enhance the testing utilities. It introduced better support for mocking external dependencies, providing more control over tests for controllers and services. This made unit and integration testing more flexible and easier to implement.

// Example: Mocking a Service in Tests
import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
    let service: AppService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppService,
                {
                    provide: AppService,
                    useValue: {
                        getHello: () => 'Mocked hello!',
                    },
                },
            ],
        }).compile();

        service = module.get<AppService>(AppService);
    });

    it('should return mocked hello message', () => {
        expect(service.getHello()).toBe('Mocked hello!');
    });
});

// 9) **Enhanced Security Features**
//    * NestJS v3.x.x included more robust security features, including support for validation of inputs, prevention of CSRF, and better control over cross-origin resource sharing (CORS). The framework made it easier to enforce security best practices.

// Example: Enabling CORS in NestJS
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();  // Enable CORS for all origins
    await app.listen(3000);
}

// Conclusion: NestJS v3.x.x added a wealth of powerful features such as full microservice support, WebSockets, advanced exception handling, GraphQL integration, and enhanced security. This release significantly improved the framework's scalability and flexibility, making it easier to build complex, distributed systems and applications with real-time communication, security, and powerful validation capabilities.
