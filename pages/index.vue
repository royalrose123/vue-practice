<template lang="pug">
  div.container
    Logo
    h1.title (@click="onTest") {{ name }}
    h2 (v-show="isShow") {{ message }}
    div (v-for="todo in todos" :key="todo.id") {{ todo.name }} {{ todo.age }}
      div.links
        input(v-model="message")
        a(
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        ) Documentation
        a(
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        ) GitHub
</template>

<script>
export default {
  directives: {
    focus: {
      inserted(element) {
        element.focus()
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    todos() {
      return this.$store.state.todos.list
    }
  },
  watch: {
    message(val, oldVal) {}
  },
  methods: {
    onTest() {
      this.isShow = !this.isShow
    },
    onInputChange() {}
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
