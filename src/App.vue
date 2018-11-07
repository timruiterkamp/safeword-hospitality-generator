<template>
  <div id="app">
    <HeaderComponent />
    <MainContent />
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue'
import MainContent from './components/MainContent.vue'

export default {
  name: 'app',
  components: {
    MainContent,
    HeaderComponent
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  min-height: 100vh;
  background-color: #092327;
}
</style>
