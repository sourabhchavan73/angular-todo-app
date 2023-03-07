import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from './../../modal/Todo';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  faTrash = faTrash

  constructor(private TodoService: TodoService ){}

  ngOnInit(): void {
    this.TodoService.getAllTodos().subscribe(todos => {
      this.todos = todos;
    })
  }

  updateTodo(todo: Todo){
    this.TodoService.updateTodo(todo);
  }

  addTodo(todo: Todo){
    this.TodoService.addTodo(todo);
  }

  deleteTodo(todo:Todo){
    this.TodoService.deleteTodo(todo);
  }

}
