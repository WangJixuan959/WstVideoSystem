import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vue3videoPlay from 'vue3-video-play'
import 'vue3-video-play/dist/style.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue';

//导入element-plus
import ElementPlus from 'element-plus'

const app = createApp(App)

// 注册elementplus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(vue3videoPlay)

app.mount('#app')
