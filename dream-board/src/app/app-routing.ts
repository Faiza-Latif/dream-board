import { SignUpModule } from './auth/sign-up/sign-up.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  { path: '',
    component: HomeComponent},
  { path: 'sign-up',  loadChildren: './auth/sign-up/sign-up.module#SignUpModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
