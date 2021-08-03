const app = Vue.createApp({
    data(){
        return {
            myName: 'Jay' ,
            myAge: 24,
            urlImage: 'https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/2d/13/1b/2d131b42-3b37-72e8-efad-3927f7c59113/logo_gsa_ios_color-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png'
        }
    },
    methods: {
        randomNumber(){
            return Math.random();
        }
    }
});

app.mount('#assignment');