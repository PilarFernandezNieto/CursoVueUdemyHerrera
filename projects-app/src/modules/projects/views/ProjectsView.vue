<template>
  <div class="overflow-x-auto w-full">
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

  <InputModal
    :open="modalOpen"
    @close="modalOpen = false"
    @value="onNewValue"
    placeholder="Nombre del proyecto"
    titulo="Crea tu proyecto"
    subtitulo="Dale un nombre único a tu proyecto"
  />

  <CustomModal :open="customModalOpen">
    <template #header>
      <h1 class="text-3xl">Título del modal</h1>
    </template>
    <template #body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni maxime veniam laudantium in
        voluptate.
      </p>
    </template>
    <template #footer>
      <div class="flex justify-end mt-5 gap-4">
        <button @click="customModalOpen = false" class="btn">Close</button>
        <button class="btn btn-primary">Aceptar</button>
      </div>
    </template>
  </CustomModal>

  <FabButton @click="modalOpen = true">
    <AddCircle />
  </FabButton>

  <FabButton @click="customModalOpen = true" position="bottom-left" class="p-1">
    <AddSquare />
  </FabButton>
</template>

<script setup lang="ts">
import CustomModal from '@/modules/common/components/CustomModal.vue';
import FabButton from '@/modules/common/components/FabButton.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import AddCircle from '@/modules/common/icons/AddCircle.vue';
import AddSquare from '@/modules/common/icons/AddSquare.vue';
import { useProjectStore } from '@/stores/proyectStore';
import { ref } from 'vue';

const modalOpen = ref(false);
const customModalOpen = ref(false);

const projectsStore = useProjectStore();

const onNewValue = (projectName: string) => {
  console.log({ projectName: projectName });
};
</script>

<style scoped></style>
