import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart
} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CartItem as TCartItem } from '../../store/cart/cart.types';

import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  QuantityContainer,
  QuantityArrow,
  QuantityValue,
  Price,
  ClearButton
} from './checkout-item.styles';

type CheckoutItemProps = {
  cartItem: TCartItem;
}

const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <QuantityContainer>
        <QuantityArrow onClick={removeItemHandler}>&#10094;</QuantityArrow>
        <QuantityValue>{quantity}</QuantityValue>
        <QuantityArrow onClick={addItemHandler}>&#10095;</QuantityArrow>
      </QuantityContainer>
      <Price>{price}</Price>
      <ClearButton onClick={clearItemHandler}>&#10005;</ClearButton>
    </CheckoutItemContainer>
  );
}

export default CheckoutItem;