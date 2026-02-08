import type { Project } from '@/modules/projects/interfaces/project.interface';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '@vueuse/core';

// REVISAR REPOSITORIO. DATOS INICIALES DE CARGA ANTES DE LA PERSISSTENCIA EN LOCALSTORAGE

export const useProjectStore = defineStore('project', () => {
  // const projects = ref(useLocalStorage<Project[]>('projects', initialLoad()));
  const projects = ref(useLocalStorage<Project[]>('projects', []));
  const projectList = computed(() => [...projects.value]);
  const noProjects = computed(() => projects.value.length === 0);

  const addProject = (name: string) => {
    if (!name.length === 0) return;
    projects.value.push({
      id: uuidv4(),
      name: name,
      tasks: [],
    });
  };

  return {
    // Properties
    projects,

    // Getters - Computed properties
    projectList,
    noProjects,

    // Actions
    addProject,
  };
});
