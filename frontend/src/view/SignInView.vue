<script setup lang="ts">
import { FloatLabel, InputText, Password, Button } from 'primevue';
</script>

<template>
  <div class="lg:pr-[calc((100%-theme(maxWidth.7xl))/2)] md:pr-[calc((100%-theme(maxWidth.3xl))/2)] px-4 md:px-0 py-14 lg:pb-36">
    <div class="flex lg:justify-between justify-center items-center shrink">
      <div class="md:block hidden flex-[70%]">
        <img src="../assets/images/blocks/signUpIn.png" alt="sign in">
      </div>
      <div class="md:ml-4 grow flex-[29%]">
        <h2 class="font-inter text-4xl lg:text-4xl md:text-2xl font-medium leading-[30px]">Log in to Exclusive</h2>
        <div class="mt-6">
          <p class="font-poppins leading-[24px]">Enter your details below</p>
        </div>
        <div class="mt-6 md:mt-6 lg:mt-12">
          <FloatLabel variant="in" :pt="{ root: '!border-b-2 !border-b-gray-300' }">
            <label for="name" class="font-poppins text-sm !text-gray-500 leading-[24px]">Email or Phone Number</label>
            <InputText id="name" :pt="{ root: '!w-full !h-[50px] !border-none' }" />
          </FloatLabel>
          <FloatLabel variant="in" :pt="{ root: '!mt-10'}">
            <Password id="password" :feedback="false" :pt="{ root: '!w-full !h-[50px] !border-b-2 !border-b-gray-300', pcInputText: { root: '!w-full !border-none'}, }" />
            <label for="password" class="font-poppins text-sm !text-gray-500 leading-[24px]">Password</label>
          </FloatLabel>
          <div class="flex mt-10 justify-between items-center">
            <Button label="Log In" :pt="{ root: '!bg-red-500 !font-poppins sm:!py-2.5 sm:!px-12 md:!py-3 md:!px-6 lg:!py-4 lg:!px-12 !border-none' }" />
            <div class="ml-5">
              <RouterLink to="/main" class="font-poppins leading-[24px] text-red-500">Forget Password?</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
