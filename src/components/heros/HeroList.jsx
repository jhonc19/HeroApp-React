import React, { useMemo } from 'react';

import { Grid } from '@material-ui/core';

import HeroCard from './HeroCard';

import getHerosByPublisher from './../../utils/getHerosByPublisher';

const HeroList = ({ publisher }) => {
  const heros = useMemo(() => getHerosByPublisher(publisher), [publisher]);

  return (
    <Grid container spacing={3}>
      {heros.map((hero) => {
        return (
          <Grid key={hero.id} item xs={3}>
            <HeroCard  {...hero} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default HeroList;
