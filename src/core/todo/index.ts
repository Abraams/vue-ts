export interface ITodo {
  id: Id,
  title: string,
  completed: boolean,
  userId: Id
}

export interface ITodoService {
  getTodos(): Promise<ITodo[]>
  getTodoById(id: number): Promise<ITodo>
  getOddTodos(): Promise<ITodo[]>
}

export interface ITodoManager {
  get(): Promise<ITodo[]>
  get(id: number): Promise<ITodo>
}
