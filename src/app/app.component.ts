import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoTaskListComponent } from './todo-task-list/todo-task-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoTaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular_HomeworkWebsite_ITStep';
}
