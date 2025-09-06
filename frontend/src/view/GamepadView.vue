<script setup lang="ts">
import { Galleria, Button, InputNumber, RadioButton } from 'primevue';
import { ref } from 'vue';
import ProductSection from '@/components/ProductSection.vue';

const items = ref([
  {
    url: '../gamepad/main.png',
  },
  {
    url: '../gamepad/side1.png'
  },
  {
    url: '../gamepad/side2.png'
  },
  {
    url: '../gamepad/side3.png'
  },
  {
    url: '../gamepad/side4.png'
  },
]);
</script>

<template>
  <div>
    <div class="md:max-w-3xl lg:max-w-7xl mx-auto px-3.5 md:px-0">
      <div class="flex flex-col lg:flex-row justify-between mt-20 pb-6">
        <div class="flex-[66%] grow-0 shrink">
          <Galleria :value="items" :numVisible="5" :showThumbnailNavigators="false" thumbnailsPosition="left" :pt="{ itemsContainer: '!px-8 !w-full !justify-center', 
          content: '!h-full', 
          thumbnailItem: 'lg:w-[150px] md:w-[125px] w-[75px] !overflow-hidden',
          root: '!h-full',
          thumbnailsViewport: '!h-auto',
          }">
            <template #item="{ item }">
              <img :src="item.url" alt="" style="width: 100%;">
            </template>
            <template #thumbnail="{ item }">
              <img :src="item.url" alt="" style="width: 100%;" > <!--style="display: block;"-->
            </template>
          </Galleria>
        </div>
        <div class="flex-[33%] mt-7.5 lg:mt-0 lg:ml-17.5">
          <h3 class="font-inter text-2xl leading-6 tracking-wide">Havic HV G-92 Gamepad</h3>
          <div class="mt-4 flex ">
            <span v-for="n in 5" class="pi pi-star-fill text-yellow-500" :class="[n < 5 ? 'mr-2' : '', ]"></span>
            <div class="ml-3">
              <p class="font-poppins text-sm leading-5 text-gray-400">(150 Reviews)</p>
            </div>
            <div class="mx-4">
              <p class="font-poppins text-sm leading-5 text-gray-400">|</p>
            </div>
            <div>
              <p class="font-poppins text-sm leading-5 text-green-400">In Stock</p>
            </div>
          </div>
          <div class="mt-4">
            <p class="font-inter text-2xl leading-6 tracking-wider">$192.00</p>
          </div>
          <div class="mt-6 pb-6 border-b-2 border-b-gray-400 ">
            <p class="font-poppins text-sm leading-5 text-justify">
              PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
            </p>
          </div>
          <div class="mt-6">
            <div class="flex">
              <p class="font-inter text-xl leading-5 tracking-wider mr-6">Colours:</p>
              <RadioButton class="mr-2" />
              <RadioButton />
            </div>
          </div>
          <div class="mt-6 flex items-center">
            <p class="font-inter text-xl leading-5 tracking-wider mr-6">Size:</p>
            <Button label="XS" :pt="{ root: '!font-poppins !text-sm !font-medium !leading-5 !text-black !bg-white !border-gray-400 !border-2 !w-8 !h-8'}" />
            <Button label="S" :pt="{ root: '!font-poppins !text-sm !font-medium !leading-5 !text-black !bg-white !border-gray-400 !border-2 !ml-4 !w-8 !h-8'}" />
            <Button label="M" :pt="{ root: '!font-poppins !text-sm !font-medium !leading-5 !text-black !bg-white !border-gray-400 !border-2 !ml-4 !w-8 !h-8'}" />
            <Button label="L" :pt="{ root: '!font-poppins !text-sm !font-medium !leading-5 !text-black !bg-white !border-gray-400 !border-2 !ml-4 !w-8 !h-8'}" />
            <Button label="XL" :pt="{ root: '!font-poppins !text-sm !font-medium !leading-5 !text-black !bg-white !border-gray-400 !border-2 !ml-4 !w-8 !h-8'}" />
          </div>
          <div class="mt-6 flex justify-between">
            <InputNumber showButtons buttonLayout="horizontal" :min="0" :max="99" :pt="{ pcInputText: { root: '!w-20 text-center'} }">
                <template #incrementicon>
                    <span class="pi pi-plus" />
                </template>
                <template #decrementicon>
                    <span class="pi pi-minus" />
                </template>
            </InputNumber>
            <Button label="Buy Now" :pt="{ root: '!font-poppins !font-medium !leading-6 !bg-red-500 !border-none !py-2.5 !px-12 !grow-1 !mx-4'}" />
            <Button icon="pi pi-heart" :pt="{ root: '!text-black !bg-white !border-2 !border-gray-400'}" />
          </div>
          <div class="mt-10 border-2 border-gray-500 rounded-sm py-6">
            <div class="flex pb-4 border-b-2 border-b-gray-500">
              <div class="flex justify-center items-center pl-4">
                <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40.000000" height="40.000000" fill="none">
                  <rect id="icon-delivery" width="40.000000" height="40.000000" x="0.000000" y="0.000000" fill="rgb(255,255,255)" fill-opacity="0" />
                  <path id="Vector" d="M0 0L40 0L40 40L0 40L0 0Z" fill-rule="nonzero" />
                  <path id="Vector" d="M11.6673 31.6667C9.82637 31.6667 8.33398 30.1743 8.33398 28.3333C8.33398 26.4924 9.82637 25 11.6673 25C13.5083 25 15.0007 26.4924 15.0007 28.3333C15.0007 30.1743 13.5083 31.6667 11.6673 31.6667Z" stroke="rgb(0,0,0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                  <path id="Vector" d="M28.3333 31.6667C26.4924 31.6667 25 30.1743 25 28.3333C25 26.4924 26.4924 25 28.3333 25C30.1743 25 31.6667 26.4924 31.6667 28.3333C31.6667 30.1743 30.1743 31.6667 28.3333 31.6667Z" stroke="rgb(0,0,0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                  <path id="Vector" d="M8.33398 28.3335L7.00065 28.3335C5.89608 28.3335 5.00065 27.4381 5.00065 26.3335L5.00065 21.6668M3.33398 8.3335L19.6673 8.3335C20.7719 8.3335 21.6673 9.22893 21.6673 10.3335L21.6673 28.3335M15.0007 28.3335L25.0007 28.3335M31.6673 28.3335L33.0007 28.3335C34.1052 28.3335 35.0007 27.4381 35.0007 26.3335L35.0007 18.3335L30.5833 10.9712C30.2218 10.3688 29.5708 10.0002 28.8683 10.0002L21.6673 10.0002M35.0007 18.3335L21.6673 18.3335" fill-rule="nonzero" stroke="rgb(0,0,0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                  <path id="Vector" d="M8 28L6.66667 28C5.5621 28 4.66667 27.1046 4.66667 26L4.66667 21.3333M3 8L19.3333 8C20.4379 8 21.3333 8.89543 21.3333 10L21.3333 28M15 28L24.6667 28M32 28L32.6667 28C33.7712 28 34.6667 27.1046 34.6667 26L34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667L21.3333 9.66667M34.6667 18L21.3333 18" fill-rule="nonzero" stroke="rgb(0,0,0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                  <path id="Vector" d="M5 11.8182L11.6667 11.8182" stroke="rgb(0,0,0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                  <path id="Vector" d="M1.81836 15.4545L8.48503 15.4545" stroke="rgb(0,0,0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                  <path id="Vector" d="M5 19.0909L11.6667 19.0909" stroke="rgb(0,0,0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                </svg>
              </div>
              <div class="ml-4">
                <div>
                  <h3 class="font-poppins font-medium leading-6">Free Delivery</h3>
                </div>
                <div class="mt-2">
                  <p class="font-poppins text-xs font-medium leading-4 underline">Enter your postal code for Delivery Availability</p>
                </div>
              </div>
            </div>
            <div class="flex mt-4">
              <div class="flex justify-center items-center pl-4">
                <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40.000000" height="40.000000" fill="none">
                  <rect id="Icon-return" width="40.000000" height="40.000000" x="0.000000" y="0.000000" />
                  <path id="Vector" d="M0 0L40 0L40 40L0 40L0 0Z" fill-rule="nonzero" />
                  <path id="Vector" d="M33.3327 18.3334C32.9251 15.4004 31.5645 12.6828 29.4604 10.5992C27.3564 8.51557 24.6256 7.18155 21.6888 6.80261C18.752 6.42366 15.7721 7.02082 13.208 8.5021C10.644 9.98337 8.6381 12.2666 7.49935 15M6.66602 8.33335L6.66602 15L13.3327 15" fill-rule="nonzero" stroke="rgb(0,0,0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                  <path id="Vector" d="M6.66602 21.6667C7.07361 24.5997 8.43423 27.3173 10.5383 29.4009C12.6423 31.4845 15.3731 32.8185 18.3099 33.1974C21.2467 33.5764 24.2266 32.9792 26.7907 31.4979C29.3547 30.0167 31.3606 27.7335 32.4994 25M33.3327 31.6667L33.3327 25L26.666 25" fill-rule="nonzero" stroke="rgb(0,0,0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                </svg>
              </div>
              <div class="ml-4">
                <div>
                  <h3 class="font-poppins font-medium leading-6">Free Delivery</h3>
                </div>
                <div class="mt-2">
                  <p class="font-poppins text-xs font-medium leading-4 underline">Enter your postal code for Delivery Availability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductSection title="Related Item" :times="false" layout="row" class="mt-12" />
    </div>
  </div>
</template>
