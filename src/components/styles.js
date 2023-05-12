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
    marginTop: '',
    width: '490px',
    height: '155px',
    borderRadius: '8px',
  },
  mapCard: {
    width: '560px',
    height: '511px',
  },
}));
