<template>
  <div>
    <li>
      <label>
        <input type="checkbox" :checked="todo.done" @click="handleClick(todo)" />
        <!-- 用  双向绑定也可以实现 -->
        <!-- <input type="checkbox" v-model="todo.done" /> -->
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input v-show="todo.isEdit" type="text" :value="todo.title" @blur="handleBlur(todo,$event)" ref="inputTitle" />
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo)">删除</button>
      <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
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
    handleEdit (todoObj) {
      // 直接设置不生效，因为input框还没出现
      //   this.$refs.inputTitle.focus()

      if (todoObj.hasOwnProperty('isEdit')) {
        todoObj.isEdit = true;
      } else {
        this.$set(todoObj, 'isEdit', true)
      }
      this.$nextTick(function () {
        this.$refs.inputTitle.focus()
      })


    },
    handleBlur (todoObj, event) {
      todoObj.isEdit = false
      this.$bus.$emit("updateTodo", todoObj.id, event.target.value)

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

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>