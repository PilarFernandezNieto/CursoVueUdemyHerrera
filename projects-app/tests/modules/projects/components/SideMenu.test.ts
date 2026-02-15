import { nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { useProjectStore } from '@/stores/projectStore';
import { fakeProjects } from '../../../mocks/projects.fake';
import SideMenu from '@/modules/projects/components/SideMenu.vue';

describe('<SideMenu />', () => {
  const wrapper = mount(SideMenu, {
    global: {
      stubs: ['RouterLink'],
      plugins: [createTestingPinia()],
    },
  });
  const store = useProjectStore();

  beforeEach(() => {
    store.$patch({
      projects: [],
    });
  });

  test('should render wit no projects', () => {
    expect(wrapper.html()).toContain('No hay proyectos');
  });

  test('should render with projects', async () => {
    store.$patch({
      projects: fakeProjects,
    });
    await nextTick();
    expect(wrapper.html()).not.toContain('No hay proyectos');
    expect(wrapper.html()).toMatchSnapshot();
  });
});
