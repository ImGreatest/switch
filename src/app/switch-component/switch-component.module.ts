import { NgModule } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { SwitchComponent } from "./switch-component.component";
import { SWITCH_DEFAULT_OPTIONS } from "./switch-component.options";

@NgModule({
  imports: [CommonModule, NgOptimizedImage],
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
