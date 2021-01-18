import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  Button: {
    backgroundColor: '#c7c7c7',
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
  className?: string;
}

const SubmitButton: React.FC<Props> = ({ onClick, className, children }) => {
  const classes = useStyle();

  return (
    <button
      onClick={onClick}
      className={[classes.Button, className].join(' ')}
      type='submit'
    >
      {children}
    </button>
  );
};

export default SubmitButton;
