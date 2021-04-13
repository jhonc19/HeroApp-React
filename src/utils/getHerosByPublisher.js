import { heros } from '../data/heros';

const getHerosByPublisher = (publisher) => {
  const validPublishers = ['DC Comics', 'Marvel Comics'];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`Publisher "${publisher}" no es correcto`);
  }

  return heros.filter((hero) => hero.publisher === publisher);
};

export default getHerosByPublisher;
