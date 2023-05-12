import React, { Component } from 'react';
import withStyles from './styles';
import logo from '../Images/Graviti Logo 1.png';

class Navbar extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  state = {};
  render() {
    const { classes } = this.props;
    return (
      <>
        <img
          src={logo}
          alt='Graviti'
          width='160px'
          height='69px'
          className={classes.image}
        ></img>
      </>
    );
  }
}

export default withStyles(Navbar);
