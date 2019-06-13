import { SignUpComponent } from './sign-up.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpRoutingModule } from './sign-up-routing.module';


@NgModule({
  imports: [CommonModule, SignUpRoutingModule],
  declarations: [SignUpComponent]
})

export class SignUpModule {}
