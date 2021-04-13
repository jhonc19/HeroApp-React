import React from 'react';
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Button,
} from '@material-ui/core';
import { useParams } from 'react-router';

import getHeroById from './../utils/getHeroById';

const useStyles = makeStyles(() => ({
  itemText: {
    display: 'block',
  },

  title: {
    padding: '0 0 0 0 !important',
  },

  container: {
    padding: '75px 0 75px 0',
  },
}));

const HeroPage = ({ history }) => {
  const { heroeId } = useParams();
  const hero = getHeroById(heroeId);
  const { id, superhero, alter_ego, first_appearance, characters } = hero;
  const charactersArray = characters.split(',');
  const classes = useStyles();

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push('/marvel');
    } else {
      history.goBack();
    }
  };

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs='auto'>
          <img
            src={`../assets/heros/${id}.jpg`}
            alt={alter_ego}
            className="heroImage"
          ></img>
        </Grid>
        <Grid item xs='auto' className="heroFeatures">
          <h1 className={classes.title}>{superhero}</h1>
          <List dense={false} className={classes.listItems}>
            <ListItem className={classes.itemText}>
              <ListItemText primary="Alter Ego" secondary={alter_ego} />
              <ListItemText
                primary="First Appearance"
                secondary={first_appearance}
              />
            </ListItem>
          </List>
          <h1 className={classes.title}>Characters</h1>
          <List dense={false} className={classes.listItems}>
            <ListItem className={classes.itemText}>
              {charactersArray.map((character) => (
                <ListItemText key={character} primary={character} />
              ))}
            </ListItem>
          </List>
          <Button variant="outlined" color="secondary" onClick={handleReturn}>
            Return
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroPage;
