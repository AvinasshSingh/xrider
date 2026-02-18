import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('video_projects')
export class VideoProject {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column({ default: 'queued' })
  status!: 'queued' | 'rendering' | 'posted' | 'failed';

  @Column({ type: 'text', nullable: true })
  sourcePrompt!: string | null;

  @Column({ nullable: true })
  platform!: string | null;
}
