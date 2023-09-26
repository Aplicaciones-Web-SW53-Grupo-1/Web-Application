<template>
  <div class="center-container">
    <div class="persona-estrellas">
      <div class="cuadro-info">
        <div class="info">
          <div>
            <strong>Nombre:</strong> {{ nombre }}
          </div>
          <div>
            <strong>Estrellas:</strong> {{ estrellas }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <p>Reseñas</p>

  <div class="contenido-adicional">
    <div class="reseña">
      <div class="imagen-estrellas">
        <img src="https://cdn.discordapp.com/attachments/1149190528756363337/1155199425409458279/585e4beacb11b227491c3399.png" width="50">
        <img src="https://cdn.discordapp.com/attachments/1149190528756363337/1155604372894515390/2451996.png" width="50">
      </div>
      <div class="info-reseña">
        <h2>Juan Perez:</h2>
        <div class="infore">
          <p>Enseña bien, explica cada código que realiza y deja tareas muy entretenidas</p>
          <p>4.0</p>
        </div>
      </div>
    </div>
  </div>
  <div class="contenido-adicional">
    <div class="reseña">
      <div class="imagen-estrellas">
        <img src="https://cdn.discordapp.com/attachments/1149190528756363337/1155199425409458279/585e4beacb11b227491c3399.png" width="50">
        <img src="https://cdn.discordapp.com/attachments/1149190528756363337/1155604372894515390/2451996.png" width="50">
      </div>
      <div class="info-reseña">
        <h2>Sergio Costa:</h2>
        <div class="infore">
          <p>Un profesor muy amable, si no entiendes a la primera, te vuelve a explicar las veces que sean necesarias</p>
          <p>4.0</p>
        </div>
      </div>
    </div>
  </div>
  <button class="publish-button">Publish Review</button>
</template>

<script>
export default {
  name: "Ratings",
  data() {
    return {
      nombre: 'Esteban Soler',
      estrellas: 4.0
    };
  }
};
</script>

<style scoped>

.center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 10vh;
}


.persona-estrellas {
  width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border: 2px solid #3498db;
  border-radius: 10px;
  background-color: #f1f1f1;
  padding: 20px;
}

.info {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.contenido-adicional {
  text-align: center;
  margin-top: 43px;
}

.reseña {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
}

.imagen-estrellas {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 500px;
}

.info-reseña {
  display: flex;
  flex-direction: row;
}

.infore p:last-child {
  display: flex;
  align-items: center;
}

.publish-button {
  background-color: #00FF00;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 40px;
  margin-left: 700px;
  cursor: pointer;
}
</style>

