<script setup lang="ts">
import { Menu, InputText, Button } from 'primevue';
import { ref } from 'vue';

const items = ref([
  {
    label: 'Manage My Account',
    items: [
      {
        label: 'My profile',
      },
      {
        label: 'Address Book',
      },
      {
        label: 'My Payment Options'
      },
    ]
  },
  {
    label: 'My Orders',
    items: [
      {
        label: 'My Returns',
      },
      {
        label: 'My Cancellations',
      }
    ]
  },
  {
    label: 'My Wishlist',
    items: [],
  }
])
</script>

<template>
  <div class="pt-20 pb-44">
    <div class="lg:max-w-7xl mx-auto">
      <div class="flex justify-between">
        <div>
          <div class="inline-block">
            <a href="#" class="font-poppins text-gray-600 leading-[21px]">Home</a>
          </div>
          <div class="inline-block mx-1.5">
            <p class="text-gray-600">/</p>
          </div>
          <div class="inline-block">
            <a href="#" class="font-poppins leading-[21px]">My Account</a>
          </div>
        </div>
        <div>
          <p class="font-poppins text-sm leading-[21px]">Welcome! <span class="text-red-500">Md Rimel</span></p>
        </div>
      </div>

      <div class="mt-20">
        <div class="flex justify-between">
          <Menu :model="items" :pt="{ root: 'font-poppins !border-none', item: 'ml-7' }" />
          <div class="pt-10 px-20 grow-1">
            <h2 class="font-poppins text-xl leading-[28px] text-red-500 font-medium">Edit Your Profile</h2>
            <div class="mt-4">
              <div class="flex justify-between">
                <div class="flex flex-col grow-1 mr-12.5">
                  <label for="firstName" class="font-poppins leading-[24px] mb-2">First Name</label>
                  <InputText id="firstName" />
                </div>
                <div class="flex flex-col grow-1">
                  <label for="lastName" class="font-poppins leading-[24px] mb-2">Last Name</label>
                  <InputText id="lastName" />
                </div>
              </div>
              <div class="flex justify-between mt-6">
                <div class="flex flex-col grow-1 mr-12.5">
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