import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SvgIcon from '@material-ui/core/SvgIcon';
import HistoryIcon from '@material-ui/icons/History';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    marginRight: '.2em',
  },
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Testing task
          </Typography>
          <Button color='inherit' exact component={NavLink} to='/'>
            <SvgIcon className={classes.icon}>
              <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />
            </SvgIcon>
            Home
          </Button>
          <Button color='inherit' component={NavLink} to='/history'>
            <HistoryIcon className={classes.icon} />
            History
          </Button>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default React.memo(Nav);
