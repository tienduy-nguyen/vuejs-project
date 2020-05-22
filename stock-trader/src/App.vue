<template>
  <div class="container">
    <app-header></app-header>
    <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    appHeader: Header
  },
  created() {
    this.$store.dispatch("initStocks");
  }
};
</script>

<style>
.slide-enter-active {
  animation: slide-in 0.2s ease-out forwards;
}
.slice-leave-active {
  animation: slide-out 0.2s ease-out forwards;
}
@keyframes slide-in {
  from {
    transform: translateY(-100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100px);
    opacity: 0;
  }
}
</style>
