import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  Container: {
    width: 240,
    backgroundColor: '#ad93e0',
    border: '3px solid #c7c7c7e0',
    color: '#ffffff',
    boxShadow: '3px 3px 9px 2px rgba(143, 143, 143, 0.5)',
  },
});

const Window: React.FC = ({ children }) => {
  const classes = useStyle();

  return (
    <Grid container item direction='column' className={classes.Container}>
      { children }
    </Grid>
  );
};

export default Window;
