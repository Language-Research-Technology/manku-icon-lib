import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { MankuIcon } from 'manku_icons';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(ElementPlus);
app.use(VuePapaParse);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('manku-icon', MankuIcon)
