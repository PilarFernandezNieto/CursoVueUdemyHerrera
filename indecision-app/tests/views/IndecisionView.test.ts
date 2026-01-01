import { describe, expect, test } from 'vitest';
import IndecisionView from '@/views/IndecisionView.vue';
import { mount } from '@vue/test-utils';
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';

const mockChatMessages = {
  template: '<div data-testid="mock-messages">Mocke ChatMessages</div>',
};

describe('<IndecisionView (>', () => {
  test('renders chat messages and messagebox correctly', () => {
    const wrapper = mount(IndecisionView);

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.findComponent(ChatMessages).exists()).toBe(true);
    expect(wrapper.findComponent(MessageBox).exists()).toBe(true);
  });

  test('calls onMessage when sending amessage', async () => {
    const wrapper = mount(IndecisionView, {
      global: {
        stubs: {
          ChatMessages: mockChatMessages,
        },
      },
    });
    // simular el evento personalizado
    const messageBoxcComponent = wrapper.findComponent(MessageBox);
    messageBoxcComponent.vm.$emit('sendMessage', 'Hola');
    await new Promise((resolve) => setTimeout(resolve, 150));
    expect(wrapper.html()).toMatchSnapshot();
  });
});
