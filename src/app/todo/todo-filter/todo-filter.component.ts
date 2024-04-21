import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { TodoItem } from 'shared/modules/todoItem';

const filters = [
  (item: TodoItem) => item,
  (item: TodoItem) => !item.completed,
  (item: TodoItem) => item.completed,
]

@Component({
  selector: 'todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.scss']
})
export class TodoFilterComponent implements OnInit {
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();

  ngOnInit(): void {
    this.updateFilter("0")
  }
  filterValue: string = "0";
   
  updateFilter(value: string){
    this.filterChange.emit(filters[+value]);
  }
}
