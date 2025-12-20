import heroes, { owners, type Owner } from "../data/heroes";

// console.log(owners, heroes);

export const getHeroById = (id: number) => {
  return heroes.find((hero) => hero.id === id);
};

// console.log(getHeroById(100));
// export const getHeroesByOwner = (owner: string) => {
//     return heroes.filter(hero => hero.owner === owner)
// }

export const getHeroesByOwner = (owner: Owner) => {
  return heroes.filter((hero) => hero.owner === owner);
};

// console.log(getHeroesByOwner("DC"));
// console.log(getHeroesByOwner("Marvel"));
