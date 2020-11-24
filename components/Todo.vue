<template>
  <div :class="['todo', todo.isCompleted? 'success':'danger']" >
    <p class='title'>{{todo.title}}</p>
    <input class='checkbox' type='checkbox' v-model='todo.isCompleted'/>
    <p class='delete' @click='deleteTodo'>X</p>
  </div>
</template>


<script>
export default {
  name: 'Button',
  props: ['todo','index'],
  methods:{
    deleteTodo(){
      this.$emit('delete-todo',this.index)
    }
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
