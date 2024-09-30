import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { ITask, TASKS } from './task';
import { TodoTaskFormComponent } from './todo-task-form/todo-task-form.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoTaskComponent, TodoTaskFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular_HomeworkWebsite_ITStep';

  tasks: ITask[] = TASKS;

  sortByDeadline() {
    this.tasks.sort((a, b) => {
      if (!a.deadline) return 1;
      if (!b.deadline) return -1;
      return b.deadline.getTime() - a.deadline.getTime();
    });
  }
  sortByPriority() {
    this.tasks.sort((a, b) => {
      return b.isImportant === a.isImportant ? 0 : b.isImportant ? 1 : -1;
    });
  }

  deleteItem(id: number) {
    let index = this.tasks.findIndex((x) => x.id === id);

    if (index !== -1) this.tasks.splice(index, 1);
  }

  createTask(task: ITask) {
    let tmp: Date;

    if (task.deadline) {
      tmp = new Date(task.deadline);
      task.deadline = tmp;
    }
    this.tasks.push(task);
  }
}
