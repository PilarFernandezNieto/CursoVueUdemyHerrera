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

  const addTaskToProject = (projectId: string, taskName: string) => {
    if (!taskName.trim().length === 0) return;

    const project = projects.value.find((p) => p.id === projectId);
    if (!project) return;
    project.tasks.push({
      id: uuidv4(),
      name: taskName,
    });
  };

  const toggleTask = (projectId: string, taskId: string) => {
    const project = projects.value.find((p) => p.id === projectId);
    if (!project) return;
    const task = project.tasks.find((t) => t.id === taskId);
    if (!task) return;
    task.completedAt = task.completedAt ? undefined : new Date();
  };

  const projectProgress = computed(() => {
    return (projectId: number) => {
      const project = projects.value.find((p) => p.id === projectId);

      if (!project || !project.tasks?.length) return 0;

      const completed = project.tasks.filter((task) => task.completedAt).length;

      return Math.round((completed / project.tasks.length) * 100);
    };
  });

  return {
    // Properties
    projects,

    // Getters - Computed properties
    projectList,
    noProjects,
    projectProgress,

    // Actions
    addProject,
    addTaskToProject,
    toggleTask,
  };
});
