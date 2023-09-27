<template>

  <body>

    <div class="icons">

      <div class="icon-left">
        <router-link to="/user-home" class="link"> <i class="pi pi-home"></i> <h3>Home</h3></router-link>
      </div>

      <div class="icon-left">
        <router-link to="" class="link"> <i class="pi pi-home"></i> <h3>Tutors</h3></router-link>
     </div>

      <div class="icon-left">
        <router-link to="/user-profile" class="link"> <i class="pi pi-user"></i> <h3>Profile</h3> </router-link>
      </div>

      <div class="icon-left">
        <router-link to="/user-edit" class="link"> <i class="pi pi pi-cog"></i> <h3>Settings</h3></router-link>
      </div>

      <div class="icon-left" id="logout">
        <router-link to="" class="link"> <i class="pi pi-sign-out"></i> <h3>Logout</h3></router-link>
      </div>
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
          <i class="pi pi-comments" style="font-size: 7rem"></i>
          <label>Chat</label>
        </div>

        <div class="component">
          <i class="pi pi-clock" style="font-size: 7rem"></i>
          <label>Schedule</label>
        </div>

        <div class="component">
          <i class="pi pi-book" style="font-size: 7rem"></i>
          <label>Qualification</label>
        </div>

      </div>

    </div>

  </body>

</template>

<style scoped>

.icons {
  background-color: #709A8E;
  width: 16%;
  height: 100%;
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

#logout
{
  margin-top: 250px;
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