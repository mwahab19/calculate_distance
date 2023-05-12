import React, { Component } from 'react';
import withStyles from './styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { TextField, Typography } from '@mui/material';
import Navbar from './Navbar';
import InputAdornment from '@mui/material/InputAdornment';
import OriginIcon from '../Images/Origin Icon.png';
import DestinationIcon from '../Images/Destination Icon.png';
import StopIcon from '../Images/Stop Icon.png';
import addStop from '../Images/Add--alt.png';
import { API_GET_DISTANCE } from '../constants/APIEndPoints';
//import { callGetApi } from '../constants/APIManagers';
import CustomLoader from './CustomLoader';
import CustomSnackbar from './Snackbar';
import axios from 'axios';
import MapView from './MapView';

import { GOOGLE_API_KEY } from '../config';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: '',
      destination: '',
      stops: '',
      showLoader: false,
      showSnackbar: false,
      snackbarVariant: '',
      snackBarMessage: '',
      position: 'left',
    };
  }

  fnShowSnackbar = (msg = '', variant = 'warning') => {
    this.setState(
      {
        showSnackbar: true,
        snackBarMessage: msg,
        snackbarVariant: variant,
        showLoader: false,
      },
      () => {}
    );
  };

  handleCalculate = async () => {
    try {
      this.setState({ showLoader: true });
      let validated = this._validate();
      if (validated && validated.validate) {
        const { origin, destination } = this.state;
        let URI =
          API_GET_DISTANCE +
          `?origins=${origin}&destinations=${destination}&key=${GOOGLE_API_KEY}`;
        let config = {
          method: 'get',
          url: URI,
          headers: {},
        };
        let res = await axios(config);
        console.log('response:::', res);
        this.setState({ showLoader: false });
      } else {
        this.fnShowSnackbar(validated.msg, 'warning');
      }
    } catch (err) {
      console.log(`Error in calculating the distance***`, err);
      this.fnShowSnackbar('Error in calculating the distance', 'error');
    }
  };

  _validate = () => {
    const { origin, destination } = this.state;
    let validate = true;
    let msg = '';
    if (!origin || origin === undefined || origin === '') {
      validate = false;
      msg = `Please enter the origin place`;
    } else if (
      !destination ||
      destination === undefined ||
      destination === ''
    ) {
      validate = false;
      msg = `Please enter the destination place`;
    }
    let obj = { validate: validate, msg: msg };
    return obj;
  };

  handleSnackBarClose = () => {
    this.setState({ showSnackbar: false });
  };

  render() {
    const { classes } = this.props;
    const { origin, destination } = this.state;
    console.log('origin*', origin);
    console.log('destination**', destination);
    return (
      <div className={classes.container}>
        <div className={classes.navbar}>
          <Navbar />
        </div>

        <div>
          <Typography className={classes.heading}>
            Let's calculate <b>distance</b> from Google maps
          </Typography>
          <Grid container className={classes.content} display='flex'>
            <Grid item xs={3} lg={3}>
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
                onChange={(e) => {
                  this.setState({ origin: e.target.value });
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
                onChange={(e) => {
                  this.setState({ stop: e.target.value });
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
                onChange={(e) => {
                  this.setState({ destination: e.target.value });
                }}
              />
              {origin &&
              origin !== undefined &&
              origin !== '' &&
              destination &&
              destination !== undefined &&
              destination !== '' ? (
                <div className={classes.distancebox}>
                  <Grid item>
                    <Typography
                      style={{
                        fontSize: '20px',
                      }}
                    >
                      <b>Distance</b>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>
                      The distance between {origin} and {destination} via the
                      seleted route is d kms.
                    </Typography>
                  </Grid>
                </div>
              ) : null}
            </Grid>
            <Grid item xs={3} lg={2} className={classes.buttongrid}>
              <Button
                variant='contained'
                disableRipple
                style={{
                  backgroundColor: '#1B31A8',
                  borderRadius: '32px',
                  width: '141px',
                  height: '52px',
                  marginTop: '122px',
                  marginLeft: '100px',
                }}
                onClick={() => {
                  this.handleCalculate();
                }}
              >
                Calculate
              </Button>
            </Grid>
            <Grid item xs={6} lg={6}>
              <div>
                <MapView />
              </div>
            </Grid>
          </Grid>
        </div>

        {this.state.showLoader && (
          <CustomLoader showLoader={this.state.showLoader} />
        )}
        <CustomSnackbar
          showSnackbar={this.state.showSnackbar}
          variant={this.state.snackbarVariant}
          message={this.state.snackBarMessage}
          onClose={this.handleSnackBarClose}
          position={this.state.position}
        />
      </div>
    );
  }
}

export default withStyles(Main);
