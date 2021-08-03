const app = Vue.createApp({
    data(){
        return {
            result : 0
        }
    },
    methods:{
        add(v){
            this.result = this.result + v;
        }
    },
    computed:{
        getResult(){
            if(this.result < 37){
                return "Not there yet";
            }else if(this.result > 37){
                return "Too much!"
            } 
            return value
        }
    },
    watch: {
        result(newValue){
            if(newValue > 0){
                setTimeout(()=>{
                    this.result = 0
                }, 5000)
            }
        }
    }
})

app.mount('#assignment')