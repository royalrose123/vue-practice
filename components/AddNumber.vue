<template lang="pug">
  div
    label(for='number')
    input(type='text', name='number', place='Enter a number', v-model='number')
    button(@click='addNumber') Add number
</template>

<script>
import { EventBus } from '../utils/EventBus'

export default {
  data() {
    return {
      number: 0
    }
  },
  methods: {
    addNumber() {
      EventBus.$emit('add-number', parseInt(this.number))
    }
  }
}
</script>
