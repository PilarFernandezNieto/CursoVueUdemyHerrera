<template>
  <div class="w-full">
    <section class="m-2">
      <BreadCrumbs :name="project?.name ?? 'No name'" />
    </section>
    <section class="m-2">
      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th class="w-14">Completada</th>
              <th>Tarea</th>
              <th>Completada en</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="task in project?.tasks" :key="task.id" class="hover:bg-base-300">
              <th>
                <input
                  type="checkbox"
                  :checked="!!task.completedAt"
                  class="checkbox checkbox-primary"
                  @change="projectStore.toggleTask(project?.id ?? '', task.id)"
                />
              </th>
              <td>{{ task.name }}</td>
              <td>{{ formatDate(task.completedAt) }}</td>
            </tr>
            <tr class="hover:bg-base-300">
              <th></th>
              <td>
                <input
                  type="text"
                  class="input input-primary w-full opacity-60 transition-all hover:opacity-100 focus:opacity-100"
                  placeholder="Nueva tarea"
                  v-model="newTask"
                  @keyup.enter="addTask"
                />
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { Project } from '../interfaces/project.interface';
import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';
import { useProjectStore } from '@/stores/projectStore';
import { formatDate } from '@/modules/common/helpers';
/**
 * Podemos coger el id con useRoute o desde el router en forma de props (ver /router/index.ts)
 */
// import { useRoute } from 'vue-router';
// const route = useRoute();

interface Props {
  id: string;
}
const router = useRouter();
const props = defineProps<Props>();
const projectStore = useProjectStore();
const project = ref<Project | null>();
const newTask = ref('');
onMounted(() => {});
watch(
  () => props.id,
  () => {
    project.value = projectStore.projectList.find((project) => project.id === props.id);

    if (!project.value) {
      router.replace('/');
    }
  },
  {
    immediate: true,
  },
);

const addTask = () => {
  if (!project.value) return;
  projectStore.addTaskToProject(project.value?.id, newTask.value);
  newTask.value = '';
};
</script>
