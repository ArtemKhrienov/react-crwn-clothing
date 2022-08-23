import { useContext } from 'react';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { CartContext } from '../../contexts/cart.context';

import {
  CheckoutContainer,
  HeaderContainer,
  TableHeader,
  TotalAmount
} from './checkout.styles';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <HeaderContainer>
        <TableHeader>
          <span>Product</span>
        </TableHeader>
        <TableHeader>
          <span>Description</span>
        </TableHeader>
        <TableHeader>
          <span>Quantity</span>
        </TableHeader>
        <TableHeader>
          <span>Price</span>
        </TableHeader>
        <TableHeader>
          <span>Remove</span>
        </TableHeader>
      </HeaderContainer>

      {
        cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
      }

      <TotalAmount>Total: ${cartTotal}</TotalAmount>
    </CheckoutContainer>
  );
}

export default Checkout;