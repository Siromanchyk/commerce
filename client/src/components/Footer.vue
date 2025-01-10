<script setup>
import qrCode from '@/images/auth-login/Qr Code.png';
import googlePlay from '@/images/auth-login/GooglePlay.png';
import appleStore from '@/images/auth-login/AppStore.png';
import facebookIcon from '@/images/auth-login/Icon-Facebook.png';
import instagramIcon from '@/images/auth-login/Icon-Instagram.png';
import linkedinIcon from '@/images/auth-login/Icon-Linkedin.png';
import twitterIcon from '@/images/auth-login/Icon-Twitter.png';
</script>

<template>
  <div class="pt-20 pb-14  bg-black border-b-2 border-b-gray-600 border-opacity-30">
    <div class="max-w-screen-xl mx-auto flex justify-between">
      <div class="text-white">
        <h3 class="font-inter-sans text-2xl font-bold tracking-wide">Exclusive</h3>
        <div class="mt-6">
          <p class="text-xl font-medium">
            Subscribe
          </p>
        </div>
        <div class="mt-6">
          <p>
            Get 10% off your first order
          </p>
        </div>
        <div class=" mt-4 relative">
          <input type="text" name="email" id="email" placeholder="Enter your email" class="bg-transparent border-2 border-white rounded py-3 pl-4">
          <svg width="21.500366" height="19.500244" viewBox="0 0 21.5004 19.5002" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="absolute right-4 top-4">
            <path id="Vector" d="M8.66 9.75L2.75 9.75L0.77 1.88C0.76 1.83 0.75 1.79 0.75 1.74C0.72 1.02 1.52 0.52 2.21 0.85L20.75 9.75L2.21 18.64C1.53 18.97 0.74 18.48 0.75 17.77C0.75 17.71 0.76 17.65 0.78 17.59L2.25 12.75" stroke="#FAFAFA" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round" />
          </svg>
        </div>
      </div>
      <div class="text-white font-poppins-sans">
        <h4 class="font-medium text-xl">Support</h4>
        <div class="mt-6">
          <p class="">
            111 Bijoy sarani, Dhaka, <br> DH 1515, Bangladesh.
          </p>
        </div>
        <div class="mt-4">
          <p class="">
            exclusive@gmail.com
          </p>
        </div>
        <div class="mt-4">
          <p class="">
            +88015-88888-9999
          </p>
        </div>
      </div>
      <div class="text-white font-poppins-sans">
        <h4 class="font-medium text-xl">Account</h4>
        <div class="mt-6">
          <p>
            My Account
          </p>
        </div>
        <div class="mt-4">
          <p>
            Login / Register
          </p>
        </div>
        <div class="mt-4">
          <p>
            Cart
          </p>
        </div>
        <div class="mt-4">
          <p>
            Wishlist
          </p>
        </div>
        <div class="mt-4">
          <p>
            Shop
          </p>
        </div>
      </div> 
      <div class="text-white font-poppins-sans">
        <h4 class="font-medium text-xl">Quick Link</h4>
        <div class="mt-6">
          <p>
            Privacy Policy
          </p>
        </div>
        <div class="mt-4">
          <p>
            Terms Of Use
          </p>
        </div>
        <div class="mt-4">
          <p>
            FAQ
          </p>
        </div>
        <div class="mt-4">
          <p>
            Contact
          </p>
        </div>
      </div>
      <div class="text-white font-poppins-sans">
        <h4 class="font-medium text-xl">Download App</h4>
        <div class="mt-6">
          <p class="text-xs font-medium text-gray-400">
            Save $3 with App New User Only
          </p>
        </div>
        <div class="flex mt-3">
          <div>
            <img :src="qrCode" alt="qr code">
          </div>
          <div class="ml-2">
            <div>
              <img :src="googlePlay" alt="google play">
            </div>
            <div>
              <img :src="appleStore" alt="apple store">
            </div>
          </div>
        </div>
        <div class="flex mt-6">
          <img :src="facebookIcon" alt="facebook icon" class="mr-6 border-2 border-dashed border-gray-300">
          <img :src="twitterIcon" alt="twitter icon" class="mr-6 border-2 border-dashed border-gray-300">
          <img :src="instagramIcon" alt="instagram icon" class="mr-6 border-2 border-dashed border-gray-300">
          <img :src="linkedinIcon" alt="linkedin icon" class="mr-6 border-2 border-dashed border-gray-300">
        </div>
      </div>
    </div>
  </div>
  <div class="pt-4 pb-6 bg-black">
    <div class="font-poppins-sans text-center">
      <p class=" text-gray-500">© Copyright Rimel 2022. All right reserved</p>
    </div>
  </div>
</template>