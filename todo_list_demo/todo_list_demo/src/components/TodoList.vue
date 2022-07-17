<template>
  <div>
    <ul class="todo-main">
      <TodoItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" />
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
export default {
  name: "TodoList",
  components: { TodoItem },
  data () {
    return {
      todos: [
        { id: '001', title: "code", done: true },
        { id: '002', title: "code", done: false },
        { id: '003', title: "code", done: true },
      ]
    }
  }
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>