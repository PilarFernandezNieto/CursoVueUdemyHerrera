<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
import MyCounter2Script from './components/my-counter-script/MyCounter2Script.vue';


</script>

<template>
    <div class="">
        <h1 class="text-3xl font-bold underline">
    Mi primera app
  </h1>
        <MyCounter :value="1" />
        <MyCounterScript :value="8" />
        <MyCounter2Script :value="3" />
    </div>
</template>

<style scoped></style>