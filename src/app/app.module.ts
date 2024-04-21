import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { TodoModule } from './todo/todo.module';
import { ContactModule } from "./contact/contact.module"
// import { EventSource } from 'shared/services/EventSource';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TodoModule, ContactModule],
  providers: [
    // EventSource
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
