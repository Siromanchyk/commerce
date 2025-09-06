<script setup lang="ts">
import { SplitButton } from 'primevue';
import { languageItems } from '@/items';

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
        <SplitButton class="hidden " :model="languageItems" label="English" :pt="{
            root: {
              class: '!font-poppins !font-medium !hidden md:!flex'
            },
            pcButton: {
              root: '!font-normal !text-sm !leading-[21px] !bg-black !border-none !p-0'
            },
            pcDropdown: {
              root: '!bg-black !border-none',
            },
            pcMenu: {
              root: '!font-poppins !text-sm !font-normal !bg-black !border-none !mt-1' 
            },
          }" 
        />
      </div>
    </div>
  </div>
</template>
