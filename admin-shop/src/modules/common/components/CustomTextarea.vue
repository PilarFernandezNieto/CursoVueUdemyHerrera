<template>
  <div>
    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement)?.value ?? '')"
      @blur="$emit('blur')"
      :class="['form-control h-32', { 'border-red-500!': error }]"
    ></textarea>
    <span v-if="error" class="text-red-600 text-xs uppercase">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string | number;
  error?: string;
}
defineProps<Props>();

defineEmits(['update:modelValue', 'blur']);
</script>

<style scoped>
@reference "tailwindcss";
.form-control {
  @apply shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500;
}
</style>
