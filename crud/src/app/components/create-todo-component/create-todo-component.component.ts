import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-create-todo-component',
  templateUrl: './create-todo-component.component.html',
  styleUrls: ['./create-todo-component.component.css'],
})
export class CreateTodoComponentComponent {
  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter();
  text!: string;
  reminder: boolean = false;
  constructor(private todoService: TodoService) {}
  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
      return;
    }
    const newTodo = {
      text: this.text,
      day: new Date().toLocaleDateString(),
      reminder: this.reminder,
    };
    this.todoService.addTodoItem(newTodo).subscribe();
  }
}
