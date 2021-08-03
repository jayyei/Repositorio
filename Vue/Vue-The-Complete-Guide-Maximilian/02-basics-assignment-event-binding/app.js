const app = Vue.createApp({
    data(){
        return {
            output1: '',
            output2: ''
        }
    },
    methods: {
        showingAlert(){
            alert('The button is pressed!');
        },
        changeOutput1(e){
            this.output1 = e.target.value;
        },
        changeOutput2(e){
            this.output2 = e.target.value;
        }
    }
})

app.mount('#assignment');