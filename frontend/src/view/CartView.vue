<script setup lang="ts">
import { DataTable, Column, Button, InputText } from 'primevue';
import { products } from '@/products';

</script>

<template>
  <div class="pb-35">
    <div class="max-w-sm lg:max-w-7xl mx-auto">
      <div class="mt-20">
        <div class="flex items-center">
          <div class="inline-block">
            <a href="#" class="font-poppins text-gray-600 leading-[21px]">Home</a>
          </div>
          <div class="inline-block mx-1.5">
            <p class="text-gray-600">/</p>
          </div>
          <div class="inline-block">
            <a href="#" class="font-poppins leading-[21px]">Cart</a>
          </div>
        </div>
      </div>

      <div class="mt-20">
        <DataTable :value="products">
          <Column field="product">
            <template #header>
              <div class="pl-6 py-4 font-semibold text-left">
                Product
              </div>
            </template>
            <template #body="{ data }">
              <div class="inline-flex justify-center items-center pl-4 pt-0.5">
                <div class="w-[75px] h-[75px] flex justify-center">
                  <img :src="data.imageUrl" class="h-full" />
                </div>
                <div class="ml-6">
                  <p class="font-poppins leading-[24px]">LCD Monitor</p>
                </div>
              </div>
            </template>
          </Column>
          <Column field="price">
            <template #header>
              <div class="flex justify-end grow-1 pr-4 py-4 font-semibold text-left">
                Price
              </div>
            </template>
            <template #body="{ data }">
              <div class="flex justify-end grow-1 pr-4">
                <p class="font-poppins leading-[24px]">${{ data.price.current }}</p>
              </div>
            </template>
          </Column>
          <Column field="quantity">
            <template #header>
              <div class="flex grow-1 justify-end pr-4 py-4 font-semibold text-left">
                Quantity
              </div>
            </template>
            <template #body="{ data }">
              <div class="flex justify-end grow-1 pr-4">
                <input type="number" value="1" class="border-2 border-gray-400 rounded-sm py-1 px-1 w-12" />
              </div>
            </template>
          </Column>
          <Column field="subtotal">
            <template #header>
              <div class="flex justify-end grow-1 pr-4 py-4 font-semibold text-left">
                Subtotal
              </div>
            </template>
            <template #body="{ data }">
              <div class="flex justify-end grow-1 pr-4">
                <p>${{ data.price.current }}</p>
              </div>
            </template>
          </Column>
        </DataTable>
      </div>

      <div class="mt-6">
        <div class="flex justify-between">
          <div class="flex justify-center items-center border-2 border-gray-400 rounded-sm py-4 px-12">
            <a href="#" class="font-poppins font-medium leading-[24px]">Return To Shop</a>
          </div>
          <Button unstyled label="Update Cart" class="font-poppins font-medium leading-[24px] rounded-sm border-2 border-gray-400 py-4 px-12" />
        </div>
      </div>

      <div class="mt-20">
        <div class="flex justify-between">
          <div class="flex items-start">
            <InputText placeholder="Coupon Code" :pt="{
              root: '!font-poppins !leading-[24px] !border-2 !border-black !rounded-sm !py-3 !pl-6',
            }" />
            <Button unstyled label="Apply Coupon" class="font-poppins font-medium leading-[24px] text-white bg-red-500 rounded-sm py-3.5 px-12 ml-4" />
          </div>
          <div class="w-[470px] border-2 border-black rounded-sm py-8 px-6">
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
              <Button unstyled label="Procees to checkout" class="font-poppins font-medium leading-[24px] text-white bg-red-500 py-4 px-12 rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
