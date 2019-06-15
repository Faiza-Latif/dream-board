import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { NotificationService } from 'src/app/shared/services/notification/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  mandatoryFilled = true;
  constructor(private af: AngularFireAuth,
    private fd: AngularFireDatabase,
    private notifier: NotificationService) {
    this.loginForm = this.loginFormGroup();
  }

  ngOnInit() {
    this.loginForm.statusChanges.subscribe(status => {
      if (status === 'VALID') {
        this.mandatoryFilled = false;
      }
    });
  }

  loginFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  reset() {
    this.loginForm.reset();
  }

  onSubmit() {
    /**
     * Check if user is authenticated
     */
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.af.auth.signInWithEmailAndPassword(email, password)
    .then((userData) => {
      if (!userData.user.emailVerified) {
        this.notifier.display('error', 'Your email has not yet been verified');
        this.af.auth.signOut();
      } else {
        console.log(userData.user);
        this.fd.database.ref('/user' + userData.user.uid).set(userData.user.email);
        this.notifier.display('success', 'You are logged in motherfuckkker!!!');
    }
  }).catch(err => {this.notifier.display('error', err.message); console.log(err);});
  }
}
