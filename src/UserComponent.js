import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';
import UserGrid from './UserGrid';

function UserComponent() {
  const useStyles = makeStyles({
    root: {
      marginTop: 20,
      padding: '15px',
    },
    numbering: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'end',
    },
    races: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      color: 'purple',
      marginTop: '10px',
    },
    indexing: {
      display: 'flex',
      flexDirection: 'row',
      justifyContenr: 'center',
      alignItems: 'center',
    },
    count: {
      fontWeight: 'bolder',
    },
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='sm'>
        <Typography variant='h3' className={useStyles().races}>
          Races
        </Typography>
        <div className={useStyles().root}>
          <Paper className={useStyles().root} square={false}>
            <UserGrid useStyles={useStyles} />
          </Paper>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default UserComponent;
