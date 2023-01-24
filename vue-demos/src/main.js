

import { createApp } from 'vue'
import App from './grid/overview/App.vue'

const app = createApp(App)

app.config.isCustomElement = tag => tag.startsWith('smart-');
app.mount('#app')

