import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionComponent } from './components/action/action.component';
import { HomeComponent } from './components/home/home.component';
import { ActionDetailComponent } from './components/action/action-detail/action-detail.component';
import { ActionListComponent } from './components/action/action-list/action-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionComponent,
    HomeComponent,
    ActionDetailComponent,
    ActionListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
