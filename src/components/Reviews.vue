<script>
import ReviewService from "@/services/Review.service";

export default {
  name: "Reviews",
  data() {
    return {
      reviews: [],
      reviewsService: null,
      id: 1,
      rating: 0
    }
  },
  methods: {

  },
  mounted() {
    this.reviewsService = new ReviewService();
    this.reviewsService.getByTutorId(this.id).then((response)=>{
      this.reviews = response.data;
      for(let i in this.reviews){
        this.rating += this.reviews[i].stars;
      }
      this.rating = this.rating / this.reviews.length;
    });
  }
}
</script>

<template>
  <div class="tutor">
    <div class="rating">
      <h1>Esteban Soler </h1>
      <h1 class="average"><pv-rating v-model="ratingValue" :cancel="false" :readonly="true" :stars="1"/>{{rating}}.0/5</h1>
    </div>
    <h2>Reviews</h2>
  </div>
  <hr>
  <pv-card class="card" v-for="review in reviews">
    <template #content>
      <div class="content">
        <div class="photoContainer">
          <img alt="student image" class="photo" v-bind:src="review.student.image" />
        </div>
        <div class="text">
          <h3>{{review.student.name}} {{review.student.lastname}}</h3>
          <p>{{review.review}}</p>
        </div>
        <div class="stars">
          <pv-rating v-model="ratingValue" :cancel="false" :readonly="true" :stars="1"/>
          <h1>{{review.stars}}.0/5</h1>
        </div>
      </div>
    </template>
  </pv-card>

</template>

<style scoped>
.card{
  background-color: transparent;
  margin: 3% 20%;
}
.photo{
  width:200px;
}
.content{
  display: flex;
  justify-content: flex-start;
}
.stars, .average{
  margin-left: auto;

}
.photoContainer{
  width:250px;
}

hr{
  background-color: black;
  border-color: transparent;
  padding:1px 5px;
  margin: 0 5%;
}

.tutor {
  padding: 2% 5% 0 5%;
}

.rating {
  padding: 0.2% 2%;
  background-color: white;
  border-radius: 10px;
  display:flex;
}

h1{
  display:flex;
}
</style>