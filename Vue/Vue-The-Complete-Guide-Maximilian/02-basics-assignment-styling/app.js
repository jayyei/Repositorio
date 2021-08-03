const app = Vue.createApp({
    data(){
        return {
            style: '',
            isVisible: false,
            inStyle: ""
        }
    }, 
    methods: {
        getVisible(){
            this.isVisible = !this.isVisible;
        }
    }

})

app.mount('#assignment')