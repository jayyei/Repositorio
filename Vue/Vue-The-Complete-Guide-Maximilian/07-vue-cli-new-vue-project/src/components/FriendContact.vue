<template>
    <li>
        <h2>{{name}} {{isFavorite? '(Favorite)' : '' }}</h2>
        <button @click="toggleDetails">{{detailsAreVisible? 'Hide' : 'Show'}} Details</button>
        <button @click="toggleFavorite">Change favorite</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone: </strong> {{phoneNumber}}</li>
            <li><strong>Email: </strong> {{emailAddress}}</li>
        </ul>
        <button @click="$emit('delete', id)">Delete</button>
    </li>
</template>

<script>
export default {
    //or props : ['id', 'name', 'isFavorite']
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress: String,
        isFavorite: {
            type: Boolean,
            required: false,
            default: false,
           /*  validator: function(value){
                return value === '1' || value === '0';
            } */
        }
    },
    // con emits defines los eventos que puede arrojar el componente personalizado
    emits: ['toggle-favorite', 'delete'],
    /* emits: {
        'toggle-favorite': function(id){
            if(id){
                return true;
            }else {
                console.warn("Id is missing");
                return false;
            }
        }
    }, */
    data(){
        return {
            detailsAreVisible: false
        }
    },
    methods: {
        toggleDetails(){
           this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavorite(){
            this.$emit('toggle-favorite', this.id);
        }
    }
}
</script>