<script setup lang="ts">
import { InputMask, InputText, Textarea, Button } from 'primevue';
import { Form } from '@primevue/forms';
import { reactive } from 'vue';

const contact = reactive({

})
</script>

<template>
  <div class="pt-20 pb-35">
    <div class="max-w-7xl mx-auto">
      <div>
        <div class="flex items-center">
          <div class="inline-block">
            <a href="#" class="font-poppins text-gray-600 leading-[21px]">Home</a>
          </div>
          <div class="inline-block mx-1.5">
            <p class="text-gray-600">/</p>
          </div>
          <div class="inline-block">
            <a href="#" class="font-poppins leading-[21px]">Contact</a>
          </div>
        </div>
      </div>

      <div class="mt-20">
        <div class="flex justify-between">
          <div class="mr-7.5 pt-10 px-8 pb-12.5">
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
          <div class="py-10 px-8 grow-1">
            <Form class="flex flex-col h-full">
              <div class="flex gap-3.5">
                <InputText placeholder="Your Name*" class="flex-auto font-poppins leading-6 !bg-gray-100 !border-none" required />
                <InputMask placeholder="Your Email*" class="flex-auto font-poppins leading-6 !bg-gray-100 !border-none" />
                <InputMask placeholder="Your Phone*" mask="+380 (99) 999 99 99" class="flex-auto font-poppins leading-6 !bg-gray-100 !border-none" />
              </div>
              <div class="mt-8 h-full">
                <Textarea placeholder="Your Message" class="w-full h-full resize-none font-poppins leading-6 !bg-gray-100 !border-none" cols="30" />
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