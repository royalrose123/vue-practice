<template lang="pug">
  div
    h2 {{numbers}}
</template>

<script>
import { EventBus } from '../utils/EventBus'

export default {
  data() {
    return {
      numbers: [1, 3, 5, 6, 7]
    }
  },
  created() {
    this.handleAddNumber()
  },
  methods: {
    handleAddNumber() {
      EventBus.$on('add-number', (payload) => {
        this.numbers.push(payload)
      })
    }
  }
}
</script>
