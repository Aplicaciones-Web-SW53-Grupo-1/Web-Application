<script>
import PaymentService from "@/services/Payment.service";
import router from "@/router";

export default {
  name: "Payment",
  data(){
    return {
      owner: "",
      cardNumber: "",
      expirationDate: "",
      cvv: 0,
      paymentService: null,
      creditCard:[],
    }
  },
  methods:{
    confirm(){
      this.paymentService = new PaymentService();
      this.paymentService.getByParam('?cardNumber=' + this.cardNumber).then((response)=>{
        this.creditCard = response.data
        for (let i in this.creditCard){
          if (this.creditCard[i].owner === this.owner && this.creditCard[i].cardNumber === this.cardNumber && this.creditCard[i].expirationDate === this.expirationDate && this.creditCard[i].cvv === Number(this.cvv)){
            /*Bank process*/
            console.info('Successful payment');
            router.push('/')
          }
          else {
            console.error('Unsuccessful payment');
          }
        }

      })
    }
  }
}
</script>

<template>
  <div class="container">
    <h1>Make the payment</h1>
  </div>
  <div class="sub-title">
    <h2>Your payment details</h2>
  </div>
  <div class="form">
    <div class = "data">
    <div class = "inputContainer">
      <label for="owner">Card holder</label><br>
      <pv-input-text id="owner" type="text" placeholder="Owner" class="inputBox" v-model="owner"/>
    </div>
    <div class = "inputContainer">
      <label for="cardNumber">Card Number</label><br>
      <pv-input-text id="cardNumber" type="password" placeholder="XXXX XXXX XXXX XXXX" class="inputBox" v-model="cardNumber"/>
    </div>
    <div class = "passwords">
      <div class = "inputContainer">
        <label for="expDate">Expiration Date</label><br>
        <pv-input-text id="expDate" type="text" placeholder="MM/YYYY" class="inputBox" v-model="expirationDate"/>
      </div>
      <div class = "inputContainer">
        <label for="cvv">CVV</label><br>
        <pv-input-text id="cvv" type="text" class="inputBox" v-model="cvv"/>
      </div>
    </div>
    </div>
    <div class="creditCard">
      <img src = "https://content-us-2.content-cms.com/9b3f67ef-5a9f-4acc-8ce8-bcc27fa681c7/dxdam/57/5711408d-93ab-4b4a-a014-8259f2fddd48/img_tc-visa-clasica_2x-min.png?tc=1648684027&t=1686075592159"/>
    </div>
  </div>
  <div class="confirmation">
    <div class="checkBox">
      <label>Total amount</label><br>
      <label>S/15.00</label><br>
      <input type="checkbox"/>
      <label>Save card details for future purchases</label>
      <h3></h3>
    </div>
    <div class="sendData">
      <pv-button label="Confirm" class="confirm-button" @click="confirm"></pv-button>
    </div>
  </div>
</template>

<style scoped>
.container, .sub-title{
  padding-left: 60px;
}

.inputContainer{
  padding-left: 60px;
  width:100%;
}

.form, .passwords{
  display:flex;
  font-size:22px;
}

.confirmation{
  display:flex;
  padding-left: 60px;
  font-size:22px;
}

.p-inputtext.p-component.inputBox{
  width:100%;
  background-color: #709A8E;
  border-color: #709A8E;
  color: white;

}

.cardNumber.p-inputtext.p-component.inputBox{
  color:white;
}

::placeholder{
  color: white;
}

.creditCard{
  padding-left: 60px;
}

.data, .confirmation{
  padding-top:30px;
}

.checkBox{
  padding-right: 110px;
  margin-right: 70px;
}

.sendData{
  padding: 20px 0;
  width:410px;
}
.p-button.p-component.confirm-button{
  width:100%;
  background-color: #709A8E;
  border-color: #709A8E;
}
</style>