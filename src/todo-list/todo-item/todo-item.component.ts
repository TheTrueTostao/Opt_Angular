import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'todo-item',
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  standalone: true,
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  constructor() {}

  @Input()
  todo: Todo;

  @Output()
  newEvent = new EventEmitter<Todo>();

  changeDone() {
    this.todo.done = !this.todo.done;
    this.newEvent.emit(this.todo);
  }

  ngOnInit() {}
}
