<template>
  <div>
    <input
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value ?? '')"
      @blur="$emit('blur')"
      :class="['form-control', { 'border-red-500!': error }]"
    />
    <span v-if="error" class="text-red-600 text-xs uppercase">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string | number;
  error?: string;
  type?: 'text' | 'number';
}

withDefaults(defineProps<Props>(), {
  type: 'text',
});

defineEmits(['update:modelValue', 'blur']);
</script>

<style scoped>
@reference "tailwindcss";
.form-control {
  @apply shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500;
}
</style>
