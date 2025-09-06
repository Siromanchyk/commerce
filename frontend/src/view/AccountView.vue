<script setup lang="ts">
import { Menu, InputText, Button, Breadcrumb } from 'primevue';
import { accountSettingItems } from '@/items';
import { ref } from 'vue';

const items = ref([
  { label: 'Home', route: '/' },
  { label: 'My Account', route: '/account' },
])
</script>

<template>
  <div class="pt-20 pb-44">
    <div class="md:max-w-3xl lg:max-w-7xl mx-auto px-3.5 md:px-0">
      <div class="flex justify-between items-start">
        <Breadcrumb :model="items" :pt="{ root: '!p-0' }">
          <template #item="{ item }">
            <RouterLink :to="item.route" v-slot="{ href, navigate }">
              <a :href="href" class="font-poppins text-gray-600 leading-[21px]" @click="navigate">
                {{ item.label }}
              </a>
            </RouterLink>
          </template>
          <template #separator>/</template>
        </Breadcrumb>
        <div>
          <p class="font-poppins text-sm leading-[21px]">Welcome! <span class="text-red-500">Md Rimel</span></p>
        </div>
      </div>

      <div class="mt-20">
        <div class="flex justify-between md:flex-row flex-col">
          <Menu :model="accountSettingItems" :pt="{ root: 'font-poppins !border-none', item: 'ml-7' }" />
          <div class="mt-5 md:mt-0 md:pt-10 md:px-20 grow-1">
            <h2 class="font-poppins text-xl leading-[28px] text-red-500 font-medium">Edit Your Profile</h2>
            <div class="mt-4">
              <div class="flex flex-col md:flex-row md:justify-between">
                <div class="flex flex-col grow-1 md:mr-12.5 mb-3.5 md:mb-0">
                  <label for="firstName" class="font-poppins leading-[24px] mb-2">First Name</label>
                  <InputText id="firstName" />
                </div>
                <div class="flex flex-col grow-1">
                  <label for="lastName" class="font-poppins leading-[24px] mb-2">Last Name</label>
                  <InputText id="lastName" />
                </div>
              </div>
              <div class="flex flex-col md:flex-row md:justify-between mt-3 md:mt-6">
                <div class="flex flex-col grow-1 md:mr-12.5 mb-3.5 md:md-0">
                  <label for="email" class="font-poppins leading-[24px] mb-2">Email</label>
                  <InputText id="email" />
                </div>
                <div class="flex flex-col grow-1">
                  <label for="address" class="font-poppins leading-[24px] mb-2">Address</label>
                  <InputText id="address" />
                </div>
              </div>
              <div class="flex flex-col mt-6">
                <label for="password" class="font-poppins leading-[24px] mb-2">Password</label>
                <InputText id="password" placeholder="Current Password" :pt="{ root: '!font-poppins' }"/>
              </div>
              <div class="mt-4">
                <InputText placeholder="New password" :pt="{ root: '!font-poppins !w-full'} "/>
              </div>
              <div class="mt-4">
                <InputText placeholder="Confirm New Password" :pt="{ root: '!font-poppins !w-full'} "/>
              </div>
              <div class="flex justify-end mt-6">
                <Button label="Cancel" :pt="{ root: '!bg-white !text-black !border-none !mr-3'}" /> 
                <Button label="Save changes" :pt="{ root: '!bg-red-500 !border-none'}"  /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>