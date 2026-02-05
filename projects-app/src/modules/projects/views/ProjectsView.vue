<template>
  <div class="overflow-x-auto w-full flex items-center justify-center">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Proyecto</th>
          <th>Tareas</th>
          <th>Avance</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr class="hover:bg-base-300">
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr>
      </tbody>
    </table>
  </div>
  <FabButton />
</template>

<script setup lang="ts">
import FabButton from '@/modules/common/components/FabButton.vue'
</script>

<style scoped></style>
