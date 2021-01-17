import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Logo from 'components/Logo';
import TodoWindow from 'components/ToDoWindow';
import TopSitesList from 'components/TopSitesList';

const useStyle = makeStyles({
  Player: {
    position: 'fixed',
    top: 0,
    zIndex: -1,
  },
  Container: {
    padding: 24,
    width: '100vw',
    height: '100vh',
  },
  Link: {
    width: 240,
    fontSize: 12,
  },
  Right: { textAlign: 'right' },
});

const Main: React.FC = () => {
  const classes = useStyle();

  return (
    <>
      <Grid container wrap='nowrap' direction='column' justify='space-between' className={classes.Container}>
        <Header>
          <TodoWindow />
          <Logo />
          <TopSitesList />
        </Header>
        <Footer>
          <Grid item className={classes.Link}>
            <a href='https://window-swap.com/window' target='__blank'>window-swap.com</a>
          </Grid>
          <Grid item className={[classes.Link, classes.Right].join(' ')} justify='flex-end'>
            <a href='https://github.com/purelledhand/for-you' target='__blank'>github</a>
          </Grid>
        </Footer>
      </Grid>
    </>
  );
};

export default Main;
