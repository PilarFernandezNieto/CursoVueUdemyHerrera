<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl">Bienvenido a nuestro sitio web</h1>
    <p class="mx-auto max-w-150 text-gray-500 md:text-xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <p>Counter: {{ counter }}</p>
    <button
      @click="counter++"
      class="bg-indigo-500 hover:bg-indigo-600 py-2 px-4 rounded text-white transition ease-in-out duration-300"
    >
      + 1
    </button>
  </div>
</template>

<script src="./HomeView.ts" lang="ts"></script>

<style scoped></style>
