import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './dash/home/home.component';
// import { UserComponent } from './dash/user/user.component';
// import { TablesComponent } from './dash/tables/tables.component';
// import { TypographyComponent } from './dash/typography/typography.component';
// import { IconsComponent } from './dash/icons/icons.component';
// import { MapsComponent } from './dash/maps/maps.component';
// import { NotificationsComponent } from './dash/notifications/notifications.component';
// import { UpgradeComponent } from './dash/upgrade/upgrade.component';
// import { ViewlocationComponent } from './dash/viewlocation/viewlocation.component';
// import { AddcityComponent } from './dash/addcity/addcity.component';
// import {LocationtypeComponent } from './dash/locationtype/locationtype.component';

// import {LoginformComponent} from "./login/loginform/loginform.component";
// import {ForgotformComponent} from "./login/forgotform/forgotform.component";
// import {ResetformComponent} from "./login/resetform/resetform.component";
//
// import { ViewallComponent } from "./dash/viewall/viewall.component";
// import { CreateclienteventComponent } from "./dash/createclientevent/createclientevent.component";
// import {AddeventComponent} from "./dash/addevent/addevent.component";
//
// import { InstrumentComponent } from "./dash/instrument/instrument.component";
//
// import { ViewmealsComponent } from "./dash/viewmeals/viewmeals.component";
// import { MealcatagoryComponent } from "./dash/mealcatagory/mealcatagory.component";
// import { AddmealComponent } from "./dash/addmeal/addmeal.component";
//
// import { UpdateeventsComponet } from "./dash/updateevents/updateevents.component";
// import { UpdatemealComponent } from "./dash/updatemeal/updatemeal.component";
// import { UpdatemealcataComponent } from "./dash/updatemealcata/updatemealcata.component";
// import { UpdateinstrumetComponent } from "./dash/updateinstrumet/updateinstrumet.component";
//
// import { DeleteeventComponent } from "./dash/deleteevent/deleteevent.component";
// import { DeletemealComponent } from "./dash/deletemeal/deletemeal.component";

const routes: Routes =[
    // { path: 'dashboard',      component: HomeComponent },
    // { path: 'user',           component: UserComponent },
    // { path: 'table',          component: TablesComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
    // { path: 'viewlocation',        component: ViewlocationComponent },
    // { path: 'addcity',        component: AddcityComponent },
    // { path: 'locationtype',        component: LocationtypeComponent },
    //
    // { path: 'loginform', component: LoginformComponent },
    // { path: 'forgotform', component: ForgotformComponent },
    // { path: 'resetform', component: ResetformComponent },
    // { path: 'addevent',       component: AddeventComponent },
    // { path: 'viewall',       component: ViewallComponent },
    // { path: 'createclientevent',       component: CreateclienteventComponent },
    // { path: 'instrument', component:InstrumentComponent },
    // { path: 'viewmeals', component: ViewmealsComponent },
    // { path: 'mealcatagory', component: MealcatagoryComponent },
    // { path: 'addmeal' , component: AddmealComponent },
    //
    // { path: 'updateevents', component:UpdateeventsComponet },
    // { path: 'updatemeal', component: UpdatemealComponent },
    // { path: 'updatemealcata', component: UpdatemealcataComponent },
    // { path: 'updateinstrumet' , component: UpdateinstrumetComponent },
    //
    // { path: 'deleteevent', component: DeleteeventComponent },
    // { path: 'deletemeal' , component: DeletemealComponent },

    { path: '',          redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
