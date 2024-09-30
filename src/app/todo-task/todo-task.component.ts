import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from '../task';

@Component({
  selector: 'app-todo-task',
  standalone: true,
  imports: [],
  templateUrl: './todo-task.component.html',
  styleUrl: './todo-task.component.css',
})
export class TodoTaskComponent {
  @Input()
  task?: ITask;

  @Output()
  onDelete = new EventEmitter<number>();

  remove() {
    this.onDelete.emit(this.task?.id);
  }

  markCompleted() {
    if (this.task)
      this.task.completed = this.task.completed === true ? false : true;
  }
  markNew() {
    if (this.task) this.task.isNew = this.task.isNew === true ? false : true;
  }
  markImportant() {
    if (this.task)
      this.task.isImportant = this.task.isImportant === true ? false : true;
  }
}
