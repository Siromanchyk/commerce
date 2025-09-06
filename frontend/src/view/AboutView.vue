<script setup lang="ts">
import { employees } from '@/employees';
import { Carousel, Card, Breadcrumb } from 'primevue';
import { ref } from 'vue';

const items = ref([
  { label: 'Home', route: '/' },
  { label: 'About', route: '/about' },
]);

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]);
</script>

<template>
  <div :class="$attrs.class">
    <div class="md:max-w-3xl lg:max-w-7xl mx-auto px-3.5 md:px-0">
      <div class="mt-15 md:mt-20">
        <Breadcrumb :model="items" :pt="{ root: '!p-0'}">
          <template #item="{ item }">
            <RouterLink :to="item.route" v-slot="{ navigate, href }">
              <a :href="href" @click="navigate" class="font-poppins text-gray-600 leading-[21px]">
                {{ item.label }}
              </a>
            </RouterLink>
          </template>
          <template #separator>/</template>
        </Breadcrumb>
      </div>
    </div>
  </div>

  <div class="mt-5 md:mt-10.5">
    <div class="md:pl-[calc((100%-theme(maxWidth.7xl))/2)] px-3.5 md:px-0">
      <div class="flex flex-col md:flex-row md:justify-between md:items-center">
        <div>
          <h2 class="font-inter text-5xl leading-[64px] tracking-widest">Our Story</h2>
          <div class="mt-5 md:mt-10">
            <p class="font-poppins leading-[26px] text-justify">
              Launced in 2015, Exclusive is South Asia's premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
            </p>
            <div class="mt-6">
              <p class="font-poppins leading-[26px] text-justify">
                Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
              </p>
            </div>
          </div>
        </div>
        <div class="mt-5 md:ml-18">
          <img src="../assets/images/about/aboutStory.png" alt="about" class="w-auto h-auto md:max-w-none">
        </div>
      </div>
    </div>
  </div>

  <div class="mt-15 md:mt-35">
    <div class="md:max-w-3xl lg:max-w-7xl mx-auto px-3.5 md:px-0">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-7.5">
        <div class="border-2 border-gray-300 rounded-sm flex flex-col justify-center items-center py-7.5 group hover:bg-red-500 hover:border-white transition-all duration-300">
          <div class="w-[80px] h-[80px] bg-gray-400 rounded-full p-4 flex justify-center items-center">
            <div class="bg-black rounded-full p-3 flex justify-center items-center">
              <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40.000000" height="40.000000" fill="none">
                <rect id="icon:shop" width="40.000000" height="40.000000" x="0.000000" y="0.000000" fill="rgb(255,255,255)" fill-opacity="0" />
                <g id="Group">
                  <path id="Vector" d="M27.4883 5L28.3216 13.3333C28.3216 13.3333 29.9883 15 32.4883 15C33.8006 15.0017 35.0684 14.524 36.0533 13.6567C36.1574 13.5594 36.235 13.4372 36.2787 13.3016C36.3224 13.166 36.3309 13.0214 36.3033 12.8817L35.1266 5.83333C35.0873 5.60049 34.9668 5.38909 34.7865 5.23656C34.6062 5.08404 34.3778 5.00024 34.1416 5L27.4883 5Z" fill-rule="nonzero" stroke="rgb(255,255,255)" stroke-width="2" />
                  <path id="Vector" d="M28.3216 13.3333C28.3216 13.3333 26.6549 15 24.1549 15C21.6549 15 19.9883 13.3333 19.9883 13.3333L19.9883 5L27.4883 5L28.3216 13.3333Z" fill-rule="nonzero" stroke="rgb(249.688,249.688,249.688)" stroke-width="2" />
                  <path id="Vector" d="M19.9886 13.3333C19.9886 13.3333 18.3219 15 15.8219 15C13.3219 15 11.6553 13.3333 11.6553 13.3333L12.4886 5L19.9886 5L19.9886 13.3333Z" fill-rule="nonzero" stroke="rgb(249.688,249.688,249.688)" stroke-width="2" />
                  <path id="Vector" d="M5.8366 5C5.59993 4.99991 5.37089 5.08377 5.19023 5.23666C5.00957 5.38955 4.88899 5.60157 4.84994 5.835L3.67494 12.8833C3.64747 13.0231 3.65601 13.1676 3.69974 13.3032C3.74348 13.4387 3.82097 13.5609 3.92494 13.6583C4.4716 14.1417 5.69327 15.0017 7.48827 15.0017C9.98827 15.0017 11.6549 13.335 11.6549 13.335L12.4883 5.00167L12.4883 5L5.8366 5Z" fill-rule="nonzero" stroke="rgb(249.688,249.688,249.688)" stroke-width="2" />
                  <path id="Vector" d="M5 15L5 31.6667C5 32.5507 5.35119 33.3986 5.97631 34.0237C6.60143 34.6488 7.44928 35 8.33333 35L31.6667 35C32.5507 35 33.3986 34.6488 34.0237 34.0237C34.6488 33.3986 35 32.5507 35 31.6667L35 15" fill-rule="nonzero" stroke="rgb(249.688,249.688,249.688)" stroke-width="2" />
                  <path id="Vector" d="M24.7217 35L24.7217 25C24.7217 24.1159 24.3705 23.2681 23.7454 22.6429C23.1202 22.0178 22.2724 21.6666 21.3883 21.6666L18.055 21.6666C17.171 21.6666 16.3231 22.0178 15.698 22.6429C15.0729 23.2681 14.7217 24.1159 14.7217 25L14.7217 35" fill-rule="nonzero" stroke="rgb(249.688,249.688,249.688)" stroke-width="2" />
                </g>
              </svg>
            </div>
          </div>
          <div class="mt-6">
            <h4 class="font-inter text-3xl font-semibold leading-[30px] tracking-wide group-hover:text-white">10.5k</h4>
          </div>
          <div class="mt-3">
            <p class="font-poppins leading-6 group-hover:text-white">Sallers active our site</p>
          </div>
        </div>
        <div class="border-2 border-gray-300 rounded-sm flex flex-col justify-center items-center py-7.5 group hover:bg-red-500 hover:border-white transition-all duration-300">
          <div class="w-[80px] h-[80px] bg-gray-400 rounded-full p-4 flex justify-center items-center">
            <div class="bg-black rounded-full p-3 flex justify-center items-center">
              <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40.000000" height="40.000000" fill="none">
                <rect id="Icon-Sale" width="40.000000" height="40.000000" x="0.000000" y="0.000000" />
                <path id="Vector" d="M20.0003 37.2728C10.4608 37.2728 2.72754 29.5395 2.72754 20C2.72754 10.4606 10.4608 2.72729 20.0003 2.72729C29.5397 2.72729 37.273 10.4606 37.273 20C37.273 29.5395 29.5397 37.2728 20.0003 37.2728Z" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path id="Vector" d="M25.0914 14.547C24.762 13.9758 24.2834 13.505 23.707 13.1848C23.1305 12.8646 22.4777 12.7072 21.8186 12.7294L18.1823 12.7294C17.2178 12.7294 16.2929 13.1124 15.611 13.7941C14.929 14.4759 14.5459 15.4005 14.5459 16.3647C14.5459 17.3288 14.929 18.2535 15.611 18.9353C16.2929 19.617 17.2178 20 18.1823 20L21.8186 20C22.7831 20 23.708 20.383 24.3899 21.0648C25.0719 21.7465 25.455 22.6712 25.455 23.6354C25.455 24.5995 25.0719 25.5242 24.3899 26.2059C23.708 26.8877 22.7831 27.2707 21.8186 27.2707L18.1823 27.2707C17.5232 27.2929 16.8704 27.1354 16.2939 26.8153C15.7174 26.4951 15.2389 26.0242 14.9095 25.453" fill-rule="nonzero" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.75" />
                <path id="Vector" d="M20 8.18176L20 8.18176M20 8.18176L20 8.18176Z" fill-rule="nonzero" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.75" />
              </svg>
            </div>
          </div>
          <div class="mt-6">
            <h4 class="font-inter text-3xl font-semibold leading-[30px] tracking-wide group-hover:text-white">33k</h4>
          </div>
          <div class="mt-3">
            <p class="font-poppins leading-6 group-hover:text-white">Mopnthly Produduct Sale</p>
          </div>
        </div>
        <div class="border-2 border-gray-300 rounded-sm flex flex-col justify-center items-center py-7.5 group hover:bg-red-500 hover:border-white transition-all duration-300">
          <div class="w-[80px] h-[80px] bg-gray-400 rounded-full p-4 flex justify-center items-center">
            <div class="bg-black rounded-full p-3 flex justify-center items-center">
              <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40.000000" height="40.000000" fill="none">
                <rect id="Icon-Shopping bag" width="40.000000" height="40.000000" x="0.000000" y="0.000000" />
                <path id="Vector" d="M11.667 11.6667L11.667 8.33339C11.667 7.36818 11.9464 6.42362 12.4714 5.6137C12.9965 4.80379 13.7447 4.16315 14.6258 3.76912C15.5069 3.37509 16.4832 3.24451 17.4369 3.39313C18.3906 3.54176 19.2809 3.96325 20.0003 4.60672C20.7197 3.96325 21.61 3.54176 22.5637 3.39313C23.5174 3.24451 24.4937 3.37509 25.3748 3.76912C26.256 4.16315 27.0042 4.80379 27.5292 5.6137C28.0543 6.42362 28.3336 7.36818 28.3337 8.33339L28.3337 11.6667L30.8337 11.6667C31.4967 11.6667 32.1326 11.9301 32.6014 12.399C33.0703 12.8678 33.3337 13.5037 33.3337 14.1667L33.3337 30.8417C33.3337 32.3866 32.72 33.8682 31.6276 34.9606C30.5352 36.053 29.0535 36.6667 27.5087 36.6667L13.3337 36.6667C11.5655 36.6667 9.86986 35.9643 8.61961 34.7141C7.36937 33.4639 6.66699 31.7682 6.66699 30.0001L6.66699 14.1667C6.66699 13.5037 6.93038 12.8678 7.39922 12.399C7.86807 11.9301 8.50395 11.6667 9.16699 11.6667L11.667 11.6667ZM22.7253 34.1667C22.0454 33.1914 21.6818 32.0306 21.6837 30.8417L21.6837 14.1667L9.16699 14.1667L9.16699 30.0001C9.16699 30.5472 9.27477 31.089 9.48416 31.5946C9.69356 32.1001 10.0005 32.5594 10.3874 32.9463C10.7743 33.3332 11.2336 33.6402 11.7391 33.8495C12.2447 34.0589 12.7865 34.1667 13.3337 34.1667L22.7253 34.1667ZM19.167 11.6667L19.167 8.33339C19.167 7.67035 18.9036 7.03446 18.4348 6.56562C17.9659 6.09678 17.33 5.83339 16.667 5.83339C16.004 5.83339 15.3681 6.09678 14.8992 6.56562C14.4304 7.03446 14.167 7.67035 14.167 8.33339L14.167 11.6667L19.167 11.6667ZM21.667 11.6667L25.8337 11.6667L25.8337 8.33339C25.8337 7.81878 25.6749 7.31669 25.379 6.89566C25.0832 6.47463 24.6645 6.15517 24.1803 5.98089C23.6961 5.8066 23.1699 5.78599 22.6736 5.92186C22.1772 6.05773 21.7349 6.34346 21.407 6.74005C21.5753 7.24005 21.667 7.77672 21.667 8.33339L21.667 11.6667ZM24.1837 30.8417C24.1837 31.7236 24.534 32.5693 25.1575 33.1928C25.7811 33.8164 26.6268 34.1667 27.5087 34.1667C28.3905 34.1667 29.2362 33.8164 29.8598 33.1928C30.4833 32.5693 30.8337 31.7236 30.8337 30.8417L30.8337 14.1667L24.1837 14.1667L24.1837 30.8417Z" fill="rgb(255,255,255)" fill-rule="nonzero" />
              </svg>
            </div>
          </div>
          <div class="mt-6">
            <h4 class="font-inter text-3xl font-semibold leading-[30px] tracking-wide group-hover:text-white">45.5k</h4>
          </div>
          <div class="mt-3">
            <p class="font-poppins leading-6 group-hover:text-white">Customer active in our site</p>
          </div>
        </div>
        <div class="border-2 border-gray-300 rounded-sm flex flex-col justify-center items-center py-7.5 group hover:bg-red-500 hover:border-white transition-all duration-300">
          <div class="w-[80px] h-[80px] bg-gray-400 rounded-full p-4 flex justify-center items-center">
            <div class="bg-black rounded-full p-3 flex justify-center items-center">
              <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40.000000" height="40.000000" fill="none">
                <rect id="Icon-Moneybag" width="40.000000" height="40.000000" x="0.000000" y="0.000000" fill="rgb(255,255,255)" fill-opacity="0" />
                <g id="Group">
                  <path id="Vector" d="M24.4255 20.6187C24.1697 19.8954 23.696 19.2692 23.0696 18.8264C22.4432 18.3835 21.695 18.1457 20.9278 18.1456L20.9278 17.2184L19.0733 17.2184L19.0733 18.1456C18.0896 18.1456 17.1462 18.5364 16.4506 19.232C15.755 19.9276 15.3643 20.871 15.3643 21.8547C15.3643 22.8384 15.755 23.7818 16.4506 24.4774C17.1462 25.173 18.0896 25.5637 19.0733 25.5637L19.0733 29.2728C18.2666 29.2728 17.5795 28.7582 17.3236 28.0367C17.2856 27.9187 17.2243 27.8095 17.1434 27.7156C17.0625 27.6216 16.9636 27.5449 16.8525 27.4898C16.7414 27.4348 16.6204 27.4026 16.4966 27.3951C16.3729 27.3877 16.2489 27.4051 16.132 27.4464C16.0151 27.4877 15.9076 27.5521 15.816 27.6356C15.7244 27.7192 15.6505 27.8202 15.5986 27.9328C15.5468 28.0455 15.518 28.1673 15.5141 28.2912C15.5101 28.4152 15.5311 28.5386 15.5757 28.6543C15.8315 29.3775 16.3051 30.0037 16.9315 30.4466C17.5579 30.8895 18.3062 31.1273 19.0733 31.1273L19.0733 32.0546L20.9278 32.0546L20.9278 31.1273C21.9115 31.1273 22.8549 30.7365 23.5505 30.041C24.2461 29.3454 24.6369 28.402 24.6369 27.4183C24.6369 26.4346 24.2461 25.4912 23.5505 24.7956C22.8549 24.1 21.9115 23.7092 20.9278 23.7092L20.9278 20.0002C21.3114 20.0001 21.6855 20.1189 21.9987 20.3403C22.3119 20.5616 22.5487 20.8746 22.6766 21.2362C22.7585 21.4681 22.9292 21.658 23.1511 21.7641C23.261 21.8166 23.3801 21.847 23.5017 21.8534C23.6233 21.8599 23.745 21.8424 23.8598 21.8018C23.9747 21.7613 24.0804 21.6985 24.1709 21.6171C24.2615 21.5357 24.3352 21.4373 24.3877 21.3274C24.4402 21.2175 24.4706 21.0984 24.4771 20.9768C24.4835 20.8552 24.466 20.7335 24.4255 20.6187ZM19.0733 20.0002C18.5815 20.0002 18.1098 20.1956 17.762 20.5433C17.4142 20.8911 17.2188 21.3628 17.2188 21.8547C17.2188 22.3465 17.4142 22.8182 17.762 23.166C18.1098 23.5138 18.5815 23.7092 19.0733 23.7092L19.0733 20.0002ZM20.9278 29.2728C21.4197 29.2728 21.8914 29.0774 22.2392 28.7296C22.587 28.3818 22.7824 27.9101 22.7824 27.4183C22.7824 26.9264 22.587 26.4547 22.2392 26.1069C21.8914 25.7591 21.4197 25.5637 20.9278 25.5637L20.9278 29.2728Z" fill="rgb(249.688,249.688,249.688)" fill-rule="evenodd" />
                  <path id="Vector" d="M21.9278 20.2926C21.9518 20.3079 21.9754 20.3238 21.9987 20.3403C22.3119 20.5616 22.5487 20.8746 22.6766 21.2362C22.7585 21.4681 22.9292 21.658 23.1511 21.7641C23.261 21.8166 23.3801 21.847 23.5017 21.8534C23.6233 21.8599 23.745 21.8424 23.8598 21.8018C23.9747 21.7613 24.0804 21.6985 24.1709 21.6171C24.2615 21.5357 24.3352 21.4373 24.3877 21.3274C24.4402 21.2175 24.4706 21.0984 24.4771 20.9768C24.4835 20.8552 24.466 20.7335 24.4255 20.6187C24.1697 19.8954 23.696 19.2692 23.0696 18.8264C22.4432 18.3835 21.695 18.1457 20.9278 18.1456L20.9278 17.2184L19.0733 17.2184L19.0733 18.1456C18.0896 18.1456 17.1462 18.5364 16.4506 19.232C15.755 19.9276 15.3643 20.871 15.3643 21.8547C15.3643 22.8384 15.755 23.7818 16.4506 24.4774C17.1462 25.173 18.0896 25.5637 19.0733 25.5637L19.0733 26.5637L19.0733 28.2728L19.0733 29.2728C18.7052 29.2728 18.362 29.1656 18.0733 28.9806C17.7293 28.7601 17.4627 28.429 17.3236 28.0367C17.2856 27.9187 17.2243 27.8095 17.1434 27.7156C17.0625 27.6216 16.9636 27.5449 16.8525 27.4898C16.7414 27.4348 16.6204 27.4026 16.4966 27.3951C16.3729 27.3877 16.2489 27.4051 16.132 27.4464C16.0151 27.4877 15.9076 27.5521 15.816 27.6356C15.7244 27.7192 15.6505 27.8202 15.5986 27.9328C15.5468 28.0455 15.518 28.1673 15.5141 28.2912C15.5101 28.4152 15.5311 28.5386 15.5757 28.6543C15.8315 29.3775 16.3051 30.0037 16.9315 30.4466C17.5579 30.8895 18.3062 31.1273 19.0733 31.1273L19.0733 32.0546L20.9278 32.0546L20.9278 31.1273C21.9115 31.1273 22.8549 30.7365 23.5505 30.041C24.2461 29.3454 24.6369 28.402 24.6369 27.4183C24.6369 26.4346 24.2461 25.4912 23.5505 24.7956C22.8549 24.1 21.9115 23.7092 20.9278 23.7092L20.9278 20.0002L20.9288 20.0002C21.2834 20.0003 21.6301 20.102 21.9278 20.2926ZM18.0733 20.2929C18.3695 20.1032 18.7161 20.0002 19.0733 20.0002L19.0733 23.7092C18.7161 23.7092 18.3695 23.6062 18.0733 23.4165C17.9617 23.345 17.8572 23.2612 17.762 23.166C17.4142 22.8182 17.2188 22.3465 17.2188 21.8547C17.2188 21.3628 17.4142 20.8911 17.762 20.5433C17.8572 20.4481 17.9617 20.3644 18.0733 20.2929ZM20.9278 28.2728L20.9278 25.5637C21.285 25.5637 21.6316 25.6668 21.9278 25.8564C22.0395 25.9279 22.144 26.0117 22.2392 26.1069C22.587 26.4547 22.7824 26.9264 22.7824 27.4183C22.7824 27.9101 22.587 28.3818 22.2392 28.7296C22.144 28.8248 22.0395 28.9086 21.9278 28.9801C21.6316 29.1697 21.285 29.2728 20.9278 29.2728L20.9278 28.2728Z" fill="rgb(249.688,249.688,249.688)" fill-rule="evenodd" />
                  <path id="Vector" d="M9.94218 5.7398C12.2177 4.62616 15.9508 3.30945 20.0364 3.30945C24.0366 3.30945 27.6714 4.57145 29.9349 5.67026L30.0628 5.73238C30.7453 6.06991 31.2961 6.38888 31.6837 6.64759L28.2584 11.6548C36.1549 19.7275 42.2545 36.6881 20.0364 36.6881C-2.18177 36.6881 3.75364 20.0354 11.7188 11.6548L8.31576 6.64759C8.57818 6.47605 8.91107 6.27669 9.30793 6.06527C9.50451 5.95956 9.71593 5.85107 9.94218 5.74073L9.94218 5.7398ZM26.0571 11.588L28.799 7.57949C26.249 7.76309 23.215 8.3621 20.2941 9.20776C18.2078 9.81048 15.8896 9.71868 13.743 9.32274C13.2021 9.22246 12.6649 9.10307 12.1324 8.96482L13.9127 11.5862C17.7284 12.9446 22.2405 12.9446 26.0571 11.588ZM12.8417 13.1662C17.3065 14.8909 22.6726 14.8909 27.1373 13.1644C29.001 15.129 30.56 17.3615 31.7625 19.7878C33.0162 22.3452 33.6986 24.9017 33.5874 27.1048C33.4798 29.2311 32.6434 31.0476 30.7332 32.3977C28.7424 33.8043 25.3941 34.8336 20.0354 34.8336C14.6712 34.8336 11.3071 33.8219 9.29774 32.431C7.37367 31.0976 6.52893 29.3062 6.40931 27.2087C6.28413 25.0296 6.95176 22.4861 8.20078 19.9111C9.39231 17.4558 11.0549 15.0922 12.8417 13.1662ZM11.7754 6.94061C12.5172 7.16129 13.2924 7.35324 14.0787 7.49882C16.0723 7.86601 18.0715 7.91979 19.7776 7.42556C21.7659 6.84634 23.7881 6.3908 25.8327 6.06156C24.1265 5.54786 22.131 5.16397 20.0354 5.16397C16.841 5.16397 13.8617 6.05507 11.7754 6.94061Z" fill="rgb(249.688,249.688,249.688)" fill-rule="evenodd" />
                  <path id="Vector" d="M28.2584 11.6548L31.119 7.47301L31.6837 6.64759C31.4532 6.49373 31.1649 6.31855 30.8256 6.13083C30.5944 6.00291 30.3394 5.86917 30.0628 5.73238L29.9349 5.67026C27.6714 4.57145 24.0366 3.30945 20.0364 3.30945C15.9508 3.30945 12.2177 4.62616 9.94218 5.7398L9.94218 5.74073C9.71593 5.85107 9.50451 5.95956 9.30793 6.06527C9.2635 6.08894 9.21986 6.11246 9.17703 6.13581C8.8374 6.32098 8.5488 6.49526 8.31576 6.64759L8.87797 7.47481L11.7188 11.6548C3.75364 20.0354 -2.18177 36.6881 20.0364 36.6881C42.2545 36.6881 36.1549 19.7275 28.2584 11.6548ZM12.8955 11.8683L12.724 12.0487L13.1226 12.2027L12.8955 11.8683ZM26.847 12.2045L27.2462 12.0501L27.0734 11.8735L26.847 12.2045ZM29.4202 6.53218L28.7272 6.58207C27.8687 6.64388 26.9602 6.74976 26.0016 6.89972L26.1111 5.25217C27.2651 5.59991 28.3681 6.02658 29.4202 6.53218ZM25.8327 6.06156C25.0384 6.18947 24.2475 6.33643 23.4606 6.50231C22.222 6.76341 20.9935 7.07136 19.7776 7.42556C18.0715 7.91979 16.0723 7.86601 14.0787 7.49882C13.8622 7.45873 13.6465 7.41513 13.4322 7.36839C12.868 7.24536 12.3129 7.10053 11.7754 6.94061C12.2627 6.73376 12.7988 6.52662 13.3749 6.33059C15.2653 5.6874 17.5872 5.16397 20.0354 5.16397C21.2153 5.16397 22.3634 5.28566 23.446 5.48369C24.2863 5.63739 25.0871 5.83708 25.8327 6.06156ZM28.799 7.57949L28.0689 8.64681L26.0571 11.588C22.2405 12.9446 17.7284 12.9446 13.9127 11.5862L12.1324 8.96482C12.605 9.08754 13.0814 9.19539 13.5608 9.28822C13.6215 9.29996 13.6823 9.31147 13.743 9.32274C15.8896 9.71868 18.2078 9.81048 20.2941 9.20776C22.7341 8.50133 25.253 7.96702 27.5028 7.7032C27.9462 7.6512 28.3791 7.60972 28.799 7.57949ZM27.1373 13.1644C22.6726 14.8909 17.3065 14.8909 12.8417 13.1662C11.0549 15.0922 9.39231 17.4558 8.20078 19.9111C6.95176 22.4861 6.28413 25.0296 6.40931 27.2087C6.52893 29.3062 7.37367 31.0976 9.29774 32.431C11.3071 33.8219 14.6712 34.8336 20.0354 34.8336C25.3941 34.8336 28.7424 33.8043 30.7332 32.3977C32.6434 31.0476 33.4798 29.2311 33.5874 27.1048C33.6986 24.9017 33.0162 22.3452 31.7625 19.7878C30.56 17.3615 29.001 15.129 27.1373 13.1644Z" fill="rgb(249.688,249.688,249.688)" fill-rule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div class="mt-6">
            <h4 class="font-inter text-3xl font-semibold leading-[30px] tracking-wide group-hover:text-white">25k</h4>
          </div>
          <div class="mt-3">
            <p class="font-poppins leading-6 group-hover:text-white">Anual gross sale in our site</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-15 md:mt-35">
    <div class="md:max-w-3xl lg:max-w-7xl mx-auto px-3.5 md:px-0">
      <Carousel :value="employees" :numVisible="3" :numScroll="1" :show-navigators="false" :responsive-options="responsiveOptions" :pt="{
        indicatorList: '!mt-10',
        indicatorButton: '!rounded-full !p-1.5 !w-0',
      }">
        <template #item="{ data }">
          <Card class="h-full" :pt="{ root: '!shadow-none !mx-2', body: '!p-0', title: 'mt-8' }"> <!--!overflow-hidden-->
            <template #header>
              <div class="bg-gray-100 h-[430px] flex items-end justify-center">
                <img :src="data.img" alt="">
              </div>
            </template>
            <template #title>
              <p class="font-inter text-black text-3xl font-medium leading-[30px] tracking-wide">{{ data.fullName }}</p>
            </template>
            <template #subtitle>
              <p class="font-poppins text-black leading-6">{{ data.position }}</p>
            </template>
            <template #footer>
              <div class="flex">
                <a v-for="(icon, index) in data.socials" :href="icon.url" :class="index !== data.socials.length - 1 ? 'mr-4' : ''">
                  <span :class="icon.icon"></span>
                </a>
              </div>
            </template>
          </Card>
        </template>
      </Carousel>
    </div>
  </div>

  <div class="mt-35 pb-35">
    <div class="max-w-7xl mx-auto">
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
</template>
