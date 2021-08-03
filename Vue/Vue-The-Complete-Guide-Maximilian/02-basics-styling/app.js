const app = Vue.createApp({
    data(){
        return{
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        }
    },
    methods: {
       boxSelected(value){
        if(value === 'A') this.boxASelected = !this.boxASelected
        if(value === 'B') this.boxBSelected = !this.boxBSelected
        if(value === 'C') this.boxCSelected = !this.boxCSelected
       } 
    },
    computed:{
        boxAClasses(){
            return {active: this.boxASelected};
        }
    }
});

app.mount('#styling');