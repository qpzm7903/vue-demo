<template>
  <div>
    <li>
      <label>
        <input type="checkbox" :checked="todo.done" @click="handleClick(todo)" />
        <!-- 用  双向绑定也可以实现 -->
        <!-- <input type="checkbox" v-model="todo.done" /> -->
        <span>{{ todo.title }}</span>
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo)">删除</button>
    </li>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    handleClick (todoObj) {
      this.$bus.$emit('checkTodo', todoObj.id)
    },
    handleDelete (todoObj) {
      this.$bus.$emit('deleteTodo', todoObj.id)
    },
    mounted () {

    },
  }
}
</script>

<style  scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>