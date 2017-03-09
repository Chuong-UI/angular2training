import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-list-box',
  templateUrl: './todo-list-box.component.html',
  styleUrls: ['./todo-list-box.component.css']
})
export class TodoListBoxComponent implements OnInit {

  constructor() { }

  @Input() todoList: any[];

  @Output() updateTask = new EventEmitter()
  

  updateTaskStatus = (task) => {
    this.updateTask && this.updateTask.next(task);
  }

  ngOnInit() {
  }



}
