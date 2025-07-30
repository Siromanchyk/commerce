<script setup lang="ts">
import type { Product } from '@/IProduct';

defineProps<{
  product: Product;
}>();
</script>

<template #item="product">
  <div class="w-[305px] h-[350px] mr-5 shrink-0">
    <a href="#" class="flex justify-center items-center relative h-[250px] bg-gray-100 rounded-sm group">
      <span class="flex justify-center items-center absolute top-3 left-3 bg-red-500 font-poppins text-xs text-white rounded-sm py-1 px-3">-{{ product.price.discountPercentage }}%</span>
        <img :src="product.imageUrl" class="max-w-[172px] max-h-[152px]" :alt="product.altText">
        <span class="block absolute top-3 right-3">
                    <button class="flex justify-center items-center bg-white p-2 rounded-full mb-2 cursor-pointer">
                      <span class="pi pi-heart text-lg"></span>
                    </button>
                    <button class="flex justify-center items-center bg-white p-2 rounded-full cursor-pointer">
                      <span class="pi pi-eye text-lg"></span>
                    </button>
                  </span>
                  <div class="absolute bottom-0 left-0 right-0 hidden group-hover:flex justify-center items-center rounded-b-sm py-2 bg-black">
                    <p class="font-poppins font-medium text-white">Add To Cart</p>
                  </div>
                </a>
                <div class="mt-4">
                  <h3 class="font-poppins font-medium">{{ product.name }}</h3>
                </div>
                <div class="mt-2">
                  <div class="flex">
                    <div class="mr-3">
                      <p class="font-poppins font-medium text-red-500">{{ `${product.price.currency}${product.price.current}` }}</p>
                    </div>
                    <div>
                      <p class="font-poppins font-medium text-gray-500 line-through">{{ `${product.price.currency}${product.price.old}` }}</p>
                    </div>
                  </div>
                </div>
                <div class="mt-2 flex items-center">
                  <span class="pi pi-star-fill text-yellow-500 mr-1"></span>
                  <span class="pi pi-star-fill text-yellow-500 mr-1"></span>
                  <span class="pi pi-star-fill text-yellow-500 mr-1"></span>
                  <span class="pi pi-star-fill text-yellow-500 mr-1"></span>
                  <span class="pi pi-star-fill text-yellow-500"></span>
                  <span class="font-poppins text-sm text-gray-500 font-semibold ml-2">({{ `${product.rating.reviewsCount}` }})</span>
                </div>
              </div>
            </template>