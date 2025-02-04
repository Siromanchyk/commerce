<script setup>
import bg from '@/images/auth-login/Side Image.png';
import googleColorIcon from '@/images/auth-login/Icon-Google.png';
</script>

<template>
  <div class="pt-14 pb-36">
    <div class=" max-w-screen-xl mx-auto flex items-center justify-between">
      <div>
        <img :src="bg" alt="" class="invisible">
        <img :src="bg" alt="" class="absolute top-52 left-0">
      </div>
      <div class="">
        <h1 class="text-4xl font-medium tracking-wider font-inter-sans">Create an account</h1>

        <div class="mt-6">
          <p class="font-poppins-sans">Enter your details below</p>
        </div>
        
        <form>
          <div class="mt-12 w-full border-b-2 border-b-gray-400">
            <input type="text" name="name" id="name" placeholder="Name" class="pb-2 w-full">
          </div>

          <div class="mt-10 w-full border-b-2 border-b-gray-400">
            <input type="text" name="email" id="email" placeholder="Email or Phone" class="pb-2 w-full">
          </div>

          <div class="mt-10 w-full border-b-2 border-b-gray-400">
            <input type="text" name="password" id="password" placeholder="Password" class="pb-2 w-full">
          </div>

          <div class="mt-10 w-full flex justify-center items-center bg-red-500 py-3 rounded">
            <button class="font-poppins-sans text-base font-medium text-white">Create Account</button>
          </div>

          <div class="mt-5 w-full relative flex justify-center items-center rounded border-2 py-3 border-gray-400">
            <button class="font-poppins-sans">
              Sign up with Google
              <img :src="googleColorIcon" alt="google icon" class="absolute left-12 bottom-3 ">
            </button>
          </div>

          <div class="mt-9 text-center">
            <p class="font-poppins-sans opacity-70">Already have account? <a href="#" class="font-medium underline underline-offset-4 ml-4 decoration-gray-600">Log in</a></p>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>