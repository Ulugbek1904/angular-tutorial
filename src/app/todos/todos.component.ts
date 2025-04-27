import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { NgIf } from '@angular/common';
import { HighlightCompletedTodoDirective } from '../directives/highlight-completed-todo.directive';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';

@Component({
  selector: 'app-todos',
  imports: [NgIf, HighlightCompletedTodoDirective, FormsModule, FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal<string>('');

  ngOnInit() {
    this.todoService.getTodosFromApi().pipe(
      catchError((err) => {
        console.error('Error fetching todos', err);
        throw err;
      })
    ).subscribe((todos) => {
      this.todoItems.set(todos);
    });
  }
}
