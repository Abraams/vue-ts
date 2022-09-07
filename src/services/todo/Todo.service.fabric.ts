import TodoService from '@/services/todo/Todo.service';
import { ITodoService } from '@/core/todo';
import TodoManagerFabric, { TodoManagerType } from '@/api/todo/TodoManager.fabric';

export default class TodoServiceFabric {
  static create(type: TodoManagerType = 1): ITodoService {
    return new TodoService(TodoManagerFabric.create(type));
  }
}
