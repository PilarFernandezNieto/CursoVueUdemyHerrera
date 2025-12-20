export const person = {
  lastName: "Stark",
  age: 45,
  address: {
    city: 'New York',
    zip: 51444,
    lat: 14.23454,
    lng: 34.4155454
  }
}; //as const;

// Aunque el objeto sea una constante, sí que pueden modificase sus propiedades. 
// Lo que no se puede es modificar todo el objeto person.
// Si queremos que sus propiedades no se puedan modificar, añadimos 'as const' al objeto
// Y ni siquiera nos dejará modificar sus propiedades

// En JavaScript todos los objetos pasan por referencia. Cualquier modificación que se haga a person2
// pasará a person por referencia
// Los datos primitivos pasan por valor
// Por referencia significa que no se copia el objeto, se copia la dirección donde está el objeto en memoria


// const person3 = {...person};
const person2 = structuredClone(person);

person2.lastName = 'Parker';


console.log(person);
console.log(person2);


