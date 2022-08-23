import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

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

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

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