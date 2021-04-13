import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 375,
  },
  textBold: {
    fontWeight: 'bold',
    textDecoration: 'none',
  },
});

const HeroCard = ({ ...hero }) => {
  const classes = useStyles();
  const { id, superhero, alter_ego, first_appearance } = hero;

  return (
    <Card raised={true} className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`./assets/heros/${id}.jpg`}
        title={id}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {superhero}
        </Typography>
        <Typography gutterBottom variant="subtitle1" color="textSecondary">
          {alter_ego}
        </Typography>
        <Typography gutterBottom variant="subtitle2" color="textSecondary">
          {first_appearance}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/hero/${id}`}>
          <Button color="primary" className={classes.textBold}>
            Ver más...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default HeroCard;
