import { useCounter } from '@/composables/useCounter';
import { describe, expect, test } from 'vitest';

describe('useCounter', () => {
  test('initializes counter with default values', () => {
    const { counter, square } = useCounter();

    expect(counter.value).toBe(5);
    expect(square.value).toBe(5 * 5);
  });

  test('initializes counter with provided inital value', () => {
    const initialValue = 10;
    const { counter, square } = useCounter(initialValue);

    expect(counter.value).toBe(initialValue);
    expect(square.value).toBe(initialValue * initialValue);
  });

  test('increments counter correctly', () => {
    const { counter, square } = useCounter();
    counter.value++;
    expect(counter.value).toBe(6);
    expect(square.value).toBe(6 * 6);
  });
});
