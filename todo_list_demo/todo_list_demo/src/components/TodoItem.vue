<template>
  <div>
    <li>
      <label>
        <input type="checkbox" :checked="todo.done" @click="handleClick(todo)" />
        <!-- 用  双向绑定也可以实现 -->
        <!-- <input type="checkbox" v-model="todo.done" /> -->
        <span>{{ todo.title }}</span>
      </label>
      <button class="btn btn-danger" style="display:none">删除</button>
    </li>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo", "checkTodo"],
  methods: {
    handleClick (todoObj) {
      console.log(todoObj)
      // 一般不建议修改props里的数据
      //   todoObj.done = !todoObj.done
      this.checkTodo(todoObj.id)
    }
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
</style>