<template>
  <div>
    <div class="todo-footer" v-show="total">
      <label>
        <!-- <input type="checkbox" :checked="isAllDone" @change="doneAll" /> -->
        <!-- 也可以使用双向绑定 v-model完成 -->
        <input type="checkbox" v-model="isAllDone2" />
      </label>
      <span>
        <span>已完成{{ totalDone }}</span> / {{ todos.length}}
      </span>
      <button class="btn btn-danger" @click="handleClear">清除已完成任务</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  props: ["todos", "clearAll", "allDone"],
  computed: {
    total () {
      return this.todos.length
    },
    totalDone () {
      return this.todos.reduce((pre, currentTodo) => {
        if (currentTodo.done) {
          return pre + 1
        }
        return pre
      }, 0)


    },
    isAllDone () {
      return this.totalDone === this.total && this.total > 0
    },
    isAllDone2: {
      get () {
        return this.totalDone === this.total && this.total > 0

      },
      set (value) {
        this.allDone(value)
      }
    }

  },
  methods: {
    handleClear () {
      this.clearAll()
    },
    doneAll (e) {
      console.log(e.target.checked)
      this.allDone(e.target.checked)
    }
  }

}
</script>

<style  scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>