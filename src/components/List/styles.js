import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  header: {
    paddingBottom: '30px',
  },
  formControl: {
    margin: theme.spacing(1), minWidth: 120, width: 150, marginBottom: '30px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '20px',
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '75vh', overflow: 'auto',
  },
}));