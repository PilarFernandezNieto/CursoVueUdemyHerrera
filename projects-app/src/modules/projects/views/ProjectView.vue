<template>
  <BreadCrumbs :name="project?.name ?? 'No name'" />
</template>

<script setup lang="ts">
import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';
import { useProjectStore } from '@/stores/proyectStore';
import { ref, watch } from 'vue';
import { Project } from '../interfaces/project.interface';
/**
 * Podemos coger el id con useRoute o desde el router en forma de props (ver /router/index.ts)
 */
// import { useRoute } from 'vue-router';
// const route = useRoute();

interface Props {
  id: string;
}
const props = defineProps<Props>();
const projectStore = useProjectStore();
const project = ref<Project | null>();

watch(
  () => props.id,
  () => {
    project.value = projectStore.projectList.find((project) => project.id === props.id);
  },
  {
    immediate: true,
  },
);
</script>
