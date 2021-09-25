import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './Header.module.scss';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Component = ({className}) => {
  const classes = useStyles();

  return (
    <div className={clsx(className, styles.root)}>
      <AppBar
        position="static"
        className={styles.appBar}
      >
        <Toolbar>

          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            href='/'
          >
            <img src="https://i.postimg.cc/J4TbbQJ8/MSD-logo.png" alt="logo" className={styles.logo} />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            <div className={styles.title}>
              <span>Marcin Starulak</span>
              <p>Dietetyk</p>
            </div>
          </Typography>

          <div className={styles.menu}>
            <Button
              color="inherit"
              href='/about'
            >
              <p>O mnie</p>
            </Button>
            <Button
              color="inherit"
              href='/gallery'
            >
              <p>Galeria</p>
            </Button>
            <Button
              color="inherit"
              href='/contact'
            >
              <p>Kontakt</p>
            </Button>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Header,
};
