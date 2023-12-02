import '@/app/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { App, router } from '@/app';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
