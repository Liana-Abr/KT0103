<template>
  <footer>
    <div class="text">
      <div class="logo">Logo</div>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
    </div>


    <div class="links">
      <div class="link">
        <h3>Work</h3>
        <button>Blog</button>
        <button>How We Work</button>
        <button>Testimonials</button>
      </div>
      <div class="link">
        <h3>Services</h3>
        <button>Marketing Strategy</button>
        <button>Website Optimization</button>
        <button>Email Marketing</button>
      </div>
      <div class="link">
        <h3>Business Solution</h3>
        <button>Partnership</button>
        <button>About Project</button>
        <button>Corporate</button>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "page-footer"
}
</script>
<style scoped>
footer{
  background-color:#60E1CB ;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo{
  font-size: 30px;
  font-weight: bold;
}
.text{
  text-align: left;
  font-weight: bold;
  width: 500px;
  margin: 200px;
}
.links{
  display: flex;
  gap: 100px;

}
.link{
  display: flex;
  flex-direction: column;
  text-align: left;
}
.link button{
  font-weight: bold;
  text-align: left;
  border: none;
  background-color: transparent;
  color: rgba(41, 37, 37, 0.57);
  cursor: pointer;
}
</style>
