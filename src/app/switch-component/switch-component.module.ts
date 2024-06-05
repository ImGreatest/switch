import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { SwitchComponent } from "./switch-component.component";
import { BrowserModule } from "@angular/platform-browser";
import { SWITCH_DEFAULT_OPTIONS } from "./switch-component.options";

@NgModule({
  imports: [BrowserModule, CommonModule, NgOptimizedImage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: SWITCH_DEFAULT_OPTIONS,
      useValue: SWITCH_DEFAULT_OPTIONS
    }
  ],
  declarations: [SwitchComponent],
  exports: [SwitchComponent],
})
export class SwitchComponentModule {}
