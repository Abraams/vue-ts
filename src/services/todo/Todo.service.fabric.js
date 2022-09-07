import TodoService from '@/services/todo/Todo.service.js';
import TodoManagerFabric from '@/api/todo/TodoManager.fabric';

export default class TodoServiceFabric {
  static create(type = 1) {
    return new TodoService(TodoManagerFabric.create(type));
  }
}
