import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppRoutingModule} from "../app.routing";
import { AppModule } from "../app.module";

import {LoginformComponent} from "../login/loginform/loginform.component";
import {ForgotformComponent} from "../login/forgotform/forgotform.component";
import {ResetformComponent} from "../login/resetform/resetform.component";
import { ServiceComponent } from "../service/service.component";
import {AppComponent} from "../app.component";

@NgModule({
    declarations: [
        AppComponent,
        LoginformComponent,
        ForgotformComponent,
        ResetformComponent,
        ServiceComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        // NavbarModule,
        // FooterModule,
        // SidebarModule,
        RouterModule,
        AppRoutingModule
        // LbdModule,
        // HttpClientModule
    ],
    providers: [
        // MealcatagoryService,
        // InstrumentService,
        // TypographyService,
        // LoginformService,
        // ForgotformService,
        // ResetformService
    ],
    bootstrap: [AppComponent]
})
export class LoginModule {
}