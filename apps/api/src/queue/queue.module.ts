import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';

@Processor('video-render')
class VideoRenderProcessor extends WorkerHost {
  async process(job: { data: { id: string; ffmpegPath: string } }) {
    return {
      id: job.data.id,
      command: `${job.data.ffmpegPath} -i input.mp4 -vf scale=1080:1920 output.mp4`,
      status: 'simulated'
    };
  }
}

@Module({
  providers: [VideoRenderProcessor]
})
export class QueueModule {}
