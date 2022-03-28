import { FC } from 'react'
import classes from './button.module.css';
import { Props } from './types';

const Button: FC<Props> = ({ children }) => {
  return (
    <button className={classes.button}>{children}</button>
  )
}

export default Button