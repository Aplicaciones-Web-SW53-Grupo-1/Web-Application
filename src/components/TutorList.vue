<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <div class="tutor-list">
    <div class="p-grid">
      <div v-for="tutor in tutores" :key="tutor.id" class="p-col">
        <Card class="tutor-card">
          <template #content>
            <div class="tutor-info">
              <div class="tutor-name">{{ tutor.name }} {{ tutor.lastname }}</div>
              <div class="tutor-details">
                <div class="tutor-photo">
                  <img :src="tutor.image" alt="Foto del tutor" />
                </div>
                <div class="tutor-price-rating">
                  <div class="tutor-price">
                    <i class="pi pi-dollar"></i> {{ tutor.cost }}
                  </div>
                  <div class="tutor-rating">
                    <i class="pi pi-star"></i> {{ calcularPromedio(tutor) }}
                  </div>
                </div>
                <div class="tutor-specialty">{{ tutor.specialty }}</div>
              </div>
            </div>
          </template>
          <template #footer>
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
    tutores: Array,
    reviews: Array,
  },
  components: {
    Card,
    Button,
  },
  methods: {
    verMas(tutor) {
      router.push('/selected')
    },
    calcularPromedio(tutor) {
      const tutorReviews = this.reviews.filter(review => review.tutorId === tutor.id);
      if (tutorReviews.length === 0) {
        return 0;
      }

      const totalStars = tutorReviews.reduce((total, review) => total + review.stars, 0);
      return totalStars / tutorReviews.length;
    },
  },
};
</script>

<style scoped>
.tutor-card {
  max-width: 600px;

  text-align: center;
  margin: 0 05px;
  background-color: #f5f5f5;
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 6px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
}

.tutor-info {
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
}

.tutor-name {
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    text-align: center;
  }
}

.tutor-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
}

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

.p-button-text {
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
}
.p-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px;
}
</style>
