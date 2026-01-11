import { mount } from '@vue/test-utils';
import PokemonOptions from '@/modules/pokemon/components/PokemonOptions.vue';

describe('<PokemonOptions>', () => {
  const options = [
    { id: 1, name: 'Bulbasaur' },
    { id: 2, name: 'Ivysaur' },
    { id: 3, name: 'Venusaur' },
  ];
  /**
   * Vamos a evaluar que los botones del componente renderizan bien su texto,
   * que en este caso es el nombre del Pokemon
   */
  test('should render buttons with correct text', () => {
    const falseAnswer =
      'capitalize disabled:cursor-not-allowed! disabled:bg-gray-100';
    const trueAnswer = '';
    const wrapper = mount(PokemonOptions, {
      props: {
        options,
        blockSelection: false,
        correctAnswer: 1,
      },
    });
    const buttons = wrapper.findAll('button');

    // Esperamos que haya tantos botones como opciones
    expect(buttons.length).toBe(options.length);

    const buttonsClasses =
      'capitalize disabled:cursor-not-allowed! disabled:bg-gray-100';
    buttons.forEach((button, index) => {
      // El texto que aparece en el botón es la propiedad name de las options,
      // es decir, el nombre del Pokemon
      expect(button.text()).toBe(options[index]?.name);

      // Evaluamos las clases del botón
      expect(button.attributes('class')).toBe(buttonsClasses);
    });
  });

  test('should emit selectedOption event when a button is clicked', async () => {
    const wrapper = mount(PokemonOptions, {
      props: {
        options,
        blockSelection: false,
        correctAnswer: 1,
      },
    });
    const [b1, b2, b3] = wrapper.findAll('button');

    // Emitimos el evento click
    await b1?.trigger('click');
    await b2?.trigger('click');
    await b3?.trigger('click');
    // Aquí estamos evaluando el emitted que el console log nos lo devuelve así:
    /**  { 
        selectedOption: [ -- este es el id de la opción seleccionada
            [ 1 ], - posición 0
            [ 2 ], - posición 1
            [ 3 ], - posición 2
         ], 
        click: [ [ [MouseEvent] ] ] }
*/

    expect(wrapper.emitted().selectedOption?.[0]).toEqual([1]);
    expect(wrapper.emitted().selectedOption?.[1]).toEqual([2]);
    expect(wrapper.emitted().selectedOption?.[2]).toEqual([3]);
  });

  test('should disable buttons when blockSelection prop is true', () => {
    const wrapper = mount(PokemonOptions, {
      props: {
        options,
        blockSelection: true,
        correctAnswer: 1,
      },
    });
    const buttons = wrapper.findAll('button');
    buttons.forEach((button) => {
      const attributes = Object.keys(button.attributes());
      expect(attributes).toContain('disabled');
    });
  });

  test('should apply correct stylling to buttons based on correct/incorrect answer', () => {
    const correctAnswer = 2;
    const wrapper = mount(PokemonOptions, {
      props: {
        options,
        blockSelection: true,
        correctAnswer,
      },
    });

    const buttons = wrapper.findAll('button');
    buttons.forEach((button, index) => {
      if (options[index]?.id === correctAnswer) {
        expect(button.classes()).toContain('correct');
      } else {
        expect(button.classes()).toContain('incorrect');
      }
    });
  });
});
