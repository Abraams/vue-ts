import { ITodo, ITodoManager } from '@/core/todo';

export default class TodoService {
  private manager: ITodoManager;

  constructor(manager: ITodoManager) {
    this.manager = manager;
  }

  getTodos() {
    return this.manager.get();
  }

  getTodoById(id: number) {
    return this.manager.get(id);
  }

  async getOddTodos() {
    const todos = await this.getTodos();

    return todos.reduce<ITodo[]>((list, todo) => {
      if (todo.id % 2 === 1) {
        return [...list, todo];
      }

      return list;
    }, []);
  }
}
