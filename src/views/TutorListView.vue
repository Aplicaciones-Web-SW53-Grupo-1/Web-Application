<template>
  <div class="tutor-list-view">
    <h1 class="tutorlist">Lista de Tutores</h1>
    <TutorList :tutores="tutores" />
  </div>
</template>

<script>
import TutorList from "@/components/TutorList.vue"; // Asegúrate de importar el componente TutorList.vue
import axios from "axios"; // Importa axios para realizar la solicitud HTTP

export default {
  components: {
    TutorList, // Registra el componente TutorList.vue
  },
  data() {
    return {
      tutores: [], // Inicialmente vacío, se llenará con los tutores obtenidos
    };
  },
  methods: {
    async fetchTutoresFromAPI() {
      try {
        // Realiza una solicitud HTTP para obtener los tutores desde db.json
        const response = await axios.get("http://localhost:3000/tutores"); // Asegúrate de que la URL coincida con la configuración de tu JSON Server
        // Actualiza la lista de tutores con los datos obtenidos de la API
        this.tutores = response.data;
      } catch (error) {
        console.error("Error al obtener tutores:", error);
      }
    },
  },
  mounted() {
    this.fetchTutoresFromAPI();
  },
};
</script>

<style scoped>
body {
  margin: 0;
  background-color: #E3BD86;
  padding: 0;
}
.tutorlist {
  text-align: center; /* Centra el texto horizontalmente */
  font-style: italic;
  /* Agrega más propiedades de estilo según tus preferencias */
}
/* Estilos personalizados para la vista de la lista de tutores */
.tutor-list-view {

}
</style>
