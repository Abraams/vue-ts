import ApiClient from '@/api/ApiClient';
import { ITodo } from '@/core/todo';

class TodoApiManager {
  #apiClient = ApiClient;

  #resource = 'https://jsonplaceholder.typicode.com';

  async get(): Promise<ITodo[]>;

  async get(id: number): Promise<ITodo>;

  async get(id: number | undefined = undefined) {
    const url = id ? `${this.#resource}/todos/${id}` : `${this.#resource}/todos`;

    const { data } = await this.#apiClient.get<ITodo | ITodo[]>(url);

    return data;
  }
}

export default new TodoApiManager();
