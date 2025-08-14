<script setup lang="ts">
import Top from './components/Top.vue';
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
import GamepadView from './view/GamepadView.vue';
</script>

<template>
  <!-- <MainView /> -->
  <div class="min-h-screen flex flex-col">
    <Top />
    <Navigation />
    <GamepadView class="grow-1" />
    <Footer />
  </div>
</template>
