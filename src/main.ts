import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "@/assets/css/tailwind.css";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fab, fas, far);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

/**
 * Vue Component Global Registration
 */
const requireComponent = require.context("./components/", true, /\.vue$/);
requireComponent.keys().forEach(relativeFilePath => {
  const componentConfig = requireComponent(relativeFilePath);
  const fileName = relativeFilePath.split("/").pop();
  if (fileName) {
    const componentName = upperFirst(camelCase(fileName.replace(/\.\w+$/, "")));
    Vue.component(componentName, componentConfig.default || componentConfig);
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
