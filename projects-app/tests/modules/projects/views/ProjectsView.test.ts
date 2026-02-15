import ProjectsView from '@/modules/projects/views/ProjectsView.vue';
import { useProjectStore } from '@/stores/projectStore';
import { createTestingPinia } from '@pinia/testing';
import { fakeProjects } from '../../../mocks/projects.fake';
import { mount } from '@vue/test-utils';

describe('<ProjectsView />', () => {
  const wrapper = mount(ProjectsView, {
    global: {
      plugins: [createTestingPinia()],
    },
  });
  const store = useProjectStore();
  beforeEach(() => {
    store.$patch({
      projects: fakeProjects,
    });
  });
  test('should be render with projects', () => {
    const tableRpws = wrapper.findAll('tbody tr');
    expect(tableRpws.length).toBe(4);
    tableRpws.forEach((row, index) => {
      const project = fakeProjects[index];
      const cell = row.findAll('td');
      expect(cell.at(0).text()).toBe(project?.name);
      expect(cell.at(1).text()).toBe(project?.tasks.length.toString());
    });
  });

  test('should call addProject method on modal', () => {
    const inputModalComponent = wrapper.findComponent({ name: 'InputModal' });
    const newProjectName = 'New Project';
    inputModalComponent.vm.$emit('value', newProjectName);

    expect(store.addProject).toHaveBeenCalledWith(newProjectName);
  });
});
