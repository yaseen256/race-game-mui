import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { ReactComponent as YourSvg } from './helmet.svg';
import { users } from './data.js';
function UserGrid(props) {
  const { useStyles } = props;
  console.log(users);

  return (
    <Grid container spacing={5}>
      <Grid item className={useStyles().indexing}>
        <Typography className={useStyles().count} variant='body2'>
          1
        </Typography>
      </Grid>
      <Grid item>
        <ButtonBase>
          <YourSvg />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction='column' spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant='subtitle1'>
              Yaseen Saleem
            </Typography>
            <Typography variant='body2' gutterBottom>
              00:00:00 | 80 KM/H
            </Typography>
            <Typography variant='body2' color='textSecondary'>
              Penalty Time 00:00:00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default UserGrid;
