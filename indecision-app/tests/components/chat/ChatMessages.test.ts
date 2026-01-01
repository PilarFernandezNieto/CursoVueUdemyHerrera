import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessage } from '@/interfaces/chat-message.inteface';
import { mount } from '@vue/test-utils';
import { describe, expect, test, vi } from 'vitest';

const messages: ChatMessage[] = [
  {
    id: 1,
    message: 'Hola',
    itsMine: true,
  },
  {
    id: 2,
    message: 'Mundo',
    itsMine: false,
    image: 'https://example.com/image.png',
  },
];

describe('<ChatMessages />', () => {
  const wrapper = mount(ChatMessages, {
    props: {
      messages,
    },
  });
  test('renders chat messages correcly', () => {
    const chatBubbles = wrapper.findAllComponents({ name: 'ChatBubble' });
    expect(chatBubbles.length).toBe(messages.length);
  });

  test('scrolls down to the bottom afeter messages update', async () => {
    // moks - espías
    const scrollToMock = vi.fn();

    const chatRef = wrapper.vm.$refs.chatRef as HTMLDivElement;
    chatRef.scrollTo = scrollToMock;

    await wrapper.setProps({
      messages: [...messages, { id: 3, message: 'Nuevo mensaje', itsMine: true }],
    });

    await new Promise((resolve) => setTimeout(resolve, 150));
    expect(scrollToMock).toHaveBeenCalled();
  });
});
