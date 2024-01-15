<template>
    <PageWrap sectionId="contact" sectionBg="bg-[#343a40]">
        <div class="py-[30px]">
            <div class="text-center text-[30px] text-[#d3d2d2]"  data-aos-once="true" data-aos="fade-in" data-aos-duration="1000">
                contact.
                <hr class="w-1/3 mx-auto text-[#d3d2d2] my-[20px]"/>
            </div>
            <div class="mx-auto max-w-xl pt-[30px]">
                <form action="">
                    <input type="text" class="bg-[#262c30] p-[15px] w-full rounded-lg border-none focus:outline-none text-[#d3d2d2] mb-[10px]" placeholder="name">
                    <input type="text" class="bg-[#262c30] p-[15px] w-full rounded-lg border-none focus:outline-none text-[#d3d2d2] mb-[10px]" placeholder="email">
                    <textarea type="text" class="bg-[#262c30] p-[15px] w-full rounded-lg border-none focus:outline-none text-[#d3d2d2] mb-[10px]" placeholder="message" rows="4"></textarea>
                    <button type="submit" class="w-full border border-1 border-[#669db3] text-[#669db3] p-[10px] rounded hover:bg-[#669db3] hover:text-white">Send</button>
                </form>
            </div>
        </div>
    </PageWrap>
</template>
<script setup>
import PageWrap from './PageWrap.vue';
</script>