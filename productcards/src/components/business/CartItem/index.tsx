import React from 'react'
import { CartProps } from './types';

const CartItem = ({ cartItem }: CartProps) => {
    console.log(cartItem, '=> cart item')
  return (
    <div>{cartItem.shoe}</div>
  )
};

export default CartItem