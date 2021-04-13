import { heros } from '../data/heros';

const getHeroById = (id) => {
  return heros.find((hero) => hero.id === id);
};

export default getHeroById;
