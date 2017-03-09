import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {
  // lastId will auto increase after created new Todo 
  lastId: number = 0;

  // Todo list
  todos: Todo[] = [];

  // GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }
  // GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // POST: /todos
  addTodo(todo: Todo): Promise<TodoDataService> {
    todo.id = this.lastId;
    this.lastId++;
    this.todos.push(todo);
    return new Promise((resolve, reject) => {
      resolve(this);
    });
  }

  //DELETE /todos/:id
  deleteTodoById(id: number): Promise<TodoDataService> {
    this.todos = this.todos.filter(todo => todo.id != id);
    return new Promise((resolve, reject) => {
      resolve(this);
    });
  }

  //PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo) {
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }




  constructor() { }

}
