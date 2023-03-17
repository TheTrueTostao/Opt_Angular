declare var M: any;

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../model/todo';

@Component({
  selector: 'todo-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-item.component.html',
  standalone: true,
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  modification: boolean;
  constructor() {
    this.modification = false;
  }

  @Input()
  todo: Todo;

  @Output()
  newEvent = new EventEmitter<Todo>();

  changeDone() {
    this.todo.done = !this.todo.done;
    this.newEvent.emit(this.todo);
  }

  changeModifier() {
    this.modification = true;
  }

  modifierLabel(nom: string) {
    this.todo.label = nom;
    this.newEvent.emit(this.todo);
  }

  closeEdit(event: any) {
    this.modification = false;
    this.newEvent.emit(this.todo);
  }

  showUserNotification(todo: Todo) {
    M.toast({ html: `${this.todo.label} a été mis à jour` });
  }

  ngOnInit() {}
}
