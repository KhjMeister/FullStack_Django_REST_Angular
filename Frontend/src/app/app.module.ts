import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/landing/shared/navbar/navbar.component';
import { LoginComponent } from './components/admin/pages/login/login.component';
import { RegisterComponent } from './components/admin/pages/register/register.component';
import { DashboardComponent } from './components/admin/pages/dashboard/dashboard.component';
import { IndexComponent } from './components/landing/pages/index/index.component';

export function tokenGetter(){
  return localStorage.getItem('accessToken');

}

import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { SlidshowComponent } from './components/landing/shared/slidshow/slidshow.component';
import { FooterComponent } from './components/landing/shared/footer/footer.component';
import { ActiveaccountComponent } from './components/landing/pages/activeaccount/activeaccount.component';
import { AuthGuard } from './guards/auth.guard';
import { NotifyService } from './services/notify.service';
import { PostsComponent } from './components/landing/shared/posts/posts.component';
import { PostDetailComponent } from './components/landing/shared/post-detail/post-detail.component';
import { PaginationComponent } from './components/landing/shared/pagination/pagination.component';
import { SidbarComponent } from './components/admin/shared/sidbar/sidbar.component';
import { TopbarComponent } from './components/admin/shared/topbar/topbar.component';
import { BusnessComponent } from './components/landing/pages/busness/busness.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    IndexComponent,
    SlidshowComponent,
    FooterComponent,
    ActiveaccountComponent,
    PostsComponent,
    PostDetailComponent,
    PaginationComponent,
    SidbarComponent,
    TopbarComponent,
    BusnessComponent,
   
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:8000'],
        // disallowedRoutes: ['localhost:5000/auth'],
      },
    })
  ],
  providers: [AuthService,AuthGuard,NotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
