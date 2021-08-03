const appp = Vue.createApp({
    data(){
        return {
            tasks: [],
            enteredTask: '',
            isHidden: false
        }
    },
    methods: {
        addTask(){
            this.tasks.push(this.enteredTask);
        }
    },
    computed: {
        isVisible(){
            return this.isHidden? 'Show list' : 'Hide list'
        }
    }
})

appp.mount('#assignment')