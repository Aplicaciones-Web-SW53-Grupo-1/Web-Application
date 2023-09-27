<template>
  <div class="tutor-list">
   <div class="p-grid">
      <div v-for="tutor in tutores" :key="tutor.id" class="p-col-12 p-md-6 p-lg-4">
        <Card class="tutor-card">
          <!-- Contenido de la tarjeta -->
          <template #content>
            <div class="tutor-info">
              <!-- Nombre del tutor -->
              <div class="tutor-name">{{ tutor.nombre }}</div>

              <!-- Contenedor para la foto y los detalles -->
              <div class="tutor-details">
                <!-- Foto del tutor (en un cuadro pequeño con bordes redondeados) -->
                <div class="tutor-photo">
                  <img :src="tutor.photo" alt="Foto del tutor" />
                </div>

                <!-- Precio y Puntaje -->
                <div class="tutor-price-rating">
                  <div class="tutor-price">
                    <i class="pi pi-dollar"></i> {{ tutor.precio }}
                  </div>
                  <div class="tutor-rating">
                    <i class="pi pi-star"></i> {{ tutor.puntaje }}
                  </div>
                </div>

                <!-- Especialidad -->
                <div class="tutor-specialty">{{ tutor.especialidad }}</div>
              </div>
            </div>
          </template>
          <template #footer>
            <!-- Botón "See More" -->
            <Button class="p-button-text" @click="verMas(tutor)">See More</Button>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from 'primevue/card';
import Button from 'primevue/button';
import router from "@/router";

export default {
  props: {
    tutores: Array, // Recibe la lista de tutores como prop
  },
  components: {
    Card,
    Button,
  },
  methods: {
    verMas(tutor) {
      router.push('/selected')
    },
  },
};
</script>

<style scoped>
.tutor-card {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  background-color: #f5f5f5;
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

}

/* Estilos para la información del tutor */
.tutor-info {
  display: flex;
  flex-direction: column;
}

/* Estilos para el nombre del tutor */
.tutor-name {
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
}

/* Estilos para el contenedor de la foto y los detalles */
.tutor-details {
  display: flex;
  justify-content: space-between; /* Distribuye los elementos a lo largo del espacio disponible */
  align-items: center; /* Alinea verticalmente los elementos */
  margin-top: 20px;
}

/* Estilos para la foto del tutor */
.tutor-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fff;
}

.tutor-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Estilos para el precio y puntaje */
.tutor-price-rating {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tutor-price,
.tutor-rating {
  font-style: italic;
  margin-bottom: 15px;
}

/* Estilos para el botón "See More" */
.p-button-text {
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;

}
</style>
