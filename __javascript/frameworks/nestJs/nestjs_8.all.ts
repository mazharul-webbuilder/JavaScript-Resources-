// 🚀 NestJS v8.x.x (Eighth Major Release)

// 1) **Microservices and Transport Layer Enhancements**
//    * NestJS v8.x.x introduced improvements to the **microservices** architecture, adding more transport options for communication between microservices. This included better support for **Kafka**, **NATS**, **RabbitMQ**, and other message brokers, enhancing the ability to build distributed systems.

// Example: Setting up Kafka Microservice
import { ClientKafka, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        ClientKafka({
            transport: Transport.KAFKA,
            options: {
                client: {
                    brokers: ['localhost:9092'],
                },
            },
        }),
    ],
})
export class KafkaMicroserviceModule {}

// 2) **Performance Optimizations with Lazy Loading**
//    * NestJS v8.x.x introduced **lazy loading** for modules, allowing you to load modules only when needed. This reduces the initial application boot time and can improve performance, especially in large applications.

// Example: Lazy Loading Modules
@Module({
    imports: [LazyLoadedModule],
})
export class AppModule {}

@Module({
    imports: [CommonModule],
})
export class LazyLoadedModule {}

// 3) **Improved API Documentation with OpenAPI v3 Integration**
//    * NestJS v8.x.x enhanced its API documentation capabilities with **OpenAPI v3** support. This allowed developers to generate comprehensive API documentation, including improved schema generation, better type inference, and better support for RESTful APIs.

// Example: API Documentation with OpenAPI v3
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('cats')
@ApiTags('cats')
export class CatsController {
    @Get()
    @ApiOperation({ summary: 'Get all cats' })
    getAllCats() {
        return [];
    }
}

// 4) **New Validation Pipe with Built-in Transformation**
//    * NestJS v8.x.x introduced an enhanced **ValidationPipe** with built-in **transformation** capabilities, allowing for automatic transformation of incoming data into class instances before validation. This improved how data was processed and validated in controllers and services.

// Example: Validation and Transformation with Pipes
import { PipeTransform, Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CreateCatPipe implements PipeTransform {
    transform(value: any) {
        return new CreateCatDto(value);
    }
}

// 5) **Enhanced Caching Support**
//    * NestJS v8.x.x improved its support for **caching**, allowing developers to cache responses more easily with different strategies. This enhancement helped reduce the load on back-end services and improved application performance.

// Example: Caching with Redis
import { CacheModule } from '@nestjs/cache-manager';

@Module({
    imports: [
        CacheModule.register({
            store: 'redis',
            host: 'localhost',
            port: 6379,
        }),
    ],
})
export class AppModule {}

// 6) **Improved Security with CSRF Protection**
//    * NestJS v8.x.x added built-in support for **Cross-Site Request Forgery (CSRF)** protection. This allowed developers to easily implement CSRF protection in web applications, adding an extra layer of security against attacks.

// Example: Enabling CSRF Protection
import { CsrfProtectionModule } from '@nestjs/csrf';

@Module({
    imports: [CsrfProtectionModule],
})
export class AppModule {}

// 7) **Advanced Command Line Interface (CLI) Features**
//    * NestJS v8.x.x enhanced its **CLI** with new commands and options for better scaffolding and automation. This included commands for generating custom guards, interceptors, and more, as well as improved configuration options for managing environments and deployment settings.

// Example: CLI Command for Custom Interceptor
// nest generate interceptor logging

// 8) **Multiple Database Connections Support**
//    * NestJS v8.x.x introduced the ability to connect to multiple databases within the same application. This is particularly useful for applications that require access to more than one database type, such as SQL and NoSQL databases, or different instances of the same database.

// Example: Multiple Database Connections
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'password',
            database: 'postgres',
            entities: [User],
            synchronize: true,
        }),
        TypeOrmModule.forRoot({
            name: 'mongoDbConnection',
            type: 'mongodb',
            url: 'mongodb://localhost/nest',
            entities: [Post],
            synchronize: true,
        }),
    ],
})
export class AppModule {}

// 9) **Improved NestJS Debugging and Logging**
//    * NestJS v8.x.x made improvements to debugging and logging. It introduced more robust logging functionality and support for integrating external logging services. This helped developers to track and debug issues more efficiently in production environments.

// Example: Configuring Logging
import { Logger } from '@nestjs/common';

@Module({
    providers: [
        {
            provide: Logger,
            useFactory: () => new Logger('CustomLogger'),
        },
    ],
})
export class AppModule {}

// 10) **Improved Swagger Module**
//    * NestJS v8.x.x saw improvements to its built-in Swagger module, offering better integration with OpenAPI v3, improved validation for parameters, and custom decorators for documenting complex API structures.

// Example: Custom API Decorators
import { ApiResponse } from '@nestjs/swagger';

@Controller('cats')
export class CatsController {
    @Get(':id')
    @ApiResponse({ status: 200, description: 'Cat retrieved successfully' })
    getCatById(@Param('id') id: string) {
        return `This action returns a cat with id ${id}`;
    }
}

// Conclusion: NestJS v8.x.x continued the evolution of the framework, introducing crucial enhancements like **microservice transport options**, **lazy loading**, **OpenAPI v3** documentation, **improved validation** with transformation, and **caching** with Redis. The new security features, multi-database support, and enhanced CLI features aimed at streamlining development and deployment, further positioning NestJS as a robust platform for building scalable and high-performance applications.
