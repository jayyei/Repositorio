// Vue executing any method you're using anywhere in your HTML code


const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      lastName: "",
      //fullname: "",
    };
  },
  methods: {
    submitForm(e) {
      //e.preventDefault();
      alert("Submitted!");
    },
    setName(e, lastName) {
      this.name = `${e.target.value}`;
      //e.target.value = '';
    },
    add(n) {
      this.counter = this.counter + n;
    },
    reduce(e, n) {
      if (this.counter <= 0) {
        this.counter = 0;
        return;
      }
      this.counter = this.counter - n;
    },
    resetInput() {
      this.name = "";
    },
  },
  watch: { // Watcher solo mira una propiedad del data, de hecho se tiene que llamar de esa misma manera
    counter(value){
      if(value>50){
        setTimeout(()=>{
          this.counter = 0;
        }, 2000)
      }
    }
    /* name(value) {
      //it is the same name of data 'name' asi funciona la conexion de un watcher
      if(value === '') this.fullname = '';
      this.fullname = value + " " + this.lastName;
    },
    lastName(value){
      if(value === '') this.fullname = ''
      this.fullname =  this.name + ' ' + value;
    } */
  },
  // Vue will be aware of their dependencies and only reexceute it if one of the dependencies changed
  computed: {
    fullname(){
      console.log('running again')
      if(this.name === '' || this.lastName === '') return ''
      return this.name + ' ' + this.lastName;
    }
  },
});

app.mount("#events");
