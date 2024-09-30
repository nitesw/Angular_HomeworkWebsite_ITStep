import { Component } from '@angular/core';
import { TodoTaskComponent } from '../todo-task/todo-task.component';
import { TodoTaskFormComponent } from '../todo-task-form/todo-task-form.component';
import { ITask, TASKS } from '../task';

@Component({
  selector: 'app-todo-task-list',
  standalone: true,
  imports: [TodoTaskComponent, TodoTaskFormComponent],
  templateUrl: './todo-task-list.component.html',
  styleUrl: './todo-task-list.component.css',
})
export class TodoTaskListComponent {
  tasks: ITask[] = TASKS;

  sortByDeadline() {
    this.tasks.sort((a, b) => {
      if (!a.deadline) return 1;
      if (!b.deadline) return -1;
      return a.deadline.getTime() - b.deadline.getTime();
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
