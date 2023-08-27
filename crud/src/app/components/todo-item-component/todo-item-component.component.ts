import { Component, Input,Output } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-todo-item-component',
  templateUrl: './todo-item-component.component.html',
  styleUrls: ['./todo-item-component.component.css'],
})
export class TodoItemComponentComponent {
  @Input() item!: Todo;
  @Output() onDeleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() onEditTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  editItem(todo: Todo) {
    this.onEditTodo.emit(todo);
  }
  deleteItem(todo: Todo) {
    this.onDeleteTodo.emit(todo);
  }
  onToggle(todo: Todo) {
    this.onToggleReminder.emit(todo);
  }
}
