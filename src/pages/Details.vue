<template>
  <Navbar />
  <div
    class="max-w-2xl mx-auto py-6 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8"
  >
    <DetailEvent />
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import DetailEvent from "../components/DetailEvent.vue";
</script>