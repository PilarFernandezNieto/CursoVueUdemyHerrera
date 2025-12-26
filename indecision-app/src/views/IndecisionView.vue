<script lang="ts" setup>
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import { useChat } from '@/composables/useChat';

const { messages, onMessage } = useChat();

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