import { Component } from '@angular/core';
import {Todo} from './todo';
import {TodoDataService} from './todo-data.service';
import { RestangularModule } from 'ng2-restangular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [TodoDataService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTodo = new Todo();
  constructor(private todoDataService: TodoDataService, private restangular: RestangularModule) {

  }
  addTodo() {
    if (!this.newTodo.title) return;
    this.todoDataService.addTodo(this.newTodo).then( ()=> {
      console.log('bbbbbbbbb');
      this.newTodo = new Todo();
    });
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
}
