// function greetPerson(name: string) {
//   return `Hola ${name}`;
// }

// const greetPerson = (name: string) => {
//   return `Hola, ${name}`;
// };
// const greetPerson = (name: string) => `Hola, ${name}`

//console.log(greetPerson('Pilar'));

// const getUser = () => {
//     return {
//         uid: 'ABC-123',
//         username: 'Tony001'
//     }
// }

// const getUser = (uid: string) => ({
//     uid: uid,
//     username: 'Tony001'
// })

// console.log(getUser('XYZ-789'));

const heroes = [
  {
    id: 1,
    name: "Batman",
  },
  {
    id: 2,
    name: "Superman",
    power: "Super fuerza",
  },
];

const hero = heroes.find((h) => h.id === 1);

console.log(hero?.id);
