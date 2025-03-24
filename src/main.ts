import {createApp} from 'vue'
import './assets/index.css'
import App from './App.vue'
import router from "@/router";
import Qui from '@qvant/qui-max';
import '@qvant/qui-max/styles';


const app = createApp(App)
app.use(router)
app.use(Qui)
app.mount('#app')
