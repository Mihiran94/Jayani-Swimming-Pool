import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgFlashMessagesModule } from "ng-flash-messages";
import { JwtModule } from "@auth0/angular-jwt";

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { ValidateService } from "./services/validate.service";
import { AuthService } from "./services/auth.service";
import { ItemService } from "./services/item.service";
import { UserItemService } from "./services/user-item.service";

import { AuthGuard } from "./guards/auth.guard";
import { AdminItemComponent } from './components/admin-item/admin-item.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';
import { AdminModule } from './components/admin/admin.module';


export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ...RoutingComponents,
    AdminItemComponent,
    AdminListComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgFlashMessagesModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['http://localhost:5000'],
        blacklistedRoutes: ['http://localhost:5000/user/authenticate']
      }
    }),
  ],
  providers: [
    ValidateService,
    AuthService,
    ItemService,
    UserItemService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
