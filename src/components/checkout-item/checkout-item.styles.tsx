import styled, { css } from 'styled-components';

const textBlockStyles = css`
  width: 23%;
`

export const ClearButton = styled.span`
  padding-left: 12px;
  cursor: pointer;
`

export const Price = styled.span`
  ${textBlockStyles};
`

export const Name = styled.span`
  ${textBlockStyles};
`

export const QuantityContainer = styled.span`
  display: flex;
  ${textBlockStyles};
`

export const QuantityArrow = styled.div`
  cursor: pointer;
`

export const QuantityValue = styled.span`
  margin: 0 10px;
`

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`