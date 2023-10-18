<template>
<div class="mt-6 mb-6 ">
        <div class="row justify-content-center bg-custom  ">
            
            <div class="col-md-4  mt-4 mb-4">
                <div class="card">
                      <div class="card-body">
                            
                      </div>
                      <div class="card-footer text-white bg-custom-contact">
                        contato@gmail.com
                      </div>
                    </div>
                <div class="card  custom-no-border mt-4">
                    <div class="card-body custom-card-form-client p-4">
                        <div class="row mt-1">
                            <div class="col ">
                                <label>Nome Completo</label>
                              <input id="name" ref="name" class="form-control bg-custom" @input="updateFormValidity" type="text" placeholder="Digite seu nome completo" required>
                            </div>
                        </div>
                        <div class="row mt-2">
                            
                               <div class="col">
                                <label >E-mail</label>
                              <input id="email"  ref="email" class="form-control bg-custom" @input="updateFormValidity" type="text" placeholder="Digite seu email" required>
                            </div>
                         </div>

                         <div class="row mt-2">
                               <div class="col">
                                <label>Telefone</label>
                              <input id="phone" ref="phone" class="form-control bg-custom" @input="updateFormValidity" type="text"  placeholder="Digite seu telefone" required>
                            
                            </div>
                            <div class="col">
                                <label>CEP</label>
                                <input id="cep"  ref="cep" v-model="cep" class="form-control bg-custom"  type="text" @input="formatCEP" @focusout="handleCepBlur" placeholder="Digite seu CEP" required>
                            </div>
                         </div>
                         <div class="row mt-2">
                            
                            <div class="col">
                             <label>Endereço</label>
                           <input id="address"  ref="address" v-model="logradouro"  class="form-control bg-custom" @input="updateFormValidity" type="text" placeholder="Digite seu endereço" required>
                         </div>
                      </div>

                      <div class="row mt-2">
                               <div class="col">
                                <label>Número</label>
                              <input id="address_number" ref="address_number" class="form-control bg-custom" @input="updateFormValidity" type="text" placeholder="Digite o número" required>
                            
                            </div>
                            <div class="col">
                                <label>Complemento</label>
                                <input id="address_com"  class="form-control bg-custom" type="text" @input="updateFormValidity" placeholder="Digite o complemento">
                            </div>
                         </div>
                         <div class="row mt-2">
                            
                            <div class="col">
                             <label>Bairro</label>
                           <input id="neighborhood" ref="neighborhood"  v-model="bairro" class="form-control bg-custom" @input="updateFormValidity" type="text" placeholder="Digite seu Bairro" required>
                         </div>
                      </div>
                      <div class="row mt-2 mb-2">
                               <div class="col">
                                <label>Cidade</label>
                              <input id="city" ref="city" class="form-control bg-custom" type="text" @input="updateFormValidity" placeholder="Digite sua Cidade" required>
                            
                            </div>
                            <div class="col">
                                <label>Estado</label>
                                <input id="state" ref="state" v-model="uf" @input="updateFormValidity" class="form-control bg-custom" placeholder="Digite o Estado" required>
                              
                            </div>
                         </div>
                    </div>
                </div>
                <div class="card text-left mt-4 custom-card-form-payment " v-if="userFormValid">
                <div class="card  text-left align-items-center custom-no-border">
                    <div class="row  mt-4 ">
                      <div class="col ">
                        <button class="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-start" type="button" data-bs-toggle="button">
                            <font-awesome-icon :icon="['fasl', 'credit-card']" class="fa-2x" style="color: #969696;"/>Crédito
                        </button>
                      </div>
                      <div class="col">
                        <button class="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-start"  type="button" data-bs-toggle="button">
                            <font-awesome-icon :icon="['fab', 'pix']" class="fa-2x" style="color: #969696;" />Pix
                        </button>
                      </div>
                      <div class="col">
                        <button class="btn btn-outline-secondary  w-100 d-flex align-items-center justify-content-start" type="button" data-bs-toggle="button">
                            <font-awesome-icon :icon="['fasl', 'receipt']  " class="fa-2x" style="color: #969696;"/> Boleto
                        </button>
                      </div>
                    </div>
                    
                </div >
                    <div class="row mt-4 ">
                        <div class="col  ">
                            <div class="row mt-1 p-4 ">
                            <div class="col ">
                                <div class="col mt-3">
                                    <label>Número do Cartão</label>
                                    <input id="number_card" class="form-control" v-model="number_card" @input="formatCardNumber" ref="numberCardInput" type="text" placeholder="Número Cartão">
                                </div>
                                <div class="col mt-3">
                                    <label>Titular do Cartão</label>
                                    <input id="cardholder" class="form-control" v-model="cardholder" type="text" ref="cardholderInput" placeholder="Titular do Cartão">
                                </div>
                                <div class="col mt-3">
                                    <label>CPF/CNPJ do Titular</label>
                                    <input id="cpf" class="form-control"  v-model="cpf" @input="formatCPF" type="text" placeholder="CPF">
                                </div>
                                        <div class="row">
                                            <div class="col">
                                                <label>Mes</label>
                                                <select id="month" class="form-select" v-model="month" type="text" placeholder="Mes"></select>
                                            </div>
                                            <div class="col">
                                                <label>Ano</label>
                                                <select id="year" class="form-select" v-model="year" type="text" placeholder="Dia"></select>
                                            </div>
                                            <div class="col">
                                                <label>CVV</label>
                                                <input id="cvv" class="form-control" v-model="cvv" type="text" placeholder="CVV">
                                            </div>
                                        </div>
                                <div class="col mt-3">
                                    <label>Número de Parcelas</label>
                                    <select id="parc" class="form-select" type="text" placeholder="Número Parcelas"></select>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="col p-4 ">
    
                        <div class="card-image">
                         
                          <svg
                            width="330"
                            height="201"
                            viewBox="0 0 330 201"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >

                            <rect y="0.333336" width="330" height="200" rx="8" fill="#1C1D2780" opacity="50" />
                            
                              <image x="250" y="10" width="50" height="50" :href="getCardBrandImage(cardBrand)"/>
                            <text x="30" y="90" font-family="Arial" font-size="14" fill="white">
                              {{ number_card }}
                            </text>
                            <text x="30" y="130" font-family="Arial" font-size="16" fill="white">
                              Titular
                            </text>
                            <text x="30" y="150" font-weight="bold" font-family="Arial" font-size="14" fill="white">
                              {{ cardholder }}
                            </text>
                            <text x="250" y="150" font-family="Arial" font-size="14" fill="white">
                              {{ month }} / {{ year }}
                            </text>
                          </svg>
                        </div>
                        </div>
                    </div>
                    <div class="row mt-1 p-4">
                        <div class="col ">
                                <label class ="col">Detalhes da Compra</label>
                        </div>
                        <div class="mt-3 d-flex">
                            <label class ="col" style=" font-weight: bold;">Serviço Atendimento V2</label>
                            <label>R$ 20,20 / mês</label>
                        </div>
                        <div class="mt-3">
                          <font-awesome-icon :icon="['fas', 'file-invoice-dollar']" /> <label style="font-size: 11px;">Essa cobrança aparecerá na sua fatura como: PAYT*NomeDoProduto</label>
                            <div class="mt-3">
                                <button class ="col btn btn-secondary  col-8 btn-lg" @click="buyNow" type="button">Comprar Agora</button>

                            </div>
                        </div>
                    </div>
                    
            </div>
            
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
    return {
      cep: this.cep, 
      logradouro: '',
      bairro: '',
      localidade: '',
      uf: '',
      number_card: '',
      cvv:'',
      cardholder:'',
      cardBrand: '',
      maxCardNumberLength: 19,
      cpf: '',
      showPayment: false,
      userFormValid: false,
    };
  },
    methods: {

   
  async handleCepBlur() {
    
    const cep = this.cep.replace(/\D/g, '');
    
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      
      if (response.status === 200) {
        this.logradouro = response.data.logradouro;
        this.bairro = response.data.bairro;
        this.localidade = response.data.localidade;
        this.uf = response.data.uf;
      }
    } catch (error) {
      console.log('Erro ao buscar CEP');
    }
  },
  formatCEP() {
     
     this.cep = this.cep.replace(/\D/g, '');
     
     if (this.cep.length > 9) {
       this.cep = this.cep.slice(0, 9);
     }
     if (this.cep.length >= 5) {
       this.cep = this.cep.replace(/^(\d{5})(\d{0,3})$/, '$1-$2');
     }
    
   },
   updateFormValidity() {
   
    this.userFormValid =
      this.$refs.name.checkValidity() &&
      this.$refs.email.checkValidity() &&
      this.$refs.phone.checkValidity() &&
      this.$refs.cep.checkValidity() &&
      this.$refs.address.checkValidity() &&
      this.$refs.neighborhood.checkValidity() &&
      this.$refs.city.checkValidity() &&
      this.$refs.state.checkValidity();
  },
   getCardBrandImage(brand) {
      const brandImages = {
        visa: '/images/visa.png',
        mastercard: '/images/mastercard.png',
        diners: '/images/dinners.png',
        amex: '/images/amex.png',
        hipercard: '/images/hipercard.png',
        elo: '/images/elo.png',
      };
      return brandImages[brand] || '';
    },
    formatCardNumber() {
      this.number_card = this.number_card.replace(/[\s-]/g, '');
      this.cardBrand = this.detectCardBrand(this.number_card);
      this.number_card = this.number_card.replace(/(\d{4})/g, '$1 ').trim();
      if (this.number_card.length > this.maxCardNumberLength) {
        this.number_card = this.number_card.slice(0, this.maxCardNumberLength);
      }
    },
    formatCPF() {
       this.cpf = this.cpf.replace(/\D/g, '');
        if (this.cpf.length > 11) {
          this.cpf = this.cpf.slice(0, 11);
        }
       
        if (this.cpf.length <= 11) {
          this.cpf = this.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        }
    },
    
   detectCardBrand(cardNumber) {
      const cardRegex = {
        visa: /^4[0-9]{15}$/,
        mastercard: /^(50|5[6-9]|6007|6220|6304|6703|6708|6759|676[1-3])|((5(([1-2]|[4-5])[0-9]{8}|0((1|6)([0-9]{7}))|3(0(4((0|[2-9])[0-9]{5})|([0-3]|[5-9])[0-9]{6})|[1-9][0-9]{7})))|((508116)\\d{4,10})|((502121)\\d{4,10})|((589916)\\d{4,10})|(2[0-9]{15})|(67[0-9]{14})|(506387)\\d{4,10})/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        amex: /^3[47][0-9]{13}$/,
        hipercard: /^606282|^3841(?:[0|4|6]{1})0/,
        elo: /^4011(78|79)|^43(1274|8935)|^45(1416|7393|763(1|2))|^50(4175|6699|67[0-6][0-9]|677[0-8]|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9])|^627780|^63(6297|6368|6369)|^65(0(0(3([1-3]|[5-9])|4([0-9])|5[0-1])|4(0[5-9]|[1-3][0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8]|4[1-9]|[5-8][0-9]|9[0-8])|7(0[0-9]|1[0-8]|2[0-7])|9(0[1-9]|[1-6][0-9]|7[0-8]))|16(5[2-9]|[6-7][0-9])|50(0[0-9]|1[0-9]|2[1-9]|[3-4][0-9]|5[0-8]))/,
      };

      for (const brand in cardRegex) {
        if (cardRegex[brand].test(cardNumber)) {
          return brand;
        }
      }

      return '';
    },

    buyNow() {

      if (!this.number_card) {
        this.$refs.numberCardInput.classList.add('border-red');
        this.$refs.numberCardInput.focus();
      } else {
        this.$refs.numberCardInput.classList.remove('border-red');
      }

      if (!this.cardholder) {
        this.$refs.cardholderInput.classList.add('border-red');
        this.$refs.cardholderInput.focus();
      } else {
        this.$refs.cardholderInput.classList.remove('border-red');
      }
      if (this.number_card && this.cardholder) {
        console.log("Compra feita");
      }
    },
  
    //input:required:invalid {
    //  border: 1px solid red;
    //}
}
};
</script>
<style>
.bg-custom {
  background-color: #F6F6F6 !important;
}

.bg-custom-contact{
    background-color: #FF6905 !important;
    color: #FFFF;
}
.custom-card-form-client {
    border: 1px solid #B0B0B0 !important;
    background-color: #F6F6F6 !important;
    border-radius: 4px !important;
}
.custom-card-form-payment {
    background-color: #FFFFFF !important;
    border: 1px solid #B0B0B0;
    border-radius: 4px !important;
}
.custom-no-border{
    border:none !important;
}
.border-red {
  border: 1px solid red !important;
}

</style>