import { createApp } from 'vue'
import App from './App.vue'
import {store} from './store'
// import { router } from './router'

// storeの情報を読み込んでいる
createApp(App)
    .use(store)
    .mount('#app')