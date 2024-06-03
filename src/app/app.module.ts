import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { SwitchComponentModule } from "./switch-component/switch-component.module";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, RouterOutlet, SwitchComponentModule],
  bootstrap: [AppComponent],
  exports: [AppComponent],
})
export class AppModule {}
