import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  explore: {
    width: '30%',
  },
  title: {
    display: 'none',
    width: '40%',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
    marginRight: theme.spacing(1),
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(1), width: '60%' },
  },
  searchIcon: {
    padding: theme.spacing(0, 2), height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    paddingLeft: '20%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0), paddingLeft: `calc(1em + ${theme.spacing(1)}px)`, transition: theme.transitions.create('width'), width: '100%', [theme.breakpoints.up('md')]: { width: '20ch' },
  },
  toolbar: {
    display: 'flex', justifyContent: 'space-between',
  },
}));