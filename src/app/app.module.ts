import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FileOverviewSheetComponent } from './event-details/file-overview-sheet/file-overview-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    FileOverviewSheetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
