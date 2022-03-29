import { FC } from 'react'
import classes from './button.module.css';
import { Props } from './types';

const Button: FC<Props> = ({ children, onClick, isDisabled }) => {
  return (
    <button
      style={{
        cursor: !isDisabled ? 'pointer' : 'not-allowed'
      }}
      disabled={isDisabled}
      onClick={onClick}
      className={classes.button}
    >
      {children}
    </button>
  )
}

export default Button