import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FinderComponent } from './finder/finder.component';
import { MenuComponent } from './menu/menu.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FinderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
