import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';
import router from '@/router';

describe('<App />,', () => {
  test('should be render correcty with RouterView', () => {
    const wrapper = shallowMount(App, {
      global: {
        plugins: [router],
      },
    });
    // console.log(wrapper.html());
    const routerView = wrapper.findComponent({ name: 'RouterView' });
    expect(routerView.exists()).toBe(true);
  });
});
