import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import '@/assets/css/tailwind.css';
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

Vue.config.productionTip = false;

/**
 * Vue Component Global Registration
 */
const requireComponent = require.context(
  './components/',
  true,
  /\.vue$/
);
requireComponent.keys().forEach(relativeFilePath => {
  const componentConfig = requireComponent(relativeFilePath)
  const fileName = relativeFilePath.split('/').pop()
  if (fileName) {
    const componentName = upperFirst(camelCase(fileName.replace(/\.\w+$/, '')))
    Vue.component(
      componentName,
      componentConfig.default || componentConfig
    )
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
