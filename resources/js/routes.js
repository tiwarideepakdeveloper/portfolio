import { createRouter, createMemoryHistory, createWebHistory } from "vue-router";

import PublicLayout from './view/layouts/PublicLayout.vue';

import About from './view/public/About.vue';
import Skills from './view/public/Skills.vue';
import Portfolio from './view/public/Portfolio.vue';
import Contact from './view/public/Contact.vue';
import Banner from './view/public/Banner.vue';

const routes = [
    {
        path: '/',
        component: PublicLayout,
        children: [
            {
                path: '',
                name: 'topOfPage',
                component: Banner
            },
            {
                path: 'about',
                name: 'about',
                component: About
            },
            {
                path: 'skills',
                name: 'skills',
                component: Skills
            },
            {
                path: 'portfolio',
                name: 'portfolio',
                component: Portfolio
            },
            {
                path: 'contact',
                name: 'contact',
                component: Contact
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
          return {
            el: to.hash,
          }
        }
    },
});

export default router;