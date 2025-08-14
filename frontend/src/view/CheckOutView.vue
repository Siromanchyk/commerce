<script setup lang="ts">
import CheckOutForm from '@/components/check/CheckOutForm.vue';
import CheckoutPanel from '@/components/check/CheckoutPanel.vue';
</script>

<template>
  <div class="pb-35">
    <div class="lg:max-w-7xl sm:max-w-sm mx-auto">
      <div class="mt-20">
        <div class="flex items-center">
          <div class="inline-block">
            <a href="#" class="font-poppins text-gray-600 leading-[21px]">Account</a>
          </div>
          <div class="inline-block mx-1.5">
            <p class="text-gray-600">/</p>
          </div>
          <div class="inline-block">
            <a href="#" class="font-poppins text-gray-600 leading-[21px]">My Account</a>
          </div>
          <div class="inline-block mx-1.5">
            <p class="text-gray-600">/</p>
          </div>
          <div class="inline-block">
            <a href="#" class="font-poppins text-gray-600 leading-[21px]">Product</a>
          </div>
          <div class="inline-block mx-1.5">
            <p class="text-gray-600">/</p>
          </div>
          <div class="inline-block">
            <a href="#" class="font-poppins text-gray-600 leading-[21px]">View Account</a>
          </div>
          <div class="inline-block mx-1.5">
            <p class="text-gray-600">/</p>
          </div>
          <div class="inline-block">
            <a href="#" class="font-poppins leading-[21px]">Account</a>
          </div>
        </div>
      </div>

      <div class="mt-20">
        <h2 class="font-inter text-4xl font-medium leading-[30px] tracking-wide">Billing Details</h2>

        <div class="mt-12 flex justify-between">
          <CheckOutForm />
          <CheckoutPanel />
        </div>
      </div>
    </div>
  </div>
</template>