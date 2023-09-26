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

          <i class="pi pi-comments" style="font-size: 4rem"></i>

          <div class="component-column">
            <label>Chat</label>
            <label id="icon-text">Communicate with your course</label>
          </div>

        </div>

        <div class="component">

          <i class="pi pi-book" style="font-size: 4rem"></i>

          <div class="component-column">
            <label>Qualification</label>
            <label id="icon-text">See your progress in your course</label>
          </div>
        </div>

        <div class="component">

          <i class="pi pi-user"  style="font-size: 4rem"></i>

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

.profile
{
  background-color: #E3BD86;
  margin-top: 10px;
  width: 100%;
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

</style>

<script>


</script>