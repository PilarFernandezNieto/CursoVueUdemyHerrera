<template>
  <!-- component -->
  <!-- Create By Joker Banny -->

  <!-- Header Navbar -->
  <TopMenu />
  <!-- End Header Navbar -->

  <RouterView />

  <!-- Footer -->
  <CustomFooter />
  <!-- End Footer -->
</template>

<script setup lang="ts">
import CustomFooter from '../components/CustomFooter.vue';
import TopMenu from '../components/TopMenu.vue';
</script>

<style scoped></style>
