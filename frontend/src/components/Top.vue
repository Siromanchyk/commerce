<script setup lang="ts">
import { SplitButton } from 'primevue';
import { ref } from 'vue';

const languages = ref([
  {
    label: 'Українська',
    class: 'p-1',
  },
  {
    label: 'Polska',
    class: 'p-1', 
  },
])
</script>

<template>
  <div class="bg-black">
    <div class="max-w-sm md:max-w-3xl lg:max-w-7xl mx-auto">
      <div class="py-1.5 flex items-center">
        <div class="grow text-center">
          <p class="font-poppins text-xs md:text-sm lg:text-sm text-white">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a href="#" class="font-semibold underline ml-2">ShopNow</a>
          </p>
        </div>
        <SplitButton unstyled class="hidden md:flex lg:flex" :model="languages" label="English" :pt="{
            root: {
              class: 'font-poppins text-white'
            },
            pcButton: {
              root: 'font-normal text-sm leading-[21px]'
            },
            pcDropdown: {
              root: 'pl-2 flex justify-center items-center'
            },
            pcMenu: {
              root: 'bg-black text-white text-sm font-normal p-2' 
            },
          }" 
        />
      </div>
    </div>
  </div>
</template>
