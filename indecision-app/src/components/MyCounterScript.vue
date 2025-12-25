<script lang="ts">
import { useCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue';

export default defineComponent({

    props: {
        value: { type: Number, required: true, },
    },


    setup(props) {
        const { counter, square } = useCounter(props.value);
        //const counter = ref(props.value);
        //const square = computed(() => counter.value * counter.value);

        return {
            counter,
            square,
        }
    },
})
</script>
<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3>Square: {{ square }}</h3>

        <div>
            <button @click="counter++">+1</button>
            <button @click="counter--">-1</button>
        </div>
    </section>
</template>



<style lang="scss" scoped></style>
