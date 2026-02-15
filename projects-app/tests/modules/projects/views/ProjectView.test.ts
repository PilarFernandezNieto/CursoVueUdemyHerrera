import ProjectView from '@/modules/projects/views/ProjectView.vue';
import { useProjectStore } from '@/stores/projectStore';
import { mount } from '@vue/test-utils';
import { fakeProjects } from '../../../mocks/projects.fake';
import { useRouter } from 'vue-router';

vi.mock('vue-router');
vi.mock('@/stores/projectStore');

describe('ProjectView', () => {
  test('should be render with a project', () => {
    useProjectStore.mockReturnValue({
      projectList: fakeProjects,
    });
    const wrapper = mount(ProjectView, {
      props: {
        id: '1',
      },
      global: {
        stubs: ['RouterLink'],
      },
    });

    const tableRows = wrapper.findAll('tr.hover');
    expect(tableRows.length).toBe(fakeProjects.at(0).tasks.length);
  });
  test('should redirect to projects if project.id not found', () => {
    useProjectStore.mockReturnValue({
      projectList: [],
    });
    const replaceSpy = vi.fn();
    useRouter.mockReturnValue({
      replace: replaceSpy,
    });

    mount(ProjectView, {
      props: {
        id: '1',
      },
      global: {
        stubs: ['RouterLink'],
      },
    });

    expect(replaceSpy).toHaveBeenCalledWith('/');
  });
});
