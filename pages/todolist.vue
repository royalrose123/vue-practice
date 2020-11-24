
<template>
  <div class='wrapper'>
    <h1 class='title'>Todo List</h1>
    <div class='todolist'>
      <Todo class='todo' v-for='(todo, index) in todos' :key="todo.id" :todo='todo' :index='index' @delete-todo="handleDeleteTodo"/>
    </div>
  </div>
</template>

<script>
import Todo from '../components/Todo'

export default {
  data(){
    return {
      todos : [
        {title: '吃飯', isCompleted: false},
        {title: '出門', isCompleted: false},
        {title: '買菜', isCompleted: true},
        {title: '剪頭髮', isCompleted: false},
        {title: '運動', isCompleted: false},
      ]
    }
  },
  methods:{
    handleDeleteTodo(selectItemIndex){
      this.todos = this.todos.filter((item,index) =>  index !== selectItemIndex)
    }
  },
  components: {
    Todo,
  }
}
</script>



<style scoped>
  .wrapper{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title{
    margin: 16px;
  }

  .todolist{
    width: 480px;
    height: 600px;
    border: 1px solid black;
    overflow-y: scroll;
    margin: 0px -1px;
  }
</style>
