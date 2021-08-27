<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';
export default {
  props: ['firstName', 'lastName'],
  // computed: {
  //   userName() {
  //     return this.firstName + ' ' + this.lastName;
  //   }
  // }
  setup(props, context) {
    const uName = computed(function () {
      return props.firstName + ' ' + props.lastName;
    });

    const age = inject('userAge');
    // context will have slots, attrs and emit
    console.log(context);
    // context.emit('save-data', 1); //this.$emit('save-data', 1);

    onBeforeMount(function() {
      console.log('onBeforeMount')
    })

    onMounted(function() {
      console.log('onMounted');
    })

    onBeforeUpdate(function() {
      console.log('onBeforeUpdate');
    })

    onUpdated(function() {
      console.log('onUpdated');
    })

    onBeforeUnmount(function() {
      console.log('onBeforeUnmount');
    })

    onUnmounted(function() {
      console.log('onUnmounted');
    })

    return {
      userName: uName,
      age,
    };
  },
};
</script>
