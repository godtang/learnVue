
import './static/Content/HplusCSS/bootstrap.min.css?v=3.3.6'
import './static/Content/HplusCSS/font-awesome.min.css?v=4.4.0'
import './static/Content/HplusCSS/animate.min.css'
import './static/Content/HplusCSS/style.css?v=4.1.0'


import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(router).use(store).use(Antd).mount('#app')
