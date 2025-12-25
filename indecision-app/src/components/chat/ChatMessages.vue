<script setup>
import ChatBubble from './ChatBubble.vue';


</script>

<template>
    <div class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">
            <!-- Messages go here -->
            <ChatBubble :its-mine="true" :message="'Hola mundo'" />
            <ChatBubble :its-mine="false" :message="'Hola mundo'" />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>