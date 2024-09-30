import { ITask } from './task';

export interface IDummyJson {
  limit: number;
  skip: 0;
  todos: ITask[];
  total: number;
}
