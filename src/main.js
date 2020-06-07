import Vue from "vue";
import App from "./App.vue";
import './sass/app.scss';
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);

new Vue({
  render: h => h(App)
}).$mount("#app");
