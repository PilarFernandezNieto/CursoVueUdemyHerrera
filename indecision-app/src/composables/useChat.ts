import { sleep } from '@/helpers/sleep';
import type { ChatMessage } from '@/interfaces/chat-message.inteface';
import type { YesNoResponse } from '@/interfaces/yes-no.response.';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  const getHerResponse = async () => {
    const resp = await fetch('https://yes-no-wtf.vercel.app/api');
    const data = (await resp.json()) as YesNoResponse;
    return data;
  };

  // Manejador de la función que recibe
  // el evento emitido por el hijo (MessageBox-sendMessage)
  const onMessage = async (text: string) => {
    if (text.length === 0) return;
    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    });

    // Evaluar si NO termina con un símbolo de interrogación
    if (!text.endsWith('?')) return;

    await sleep(1.5);

    const { answer, image } = await getHerResponse();

    messages.value.push({
      id: new Date().getTime(),
      itsMine: false,
      message: answer,
      image: image,
    });
  };

  return {
    // Properties
    messages,

    // Methods
    onMessage,
  };
};
