<template>
    <div class='user-edit'>
        <h4>Edit user details here</h4>
        <span>Name: {{myName}}</span>
        <span>Age: {{myAge}}</span>
        <button @click="changeName">Edit name</button>
        <button @click="changeAge">Edit age</button>
    </div>
</template>

<script>
import {eventBus} from '../main';

export default{
    data(){
        return{
            newName: 'Hana',
            newAge:20,
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
        changeName(){
            let newName = this.newName
            // this.$emit('newNameUpdated', newName);
            this.myName = newName;
            // eventBus.$emit('newNameUpdated', newName);
            eventBus.changeName(newName);

        },
         changeAge(){
             let newAge = this.myAge + 1;
            // this.$emit('newAgeUpdated', newAge);
            this.myAge += 1;
            // eventBus.$emit('newAgeUpdated', newAge);
            eventBus.changeAge(newAge);

        }
    }
}
</script>

<style>
    .user-edit{
        background-color: aquamarine;
        height: 200px;
        width: 200px;
        border: 1 solid #63fdca;
        display: flex;
        flex-direction: column;
        text-align: left ; 
    }
    button{
        /* width: 80px; */
        cursor: pointer;
        margin: 4px 0;
    }
</style>>
