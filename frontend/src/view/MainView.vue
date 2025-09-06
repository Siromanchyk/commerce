<script setup lang="ts">
import NavSlider from '@/components/NavSlider.vue';
import ProductSection from '@/components/ProductSection.vue';

</script>

<template>

  <NavSlider />

  <div class="lg:pt-35 pt-10">
    <ProductSection title="Today's" sub-title="Flash Sales" :times="true" layout="row" />
  </div>

  <div class="pt-20">
    <div class="md:max-w-3xl lg:max-w-7xl px-3.5 md:px-0 mx-auto">
      <div class="flex items-center">
        <div class="w-5 h-10 rounded-xs bg-red-500"></div>
        <div class="ml-4">
          <p class="font-poppins font-semibold text-red-500">Categories</p>
        </div>
      </div>
      <div class="mt-6 flex justify-between items-end">
        <div class="flex items-end">
          <h2 class="text-4xl font-semibold font-inter">Browse By Category</h2>
        </div>
        <div class="flex">
          <button class="block bg-gray-200 rounded-full px-4 py-3 mr-2">
            <span class="pi pi-arrow-left"></span>
          </button>
          <button class="block bg-gray-200 rounded-full px-4 py-3">
            <span class="pi pi-arrow-right"></span>
          </button>
        </div>
      </div>

      <div class="mt-10 pb-17.5 border-b-2 border-b-gray-300">
        <div class="flex overflow-hidden">
          <a href="#" class="border-2 border-gray-300 rounded-sm flex flex-col justify-center items-center w-[200px] h-[145px] mr-4 shrink-0">
            <svg width="56.000000" height="56.000000" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <clipPath id="clip450_1573">
                  <rect id="Category-CellPhone" width="56.000000" height="56.000000" fill="white" fill-opacity="0"/>
                </clipPath>
              </defs>
              <g clip-path="url(#clip450_1573)">
                <path id="Vector" d="M38.93 6.12C40.44 6.12 41.67 7.34 41.67 8.85L41.67 47.14C41.67 48.65 40.44 49.87 38.93 49.87L17.06 49.87C15.55 49.87 14.32 48.65 14.32 47.14L14.32 8.85C14.32 7.34 15.55 6.12 17.06 6.12L38.93 6.12Z" stroke="#000000" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
                <path id="Vector" d="M25.66 7L31.13 7" stroke="#000000" stroke-opacity="1.000000" stroke-width="3.000000" stroke-linejoin="round" stroke-linecap="round"/>
                <path id="Vector" d="M28 44L28 44.03" stroke="#000000" stroke-opacity="1.000000" stroke-width="2.500000" stroke-linejoin="round" stroke-linecap="round"/>
                <line id="Line 8" x1="15.166656" y1="39.833374" x2="40.833328" y2="39.833374" stroke="#000000" stroke-opacity="1.000000" stroke-width="2.000000"/>
              </g>
            </svg>
            <div class="mt-4.5">
              <p class="font-poppins">Phones</p>
            </div>
          </a>
          <a href="#" class="border-2 border-gray-300 rounded-sm flex flex-col justify-center items-center w-[200px] h-[145px] mr-4 shrink-0">
            <svg width="56.000000" height="56.000000" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <clipPath id="clip450_1803">
                  <rect id="Category-Computer" width="56.000000" height="56.000000" fill="white" fill-opacity="0"/>
                </clipPath>
              </defs>
              <rect id="Category-Computer" width="56.000000" height="56.000000" fill="#FFFFFF" fill-opacity="0"/>
              <g clip-path="url(#clip450_1803)">
                <path id="Vector" d="M46.66 9.33C47.95 9.33 49 10.37 49 11.66L49 35C49 36.28 47.95 37.33 46.66 37.33L9.33 37.33C8.04 37.33 7 36.28 7 35L7 11.66C7 10.37 8.04 9.33 9.33 9.33L46.66 9.33Z" stroke="#000000" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
                <path id="Vector" d="M16.33 46.66L39.66 46.66" stroke="#000000" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                <path id="Vector" d="M21 37.33L21 46.66" stroke="#000000" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                <path id="Vector" d="M35 37.33L35 46.66" stroke="#000000" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                <path id="Line 12" d="M8 32L48 32" stroke="#000000" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linecap="round"/>
              </g>
            </svg>
            <div class="mt-4.5">
              <p class="font-poppins">Computers</p>
            </div>
          </a>
          <a href="#" class="border-2 border-gray-300 rounded-sm flex flex-col justify-center items-center w-[200px] h-[145px] mr-4 shrink-0">
            <svg width="56.000000" height="56.000000" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <clipPath id="clip450_1829">
                  <rect id="Category-SmartWatch" width="56.000000" height="56.000000" fill="white" fill-opacity="0"/>
                </clipPath>
              </defs>
              <g clip-path="url(#clip450_1829)">
                <path id="Vector" d="M35 14C38.86 14 42 17.13 42 21L42 35C42 38.86 38.86 42 35 42L21 42C17.13 42 14 38.86 14 35L14 21C14 17.13 17.13 14 21 14L35 14Z" stroke="#000000" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
                <path id="Vector" d="M21 42L21 49L35 49L35 42" stroke="#000000" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                <path id="Vector" d="M21 14L21 7L35 7L35 14" stroke="#000000" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                <line id="Line 11" x1="24.000000" y1="22.000000" x2="24.000000" y2="35.000000" stroke="#000000" stroke-opacity="1.000000" stroke-width="2.000000"/>
                <line id="Line 10" x1="28.000000" y1="27.000000" x2="28.000000" y2="35.000000" stroke="#000000" stroke-opacity="1.000000" stroke-width="2.000000"/>
                <line id="Line 9" x1="32.000000" y1="25.000000" x2="32.000000" y2="35.000000" stroke="#000000" stroke-opacity="1.000000" stroke-width="2.000000"/>
              </g>
            </svg>
            <div class="mt-4.5">
              <p class="font-poppins">SmartWatch</p>
            </div>
          </a>
          <a href="#" class="border-2 border-gray-300 rounded-sm flex flex-col justify-center items-center w-[200px] h-[145px] mr-4 shrink-0">
            <svg width="56.000000" height="56.000000" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <clipPath id="clip450_1898">
                  <rect id="Category-Camera" width="56.000000" height="56.000000" fill="white" fill-opacity="0"/>
                </clipPath>
              </defs>
              <g clip-path="url(#clip450_1898)">
                <path id="Vector" d="M14 16.33C15.23 16.33 16.42 15.84 17.29 14.96C18.17 14.09 18.66 12.9 18.66 11.66C18.66 11.04 18.91 10.45 19.35 10.01C19.78 9.57 20.38 9.33 21 9.33L35 9.33C35.61 9.33 36.21 9.57 36.64 10.01C37.08 10.45 37.33 11.04 37.33 11.66C37.33 12.9 37.82 14.09 38.7 14.96C39.57 15.84 40.76 16.33 42 16.33L44.33 16.33C45.57 16.33 46.75 16.82 47.63 17.7C48.5 18.57 49 19.76 49 21L49 42C49 43.23 48.5 44.42 47.63 45.29C46.75 46.17 45.57 46.66 44.33 46.66L11.66 46.66C10.42 46.66 9.24 46.17 8.36 45.29C7.49 44.42 7 43.23 7 42L7 21C7 19.76 7.49 18.57 8.36 17.7C9.24 16.82 10.42 16.33 11.66 16.33L14 16.33Z" stroke="#000000" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
                <path id="Vector" d="M28 37.33C24.13 37.33 21 34.19 21 30.33C21 26.46 24.13 23.33 28 23.33C31.86 23.33 35 26.46 35 30.33C35 34.19 31.86 37.33 28 37.33Z" stroke="#000000" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
              </g>
            </svg>
            <div class="mt-4.5">
              <p class="font-poppins">Camera</p>
            </div>
          </a>
          <a href="#" class="border-2 border-gray-300 rounded-sm flex flex-col justify-center items-center w-[200px] h-[145px] mr-4 shrink-0">
            <svg width="56.000000" height="56.000000" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <clipPath id="clip450_1783">
                  <rect id="Category-Headphone" width="56.000000" height="56.000000" fill="white" fill-opacity="0"/>
                </clipPath>
              </defs>
              <rect id="Category-Headphone" width="56.000000" height="56.000000" fill="#FFFFFF" fill-opacity="0"/>
              <g clip-path="url(#clip450_1783)">
                <path id="Vector" d="M16.33 30.33C18.91 30.33 21 32.42 21 35L21 42C21 44.57 18.91 46.66 16.33 46.66L14 46.66C11.42 46.66 9.33 44.57 9.33 42L9.33 35C9.33 32.42 11.42 30.33 14 30.33L16.33 30.33Z" stroke="#000000" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
                <path id="Vector" d="M42 30.33C44.57 30.33 46.66 32.42 46.66 35L46.66 42C46.66 44.57 44.57 46.66 42 46.66L39.66 46.66C37.08 46.66 35 44.57 35 42L35 35C35 32.42 37.08 30.33 39.66 30.33L42 30.33Z" stroke="#000000" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
                <path id="Vector" d="M9.33 35L9.33 28C9.33 23.04 11.3 18.3 14.8 14.8C18.3 11.3 23.04 9.33 28 9.33C32.95 9.33 37.69 11.3 41.19 14.8C44.7 18.3 46.66 23.04 46.66 28L46.66 35" stroke="#000000" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
              </g>
            </svg>
            <div class="mt-4.5">
              <p class="font-poppins">HeadPhones</p>
            </div>
          </a>
          <a href="#" class="border-2 border-gray-300 rounded-sm flex flex-col justify-center items-center w-[200px] h-[145px] shrink-0">
            <svg width="56.000000" height="56.000000" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <clipPath id="clip450_1856">
                  <rect id="Category-Gamepad" width="56.000000" height="56.000000" fill="white" fill-opacity="0"/>
                </clipPath>
              </defs>
              <rect id="Category-Gamepad" width="56.000000" height="56.000000" fill="#FFFFFF" fill-opacity="0"/>
              <g clip-path="url(#clip450_1856)">
                <path id="Vector" d="M46.66 14C49.24 14 51.33 16.08 51.33 18.66L51.33 37.33C51.33 39.91 49.24 42 46.66 42L9.33 42C6.75 42 4.66 39.91 4.66 37.33L4.66 18.66C4.66 16.08 6.75 14 9.33 14L46.66 14Z" stroke="#000000" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
                <path id="Vector" d="M14 28L23.33 28M18.66 23.33L18.66 32.66" stroke="#000000" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                <path id="Vector" d="M35 25.66L35 25.69" stroke="#000000" stroke-opacity="1.000000" stroke-width="3.000000" stroke-linejoin="round" stroke-linecap="round"/>
                <path id="Vector" d="M42 30.33L42 30.35" stroke="#000000" stroke-opacity="1.000000" stroke-width="3.000000" stroke-linejoin="round" stroke-linecap="round"/>
              </g>
            </svg>
            <div class="mt-4.5">
              <p class="font-poppins">Gaming</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="pt-17.5 lg:pt-20">
    <ProductSection title="This month" sub-title="Best Selling Products" :times="false" layout="row" />
    <div class="md:max-w-3xl lg:max-w-7xl px-3.5 md:px-0 mx-auto">
        <div class="lg:mt-35 mt-15">
          <div class="bg-black flex justify-between py-17.5 px-14">
            <div>
              <h3 class="font-poppins font-semibold text-(--color-green)">Categories</h3>
              <div class="mt-8">
                <p class="font-inter text-5xl font-semibold text-white leading-[60px]">Enhance Your <br> Music Experience</p>
              </div>
              <div class="flex mt-8">
                <div class="bg-white rounded-full flex flex-col justify-center items-center py-3 px-3.5 mr-6 w-[62px] h-[62px]">
                  <div>
                    <p class="font-poppins font-semibold leading-[20px]">23</p>
                  </div>
                  <div>
                    <p class="font-poppins text-xs leading-[18px]">Hours</p>
                  </div>
                </div>
                <div class="bg-white rounded-full flex flex-col justify-center items-center py-3 px-3.5 mr-6 w-[62px] h-[62px]">
                  <div>
                    <p class="font-poppins font-semibold leading-[20px]">05</p>
                  </div>
                  <div>
                    <p class="font-poppins text-xs leading-[18px]">Days</p>
                  </div>
                </div>
                <div class="bg-white rounded-full flex flex-col justify-center items-center py-3 px-3.5 mr-6 w-[62px] h-[62px]">
                  <div>
                    <p class="font-poppins font-semibold leading-[20px]">59</p>
                  </div>
                  <div>
                    <p class="font-poppins text-xs leading-[18px]">Minutes</p>
                  </div>
                </div>
                <div class="bg-white rounded-full flex flex-col justify-center items-center py-3 px-3.5 w-[62px] h-[62px]">
                  <div>
                    <p class="font-poppins font-semibold leading-[20px]">35</p>
                  </div>
                  <div>
                    <p class="font-poppins text-xs leading-[18px]">Seconds</p>
                  </div>
                </div>
              </div>
              <div class="mt-10">
                <a href="#" class="inline-flex justify-center items-center rounded-sm font-poppins text-white font-medium leading-[24px] bg-(--color-green) py-4 px-12">
                  Buy Now!
                </a>
              </div>
            </div>
            <div class="flex items-center">
              <img src="../assets/images/blocks/jbl.png" alt="jbl" class="drop-shadow-[0_20px_15px_rgba(150,150,150,0.4)]">
            </div>
          </div>
        </div>
    </div>
  </div>

  <div class="pt-17.5 lg:pt-20">
    <ProductSection title="Our Products" sub-title="Explore Our Products" :times="false" layout="grid" />
  </div>

  <div class="lg:pt-20 pt-17.5">
    <div class="md:max-w-3xl lg:max-w-7xl px-3.5 md:px-0 mx-auto">
      <div class="flex items-center">
        <div class="w-5 h-10 rounded-xs bg-red-500"></div>
        <div class="ml-4">
          <p class="font-poppins font-semibold text-red-500">Featured</p>
        </div>
      </div>
      <div class="mt-6 flex justify-between items-end">
        <div class="flex items-end">
          <h2 class="text-4xl font-semibold font-inter">New Arrival</h2>
        </div>
      </div>
      <div class="lg:mt-10 mt-5">
        <div class="md:flex block">
          <div class="flex items-end md:mr-3 lg:mr-7.5 md:w-1/2 bg-black h-[450px] md:h-auto lg:h-[600px] relative px-7.5 pb-8">
            <div class="w-full max-w-[511px] h-auto absolute bottom-0 left-1/2 translate-x-[-50%]">
              <img src="../assets/images/blocks/ps.png" alt="ps" class="">
            </div>
            <div class="z-10">
              <h3 class="font-inter text-2xl leading-[24px] font-semibold text-white">PlayStation 5</h3>
              <div class="mt-4">
                <p class="font-poppins text-sm leading-[21px] text-white">Black and White version of the PS5 <br> coming out on sale.</p>
              </div>
              <div class="mt-4">
                <a href="#" class="font-poppins text-white font-medium leading-[24px] underline underline-offset-2">Shop Now</a>
              </div>
            </div>
          </div>
          <div class="md:w-1/2 mt-3 md:mt-0">
            <div class="bg-black h-[284px] relative overflow-hidden flex items-end px-6 pb-6">
              <div class="absolute right-0 bottom-0">
                <img src="../assets/images/blocks/women's collection.png" alt="">
              </div>
              <div class="z-10">
                <h3 class="font-inter text-2xl leading-[24px] font-semibold text-white">Women’s Collections</h3>
                <div class="mt-4">
                  <p class="font-poppins text-sm leading-[21px] text-white">Featured woman collections that <br> give you another vibe.</p>
                </div>
                <div class="mt-4">
                  <a href="#" class="font-poppins text-white font-medium leading-[24px] underline underline-offset-2">Shop Now</a>
                </div>
              </div>
            </div>
            <div class="mt-3 lg:mt-7.5 flex justify-between">
              <div class="w-1/2 h-[286px] bg-black relative flex items-end pl-6 pb-6">
                <div class="absolute left-1/2 bottom-1/2 translate-x-[-50%] translate-y-[50%]">
                  <img src="../assets/images/blocks/speakers.png" alt="">
                </div>
                <div class="z-10">
                  <h3 class="font-inter text-2xl leading-[24px] font-semibold text-white">Speakers</h3>
                  <div class="mt-2">
                    <p class="font-poppins text-sm leading-[21px] text-white">Amazon wireless speakers</p>
                  </div>
                  <div class="mt-2">
                    <a href="#" class="font-poppins text-white font-medium leading-[24px] underline underline-offset-2">Shop Now</a>
                  </div>
                </div>
              </div>
              <div class="w-1/2 h-[286px] bg-black relative flex items-end pl-6 pb-6 lg:ml-7.5 ml-3">
                <div class="absolute left-1/2 bottom-1/2 translate-x-[-50%] translate-y-[50%]">
                  <img src="../assets/images/blocks/perfume.png" alt="">
                </div>
                <div class="z-10">
                  <h3 class="font-inter text-2xl leading-[24px] font-semibold text-white">Perfume</h3>
                  <div class="mt-2">
                    <p class="font-poppins text-sm leading-[21px] text-white uppercase">GUCCI INTENSE OUD EDP</p>
                  </div>
                  <div class="mt-2">
                    <a href="#" class="font-poppins text-white font-medium leading-[24px] underline underline-offset-2">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-15 lg:mt-35 pb-35">
        <div class="flex md:flex-row flex-col justify-around items-center">
            <div class="flex flex-col items-center">
              <div class="w-[80px] h-[80px] bg-gray-400 rounded-full p-4 flex justify-center items-center">
                <div class="bg-black rounded-full p-3 flex justify-center items-center">
                  <svg width="40.000000" height="40.000000" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <clipPath id="clip456_6709">
                        <rect id="icon-delivery" width="40.000000" height="40.000000" fill="white" fill-opacity="0"/>
                      </clipPath>
                    </defs>
                    <rect id="icon-delivery" width="40.000000" height="40.000000" fill="#FFFFFF" fill-opacity="0"/>
                    <g clip-path="url(#clip456_6709)">
                      <path id="Vector" d="M11.66 31.66C9.82 31.66 8.33 30.17 8.33 28.33C8.33 26.49 9.82 25 11.66 25C13.5 25 15 26.49 15 28.33C15 30.17 13.5 31.66 11.66 31.66Z" stroke="#FAFAFA" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
                      <path id="Vector" d="M28.33 31.66C26.49 31.66 25 30.17 25 28.33C25 26.49 26.49 25 28.33 25C30.17 25 31.66 26.49 31.66 28.33C31.66 30.17 30.17 31.66 28.33 31.66Z" stroke="#FAFAFA" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
                      <path id="Vector" d="M8.33 28.33L6.99 28.33C5.89 28.33 4.99 27.43 4.99 26.33L4.99 21.66M3.33 8.33L19.66 8.33C20.77 8.33 21.66 9.22 21.66 10.33L21.66 28.33M15 28.33L25 28.33M31.66 28.33L33 28.33C34.1 28.33 35 27.43 35 26.33L35 18.33L30.58 10.97C30.22 10.36 29.57 10 28.86 10L21.66 10M35 18.33L21.66 18.33" stroke="#FAFAFA" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                      <path id="Vector" d="M8 28L6.66 28C5.56 28 4.66 27.1 4.66 26L4.66 21.33M3 8L19.33 8C20.43 8 21.33 8.89 21.33 10L21.33 28M15 28L24.66 28M32 28L32.66 28C33.77 28 34.66 27.1 34.66 26L34.66 18L30.24 10.63C29.88 10.03 29.23 9.66 28.53 9.66L21.33 9.66M34.66 18L21.33 18" stroke="#FAFAFA" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                      <path id="Vector" d="M5 11.81L11.66 11.81" stroke="#FAFAFA" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                      <path id="Vector" d="M1.81 15.45L8.48 15.45" stroke="#FAFAFA" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                      <path id="Vector" d="M5 19.09L11.66 19.09" stroke="#FAFAFA" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                    </g>
                  </svg>
                </div>
              </div>
              <div class="mt-6 flex flex-col items-center">
                <h3 class="font-poppins text-xl leding-[28px] md:leading-[20px] font-semibold uppercase">FREE AND FAST DELIVERY</h3>
                <div class="mt-2">
                  <p class="font-poppins text-sm leading-[21px] md:leading-[10px]">Free delivery for all orders over $140</p>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-center mt-5 md:mt-0">
              <div class="w-[80px] h-[80px] bg-gray-400 rounded-full p-4 flex justify-center items-center">
                <div class="bg-black rounded-full p-3 flex justify-center items-center">
                  <svg width="40.000000" height="40.000000" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <clipPath id="clip456_6726">
                        <rect id="Icon-Customer service" width="40.000000" height="40.000000" fill="white" fill-opacity="0"/>
                      </clipPath>
                    </defs>
                    <g clip-path="url(#clip456_6726)">
                      <path id="Vector" d="M13.33 25L13.33 28.33C13.33 30.17 11.84 31.66 9.99 31.66C8.15 31.66 6.66 30.17 6.66 28.33L6.66 25C6.66 23.15 8.15 21.66 9.99 21.66C11.84 21.66 13.33 23.15 13.33 25Z" stroke="#FFFFFF" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
                      <path id="Vector" d="M33.33 25L33.33 28.33C33.33 30.17 31.84 31.66 29.99 31.66C28.15 31.66 26.66 30.17 26.66 28.33L26.66 25C26.66 23.15 28.15 21.66 29.99 21.66C31.84 21.66 33.33 23.15 33.33 25Z" stroke="#FFFFFF" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
                      <path id="Vector" d="M6.66 25L6.66 20C6.66 16.46 8.07 13.07 10.57 10.57C13.07 8.07 16.46 6.66 19.99 6.66C23.53 6.66 26.92 8.07 29.42 10.57C31.92 13.07 33.33 16.46 33.33 20L33.33 25" stroke="#FFFFFF" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                      <path id="Vector" d="M30 31.66C30 32.99 28.94 34.26 27.07 35.2C25.19 36.13 22.65 36.66 20 36.66" stroke="#FFFFFF" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                    </g>
                  </svg>
                </div>
              </div>
              <div class="mt-6 flex flex-col items-center">
                <h3 class="font-poppins text-xl leding-[28px] md:leading-[20px] font-semibold uppercase">24/7 CUSTOMER SERVICE</h3>
                <div class="mt-2">
                  <p class="font-poppins text-sm leading-[21px] md:leading-[10px]">Friendly 24/7 customer support</p>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-center mt-5 md:mt-0">
              <div class="w-[80px] h-[80px] bg-gray-400 rounded-full p-4 flex justify-center items-center">
                <div class="bg-black rounded-full p-3 flex justify-center items-center">
                  <svg width="40.000000" height="40.000000" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs/>
                    <rect id="Icon-secure" width="40.000000" height="40.000000" fill="#FFFFFF" fill-opacity="0"/>
                    <path id="Vector" d="M20 37.93C18.18 37.93 16.38 37.39 14.96 36.35L7.8 31C5.9 29.58 4.41 26.61 4.41 24.26L4.41 11.86C4.41 9.29 6.3 6.56 8.71 5.66L17.03 2.54C18.68 1.93 21.28 1.93 22.93 2.54L31.25 5.66C33.66 6.56 35.55 9.29 35.55 11.86L35.55 24.25C35.55 26.61 34.06 29.56 32.16 30.98L25 36.33C23.61 37.39 21.81 37.93 20 37.93ZM17.91 4.89L9.6 8.01C8.18 8.54 6.93 10.35 6.93 11.88L6.93 24.26C6.93 25.85 8.05 28.06 9.3 29L16.46 34.35C18.38 35.78 21.61 35.78 23.55 34.35L30.71 29C31.98 28.04 33.08 25.85 33.08 24.26L33.08 11.86C33.08 10.35 31.83 8.54 30.41 8L22.1 4.88C20.96 4.48 19.03 4.48 17.91 4.89Z" fill="#FAFAFA" fill-opacity="1.000000" fill-rule="nonzero"/>
                    <path id="Vector" d="M14.96 36.35L7.8 31C5.9 29.58 4.41 26.61 4.41 24.26L4.41 11.86C4.41 9.29 6.3 6.56 8.71 5.66L17.03 2.54C18.68 1.93 21.28 1.93 22.93 2.54L31.25 5.66C33.66 6.56 35.55 9.29 35.55 11.86L35.55 24.25C35.55 26.61 34.06 29.56 32.16 30.98L25 36.33C23.61 37.39 21.81 37.93 20 37.93C18.18 37.93 16.38 37.39 14.96 36.35ZM9.6 8.01C8.18 8.54 6.93 10.35 6.93 11.88L6.93 24.26C6.93 25.85 8.05 28.06 9.3 29L16.46 34.35C18.38 35.78 21.61 35.78 23.55 34.35L30.71 29C31.98 28.04 33.08 25.85 33.08 24.26L33.08 11.86C33.08 10.35 31.83 8.54 30.41 8L22.1 4.88C20.96 4.48 19.03 4.48 17.91 4.89L9.6 8.01Z" stroke="#FAFAFA" stroke-opacity="1.000000" stroke-width="1.000000"/>
                    <path id="Vector" d="M17.76 23.71C17.45 23.71 17.13 23.6 16.88 23.35L14.2 20.66C13.71 20.18 13.71 19.38 14.2 18.89C14.68 18.41 15.48 18.41 15.96 18.89L17.76 20.7L24.05 14.41C24.53 13.93 25.33 13.93 25.81 14.41C26.3 14.89 26.3 15.7 25.81 16.18L18.65 23.35C18.4 23.6 18.08 23.71 17.76 23.71Z" fill="#FAFAFA" fill-opacity="1.000000" fill-rule="nonzero"/>
                    <path id="Vector" d="M16.88 23.35L14.2 20.66C13.71 20.18 13.71 19.38 14.2 18.89C14.68 18.41 15.48 18.41 15.96 18.89L17.76 20.7L24.05 14.41C24.53 13.93 25.33 13.93 25.81 14.41C26.3 14.89 26.3 15.7 25.81 16.18L18.65 23.35C18.4 23.6 18.08 23.71 17.76 23.71C17.45 23.71 17.13 23.6 16.88 23.35Z" stroke="#FAFAFA" stroke-opacity="1.000000" stroke-width="1.000000"/>
                    <g opacity="0.000000">
                      <path id="Vector" d="M40 0L40 40L0 40L0 0L40 0Z" stroke="#FAFAFA" stroke-opacity="1.000000" stroke-width="1.000000"/>
                    </g>
                  </svg>
                </div>
              </div>
              <div class="mt-6 flex flex-col items-center">
                <h3 class="font-poppins text-xl leding-[28px] md:leading-[20px] font-semibold uppercase">MONEY BACK GUARANTEE</h3>
                <div class="mt-2">
                  <p class="font-poppins text-sm leading-[21px] md:leading-[10px]">We return money within 30 days</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>

</template>
