import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import { ReactComponent as YourSvg } from './helmet.svg';
function App() {
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
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='sm'>
        <Typography
          variant='h3'
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            color: 'purple',
            marginTop: '10px',
          }}
        >
          Races
        </Typography>
        <div className={useStyles().root}>
          <Paper className={useStyles().root} square={false}>
            <Grid container spacing={5}>
              <Grid item>
                <Typography variant='body2' className={useStyles().root}>
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
          </Paper>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
