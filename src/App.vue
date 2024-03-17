<template>
  <MainComp msg="Welcome to Your Vue.js App"/>
</template>

<script>
import MainComp from './components/MainComp.vue'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default {
  name: 'App',
  components: {
    MainComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: ce; */
  color: #2c3e50;
  margin-top: 0px;
}
</style>
