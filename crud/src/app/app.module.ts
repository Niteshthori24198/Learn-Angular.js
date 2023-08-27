import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponentComponent } from './components/todo-list-component/todo-list-component.component';
import { TodoItemComponentComponent } from './components/todo-item-component/todo-item-component.component';
import { CreateTodoComponentComponent } from './components/create-todo-component/create-todo-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponentComponent,
    TodoItemComponentComponent,
    CreateTodoComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
