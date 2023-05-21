import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { NgFor } from '@angular/common';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  toDos: Todo[] = [];
  inputTodo: string = '';
  API_URL: string = 'http://localhost:5000/todos';
  constructor() {}
  ngOnInit(): void {
    this.toDos = [
      {
        content: 'Go For Run',
        completed: false,
      },
      {
        content: 'Coding',
        completed: false,
      },
    ];
  }
  toggleDone(id: number) {
    this.toDos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    });
  }

  deleteTodo(id: number) {
    this.toDos = this.toDos.filter((v, i) => i !== id);
  }

  addTodo() {
    this.toDos.push({
      content: this.inputTodo,
      completed: false,
    });

    this.inputTodo = '';
  }
}
