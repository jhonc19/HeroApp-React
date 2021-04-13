import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Header from './components/Header';
import MarvelPage from './pages/MarvelPage';
import DcPage from './pages/DcPage';
import HeroPage from './pages/HeroPage';

import './App.css';

const App = () => (
  <React.Fragment>
    <Header />
    <Switch>
      <Route exact path="/marvel" component={MarvelPage} />
      <Route exact path="/dc" component={DcPage} />
      <Route exact path="/hero/:heroeId" component={HeroPage} />
      <Redirect to="/marvel" />
    </Switch>
  </React.Fragment>
);

export default App;
