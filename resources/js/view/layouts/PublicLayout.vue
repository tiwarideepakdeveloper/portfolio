<template>
    <div class="min-h-full"  id="topOfPage">
        <nav class="bg-[#262c30] z-50 border border-b-1 border-[#a09f9f56] sticky top-0 p-2" id="navbar-section">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 items-center md:justify-between justify-center">
                    <div class="flex-shrink-0">
                        <span class="text-[35px] text-[#d3d2d2] cursor-pointer  ease-in-out delay-150 hover:tracking-[0px] duration-300 tracking-[2px] font-500" @click="scrollToElem({name: 'topOfPage'})">Tiwari<span class="bg-red-900 inline-block h-[9px] w-[9px] rounded-full ml-1"></span></span>
                        <!-- <img class="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"> -->
                    </div>
                    <div class="hidden md:block flex-end">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                            <!-- bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium -->
                            <a class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 cursor-pointer text-sm font-medium" @click.prevent="scrollToElem({name: 'about'})">About</a>
                            <a class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 cursor-pointer text-sm font-medium" @click.prevent="scrollToElem({name: 'skills'})">Skills</a>
                            <a class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 cursor-pointer text-sm font-medium" @click.prevent="scrollToElem({name: 'portfolio'})">Portfolio</a>
                            <a class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 cursor-pointer text-sm font-medium" @click.prevent="scrollToElem({name: 'contact'})">Contact</a>
                        </div>
                    </div>
                </div>
                <div class="md:hidden block flex-end">
                    <div class="flex items-baseline space-x-4 justify-center">
                        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                        <!-- bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium -->
                        <a class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 cursor-pointer text-sm font-medium" @click.prevent="scrollToElem({name: 'about'})">About</a>
                        <a class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 cursor-pointer text-sm font-medium" @click.prevent="scrollToElem({name: 'skills'})">Skills</a>
                        <a class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 cursor-pointer text-sm font-medium" @click.prevent="scrollToElem({name: 'portfolio'})">Portfolio</a>
                        <a class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 cursor-pointer text-sm font-medium" @click.prevent="scrollToElem({name: 'contact'})">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
        <main>
            <Banner />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
        </main>
    </div>
</template>

<script setup>
import About from '../public/About.vue';
import Banner from '../public/Banner.vue';
import Skills from '../public/Skills.vue';
import Portfolio from '../public/Portfolio.vue';
import Contact from '../public/Contact.vue';
import Footer from '../public/Footer.vue';

import { useRouter } from 'vue-router';

const router = useRouter();
function scrollToElem(routeName){
    router.push(routeName);
    console.log(routeName.name);
    window.scrollTo({ top: document.getElementById(routeName.name).offsetTop - document.getElementById("navbar-section").offsetHeight, behavior: 'smooth'});
}
</script>