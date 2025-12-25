<script lang="ts" setup>
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import type { ChatMessage } from '@/interfaces/chat-message.inteface';
import { ref } from 'vue';

const messages = ref<ChatMessage[]>([
    {
        id: new Date().getTime(),
        message: '¡¡Hola mundo!!',
        itsMine: true,
    },
    {
        id: new Date().getTime(),
        message: '¿Te apetece un café?',
        itsMine: true,
    },
    {
        id: new Date().getTime(),
        message: '¡¡¡Si!!!',
        itsMine: false,
        image: 'https://yesno.wtf/assets/yes/13-c3082a998e7758be8e582276f35d1336.gif'
    },
]);

// Manejador de la función que recibe el evento emitido por el hijo (MessageBox-sendMessage)
const onMessage = (text: string) => {
    messages.value.push({
        id: new Date().getTime(),
        itsMine: true,
        message: text
    });
}


</script>

<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
    <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
        <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
            <span>Mi esposa</span>
        </div>

        <!-- ChatMessages-->
        <ChatMessages :messages="messages" />

        <!-- MessageBox -->
        <!-- <MessageBox @send-message="onMessage($event)" /> -->
        <MessageBox @send-message="onMessage" />
    </div>
</template>

<style lang="scss" scoped></style>