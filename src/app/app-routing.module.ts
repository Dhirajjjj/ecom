import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{path:'login', component:LoginComponent},
                        {path:"signup", component:SignupComponent}, //canActivate:[authGuard]
                        {path:'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
                        {path:'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
