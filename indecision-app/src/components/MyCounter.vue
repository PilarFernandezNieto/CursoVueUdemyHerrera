<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';
interface Props {
    value: number;
}

const props = defineProps<Props>();

const { counter, square } = useCounter(props.value);




</script>

<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3 data-testid="square-label">Square: {{ square }}</h3>

        <div>
            <button class="btn" @click="counter++">+1</button>
            <button class="btn" @click="counter--">-1</button>
        </div>
    </section>
</template>



<style scoped>
@reference 'tailwindcss';

.btn {
    @apply inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500;
}
</style>
