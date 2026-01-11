import { createApp } from 'vue';

export const withSetup = (composable: () => any) => {
  let result: any;

  const app = createApp({
    setup(props) {
      result = composable();

      return () => {};
    },
  });

  app.mount(document.createElement('div'));
  return [result, app] as const;
};
