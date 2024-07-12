import './assets/main.css';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { createPinia } from 'pinia';// Importa el store después de Pinia
import App from './App.vue';
import router from './router';
import locales from './data/locales';

const app = createApp(App);

// Configura Pinia y hazlo disponible para toda la aplicación
const pinia = createPinia();
app.use(pinia);

// Define el idioma después de configurar Pinia
const i18n = createI18n(locales);

app.use(i18n);
app.use(router);

app.mount('#app');
