<script setup lang="ts">
import { Button } from 'primevue';
import { products } from '@/products';

</script>

<template>
  <div class="pb-35">
    <div class="max-w-sm md:max-w-3xl lg:max-w-7xl mx-auto">
      <div class="flex justify-between items-center mt-20">
        <div>
          <p class="font-poppins text-xl leading-[26px]">Wishlist (4)</p>
        </div>
        <Button unstyled label="Move All To Bag" :pt="{ root: 'font-poppins leading-[24px] font-medium rounded-sm border-2 border-gray-400 flex justify-center items-center py-4 px-12 cursor-pointer' }" />
      </div>

      <div class="mt-15">
        <div class="grid grid-cols-4 gap-[30px]">
          <div v-for="card in products" class="w-[297.5px]">
            <a href="#" class="flex justify-center items-center relative h-[250px] bg-gray-100 rounded-sm">
              <span class="flex justify-center items-center absolute top-3 left-3 bg-red-500 font-poppins text-xs text-white rounded-sm py-1 px-3">-{{ card.price.discountPercentage }}%</span>
              <img :src="card.imageUrl" class="max-w-[172px] max-h-[152px]" :alt="card.altText">
              <span class="block absolute top-3 right-3">
                <button class="flex justify-center items-center bg-white p-2 rounded-full mb-2 cursor-pointer">
                  <span class="pi pi-trash text-lg"></span>
                </button>
              </span>
              <div class="absolute bottom-0 left-0 right-0 flex justify-center items-center rounded-b-sm py-2 bg-black">
                <span class="pi pi-shopping-cart text-white mr-2"></span>
                <p class="font-poppins font-medium text-white">Add To Cart</p>
              </div>
            </a>
            <div class="mt-4">
              <h3 class="font-poppins font-medium">{{ card.name }}</h3>
            </div>
            <div class="mt-2">
              <div class="flex">
                <div class="mr-3">
                  <p class="font-poppins font-medium text-red-500">
                    {{ `${card.price.currency}${card.price.current}` }}
                  </p>
                </div>
                <div>
                  <p class="font-poppins font-medium text-gray-500 line-through">
                    {{ `${card.price.currency}${card.price.old}` }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-20">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <div class="w-5 h-10 bg-red-500 rounded-sm"></div>
            <div class="ml-4">
              <p class="font-poppins text-xl leading-[26px]">Just For You</p>
            </div>
          </div>
          <div>
            <Button unstyled label="See All" :pt="{ root: 'font-poppins font-medium leading-[24px] border-2 border-gray-400 flex justify-center items-center rounded-sm py-4 px-12 cursor-pointer' }" />
          </div>
        </div>
        <div class="mt-17">
          <div class="flex overflow-hidden">
            <div v-for="card in products" class="w-[297.5px] shrink-0 mr-[30px]">
              <a href="#" class="flex justify-center items-center relative h-[250px] bg-gray-100 rounded-sm">
                <span class="flex justify-center items-center absolute top-3 left-3 bg-red-500 font-poppins text-xs text-white rounded-sm py-1 px-3">-{{ card.price.discountPercentage }}%</span>
                <img :src="card.imageUrl" class="max-w-[172px] max-h-[152px]" :alt="card.altText">
                <span class="block absolute top-3 right-3">
                  <button class="flex justify-center items-center bg-white p-2 rounded-full mb-2 cursor-pointer">
                    <span class="pi pi-eye text-lg"></span>
                  </button>
                </span>
                <div class="absolute bottom-0 left-0 right-0 flex justify-center items-center rounded-b-sm py-2 bg-black">
                  <span class="pi pi-shopping-cart text-white mr-2"></span>
                  <p class="font-poppins font-medium text-white">Add To Cart</p>
                </div>
              </a>
              <div class="mt-4">
                <h3 class="font-poppins font-medium">{{ card.name }}</h3>
              </div>
              <div class="mt-2">
                <div class="flex">
                  <div class="mr-3">
                    <p class="font-poppins font-medium text-red-500">
                      {{ `${card.price.currency}${card.price.current}` }}
                    </p>
                  </div>
                  <div>
                    <p class="font-poppins font-medium text-gray-500 line-through">
                      {{ `${card.price.currency}${card.price.old}` }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-2 flex items-center">
                <span class="pi pi-star-fill text-yellow-500 mr-1"></span>
                <span class="pi pi-star-fill text-yellow-500 mr-1"></span>
                <span class="pi pi-star-fill text-yellow-500 mr-1"></span>
                <span class="pi pi-star-fill text-yellow-500 mr-1"></span>
                <span class="pi pi-star-fill text-yellow-500"></span>
                <span class="font-poppins text-sm text-gray-500 font-semibold ml-2">({{ `${card.rating.reviewsCount}` }})</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>