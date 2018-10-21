import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppRoutingModule} from "../app.routing";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { SidebarModule } from "./sidebar/sidebar.module";
import { LbdModule } from "./lbd/lbd.module";
import { AppModule } from "../app.module";

import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";
import { TablesComponent } from "./tables/tables.component";
import { TypographyComponent } from "./typography/typography.component";
import { IconsComponent } from "./icons/icons.component";
import { MapsComponent } from "./maps/maps.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { UpgradeComponent } from "./upgrade/upgrade.component";
import { ViewlocationComponent } from "./viewlocation/viewlocation.component";
import { AddcityComponent } from "./addcity/addcity.component";
import { LocationtypeComponent } from "./locationtype/locationtype.component";
import { AddeventComponent } from "./addevent/addevent.component";
import { ViewallComponent } from "./viewall/viewall.component";
import { CreateclienteventComponent } from "./createclientevent/createclientevent.component";
import { InstrumentComponent } from "./instrument/instrument.component";
import { ViewmealsComponent } from "./viewmeals/viewmeals.component";
import { MealcatagoryComponent } from "./mealcatagory/mealcatagory.component";
import { AddmealComponent } from "./addmeal/addmeal.component";
import { UpdateeventsComponet } from "./updateevents/updateevents.component";
import { UpdatemealComponent } from "./updatemeal/updatemeal.component";
import { UpdatemealcataComponent } from "./updatemealcata/updatemealcata.component";
import { UpdateinstrumetComponent } from "./updateinstrumet/updateinstrumet.component";
import { DeleteeventComponent } from "./deleteevent/deleteevent.component";
import { DeletemealComponent } from "./deletemeal/deletemeal.component";

import {HttpClientModule} from "@angular/common/http";
import { ServiceComponent } from "../service/service.component";
import {MealcatagoryService} from "../service/mealcatagory.service";
import {InstrumentService} from "../service/instrument.service";
import {TypographyService} from "../service/typography.service";

import {ForgotformService} from "../service/forgotform.service";
import {LoginformService} from "../service/loginform.service";
import {ResetformService} from "../service/resetform.service";
import {AppComponent} from "../app.component";

@NgModule({
    declarations: [
        AppModule,
        HomeComponent,
        UserComponent,
        TablesComponent,
        TypographyComponent,
        IconsComponent,
        MapsComponent,
        NotificationsComponent,
        UpgradeComponent,
        ViewlocationComponent,
        AddcityComponent,
        LocationtypeComponent,
        AddeventComponent,
        ViewallComponent,
        CreateclienteventComponent,
        InstrumentComponent,
        ViewmealsComponent,
        MealcatagoryComponent,
        AddmealComponent,
        NavbarComponent,
        FooterComponent,
        UpdateeventsComponet,
        UpdatemealComponent,
        UpdatemealcataComponent,
        UpdateinstrumetComponent,

        DeleteeventComponent,
        DeletemealComponent,
        ServiceComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        SidebarModule,
        RouterModule,
        AppRoutingModule,
        LbdModule,
        HttpClientModule
    ],
    providers: [
        MealcatagoryService,
        InstrumentService,
        TypographyService,
        LoginformService,
        ForgotformService,
        ResetformService
    ],
    bootstrap: [AppComponent]
})
export class DashModule {
}
