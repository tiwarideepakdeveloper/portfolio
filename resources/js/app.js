// import './bootstrap';
import { createApp } from 'vue';
import Aos from 'aos';

/**File Import */
import router from './routes';
import App from './App.vue';

/**Css Import*/
import 'aos/dist/aos.css';

Aos.init();

createApp(App)
.use(router)
.mount("#app");