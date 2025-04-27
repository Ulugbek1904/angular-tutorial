import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'todos',
        loadComponent: () => {
            return import('./todos/todos.component').then(m => m.TodosComponent);
        },
    },
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./home/home.component').then(m => m.HomeComponent);
        },
    }
];
