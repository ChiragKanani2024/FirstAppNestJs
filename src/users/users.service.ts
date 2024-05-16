/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Chirag kanani',
      email: 'chirag@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Meet kanani',
      email: 'meet@gmail.com',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'alpesh parajapati',
      email: 'alpesh@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 4,
      name: 'mihir rajpopat',
      email: 'mihir@gmail.com',
      role: 'INTERN',
    },
    {
      id: 5,
      name: 'manil kanani',
      email: 'manil@gmail.com',
      role: 'ADMIN',
    },
  ];

  findAll(role: string) {
    if (role) {
      return this.users.filter((item) => {
        return item.role.toLowerCase() == role.toLowerCase();
      });
    }
    return this.users;
  }

  create(createUserDto: CreateUserDto) {
    const newUser = this.users.push({
      id: this.users[this.users.length - 1].id + 1,
      ...createUserDto,
    });
    return this.users[newUser - 1];
  }

  findOne(id: number) {
    return this.users.find((item) => item.id == id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map(user =>{
      if (user.id === id) {
        return { ...user , ...updateUserDto}
      }
      return user
    })
    return this.findOne(id);
  }

  deleteOne(id: number) {
    this.users.splice(
      this.users.findIndex((item) => {
        return item.id == id;
      }),
      1,
    );
    return id;
  }
}
