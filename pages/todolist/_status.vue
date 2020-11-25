<template>
  <div class="wrapper">
    <h1 class="title">Todo List</h1>
    <div class="filter">
      <NuxtLink class="filter-item" to="/todolist/all">全部</NuxtLink>
      <NuxtLink class="filter-item" to="/todolist/actived">已完成</NuxtLink>
      <NuxtLink class="filter-item" to="/todolist/completed">未完成</NuxtLink>
    </div>
    <div class="todolist">
      <Todo
        v-for="(todo, index) in filterTodos"
        :key="todo.id"
        class="todo"
        :todo="todo"
        :index="index"
        @delete-todo="handleDeleteTodo"
        @toggle-todo="handleToggleTodo"
      />
    </div>
  </div>
</template>

<script>
import Todo from '../../components/Todo'

const STATUS = {
  ALL: 'all',
  COMPLETED: 'completed',
  ACTIVED: 'actived'
}

export default {
  components: {
    Todo
  },
  data() {
    return {
      filterStatus: STATUS.ALL,
      todos: [
        { title: '吃飯', isCompleted: false },
        { title: '出門', isCompleted: false },
        { title: '買菜', isCompleted: true },
        { title: '剪頭髮', isCompleted: false },
        { title: '運動', isCompleted: false }
      ]
    }
  },
  computed: {
    filterTodos() {
      const status = this.$route.params.status
      if (status === 'completed') {
        return this.todos.filter((item) => item.isCompleted)
      }
      if (status === 'actived') {
        return this.todos.filter((item) => !item.isCompleted)
      }
      return this.todos
    }
  },
  methods: {
    handleToggleTodo(selectItemIndex) {
      this.todos = this.todos.map((item, index) => {
        if (selectItemIndex === index) {
          return { ...item, isCompleted: !item.isCompleted }
        } else {
          return item
        }
      })
    },
    handleDeleteTodo(selectItemIndex) {
      this.todos = this.todos.filter((item, index) => index !== selectItemIndex)
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.filter {
  display: flex;
  flex-direction: row;
}

.filter-item {
  margin: 0 8px;
}

.title {
  margin: 16px;
}

.todolist {
  width: 480px;
  height: 600px;
  border: 1px solid black;
  overflow-y: scroll;
  margin: 0px -1px;
}
</style>
