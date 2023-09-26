<template>
  <div class="two-column-form">

    <div class="left-column">
      <div class="small-box">
        <img :src="imageSrc" width="99"/>
        <p class="image-text">{{ text }}</p>
      </div>
    </div>

    <div class="right-column">
      <div class="top-content">
        <div class="top-image">
          <img :src="topImageSrc" width="99"/>
        </div>
        <div class="text-container">
          <p class="top-text">{{ topText }}</p>
          <p class="bottom-text">{{ bottomText }}</p>
        </div>
        <div class="top-image">
          <img :src="topImageSrc1" width="99"/>
        </div>
        <div class="text-container">
          <p class="top-text">{{ topText1 }}</p>
          <p class="bottom-text">{{ bottomText1 }}</p>
        </div>
        <div class="top-image">
          <img :src="topImageSrc2" width="99"/>
        </div>
        <div class="text-container">
          <p class="top-text">{{ topText2 }}</p>
          <p class="bottom-text">{{ bottomText2 }}</p>
        </div>
        <div class="top-image">
          <img :src="topImageSrc3" width="99"/>
        </div>
        <div class="text-container">
          <p class="top-text">{{ topText3 }}</p>
          <p class="bottom-text">{{ bottomText3 }}</p>
        </div>
        <div class="top-image">
          <img :src="topImageSrc4" width="99"/>
        </div>
        <div class="text-container">
          <p class="top-text">{{ topText4 }}</p>
          <p class="bottom-text">{{ bottomText4 }}</p>
        </div>
      </div>
      <div class="message-box">
        <textarea v-model="message" placeholder="Escribe aquí"></textarea>
        <button @click="enviarMensaje">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageSrc: 'https://cdn.discordapp.com/attachments/1149190528756363337/1155196801918439534/image.png?ex=6513175c&is=6511c5dc&hm=fa4158ef2917ea2f08a3501d6619c99ad183cb08ba8e75060f7d8c92013203cf&',
      text: 'Esteban Soler',
      topImageSrc: 'https://cdn.discordapp.com/attachments/1149190528756363337/1155196801918439534/image.png?ex=6513175c&is=6511c5dc&hm=fa4158ef2917ea2f08a3501d6619c99ad183cb08ba8e75060f7d8c92013203cf&',
      topText: 'Esteban Soler',
      bottomText: 'buenas tardes soy Esteban soler, tu nuevo tutor',
      message: '',


      topImageSrc1: 'https://cdn.discordapp.com/attachments/1149190528756363337/1155199425409458279/585e4beacb11b227491c3399.png?ex=651319cd&is=6511c84d&hm=d211539df81f10c1f84f7f6e3c14123bbf16afd41cfaf19d8ea32575c5cccced&',
      topText1: 'Juan Perez',
      bottomText1: 'Buenas Tardes Soy juan Perez. Es un gusto conocerlo',

      topImageSrc2: 'https://cdn.discordapp.com/attachments/1149190528756363337/1155196801918439534/image.png?ex=6513175c&is=6511c5dc&hm=fa4158ef2917ea2f08a3501d6619c99ad183cb08ba8e75060f7d8c92013203cf&',
      topText2: 'Esteban Soler',
      bottomText2: 'El gusto es mio, quisiera saber cual es tu plataforma de preferencia para las clases',

      topImageSrc3: 'https://cdn.discordapp.com/attachments/1149190528756363337/1155199425409458279/585e4beacb11b227491c3399.png?ex=651319cd&is=6511c84d&hm=d211539df81f10c1f84f7f6e3c14123bbf16afd41cfaf19d8ea32575c5cccced&',
      topText3: 'Juan Perez',
      bottomText3: 'Le parece bien por Zoom?',

      topImageSrc4: 'https://cdn.discordapp.com/attachments/1149190528756363337/1155196801918439534/image.png?ex=6513175c&is=6511c5dc&hm=fa4158ef2917ea2f08a3501d6619c99ad183cb08ba8e75060f7d8c92013203cf&',
      topText4: 'Esteban soler',
      bottomText4: 'Nos vemos en la clase',
    };
  },
  methods: {
    enviarMensaje() {
      console.log('Mensaje enviado:', this.message);
    },
  },
};
</script>

<style scoped>
.two-column-form {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 100vh;
}

.left-column {
  background-color: beige;
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
  height: 100%;
  overflow: auto;
}

.small-box {
  background-color: lightblue;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.image-text {
  margin-top: 10px;
}

.right-column {
  background-color: beige;
  flex: 2;
  padding: 20px;
  border: 1px solid #ccc;
  text-align: left;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 20px);
  overflow-y: auto;
}
.top-content {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction:column;
  margin-bottom: 10px;
}

.top-image {
  margin-right: 10px;
}

.text-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.top-text {
  margin-bottom: 10px;
}

.bottom-text {
  margin-right: 10px;
}

.message-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
}

textarea {
  width: calc(100% - 100px);
  resize: none;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  line-height: 1.4;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
}


</style>
