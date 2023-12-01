import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {MankuIcon} from "manku-icon-lib";

const app = createApp(App);
app.component('manku-icon', MankuIcon);
app.mount('#app')
