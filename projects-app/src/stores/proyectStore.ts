import type { Project } from '@/modules/projects/interfaces/project.interface';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '@vueuse/core';

// const initialLoad = (): Project[] => {
//   return [
//     {
//       id: uuidv4(),
//       name: 'Project 1',
//       tasks: [],
//     },
//     {
//       id: uuidv4(),
//       name: 'Project 2',
//       tasks: [],
//     },
//   ];
// };

export const useProjectStore = defineStore('project', () => {
  // const projects = ref(useLocalStorage<Project[]>('projects', initialLoad()));
  const projects = ref(useLocalStorage<Project[]>('projects'));
  const projectList = computed(() => [...projects.value]);

  const addProject = (name: string) => {
    if (!name.length === 0) return;

    console.log('Desde add proyect');
    projects.value.push({
      id: uuidv4(),
      name: name,
      tasks: [],
    });
  };

  return {
    // Properties
    // projects,

    // Getters - Computed properties
    projectList,

    // Actions
    addProject,
  };
});
