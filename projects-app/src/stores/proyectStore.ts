import type { Project } from '@/modules/projects/interfaces/project.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const initialLoad = (): Project[] => {
  return [
    {
      id: '1',
      name: 'Project 1',
      tasks: [],
    },
    {
      id: '2',
      name: 'Project 2',
      tasks: [],
    },
  ];
};

export const useProjectStore = defineStore('project', () => {
  const projects = ref<Project[]>(initialLoad());

  return { projects };
});
