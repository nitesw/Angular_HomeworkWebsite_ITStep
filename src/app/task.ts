export interface ITask {
  title: string;
  deadline?: Date;
  isImportant: boolean;
  isDone: boolean;
}

export const TASKS: ITask[] = [
  {
    title: 'Hit the gym',
    deadline: new Date(2023, 3, 1),
    isImportant: false,
    isDone: false,
  },
  {
    title: 'Pay bills',
    deadline: new Date(2023, 2, 29),
    isImportant: true,
    isDone: true,
  },
  {
    title: 'Meet John',
    isImportant: false,
    isDone: false,
  },
  {
    title: 'Buy eggs',
    deadline: new Date(2023, 2, 29),
    isImportant: true,
    isDone: false,
  },
  {
    title: 'Read a book',
    isImportant: false,
    isDone: true,
  },
  {
    title: 'Organize office',
    isImportant: false,
    isDone: false,
  },
  {
    title: 'Eat dinner',
    isImportant: false,
    isDone: false,
  },
  {
    title: 'Buy apples',
    deadline: new Date(2023, 2, 5),
    isImportant: true,
    isDone: false,
  },
  {
    title: 'Meet George',
    isImportant: true,
    isDone: false,
  },
  {
    title: 'Feed the cat',
    isImportant: false,
    isDone: false,
  },
  {
    title: 'Write a letter',
    isImportant: false,
    isDone: true,
  },
  {
    title: 'Run 1 km',
    deadline: new Date(2023, 0, 15),
    isImportant: false,
    isDone: false,
  },
];
