<template>

  <div class="body">

    <div class="container">
      <div class="links">
        <router-link to="/user-home" class="link"><i class="pi pi-home"></i> <h2>Home</h2> </router-link>
        <router-link to="/tutorlist" class="link"> <i class="pi pi-users"></i> <h2>Tutors</h2></router-link>
        <router-link to="/user-profile" class="link"> <i class="pi pi-user"></i> <h2>Profile</h2></router-link>
        <router-link to="/user-edit" class="link"> <i class="pi pi-cog"></i> <h2>Settings</h2></router-link>
      </div>
      <router-link to="/" class="link"> <i class="pi pi-sign-out"></i> <h3>Log out</h3> </router-link>
    </div>

    <div class="profile">

      <div class="border">

        <div class="user">
          <a> <img src="../assets/images/student-icon.png" alt="User Logo" class="logo"></a>
        </div>

        <div class="information">

          <label>Juan Perez</label>
          <br>
          <br>
          <label>10/05/2006</label>
          <br>
          <br>
          <label>946521389</label>
          <br>
          <br>
          <label>juan@gmail.com</label>
        </div>
      </div>

      <div class="user-components">

        <div class="component">

          <router-link to="/chat" class="cards"><i class="pi pi-comments" style="font-size: 4rem"></i></router-link>

          <div class="component-column">
            <label>Chat</label>
            <label id="icon-text">Communicate with your course</label>
          </div>

        </div>

        <div class="component">

          <router-link to="/scoreview/1" class="cards"><i class="pi pi-book" style="font-size: 4rem"></i></router-link>

          <div class="component-column">
            <label>Qualification</label>
            <label id="icon-text">See your progress in your course</label>
          </div>
        </div>

        <div class="component">

          <router-link to="/user-edit" class="cards"> <i class="pi pi-user-edit"  style="font-size: 4rem"></i></router-link>

          <div class="component-column">
            <label>Edit</label>
            <label id="icon-text" >Check or edit your personal information</label>
          </div>
        </div>

      </div>

    </div>

  </div>


</template>

<style scoped>
.cards{
  color:black;
}
.body
{
  display: flex;
}

.container {
  display: flex;
  flex-direction: column;
  background-color: #709A8E;
  height: 90vh;
  justify-content: space-between;
  margin: 10px -15px;
  width: 15%;
}

.links {
  flex-direction: column;
  display: flex;
}

.link{
  display: flex;
  align-items:center;
  gap:1rem;
  margin:10px 25px;
  color: black;
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


.profile
{
  background-color: #E3BD86;
  margin-top: 10px;
  width: 90%;
  padding: 40px;
}

img
{
  width: 150px;
  height: 150px;
}

#logout
{
  margin-top: 155%;
  padding-bottom: 45px;
}

#icon-text
{
  font-size: 0.5cm;
}

label
{
  font-size: 25px;
}

.border
{
  border: 2px solid black;
  border-radius: 33px;
  display:flex;
  justify-content: space-evenly;
}

.user
{
  margin: 30px;
}

.information
{
  margin: 10px;
}

.user-components
{
  display:flex;
  flex-direction: column;
}

.component
{
  display:flex;
  justify-content: flex-start;
  border: 2px solid black;
  border-radius: 33px;
  margin-top: 20px;
}

.component-column
{
  display:flex;
  flex-direction: column;
  padding-left: 50px;
}

.component
{
  padding-left: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
}

a:hover
{
  font-size: 0.5cm;
}

h3
{
  margin-top: 15px;
  margin-left: 15px;
}

</style>

<script>


</script>
