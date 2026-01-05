<template>
  <section
    v-if="isLoading"
    class="flex flex-col justify-center items-center w-screen h-screen"
  >
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokemons</h3>
  </section>
  <section
    v-else
    class="flex flex-col justify-center items-center w-screen h-screen"
  >
    <h1 class="m-5">¿Quién es este Pokemon?</h1>
    <div class="h-20">
      <button
        v-if="gameStatus !== GameStatus.Playing"
        class="bg-green-500 p-3 rounded-md m-4 text-white uppercase font-bold"
        @click="getNextRound()"
      >
        Volver a jugar
      </button>
    </div>

    <!-- Pokemon Picture -->
    <PokemonPicture
      v-if="randomPokemon"
      :pokemon-id="randomPokemon.id"
      :show-pokemon="gameStatus !== GameStatus.Playing"
    />
    <!-- {{ randomPokemon?.name }} -->

    <!-- Pokemon Options -->
    <PokemonOptions
      :options="options"
      :block-selection="gameStatus !== GameStatus.Playing"
      :correct-answer="randomPokemon?.id"
      @selected-option="checkAnswer"
    />
    {{ randomPokemon?.id }}
  </section>
</template>

<script setup lang="ts">
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameStatus } from '../interfaces';

const {
  gameStatus,
  isLoading,
  randomPokemon,
  pokemonOptions: options,
  checkAnswer,
  getNextRound,
} = usePokemonGame();

const onSelectedOption = (value: number) => {
  console.log({ value });
};
</script>
