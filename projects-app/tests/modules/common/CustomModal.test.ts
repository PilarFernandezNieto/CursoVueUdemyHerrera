import CustomModal from '@/modules/common/components/CustomModal.vue';
import { mount } from '@vue/test-utils';

describe('<CustomModal />', () => {
  test('renders dialog with default state', () => {
    const wrapper = mount(CustomModal);
    const modal = wrapper.find('.modal');
    expect(modal.attributes('open')).toBeUndefined();
  });

  test('renders dialog with header, body and footer slots', () => {
    const wrapper = mount(CustomModal, {
      slots: {
        header: '<span>Header content</span>',
        body: '<span>Body content</span>',
        footer: '<span>Footer content</span>',
      },
    });
    expect(wrapper.text()).toContain('Header content');
    expect(wrapper.find('.my-5').text()).toContain('Body content');
    expect(wrapper.text()).toContain('Footer content');
  });

  test('open and closes dialogs when open props changes', async () => {
    const wrapper = mount(CustomModal, {
      props: {
        open: true,
      },
    });
    const modal = wrapper.find('.modal');
    expect(modal.attributes('open')).toBeDefined();

    const modalBackground = wrapper.find('.modal-backdrop');
    expect(modalBackground.exists()).toBe(true);

    expect(modalBackground.classes()).toEqual([
      'modal-backdrop',
      'fixed',
      'top-0',
      'left-0',
      'z-10',
      'bg-black',
      'opacity-50',
      'w-screen',
      'h-screen',
    ]);

    // Cambiar la prop
    await wrapper.setProps({ open: false });
    expect(modal.attributes('open')).toBeUndefined();

    // Retomamos el wrapper del modal background actualizado
    expect(wrapper.find('.modal-backdrop').exists()).toBe(false);
  });
});
