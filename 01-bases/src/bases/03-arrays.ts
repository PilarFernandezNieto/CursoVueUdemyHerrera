// Esto convierte al array en una constante de sólo lectura
// const numberArray = [1,2,3,4,5] as const;

export const numberArray = [1,2,3,4,5];

// numberArray.push(6);

// const numberArray2 = numberArray;
const numberArray2 = [...numberArray];
numberArray2.push(7);



console.log(numberArray);
console.log(numberArray2);

