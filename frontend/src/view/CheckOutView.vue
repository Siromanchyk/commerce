<script setup lang="ts">
import CheckOutForm from '@/components/check/CheckOutForm.vue';
import CheckoutPanel from '@/components/check/CheckoutPanel.vue';
import { Breadcrumb } from 'primevue';
import { ref } from 'vue';

const items = ref([
  { label: 'Account', route: '/' },
  { label: 'My Account', route: '/account' },
  { label: 'Product', route: '/' },
  { label: 'View Cart', route: '/cart' },
  { label: 'CheckOut', route: '/checkout' },
])
</script>

<template>
  <div class="pb-35">
    <div class="md:max-w-3xl lg:max-w-7xl mx-auto px-3.5 md:px-0">
      <div class="mt-10 md:mt-20">
        <Breadcrumb :model="items" :pt="{ root: '!p-0' }">
          <template #item="{ item }">
            <RouterLink :to="item.route" v-slot="{ href, navigate }">
              <a :href="href" @click="navigate" class="font-poppins text-xs text-gray-600 leading-[21px]">
                {{ item.label }}
              </a>
            </RouterLink>
          </template>
          <template #separator>/</template>
        </Breadcrumb>
      </div>

      <div class="mt-10 md:mt-20">
        <h2 class="font-inter text-4xl font-medium leading-[30px] tracking-wide">Billing Details</h2>
        <div class="mt-12 flex md:flex-row flex-col-reverse justify-between">
          <CheckOutForm class="mt-5 md:mt-0" /> 
          <CheckoutPanel />
        </div>
      </div>
    </div>
  </div>
</template>