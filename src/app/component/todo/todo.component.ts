import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
 localItem :string ="";

  todos: Todo[] = [];
  constructor() { 
    this.localItem = JSON.parse(localStorage.getItem('todos')!);
    if(this.localItem == null){
      this.todos=[];
    }
    else{
      this.todos = JSON.parse(JSON.stringify(this.localItem));
    }
   
   
  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo){

    console.log(todo);
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(todo: Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));

  }
}
