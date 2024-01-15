<template>
   <div class="mx-auto px-4 sm:px-6 lg:px-8 bg-slate w-full" :class="sectionBg" :id="sectionId">
        <slot></slot>
   </div>
</template>
<script setup>
   defineProps({
      sectionId: String,
      sectionBg: String
   })
</script>