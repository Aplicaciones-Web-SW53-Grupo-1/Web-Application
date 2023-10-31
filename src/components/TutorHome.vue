<template>

  <body>

  <div class="container">
    <div class="links">
      <router-link to="/tutor-home" class="link"><i class="pi pi-home"></i> <h2>Home</h2> </router-link>
      <router-link to="/studentlist" class="link"> <i class="pi pi-users"></i> <h2>Students</h2></router-link>
      <router-link to="/tutor-prof" class="link"> <i class="pi pi-user"></i> <h2>Profile</h2></router-link>
      <router-link to="/tutor-edit" class="link"> <i class="pi pi-cog"></i> <h2>Settings</h2></router-link>
    </div>
    <router-link to="/" class="link logout"> <i class="pi pi-sign-out"></i> <h3>Log out</h3> </router-link>
  </div>

  <div class="central">

    <div class="news">

      <a href=""> <img src="../assets/images/sunedu.jpg" alt="Sunedu Logo" class="logo"></a>

      <div class="text-1">

        <label>
          Top 5 of the best Peruvian universities according to SUNEDU
        </label>

        <p>
          The National Superintendency of Higher University Education (Sunedu) <br>
          announced in the III Biennial Report on the University Reality in Peru <br>
          about the 10 best universities in Peru. On the list is the Universidad <br>
          Nacional Mayor de San Marcos (UNMSM) and the National University of <br>
          Engineering (UNI), but the one in first place is a private university.
        </p>
      </div>
    </div>

    <div class="components">

      <div class="component">
        <router-link to="/tutor-chat" class="cards"> <i class="pi pi-comments" style="font-size: 7rem"></i></router-link>
        <label>Chat</label>
      </div>

      <div class="component">
        <router-link to="/tutor-calendar" class="cards"><i class="pi pi-clock" style="font-size: 7rem"></i></router-link>
        <label>Schedule</label>
      </div>

      <div class="component">
        <router-link to="/scoreview" class="cards"><i class="pi pi-star" style="font-size: 7rem"></i></router-link>
        <label>Reviews</label>
      </div>

    </div>

  </div>

  </body>

</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  background-color: #709A8E;
  height: 89vh;
  justify-content: space-between;
  margin: 0 -15px;
  width: 15%;
}

.cards{
  color:black;
}

.links {
  flex-direction: column;
  display: flex;
}

.link{
  display: flex;
  align-items:center;
  gap:1rem;
  margin:10px;
  color: black;
  padding:1rem;
  border-radius: 10px;
  width: 80%;
  height: 20%;
}
.link h2, .link h3{
  font-weight: bold;

}


@media (hover: hover) {
  .link:hover {
    background-color: #709A8E;
    opacity: 0.7;
    color: white;
  }
}


.icon-left i
{
  align-items: baseline;
  margin-top: 15px;
  margin-right: 20px;
  margin-left: 10px;
}

.icon-left a
{
  color:black;
  font-size: 0.4cm;
}

a:hover
{
  font-size: 0.5cm;
}

body
{
  display:flex;
  background-color: #E3BD86;
  width: 100%;
  height: 600px;
}

img
{
  width: 250px;
  height: 150px;
}

.news
{
  display:flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  background-color: #709A8E;
  border: 1px solid black;
  border-radius: 33px;
}

.text-1
{
  display:flex;
  flex-direction: column;
  font-weight: 500;
  margin-top: 40px;
  margin-left: 20px;
  color: #FFFFFF;
}

.text-1 label
{
  color: black;
  font-size: 0.5cm;
  font-weight: 700;
  padding-bottom: 15px;
}

.central
{
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.components
{
  margin-top: 80px;
  display:flex;
  justify-content: space-evenly;
  width: 100%;
}

.component
{
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #FFFFFF;
  align-items: center;
  width: 150px;
  height: 250px;
  border: 1px solid black;
  border-radius: 33px;
}

.component label
{
  font-size: 0.6cm;
  font-weight: 700;
}

h3
{
  margin-top: 15px;
  margin-left: 15px;
}

</style>

<script>

</script>