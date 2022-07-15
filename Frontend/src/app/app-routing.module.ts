import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveaccountComponent } from './components/landing/pages/activeaccount/activeaccount.component';
import { DashboardComponent } from './components/admin/pages/dashboard/dashboard.component';
import { IndexComponent } from './components/landing/pages/index/index.component';
import { LoginComponent } from './components/admin/pages/login/login.component';
import { RegisterComponent } from './components/admin/pages/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:"",
    component:IndexComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:'',
        runGuardsAndResolvers:'always',
        canActivate:[AuthGuard],
        children:[
          {
            path:"dashboard",
            component:DashboardComponent
          },
          {
            path:"buyaccount",
            component:ActiveaccountComponent
          },
          
        ]
  },
  
    { path:'**',redirectTo:'',pathMatch:'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
