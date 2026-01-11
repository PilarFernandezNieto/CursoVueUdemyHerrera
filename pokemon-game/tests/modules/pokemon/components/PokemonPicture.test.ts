import PokemonPicture from '@/modules/pokemon/components/PokemonPicture.vue';
import { mount } from '@vue/test-utils';

describe('<PokemonPicture>', () => {
  const pokemonId = 25;
  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;
  test('should render the nidden image when showPokemon prop is false', async () => {
    const wrapper = mount(PokemonPicture, {
      props: {
        pokemonId,
        showPokemon: false,
      },
    });

    const image = wrapper.find('img');
    // expect(image.attributes('src')).toBe(imageSrc);
    const attributes = image.attributes();
    expect(attributes).toEqual(
      expect.objectContaining({
        class: 'brightness-0',
        src: imageSrc,
      }),
    );
  });
  test('should render the nidden image when showPokemon prop is true', async () => {
    const wrapper = mount(PokemonPicture, {
      props: {
        pokemonId,
        showPokemon: true,
      },
    });
    const image = wrapper.find('img');
    const attributes = image.attributes();

    expect(attributes).toEqual(
      expect.objectContaining({
        src: imageSrc,
        class: 'fade-in',
      }),
    );
  });
});
