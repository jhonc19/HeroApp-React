import React from 'react';
import { Container } from '@material-ui/core';
import HeroList from '../components/heros/HeroList';

const DcPage = () => (
  <Container maxWidth="lg" className="container">
    <h1>Héroes DC Comics</h1>
    <HeroList publisher="DC Comics" />
  </Container>
);

export default DcPage;
