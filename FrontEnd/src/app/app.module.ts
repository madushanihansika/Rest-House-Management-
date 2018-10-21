import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app.routing';
// import {NavbarModule} from './dash/shared/navbar/navbar.module';
// import {FooterModule} from './dash/shared/footer/footer.module';
// import {SidebarModule} from './dash/sidebar/sidebar.module';
// import {LbdModule} from './dash/lbd/lbd.module';

import {AppComponent} from './app.component';


// import {HomeComponent} from './dash/home/home.component';
// import {UserComponent} from './dash/user/user.component';
// import {TablesComponent} from './dash/tables/tables.component';
// import {TypographyComponent} from './dash/typography/typography.component';
// import {IconsComponent} from './dash/icons/icons.component';
// import {MapsComponent} from './dash/maps/maps.component';
// import {NotificationsComponent} from './dash/notifications/notifications.component';
// import {UpgradeComponent} from './dash/upgrade/upgrade.component';
// import {ViewlocationComponent} from './dash/viewlocation/viewlocation.component';
// import {AddcityComponent} from './dash/addcity/addcity.component';
// import {LocationtypeComponent} from './dash/locationtype/locationtype.component';
//
// import {LoginformComponent} from "./login/loginform/loginform.component";
// import {ForgotformComponent} from "./login/forgotform/forgotform.component";
// import {ResetformComponent} from "./login/resetform/resetform.component";
//
// import {ViewallComponent} from "./dash/viewall/viewall.component";
// import {CreateclienteventComponent} from "./dash/createclientevent/createclientevent.component";
// import {AddeventComponent} from "./dash/addevent/addevent.component";
//
// import {InstrumentComponent} from "./dash/instrument/instrument.component";
//
// import {ViewmealsComponent} from "./dash/viewmeals/viewmeals.component";
// import {MealcatagoryComponent} from "./dash/mealcatagory/mealcatagory.component";
// import {AddmealComponent} from "./dash/addmeal/addmeal.component";
//
// import {UpdateeventsComponet} from "./dash/updateevents/updateevents.component";
// import {UpdatemealComponent} from "./dash/updatemeal/updatemeal.component";
// import {UpdatemealcataComponent} from "./dash/updatemealcata/updatemealcata.component";
// import {UpdateinstrumetComponent} from "./dash/updateinstrumet/updateinstrumet.component";
//
// import {DeleteeventComponent} from "./dash/deleteevent/deleteevent.component";
// import {DeletemealComponent} from "./dash/deletemeal/deletemeal.component";
//
// import {HttpClientModule} from "@angular/common/http";
// import {ServiceComponent} from './service/service.component';
// import {MealcatagoryService} from "./service/mealcatagory.service";
// import {InstrumentService} from "./service/instrument.service";
// import {TypographyService} from "./service/typography.service";
//
// import {ForgotformService} from "./service/forgotform.service";
// import {LoginformService} from "./service/loginform.service";
// import {ResetformService} from "./service/resetform.service";

@NgModule({
    declarations: [
        AppComponent,
        // HomeComponent,
        // UserComponent,
        // TablesComponent,
        // TypographyComponent,
        // IconsComponent,
        // MapsComponent,
        // NotificationsComponent,
        // UpgradeComponent,
        // ViewlocationComponent,
        // AddcityComponent,
        // LocationtypeComponent,
        // LoginformComponent,
        // ForgotformComponent,
        // ResetformComponent,
        // AddeventComponent,
        // ViewallComponent,
        // CreateclienteventComponent,
        // InstrumentComponent,
        // ViewmealsComponent,
        // MealcatagoryComponent,
        // AddmealComponent,
        //
        // UpdateeventsComponet,
        // UpdatemealComponent,
        // UpdatemealcataComponent,
        // UpdateinstrumetComponent,
        //
        // DeleteeventComponent,
        // DeletemealComponent,
        // ServiceComponent
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
export class AppModule {
}
