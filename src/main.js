import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import SfVueAnimatedCursor from 'sf-vue-animated-cursor'
import 'bootstrap';
import VueKinesis from "vue-kinesis";
import AOSRouterPlugin from '@/aos-router';

const app = createApp(App)

app.use(SfVueAnimatedCursor, { basic: false });
app.use(VueKinesis);
app.use(AOSRouterPlugin, { router });
app.use(store).use(router).mount('#app')
