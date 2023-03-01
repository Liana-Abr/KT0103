<template>
  <div class="container">
    <div class="banner">
      <div class="left">
        <h2>We help you create your <span>website</span> </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at consectetur dolore eius ipsam iure minima pariatur vel voluptates? Corporis.</p>
        <button class="banner-fbtn">Get started</button>
        <button class="banner-sbtn">Contact Us</button>
      </div>
<!--      <div class="right"></div>-->
    </div>
    <div class="ourServices">
      <h3>Our Services</h3>
      <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci et minus molestias optio quod vitae!</p>
      <div class="cards">
        <div class="card"
             v-for="card in cards"
             :key="card.id"
        >
          <div class="square"></div>
          <h3>{{card.title}}</h3>
          <p>{{card.text}}</p>
          <button class="card-btn">Read more &#10230;</button>
        </div>
      </div>
    </div>

    <div class="portfolio">
      <p>Portfolio</p>
      <h3>Our Great Work</h3>
      <div class="btns">
        <button class="portfolio-btn">Website Optimization</button>
        <button class="portfolio-btn">Website Redesign</button>
        <button class="portfolio-btn">Search Engine Optimization</button>
      </div>

      <div class="slider">
        <div class="slider-cards">
          <button> &#x0354; </button>
          <div class="slider-card">

          </div>
          <div class="slider-card">

          </div>
          <div class="slider-card">

          </div>
          <button> &#x0355; </button>
        </div>
      </div>
    </div>







  </div>
</template>

<script>
export default {
  name: "home-page",
  data(){
    return {
      cards: [
        {
          id:"1",
          icon:"window-maximize",
          title: "WordPress Site",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci et minus molestias optio quod vitae!"
        },
        {
          id:"2",
          icon:"fa-brands fa-wordpress-simple",
          title: "WordPress Plugin",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci et minus molestias optio quod vitae!"
        },
        {
          id:"3",
          icon: "fa-light fa-desktop",
          title: "Website Redesign",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci et minus molestias optio quod vitae!"
        },
        {
          id:"4",
          icon: "fa-light fa-gear",
          title: "WordPress Site Optimization",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci et minus molestias optio quod vitae!"
        },
        {
          id:"5",
          icon: "fa-light fa-rocket",
          title: "Search Engine Optimization",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci et minus molestias optio quod vitae!"
        },
        {
          id:"6",
          icon:"fa-light fa-mobile",
          title: "Cross Platform Mobile App",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci et minus molestias optio quod vitae!"
        },
      ],
      portfolioCards:[
        {
          id: "1",
          img: "",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci et minus molestias optio quod vitae!"
        },
        {
          id: "2",
          img:"",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci et minus molestias optio quod vitae!"
        },
        {
          id: "3",
          img:"",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci et minus molestias optio quod vitae!"
        }
      ]
    }
  }
}

</script>
<style scoped>
.banner{
  /*display: flex;*/
  /*justify-content: center;*/
  /*align-items: center;*/
  width: 100%;
  height: 800px;
  background-image: url("../assets/Analyse.png");
  background-position: right;
background-repeat: no-repeat;
  padding: 40px 0 40px 0;
}
.left{
  /* margin: 220px; */
  position: absolute;
  font-size: 30px;
  float: left;
  width: 800px;
  text-align: left;
  top: 20%;
  left: 20%;
}
.banner-fbtn{
  background-color: #60E1CB;
  cursor: pointer;
  padding: 10px;
  color: white;
  font-weight: bold;
  width: 200px;
  height: 70px;
  border: none;
  border-radius: 50px;
  box-shadow: 0px 46px 52px rgba(96, 225, 203, 0.56);
}
.banner-sbtn{
  border: 1px solid lightgray;
  background-color: transparent;
  cursor: pointer;
  padding: 10px;
  color: #60E1CB;
  margin: 20px;
  font-weight: bold;
  width: 200px;
  height: 70px;
  border-radius: 50px;
}
.ourServices{
  background-color: #E9FBF8;
  display: flex;
  font-size: 20px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 1400px;
}
.ourServices h3{
  margin-top: 120px;
  margin-bottom: 0;
  font-size: 30px;
}
.subtitle{
  width: 600px;
  margin-bottom: 4x0px ;
}
.cards{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}
.card{
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  background-color: white;
  border-radius: 12px;
  width: 400px;
  height: 400px;
}
.card-btn{
  border: none;
  font-weight: bold;
  color: #7BC0E3;
  background-color: transparent;
  cursor: pointer;
  width: 140px;
}
.square{
  width: 100%;
  height: 10px;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 20px 20px 0 0;
  background-color: #60E1CB;
}
.portfolio{
  font-size: 30px;
  height: 1200px;
  background-image: url("../assets/Ornament.png");
  background-position: bottom;
  background-size: contain;
  background-repeat: no-repeat;
}
.btns{
  display: flex;
  justify-content: center;
  gap: 40px;
}
.portfolio-btn{
  background-color: transparent;
  cursor: pointer;
  padding: 10px;
  color: #7BC0E3;
  font-weight: bold;
  width: 300px;
  height: 70px;
  border: none;
  border-radius: 50px;
}
.portfolio-btn:hover{
  border: 1px solid #7BC0E3;
}
.slider-card{
  width: 500px;
  height: 400px;
  background-color: #7BC0E3;
}
</style>
