import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from "./todo-list/todo-list.component"
import { TodoFilterComponent } from './todo-filter/todo-filter.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoComponent } from './todo.component';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoFormComponent,
    TodoFilterComponent,
    TodoItemComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    TodoComponent,
  ]
})
export class TodoModule { }
