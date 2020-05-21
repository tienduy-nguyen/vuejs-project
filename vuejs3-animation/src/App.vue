<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <User/>
    <div class="row">
      <h1>Animations</h1>
      <select v-model="alertAnimation">
        <option value="fade" selected>Fade</option>
        <option value="slide">Slide</option>
      </select>
      <br><br>
      <button class="btn btn-primary" @click="show = !show">Show alert</button>
      <br><hr>
      <transition :name="alertAnimation">
      <div class="alert alert-info" v-if="show">This is a info</div>
      </transition>
       <transition :name="alertAnimation">
      <div class="alert alert-info" v-if="show">This is a info slide</div>
      </transition>
      <transition 
      enter-active-class="animate__animated animate__bounce"
      enter-leave-class="animate__animated animate__shake"
       >
      <div class="alert alert-info" v-if="show">This is a info slide</div>
      </transition>
      
    </div>
  </div>
</template>

<script>

import User from './components/User.vue'

export default {
  name: 'App',
  data(){
    return{
      show: false,
      alertAnimation: 'fade'
    }
  },
  methods:{

  },
  components: {
    User
  }
}
</script>

<style>
.fade-enter{
 opacity: 0;
}
.fade-enter-active{
transition: opacity 1s;
}
.fade-leave{
 opacity: 0;
}
.fade-leave-active{
transition: opacity 1s;

}
.slide-enter{

}
.slide-enter-active{
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}
.slide-leave{

}
.slide-leave-active{
  animation: slide-out 1s ease-out;
  transition: opacity 1s;
  opacity: 0;
}
@keyframes slide-in{
  from{
    transform: translateY(20px);
  }
  to{
    transform: translateY(0);
  }
}
@keyframes slide-out{
  from{
    transform: translateY(0);
  }
  to{
    transform: translateY(20px);
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.alert-info{
  width: 50%;
  background-color:rgba(0, 255, 255,0.2);
  padding: 10px;
  margin:auto auto 4px auto;
  text-align: center;
  border: 1px solid green;
}
.row{
  width: 800px;
  margin: 8px auto;
}

</style>
