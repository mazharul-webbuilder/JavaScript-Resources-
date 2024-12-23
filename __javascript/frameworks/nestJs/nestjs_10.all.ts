// 🚀 NestJS v10.x.x (Tenth Major Release)

// 1) **Native Support for WebSockets (Improved)**
//    * NestJS v10.x.x introduced enhanced and more flexible support for **WebSockets**, making it easier to build real-time applications with built-in support for events and broadcasting. It allowed developers to efficiently manage multiple WebSocket connections and perform real-time communication with clients.

// Example: WebSocket Gateway
import { WebSocketGateway, SubscribeMessage, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class EventsGateway {
    @WebSocketServer() server: Server;

    @SubscribeMessage('message')
    handleMessage(client: any, payload: string): string {
        return 'Hello, ' + payload;
    }

    sendToClients(data: string) {
        this.server.emit('event', data);  // Broadcasting to all clients
    }
}

// 2) **GraphQL Module Improvements**
//    * NestJS v10.x.x improved its integration with **GraphQL**, providing better support for **subscriptions**, **pagination**, and **error handling**. This allowed developers to build more robust GraphQL APIs with advanced features out of the box.

// Example: GraphQL Resolver with Subscriptions
import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver('Event')
export class EventResolver {
    @Query('events')
    async getEvents() {
        return ['Event1', 'Event2'];
    }

    @Mutation('createEvent')
    async createEvent(@Args('event') event: string) {
        pubSub.publish('eventCreated', { eventCreated: event });
        return event;
    }

    @Subscription('eventCreated')
    eventCreated() {
        return pubSub.asyncIterator('eventCreated');
    }
}

// 3) **Enhanced CQRS (Command Query Responsibility Segregation)**
//    * NestJS v10.x.x introduced advanced support for **CQRS**, improving the handling of complex business logic. It enabled clear separation between **commands** (write operations) and **queries** (read operations) with better event sourcing and support for **event-driven architectures**.

// Example: CQRS Command Handler
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

export class CreateUserCommand {
    constructor(public readonly username: string) {}
}

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
    async execute(command: CreateUserCommand) {
        // Logic for creating a user
    }
}

// 4) **Enhanced Security Features (Improved Authorization and Permissions)**
//    * NestJS v10.x.x made it easier to implement fine-grained **authorization** and **permissions** through the introduction of **role-based access control** (RBAC) and **attribute-based access control** (ABAC), allowing for more detailed control over user actions within applications.

// Example: Role-based Access Control (RBAC) Guard
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!roles) return true;

        const request = context.switchToHttp().getRequest();
        const user = request.user;
        return roles.some(role => user.roles?.includes(role));
    }
}

// 5) **Updated CLI and Generator for Microservices**
//    * The **NestJS CLI** was further enhanced in v10.x.x, making it easier to generate microservices and other advanced components such as **CQRS handlers**, **GraphQL resolvers**, and **WebSocket gateways**. The updated CLI improved developer productivity by automating the generation of boilerplate code for complex setups.

// Example: Generating a WebSocket Gateway with CLI
// nest g gateway events

// 6) **Full TypeScript 5.x Support**
//    * NestJS v10.x.x fully supported **TypeScript 5.x**, ensuring that developers could take advantage of the latest TypeScript features and improvements. This resulted in better type safety, reduced errors, and improved overall development experience when working with NestJS.

// Example: TypeScript Features in NestJS
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
    findOne(id: string): string {
        return `Cat with ID: ${id}`;
    }
}

// 7) **Containerized Microservices and Enhanced Docker Support**
//    * NestJS v10.x.x included better tools and templates for deploying applications as **containerized microservices** using **Docker**, providing a more seamless experience for developers working in modern cloud-native environments.

// Example: Dockerizing a NestJS Application
// Dockerfile
FROM node:16

WORKDIR /app
COPY . .

    RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start:prod"]

// 8) **Global Exception Filters and Custom Error Handlers**
//    * NestJS v10.x.x introduced **global exception filters** and custom error handling mechanisms to provide better control over error messages and response statuses across the entire application, improving overall application robustness.

// Example: Global Exception Filter
import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const response = host.switchToHttp().getResponse();
        response.status(500).json({
            message: exception.message,
        });
    }
}

// 9) **Optimized Request-Response Flow for Performance**
//    * NestJS v10.x.x focused on performance improvements, optimizing the request-response flow, reducing the time it took to process HTTP requests, and improving scalability for high-traffic applications.

// Example: Performance Improvement with Caching
import { CacheInterceptor, CacheKey, UseInterceptors } from '@nestjs/common';

@Controller('cats')
@UseInterceptors(CacheInterceptor)
export class CatsController {
    @Get()
    @CacheKey('cats')
    findAll() {
        return ['Cat 1', 'Cat 2'];
    }
}

// 10) **New Interceptors and More Powerful Transformations**
//    * NestJS v10.x.x introduced new interceptors and powerful transformation utilities, allowing developers to apply additional logic (such as **logging**, **caching**, or **data transformations**) to requests and responses in a clean and reusable manner.

// Example: Logging Interceptor
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        console.log('Before request...');
        return next
            .handle()
            .pipe(tap(() => console.log('After request...')));
    }
}

// Conclusion: NestJS v10.x.x enhanced the framework with **WebSocket improvements**, **GraphQL** advancements, and more powerful support for **CQRS** and **microservices**. Developers could now implement more robust and scalable systems with better control over **security**, **error handling**, and **performance optimizations**. With full support for **TypeScript 5.x** and easier integration with **Docker**, NestJS v10.x.x was a highly flexible, feature-rich version for building modern, cloud-native, and event-driven applications.
