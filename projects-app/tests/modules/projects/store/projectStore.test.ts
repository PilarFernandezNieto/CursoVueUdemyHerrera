import { useProjectStore } from '@/stores/projectStore';
import { createPinia, setActivePinia } from 'pinia';
import { fakeProjects } from '../../../mocks/projects.fake';

describe('useProjectStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    localStorage.clear();
  });

  test('should return default values', () => {
    const {
      noProjects,
      addProject,
      addTaskToProject,
      projectList,
      projects,
      projectsWithCompletion,
      toggleTask,
    } = useProjectStore();

    expect(noProjects).toBe(true);
    expect(addProject).toBeInstanceOf(Function);
    expect(addTaskToProject).toBeInstanceOf(Function);
    expect(projectList).toEqual([]);
    expect(projects).toEqual([]);
    expect(projectsWithCompletion).toEqual([]);
    expect(toggleTask).toBeInstanceOf(Function);
  });

  test('add a project - action', () => {
    const store = useProjectStore();
    const newProjectName = 'New Project';

    store.addProject(newProjectName);

    expect(store.projects.length).toBe(1);
    expect(store.projects[0]).toEqual({
      id: expect.any(String),
      name: newProjectName,
      tasks: [],
    });
  });

  test('should load from localStorage', () => {
    localStorage.setItem('projects', JSON.stringify(fakeProjects));
    const store = useProjectStore();
    const [project1] = store.projects;
    expect(project1).toEqual({
      id: '1',
      name: 'Project 1',
      tasks: expect.any(Array),
    });

    expect(store.projects.length).toBe(4);
  });

  test('add a task to a project', () => {
    const store = useProjectStore();

    store.addProject('New Project');
    const project = store.projects.at(0);
    const taskName = 'New Task';
    store.addTaskToProject(project.id, taskName);

    expect(project.tasks.length).toBe(1);
    expect(project.tasks.at(0)).toEqual({
      id: expect.any(String),
      name: taskName,
      completedAt: undefined,
    });
  });

  test('toggles a task', () => {
    const store = useProjectStore();

    store.addProject('New Project');
    const project = store.projects.at(0);
    const taskName = 'New Task';
    store.addTaskToProject(project.id, taskName);
    const task = project.tasks.at(0);
    store.toggleTask(project.id, task.id);

    expect(task).toEqual({
      id: expect.any(String),
      name: taskName,
      completedAt: expect.any(Date),
    });
  });
  test('should return the projects with completion', () => {
    const store = useProjectStore();
    store.$patch((state) => {
      state.projects = fakeProjects;
    });

    console.log(store.projectsWithCompletion);
    expect(store.projectsWithCompletion).toEqual([
      { id: '1', name: 'Project 1', taskCount: 4, completion: 25 },
      { id: '2', name: 'Project 2', taskCount: 0, completion: 0 },
      { id: '3', name: 'Project 3', taskCount: 2, completion: 50 },
      { id: '4', name: 'Project 4', taskCount: 3, completion: 33 },
    ]);
  });
});
