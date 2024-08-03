import './assets/main.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import i18n from './util/i18n'
const app = createApp(App)

app.use(router)

app.use(Antd).use(i18n).mount('#app')
