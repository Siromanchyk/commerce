<script setup lang="ts">
import { FloatLabel, InputText, Password, Button } from 'primevue';
import GoogleIcon from '@/components/icons/GoogleIcon.vue';

</script>

<template>
  <div class="lg:pr-[calc((100%-theme(maxWidth.7xl))/2)] md:pr-[calc((100%-theme(maxWidth.3xl))/2)] px-4 md:px-0 py-14 lg:pb-36">
    <div class="flex lg:justify-between justify-center items-center shrink">
      <div class="md:block hidden flex-[70%]">
        <img src="../assets/images/blocks/signUpIn.png" class="" alt="sign in">
      </div>
      <div class="md:ml-4 grow flex-[29%]">
        <h2 class="font-inter text-4xl lg:text-4xl md:text-2xl font-medium leading-[30px]">Create an account</h2>
        <div class="mt-6">
          <p class="font-poppins leading-[24px]">Enter your details below</p>
        </div>
        <div class="mt-6 md:mt-6 lg:mt-12">
          <FloatLabel variant="in" :pt="{ root: '!border-b-2 !border-b-gray-300' }">
            <label for="name" class="font-poppins text-sm !text-gray-500 leading-[24px]">Name</label>
            <InputText id="name" :pt="{ root: '!w-full !h-[50px] !border-none' }" />
          </FloatLabel>
          <FloatLabel variant="in" :pt="{ root: '!border-b-2 !border-b-gray-300 !mt-10' }">
            <label for="name" class="font-poppins text-sm !text-gray-500 leading-[24px]">Email or Phone Number</label>
            <InputText id="name" :pt="{ root: '!w-full !h-[50px] !border-none' }" />
          </FloatLabel>
          <FloatLabel variant="in" :pt="{ root: '!mt-10' }">
            <Password id="password" :feedback="false" :pt="{ root: '!w-full !h-[50px] !border-b-2 !border-b-gray-300', pcInputText: { root: '!w-full !border-none'}, }" />
            <label for="password" class="font-poppins text-sm !text-gray-500 leading-[24px]">Password</label>
          </FloatLabel>
          <div class="mt-10">
            <Button label="Create Account" :pt="{ root: 'w-full !bg-red-500 !font-poppins !border-none !py-3' }" />
            <Button label="Sign up with Google" class="mt-4" :pt="{ 
              root: 'w-full !font-poppins !text-black !border-2 !border-gray-400 !py-3 !bg-white', 
              icon: 'mr-3.5', }">
              <template #icon>
                <GoogleIcon class="mr-3" />
              </template>
            </Button>
          </div>
          <div class="mt-8.5">
            <div class="flex justify-center">
              <p class="font-poppins leading-[24px] text-gray-600">Already have account? 
                <RouterLink to="/" class="text-gray-900 font-medium underline decoration-gray-400 underline-offset-6 ml-3">
                  Log in
                </RouterLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
