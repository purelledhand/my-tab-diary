import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  Header: {
    fontSize: 16,
    backgroundColor: 'transparent',
    borderBottom: '3px solid #c7c7c7e0',
    padding: 4,
  },
});

const WindowHeader: React.FC = ({ children }) => {
  const classes = useStyle();

  return (
    <Grid item className={classes.Header}>
      {children}
    </Grid>
  );
};

export default WindowHeader;
