import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponentComponent } from './components/todo-list-component/todo-list-component.component';
import { CreateTodoComponentComponent } from './components/create-todo-component/create-todo-component.component';
const routes: Routes = [
  { path: 'todos', component: TodoListComponentComponent },
  { path: 'create', component: CreateTodoComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
