<template>
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import alertMixin from '../mixins/alert.js'

export default {
  mixins: [alertMixin],
  // The options exposed by the mixin are merged with the options you have in your component
  // by default data is simply combined, but if you have the same property or data in your component, the component options will win
  data() {
    return {
      alertTitle: 'Delete the user?',
      alertIsVisible: true
    }
  }
};
</script>