import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  Description: {
    fontSize: 14,
    backgroundColor: '#c7c7c7e0',
    padding: 4,
  },
});

const WindowContent: React.FC = ({ children }) => {
  const classes = useStyle();

  return (
    <Grid container item className={classes.Description}>
      {children}
    </Grid>
  );
};

export default WindowContent;
