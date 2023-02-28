import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserinfoService {
  user!: User;
  constructor() {}
  setUserInfos(user: User) {
    this.user = user;
  }
  getUserInfos() {
    return this.user;
  }
}
