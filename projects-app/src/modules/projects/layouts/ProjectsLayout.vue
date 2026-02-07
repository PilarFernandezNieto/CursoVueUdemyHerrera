<template>
  <div class="flex flex-col">
    <!-- Top Menú-->
    <TopMenu />

    <main class="flex flex-row">
      <!-- Side Menú -->
      <SideMenu />

      <!-- Router View -->
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import SideMenu from '@/modules/projects/components/SideMenu.vue'
import TopMenu from '@/modules/common/components/TopMenu.vue'
</script>

<style scoped></style>
