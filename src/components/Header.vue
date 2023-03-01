<template>
  <header>
      <div class="nav">
        <img class="logo" src="../assets/logo.png" alt="logo">
        <router-link to="/">Home</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/case">Case</router-link>
        <router-link to="/team">DaCode Specialists</router-link>
        <router-link to="/blog">Blog</router-link>
        <button>Request a quote</button>
      </div>
  </header>
</template>

<script>
export default {
  name: "page-header"
}
</script>
<style scoped>
header{
  padding: 10px;
  margin: 0;
  justify-content: center;
}
header a{
  color: #60E1CB;
  text-decoration: none;
}
header button{
  background-color: #7BC0E3;
  cursor: pointer;
  padding: 10px;
  color: white;
  font-weight: bold;
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 50px;
}
.nav{
  display: flex;
  justify-content: space-around;
  font-weight: bold;
}
.logo{
  width: 200px;
  height: 25px;
}
a:hover,
a.router-link-active,
a.router-link-exact-active {
  color: black;
  cursor: pointer;
}
</style>
