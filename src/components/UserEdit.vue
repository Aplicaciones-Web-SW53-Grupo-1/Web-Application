<template>

  <body>

    <div class="container">
      <div class="links">
        <router-link to="/user-home" class="link"><i class="pi pi-home"></i> <h2>Home</h2> </router-link>
        <router-link to="/tutorlist" class="link"> <i class="pi pi-users"></i> <h2>Tutors</h2></router-link>
        <router-link to="/user-profile" class="link"> <i class="pi pi-user"></i> <h2>Profile</h2></router-link>
        <router-link to="/user-edit" class="link"> <i class="pi pi-cog"></i> <h2>Settings</h2></router-link>
      </div>
      <router-link to="/" class="link logout"> <i class="pi pi-sign-out"></i> <h3>Log out</h3> </router-link>
    </div>

    <div class="profile">

      <div class="imageUser">

        <a href=""> <img src="../assets/images/student-icon.png" alt="User Logo" class="logo"></a>
      </div>

      <div class="formulary">

        <div class="file-1">

          <div class="input">
            <label for="username">Username</label>
            <br>
            <pv-input-text id="username" v-model="username" aria-describedby="username-help" />
          </div>

          <div class="input">
            <label for="email">Email</label>
            <br>
            <pv-input-text id="email" v-model="email" aria-describedby="username-help" />
          </div>
          
          <div class="input">
            <label for="cellphone">Cellphone</label>
            <br>
            <pv-input-text id="cellphone" v-model="cellphone" aria-describedby="lastname-help" />
          </div>

          <pv-button class="input" id="save" >Save</pv-button>

        </div>

        <div class="file-2">

          <div class="input">
            <label for="lastname">Last Name</label>
            <br>
            <pv-input-text id="lastname" v-model="lastname" aria-describedby="lastname-help" />
          </div>

          <div class="input">
            <label for="dateBirth">Date of Birth</label>
            <br>
            <pv-calendar v-model="date" id="date" dateFormat="dd/mm/yy"></pv-calendar>
          </div>

        </div>

      </div>

    </div>

  </body>


</template>

<style scoped>

* {
  text-decoration: none;
}

body
{
  display: flex;
  width: 100%;
  height: 600px;
}

.container {
  display: flex;
  flex-direction: column;
  background-color: #709A8E;
  height: 89vh;
  justify-content: space-between;
  margin: 0 -15px;
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



#logout
{
  margin-top: 140%;
  padding-bottom: 45px;
}

#username, #lastname, #email, #date, #cellphone, #save
{
  border-color: #004330;
  width: 150px;
  height: 30px;
}

a:hover
{
  font-size: 0.5cm;
}

.profile
{
  display:flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  margin-top: 10px;
}

.formulary
{
  display:flex;
  color: #6C6B6B;
}

.input
{
  margin-top: 35px;
  margin-right: 100px;
}

img
{
  width: 200px;
  height: 250px;
}

#save
{
  justify-content: center;
  color: black;
  background-color: #709A8E;
  border-color: #004330;
}

h3
{
  margin-top: 15px;
  margin-left: 15px;
}

</style>

<script>

export default
{
  data() {
    return {
      username: '',
      email: '',
      cellphone: '',
      lastname: '',
      date:''
    };
  },
};

</script>