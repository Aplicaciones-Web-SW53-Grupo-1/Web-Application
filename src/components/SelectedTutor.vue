<template>
  <div class="page-container">
    <button class="hire-button">Hire Tutor</button>
    <div class="selected-tutor">
      <div class="tutor-info">
        <img
            src="https://cdn.discordapp.com/attachments/1149190528756363337/1155275088518717531/profesor-mayor-sexo-masculino-que-explica-que-escribe-pizarra-verde_23-2148200956.png"
            alt="Tutor's Photo"
            class="tutor-photo"
        />
        <div class="tutor-details">
          <h2>Esteban Soler</h2>
          <div class="tutor-info-row">
            <span><strong>Age:</strong> 55 años</span>
            <span><strong>Teaches:</strong> Programing</span>
          </div>
          <div class="tutor-info-row">
            <span><strong>Students:</strong> 35 Students</span>
            <span><strong>Price:</strong> S/15.00</span>
          </div>
          <div class="tutor-info-row">
            <span><strong>Rating:</strong> 4.0 <i class="fa fa-star"></i></span>
          </div>
        </div>
      </div>
      <button class="see-review-button">See Review</button>
    </div>


    <div class="additional-box">
      <div class="university-info">
        <h2>Universidad del Pacífico</h2>
        <button class="download-button">Download</button>
      </div>
      <div class="university-info">
        <h2>Universidad de los Andes</h2>
        <button class="download-button">Download</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectedT",
};
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.selected-tutor {
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 500px;
  margin-top: 20px;
}

.hire-button {
  background-color: green;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

.tutor-info {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.tutor-photo {
  width: 200px;
  height: 300px;
  border-radius: 10px;
  margin-right: 20px;
}

.tutor-details {
  text-align: left;
}

.tutor-info-row {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.tutor-info-row span {
  margin-right: 20px;
}

.see-review-button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
}


.additional-box {
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 400px;
  margin-top: 20px;
}

.university-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.download-button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
}
</style>
