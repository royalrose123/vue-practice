<template lang="pug">
  div(:class="['todo', todo.isCompleted ? 'success' : 'danger']")
    p.title {{ todo.title }}
    input.checkbox(
      type="checkbox",
      :checked="todo.isCompleted",
      @click="toggleTodo({ id })"
    )
    p.delete(@click="deleteTodo({ id })") X
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Button',
  props: {
    todo: {
      type: Object,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    ...mapMutations({
      toggleTodo: 'todos/TOGGLE_TODO',
      deleteTodo: 'todos/DELETE_TODO'
    })
  }
}
</script>

<style scoped>
.todo {
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  margin: -1px 0px;
  padding: 8px;
  padding-right: 16px;
}

.success {
  border-left: 4px solid green;
}

.danger {
  border-left: 4px solid red;
}

.title {
  width: 400px;
}

.checkbox {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.delete {
  cursor: pointer;
}
</style>
