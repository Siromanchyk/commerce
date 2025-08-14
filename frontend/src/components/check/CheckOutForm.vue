<script setup lang="ts">
import { Form } from '@primevue/forms';
import { InputText, Button, Checkbox, InputMask } from 'primevue';
import { ref } from 'vue';

const firstName = ref(null);
const streetAddress = ref(null);
const town = ref('');
const phoneNumber = ref('');
const emailAddress = ref(null);

const saveInfo = ref(false);
</script>

<template>
  <Form v-slot="$form">
    <div class="flex flex-col font-poppins leading-[24px] text-gray-400">
      <label for="firstName">First Name<span class="text-red-500">*</span></label>
      <InputText id="firstName" class="mt-2 w-[470px]" v-model="firstName" :invalid="!firstName"/>
    </div>
    <div class="flex flex-col font-poppins leading-[24px] text-gray-400 mt-8">
      <label for="companyName">Company Name</label>
      <InputText id="companyName" class="mt-2 w-[470px]" />
    </div>
    <div class="flex flex-col font-poppins leading-[24px] text-gray-400 mt-8">
      <label for="streetAddress">Street Address<span class="text-red-500">*</span></label>
      <InputText id="streetAddress" class="mt-2 w-[470px]" v-model="streetAddress" :invalid="!streetAddress" />
    </div>
    <div class="flex flex-col font-poppins leading-[24px] text-gray-400 mt-8">
      <label for="apartment">Apartment, floor, etc. (optional)</label>
      <InputText id="apartment" class="mt-2 w-[470px]" />
    </div>
    <div class="flex flex-col font-poppins leading-[24px] text-gray-400 mt-8">
      <label for="streetAddress">Town/City<span class="text-red-500">*</span></label>
      <InputText id="streetAddress" class="mt-2 w-[470px]" v-model="town" :invalid="!town" />
    </div>
    <div class="flex flex-col font-poppins leading-[24px] text-gray-400 mt-8">
      <label for="streetAddress">Phone Number<span class="text-red-500">*</span></label>
      <InputMask id="streetAddress" mask="+380-(99)-999-9999" v-model="phoneNumber" :invalid="!phoneNumber" class="w-[470px] mt-2" />
    </div>
    <div class="flex flex-col font-poppins leading-[24px] text-gray-400 mt-8">
      <label for="emailAddress">Email Address<span class="text-red-500">*</span></label>
      <InputText id="emailAddress" v-model="emailAddress" :invalid="!emailAddress" class="mt-2 w-[470px]" />
    </div>

    <div class="mt-6 flex items-center">
      <Checkbox v-model="saveInfo" binary class="mr-4" />
      <label for="saveInfo" class="font-poppins leading-[24px]">Save this information for faster check-out next time</label>
    </div>
  </Form>
</template>

<style lang="css" scoped>
:deep(.p-checkbox) {
  --p-checkbox-checked-hover-border-color: #ffffff;
  --p-checkbox-checked-border-color: #ffffff;
  --p-checkbox-checked-background: #ef4444;
  --p-checkbox-checked-hover-background: #ef4444;
}
</style>