import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { ReactComponent as YourSvg } from './helmet.svg';
import { usersAPI } from './data.js';
import { SvgIcon, makeStyles } from '@material-ui/core';
import Helmet from './Helmet';

function UserGrid(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let sortedUsersAPI = [];
    sortedUsersAPI = usersAPI.sort(function (a, b) {
      return a.time.localeCompare(b.time);
    });

    console.log(sortedUsersAPI);
    return setUsers(sortedUsersAPI);
  }, []);

  return (
    users &&
    users.length &&
    users.map((user, index) => (
      <Grid container spacing={5}>
        <Grid item style={{ display: 'flex', flexDirection: 'row', justifyContenr: 'center', alignItems: 'center' }}>
          <Typography
            style={{
              fontWeight: 'bolder',
            }}
            variant='body2'
          >
            {index}
          </Typography>
        </Grid>
        <Grid item>
          <ButtonBase>
            <Helmet user={user} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction='column' spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant='subtitle1'>
                {user.name}
              </Typography>
              <Typography variant='body2' gutterBottom>
                {user.time} | {user.speed} KM/H
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    ))
  );
}

export default UserGrid;
