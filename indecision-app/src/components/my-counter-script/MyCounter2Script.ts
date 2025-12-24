import { defineComponent, computed, ref } from 'vue';

export default defineComponent({

    props: {
        value: { type: Number, required: true, },
    },
    setup(props) {
        const counter = ref(props.value);
        const square = computed(() => counter.value * counter.value);

        return {
            counter,
            square,
        }
    },
})