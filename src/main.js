import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import EvaIcons from "vue-eva-icons";
Vue.config.productionTip = false;
Vue.use(EvaIcons);
Vue.use(Vuetify);
const opts = {
  icons: {
    iconfont: "mdi",
  },
};
new Vue({
  vuetify: new Vuetify(opts),
  render: (h) => h(App),
}).$mount("#app");
