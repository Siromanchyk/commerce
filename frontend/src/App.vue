<script setup lang="ts">
import Top from './components/Top.vue';
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <!-- <MainView /> -->
  <div class="min-h-screen flex flex-col">
    <Top />
    <Navigation />
    <main class="grow-1">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
