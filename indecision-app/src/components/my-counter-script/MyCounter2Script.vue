<script lang="ts" src="./MyCounter2Script">

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
