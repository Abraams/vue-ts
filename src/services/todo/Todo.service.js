export default class TodoService {
  #manager;

  constructor(manager) {
    this.#manager = manager;
  }

  getTodos() {
    return this.#manager.get();
  }

  getTodoById(id) {
    return this.#manager.get(id);
  }

  async getOddTodos() {
    const todos = await this.getTodos();

    return todos.reduce((list, todo) => {
      if (todo.id % 2 === 1) {
        return [...list, todo];
      }

      return list;
    }, []);
  }
}
