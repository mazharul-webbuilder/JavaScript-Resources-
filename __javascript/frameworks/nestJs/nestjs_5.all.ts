// 🚀 NestJS v5.x.x (Fifth Major Release)

// 1) **Improved Microservices Support with gRPC**
//    * NestJS v5.x.x added native support for gRPC (Google Remote Procedure Call) within the microservices module. Developers could now build highly efficient, low-latency communication between microservices using Protocol Buffers and gRPC’s strong typing and schema validation.

// Example: gRPC Microservice Setup
import { Controller, MessagePattern } from '@nestjs/common';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';

@Controller()
export class AppController {
    @Client({ transport: Transport.GRPC, options: { package: 'myPackage', protoPath: 'myProto.proto' } })
    private client: ClientGrpc;

    @MessagePattern('get-data')
    getData(): string {
        return 'Data from gRPC microservice';
    }
}

// 2) **New CLI Enhancements for Scalability**
//    * The NestJS CLI in v5.x.x saw new commands and features to improve scalability. New commands for scaffolding services, controllers, and modules, along with improved support for multi-module applications, made it even easier to organize and build large applications.

// Example: Generating a Service with the CLI
// nest generate service products

// 3) **WebSocket Enhancements for Room Support**
//    * NestJS v5.x.x introduced support for WebSocket rooms. Developers could now create multiple channels (rooms) within a WebSocket gateway, enabling more advanced real-time interactions like private messaging or group chats in applications.

// Example: WebSocket Rooms
import { WebSocketGateway, SubscribeMessage, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class EventsGateway {
    @WebSocketServer() server: Server;

    @SubscribeMessage('joinRoom')
    handleJoinRoom(client: Socket, room: string) {
        client.join(room);
        client.emit('joined', `You have joined room: ${room}`);
    }

    @SubscribeMessage('message')
    handleMessage(client: Socket, payload: { room: string, message: string }) {
        this.server.to(payload.room).emit('message', payload.message);
    }
}

// 4) **Support for Reactive Programming with RxJS**
//    * NestJS v5.x.x further integrated RxJS (Reactive Extensions for JavaScript) into its core. This made it easier to work with asynchronous streams and event-based systems, especially when dealing with real-time data and reactive programming paradigms.

// Example: RxJS Integration
import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
    getHello(): Observable<string> {
        return of('Hello World').pipe(map(message => `Reactive: ${message}`));
    }
}

// 5) **Event Sourcing and CQRS Support**
//    * With v5.x.x, NestJS introduced built-in support for Event Sourcing and CQRS (Command Query Responsibility Segregation). This release gave developers the tools to manage complex systems, where events are stored and processed in a way that ensures consistency and scalability.

// Example: CQRS Pattern
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Command } from '@nestjs/cqrs';

export class CreateUserCommand {
    constructor(public readonly name: string) {}
}

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
    execute(command: CreateUserCommand) {
        // Create a user in the database
        return `User ${command.name} created!`;
    }
}

// 6) **NestJS Support for Serverless Frameworks**
//    * NestJS v5.x.x introduced out-of-the-box support for serverless applications. This allows developers to build and deploy NestJS applications using serverless platforms like AWS Lambda, Google Cloud Functions, and others, reducing infrastructure overhead and improving scalability.

// Example: Serverless Setup for AWS Lambda
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

// 7) **Improved Dependency Injection System**
//    * The dependency injection (DI) system in NestJS v5.x.x became even more powerful. With support for scoped and transient providers, developers now had more control over how dependencies are instantiated and managed, especially in complex applications.

// Example: Scoped Providers
import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class RequestScopedService {
    constructor() {
        console.log('RequestScopedService instantiated');
    }
}

// 8) **Automated API Documentation Generation**
//    * NestJS v5.x.x introduced enhanced automated API documentation generation, making it even easier for developers to document RESTful APIs. The new decorators provided more fine-grained control over metadata and allowed the generation of cleaner, more organized documentation.

// Example: Swagger Documentation with Detailed Metadata
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
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}

// 9) **Improved GraphQL Modules and Custom Resolvers**
//    * NestJS v5.x.x enhanced its support for GraphQL by introducing custom resolvers and a more modular approach to schema creation. This allowed developers to break down their GraphQL API into smaller, reusable components for better maintainability.

// Example: Creating Custom Resolvers
import { Resolver, Query } from '@nestjs/graphql';

@Resolver('Post')
export class PostResolver {
    @Query(() => String)
    async getPost(): Promise<string> {
        return 'Post data from custom resolver';
    }
}

// 10) **Enhanced TypeScript Support and Type Definitions**
//    * NestJS v5.x.x introduced several improvements in TypeScript support, with more accurate and robust type definitions across the entire framework. This helped ensure better developer experience, type safety, and compatibility with newer TypeScript versions.

// Conclusion: NestJS v5.x.x introduced many powerful features, including native support for **gRPC**, enhanced **WebSocket** functionality, **Event Sourcing** and **CQRS** patterns, **serverless architecture** support, and improvements in **dependency injection**. The release also improved tools for **automated API documentation**, **GraphQL**, **TypeScript support**, and **caching**, making NestJS even more scalable, efficient, and suitable for building modern, distributed applications.
