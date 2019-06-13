import { SignUpComponent } from './sign-up.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent},
];
@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forChild(routes)]
})

export class SignUpRoutingModule {}
