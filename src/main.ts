import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import pinia from './store';
import './assets/style/index.css';
import i18n from '@/locales';


const app = createApp(App);
app.use(pinia);
app.use(i18n)
app.use(router);
app.mount('#app');
