import { SignUpComponent } from './sign-up.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [CommonModule, SignUpRoutingModule, ReactiveFormsModule],
  declarations: [SignUpComponent, LoginComponent]
})

export class SignUpModule {}
