import { Map, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import withStyles from './styles';

const mapStyles = {
  width: '100%',
  height: '100%',
};

const containerStyle = {
  width: '50%',
  height: '65%',
};
class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc_x: '47.444',
      loc_y: '-122.176',
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{
          lat: this.state.loc_x,
          lng: this.state.loc_y,
        }}
        containerStyle={containerStyle}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAYBivEevsC3sXYWfY6n9803tvASqB0TUI',
})(MapView);
