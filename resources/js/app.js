import './bootstrap';

import { createApp } from 'vue';
import App from './components/App.vue'
import PaymentCard from './components/PaymentCard/PaymentCard.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import axios from 'axios';


library.add(fas, fab);
const app = createApp();

app.component('app', App).component('font-awesome-icon', FontAwesomeIcon);
app.component('paymentcard', PaymentCard);
app.mount('#app');
