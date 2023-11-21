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
      </div>
      <div class="chat-container">
        <div class="chat-messages" ref="chatMessages">
          <div v-for="(message, index) in messages" :key="index" class="message">
            <div class="message-content">
              <p>{{ message.text }}</p>
              <span>{{ message.timestamp }}</span>
            </div>
            <div class="message-sender">
              <span>{{ message.sender }}</span>
            </div>
          </div>
        </div>
        <div class="message-box">
          <textarea v-model="newMessage" @keyup.enter="sendMessage" placeholder="Escribe aquí"></textarea>
          <button @click="sendMessage">Enviar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageSrc: 'https://cdn.discordapp.com/attachments/1149190528756363337/1155196801918439534/image.png?ex=6562315c&is=654fbc5c&hm=ca0104c7cee17cb566aa5ec2cbff91fc134381a2a4c1ee2f9148367e4dbcf8db&',
      text: 'Esteban Soler',
      messages: [],
      newMessage: ''
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        const timestamp = new Date().toLocaleString();
        const message = {
          text: this.newMessage,
          sender: 'Juan Perez',
          timestamp: timestamp
        };


        this.messages.push(message);
        this.newMessage = '';
        this.scrollToBottom();
      }
    },
    scrollToBottom() {
      this.$refs.chatMessages.scrollTop = this.$refs.chatMessages.scrollHeight;
    },
  },
  created() {
  }
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
  margin-left:13px;
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