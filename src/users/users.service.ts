import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 0, name: 'HoangPham', username: 'Hoang', password: 'password123' },
    { id: 2, name: 'HoangPham2', username: 'John', password: 'password123' },
    { id: 3, name: 'HoangPham3', username: 'Ripper', password: 'password123' },
    { id: 4, name: 'HoangPham4', username: 'Kong', password: 'password123' },
    { id: 4, name: 'HoangPham4', username: 'string', password: 'string' },
  ];

  findAll(username?: string): User[] {
    if (!username) return this.users;
    return this.users.filter((x) => x.username === username);
  }

  async findOne(username?: string): Promise<User | undefined> {
    return this.users.find((x) => x.username === username);
  }

  findById(userId: number): User {
    return this.users.find((x) => x.id == userId);
  }
}
