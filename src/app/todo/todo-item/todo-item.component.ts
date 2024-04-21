import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventSource } from 'shared/services/EventSource';
import { TodoItem } from 'shared/modules/todoItem';

enum Status {
  COMPLETED = 'Completed',
  PENDING = 'Pending',
}

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  // @Input() isComplete!: boolean;
  // @Output() isCompleteChange = new EventEmitter<boolean>();
  // @Input() todoText!: string;
  @Input() itemIndex!: number;
  @Input() todo!: TodoItem;
  constructor(private events: EventSource) {}

  ngOnInit(): void {}
  // @Input() todoItem!: TodoItem;
  // @Input() todoItemChange = new EventEmitter<TodoItem>();
  //getter
  get cssClasses() {
    //return this.isComplete ? "bg-success-subtle  border-success-subtle" : "bg-light-subtle  border-dark-subtle"  //String
    //return this.isComplete ? ["bg-success-subtle", "border-success-subtle"] : []  // Array
    // return {"bg-success-subtle": this.isComplete, "border-success-subtle": this.isComplete} // Object
    return {
      'bg-dark text-white border-dark-subtle ': this.todo.completed,
      'bg-warning-subtle border-warning-subtle': !this.todo.completed,
    };
  }

  get status() {
    return this.todo.completed ? Status.COMPLETED : Status.PENDING;
  }
  toggleStatus() {
    this.todo.completed = !this.todo.completed;
    // this.todo.isCompleteChange.emit(isComplete);
  }

  removeTodoItem() {
    const decesion = confirm('Are you sure, you want to remove this task ?');
    if (decesion) this.events.emit('removeTodoItem', this.todo);
  }
}
