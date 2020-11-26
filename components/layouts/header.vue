<template lang="pug">
  div.header
    NuxtLink.navItem(to='/todolist/all') TodoList
    NuxtLink.navItem(to='/test') Test
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #000000;
}

.navItem {
  margin: 8px;
  cursor: pointer;

  &:hover {
    color: grey;
  }
}
</style>
