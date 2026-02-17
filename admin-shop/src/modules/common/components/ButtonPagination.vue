<template>
  <div class="flex justify-center py-10 bg-gray-100 space-x-3">
    <button
      :disabled="page === 1"
      @click="$router.push({ query: { page: page - 1 } })"
      class="flex items-center space-x-1.5 bg-blue-500 rounded-lg text-white px-4 py-1.5 disabled:bg-gray-300 hover:bg-blue-600 transition-all duration-150 cursor-pointer"
    >
      <ArrowLeftIcon />
      <span>Anteriores</span>
    </button>
    <button
      :disabled="hasMoreData"
      @click="$router.push({ query: { page: page + 1 } })"
      class="flex items-center space-x-1.5 bg-blue-500 rounded-lg text-white px-4 py-1.5 disabled:bg-gray-300 hover:bg-blue-600 transition-all duration-150 cursor-pointer"
    >
      <span>Siguientes</span>
      <ArrowRightIcon />
    </button>
  </div>
</template>

<script setup lang="ts">
import ArrowLeftIcon from '@/icons/ArrowLeftIcon.vue';
import ArrowRightIcon from '@/icons/ArrowRightIcon.vue';

interface Props {
  page: number;
  hasMoreData: boolean;
}

defineProps<Props>();
</script>
