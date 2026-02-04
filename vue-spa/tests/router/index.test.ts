/* eslint-disable @typescript-eslint/no-explicit-any */
import App from '@/App.vue';
import router from '@/router';
import { mount } from '@vue/test-utils';
import type { RouteLocationNormalized } from 'vue-router';

describe('Router', () => {
  const wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  });
  test('renders HomePage when visting /', async () => {
    await router.replace('/');
    await router.isReady();

    expect(wrapper.html()).toContain('Bienvenido a nuestro sitio web');
  });

  test('renders FeautureView when visiting /features', async () => {
    await router.replace('/features');
    await router.isReady();

    expect(wrapper.html()).toContain('Master Cleanse Reliac Heirloom');

    // await router.replace('/');
    // await router.push({ name: 'features' });
    // expect(wrapper.html()).toContain('Master Cleanse Reliac Heirloom');
  });

  test('renders PricingView when visiting /pricing', async () => {
    await router.replace('/pricing');
    await router.isReady();

    expect(wrapper.html()).toContain('Flexible');
  });

  test('renders ContactView when visiting /contact', async () => {
    await router.replace('/contact');
    await router.isReady();

    expect(wrapper.html()).toContain(
      'Post-ironic portland shabby chic echo park, banjo fashion axe',
    );
  });

  test('renders LoginPage when visiting /pokemon/:id with no authentication', async () => {
    localStorage.clear();

    await router.replace('/pokemon/30');
    await router.isReady();

    expect(wrapper.find('h1').text()).toContain('Login');
  });

  test('renders PokemonPage when visitng /pokemon/:id with authentication', async () => {
    localStorage.setItem('userId', 'ABC-123');
    await router.replace('/pokemon/30');
    await router.isReady();
    expect(wrapper.find('h1').text()).toContain('Pokémon #30');
  });

  test('should convert the segment into numbers', () => {
    const route: RouteLocationNormalized = {
      matched: [],
      fullPath: '/pokemon/2',
      query: {},
      hash: '',
      redirectedFrom: undefined,
      name: undefined,
      path: '',
      params: { id: '2' },
      meta: {},
    };
    const pokemonRoute = router.getRoutes().find((route) => route.name === 'pokemon');

    const props = (pokemonRoute?.props as any).default(route);

    expect(pokemonRoute).toBeTruthy();
    expect(props.id).toBe(2);
  });

  test('should return default value if argument is not a number', () => {
    const route: any = {
      fullPath: '/pokemon/2',
      params: { id: '2abc' },
    };
    const pokemonRoute = router.getRoutes().find((route) => route.name === 'pokemon');

    const props = (pokemonRoute?.props as any).default(route);

    expect(pokemonRoute).toBeTruthy();
    expect(props.id).toBe(1);
  });
});
