export function sum(a: number, b: number) {
  return a + b;
}

export const addArray = (arr: number[]): number => {
  return arr.reduce((anterior, actual) => anterior + actual, 0);
};
