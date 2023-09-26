<template>

  <div class="body">

    <div class="icons">

      <div class="icon-left">
        <i class="pi pi-home" style="font-size: 2.5rem"></i>
        <a href="/user-home" >Home</a>
      </div>

      <div class="icon-left">
        <i class="pi pi-user-edit" style="font-size: 2.5rem"></i>
        <a href="" >Tutors</a>
      </div>

      <div class="icon-left">
        <i class="pi pi-user" style="font-size: 2.5rem"></i>
        <a href="/user-profile" >Profile</a>
      </div>

      <div class="icon-left">
        <i class="pi pi-cog" style="font-size: 2.5rem"></i>
        <a href="" >Settings</a>
      </div>

      <div class="icon-left" id="logout">
        <i class="pi pi-sign-out" style="font-size: 2.5rem"></i>
        <a href="" >Logout</a>
      </div>
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

  </div>


</template>

<style scoped>

*
{
  text-decoration: none;
}

.body
{
  display: flex;
}

.icons {
  background-color: #709A8E;
  margin-top: 10px;
  width: 15%;
  justify-content: center;
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
  background-color: #E3BD86;
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