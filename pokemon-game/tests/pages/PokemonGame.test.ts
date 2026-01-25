import { mount } from '@vue/test-utils';
import PokemonGame from '@/modules/pokemon/pages/PokemonGame.vue';
import { usePokemonGame } from '@/modules/pokemon/composables/usePokemonGame';
import { GameStatus } from '@/modules/pokemon/interfaces';
vi.mock('@/modules/pokemon/composables/usePokemonGame', () => ({
  usePokemonGame: vi.fn(),
}));

describe('<PokemonGame />', () => {
  test('should inicialize with default values', async () => {
    // Inicializamos con valores por defecto antes de montar el componente
    (usePokemonGame as Mock).mockReturnValue({
      isLoading: true,
      randomPokemon: undefined,
      gameStatus: GameStatus.Playing,
      pokemonOptions: [],
      checkAnswer: vi.fn(),
      getNextRound: vi.fn(),
    });

    const wrapper = mount(PokemonGame);
    expect(wrapper.get('h1').text()).toBe('Espere, por favor...');
    expect(wrapper.get('h1').classes()).toEqual(['text-3xl']);
    expect(wrapper.get('h3').text()).toBe('Cargando Pokemons');
    expect(wrapper.get('h3').classes()).toEqual(['animate-pulse']);
  });

  const pokemonOptions = [
    {
      name: 'bulbasaur',
      id: 1,
    },
    {
      name: 'ivysaur',
      id: 2,
    },
    {
      name: 'venusaur',
      id: 3,
    },
    {
      name: 'charmander',
      id: 4,
    },
  ];
  test('should render <PokemonPicture /> and <PokemonOptions />', async () => {
    // Inicializamos con valores por defecto antes de montar el componente
    (usePokemonGame as Mock).mockReturnValue({
      isLoading: false,
      randomPokemon: pokemonOptions.at(0),
      gameStatus: GameStatus.Playing,
      pokemonOptions: pokemonOptions,
      checkAnswer: vi.fn(),
      getNextRound: vi.fn(),
    });
    const wrapper = mount(PokemonGame);
    const imageUrl =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg';
    const pokemons = pokemonOptions.map((pokemon) => pokemon.name);
    const buttons = wrapper.findAll(
      '.capitalize.disabled\\:cursor-not-allowed\\!.disabled\\:bg-gray-100',
    );

    expect(wrapper.get('h1').text()).toBe('¿Quién es este Pokemon?');
    expect(wrapper.find('img').attributes('src')).toBe(imageUrl);

    expect(buttons.length).toBe(4);
    buttons.forEach((button) => {
      expect(pokemons).toContain(button.text());
    });
  });

  test('should render button for a new game', async () => {
    // Inicializamos con valores por defecto antes de montar el componente
    (usePokemonGame as Mock).mockReturnValue({
      isLoading: false,
      randomPokemon: pokemonOptions.at(0),
      gameStatus: GameStatus.Won,
      pokemonOptions: pokemonOptions,
      checkAnswer: vi.fn(),
      getNextRound: vi.fn(),
    });
    const wrapper = mount(PokemonGame);

    const button = wrapper.find('[data-test-id="btn-new-game"]');

    expect(button.text()).toBe('Volver a jugar');
  });

  test('should call the getNextRound function when de button is clicked', async () => {

    const spyNextRoundFn = vi.fn();

    // Inicializamos con valores por defecto antes de montar el componente
    (usePokemonGame as Mock).mockReturnValue({
      isLoading: false,
      randomPokemon: pokemonOptions.at(0),
      gameStatus: GameStatus.Won,
      pokemonOptions: pokemonOptions,
      checkAnswer: vi.fn(),
      getNextRound: spyNextRoundFn,
    });
    const wrapper = mount(PokemonGame);

    const button = wrapper.find('[data-test-id="btn-new-game"]');

    await button.trigger('click');

    expect(spyNextRoundFn).toHaveBeenCalledWith(5);
  })
});
