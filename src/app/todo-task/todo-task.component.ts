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
    if (this.task) this.task.isDone = this.task.isDone === true ? false : true;
  }
  markNew() {
    if (this.task) this.task.isNew = this.task.isNew === true ? false : true;
  }
}
