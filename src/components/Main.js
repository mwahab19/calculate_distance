import React, { Component } from 'react';
import withStyles from './styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { TextField, Typography } from '@mui/material';
import Navbar from './Navbar';
import InputAdornment from '@mui/material/InputAdornment';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import AddLocationIcon from '@mui/icons-material/AddLocation';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: '',
      destination: '',
      stops: '',
    };
  }
  state = {};
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.navbar}>
          <Navbar />
        </div>

        <div>
          <Typography className={classes.heading}>
            Let's calculate <b>distance</b> from Google maps
          </Typography>
          <Grid container className={classes.content}>
            <Grid item>
              <Typography className={classes.inputHeading}>Origin</Typography>
              <TextField
                autoFocus
                margin='dense'
                id='origin'
                hiddenLabel
                type='text'
                variant='outlined'
                value={this.state.origin}
                className={classes.inputbox}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <TripOriginIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Typography className={classes.inputHeading} marginTop={2}>
                Stop
              </Typography>
              <TextField
                autoFocus
                margin='dense'
                id='stop'
                hiddenLabel
                type='text'
                fullWidth
                variant='outlined'
                value={this.state.stop}
                className={classes.inputbox}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'></InputAdornment>
                  ),
                }}
              />
              <Typography className={classes.inputHeading} marginTop={2}>
                Destination
              </Typography>
              <TextField
                autoFocus
                margin='dense'
                id='destination'
                hiddenLabel
                type='text'
                fullWidth
                variant='outlined'
                value={this.state.destination}
                className={classes.inputbox}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <AddLocationIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item>
              <Button
                variant='contained'
                disableRipple
                style={{
                  backgroundColor: '#1B31A8',
                  borderRadius: '32px',
                  width: '141px',
                  height: '52px',
                  marginTop: '122px',
                  marginLeft: '150px',
                }}
              >
                Calculate
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(Main);
