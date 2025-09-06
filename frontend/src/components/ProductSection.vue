<script setup lang="ts">
import { ref, computed } from 'vue';
import { products } from '@/products';
import { Button, Paginator, Carousel } from 'primevue';
import ProductCard from './ProductCard.vue';

defineProps<{
  title: String,
  subTitle?: String,
  times: Boolean,
  layout: 'grid' | 'row',
}>();

const currentPage = ref(0);

// const cards = ref(products)

const totalPages = computed(() => {
  if (!products || products.length === 0) {
    return 0;
  }
  return products.length;
});

const prevSlide = () => {
  if (currentPage.value > 0) {
    currentPage.value--;
  } 
  else {
    currentPage.value = totalPages.value - 1;
  }
  console.log('Prev', currentPage.value);
};

const nextSlide = () => {
  if (currentPage.value < totalPages.value - 1) {
    currentPage.value++;
  } 
  else {
    currentPage.value = 0;
  }
  console.log('Next', currentPage.value);
};

const isGridView = ref(false);
const paginatorFirst = ref(0);
const rowsPerPage = 8;

const paginatedCards = computed(() => {
  const start = paginatorFirst.value;
  const end = start + rowsPerPage;
  return products.slice(start, end);
});

const carouselGridPages = computed(() => {
  const result = [];
  for (let i = 0; i < products.length; i += rowsPerPage) {
    result.push(products.slice(i, i + rowsPerPage));
  }
  return result;
});

const toggleView = () => {
  isGridView.value = !isGridView.value;
};

</script>

<template>
  <div class="max-w-sm md:max-w-3xl lg:max-w-7xl mx-auto border-b-2 border-b-gray-300 pb-15">
    <div class="flex items-center">
      <div class="w-5 h-10 rounded-xs bg-red-500"></div>
      <div class="ml-4">
        <p class="font-poppins font-semibold text-red-500">{{ title }}</p>
      </div>
    </div>
    <div class="mt-6 flex justify-between">
        <div class="flex justify-between items-end w-full md:w-auto">
          <h2 class="md:text-4xl text-2xl font-semibold font-inter">{{ subTitle }}</h2>
          <div v-if="times" class="md:ml-21 flex">
            <div class="flex items-center">
              <div>
                <div>
                  <p class="font-poppins text-xs font-medium">Days</p>
                </div>
                <div class="flex justify-center">
                  <p class="font-inter md:text-3xl text-2xl font-bold">03</p>
                </div>
              </div>
              <div class="md:mx-4 mx-2 mt-2">
                <div class="w-1 h-1 rounded-full bg-orange-500 mb-2"></div>
                <div class="w-1 h-1 rounded-full bg-orange-500"></div>
              </div>
            </div>
            <div class="flex items-center">
              <div>
                <div>
                  <p class="font-poppins text-xs font-medium">Hours</p>
                </div>
                <div class="flex justify-center">
                  <p class="font-inter md:text-3xl text-2xl font-bold">23</p>
                </div>
              </div>
              <div class="md:mx-4 mx-2 mt-2">
                <div class="w-1 h-1 rounded-full bg-orange-500 mb-2"></div>
                <div class="w-1 h-1 rounded-full bg-orange-500"></div>
              </div>
            </div>
            <div class="flex items-center">
              <div>
                <div>
                  <p class="font-poppins text-xs font-medium">Minutes</p>
                </div>
                <div class="flex justify-center">
                  <p class="font-inter md:text-3xl text-2xl font-bold">19</p>
                </div>
              </div>
              <div class="md:mx-4 mx-2 mt-2">
                <div class="w-1 h-1 rounded-full bg-orange-500 mb-2"></div>
                <div class="w-1 h-1 rounded-full bg-orange-500"></div>
              </div>
            </div>
            <div class="flex items-center">
              <div>
                <div>
                  <p class="font-poppins text-xs font-medium">Seconds</p>
                </div>
                <div class="flex justify-center">
                  <p class="font-inter md:text-3xl text-2xl font-bold">56</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden md:flex">
          <button class="block bg-gray-200 rounded-full px-4 py-3 mr-2" id="scrollLeftBtn" @click="prevSlide">
            <span class="pi pi-arrow-left"></span>
          </button>
          <button class="block bg-gray-200 rounded-full px-4 py-3" id="scrollRightBtn" @click="nextSlide">
            <span class="pi pi-arrow-right"></span>
          </button>
        </div>
      </div>
      <div class="pt-7.5">
        <template v-if="layout === 'grid'">
          <div v-if="!isGridView">
            <Carousel
              :value="carouselGridPages"
              :numVisible="1"
              :numScroll="1"
              :showIndicators="false"
              :showNavigators="false"
              v-model:page="currentPage"
            >
              <template #item="{ data }">
                <div class="grid lg:grid-cols-4 grid-cols-1 justify-items-center lg:justify-items-start gap-4">
                  <ProductCard
                    v-for="product in data"
                    :key="product.id"
                    :product="product"
                  />
                </div>
              </template>
            </Carousel>
          </div>
          <div v-else>
            <div class="grid grid-rows-1 lg:grid-cols-4 grid-cols-1 gap-2">
              <ProductCard
                v-for="product in paginatedCards"
                :key="product.id"
                :product="product"
              />
            </div>
            <Paginator
              v-model:first="paginatorFirst"
              :rows="rowsPerPage"
              :total-records="products.length"
              class="mt-8"
            />
          </div>
        </template>

        <template v-else-if="layout === 'row'">
          <div v-if="!isGridView">
            <Carousel
              :value="products"
              :num-visible="4"
              :num-scroll="1"
              :show-indicators="false"
              :show-navigators="false"
              v-model:page="currentPage"
              :pt="{ itemList: 'flex' }"
            >
              <template #item="{ data }">
                <ProductCard :product="data" />
              </template>
            </Carousel>
          </div>
          <div v-else>
            <div class="grid grid-rows-1 lg:grid-cols-4 grid-cols-1 justify-items-center gap-2">
              <ProductCard
                v-for="product in paginatedCards"
                :key="product.id"
                :product="product"
              />
            </div>
            <Paginator
              v-model:first="paginatorFirst"
              :rows="rowsPerPage"
              :total-records="products.length"
              class="mt-8"
            />
          </div>
        </template>
      </div>
      <div class="mt-15 flex justify-center items-center" @click="toggleView">
        <Button unstyled :label="isGridView ? 'View less' : 'View All Products'" class="font-poppins text-white font-medium flex justify-center items-center bg-red-500 rounded-sm py-4 px-12 cursor-pointer"  />
      </div>
  </div>
</template>
