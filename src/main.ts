import { appConfig } from './app/app.config';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    providers: [{ provide: 'APP_CONFIG', useValue: appConfig }],
  })
  .catch((err) => console.error(err));

