<template>
  <TodoList :todos="todos" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import TodoList from '@/components/TodoList.vue';
import { ITodo } from '@/core/todo';
import TodoServiceFabric from '@/services/todo/Todo.service.fabric';

const todos = ref<ITodo[]>([]);

onMounted(async () => {
  todos.value = [await TodoServiceFabric.create(1).getTodoById(125)];
});
</script>
