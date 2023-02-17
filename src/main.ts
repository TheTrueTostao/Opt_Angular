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
    <a target="_blank" href="https://docs.google.com/presentation/d/1hpMyLwcBLOo356sEBjZzusp7WS_GaBo3TToCCnGq8LU/edit#slide=id.g6e0bc7b0bd_0_19">
      Cours  
    </a>
    <tdlst></tdlst>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
