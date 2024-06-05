import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { SwitchComponentModule } from "./switch-component";
import { BrowserModule } from "@angular/platform-browser";
import { TestSwitchLibModule } from "../../projects/test-switch-lib/src/lib/test-switch-lib.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, RouterOutlet, SwitchComponentModule, TestSwitchLibModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppComponent],
})
export class AppModule {}
