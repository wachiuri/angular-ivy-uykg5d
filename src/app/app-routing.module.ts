import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard.module/components/dashboard/DashboardComponent';
import {LoginComponent} from './login.module/components/login/login.component';
import {ResetPasswordComponent} from './login.module/components/resetpassword/ResetPasswordComponent';
import {ForgotPasswordComponent} from './login.module/components/forgotpassword/ForgotPasswordComponent';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'login', component: LoginComponent},
    {path: 'forgotpassword', component: ForgotPasswordComponent},
    {path: 'resetPassword', component: ResetPasswordComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
