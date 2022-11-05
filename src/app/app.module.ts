import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KtdGridModule } from '@katoid/angular-grid-layout';
import { ViewerModule } from 'ng2-adsk-forge-viewer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgeViewerComponent } from './forge-viewer/forge-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    ForgeViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KtdGridModule,
    ViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
