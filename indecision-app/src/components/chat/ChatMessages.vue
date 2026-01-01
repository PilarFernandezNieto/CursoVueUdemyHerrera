<template>
    <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">
            <!-- Messages go here -->
            <!-- <ChatBubble v-for="message in messages" :key="message.id" :its-mine="message.itsMine"
                :message="message.message" :image="message.image" /> -->
            <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />

        </div>
    </div>
</template>
<script lang="ts" setup>
import type { ChatMessage } from '@/interfaces/chat-message.inteface';
import ChatBubble from './ChatBubble.vue';
import { ref, watch } from 'vue';

interface Props {
    messages: ChatMessage[];
}
const props = defineProps<Props>();

// Primero se renderiza la parte de javascript/typescript y luego el HTML
// Por tanto, esta variable a la referencia se "crea" antes que la propia referencia
const chatRef = ref<HTMLDivElement | null>();

watch(props, () => {
    setTimeout(() => {
        chatRef.value?.scrollTo({
            top: chatRef.value.scrollHeight,
            behavior: 'smooth'
        })
    }, 100);

});


</script>

<style lang="scss" scoped></style>