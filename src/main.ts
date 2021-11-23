import { createPinia } from 'pinia';
import { Quasar } from 'quasar';
import quasarLang from 'quasar/lang/ja';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';

// prettier-ignore
createApp(App)
  .use(Quasar, {lang: quasarLang})
  .use(router)
  .use(createPinia())
  .mount('#app');
