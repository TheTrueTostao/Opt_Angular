import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../model/todo';

@Component({
  selector: 'tdlst',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class TodoListComponent implements OnInit {
  public label: string;
  public todos: Todo[] = [
    { label: 'manger', done: true },
    { label: 'dormir', done: false },
    { label: 'coder', done: true },
    { label: 'partir', done: false },
  ];
  constructor() {}

  /**
   * Change l'etat de la tache (a faire/faire)
   */
  changeDone(t: Todo) {
    t.done = !t.done;
  }

  estDansListe() {
    for (let t of this.todos) {
      if (t.label == this.label) {
        return false;
      }
    }
    return true;
  }
  /**
   * Ajoute une tache a la liste de tache
   */
  add() {
    if (this.label.length != 0) {
      if (this.estDansListe() == true) {
        this.todos.push({ label: this.label, done: false });
      }
    }
  }

  ngOnInit() {}
}
