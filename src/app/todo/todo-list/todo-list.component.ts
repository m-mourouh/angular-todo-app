import { Component, Input } from '@angular/core';
import { TodoItem } from 'shared/modules/todoItem';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() items: TodoItem[] = [];

}
