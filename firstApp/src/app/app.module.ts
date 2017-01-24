import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {LookupService} from './services/lookup.service';
import { UserComponent } from './user/user.component';
import { PhoneformaterPipe } from './phoneformater.pipe';
import { PhonePipe } from './phone.pipe';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    PhoneformaterPipe,
    PhonePipe,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:"Home",component:HomeComponent},
      {path:"Register",component:RegisterComponent},
      {path:"Login",component:LoginComponent},
      {path:"Products",component:ProductsComponent}
    ])
  ],
  providers: [LookupService],
  bootstrap: [AppComponent]
})
export class AppModule { }




