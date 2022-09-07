import { ITodo } from '@/core/todo';

class TodoLocalStorageManager {
  async get(): Promise<ITodo[]>;

  async get(id: number): Promise<ITodo>;

  // eslint-disable-next-line class-methods-use-this
  async get(id: number | undefined = undefined) {
    // логика по получению todo из LS

    const todos = [
      {
        id: 123,
        title: 'super title',
        completed: false,
        userId: 555,
      },
      {
        id: 124,
        title: 'super title',
        completed: false,
        userId: 555,
      },
      {
        id: 125,
        title: 'super title',
        completed: false,
        userId: 555,
      },
    ];

    return id ? todos.find((t) => t.id === id) : todos;
  }
}

export default new TodoLocalStorageManager();
