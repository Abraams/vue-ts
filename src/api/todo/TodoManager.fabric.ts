import { ITodoManager } from '@/core/todo';
import TodoLocalStorageManager from '@/api/todo/Todo.localStorage';
import TodoApiManager from '@/api/todo/Todo.api';

export enum TodoManagerType {
  API = 1,
  LS = 2,
}

export default class TodoManagerFabric {
  static create(type: TodoManagerType = 1): ITodoManager {
    switch (type) {
      case TodoManagerType.API:
        return TodoApiManager;
      case TodoManagerType.LS:
        return TodoLocalStorageManager;
      default:
        return TodoApiManager;
    }
  }
}
