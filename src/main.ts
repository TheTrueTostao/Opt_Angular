import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, TodoListComponent],
  template: `
    <h1>ToDoList</h1>
    <tdlst></tdlst>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
