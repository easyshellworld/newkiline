<template>
  
  <TestApp msg="test"/>
  <GetCoin/>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//<img alt="Vue logo" src="./assets/logo.png">
import TestApp from './components/Test.vue'
import GetCoin from './components/Getcoin.vue'

export default {
  name: 'App',
  components: {
    TestApp,
    GetCoin
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
