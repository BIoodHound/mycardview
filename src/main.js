import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import vuetify from './plugins/vuetify';
import Mouseover from 'vue-mouseover';
    
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);
Vue.config.productionTip = false
Vue.use(Mouseover);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
