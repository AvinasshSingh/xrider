import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Queue } from 'bullmq';
import { Repository } from 'typeorm';
import { CreateVideoDto } from './dto';
import { VideoProject } from './video.entity';

@Injectable()
export class VideosService {
  constructor(
    @InjectRepository(VideoProject) private readonly videos: Repository<VideoProject>,
    @InjectQueue('video-render') private readonly renderQueue: Queue
  ) {}

  async create(dto: CreateVideoDto) {
    const video = this.videos.create({
      title: dto.title,
      sourcePrompt: dto.sourcePrompt,
      platform: dto.platform ?? null,
      status: 'queued'
    });
    await this.videos.save(video);
    await this.renderQueue.add('render-video', { id: video.id, ffmpegPath: process.env.FFMPEG_PATH ?? 'ffmpeg' });
    return video;
  }

  list() {
    return this.videos.find({ order: { title: 'ASC' } });
  }
}
