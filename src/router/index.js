import { createRouter, createWebHistory } from 'vue-router'

import Home from './../components/Home.vue'
import Guide from './../components/Guide.vue'
import About from './../components/About.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: "home", component: Home },
        { path: '/guide', name: "guide", component: Guide },
        { path: '/about', name: "about", component: About },
    ]
})

export default router
