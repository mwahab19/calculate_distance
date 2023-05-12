import React, { Component } from 'react';
import withStyles from './styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { TextField, Typography, Paper } from '@mui/material';
import Navbar from './Navbar';
import InputAdornment from '@mui/material/InputAdornment';
import OriginIcon from '../Images/Origin Icon.png';
import DestinationIcon from '../Images/Destination Icon.png';
import StopIcon from '../Images/Stop Icon.png';
import addStop from '../Images/Add--alt.png';

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
            <Grid item xs={8} lg={4}>
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
                      <img src={OriginIcon} alt='origin'></img>
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
                    <InputAdornment position='start'>
                      <img src={StopIcon} alt='stop'></img>
                    </InputAdornment>
                  ),
                }}
              />
              <Grid container className={classes.addNewStop}>
                <img
                  src={addStop}
                  alt='addStop'
                  className={classes.addNewStopImage}
                ></img>
                <Typography className={classes.addNewStopContent}>
                  Add another stop
                </Typography>
              </Grid>

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
                      <img src={DestinationIcon} alt='destination'></img>
                    </InputAdornment>
                  ),
                }}
              />
              <div className={classes.distancebox}>
                <Grid item>Distance</Grid>
                <Grid item> Calculate</Grid>
              </div>
            </Grid>

            <Grid item xs={4} lg={2}>
              <Button
                variant='contained'
                disableRipple
                style={{
                  backgroundColor: '#1B31A8',
                  borderRadius: '32px',
                  width: '141px',
                  height: '52px',
                  marginTop: '122px',
                  marginLeft: '50px',
                }}
              >
                Calculate
              </Button>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Paper></Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(Main);
