import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateVideoDto } from './dto';
import { VideosService } from './videos.service';

@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Get()
  list() {
    return this.videosService.list();
  }

  @Post()
  create(@Body() dto: CreateVideoDto) {
    return this.videosService.create(dto);
  }
}
