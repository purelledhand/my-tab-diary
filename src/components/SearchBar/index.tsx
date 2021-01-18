import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SubmitButton from 'components/SubmitButton';

const useStyle = makeStyles({
  Wrapper: {
    boxShadow: '3px 3px 9px 2px rgba(143, 143, 143, 0.5)',
    width: 663,
    height: 53,
  },
  SearchBar: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: 580,
    color: '#ffffff',
    fontSize: 18,
    border: '5px solid #c7c7c7',
    cursor: 'pointer',
    height: 42,
    padding: '0 12px',
    fontFamily: 'NeoDunggeunmo',
    '&:focus': { outline: 0 },
  },
  SearchButton: {
    width: 48,
    height: 52,
    border: '5px solid #c7c7c7',
    fontFamily: 'NeoDunggeunmo',
  },
});

const SearchBar: React.FC = () => {
  const classes = useStyle();

  return (
    <Grid container justify='center'>
      <Grid container item alignItems='center' className={classes.Wrapper}>
        <input
          className={classes.SearchBar}
          type='text'
        />
        <SubmitButton className={classes.SearchButton}>
          enter
        </SubmitButton>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
