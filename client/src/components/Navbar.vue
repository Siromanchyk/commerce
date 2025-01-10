<script setup>
import search from '../images/auth-login/search.png';
</script>

<template>
  <div class="pt-11 pb-6 border-2 border-solid border-b-gray-400 border-opacity-30">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <div class="font-bold text-2xl font-inter-sans">
        <a href="#">Exclusive</a>
      </div>
      <nav>
        <ul class="flex font-poppins-sans">
          <li class="mr-12 hover:underline underline-offset-2"><a href="#">Home</a></li>
          <li class="mr-12 hover:underline underline-offset-2"><a href="#">Contact</a></li>
          <li class="mr-12 hover:underline underline-offset-2"><a href="#">About</a></li>
          <li class="mr-12 hover:underline underline-offset-2"><a href="#">Sign Up</a></li>
        </ul>
      </nav>
      <div class="relative">
        <input type="text" name="search" id="search" class="bg-gray-100 rounded pl-5 py-1 pr-11" placeholder="What are you looking for?">
        <img :src="search" alt="search" class="absolute right-2 bottom-2 cursor-pointer">
      </div>
    </div>
  </div>
</template>