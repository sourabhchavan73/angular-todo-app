import { Injectable } from '@angular/core';
import {Todo} from '../modal/Todo';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  todos: Todo[];

  constructor() {
    this.todos = [
      {
        id: '111',
        title: 'learn angular',
        isComplete: false,
        date: new Date()
      },
      {
        id: '222',
        title: 'learn react',
        isComplete: true,
        date: new Date()
      },
      {
        id: '333',
        title: 'go to Market',
        isComplete: false,
        date: new Date()
      }
    ]
   }

   getAllTodos = () => {
    return of(this.todos);
   }

   addTodo = (todo: Todo) => {
    this.todos.push(todo);
   }

   updateTodo = (todo:Todo) => {
    this.todos.map(curTodo => {
      if(curTodo.id === todo.id){
        curTodo.isComplete = !curTodo.isComplete
      }
    })
   }

   deleteTodo(todo:Todo){
    // this.todos.filter(curTodo => curTodo.id !== todo.id);
    // // this.todos = newTodos
    // // console.log(this.todos)
    const index = this.todos.findIndex(curTodo => curTodo.id === todo.id);
    this.todos.splice(index, 1)
   }

}
