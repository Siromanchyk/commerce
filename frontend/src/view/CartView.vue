<script setup lang="ts">
import { DataTable, Column, Button, InputText, Breadcrumb } from 'primevue';
import { products } from '@/products';
import { ref } from 'vue';

const items = ref([
  { label: 'Home', router: '/' },
  { label: 'Cart', router: '/cart' }
]) 
</script>

<template>
  <div class="pb-35">
    <div class="md:max-w-3xl lg:max-w-7xl px-3.5 md:px-0 mx-auto">
      <div class="mt-10 md:mt-20">
        <Breadcrumb :model="items">
          <template #item="{ item }">
            <RouterLink :to="item.router" v-slot="{ href, navigate }">
              <a :href="href" @click="navigate">
                <span class="font-poppins text-sm md:text-base text-gray-600 leading-[21px]">{{ item.label }}</span>
              </a>
            </RouterLink>
          </template>
          <template #separator>/</template>
        </Breadcrumb>
      </div>

      <div class="mt-10 md:mt-20">
        <DataTable :value="products">
          <Column field="product">
            <template #header>
              <div class="md:pl-6 md:py-4 font-semibold text-left text-xs md:text-base">
                Product
              </div>
            </template>
            <template #body="{ data }">
              <div class="inline-flex justify-center items-center md:pl-4 md:pt-0.5">
                <div class="w-[75px] h-[75px] flex justify-center">
                  <img :src="data.imageUrl" class="h-full" />
                </div>
                <div class="ml-3 md:ml-6">
                  <p class="font-poppins text-xs md:text-base leading-[24px]">{{ data.name }}</p>
                </div>
              </div>
            </template>
          </Column>
          <Column field="price">
            <template #header>
              <div class="flex justify-end md:grow-1 md:pr-4 md:py-4 font-semibold text-left text-xs sm:text-base">
                Price
              </div>
            </template>
            <template #body="{ data }">
              <div class="flex justify-end md:grow-1 md:pr-4">
                <p class="font-poppins text-xs md:text-base leading-[24px]">${{ data.price.current }}</p>
              </div>
            </template>
          </Column>
          <Column field="quantity">
            <template #header>
              <div class="flex grow-1 justify-end md:pr-4 md:py-4 font-semibold text-left text-xs md:text-base">
                Quantity
              </div>
            </template>
            <template #body="{ data }">
              <div class="flex justify-end md:grow-1 md:pr-4">
                <input type="number" value="1" class="border-2 border-gray-400 rounded-sm py-1 px-1 w-12" />
              </div>
            </template>
          </Column>
          <Column field="subtotal">
            <template #header>
              <div class="flex justify-end md:grow-1 md:pr-4 md:py-4 font-semibold text-left text-xs md:text-base">
                Subtotal
              </div>
            </template>
            <template #body="{ data }">
              <div class="flex justify-end md:grow-1 pr-4">
                <p class="font-poppins text-xs md:text-base leading-6">${{ data.price.current }}</p>
              </div>
            </template>
          </Column>
        </DataTable>
      </div>

      <div class="mt-6">
        <div class="inline-flex md:flex justify-between flex-col md:flex-row">
          <div class="flex justify-center items-center border-2 border-gray-400 rounded-sm py-4 px-12">
            <RouterLink to="/" class="font-poppins font-medium leading-[24px]">Return To Shop</RouterLink>
          </div>
          <Button label="Update Cart" :pt="{ root: '!font-poppins !text-black !font-medium !leading-[24px] !border-2 !border-gray-400 !py-4 !px-12 !bg-white !mt-3 md:!mt-0' }" />
        </div>
      </div>

      <div class="mt-5 md:mt-20">
        <div class="flex flex-col md:flex-row justify-between gap-5 lg:gap-0">
          <div class="flex flex-col lg:flex-row items-start">
            <InputText placeholder="Coupon Code" :pt="{
              root: '!font-poppins !leading-[24px] !border-2 !border-black',
            }" />
            <Button label="Apply Coupon" :pt="{ root: '!font-poppins !font-medium !leading-[24px] !text-white !bg-red-500 !border-2 !border-red-500 !py-3.5 !px-12 !ml-0 !mt-4 lg:!mt-0 lg:!ml-4' }" />
          </div>
          <div class="grow-1 md:grow-0 border-2 border-black rounded-sm py-8 px-6">
            <h3 class="font-poppins text-xl font-medium leading-[28px]">Cart Total</h3>
            <div class="mt-6 pb-4 border-b-2 border-b-gray-400">
              <div class="flex justify-between">
                <div>
                  <p class="font-poppins leading-[24px]">Subtotal:</p>
                </div>
                <div>
                  <p class="font-poppins leading-[24px]">$1750</p>
                </div>
              </div>
            </div>
            <div class="mt-4 pb-4 border-b-2 border-b-gray-400">
              <div class="flex justify-between">
                <div>
                  <p class="font-poppins leading-[24px]">Shipping:</p>
                </div>
                <div>
                  <p class="font-poppins leading-[24px]">Free</p>
                </div>
              </div>
            </div>
            <div class="mt-4 pb-4 border-b-2 border-b-gray-400">
              <div class="flex justify-between">
                <div>
                  <p class="font-poppins leading-[24px]">Total:</p>
                </div>
                <div>
                  <p class="font-poppins leading-[24px]">$1750</p>
                </div>
              </div>
            </div>
            <div class="mt-4 flex justify-center">
              <Button label="" :pt="{ root: '!bg-red-500 !border-2 !border-red-500 !py-4 !px-12' }">
                <RouterLink to="/checkout" class="font-poppins font-medium leading-6">Procees to checkout</RouterLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
