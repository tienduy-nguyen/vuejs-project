<template>
  <div class="user">
    <h3>The user component</h3>
    <input placeholder="name" v-model='name'/>
    <input placeholder="age" v-model.number='age'/>
    <br />
    <span>My name is {{ name }}</span>
    <br />
    <span>I'am {{age}}</span>
    <div class="user-container">
      <UserDetail :myName="name" 
      :myAge="age"
       @wasReset="name = $event.name, age= $event.age"
      ></UserDetail>
      <UserEdit
        :myName="name"
        :myAge="age"
        @newNameUpdated="name = $event"
        @newAgeUpdated="age = $event"
      ></UserEdit>
    </div>
  </div>
</template>


<script>
import UserDetail from "./userDetail.vue";
import UserEdit from "./userEdit.vue";

export default {
  data() {
    return {
      name: "Duy",
      age: 26
    };
  },
  components: {
    UserDetail,
    UserEdit
  }
};
</script>




<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.user-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>