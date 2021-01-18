import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  Button: {
    backgroundColor: '#c7c7c7e0',
    width: 20,
    color: '#ffffff',
    fontSize: 14,
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    '&:focus': { outline: 0 },
  },
});

export interface Props {
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ onClick, children }) => {
  const classes = useStyle();

  return (
    <button
      onClick={onClick}
      className={classes.Button}
      type='button'
    >
      {children}
    </button>
  );
};

export default Button;
