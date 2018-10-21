import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { DashComponent } from "./app/dash/dash.component";

if (environment.production) {
  enableProdMode();

}

platformBrowserDynamic().bootstrapModule(AppModule);
