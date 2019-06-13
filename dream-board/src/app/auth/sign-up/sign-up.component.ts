import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor() {
    this.signUpForm = this.SignUpFormGroup();
  }

  ngOnInit() {
  }

  SignUpFormGroup() {
    return new FormGroup({
      firstName: new FormControl([''], [Validators.required]),
      lastName: new FormControl([''], [Validators.required]),
      email: new FormControl([''], [Validators.required]),
      picture: new FormControl(''),
    });
  }
}
