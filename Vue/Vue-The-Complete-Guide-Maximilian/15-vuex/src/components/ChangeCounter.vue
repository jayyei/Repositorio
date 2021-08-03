<template>
  <button @click="increment">Add 1</button>
  <button @click="increase({value: 11})">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne() {
      // this.$store.commit('increase', {value: 10});
      // this.$store.commit({
      //   type: 'increase',
      //   value: 10
      // })
    // },
    // ...mapActions(['increment', 'increase'])
    ...mapActions('numbers', {
      increment: 'increment',
      increase: 'increase'
    })
  }
}
</script>