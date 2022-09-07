<template>
    <div v-for="todo in props.todos" :key="todo.id">
      <pre>{{ todo }}</pre>
      <hr>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { ITodo } from '@/core/todo';

interface Props {
  todos: ITodo[]
}

const props = defineProps<Props>();
</script>
