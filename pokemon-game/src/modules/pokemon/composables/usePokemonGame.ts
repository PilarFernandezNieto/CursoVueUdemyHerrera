import { computed, onMounted, ref } from 'vue';
import { GameStatus, type Pokemon, type PokemonListResponse } from '../interfaces';
import { pokemonApi } from '../api/pokemonApi';
import PokemonOptions from '../components/PokemonOptions.vue';

export const usePokemonGame = () => {
  // Variables
  const gameStatus = ref<GameStatus>(GameStatus.Playing);
  const pokemons = ref<Pokemon[]>([]);
  const pokemonOptions = ref<Pokemon[]>([]);

  // Computed properties
  const isLoading = computed(() => pokemons.value.length === 0);
  const randomPokenon = computed(() => {
    const optionIndex = Math.floor(Math.random() * pokemonOptions.value.length);
    return pokemonOptions.value[optionIndex];
  });

  // Funciones
  const getPokemons = async (): Promise<Pokemon[]> => {
    const response = await pokemonApi.get<PokemonListResponse>('/?limit=151');

    const pokemonsArray = response.data.results.map((pokemon) => {
      const urlParts = pokemon.url.split('/');
      const id = urlParts.at(-2) ?? 0;

      return {
        name: pokemon.name,
        // id: urlParts[urlParts.length - 2],
        id: +id,
      };
    });
    // Devolvemos los Pokemons desordenados
    return pokemonsArray.sort(() => Math.random() - 0.5);
  };

  const getNextOptions = (howMany: number = 7) => {
    gameStatus.value = GameStatus.Playing;
    pokemonOptions.value = pokemons.value.slice(0, howMany);
    pokemons.value = pokemons.value.slice(howMany);
  };

  onMounted(async () => {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    pokemons.value = await getPokemons();
    getNextOptions(4);
  });

  return {
    pokemons,
    pokemonOptions,
    randomPokenon,
    gameStatus,
    isLoading,
    getNextOptions,
  };
};
