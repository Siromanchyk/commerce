<script setup lang="ts">
import { Button } from 'primevue';
</script>

<template>
  <div>
    <div class="max-w-7xl mx-auto">
      <div class="mt-20">
        <div class="flex items-center">
          <div class="inline-block">
            <a href="#" class="font-poppins text-gray-600 leading-[21px]">Home</a>
          </div>
          <div class="inline-block mx-1.5">
            <p class="text-gray-600">/</p>
          </div>
          <div class="inline-block">
            <a href="#" class="font-poppins leading-[21px]">Nothing</a>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-35">
      <div class="flex flex-col items-center">
        <div>
          <p class="font-inter text-8xl font-medium leading-28 tracking-wide">404 Not Found</p>
        </div>
        <div class="mt-10">
          <p class="font-poppins leading-6">Your visited page not found. You may go home page.</p>
        </div>
      </div>
      <div class="mt-20 pb-35">
        <div class="flex justify-center">
          <Button label="Back to home page" :pt="{ root: '!font-poppins !font-medium !leading-6 !border-none !bg-red-500 !py-4 !px-12'}" />
        </div>
      </div>
    </div>
  </div>
</template>