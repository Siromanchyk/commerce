<script setup lang="ts">
import { InputMask, InputText, Textarea, Button } from 'primevue';
import { Form } from '@primevue/forms';
import { reactive } from 'vue';

const contact = reactive({

})
</script>

<template>
  <div class="pt-10 pb-35 px-3.5 lg:pt-20 lg:px-0">
    <div class="md:max-w-3xl lg:max-w-7xl mx-auto">
      <div>
        <div class="flex items-center">
          <div class="inline-block">
            <RouterLink to="/" class="font-poppins text-gray-600 leading-[21px]">Home</RouterLink>
          </div>
          <div class="inline-block mx-1.5">
            <p class="text-gray-600">/</p>
          </div>
          <div class="inline-block">
            <RouterLink to="/contact" class="font-poppins leading-[21px]">Contact</RouterLink>
          </div>
        </div>
      </div>

      <div class="mt-20">
        <div class="flex flex-col md:flex-row md:gap-5 justify-between">
          <div class="pb-12.5 lg:mr-7.5 lg:pt-10 lg:px-8 md:rounded-sm lg:shadow-xs lg:shadow-gray-300">
            <div class="flex items-center">
              <div class="w-10 h-10 rounded-full flex justify-center items-center bg-red-500">
                <span class="pi pi-phone text-white text-xl"></span>
              </div>
              <div class="ml-4">
                <p class="font-poppins font-medium leading-6">Call To Us</p>
              </div>
            </div>
            <div class="mt-6 pb-10 border-b-2 border-b-gray-400">
              <div>
                <p class="font-poppins text-sm leading-5">We are available 24/7, 7 days a week.</p>
              </div>
              <div class="mt-5">
                <p class="font-poppins text-sm leading-5">Phone: +8801611112222</p>
              </div>
            </div>
            <div class="mt-8">
              <div class="flex items-center">
                <div class="w-10 h-10 rounded-full flex justify-center items-center bg-red-500">
                  <span class="pi pi-envelope text-white text-xl"></span>
                </div>
                <div class="ml-4">
                  <p class="font-poppins font-medium leading-6">Write To US</p>
                </div>
              </div>
              <div class="mt-6">
                <div>
                  <p class="font-poppins text-sm leading-5">Fill out our form and we will contact <br> you within 24 hours.</p>
                </div>
                <div class="mt-4">
                  <p class="font-poppins text-sm leading-5">Emails: customer@exclusive.com</p>
                </div>
                <div class="mt-4">
                  <p class="font-poppins text-sm leading-5">Emails: support@exclusive.com</p>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:py-10 lg:px-8 lg:grow-1 md:rounded-sm lg:shadow-xs lg:shadow-gray-300">
            <Form class="flex flex-col h-full">
              <div class="lg:flex lg:gap-3.5">
                <InputText placeholder="Your Name*" class="!w-full lg:!w-auto lg:flex-auto font-poppins leading-6 !bg-gray-100 !border-none" required />
                <InputMask placeholder="Your Email*" class="!w-full lg:!w-auto !mt-5 lg:!mt-0 flex-auto font-poppins leading-6 !bg-gray-100 !border-none" />
                <InputMask placeholder="Your Phone*" mask="+380 (99) 999 99 99" class="!w-full lg:!w-auto !mt-5 lg:!mt-0 flex-auto font-poppins leading-6 !bg-gray-100 !border-none" />
              </div>
              <div class="mt-5 lg:mt-8 h-full">
                <Textarea placeholder="Your Message" class="w-full h-full resize-none font-poppins leading-6 !bg-gray-100 !border-none" />
              </div>
              <div class="mt-8 flex justify-end">
                <Button label="Send Message" :pt="{ root: '!font-poppins !font-medium leading-6 !bg-red-500 !border-none !py-4 !px-12'}" />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>