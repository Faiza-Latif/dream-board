import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification/notification.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  mandatoryFilled = true;
  constructor(private af: AngularFireAuth,
    private router: Router,
    private notifier: NotificationService) {
    this.signUpForm = this.signUpFormGroup();
  }

  ngOnInit() {
    this.signUpForm.statusChanges.subscribe(status => {
      if (status === 'VALID') {
        this.mandatoryFilled = false;
      }
    });
  }

  signUpFormGroup() {
    return new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      picture: new FormControl(''),
    });
  }

  reset() {
    this.signUpForm.reset();
  }

  onSubmit() {
    const email: string = this.signUpForm.get('email').value;
    const password: string = this.signUpForm.get('password').value;
    this.af.auth.createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        userCredentials.user.sendEmailVerification(),
        this.updateCurrentUser(email);
        this.signUpForm.reset();
      })
      .catch(err => this.notifier.display("error", err.message));
  }

  updateCurrentUser(email) {
    const message =
          `A verification email has been sent to ${email}, kindly check your inbox and follow the steps! :) Enjoy!`;
        this.notifier.display("success", message);
  }

}
