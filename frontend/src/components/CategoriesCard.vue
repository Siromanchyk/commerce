<script setup lang="ts">
import type { ICategory } from '@/interfaces/IProduct';

const props = defineProps<{
  category: ICategory, 
}>();

</script>

<template>
  <a href="#" class="border-2 border-gray-300 rounded-sm flex flex-col justify-center items-center w-[200px] h-[145px] mr-4 shrink-0">
    <img :src="props.category.img" :alt="props.category.imgAlt">
    <div class="mt-4.5">
      <p class="font-poppins ">{{ props.category.name }}</p>
    </div>
  </a>

</template>