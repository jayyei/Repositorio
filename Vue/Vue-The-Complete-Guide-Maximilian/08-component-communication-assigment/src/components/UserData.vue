<template>
  <input type="text" v-model="username" @keypress.enter="$emit('user-change', username)">
  <input type="number" v-model="age" @keypress.enter="onAgeChange">
</template>
<script>
export default {
  emits: ['user-change', 'age-change'],
  data () {
    return {
      username: null,
      age: null
    }
  },
  methods: {
    onAgeChange() {
      this.$emit('age-change', this.age);
    }
  }
}
</script>