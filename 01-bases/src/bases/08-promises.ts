// console.log("inicio");

import type { Hero } from "../data/heroes";
import { getHeroById } from "./07-imp-exp";

// new Promise((resolve, reject) => {
//   // console.log("Cuerpo de la promesa");
//   setTimeout(() => {
//     // resolve("Mi amigo cumplió");
//     reject("Mi amigo no cumplió")
//   }, 1000);
// }).then((message) => {
//   console.log(message);
// })
// .catch(errorMessage => {
//     console.log(errorMessage);

// } )
// .finally(() => {
//     console.log("Fin de la promesa");

// })
// console.log("final");

const getHeroByIdAsync = (id: number): Promise<Hero> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);

      if (hero) {
        resolve(hero);
      } else {
        reject(`Héroe no encontrado con el ii ${id}`);
      }
    }, 1500);
  });
};

getHeroByIdAsync(1)
.then(hero => {
    console.log("El nombre es ", hero.name);
    
})

