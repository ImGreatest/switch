import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestSwitchLibComponent } from "./test-switch-lib.component";
import { SWITCH_DEFAULT_OPTIONS } from "./test-switch-lib.options";

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: SWITCH_DEFAULT_OPTIONS,
      useValue: SWITCH_DEFAULT_OPTIONS
    }
  ],
  declarations: [TestSwitchLibComponent],
  exports: [TestSwitchLibComponent],
})
export class TestSwitchLibModule {}
