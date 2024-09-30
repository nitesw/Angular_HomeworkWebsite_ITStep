import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ITask } from '../task';

@Component({
  selector: 'app-todo-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-task-form.component.html',
  styleUrl: './todo-task-form.component.css',
})
export class TodoTaskFormComponent {
  taskForm: FormGroup;
  @Output() onCreate = new EventEmitter<ITask>();

  constructor(private formBuilder: FormBuilder) {
    this.taskForm = this.formBuilder.group({
      id: [0, Validators.required],
      title: ['', Validators.required],
      deadline: [Date, Validators.required],
      isImportant: ['', Validators.required],
      isDone: [false, Validators.required],
      isNew: [true, Validators.required],
    });
  }

  onSubmit() {
    if (!this.taskForm.valid) {
      console.log('Invalid data!');
      return;
    }

    let task: ITask = this.taskForm.value;
    console.log(task);

    this.onCreate.emit(task);
  }
}
