import { expect, test, describe } from 'vitest';
import { sum, addArray } from '../../src/helpers/sum';

describe('add function', () => {
  test('adds 1 + 2 to equal 3', () => {
    // Preparación
    const a = 2;
    const b = 2;

    // Estímulo
    const result = sum(a, b);

    // Comportamiento esperado
    expect(result).toBe(a + b);

    //   expect(sum(1, 2)).toBe(3);
    //   if (sum(1, 2) !== 4) {
    //     throw new Error('El resultado debería de ser 3');
    //   }
  });
});

describe('add array function', () => {
  test('Suma 1 + 2 + 3 y el resultado es 6', () => {
    // Preparación
    const a = 1;
    const b = 2;
    const c = 3;

    const array = [a, b, c];

    // Estímulo
    const result = addArray(array);

    // Comportamiento esperado
    expect(result).toBe(a + b + c);
  });

  test('Devolverá 0 si el array está vacío', () => {
    // Preparación
    const array = [];

    // Estímulo - Acción
    const result = addArray(array);

    // Comportamiento esperado
    expect(result).toBe(0);
  });
});
