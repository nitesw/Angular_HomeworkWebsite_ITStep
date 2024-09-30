export interface ITask {
  id: number;
  title: string;
  deadline?: Date;
  isImportant: boolean;
  isDone: boolean;
  isNew: boolean;
}

export const TASKS: ITask[] = [
  {
    id: 1,
    title: 'Hit the gym',
    deadline: new Date(2023, 3, 1),
    isImportant: false,
    isDone: false,
    isNew: true,
  },
  {
    id: 2,
    title: 'Pay bills',
    deadline: new Date(2023, 2, 29),
    isImportant: true,
    isDone: true,
    isNew: true,
  },
  {
    id: 3,
    title: 'Meet John',
    isImportant: false,
    isDone: false,
    isNew: false,
  },
  {
    id: 4,
    title: 'Buy eggs',
    deadline: new Date(2023, 2, 29),
    isImportant: true,
    isDone: false,
    isNew: false,
  },
  {
    id: 5,
    title: 'Read a book',
    isImportant: false,
    isDone: true,
    isNew: true,
  },
  {
    id: 6,
    title: 'Organize office',
    isImportant: false,
    isDone: false,
    isNew: false,
  },
  {
    id: 7,
    title: 'Eat dinner',
    isImportant: false,
    isDone: false,
    isNew: true,
  },
  {
    id: 8,
    title: 'Buy apples',
    deadline: new Date(2023, 2, 5),
    isImportant: true,
    isDone: false,
    isNew: true,
  },
  {
    id: 9,
    title: 'Meet George',
    isImportant: true,
    isDone: false,
    isNew: false,
  },
  {
    id: 10,
    title: 'Feed the cat',
    isImportant: false,
    isDone: false,
    isNew: false,
  },
  {
    id: 11,
    title: 'Write a letter',
    isImportant: false,
    isDone: true,
    isNew: true,
  },
  {
    id: 12,
    title: 'Run 1 km',
    deadline: new Date(2023, 0, 15),
    isImportant: false,
    isDone: false,
    isNew: true,
  },
];
