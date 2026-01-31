<template>
  <section class="flex flex-col">
    <h1 class="text-3xl font-bold">
      Pokémon <small class="text-indigo-500">#{{ id }}</small>
    </h1>

    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
      alt="Pokemon"
      class="w-50 h-50 mt-5"
    />
    <router-link
      :to="{ name: 'pokemon', params: { id: id + 1 } }"
      class="bg-indigo-500 text-white p-2 rounded mt-5 text-center hover:bg-indigo-700"
      >Siguiente</router-link
    >
  </section>
</template>

<script setup lang="ts">
interface Props {
  id: number;
}
defineProps<Props>();
</script>

<style scoped></style>
