import { IsIn, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateVideoDto {
  @IsString()
  @MaxLength(120)
  title!: string;

  @IsString()
  sourcePrompt!: string;

  @IsOptional()
  @IsIn(['youtube', 'instagram', 'tiktok'])
  platform?: string;
}
