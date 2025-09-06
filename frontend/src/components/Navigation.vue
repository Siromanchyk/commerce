<script setup lang="ts">
import { IconField, InputText, InputIcon, SplitButton, Menu, Button, Drawer, PanelMenu, Badge, OverlayBadge } from 'primevue';
import { languageItems, menuItems, catalogItems, navigationItems } from '@/items';
import { ref } from 'vue';

const visible = ref(false);
const productCatalog = ref(false);
</script>

<template>
  <div class="border-b-2 border-b-gray-300">
    <div class="py-2 lg:py-0 max-w-sm md:max-w-3xl lg:max-w-7xl mx-auto ">
      <div class="flex justify-between lg:items-end lg:pt-4 lg:pb-2">
        <Button @click="visible = true" icon="pi pi-bars" :pt="{ root: 'lg:!hidden !flex !justify-center !items-center !text-black !text-2xl !bg-white !border-none !p-0'}" />
          <Drawer v-model:visible="visible" class="border-2 border-gray-300 h-full pt-2.5 px-4" :pt="{
            root: '!bg-white',
          }">
            <template #container="{ closeCallback }">
              <div class="flex justify-between items-center">
                <SplitButton :model="languageItems" label="English" :pt="{
                    pcButton: {
                      root: '!font-poppins !text-black  !text-sm !leading-[21px] !bg-white !border-none !p-0'
                    },
                    pcDropdown: {
                      root: '!text-black !flex !justify-center !items-center !bg-white !border-none'
                    },
                    pcMenu: {
                      root: '!bg-white !font-poppins !text-sm' 
                    },
                  }"
                />
                <Button icon="pi pi-times" @click="closeCallback" :pt="{ root: '!text-black !bg-white !border-none !p-0'}" />
              </div>
              <div class="flex justify-center items-center py-3 border-b-2 border-b-gray-300">
                <Button label="Product catalog" @click="productCatalog = true" :pt="{
                  root: '!bg-red-500 !border-orange-500 !px-10 !py-4'
                }" />
              </div>
              <Menu class="mt-4" :model="menuItems" :pt="{ root: '!border-none' }">
                <template #item="{ item }">
                <a class="flex items-center mb-3 font-poppins ">
                  <span :class="item.icon" class="text-lg" />
                  <span class="ml-3 grow">{{ item.label }}</span>
                  <Badge v-show="item.badge" severity="danger" :value="item.badge"></Badge>
                </a>
                </template>
              </Menu>
              <Menu class="mt-4" :model="navigationItems" :pt="{ root: '!border-none' }">
                <template #item="{ item }">
                  <a class="flex items-center mb-3 font-poppins ">
                    <span class="grow">{{ item.label }}</span>
                  </a>
                </template>
              </Menu>
            </template>
          </Drawer>
          <Drawer v-model:visible="productCatalog" position="full" :pt="{ root: { class: '!bg-white' }}">
            <template #container="{ closeCallback }">
              <div class="flex flex-col h-full">
                <div class="flex items-center p-5 border-b border-gray-200">
                  <Button icon="pi pi-times" @click="closeCallback" class="mr-4" :pt="{ root: '!text-black !bg-white !border-none !p-0' }" />
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
          <h2 class="hidden lg:block font-inter text-xl lg:text-2xl font-bold mr-3 md:mr-0">Exclusive</h2>
        </div>
        <div class="hidden lg:block">
          <nav class="list-none flex">
            <li class="group mr-12 md:mr-6">
              <RouterLink to="/" class="font-poppins group-hover:border-b-2 group-hover:border-b-gray-300">Home</RouterLink>
            </li>
            <li class="group mr-12 md:mr-6">
              <RouterLink to="/contact" class="font-poppins group-hover:border-b-2 group-hover:border-b-gray-300">Contact</RouterLink>
            </li>
            <li class="group mr-12 md:mr-6">
              <RouterLink to="/about" class="font-poppins group-hover:border-b-2 group-hover:border-b-gray-300">About</RouterLink>
            </li>
            <li class="group">
              <RouterLink to="/gamepad" v-slot="{ href, navigate }">
                <a :href="href" class="font-poppins group-hover:border-b-2 group-hover:border-b-gray-300" @click="navigate">
                  Sign Up
                </a>
              </RouterLink>
            </li>
          </nav>
        </div>
        <div class="flex grow lg:grow-0">
          <IconField class="grow lg:grow-0">
            <InputText placeholder="What are you looking for?" :pt="{ root: 'text-sm !bg-gray-100 opacity-[.5] !py-1.5 !w-full' }" />
            <InputIcon class="pi pi-search" :pt="{ root: '!text-black' }" />
          </IconField>
          <div class="hidden md:flex md:justify-center md:items-center w-8 h-8 relative rounded-full focus:bg-red-500 ml-2 cursor-pointer group" tabindex="0">
            <RouterLink to="/wishlist" v-slot="{ href, navigate }">
              <a :href="href" @click="navigate">
                <span class="pi pi-heart text-xl group-focus:text-white"></span>
              </a>
            </RouterLink>
            <div class="rounded-full absolute top-0 right-0 flex justify-center items-center w-4 h-4 bg-red-500 group-focus:bg-green-500">
              <p class="text-white font-poppint text-xs">2</p>
            </div>
          </div>
          <div class="relative flex justify-center items-center rounded-full focus:bg-red-500 ml-0 lg:ml-2 w-8 h-8 cursor-pointer group" tabindex="1">
            <RouterLink to="/cart" v-slot="{ href, navigate }">
              <a :href="href" @click="navigate">
                <span class="pi pi-shopping-cart text-xl group-focus:text-white"></span>
              </a>
            </RouterLink>
            <div class="rounded-full absolute top-0 right-0 flex justify-center items-center w-4 h-4 bg-red-500 group-focus:bg-green-500">
              <p class="text-white font-poppint text-xs">2</p>
            </div>
          </div>
          <div class="hidden group relative md:flex md:justify-center md:items-center rounded-full focus:bg-red-500 ml-2 w-8 h-8 cursor-pointer" tabindex="2">
            <span class="pi pi-user group-focus:text-white"></span>
            <Menu class="w-56 absolute hidden group-focus:block top-10 right-0 z-10 mt-4" :model="menuItems" :pt="{ root: '!pt-2 !px-2'}">
              <template #item="{ item }">
                <a class="flex items-center mb-3 font-poppins ">
                  <span :class="item.icon" class="text-lg" />
                  <span class="ml-3 grow">{{ item.label }}</span>
                  <Badge v-show="item.badge" severity="danger" :value="item.badge"></Badge>
                </a>
              </template>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
