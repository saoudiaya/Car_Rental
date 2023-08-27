import {Injectable, OnInit} from '@angular/core';
import {Storage} from '@ionic/storage';
import {User} from "../Entities/User";

@Injectable()
export class UserService {
  constructor(private storage: Storage) {

   let admin: User = {
      email: "admin@gmail.com",
      password: "admin123",
    }
    this.addUser(admin);
  }

  async addUser(user: User) {
    let users = await this.getAllUsers();
    let index = users.findIndex((u: User) => u.email === user.email);
    if (index === -1) {
      users.push(user);
      await this.storage.set('users', JSON.stringify(users));
    }
  }


  async deleteUser(user: User) {
    let users = await this.getAllUsers();
    let index = users.findIndex((u: User) => u.email === user.email);
    if (index !== -1) {
      users.splice(index, 1);
      await this.storage.set('users', JSON.stringify(users));
    }
  }

  async updateUser(user: User) {
    let users = await this.getAllUsers();
    let index = users.findIndex((u: User) => u.email === user.email);
    if (index !== -1) {
      users[index] = user;
      await this.storage.set('users', JSON.stringify(users));
    }
  }

  async getUserByEmail(userMail: string) {
    let users = await this.getAllUsers();
    return users.find((u: any) => u.email === userMail);
  }

  async getAllUsers() {
    let users = await this.storage.get('users');
    if (!users) {
      return [];
    }
    return JSON.parse(users);
  }
}
