<template>
  <dialog class="modal" :open="open">
    <div class="modal-box">
      <h3 class="text-lg font-bold">{{ titulo }}</h3>
      <p v-if="subtitulo" class="py-4">{{ subtitulo }}</p>
      <div class="modal-action flex flex-col">
        <form method="dialog" @submit.prevent="submitValue">
          <input
            ref="inputRef"
            type="text"
            :placeholder="placeholder ?? 'Introduce un valor'"
            class="input input-primary input-bordered w-full flex-1"
            v-model="inputValue"
          />
          <!-- if there is a button in form, it will close the modal -->
          <div class="flex justify-end mt-5 gap-4">
            <button @click="$emit('close')" class="btn">Close</button>
            <button type="submit" class="btn btn-primary">Aceptar</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>
  <div
    v-if="open"
    class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-50 w-screen h-screen"
  ></div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  open: boolean;
  placeholder?: string;
  titulo: string;
  subtitulo?: string;
}

defineProps<Props>();

const emits = defineEmits<{
  close: [void];
  value: [text: string];
}>();

const inputValue = ref('');
const inputRef = ref<HTMLInputElement | null>();

const submitValue = () => {
  if (!inputValue.value.trim()) {
    // Poner el foco en el input
    inputRef.value?.focus();
    return;
  }
  emits('value', inputValue.value.trim());
  emits('close');
  inputValue.value = '';
};
</script>

<style scoped></style>
