import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import pinia from './store';
import './assets/style/index.css';
import i18n from '@/locales';
import components from "@/components/ui/index.ts"

const app = createApp(App);
components.forEach(component => {
    app.component(component.name as string, component)
})
app.use(pinia);
app.use(i18n)
app.use(router);
app.mount('#app');
