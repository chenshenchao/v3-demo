import { createApp } from 'vue';
import { newRouter } from './route';
import './style.css';
import App from './App.vue';
import V3Table from 'v3-table';

const app = createApp(App);
const router = newRouter();
app.use(router);
app.use(V3Table);
app.mount('#app');
