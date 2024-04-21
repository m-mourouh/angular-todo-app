import { Component } from '@angular/core';
import { TodoItem } from 'shared/modules/todoItem';
import { EventSource } from 'shared/services/EventSource';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  //================================Properties (data)=========================================
  items: TodoItem[] = [];
  constructor(events: EventSource, private todoService: TodoService) {
    events.listen('removeTodoItem', (todo: TodoItem) => {
      console.log(this.items);
      this.items = this.items.filter((item) => item.id != todo.id);
    });
  }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(
      (data: any) => {
        this.items = [...data];
      },
      (error: any) => {
        alert(error);
      }
    );
  }
  filter: any;
  // get filteredList(): TodoItem[] {
  //   return this.items.filter(this.filter)
  // };

  //==========================================================Methods========================

  // addNewTodoItem(e: TodoItem) {
  //   console.log("e", e)
  //   if(this.newItemText) this.items.push(e);
  //   this.newItemText = ""
  // }

  chnageFilter(filter: any) {
    this.filter = filter;
  }

  addNewTodo(task: TodoItem) {
    /*this.todoService.addTask(task).subscribe((data: any) => {
        this.items.push(data)
    })
    */
    this.items.push(task);
  }
}
