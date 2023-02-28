import { User } from './../../models/user.d';
import { Component, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserinfoService } from 'src/app/services/userinfo.service';
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
  // constructor(private userInfoService: UserinfoService) {}

  // myForm: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   this.myForm = this.fb.group({
  //     fullName: ['', Validators.required],
  //     address: ['', Validators.required],
  //     creditCardNumber: [
  //       '',
  //       [Validators.required, Validators.pattern('[0-9]{16}')],
  //     ],
  //   });
  // }

  form: FormGroup;

  constructor(private userInfoService: UserinfoService) {
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

  // submitForm() {
  //   console.log(this.form.value);
  //   alert(`Form submitted!, the name is ${this.form.value.name}`);
  // }
  submitForm(): void {
    const user: User = {
      creditCardNumber: this.creditCardNumber,
      fullName: this.fullName,
      address: this.address,
    };
    this.userInfoService.setUserInfos(user);

    console.log(this.userInfoService.getUserInfos());
    alert(`Form submitted!, the name is ${this.form.value}`);
    // this.checkout.emit(user);
  }
  onSubmit() {
    console.log(this.form.value);
  }
}
