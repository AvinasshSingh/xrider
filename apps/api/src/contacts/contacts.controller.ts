import { Body, Controller, Post } from '@nestjs/common';
import { IsEmail, IsString, MaxLength } from 'class-validator';

class ContactDto {
  @IsString()
  @MaxLength(80)
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @MaxLength(2000)
  message!: string;
}

@Controller('contact')
export class ContactsController {
  @Post()
  submit(@Body() body: ContactDto) {
    return { success: true, receivedAt: new Date().toISOString(), email: body.email };
  }
}
