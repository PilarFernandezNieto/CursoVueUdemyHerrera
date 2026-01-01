<template>
    <section v-if="isLoading" class="flex flex-col justify-center items-center w-screen h-screen">
        <h1 class="text-3xl">Espere por favor</h1>
        <h3 class="animate-pulse">Cargando Pokemons</h3>
    </section>
    <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
        <h1 class="m-5">¿Quién es este Pokemon?</h1>

        <!-- Pokemon Picture -->
        <PokemonPicture v-if="randomPokenon" :pokemon-id="randomPokenon.id"
            :show-pokemon="gameStatus !== GameStatus.Playing" />

        <!-- Pokemon Options -->
        <PokemonOptions :options="options" @selected-option="onSelectedOption" />
    </section>
</template>

<script setup lang="ts">
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameStatus } from '../interfaces';

const { gameStatus, isLoading, randomPokenon, pokemonOptions: options } = usePokemonGame();

const onSelectedOption = (value: number) => {
    console.log({ value });
};
</script>
