import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { BillingModule } from './billing/billing.module';
import { ContactsModule } from './contacts/contacts.module';
import { QueueModule } from './queue/queue.module';
import { VideosModule } from './videos/videos.module';
import { HealthController } from './common/health.controller';

@Module({
  controllers: [HealthController],
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        url: config.get<string>('DATABASE_URL'),
        autoLoadEntities: true,
        synchronize: true
      })
    }),
    BullModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        connection: {
          url: config.get<string>('REDIS_URL')
        }
      })
    }),
    AuthModule,
    VideosModule,
    BillingModule,
    ContactsModule,
    QueueModule
  ]
})
export class AppModule {}
