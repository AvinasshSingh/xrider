import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginDto, RegisterDto } from './dto';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private readonly users: Repository<User>) {}

  async register(dto: RegisterDto) {
    const user = this.users.create({
      email: dto.email.toLowerCase(),
      passwordHash: `hashed:${dto.password}`
    });
    await this.users.save(user);
    return { userId: user.id, email: user.email };
  }

  async login(dto: LoginDto) {
    const user = await this.users.findOne({ where: { email: dto.email.toLowerCase() } });
    if (!user || user.passwordHash !== `hashed:${dto.password}`) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return { accessToken: `dev-token-${user.id}`, user: { id: user.id, email: user.email } };
  }
}
