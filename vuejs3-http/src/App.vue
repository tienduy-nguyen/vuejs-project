<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>
      <h1>Http</h1>
      <div class="form">
        <div class="form-group" method="POST">
          <label>Username</label>
          <input class="form-control" type="text" v-model="user.name" />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input class="form-control" type="email" v-model="user.email" />
        </div>
        <button class="btn btn-primary btn-submit" @click.prevent="submit()">Submit</button>
        <button class="btn btn-primary btn-submit" @click.prevent="fetchData()">Fetch data</button>
        <br />
        <br />
        <hr />
        <ul>
          <li v-for="(ux, index) in users" :key="index">Name: {{ux.name}} - Email: {{ux.email}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  data() {
    return {
      user: {
        name: "",
        email: ""
      },
      users: []
    };
  },
  name: "App",
  components: {
    HelloWorld
  },
  methods: {
    async submit() {
      
      try {
        const res = await this.$http.post(
          "https://d-vuejs-demo.firebaseio.com/data.json",
          this.user
        );
        console.log(res);
      } catch (err) {
        console.log(err);
      }

      // this.$http.post('https://d-vuejs-demo.firebaseio.com/data.json', this.user)
      // .then(res =>{
      //   console.log(res)
      // }, err =>{
      //   console.log(err)
      // })
    },
  async fetchData() {
      try{
        const res = await this.$http.get('https://d-vuejs-demo.firebaseio.com/data.json');
        const data = res.data;
        const resultArray = [];
        for (let key in res.data){
          resultArray.push(data[key])
        }
        this.users = resultArray;
        console.log(resultArray)
      } catch(err){
        console.log(err)
      }

      // this.$http
      //   .get("https://d-vuejs-demo.firebaseio.com/data.json")
      //   .then(res => {
      //     return res.json();
      //   })
      //   .then(data => {
      //     let resultArray = [];
      //     for (let key in data) {
      //       resultArray.push(data[key]);
      //     }
      //     this.users = resultArray;
      //     console.log(resultArray);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.form {
  width: 400px;
  margin: auto auto;
}
.form-group {
  display: block;
  margin-bottom: 20px;
  align-items: left;
}
.form-control {
  float: right;
}
.btn-submit {
  float: right;
}
</style>
