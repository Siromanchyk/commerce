<script setup lang="ts">
import { products } from '@/products';
import { RadioButton, InputText, Button } from 'primevue';
import { ref } from 'vue';

const payment = ref('');
</script>

<template>
  <div class="w-[425px]">
    <div v-for="(item, index) in products.slice(0, 2)">
      <div v-if="index > 0" class="mt-8">
        <div class="flex items-center">
          <div class="flex items-center grow-1">
            <div class="flex items-center w-[60px] h-[50px]">
              <img :src="item.imageUrl" :alt="item.altText">
            </div>
            <div class="font-poppins leading-[24px] ml-6">LCD Monitor</div>
          </div>
          <div class="font-poppins leading-[24px]">
            <p>${{ item.price.current }}</p>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="flex items-center">
          <div class="flex items-center grow-1">
            <div class="w-[60px] h-[50px]">
              <img :src="item.imageUrl" :alt="item.altText" class="w-full h-full object-cover" />
            </div>
            <div class="font-poppins leading-[24px] ml-6">LCD Monitor</div>
          </div>
          <div class="font-poppins leading-[24px]">
            <p>${{ item.price.current }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="mt-10 pb-4 border-b-2 border-b-gray-400">
      <div class="flex justify-between items-center">
        <div>
          <p class="font-poppins leading-[24px]">Subtotal:</p>
        </div>
        <div>
          <p class="font-poppins leading-[24px]">$1750</p>
        </div>
      </div>
    </div>
    <div class="mt-4 pb-4 border-b-2 border-b-gray-400">
      <div class="flex justify-between items-center">
        <div>
          <p class="font-poppins leading-[24px]">Shipping:</p>
        </div>
        <div>
          <p class="font-poppins leading-[24px]">Free</p>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <div class="flex justify-between items-center">
        <div>
          <p class="font-poppins leading-[24px]">Total:</p>
        </div>
        <div>
          <p class="font-poppins leading-[24px]">$1750</p>
        </div>
      </div>
    </div>
    <div class="mt-8">
      <div class="flex justify-between">
        <div>
          <div class="flex items-center gap-2">
            <RadioButton input-id="bank" name="payment" value="Bank" v-model="payment" />
            <label for="bank" class="font-poppins leading-[24px]">Bank</label>
          </div>
          <div class="flex items-center mt-8 gap-2">
            <RadioButton input-id="cash" name="payment" value="Cash" v-model="payment" />
            <label for="cash" class="font-poppins leading-[24px]">Cash on delivery</label>
          </div>
        </div>
        <div class="flex items-start">
          <img src="../assets/images/bankCards/Bkash.png" class="mr-2" alt="" />
          <img src="../assets/images/bankCards/Visa.png" class="mr-2" alt="" />
          <img src="../assets/images/bankCards/Mastercard.png" class="mr-2" alt="" />
          <img src="../assets/images/bankCards/Nagad.png" alt="" />
        </div>
      </div>
    </div>
    <div class="mt-8 flex justify-between">
      <InputText placeholder="Coupon Code" class="font-poppins leading-[24px]" />
      <Button label="Apply Coupon" :pt="{ root: '!px-5 !bg-red-500 !border-red-500'}" />
    </div>
    <Button label="Place Order" :pt="{ root: '!px-12 !py-4 !bg-red-500 !border-red-500 !mt-12' }" />
  </div>
</template>

<style lang="css" scoped>

</style>