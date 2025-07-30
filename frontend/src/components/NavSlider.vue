<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { MegaMenu } from 'primevue';

onMounted(() => {
  const sliders = document.getElementsByClassName('slider');
  const dots = document.getElementsByClassName('dot');

  function showSlider(index: number) {
    for (let i = 0; i < sliders.length; i++) {
      sliders[i].classList.add('hidden');
      sliders[i].classList.remove('block');
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('border-2', 'border-white', 'bg-red-500');
    }

    sliders[index].classList.remove('hidden');
    sliders[index].classList.add('block');

    dots[index].classList.add('border-2', 'border-white', 'bg-red-500');
  }

  showSlider(0);

  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', () => showSlider(i));
  }

});

const items = ref([
    {
      label: 'Woman’s Fashion',
      items: [
        [
          {
            label: 'Living Room',
            items: [{ label: 'Accessories' }, { label: 'Armchair' }, { label: 'Coffee Table' }, { label: 'Couch' }, { label: 'TV Stand' }]
          },
        ],
        [
          {
            label: 'Header2',
            items: [{ label: 'Paragraph2'}]
          }
        ]
      ],
    },
    {
        label: 'Men’s Fashion',
        items: [],
    },
    {
        label: 'Electronics',
        items: [],
    },
    {
      label: 'Home & Lifestyle',
      items: [],
    },
    {
      label: 'Medicine',
      items: [],
    },
    {
      label: 'Sports & Outdoor',
      items: [],
    },
    {
      label: 'Baby’s & Toys',
      items: [],
    },
    {
      label: 'Groceries & Pets',
      items: [],
    },
    {
      label: 'Health & Beauty',
      items: [],
    }
]);
</script>

<template>
  <div>
    <div class="max-w-sm md:max-w-3xl lg:max-w-7xl mx-auto">
      <div class="lg:flex block h-[350px]">
        <div class="hidden lg:block w-1/4 border-r-2 border-r-gray-300 pt-10">
          <MegaMenu class="" :model="items" orientation="vertical" :pt="{
            root: { class: 'w-full !h-full !flex' },
            rootList: { class: '!h-full !justify-between' },
            overlay: { class: '!bg-white !border-2 !border-gray-300 !rounded-sm !ml-3 !pt-4 !pl-4' },
            submenuLabel: { class: '!font-semibold !mb-3.5' },
            submenu: { class: '!text-sm' },
            itemContent: { class: '!font-poppins !leading-[24px]' },
            itemLink: ({ context }) => ({
              class: [
                '!pr-2.5',
                {
                  '!pb-4': context.index !== items.length - 1,
                }
              ]
            }),
            submenuIcon: { class: '!w-4' },
          }" />
        </div>
        <div class="block lg:w-3/4 h-[300px] lg:h-auto">
          <div class="relative pt-3.5 lg:pt-10 lg:pl-10 h-full">
            <div class="bg-black h-full slider rounded-sm">
              <div class="flex justify-between h-full">
                <div class="pt-5 pl-5 md:pt-10 md:pl-10">
                  <div class="flex items-center">
                    <div>
                      <img src="../assets/images/slider/apple_gray.png" alt="">
                    </div>
                    <div class="ml-6">
                      <p class="font-poppins text-white">iPhone 14 Series</p>
                    </div>
                  </div>
                  <div class="mt-5">
                    <h2 class="text-white font-inter text-3xl lg:text-5xl font-semibold">Up to 10% off Voucher</h2>
                  </div>
                  <div class="mt-5">
                    <a href="#" class="flex items-center">
                      <p class="font-poppins font-medium text-white border-b-2 border-b-white">Shop Now</p>
                      <span class="pi pi-arrow-right text-white ml-2"></span>
                    </a>
                  </div>
                </div>
                <div class="inline-flex md:justify-center">
                  <img src="../assets/images/slider/phone.png" class="rounded-r-sm w-full" alt="">
                </div>
              </div>
            </div>
            <div class="bg-gray-400 hidden slider h-full rounded-sm">
              <div>
                <h3 class="font-poppins text-5xl text-white">Header</h3>
              </div>
              <div class="mt-3">
                <p class="font-poppins text-white text-3xl">Paragraph 1</p>
              </div>
            </div>
            <div class="absolute flex left-1/2 bottom-3">
              <span class="w-3 h-3 bg-gray-500 rounded-full cursor-pointer dot"></span>
              <span class="w-3 h-3 bg-gray-500 rounded-full ml-3 cursor-pointer dot"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>