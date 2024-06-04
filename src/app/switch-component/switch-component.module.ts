import { NgModule } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { SwitchComponent } from "./switch-component.component";
import { SWITCH_DEFAULT_OPTIONS } from "./switch-component.options";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  imports: [BrowserModule, CommonModule, NgOptimizedImage],
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
