import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MainService } from './main.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';

import { CheckoutComponent } from './home/checkout/checkout.component';
import { NewMenuComponent } from './new-menu/new-menu.component';
import { NewUserComponent } from './new-user/new-user.component';
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
import { UpdateUserComponent } from './update-user/update-user.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AgmCoreModule } from '@agm/core';


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("881642856104-gchuqjdr5lgvinqcvlbi1aovp23f8eq6.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("568749596799970")
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CheckoutComponent,
    NewMenuComponent,
    NewUserComponent,
    UpdateUserComponent,
    OrderHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    SocialLoginModule.initialize(config),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCtp-QzkIR4QSrXNJMEHRX9Wn_d0vBSmjQ'
    })
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
