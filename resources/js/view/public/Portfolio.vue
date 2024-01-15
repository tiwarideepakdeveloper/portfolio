<template>
    <PageWrap sectionId="portfolio" sectionBg="bg-[#262c30]">
        <div class="py-[30px]">
            <div class="text-center text-[30px] text-[#d3d2d2]" data-aos-once="true" data-aos="fade-in" data-aos-duration="1000">
                portfolio.
                <hr class="w-1/3 mx-auto text-[#d3d2d2] my-[20px]"/>
            </div>
            <div class="flex mx-auto justify-center">
                <div class="inline-block cursor-pointer text-[20px] relative py-[10px] hover:text-[#d3d2d2]" @click="toggleBtn  = !toggleBtn" :class="[toggleBtn ? 'text-[#d3d2d2]' : 'text-[#a0a0a0]']">
                    development
                    <div class="absolute bottom-0 left-0 h-[1.5px] ease-in-out delay-150 duration-300" :class="[toggleBtn ? 'bg-[#d3d2d2] w-full' : 'bg-[#a0a0a0] w-1/3']"></div>
                </div>
                <div class="w-[30px]"></div>
                <div class="inline-block cursor-pointer text-[20px] relative py-[10px] hover:text-[#d3d2d2]" @click="toggleBtn  = !toggleBtn" :class="[!toggleBtn ? 'text-[#d3d2d2]' : 'text-[#a0a0a0]']">
                    vlogs
                    <div class="absolute bottom-0 left-0  h-[1.5px] ease-in-out delay-150 duration-300" :class="[!toggleBtn ? 'bg-[#d3d2d2] w-full' : 'bg-[#a0a0a0] w-1/3']"></div>
                </div>
            </div>
            <div class="mx-auto max-w-5xl grid-cols-3 gap-3 pt-[30px] ease-in-out delay-150 duration-300" :class="[toggleBtn ? 'grid' : 'hidden']">
                <div class="shadow shadow-[#30363a] bg-[#30363a] h-fit max-h-[600px] rounded-lg overflow-hidden">
                    <div class="img-section h-[150px] overflow-hidden">
                        <img src="https://hrpaul.web.app/img/logo.e19c73e0.png" alt="" class="card-img-top">
                    </div>
                    <hr class="my-[15px] w-full text-[#d3d2d2]"/>
                    <div class="content-section pb-[15px] px-[15px]">
                        <div class="title-section text-light text-[20px] mb-[10px] text-[#d3d2d2]">
                            Sheet Recognizer
                        </div>
                        <div class="text-[13px] flex flex-wrap mb-[10px] gap-1 relative">
                            <span class=" bg-[#494e55] p-[5px] text-[#d3d2d2] rounded mr-[2px] text-nowrap">Artificial Intelligence</span>
                            <span class=" bg-[#494e55] p-[5px] text-[#d3d2d2] rounded mr-[2px] text-nowrap">Artificial Intelligence</span>
                            <span class=" bg-[#494e55] p-[5px] text-[#d3d2d2] rounded mr-[2px] text-nowrap">Artificial Intelligence</span>
                            <span class=" bg-[#494e55] p-[5px] text-[#d3d2d2] rounded mr-[2px] text-nowrap">Artificial Intelligence</span>
                            <div class="h-full w-[5px] absolute top-0 right-0 bg-[#888888] rounded-full"></div>
                        </div>
                        <div class="text-light text-[16px] text-[#d3d2d2] mb-[10px]">
                            Music Sheet Recognizer (MSR) highlights basic Image Processing and Recognition. Like Optical Character Re...
                        </div>
                        <div class="btn-section flex justify-center">
                            <a href="" class="inline-block text-[14px] border border-1 border-[#669db3] text-[#669db3] p-[5px] mx-2 rounded hover:bg-[#669db3] hover:text-white">read more</a>
                            <a href="" class="inline-block text-[14px] border border-1 border-[#669db3] text-[#669db3] p-[5px] mx-2 rounded hover:bg-[#669db3] hover:text-white">visit website</a>
                        </div>
                    </div>
                </div>
                <div class="shadow shadow-[#30363a] bg-[#30363a] h-fit max-h-[600px] rounded-lg overflow-hidden">
                    <div class="img-section h-[150px] overflow-hidden">
                        <img src="https://hrpaul.web.app/img/logo.e19c73e0.png" alt="" class="card-img-top">
                    </div>
                    <hr class="my-[15px] w-full text-[#d3d2d2]"/>
                    <div class="content-section pb-[15px] px-[15px]">
                        <div class="title-section text-light text-[20px] mb-[10px] text-[#d3d2d2]">
                            Sheet Recognizer
                        </div>
                        <div class="text-[13px] flex flex-wrap mb-[10px] gap-1 relative">
                            <span class=" bg-[#494e55] p-[5px] text-[#d3d2d2] rounded mr-[2px] text-nowrap">Artificial Intelligence</span>
                            <span class=" bg-[#494e55] p-[5px] text-[#d3d2d2] rounded mr-[2px] text-nowrap">Artificial Intelligence</span>
                            <span class=" bg-[#494e55] p-[5px] text-[#d3d2d2] rounded mr-[2px] text-nowrap">Artificial Intelligence</span>
                            <span class=" bg-[#494e55] p-[5px] text-[#d3d2d2] rounded mr-[2px] text-nowrap">Artificial Intelligence</span>
                            <div class="h-full w-[5px] absolute top-0 right-0 bg-[#888888] rounded-full"></div>
                        </div>
                        <div class="text-light text-[16px] text-[#d3d2d2] mb-[10px]">
                            Music Sheet Recognizer (MSR) highlights basic Image Processing and Recognition. Like Optical Character Re...
                        </div>
                        <div class="btn-section flex justify-center">
                            <a href="" class="inline-block text-[14px] border border-1 border-[#669db3] text-[#669db3] p-[5px] mx-2 rounded hover:bg-[#669db3] hover:text-white">read more</a>
                            <a href="" class="inline-block text-[14px] border border-1 border-[#669db3] text-[#669db3] p-[5px] mx-2 rounded hover:bg-[#669db3] hover:text-white">visit website</a>
                        </div>
                    </div>
                </div>
                <div class="shadow shadow-[#30363a] bg-[#30363a] h-fit max-h-[600px] rounded-lg overflow-hidden">
                    <div class="img-section h-[150px] overflow-hidden">
                        <img src="https://hrpaul.web.app/img/logo.e19c73e0.png" alt="" class="card-img-top">
                    </div>
                    <hr class="my-[15px] w-full text-[#d3d2d2]"/>
                    <div class="content-section pb-[15px] px-[15px]">
                        <div class="title-section text-light text-[20px] mb-[10px] text-[#d3d2d2]">
                            Sheet Recognizer
                        </div>
                        <div class="text-[13px] flex flex-wrap mb-[10px] gap-1 relative">
                            <span class=" bg-[#494e55] p-[5px] text-[#d3d2d2] rounded mr-[2px] text-nowrap">Artificial Intelligence</span>
                            <span class=" bg-[#494e55] p-[5px] text-[#d3d2d2] rounded mr-[2px] text-nowrap">Artificial Intelligence</span>
                            <span class=" bg-[#494e55] p-[5px] text-[#d3d2d2] rounded mr-[2px] text-nowrap">Artificial Intelligence</span>
                            <span class=" bg-[#494e55] p-[5px] text-[#d3d2d2] rounded mr-[2px] text-nowrap">Artificial Intelligence</span>
                            <div class="h-full w-[5px] absolute top-0 right-0 bg-[#888888] rounded-full"></div>
                        </div>
                        <div class="text-light text-[16px] text-[#d3d2d2] mb-[10px]">
                            Music Sheet Recognizer (MSR) highlights basic Image Processing and Recognition. Like Optical Character Re...
                        </div>
                        <div class="btn-section flex justify-center">
                            <a href="" class="inline-block text-[14px] border border-1 border-[#669db3] text-[#669db3] p-[5px] mx-2 rounded hover:bg-[#669db3] hover:text-white">read more</a>
                            <a href="" class="inline-block text-[14px] border border-1 border-[#669db3] text-[#669db3] p-[5px] mx-2 rounded hover:bg-[#669db3] hover:text-white">visit website</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mx-auto max-w-5xl grid-cols-3 gap-3 pt-[30px] ease-in-out delay-150 duration-300" :class="[!toggleBtn ? 'grid' : 'hidden']">
                <div class="shadow shadow-[#30363a] bg-[#30363a] h-fit max-h-[600px] rounded-lg overflow-hidden">
                    <div class="img-section h-[150px] overflow-hidden">
                        <img src="https://hrpaul.web.app/img/logo.e19c73e0.png" alt="" class="card-img-top">
                    </div>
                    <hr class="my-[15px] w-full text-[#d3d2d2]"/>
                    <div class="content-section pb-[15px] px-[15px]">
                        <div class="title-section text-light text-[20px] mb-[10px] text-[#d3d2d2]">
                            Sheet Recognizer
                        </div>
                        <div class="text-[13px] flex flex-wrap mb-[10px] gap-1 relative">
                            <span class=" bg-[#494e55] p-[5px] text-[#d3d2d2] rounded mr-[2px] text-nowrap">Artificial Intelligence</span>
                            <span class=" bg-[#494e55] p-[5px] text-[#d3d2d2] rounded mr-[2px] text-nowrap">Artificial Intelligence</span>
                            <span class=" bg-[#494e55] p-[5px] text-[#d3d2d2] rounded mr-[2px] text-nowrap">Artificial Intelligence</span>
                            <span class=" bg-[#494e55] p-[5px] text-[#d3d2d2] rounded mr-[2px] text-nowrap">Artificial Intelligence</span>
                            <div class="h-full w-[5px] absolute top-0 right-0 bg-[#888888] rounded-full"></div>
                        </div>
                        <div class="text-light text-[16px] text-[#d3d2d2] mb-[10px]">
                            Music Sheet Recognizer (MSR) highlights basic Image Processing and Recognition. Like Optical Character Re...
                        </div>
                        <div class="btn-section flex justify-center">
                            <a href="" class="inline-block text-[14px] border border-1 border-[#669db3] text-[#669db3] p-[5px] mx-2 rounded hover:bg-[#669db3] hover:text-white">read more</a>
                            <a href="" class="inline-block text-[14px] border border-1 border-[#669db3] text-[#669db3] p-[5px] mx-2 rounded hover:bg-[#669db3] hover:text-white">visit website</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="show-more flex justify-center mt-[10px]">
                <a href="" class="inline-block text-[16px] border border-1 border-[#669db3] text-[#669db3] p-[10px] mx-2 rounded hover:bg-[#669db3] hover:text-white">show more</a>
            </div>
        </div>
    </PageWrap>
</template>
<script setup>
import PageWrap from './PageWrap.vue';
import { ref } from 'vue';

const toggleBtn = ref(true);

</script>