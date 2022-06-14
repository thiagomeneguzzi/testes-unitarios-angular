import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from './shared/services/unique-id/unique-id.service';
import { LikeWidgetComponent } from './shared/components/like-widget/like-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    LikeWidgetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [UniqueIdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
