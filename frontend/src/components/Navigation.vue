<script setup lang="ts">
import { IconField, InputText, SplitButton, Menu, Button, Drawer, PanelMenu } from 'primevue';
import { ref } from 'vue';

const items = ref([
  {
    label: 'Ukrainian',
    class: 'p-1 border-b-2 border-gray-300',
  },
  {
    label: 'Polska',
    class: 'p-1 border-b-2 border-gray-300',
  },
]);

const visible = ref(false);
const productCatalog = ref(false);

const menuItems = ref([
  {
    label: 'My Wishlist',
    icon: 'pi pi-heart',
    badge: 2,
  },
  {
    label: 'Manage My Account',
    icon: 'pi pi-user',
  },
  {
    label: 'My Orders',
    icon: 'pi pi-receipt',  
  },
  {
    label: 'My Cancellations',
    icon: 'pi pi-times',
  },
  {
    label: 'My Reviews',
    icon: 'pi pi-star',
  },
  {
    label: 'Logout',
    icon: 'pi pi-sign-out',
  }
]);

const catalogItems = ref([
  {
    label: 'Woman’s Fashion',
    items: [
      {
        label: 'Living Room',
        items: [
          { label: 'Accessories' },
          { label: 'Armchair' },
          { label: 'Coffee Table' },
          { label: 'Couch' },
          { label: 'TV Stand' }
        ]
      },
      {
        label: 'Header2',
        items: [{ label: 'Paragraph2' }]
      }
    ],
  },
  {
    label: 'Men’s Fashion',
  },
  {
        label: 'Electronics',
    },
    {
        label: 'Home & Lifestyle',
    },
    {
        label: 'Medicine',
    },
    {
        label: 'Sports & Outdoor',
    },
    {
        label: 'Baby’s & Toys',
    },
    {
        label: 'Groceries & Pets',
    },
    {
        label: 'Health & Beauty',
    }
]);
</script>

<template>
  <div class="border-b-2 border-b-gray-300">
    <div class="py-2 max-w-sm md:max-w-3xl lg:max-w-7xl mx-auto lg:px-0">
      <div class="flex justify-between items-end lg:pt-4 lg:pb-2">
        <Button unstyled class="lg:hidden block cursor-pointer" @click="visible = true" icon="pi pi-bars" />
          <Drawer v-model:visible="visible" class="border-2 border-gray-300 h-full pt-2.5 px-4" :pt="{
            root: { class: '!bg-white' },
          }">
            <template #container="{ closeCallback }">
              <div class="flex justify-between items-center">
                <SplitButton unstyled :model="items" label="English" :pt="{
                    root: {
                      class: 'flex text-black'
                    },
                    pcButton: {
                      root: 'font-poppins font-normal text-sm leading-[21px]'
                    },
                    pcDropdown: {
                      root: 'pl-2 flex justify-center items-center'
                    },
                    pcMenu: {
                      root: 'bg-white font-poppins text-black text-sm font-normal p-2 border-2 border-gray-300 rounded-sm' 
                    },
                  }" 
                />
                <Button class="ml-4" icon="pi pi-times" @click="closeCallback" />
              </div>
              <div class="flex justify-center items-center py-3 border-b-2 border-b-gray-300">
                <Button unstyled class="bg-green-500 px-10 py-4 rounded-sm" label="Product catalog" @click="productCatalog = true" />
              </div>
              <Menu class="mt-4" :model="menuItems">
                <template #item="{ item }">
                <a class="flex items-center mb-3 font-poppins text-base">
                    <span :class="item.icon" class="text-lg" />
                    <span class="ml-3">{{ item.label }}</span>
                    <span v-show="item.badge" class="ml-auto bg-green-500 text-white px-2 inline-flex justify-center items-center rounded-full">{{ item.badge }}</span>
                </a>
                </template>
              </Menu>
            </template>
          </Drawer>
          <Drawer v-model:visible="productCatalog" position="full" :pt="{ root: { class: '!bg-white' }}">
            <template #container="{ closeCallback }">
              <div class="flex flex-col h-full">
                <div class="flex items-center p-5 border-b border-gray-200">
                  <Button icon="pi pi-times" @click="closeCallback" class="mr-4" />
                  <div>
                    <p class="font-poppins font-medium text-lg">Product catalog</p>
                  </div>
                </div>
                <div class="overflow-y-auto p-5">
                  <PanelMenu :model="catalogItems" :pt="{
                    root: { class: '!font-poppins' },
                    panel: { class: '!border-2 !border-gray-300 !rounded-sm !mb-1.5' },
                    header: { class: '!py-2 !pl-2'},
                    submenuIcon: { class: '!mr-1.5 !text-gray-400' },
                    itemContent: 'ml-5 py-2 pl-2',
                  }" />
                </div>
              </div>
            </template>
          </Drawer>
        <div>
          <h2 class="font-inter text-xl lg:text-2xl font-bold ">Exclusive</h2> <!-- ml-4 lg:ml-0 -->
        </div>
        <div class="hidden md:block">
          <nav class="list-none flex">
            <li class="group mr-12 md:mr-6">
              <a href="#" class="font-poppins group-hover:border-b-2 group-hover:border-b-gray-300 ">Home</a>
            </li>
            <li class="group mr-12 md:mr-6">
              <a href="#" class="font-poppins group-hover:border-b-2 group-hover:border-b-gray-300 ">Contact</a>
            </li>
            <li class="group mr-12 md:mr-6">
              <a href="#" class="font-poppins group-hover:border-b-2 group-hover:border-b-gray-300 ">About</a>
            </li>
            <li class="group">
              <a href="#" class="font-poppins group-hover:border-b-2 group-hover:border-b-gray-300 ">Sign Up</a>
            </li>
          </nav>
        </div>
        <div class="flex">
          <IconField class="border-2 border-gray-300 rounded-sm  relative">
            <InputText unstyled placeholder="What are you looking for?" class="opacity-[0.4] h-full w-full px-2.5" />
          </IconField>
          <div class="hidden md:flex md:justify-center md:items-center w-8 relative rounded-full focus:bg-red-500 ml-2 cursor-pointer" tabindex="0">
            <span class="pi pi-heart text-xl"></span>
            <div class="rounded-full absolute top-0 right-0 flex justify-center items-center w-4 h-4 bg-red-500">
              <p class="text-white font-poppint text-xs">2</p>
            </div>
          </div>
          <div class="relative flex justify-center items-center rounded-full focus:bg-red-500 ml-0 lg:ml-2 w-8 h-8 cursor-pointer" tabindex="1">
            <span class="pi pi-shopping-cart text-xl"></span>
            <div class="rounded-full absolute top-0 right-0 flex justify-center items-center w-4 h-4 bg-red-500">
              <p class="text-white font-poppint text-xs">2</p>
            </div>
          </div>
          <div class="hidden group relative md:flex md:justify-center md:items-center rounded-full focus:bg-red-500 ml-2 w-8 h-8 cursor-pointer" tabindex="2">
            <span class="pi pi-user"></span>
            <div class="pt-4.5 pl-5 pr-3 pb-2 w-56 absolute hidden group-focus:block top-10 right-0 list-none rounded-sm z-10 backdrop-blur-[150px]">
              <li>
                <a href="#" class="flex items-center">
                  <svg width="32.000000" height="32.000000" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <clipPath id="clip399_1918">
                        <rect id="user" width="32.000000" height="32.000000" fill="white" fill-opacity="0"/>
                      </clipPath>
                    </defs>
                    <rect id="user" width="32.000000" height="32.000000" fill="#FFFFFF" fill-opacity="0"/>
                    <g clip-path="url(#clip399_1918)">
                      <path id="Vector" d="M24 27L24 24.33C24 22.91 23.52 21.56 22.67 20.56C21.82 19.56 20.66 19 19.46 19L11.53 19C10.33 19 9.17 19.56 8.32 20.56C7.47 21.56 7 22.91 7 24.33L7 27" stroke="#FAFAFA" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                      <path id="Vector" d="M16.5 14C14.01 14 12 11.98 12 9.5C12 7.01 14.01 5 16.5 5C18.98 5 21 7.01 21 9.5C21 11.98 18.98 14 16.5 14Z" stroke="#FAFAFA" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"/>
                    </g>
                  </svg>
                  <div class="ml-4">
                    <p class="font-poppins text-white text-sm">Manage My Account</p>
                  </div>
                </a>
              </li>
              <li class="mt-4">
                <a href="#" class="flex items-center">
                  <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <clipPath id="clip399_1924">
                        <rect id="icon-mallbag" width="24.000000" height="24.000000" fill="white" fill-opacity="0"/>
                      </clipPath>
                    </defs>
                    <rect id="icon-mallbag" width="24.000000" height="24.000000" fill="#FFFFFF" fill-opacity="0"/>
                    <g clip-path="url(#clip399_1924)">
                      <path id="Vector" d="M3 20.5C3 20.76 3.1 21.01 3.29 21.2C3.48 21.39 3.73 21.5 4 21.5L20 21.5C20.26 21.5 20.51 21.39 20.7 21.2C20.89 21.01 21 20.76 21 20.5L21 6.3L3 6.3L3 20.5Z" stroke="#FAFAFA" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"/>
                      <path id="Vector" d="M21 6.3L18.16 2.5L5.83 2.5L3 6.3M15.77 9.6C15.77 11.69 14.08 13.4 12 13.4C9.91 13.4 8.22 11.69 8.22 9.6" stroke="#FAFAFA" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                    </g>
                  </svg>
                  <div class="ml-4">
                    <p class="font-poppins text-white text-sm">My Order</p>
                  </div>
                </a>
              </li>
              <li class="mt-4">
                <a href="#" class="flex items-center">
                  <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <clipPath id="clip399_1929">
                        <rect id="icon-cancel" width="24.000000" height="24.000000" fill="white" fill-opacity="0"/>
                      </clipPath>
                    </defs>
                    <rect id="icon-cancel" width="24.000000" height="24.000000" fill="#FFFFFF" fill-opacity="0"/>
                    <g clip-path="url(#clip399_1929)">
                      <path id="Vector" d="M8 16L12 12L16 16M16 8L11.99 12L8 8" stroke="#FAFAFA" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                      <circle id="Ellipse 26" cx="12.000000" cy="12.000000" r="11.250000" stroke="#FFFFFF" stroke-opacity="1.000000" stroke-width="1.500000"/>
                    </g>
                  </svg>
                  <div class="ml-4">
                    <p class="font-poppins text-white text-sm">My Cancellations</p>
                  </div>
                </a>
              </li>
              <li class="mt-4">
                <a href="#" class="flex items-center">
                  <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path id="Vector" d="M19.82 9.18L15.87 9.18C15.25 9.18 14.71 8.78 14.53 8.19L13.33 4.32C12.93 3.01 11.06 3.01 10.66 4.32L9.46 8.19C9.28 8.78 8.74 9.18 8.12 9.18L4.12 9.18C2.79 9.18 2.21 10.88 3.27 11.69L6.62 14.26C7.09 14.61 7.28 15.22 7.11 15.78L5.87 19.82C5.48 21.12 6.98 22.17 8.06 21.34L11.14 18.98C11.65 18.59 12.34 18.59 12.85 18.98L15.91 21.32C16.99 22.15 18.5 21.1 18.1 19.8L16.85 15.75C16.67 15.18 16.87 14.57 17.34 14.22L20.67 11.7C21.74 10.89 21.17 9.18 19.82 9.18ZM14.11 10.17C14.57 10.51 15.15 10.68 15.87 10.68L19.53 10.68L16.43 13.02C15.89 13.43 15.54 13.9 15.37 14.43C15.2 14.95 15.21 15.54 15.41 16.19L16.57 19.94L13.76 17.79C13.17 17.34 12.58 17.11 12 17.11C11.41 17.11 10.82 17.34 10.23 17.79L7.4 19.96L8.54 16.22C8.74 15.58 8.76 14.99 8.59 14.47C8.42 13.94 8.07 13.48 7.54 13.07L4.42 10.68L8.12 10.68C8.84 10.68 9.42 10.51 9.88 10.17C10.35 9.83 10.68 9.32 10.89 8.64L12 5.07L13.1 8.64C13.31 9.32 13.64 9.83 14.11 10.17Z" fill="#FAFAFA" fill-opacity="1.000000" fill-rule="evenodd"/>
                  </svg>
                  <div class="ml-4">
                    <p class="font-poppins text-white text-sm">My Reviews</p>
                  </div>
                </a>
              </li>
              <li class="mt-4">
                <a href="#" class="flex items-center">
                  <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <clipPath id="clip399_1937">
                        <rect id="Icon-logout" width="24.000000" height="24.000000" transform="matrix(-1 0 0 1 24 0)" fill="white" fill-opacity="0"/>
                      </clipPath>
                    </defs>
                    <rect id="Icon-logout" width="24.000000" height="24.000000" transform="matrix(-1 0 0 1 24 0)" fill="#FFFFFF" fill-opacity="0"/>
                    <g clip-path="url(#clip399_1937)">
                      <path id="Vector" d="M4 12L13.5 12M6 15L3 12L6 9M11 7L11 6C11 5.46 11.21 4.96 11.58 4.58C11.96 4.21 12.46 4 13 4L18 4C18.53 4 19.03 4.21 19.41 4.58C19.78 4.96 20 5.46 20 6L20 18C20 18.53 19.78 19.03 19.41 19.41C19.03 19.78 18.53 20 18 20L13 20C12.46 20 11.96 19.78 11.58 19.41C11.21 19.03 11 18.53 11 18L11 17" stroke="#FAFAFA" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                    </g>
                  </svg>
                  <div class="ml-4">
                    <p class="font-poppins text-white text-sm">Logout</p>
                  </div>
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
