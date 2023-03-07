import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from 'src/app/modal/Todo';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  title:string = '';

  constructor(private todoService : TodoService) {}

  ngOnInit(): void {}

  addTodo(){
    const newTodo:Todo = {
      id: uuidv4(),
      title: this.title,
      date: new Date(),
      isComplete: false
    }

    this.todoService.addTodo(newTodo);
    this.title= '';
  }

}
