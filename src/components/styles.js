import { withStyles } from '@material-ui/styles';

export default withStyles((theme) => ({
  container: {
    width: '100%',
    height: '700px',
    backgroundColor: '#F4F8FA',
    overflowX: 'hidden',
    overflowY: 'hidden',
  },

  heading: {
    color: '#1B31A8',
    textAlign: 'center',
    marginTop: '20px !important',
    fontWeight: '400',
    fontSize: '20px',
    fontFamily: 'Work Sans',
  },
  inputHeading: {
    fontSize: '14px',
    fontWeight: '400',
    fontFamily: 'IBM Plex Sans',
    color: '#000',
    fontStyle: 'normal',
  },
  navbar: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '80px',
  },
  image: {
    margin: '6px 67px 5px 67px',
  },
  inputbox: {
    background: 'white',
    width: '350px !important',
  },
  content: {
    padding: '3rem',
    marginLeft: '5rem',
  },
  button: { backgroundColor: '#1B31A8' },
  buttongrid: {
    display: 'block',
    width: '90%',
    marginLeft: '200px',
  },
  addNewStop: { marginLeft: '200px' },
  addNewStopImage: {
    width: '18px',
    height: '18px',
    padding: '4px',
  },
  addNewStopContent: {
    padding: '3px',
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '18px',
  },
  distancebox: {
    marginTop: '30px',
    width: '400px',
    height: '85px',
    border: '1px',
    borderRadius: '8px',
    backgroundColor: 'white',
    padding: '20px',
  },
  mapCard: {
    width: '200px',
    height: '150px',
  },
  distanceText: {
    fontStyle: 'IBM Plex Sans',
    padding: '30px',
    fontWeight: '700',
    fontSize: '20px',
    backgroundColor: 'white',
  },
}));
