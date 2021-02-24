import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './app/pages/main/main.component';
import { ContentComponent } from './app/components/content/content.component';
import { HeaderComponent } from './app/components/header/header.component';
import { SidecontentComponent } from './app/components/sidecontent/sidecontent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ContentComponent,
    HeaderComponent,
    SidecontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
