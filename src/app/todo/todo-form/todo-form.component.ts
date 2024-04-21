import { Component, Output, EventEmitter } from '@angular/core';
import { TodoItem } from 'shared/modules/todoItem';
@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  //create event emitter
  @Output() addItem = new EventEmitter<TodoItem>();
  // @Output() filterChange = new EventEmitter<String>();

  newItemText: string = '';
  
  addNewItem() {
    let todoId: number = parseInt((Math.random() * 1000).toString())
    //Emit an event
    if(this.newItemText) this.addItem.emit(new TodoItem(todoId, this.newItemText));
    this.newItemText = ""
  }

//   handleFilterChange(filter: any){
//     console.log("filter", filter)
//      this.filterChange.emit(filter)
// }
}
