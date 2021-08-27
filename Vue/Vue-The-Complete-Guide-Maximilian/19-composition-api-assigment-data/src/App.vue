<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  
  <!-- with a simple ref -->
  <!-- <h3>{{ goal }}</h3> -->

  <!-- with a ref object -->
  <!-- <h3>{{goal.mainGoal }}</h3> -->

  <!-- with a reactive  -->
  <!-- <h3>{{ goal.mainGoal }}</h3> -->

  <!-- With options api -->
  <h3>{{ goal }}</h3>

  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// import { ref } from 'vue';
// import { reactive } from 'vue';
export default {
  setup() {
    // With separate refs
    // const goal = ref('finish the course');
    // function toggleGoal() {
    //   goal.value = 'Learn some of Vue'
    // }

    // With a ref object
    // const goal = ref({
    //   mainGoal: 'Finish the course'
    // })
    // function toggleGoal() {
    //   goal.value.mainGoal = 'learn some vue'
    // }

    // With a reactive instance
    // const goal = reactive({
    //   mainGoal: 'Finish the course'
    // })
    // function toggleGoal() {
    //   goal.mainGoal = 'learn some vue'
    // }

    // return  {
    //   goal,
    //   toggleGoal
    // }
  },
  data() {
    return {
      goal: 'Finish the course'
    }
  },
  methods: {
    toggleGoal() {
      this.goal = 'Learn some vue'
    }
  }
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>