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
          <button class="slider-btn"> <i class="fa-solid fa-chevron-left"></i> </button>
          <div class="slider-card">
            <img src="../assets/1.png" alt="1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, iste?
          </div>
          <div class="slider-card">
            <img src="../assets/2.png" alt="2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, iste?
          </div>
          <div class="slider-card">
            <img src="../assets/3.png" alt="3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, iste?
          </div>
          <button class="slider-btn"> <i class="fa-solid fa-chevron-right"></i> </button>
        </div>
      </div>
      <button class="portfolio-btn-black">See all</button>
    </div>

<div class="ides-container">
  <div class="ideas">
    <h3>Your idea into <span>reality</span></h3>
    <p>We start every web development project with a project manager from daCode interviewing you about the goal with the project. This is for us to be able to come up with a solution for your SaaS business, estimate a timeline, and come up with a budget.</p>

    <ul class="list">

        <p class="number">1</p>
        <h3>Your idea</h3>
        <p>In order for us at daCode to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company.</p>



        <p class="number">2</p>
        <h3>Strategy meeting</h3>
        <p>This meeting will be a meeting where we together go over our proposed strategy on how we can reach your website goals. Here we will establish a project update system where you will be able to follow the whole process from start to finish.</p>



        <p class="number">3</p>
        <h3>Agile and Scrum framework</h3>
        <p>In this step we will have a team meeting with the project manager and the lead developer and designer. Then we will be working using and agile and scrum framework in order to make sure to deliver your project on time and within budget.</p>


        <p class="number">4</p>
        <h3>Your website goes live</h3>
        <p>The final checks of the website will happen, we will make sure that all tracking pixels, links and user interface is compatible with all different devices. We will also perform a few different tests to make sure that the website is optimised for user experience.</p>

    </ul>
  </div>
</div>


    <div class="interested">
      <h3>Interested to work with us?</h3>
      <p>Send a line here and update daily</p>
      <button class="interested-btn-black">DaCode@example.com</button>
    </div>

    <div class="clients">
      <div class="title">
        <h4>Testiomonials</h4>
        <h3>Our Happy Clients</h3>
      </div>
<!--      <button class="clients-btn"> <i class="fa-solid fa-chevron-left"></i> </button>-->
      <div class="review">
        <h3>5.0</h3>
        <div class="stars">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <p>We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.</p>
      </div>
      <div class="images">
        <img class="transparent" src="../assets/Image.png" alt="profile">
        <img class="transparent" src="../assets/Image.png" alt="profile">
        <img  src="../assets/Image.png" alt="profile">
        <img class="transparent" src="../assets/Image.png" alt="profile">
        <img class="transparent" src="../assets/Image.png" alt="profile">
        <h4>Paulus Haverinen</h4>
        <p>Owner, Ikirakenne Ltd</p>
      </div>
<!--      <button class="clients-btn"> <i class="fa-solid fa-chevron-right"></i> </button>-->
    </div>

    <div class="news">

      <div class="news-left">
        <h3>News & Articles</h3>
        <h2>DaCode Blog</h2>
        <p>
          On daCode blog we will review the latest in web development for the SaaS-, tech- and crypto industry.
        </p>
        <button class="news-btn">
          See All
        </button>
      </div>
<!--      <div class="right"></div>-->
<div class="news-cards">
  <div class="news-card">
    <h3>Why Your SaaS Business should use WordPress</h3>
    <p>A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort</p>
    <button class="card-btn">Read more &#10230;</button>
  </div>
  <div class="news-card">
    <h3>Why Your SaaS Business should use WordPress</h3>
    <p>A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort</p>
    <button class="card-btn">Read more &#10230;</button>
  </div>
  <div class="news-card">
    <h3>Why Your SaaS Business should use WordPress</h3>
    <p>A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort</p>
    <button class="card-btn">Read more &#10230;</button>
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
.left span{
  color: #60E1CB;
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
  margin-bottom: 40px ;
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
.card:nth-child(1){
  box-shadow: 0px 97px 90px rgba(7, 0, 59, 0.15);
}
.card:nth-child(2){
  box-shadow: 0px 97px 90px rgba(7, 0, 59, 0.15);
}
.card:nth-child(3){
  box-shadow: 0px 97px 90px rgba(7, 0, 59, 0.15);
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
  position: relative;
  font-size: 30px;
  height: 1200px;
  background-image: url("../assets/Ornament.png");
  background-position: bottom;
  background-size: contain;
  background-repeat: no-repeat;
}
.portfolio p{
  margin-top: 120px;
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
.slider-cards{
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
  gap: 200px;
  margin: 100px;
}
.slider-btn{
  margin: 150px;
  width: 44px;
  font-size: 30px;
  height: 80px;
  color: #7BC0E3;
  border-radius: 50%;
  box-shadow: 0px 24px 32px rgba(59, 59, 59, 0.32);
  background-color: white;
  border: none;
  padding: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slider-card{
  font-weight: 500;
  width: 500px;
  height: 400px;
  background-color: transparent;
}
.slider-card img{
  width: 600px;
}
.portfolio-btn-black{
  background-color: #292525;
  cursor: pointer;
  padding: 10px;
  color: white;
  font-weight: bold;
  width: 200px;
  height: 70px;
  border: none;
  border-radius: 50px;
  box-shadow: 0px 46px 52px rgba(96, 225, 203, 0.56);
  position: absolute;
  top: 97%;
}
.ides-container{
  background-image: url("../assets/Working.png");
  background-position: right;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
}
.ideas{

  font-weight: 500;
  margin: 120px;
  left: 30%;
  text-align: left;
  width: 1400px;
  height: 1200px;
  display: flex;

  flex-direction: column;
  font-size: 25px;
}

.ideas h3{
  margin: 10px 0 0 0;
}
.ideas span{
  color: #60E1CB;
}
.list h3 {
  color: #60E1CB;
}
.number{
  position: absolute;
  right: 72%;
  display: flex;
  width: 90px;
  height: 90px;
  font-size: 40px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0px 32px 41px rgba(0, 0, 0, 0.13);
  color: #7BC0E3;
  background-color: white;
}
.interested{
  font-size: 30px;
  background-color: #60E1CB;
  height: 800px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.interested-btn-black{
  background-color: #292525;
  cursor: pointer;
  padding: 10px;
  color: white;
  font-weight: bold;
  width: 400px;
  height: 70px;
  border: none;
  border-radius: 50px;
}

.clients{
  position: relative;
  justify-content: center;
  height: 1200px;
}
.clients h4{
  color: #7BC0E3;
  margin: 120px;
}
.title{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 30px;

}

.review{
  position: absolute;
  left: 35%;
  top: 40%;
  width: 800px;
  padding: 20px;
  height: 200px;
  box-shadow: 0px 97px 90px rgba(7, 0, 59, 0.12);
  border-radius: 12px;
}

.stars{
  color: #FBBE36 ;
}
.images{
  position: absolute;
  left: 38%;
  top: 70%;
}
.images img{
  margin: 20px;
  width: 120px;
}
.images h4{
  padding: 0;
  margin: 0;
  font-size: 20px;
}
.images .transparent{
  opacity: 0.4;
  width: 90px;
}


.news{
  height: 1200px;
  position: relative;
  background-color: #E9FBF8;
  display: flex;
  /* flex-direction: column; */
  justify-content: right;
  align-items: center;
}
.news-left{
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  text-align: left;
}
.news-left{
  position: absolute;
  width: 600px;
  font-size: 30px;
  float: left;
  text-align: left;
  top: 20%;
  left: 10%;
}
.news-left h3,h2{
  display: flex;
  text-align: left;
  width: 600px;
}
.news-btn{
  cursor: pointer;
  margin-right: 60%;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: #7BC0E3;
  border: 1px solid #7BC0E3;
  border-radius: 40px;
  background-color: transparent;
  width: 250px;
  height: 70px;
}
.news-cards{
  display: flex;
  justify-content: right;
  float: right;
  gap: 40px;
}
.news-card{
  border-radius: 20px;
  text-align: left;
  font-size: 25px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: white;
}
</style>
