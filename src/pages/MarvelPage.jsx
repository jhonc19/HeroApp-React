import React from 'react';
import { Container } from '@material-ui/core';
import HeroList from '../components/heros/HeroList';

const MarvelPage = () => (
  <Container maxWidth="lg" className="container">
    <h1>Héroes Marvel</h1>
    <HeroList publisher="Marvel Comics" />
  </Container>
);
export default MarvelPage;
