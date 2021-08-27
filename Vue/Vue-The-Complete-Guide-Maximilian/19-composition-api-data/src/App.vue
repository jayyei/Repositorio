<template>
  <section class="container">
    <!-- <h2>{{ user.name }}</h2>
    <h3>{{ uAge }}</h3> -->
    <user-data :firstName="firstName" :lastName="lastName"></user-data>
    <button @click="setAge">Change age</button>
    <div>
      <h2>Full name: {{ uName }}</h2>
    </div>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName">
      <input type="text" placeholder="Last Name" ref="lastNameInput">
      <button @click="setLastName">Set LastName</button>
    </div>
  </section>
</template>

<script>
import UserData from './components/UserData.vue'

// maybe you can use ref for simple data and reactive for some objects
// reactive only works with objects
import { ref, isRef, computed, watch, provide } from 'vue';
import { reactive, isReactive } from 'vue';


// you can convert any data to refs with this
// import { toRefs } from 'vue';


export default {
  components: {
    UserData
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
  // replacing with setup
  setup() {
    // let uName = ref('Maximilian');
    let uAge = ref(31);
    // const user = ref({
    //   name: 'Maximilian',
    //   age: 31 
    // })

    provide('userAge', uAge);
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);

    const user = reactive({
      name: 'Maximilian',
      age: 31
    })

    function setNewAge() {
      uAge.value = 32;
    }

    function setLastName() {
      // You cannot access to this.$refs inside of setup
      // lastName.value = this.$refs.lastNameInput.value;
      lastName.value = lastNameInput.value.value;
      // instead

    }
    // methods with refs
    // function setNewAgeRefs() {
    //   uAge.value = 32;
    // }

    const uName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    })

    watch([uAge, uName], function(newValue, oldValue) {
      console.log('old value', oldValue);
      console.log('new value', newValue);

    })

    console.log(uAge.value)
    console.log(user.name, user.age );

    console.log(isRef(uAge.value));
    console.log(isReactive(user.name));
    // setTimeout(function() {
      // Forma de setear datos con ref
      // user.value.name = 'Max'
      // user.value.age = 32
      // uAge.value = 'Max'

      // forma de setear datos con reactive
      // user.name = 'Max',
      // user.age = 32
    // }, 2000)

    // const userRefs = toRefs(user);
    // When you want o expose data to the template, you have to provide the entire proxy object, not only the value
    
    // function setFirstName(event) {
    //   firstName.value = event.target.value;
    // }

    // function setLastName(event) {
    //   lastName.value = event.target.value;
    // }

    return {
      // you cannot expose values, 
      // userName: user.value.name,
      // age: user.value.age
      user,
      setAge: setNewAge,
      // setFirstName,
      // setLastName,
      uName,
      uAge,
      firstName,
      lastName,
      lastNameInput,
      setLastName
      // userName: userRefs.name,
      // userAge: userRefs.age
    }
  },
  // provide() {
  //   return {
  //     age: this.age
  //   }
  // }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>