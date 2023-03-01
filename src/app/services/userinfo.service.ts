import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserinfoService {
  user: User = {
    address: '',
    creditCardNumber: 0,
    fullName: '',
  };
  constructor() {}
  setUserInfos(user: User) {
    this.user = user;
  }
  getUserInfos() {
    return this.user;
  }
  reset() {
    this.user = {
      address: '',
      creditCardNumber: 0,
      fullName: '',
    };
  }
}
