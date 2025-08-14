<script setup lang="ts">
import { FloatLabel, InputText, Password, Button } from 'primevue';
import { ref } from 'vue';
import GoogleIcon from '@/components/icons/GoogleIcon.vue';

const password = ref('');
</script>

<template>
  <div class="w-full lg:max-w-7xl mx-auto py-15 lg:pt-14 lg:pb-36">
    <div class="flex lg:justify-between justify-center items-center lg:relative">
      <div class="lg:absolute lg:left-[-10%] lg:block hidden">
        <img src="../assets/images/blocks/signUpIn.png" alt="sign in">
      </div>
      <div class="opacity-0 lg:block hidden">
        <img src="../assets/images/blocks/signUpIn.png" alt="sign in">
      </div>
      <div>
        <h2 class="font-inter text-4xl font-medium leading-[30px]">Create an account</h2>
        <div class="mt-6">
          <p class="font-poppins leading-[24px]">Enter your details below</p>
        </div>
        <div class="mt-12">
          <FloatLabel variant="in">
            <label for="name" class="font-poppin !text-gray-500 leading-[24px] pt-0.5 pl-1.5">Name</label>
            <InputText id="name" class="!w-full text-sm !h-[50px] !border-b-2 !border-gray-300 !pt-1.5 !pl-1.5" />
          </FloatLabel>
          <FloatLabel variant="in" :pt="{ root: '!mt-10'}">
            <label for="name" class="font-poppins text-sm !text-gray-500 leading-[24px] pt-0.5 pl-1.5">Email or Phone Number</label>
            <InputText id="name" class="!w-full text-sm !h-[50px] !border-b-2 !border-gray-300 !pt-1.5 !pl-1.5" />
          </FloatLabel>
          <FloatLabel variant="in" v-model="password" :pt="{ root: '!mt-10'}">
            <label for="password" class="font-poppins text-sm !text-gray-500 leading-[24px] pt-0.5 pl-1.5">
              Password
            </label>
            <Password id="password" class="!w-full text-sm !h-[50px] !border-b-2 !border-gray-300 !pt-1.5 !pl-1.5" />
          </FloatLabel>

          <Button unstyled label="Create Account" class="w-full bg-red-500 rounded-sm text-white font-poppins font-medium mt-10 py-4 flex justify-center items-center" />
          
          <Button unstyled label="Sign up with Google" class="w-full rounded-sm font-poppins mt-4 py-4 flex justify-center items-center border-2 border-gray-400" :pt="{ icon: 'mr-3.5'}">
            <template #icon>
              <GoogleIcon class="mr-3" />
            </template>
          </Button>
          
          <div class="mt-8.5">
            <div class="flex justify-center">
              <p class="font-poppins leading-[24px] text-gray-600">Already have account? <a href="#" class=" text-gray-900 font-medium underline underline-offset-8 ml-3">Log in</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
