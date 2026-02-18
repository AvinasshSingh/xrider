import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoProject } from './video.entity';
import { VideosController } from './videos.controller';
import { VideosService } from './videos.service';

@Module({
  imports: [TypeOrmModule.forFeature([VideoProject]), BullModule.registerQueue({ name: 'video-render' })],
  controllers: [VideosController],
  providers: [VideosService]
})
export class VideosModule {}
