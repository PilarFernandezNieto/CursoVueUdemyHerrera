import MessageBox from '@/components/chat/MessageBox.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

describe('<MessageBox />', () => {
  const wrapper = mount(MessageBox);
  test('renders input and button elements correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button svg').exists()).toBe(true);

    //console.log(wrapper.find('button').attributes('class'));
  });

  test('emits sendMessage event when button is clicked with message value', async () => {
    const message = 'Hola mundo';
    await wrapper.find('input[type="text"]').setValue(message);
    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);

    expect((wrapper.vm as any).message).toBe('');
  });

  test('emits sendMessage event when keypress.enter is triggered with message.value', async () => {
    const message = 'Hola mundo';

    const input = wrapper.find('input');
    await input.setValue(message);
    await input.trigger('keypress.enter');

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
  });

  test('emits sendMessage event when keypress.enter is triggered without message.value', async () => {
    // Volvermos a crear el wrapper para evitar interferencias con pruebas anteriores
    const wrapper = mount(MessageBox);
    const input = wrapper.find('input');
    await input.trigger('keypress.enter');

    // Esta prueba no pasará porque hay pruebas anteriores que envían mensajes.
    expect(wrapper.emitted('sendMessage')).toBeFalsy();
  });
});
