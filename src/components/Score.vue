<template>
  <div class="score">
    <TabView :model="tabs">
      <template v-for="tab in tabs" :key="tab.title">
        <TabPanel :header="tab.title">
          <div>
            <div class="total">
              <div class="total-label">Total</div>
              <div class="total-value">{{ calcularTotalUsuario(tab.title) }}</div>
            </div>
            <div v-if="tab.title === 'Todos'">
              <div v-for="calificacion in getCalificaciones('Todos')" :key="calificacion.tipo" class="calificacion">
                <div class="tipo">{{ calificacion.tipo }}</div>
                <div class="fecha">{{ calificacion.fecha }}</div>
                <div class="puntaje">{{ calificacion.puntaje }}</div>
              </div>
            </div>
            <div v-else-if="tab.title === 'Calificado'">
              <div v-for="calificacion in getCalificaciones('Calificado')" :key="calificacion.tipo" class="calificacion">
                <div class="tipo">{{ calificacion.tipo }}</div>
                <div class="fecha">{{ calificacion.fecha }}</div>
                <div class="puntaje">{{ calificacion.puntaje }}</div>
              </div>
            </div>
            <div v-else-if="tab.title === 'Enviado'">
              <div v-for="calificacion in getCalificaciones('Enviado')" :key="calificacion.tipo" class="calificacion">
                <div class="tipo">{{ calificacion.tipo }}</div>
                <div class="fecha">{{ calificacion.fecha }}</div>
                <div class="puntaje">{{ calificacion.puntaje }}</div>
              </div>
            </div>
          </div>
        </TabPanel>
      </template>
    </TabView>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import axios from "axios";

export default defineComponent({
  components: {
    TabView,
    TabPanel,
  },
  data() {
    return {
      tabs: [
        { title: "Todos" },
        { title: "Calificado" },
        { title: "Enviado" },
      ],
      calificaciones: [], // Inicialmente vacío
    };
  },
  computed: {
    calificacionesCalificadas() {
      return this.calificaciones.filter(calificacion => calificacion.estado === 'CALIFICADO');
    },
    calificacionesEnviadas() {
      return this.calificaciones.filter(calificacion => calificacion.estado === 'ENVIADO');
    },
  },
  methods: {
    getCalificaciones(tabTitle) {
      if (tabTitle === 'Calificado') {
        return this.calificacionesCalificadas;
      } else if (tabTitle === 'Enviado') {
        return this.calificacionesEnviadas;
      } else {
        return this.calificaciones;
      }
    },
    calcularTotalUsuario(tabTitle) {
      const calificacionesUsuario = this.getCalificaciones(tabTitle);
      const totalUsuario = calificacionesUsuario.reduce((total, calificacion) => {
        const puntajeParts = calificacion.puntaje.split('/');
        if (puntajeParts.length === 2) {
          return total + Number(puntajeParts[0]);
        }
        return total;
      }, 0);
      return totalUsuario + '/' + this.calcularTotalDisponible(tabTitle);
    },
    calcularTotalDisponible(tabTitle) {
      const calificacionesDisponibles = this.getCalificaciones(tabTitle);
      const totalDisponible = calificacionesDisponibles.reduce((total, calificacion) => {
        const puntajeParts = calificacion.puntaje.split('/');
        if (puntajeParts.length === 2) {
          return total + Number(puntajeParts[1]);
        }
        return total;
      }, 0);
      return totalDisponible;
    },
  },
  mounted() {
    // Realiza una solicitud HTTP para obtener las calificaciones desde el archivo db.json
    axios.get("http://localhost:3000/calificaciones").then((response) => {
      this.calificaciones = response.data;
    });
  },
});
</script>

<style scoped>

.score {
  max-width: 600px; /* Aumenta el ancho para una mejor alineación */
  margin: 0 auto;

}

.calificacion {
  display: flex;
  align-items: center; /* Centra verticalmente los elementos */
  border-bottom: 1px solid #ccc; /* Agrega una línea separadora entre las calificaciones */
  padding: 10px 0; /* Espaciado entre las calificaciones */
}

.tipo {
  flex: 3; /* Tipo ocupa más espacio */
  text-align: left; /* Alinea el texto a la izquierda */
}

.fecha {
  flex: 3; /* Fecha ocupa más espacio */
  text-align: left; /* Alinea el texto a la izquierda */
}

.puntaje {
  flex: 2; /* Puntaje ocupa más espacio */
  text-align: right; /* Alinea el texto a la derecha */
}

.total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold; /* Texto en negrita */
}

.total-label {
  flex: 1;
}

.total-value {
  flex: 2;
  text-align: right;
}
</style>
