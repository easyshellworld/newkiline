<template>
  
  <TestApp msg="test"/>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//<img alt="Vue logo" src="./assets/logo.png">
import TestApp from './components/Test.vue'

export default {
  name: 'App',
  components: {
    TestApp
  }
}
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
</style>
