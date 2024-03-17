import { createApp } from 'vue';
import App from './App.vue';
import store from './data/taskBeginer'; // Імпортуйте сховище Vuex
import router from './router/router'

const app = createApp(App);

app.use(store); // Підключіть сховище Vuex

createApp(App).use(router).mount('#app')

import 'bootstrap/dist/css/bootstrap.min.css';
