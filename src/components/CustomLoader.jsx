import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Modal } from '@material-ui/core';

import MDSpinner from 'react-md-spinner';
import { FONT_FAMILY } from '../constants/AppConstants';
import { pureWhite } from '../constants/Colors';

const styles = (theme) => ({
  modal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',

    bordeRadius: 10,

    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '50px',
    paddingRight: '50px',
    outline: 'none',
  },
});
const getModalStyle = () => {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    borderRadius: '8px',
    transform: `translate(-${top}%, -${left}%)`,
  };
};

const CustomLoader = (props) => {
  const { classes, showLoader } = props;
  return (
    <Modal
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
      open={showLoader ? showLoader : true}
      disableAutoFocus={true}
      onClose={() => {
        //  this.props.handleModalTouchOutisde();
      }}
    >
      <div style={getModalStyle()} className={classes.modal}>
        <MDSpinner singleColor={'rgb(66, 165, 245)'} />
        <Typography
          style={{
            fontFamily: FONT_FAMILY,
            fontSize: '1rem',
            color: pureWhite,
            marginTop: '5px',
            textAlign: 'center',
          }}
        >
          {props.loadingText ? props.loadingText : 'Please Wait...'}
        </Typography>
      </div>
    </Modal>
  );
};

CustomLoader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomLoader);
