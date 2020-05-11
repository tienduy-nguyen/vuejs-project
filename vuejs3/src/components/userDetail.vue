<template>
    <div class='user-detail'>
        <h4>User details here</h4>
        <span> My name is: {{myName}} </span>
        <span> My age is: {{myAge}} </span>
        <button @click='reset'>Reset</button>
    </div>
</template>

<script>
import {eventBus} from '../main';

export default{
     data(){
        return{
            defaultName: 'Duy',
            defaultAge:20,
        }
    },
    props: {
        myName:{
            type: String,
        },
        myAge:{
            type: Number,
        }
    },
    methods:{
        reset(){
            let defaultName = this.defaultName;
            let defaultAge = this.defaultAge;
            this.$emit('wasReset', {name : defaultName,age: defaultAge});
        }
    },
    created(){
        eventBus.$on('newNameUpdated', (name) =>{
            this.myName = name;
        }),
        eventBus.$on('newAgeUpdated', (age) =>{
            this.myAge = age;
        })
    }
}
</script>

<style scoped>
    .user-detail{
        height: 200px;
        width: 200px;
        background-color: antiquewhite;
        border: 1 solid #fad4a2;
        display: flex;
        flex-direction: column;
        text-align: left;
    }
    h4{
        padding: 0;
    }
</style>>
