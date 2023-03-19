import { createApp } from 'vue';
import VueKonva from 'vue-konva';

import App from './App.vue';
import router from './router';

import './assets/main.css';

const app = createApp(App);

app.use(router);
app.use(VueKonva, { prefix: 'Konva' });
app.mount('#app');
