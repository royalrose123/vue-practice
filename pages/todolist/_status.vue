<template lang="pug">
  div.wrapper
    h1.title todo List
    div.filter
      NuxtLink.filter-item(to="/todolist/all") 全部
      NuxtLink.filter-item(to="/todolist/actived") 未完成
      NuxtLink.filter-item(to="/todolist/completed") 已完成
    div.todolist
      Todo.todo(
        v-for="todo in filterTodos"
        :id="todo.id"
        :key="todo.id"
        :todo="todo"
      )
</template>

<script>
export default {
  data() {
    return {}
  },
  async fetch({ store }) {
    await store.dispatch('todos/GET_TODOS')
  },
  computed: {
    filterTodos() {
      const status = this.$route.params.status
      if (status === 'completed') {
        return this.$store.state.todos.list.filter((item) => item.isCompleted)
      }
      if (status === 'actived') {
        return this.$store.state.todos.list.filter((item) => !item.isCompleted)
      }
      return this.$store.state.todos.list
    }
  },
  methods: {}
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
  margin: 4px 8px;
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
