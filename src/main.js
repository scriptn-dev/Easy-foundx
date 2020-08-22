import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueSocialSharing from "vue-social-sharing";
import Clipboard from "v-clipboard";

Vue.use(Clipboard);
Vue.config.productionTip = false;
Vue.use(VueSocialSharing);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
