import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'ant-design-vue/dist/reset.css';
import router from './routes'

const app = createApp(App);
app.use(router); // Không còn lỗi
app.mount('#app');