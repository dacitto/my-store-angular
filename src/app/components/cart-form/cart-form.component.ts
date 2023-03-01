import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserinfoService } from 'src/app/services/userinfo.service';
import { User } from './../../models/user.d';
@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.scss'],
})
export class CartFormComponent {
  creditCardNumber: number = 0;
  fullName: string = '';
  address: string = '';
  @Output() checkout: EventEmitter<any> = new EventEmitter();

  form: FormGroup;

  constructor(
    private userInfoService: UserinfoService,
    private router: Router
  ) {
    this.form = this.generateForm();
  }

  generateForm() {
    return new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      creditCardNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{16}'),
      ]),
    });
  }

  get f() {
    return this.form.controls as any;
  }

  submitForm(): void {
    const user: User = {
      creditCardNumber: this.form.value.creditCardNumber,
      fullName: this.form.value.fullName,
      address: this.form.value.address,
    };

    this.userInfoService.setUserInfos(user);
    this.router.navigate(['/success']);
  }
}
