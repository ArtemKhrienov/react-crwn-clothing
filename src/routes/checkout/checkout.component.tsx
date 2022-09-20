import { useSelector } from 'react-redux';

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';

import {
  CheckoutContainer,
  HeaderContainer,
  TableHeader,
  TotalAmount
} from './checkout.styles';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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
      <PaymentForm />
    </CheckoutContainer>
  );
}

export default Checkout;