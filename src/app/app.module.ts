import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { SwitchComponentModule } from "./switch-component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, SwitchComponentModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppComponent],
})
export class AppModule {}
