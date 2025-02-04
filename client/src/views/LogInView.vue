<script setup>
import bg from '@/images/auth-login/Side Image.png';
</script>

<template>
  <div class="pt-14 pb-36">
    <div class=" max-w-screen-xl mx-auto flex items-center justify-between">
      <div>
        <img :src="bg" alt="" class="invisible">
        <img :src="bg" alt="" class="absolute top-52 left-0">
      </div>
      <div class="">
        <h1 class="text-4xl font-medium font-inter-sans tracking-widest">Log in to Exclusive</h1>

        <div class="mt-6">
          <p class="font-poppins-sans">Enter your details below</p>
        </div>
        
        <form>
          <div class="mt-10 w-full border-b-2 border-b-gray-400">
            <input type="text" name="email" id="email" placeholder="Email or Phone" class="pb-2 w-full">
          </div>

          <div class="mt-10 w-full border-b-2 border-b-gray-400">
            <input type="text" name="password" id="password" placeholder="Password" class="pb-2 w-full">
          </div>

          <div class="flex justify-between items-center mt-10">
            <div class="bg-red-500 rounded py-4 px-12">
              <button class="font-poppins-sans text-base font-medium text-white">Log In</button>
            </div>
            <div>
              <a href="#" class="font-poppins-sans text-red-500">Forget a Password?</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>