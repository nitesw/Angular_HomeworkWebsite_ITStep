export interface ITask {
  id: number;
  todo: string;
  deadline?: Date;
  isImportant: boolean;
  completed: boolean;
  isNew: boolean;
  userId: number;
}

// export const TASKS: ITask[] = [
//   {
//     id: 1,
//     todo: 'Hit the gym',
//     deadline: new Date(2023, 3, 1),
//     isImportant: false,
//     completed: false,
//     isNew: true,
//   },
//   {
//     id: 2,
//     todo: 'Pay bills',
//     deadline: new Date(2023, 2, 29),
//     isImportant: true,
//     completed: true,
//     isNew: true,
//   },
//   {
//     id: 3,
//     todo: 'Meet John',
//     isImportant: false,
//     completed: false,
//     isNew: false,
//   },
//   {
//     id: 4,
//     todo: 'Buy eggs',
//     deadline: new Date(2023, 2, 29),
//     isImportant: true,
//     completed: false,
//     isNew: false,
//   },
//   {
//     id: 5,
//     todo: 'Read a book',
//     isImportant: false,
//     completed: true,
//     isNew: true,
//   },
//   {
//     id: 6,
//     todo: 'Organize office',
//     isImportant: false,
//     completed: false,
//     isNew: false,
//   },
//   {
//     id: 7,
//     todo: 'Eat dinner',
//     isImportant: false,
//     completed: false,
//     isNew: true,
//   },
//   {
//     id: 8,
//     todo: 'Buy apples',
//     deadline: new Date(2023, 2, 5),
//     isImportant: true,
//     completed: false,
//     isNew: true,
//   },
//   {
//     id: 9,
//     todo: 'Meet George',
//     isImportant: true,
//     completed: false,
//     isNew: false,
//   },
//   {
//     id: 10,
//     todo: 'Feed the cat',
//     isImportant: false,
//     completed: false,
//     isNew: false,
//   },
//   {
//     id: 11,
//     todo: 'Write a letter',
//     isImportant: false,
//     completed: true,
//     isNew: true,
//   },
//   {
//     id: 12,
//     todo: 'Run 1 km',
//     deadline: new Date(2023, 0, 15),
//     isImportant: false,
//     completed: false,
//     isNew: true,
//   },
// ];
