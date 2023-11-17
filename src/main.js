
import './static/Content/HplusCSS/bootstrap.min.css?v=3.3.6'
import './static/Content/HplusCSS/font-awesome.min.css?v=4.4.0'
import './static/Content/HplusCSS/animate.min.css'
import './static/Content/HplusCSS/style.css?v=4.1.0'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


createApp(App).use(router).mount('#app')
