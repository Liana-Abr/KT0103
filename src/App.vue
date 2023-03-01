<template>
  <page-header></page-header>
  <main-page></main-page>
<!--  <page-footer></page-footer>-->
</template>

<script>


import PageHeader from "@/components/Header";
// import PageFooter from "@/components/Footer";
import MainPage from "@/pages/Main";
export default {
  name: 'App',
  components: {
    MainPage,
    // PageFooter,
    PageHeader

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
