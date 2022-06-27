import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import ant from "./ant-design-vue/index"

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ant)
app.mount("#app");
