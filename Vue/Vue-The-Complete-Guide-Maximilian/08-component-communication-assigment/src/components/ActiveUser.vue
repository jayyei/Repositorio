<template>
  <h2>{{ user }}</h2>
  <h3>{{ age }}</h3>
</template>
<script>
export default {
  props: {
    user: {
      type: String,
      required: true,
      default: ''
    },
    age: {
      type: Number,
      required: true,
      default: 0
    }
  }
}
</script>