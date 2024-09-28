import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { ITask, TASKS } from './task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular_HomeworkWebsite_ITStep';

  tasks: ITask[] = TASKS;
}
