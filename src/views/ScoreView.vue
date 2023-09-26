<template>
  <div class="score-view">
    <h1 class="calificaciones">Calificaciones</h1>
    <Score :calificaciones="calificaciones" />

  </div>
</template>

<script>
import Score from "@/components/Score.vue"; // Importa el componente Score.vue
import axios from "axios";

export default {
  components: {
    Score,
  },
  data() {
    return {
      calificaciones: [], // Inicialmente vacío
    };
  },
  mounted() {
    // Realiza una solicitud HTTP para obtener las calificaciones desde el archivo db.json
    axios.get("http://localhost:3000/calificaciones").then((response) => {
      this.calificaciones = response.data;
    });
  },
};
</script>
<style scoped>
body {
  margin: 0;
  background-color: #E3BD86;
  padding: 0;
}
.calificaciones {
  text-align: center; /* Centra el texto horizontalmente */
  font-style: italic;
  /* Agrega más propiedades de estilo según tus preferencias */
}
  /* Estilos personalizados para la vista de la lista de tutores */
  .score-view {


}
</style>

