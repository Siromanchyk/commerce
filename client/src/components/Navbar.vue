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
      <div class="flex">
        <div class="relative">
          <input type="text" name="search" id="search" class="bg-gray-100 rounded pl-5 py-1 pr-11 " placeholder="What are you looking for?">
          <img :src="search" alt="search" class="absolute right-2 bottom-2 cursor-pointer">
        </div>
        <div class="flex ml-7">
          <div class="mr-6 min-w-8 h-8 relative">
            <span class="flex w-4 h-4 justify-center items-center rounded-full bg-red-500 font-poppins-sans text-xs text-white absolute right-0">1</span>
            <a href="#" class="flex h-full items-center justify-center">
              <svg width="21.500000" height="19.333527" viewBox="0 0 21.5 19.3335" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            	  <path id="Vector" d="M0.75 5.7C0.75 7.9 1.62 13.14 10.23 18.44C10.39 18.53 10.56 18.58 10.75 18.58C10.93 18.58 11.1 18.53 11.26 18.44C19.87 13.14 20.75 7.9 20.75 5.7C20.75 2.96 18.51 0.75 15.75 0.75C12.98 0.75 10.75 3.75 10.75 3.75C10.75 3.75 8.51 0.75 5.75 0.75C2.98 0.75 0.75 2.96 0.75 5.7Z" stroke="#000000" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
          <div class="mr-6 min-w-8 h-8 relative">
            <span class="flex w-4 h-4 justify-center items-center rounded-full bg-red-500 font-poppins-sans text-xs text-white absolute right-0">1</span>
            <a href="#" class="flex h-full items-center justify-center">
              <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                  <clipPath id="clip316_6521">
                    <rect id="Cart1" width="24.000000" height="24.000000" fill="white" fill-opacity="0"/>
                  </clipPath>
                </defs>
                <rect id="Cart1" width="24.000000" height="24.000000" fill="#FFFFFF" fill-opacity="0"/>
                <g clip-path="url(#clip316_6521)">
                  <path id="Vector" d="M8.25 20.25C7.83 20.25 7.5 19.91 7.5 19.5C7.5 19.08 7.83 18.75 8.25 18.75C8.66 18.75 9 19.08 9 19.5C9 19.91 8.66 20.25 8.25 20.25Z" stroke="#000000" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"/>
                  <path id="Vector" d="M18.75 20.25C18.33 20.25 18 19.91 18 19.5C18 19.08 18.33 18.75 18.75 18.75C19.16 18.75 19.5 19.08 19.5 19.5C19.5 19.91 19.16 20.25 18.75 20.25Z" stroke="#000000" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"/>
                  <path id="Vector" d="M2.25 3.75L5.25 3.75L7.5 16.5L19.5 16.5" stroke="#000000" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                  <path id="Vector" d="M7.5 12.5L19.19 12.5C19.27 12.5 19.36 12.47 19.43 12.41C19.49 12.36 19.54 12.28 19.56 12.19L20.91 5.44C20.92 5.39 20.91 5.33 20.9 5.28C20.89 5.23 20.86 5.18 20.83 5.13C20.79 5.09 20.75 5.05 20.7 5.03C20.65 5.01 20.59 4.99 20.54 5L6 5" stroke="#000000" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                </g>
              </svg>
            </a>
          </div>

          <div class="min-w-8 h-8 relative">
            <a href="#" class="flex h-full justify-center items-center">
              <svg width="32.000000" height="32.000000" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                  <clipPath id="clip316_6362">
                    <rect id="user" width="32.000000" height="32.000000" fill="white" fill-opacity="0"/>
                  </clipPath>
                </defs>
                <rect id="user" width="32.000000" height="32.000000" fill="#FFFFFF" fill-opacity="0"/>
                <g clip-path="url(#clip316_6362)">
                  <path id="Vector" d="M24 27L24 24.33C24 22.91 23.52 21.56 22.67 20.56C21.82 19.56 20.66 19 19.46 19L11.53 19C10.33 19 9.17 19.56 8.32 20.56C7.47 21.56 7 22.91 7 24.33L7 27" stroke="#000000" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                  <path id="Vector" d="M16.5 14C14.01 14 12 11.98 12 9.5C12 7.01 14.01 5 16.5 5C18.98 5 21 7.01 21 9.5C21 11.98 18.98 14 16.5 14Z" stroke="#000000" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"/>
                </g>
              </svg>
            </a>

            <div class="w-56 h-56 pt-4 pl-5 rounded-md absolute right-0 backdrop-blur-[150px] hidden">
              <li class="flex items-center">
                <svg width="32.000000" height="32.000000" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <clipPath id="clip317_1964">
                      <rect id="user" width="32.000000" height="32.000000" fill="white" fill-opacity="0"/>
                    </clipPath>
                  </defs>
                  <rect id="user" width="32.000000" height="32.000000" fill="#FFFFFF" fill-opacity="0"/>
                  <g clip-path="url(#clip317_1964)">
                    <path id="Vector" d="M24 27L24 24.33C24 22.91 23.52 21.56 22.67 20.56C21.82 19.56 20.66 19 19.46 19L11.53 19C10.33 19 9.17 19.56 8.32 20.56C7.47 21.56 7 22.91 7 24.33L7 27" stroke="#FAFAFA" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                    <path id="Vector" d="M16.5 14C14.01 14 12 11.98 12 9.5C12 7.01 14.01 5 16.5 5C18.98 5 21 7.01 21 9.5C21 11.98 18.98 14 16.5 14Z" stroke="#FAFAFA" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"/>
                  </g>
                </svg>
                <p class="flex-grow ml-4">
                  <a href="#" class="font-poppins-sans text-sm text-white">Manage My Account</a>
                </p>
              </li>
              <li class="flex items-center mt-4">
                <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <clipPath id="clip317_1970">
                      <rect id="icon-mallbag" width="24.000000" height="24.000000" fill="white" fill-opacity="0"/>
                    </clipPath>
                  </defs>
                  <rect id="icon-mallbag" width="24.000000" height="24.000000" fill="#FFFFFF" fill-opacity="0"/>
                  <g clip-path="url(#clip317_1970)">
                    <path id="Vector" d="M3 20.5C3 20.76 3.1 21.01 3.29 21.2C3.48 21.39 3.73 21.5 4 21.5L20 21.5C20.26 21.5 20.51 21.39 20.7 21.2C20.89 21.01 21 20.76 21 20.5L21 6.3L3 6.3L3 20.5Z" stroke="#FAFAFA" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"/>
                    <path id="Vector" d="M21 6.3L18.16 2.5L5.83 2.5L3 6.3M15.77 9.6C15.77 11.69 14.08 13.4 12 13.4C9.91 13.4 8.22 11.69 8.22 9.6" stroke="#FAFAFA" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                  </g>
                </svg>
                <p class="ml-4"><a href="#" class="font-poppins-sans text-sm text-white">My Order</a></p>
              </li>
              <li class="flex items-center mt-4">
                <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <clipPath id="clip317_1975">
                      <rect id="icon-cancel" width="24.000000" height="24.000000" fill="white" fill-opacity="0"/>
                    </clipPath>
                  </defs>
                  <rect id="icon-cancel" width="24.000000" height="24.000000" fill="#FFFFFF" fill-opacity="0"/>
                  <g clip-path="url(#clip317_1975)">
                    <path id="Vector" d="M8 16L12 12L16 16M16 8L11.99 12L8 8" stroke="#FAFAFA" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                    <circle id="Ellipse 26" cx="12.000000" cy="12.000000" r="11.250000" stroke="#FFFFFF" stroke-opacity="1.000000" stroke-width="1.500000"/>
                  </g>
                </svg>
                <p class="ml-4"><a href="#" class="font-poppins-sans text-sm text-white">My Cancellations</a></p>
              </li>
              <li class="flex items-center mt-4">
                <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs/>
                  <path id="Vector" d="M19.82 9.18L15.87 9.18C15.25 9.18 14.71 8.78 14.53 8.19L13.33 4.32C12.93 3.01 11.06 3.01 10.66 4.32L9.46 8.19C9.28 8.78 8.74 9.18 8.12 9.18L4.12 9.18C2.79 9.18 2.21 10.88 3.27 11.69L6.62 14.26C7.09 14.61 7.28 15.22 7.11 15.78L5.87 19.82C5.48 21.12 6.98 22.17 8.06 21.34L11.14 18.98C11.65 18.59 12.34 18.59 12.85 18.98L15.91 21.32C16.99 22.15 18.5 21.1 18.1 19.8L16.85 15.75C16.67 15.18 16.87 14.57 17.34 14.22L20.67 11.7C21.74 10.89 21.17 9.18 19.82 9.18ZM14.11 10.17Q14.8 10.68 15.87 10.68L19.53 10.68L16.43 13.02Q15.62 13.63 15.37 14.43Q15.11 15.22 15.41 16.19L16.57 19.94L13.76 17.79Q12.88 17.11 12 17.11Q11.11 17.11 10.23 17.79L7.4 19.96L8.54 16.22Q8.84 15.26 8.59 14.47Q8.33 13.68 7.54 13.07L4.42 10.68L8.12 10.68Q9.19 10.68 9.88 10.17Q10.58 9.66 10.89 8.64L12 5.07L13.1 8.64Q13.41 9.66 14.11 10.17Z" fill="#FAFAFA" fill-opacity="1.000000" fill-rule="evenodd"/>
                </svg>
                <p class="ml-4"><a href="#" class="font-poppins-sans text-sm text-white">My Reviews</a></p>
              </li>
              <li class="flex items-center mt-4">
                <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <clipPath id="clip317_1983">
                      <rect id="Icon-logout" width="24.000000" height="24.000000" transform="matrix(-1 0 0 1 24 0)" fill="white" fill-opacity="0"/>
                    </clipPath>
                  </defs>
                  <rect id="Icon-logout" width="24.000000" height="24.000000" transform="matrix(-1 0 0 1 24 0)" fill="#FFFFFF" fill-opacity="0"/>
                  <g clip-path="url(#clip317_1983)">
                    <path id="Vector" d="M4 12L13.5 12M6 15L3 12L6 9M11 7L11 6C11 5.46 11.21 4.96 11.58 4.58C11.96 4.21 12.46 4 13 4L18 4C18.53 4 19.03 4.21 19.41 4.58C19.78 4.96 20 5.46 20 6L20 18C20 18.53 19.78 19.03 19.41 19.41C19.03 19.78 18.53 20 18 20L13 20C12.46 20 11.96 19.78 11.58 19.41C11.21 19.03 11 18.53 11 18L11 17" stroke="#FAFAFA" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                  </g>
                </svg>
                <p class="ml-4"><a href="#" class="font-poppins-sans text-sm text-white">Logout</a></p>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>