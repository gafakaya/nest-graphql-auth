import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      username: 'mehmet',
      password: 'not-secure',
    },
    {
      id: 2,
      username: 'kaya',
      password: 'not-secure',
    },
    {
      id: 3,
      username: 'amcik-anil',
      password: 'not-secure',
    },
  ];

  create(createUserInput: CreateUserInput) {
    const user = {
      ...createUserInput,
      id: this.users.length + 1,
    };

    this.users.push(user);

    console.log(user.password);

    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
